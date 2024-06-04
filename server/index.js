const { ApolloServer, PubSub } = require('apollo-server-express');
const express = require('express');
const { dbConnection } = require('./db');
const cors = require('cors');
const typeDefs = require('./graphql/typeDefs');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const resolvers = require('./graphql/resolvers');

dotenv.config();

const pubsub = new PubSub();
const PORT = 5001;

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req, pubsub }),
});

server.applyMiddleware({ app });

dbConnection();

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>{
  res.json("this is it")
})

const otpSchema = new mongoose.Schema({
  email: String,
  otp: String,
  createdAt: { type: Date, default: Date.now, expires: 300 }, // OTP expires in 5 minutes
});

const Otp = mongoose.model('Otp', otpSchema);

// Nodemailer setup
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,   // from https://security.google.com/settings/security/apppasswords 
  },
});
app.post('/generate-otp', async (req, res) => {
  try{
const { email } = req.body;
const otp = Math.floor(100000 + Math.random() * 900000).toString();

// Save OTP in database
const newOtp = new Otp({ email, otp });
await newOtp.save();

// Send OTP via email
const mailOptions = {
  from: process.env.EMAIL_USER,
  to: email,
  subject: 'Your OTP Code',
  text: `Your OTP code is ${otp}`,
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return res.status(500).send(error);
  }
  res.status(200).send('OTP sent successfully');
  
})
}catch(e){
  res.json(e)
};
});

// Validate OTP
app.post('/validate-otp', async (req, res) => {
const { email, otp } = req.body;

const validOtp = await Otp.findOne({ email, otp });
if (validOtp) {
  return res.status(200).send('OTP validated successfully');
}
res.status(400).send('Invalid OTP');
});


app.listen(PORT, () => {
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
});
