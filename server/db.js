const mongoose=require('mongoose');

exports.dbConnection =async()=>{
    mongoose.set('strictQuery',true)
    await mongoose.connect('mongodb+srv://anideepkalia:anideepkalia@cluster0.d9ep4jo.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        .then(()=>{
            console.log('Db Connected')
        }).catch((err)=>{
            console.log(err)
        })
}