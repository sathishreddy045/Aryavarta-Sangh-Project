import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import peopleImg from '../assets/peoples.jpg';
import manImg from '../assets/man.png';

const JoinFormModal = ({ formType, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm">
            <div className="relative w-full max-w-lg p-8 m-4 bg-gray-900 border border-gray-700 rounded-2xl">
                <button onClick={onClose} className="absolute text-gray-400 top-4 right-4 hover:text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                <h2 className="mb-6 text-2xl font-bold text-center text-white">Become a {formType}</h2>
                <form className="space-y-4">
                    <input type="text" placeholder="Full Name" className="w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="tel" placeholder="Phone Number" className="w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <input type="email" placeholder="Email Address" className="w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500" />
                    <textarea placeholder="Full Address" rows="3" className="w-full p-3 text-white bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"></textarea>
                    <button type="submit" className="w-full py-3 font-semibold text-white transition-colors bg-orange-600 rounded-lg hover:bg-orange-700">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

const JoinUs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formType, setFormType] = useState('');

    const openModal = (type) => {
        setFormType(type);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="text-white">
            <div 
                className="relative flex flex-col items-center justify-center w-full h-96 md:h-[50vh] bg-cover bg-center" 
                style={{ backgroundImage: `url(${peopleImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-60"></div>
                <div className="relative z-10 flex flex-col items-center text-center">
                    <h1 className="text-5xl font-bold md:text-7xl">JOIN</h1>
                    <div className="mt-4 text-sm font-semibold">
                        <span>HOME</span>
                        <span className="mx-2">|</span>
                        <span>JOIN US !</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center w-full px-4 py-12 mx-auto md:flex-row max-w-7xl sm:px-6 lg:px-8">
                <div className="w-full md:w-1/2">
                    <img src={manImg} alt="Join the Journey" className="object-cover w-full h-auto max-h-[90vh]" />
                </div>
                <div className="flex flex-col items-center w-full mt-12 md:w-1/2 md:items-start md:mt-0 md:pl-16 lg:pl-24">
                    <h2 className="mb-8 text-3xl font-bold sm:text-4xl lg:text-5xl">JOIN THE JOURNEY</h2>
                    <div className="flex flex-col gap-4 sm:flex-row">
                        <button onClick={() => openModal('Volunteer')} className="px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-2xl hover:bg-blue-700">
                            Join As Volunteer
                        </button>
                        <button onClick={() => openModal('Member')} className="px-8 py-3 font-semibold text-black transition-colors bg-yellow-400 rounded-2xl hover:bg-yellow-500">
                            Become A Member
                        </button>
                        <Link to="/donate-us">
                            <button className="w-full px-8 py-3 font-semibold text-white transition-colors bg-orange-600 rounded-2xl hover:bg-orange-700">
                                Make A Donation
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {isModalOpen && <JoinFormModal formType={formType} onClose={closeModal} />}
        </div>
    );
};

export default JoinUs;