import Header from "../components/Header";
import { useState } from "react";

function ContactUsPage() {
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
    const [email, setEmail] = useState("");
    const [button, setButton] = useState("Contact Us");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (name && message && subject && email) {
            try {
                setButton("Sending...");
                setButton("Contact Us");
                setSuccessMessage("Message sent!");
                setTimeout(() => {
                    setSuccessMessage(null);
                }, 2000);
                setName("");
                setMessage("");
                setSubject("");
                setEmail("");
            } catch (error) {
                setErrorMessage("Something went wrong!");
                setTimeout(() => {
                    setErrorMessage(null);
                }, 2000);
                setButton("Contact Us");
            }
        } else {
            setErrorMessage("Please fill out all fields.");
            setTimeout(() => {
                setErrorMessage(null);
            }, 2000);
            return;
        }
    };

    return (
        <>
            <Header val={3} />
            <div className="  lg:mx-2 mx-8 flex flex-col justify-center items-center lg:mt-10 mt-24 ">
                <div className="flex lg:flex-row flex-col justify-evenly lg:gap-0 md:gap-14 items-center ">
                    <div className=" hidden md:block w-[30%]   ">
                        <img
                            src="contact.png"
                            alt="contactUs"

                        />
                    </div>
                    <div className=" flex  items-center justify-center  lg:w-[45%]  md:w-2/3 w-full">
                        <form className="max-w-[68%] rounded-2xl items-center flex flex-col  bg-[#EBEBEB]  shadow-xl px-8 py-8">
                            <h1 className=" text-center text-black text-3xl mb-5 font-semibold">Get In Touch!</h1>
                            <input
                                aria-label="Name"
                                required
                                type="text"
                                placeholder="Your Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="bg-[#F4F6FC] shadow  rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-[#FFC727] mb-4"
                            />
                            <input
                                aria-label="Email"
                                required
                                type="text"
                                placeholder="Your Email Id"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="bg-[#F4F6FC] shadow  rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-[#FFC727] mb-4"
                            />
                            <input
                                aria-label="Subject"
                                required
                                type="text"
                                placeholder="Subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className="bg-[#F4F6FC] shadow   rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-[#FFC727] mb-4"
                            />
                            <textarea
                                aria-label="Message"
                                required
                                value={message}
                                placeholder="How can we help you?"
                                onChange={(e) => setMessage(e.target.value)}
                                className="bg-[#F4F6FC] shadow  rounded-xl w-full py-4 px-3 text-gray-700 leading-tight focus:outline-[#FFC727] mb-4 h-32"
                            />
                            <button type="submit" className={`bg-[#FFC727] btn text-white px-8 py-2 rounded-md text-lg `}>
                                Contact Us
                            </button>
                        </form>
                    </div>


                </div>
            </div>


        </>
    );
}

export default ContactUsPage;
