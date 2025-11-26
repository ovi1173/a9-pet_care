import React from 'react';

const Footer = () => {
    return (
        <footer className="footer sm:footer-horizontal bg-gray-900 text-gray-200 p-10">
          
            <div>
                <h6 className="footer-title text-white">PetCare</h6>
                <p className="text-gray-400 mt-1">
                    Caring for your pets with love and expertise.
                </p>
                <p className="mt-2 text-gray-400">
                    <strong>Address:</strong> 123 Pet Street, Dhaka, Bangladesh
                </p>
                <p className="text-gray-400">
                    <strong>Email:</strong> info@petcare.com
                </p>
                <p className="text-gray-400">
                    <strong>Phone:</strong> +880 123 456 789
                </p>
            </div>

           
            <div>
                <h6 className="footer-title text-white">Follow Us</h6>
                <div className="flex space-x-4 mt-2">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition">
                        Facebook
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                        Twitter
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500 transition">
                        Instagram
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
                        LinkedIn
                    </a>
                </div>
            </div>

            
            <div>
                <h6 className="footer-title text-white">Legal</h6>
                <a href="/privacy-policy" className="link link-hover">Privacy Policy</a>
                <a href="/terms-of-use" className="link link-hover">Terms of Use</a>
                <a href="/cookie-policy" className="link link-hover">Cookie Policy</a>
            </div>
        </footer>

    );
};

export default Footer;