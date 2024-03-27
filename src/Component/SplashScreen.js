import React, { useState, useEffect } from 'react';
import '../CssCOMPO/Splash.css';
import img1 from '../images/two.jpg';
import msg1 from '../images/msg1.jpg';


function Splashpage() {
    const [showContainer1, setShowContainer1] = useState(true);


    useEffect(() => {
        // After 4 seconds, hide container1 and show container2
        const timer = setTimeout(() => {
            setShowContainer1(false);
        }, 4000);


        return () => clearTimeout(timer);
    }, []);



    return (
        <div className='main'>
            {showContainer1 && (
                <div className='container1'>
                    <h2 className='title'>WELCOME TO CHATBOT</h2>
                    <img src={img1} alt='Chatbot' className='chatbot-img' />
                    {/* <button className='btn'>Let's Get Started</button> */}
                </div>
            )}
            {!showContainer1 && (
                <div className='container2'>
                    <h3>Your AI Assistant</h3>
                    <img src={msg1} alt='Chatbot' className='message' />
                    <p className='para'>Using this software, you can ask your questions and
                        receive articles using artificial intelligence assistant.</p>
                    <button className='btn'>Continue</button>

                </div>
            )}
        </div>
    );
}

export default Splashpage;
