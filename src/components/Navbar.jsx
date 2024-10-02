import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/it_pic.png';

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(null);

    const toggleDropdown = (menu) => {
        setDropdownOpen(isDropdownOpen === menu ? null : menu);
    };

    return (
        <nav className="p-4 bg-[rgb(20,20,28)] text-white shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" />
                    <div className="flex-grow" />
                </Link>

                <div className="flex space-x-8 justify-center">
                    <div className="relative">
                        <span
                            className="cursor-pointer hover:text-blue-400"
                            onClick={() => toggleDropdown('allotment')}
                        >
                            Allotment
                        </span>
                        {isDropdownOpen === 'allotment' && (
                            <div className="absolute mt-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-50">
                                <Link className="block px-4 py-2 hover:bg-blue-500" to="/btech/guide-allotment">B.Tech Guide Allotment</Link>
                                <Link className="block px-4 py-2 hover:bg-blue-500" to="/mtech/guide-allotment">M.Tech Guide Allotment</Link>
                                <Link className="block px-4 py-2 hover:bg-blue-500" to="/btech/student-allotment">Student Allotment</Link>
                            </div>
                        )}
                    </div>

                    <div className="relative">
                        <span
                            className="cursor-pointer hover:text-blue-400"
                            onClick={() => toggleDropdown('grades')}
                        >
                            Grades and Submissions
                        </span>
                        {isDropdownOpen === 'grades' && (
                            <div className="absolute mt-2 w-48 bg-gray-700 text-white rounded-md shadow-lg z-50">
                                <Link className="block px-4 py-2 hover:bg-blue-500" to="/mtech/grades-submissions">M.Tech</Link>
                                <Link className="block px-4 py-2 hover:bg-blue-500" to="/btech/grades-submissions   ">B.Tech</Link>
                            </div>
                        )}
                    </div>

                    <Link to="/feedback" className="hover:text-blue-400">View Feedback</Link>
                </div>

                <div className="flex items-center space-x-4">
                    <div>
                        <p>Geetha V.</p>
                        <p className="text-sm">Admin</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
