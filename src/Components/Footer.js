import React from 'react';
import { FaFacebook , FaInstagram , FaTwitter, FaYoutube } from "react-icons/fa";

import CompanyLogo from '../assets/img/Mylogo.png';

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <div className='flex items-center' style={{ maxWidth: '200px' }}>
   
            <img className='md:w-32 w-24 md:ml-0 ml-5' src={CompanyLogo} alt="Company Logo" />
          </div>
            
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <a href="/platform" className="hover:text-gray-500">Platform</a>
            <a href="/features" className="hover:text-gray-500">Features</a>
            <a href="/how-it-works" className="hover:text-gray-500">How it works</a>
            <a href="/resources" className="hover:text-gray-500">Resources</a>
            <a href="/faqs" className="hover:text-gray-500">FAQS</a>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0 items-center justify-center">
            <a href="/login" className="hover:text-gray-500">Login</a>
            <a href="/signup" className="hover:bg-gray-600 bg-gray-700 py-2 px-4 rounded">Sign up</a>
          </div>
        </div>
        <div className="mt-8 flex justify-center space-x-4">
          <FaFacebook color="#ffffff" />
          <FaTwitter color="#ffffff" />
          <FaInstagram color="#ffffff" />
          <FaYoutube color="#ffffff" />
        </div>

        {/* Horizontal Line */}
        <hr className="my-8 border-t border-gray-600" />

        {/* Copyright Section */}
        <div className="text-center text-gray-500 text-sm">
          &copy; 2023 SmartX. All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer;
