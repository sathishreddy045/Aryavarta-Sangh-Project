import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [question, setQuestion] = useState('');
    const [statusMessage, setStatusMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !question) {
            setStatusMessage({ type: 'error', text: 'Please fill out all required fields.' });
            return;
        }

        console.log({ name, email, phone, question });

        setStatusMessage({ type: 'success', text: 'Thank you for your enquiry! We will get back to you soon.' });
        setName('');
        setEmail('');
        setPhone('');
        setQuestion('');
    };

    return (
        <div id="contact" className="flex items-center w-full min-h-screen p-4 text-white sm:p-6 lg:p-8">
            <div className="w-full py-16 mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="text-4xl font-bold sm:text-5xl">Get In Touch</h1>
                    <p className="mt-4 text-gray-400">Have a question or want to get involved? Send us a message.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center">
                         <h2 className="mb-6 text-2xl font-bold text-orange-500">Contact Information</h2>
                         <div className="space-y-4 text-lg text-gray-300">
                            <p className="flex items-start">
                                <span className="mt-1 mr-3 text-orange-500">&#9656;</span>
                                Baradari Chouraha Morar, Gwalior, Madhya Pradesh-474006
                            </p>
                            <p className="flex items-center">
                                <span className="mr-3 text-orange-500">&#9656;</span>
                                +91 9617018868
                            </p>
                            <p className="flex items-center">
                                 <span className="mr-3 text-orange-500">&#9656;</span>
                                Info@Aryavartasangh.com
                            </p>
                         </div>
                    </div>

                    <div>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input 
                                type="text" 
                                placeholder="Your Name" 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <input 
                                type="email" 
                                placeholder="Your Email" 
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <input 
                                type="tel" 
                                placeholder="Your Contact Number (Optional)" 
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                            <textarea 
                                placeholder="Your Question or Message"
                                value={question}
                                onChange={(e) => setQuestion(e.target.value)}
                                rows="5"
                                className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            ></textarea>
                            <button 
                                type="submit" 
                                className="w-full py-3 font-bold text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700"
                            >
                                Send Message
                            </button>
                            {statusMessage && (
                                <p className={`text-center mt-4 ${statusMessage.type === 'error' ? 'text-red-500' : 'text-green-500'}`}>
                                    {statusMessage.text}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;