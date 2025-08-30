import React from 'react';
import { HashLink } from 'react-router-hash-link';
import footerLogo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="w-full px-4 py-8 text-white sm:px-6 sm:py-12 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <img src={footerLogo} alt="Aryavarta Sangh Logo" className="w-32 sm:w-40 md:w-48" />
                        <h2 className="mt-3 text-xl font-bold text-orange-500 sm:text-2xl md:text-3xl">Aryavarta sangh</h2>
                    </div>

                    <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-2 md:gap-8">
                        <div className="text-center md:text-left">
                            <h3 className="mb-3 text-lg font-bold sm:text-xl">About Us</h3>
                            <ul className="space-y-2">
                                <li>
                                    <HashLink smooth to="/#about" className="flex items-center justify-center space-x-2 transition-colors md:justify-start hover:text-orange-500">
                                        <ChevronRight /><span>About Us</span>
                                    </HashLink>
                                </li>
                                <li>
                                    <HashLink smooth to="/#contact" className="flex items-center justify-center space-x-2 transition-colors md:justify-start hover:text-orange-500">
                                        <ChevronRight /><span>Contact Us</span>
                                    </HashLink>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center md:text-left">
                            <h3 className="mb-3 text-lg font-bold sm:text-xl">Our Leaders</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="flex items-center justify-center space-x-2 transition-colors md:justify-start hover:text-orange-500"><ChevronRight /><span>M.P.</span></a></li>
                                <li><a href="#" className="flex items-center justify-center space-x-2 transition-colors md:justify-start hover:text-orange-500"><ChevronRight /><span>U.P.</span></a></li>
                                <li><a href="#" className="flex items-center justify-center space-x-2 transition-colors md:justify-start hover:text-orange-500"><ChevronRight /><span>Delhi</span></a></li>
                                <li><a href="#" className="flex items-center justify-center space-x-2 transition-colors md:justify-start hover:text-orange-500"><ChevronRight /><span>Gujarat</span></a></li>
                                <li><a href="#" className="flex items-center justify-center space-x-2 transition-colors md:justify-start hover:text-orange-500"><ChevronRight /><span>Rajasthan</span></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center md:text-left">
                        <h3 className="mb-3 text-lg font-bold sm:text-xl">Contact Info</h3>
                        <ul className="space-y-3">
                            <li className="flex flex-col items-center space-y-1 md:flex-row md:items-start md:space-y-0 md:space-x-3">
                                <LocationIcon />
                                <p className="text-sm leading-relaxed sm:text-base">Baradari Chouraha Morar, Gwalior, Madhya Pradesh-474006</p>
                            </li>
                            <li className="flex items-center justify-center space-x-3 md:justify-start">
                                <ChatIcon />
                                <p className="text-sm sm:text-base">Say Hello +91 9617018868</p>
                            </li>
                            <li className="flex items-center justify-center space-x-3 md:justify-start">
                                <PhoneIcon />
                                <p className="text-sm sm:text-base">+91 9617018868</p>
                            </li>
                            <li className="flex items-center justify-center space-x-3 md:justify-start">
                                <EmailIcon />
                                <p className="text-sm break-all sm:text-base sm:break-normal">Info@Aryavartasangh.com</p>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-4 mt-8 text-center border-t border-gray-800 sm:pt-6 sm:mt-12">
                    <p className="text-xs text-gray-400 sm:text-sm">&copy; Aryavarta Sangh 2025. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const ChevronRight = () => <svg className="flex-shrink-0 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>;
const LocationIcon = () => <svg className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path></svg>;
const ChatIcon = () => <svg className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd"></path></svg>;
const PhoneIcon = () => <svg className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path></svg>;
const EmailIcon = () => <svg className="flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>;

export default Footer;