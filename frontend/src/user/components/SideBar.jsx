import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUser, FaChartBar, FaCog, FaUserCircle, FaBars, FaTimes, FaSignOutAlt, FaVoteYea, FaBell, FaComment, FaQuestionCircle } from 'react-icons/fa';

function SideBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  return (
    <div className="relative">
      <div className="bg-blue-900 text-white w-full fixed top-0 left-0 z-20 flex justify-between items-center p-4 shadow-md">
        <button onClick={toggleMobileMenu} className="md:hidden text-white">
          <FaBars className="text-2xl" />
        </button>
        <span className="text-2xl font-semibold text-center text-indigo-200 ml-5">ई-matadan</span>
        <Link to="/user/notifications" className="text-white mr-10">
          <FaBell className="text-xl" />
        </Link>
      </div>

      <div className="bg-blue-900 text-white w-64 space-y-6 px-2 py-7 md:block hidden fixed top-0 left-0 h-full z-10 pt-16">
        <ul className="space-y-4">
          <li>
            <Link to="/user" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaHome className="text-xl mt-3" />
              <span className="ml-3 mt-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/user/voting-apply" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaUser className="text-xl" />
              <span className="ml-3">Register As Voter</span>
            </Link>
          </li>
          <li>
            <Link to="/user/vote" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaVoteYea className="text-xl" />
              <span className="ml-3">Vote</span>
            </Link>
          </li>
          <li>
            <Link to="/user/results" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaChartBar className="text-xl" />
              <span className="ml-3">Results</span>
            </Link>
          </li>
          <li>
            <Link to="/user/feedback" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaComment className="text-xl" />
              <span className="ml-3">Feedback</span>
            </Link>
          </li>
          <li>
            <Link to="/user/support" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaQuestionCircle className="text-xl" />
              <span className="ml-3">Support</span>
            </Link>
          </li>
          <li>
            <Link to="/user/settings" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaCog className="text-xl" />
              <span className="ml-3">Settings</span>
            </Link>
          </li>
          <li>
            <button onClick={toggleProfileMenu} className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-full">
              <FaUserCircle className="text-xl" />
              <span className="ml-3">Profile</span>
              <i className={`ml-auto bx ${isProfileMenuOpen ? "bx-chevron-up" : "bx-chevron-down"} text-xl`}></i>
            </button>
            {isProfileMenuOpen && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link to="/user-login" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-full">
                    <FaVoteYea className="text-xl" />
                    <span className="ml-3">Login as Candidate</span>
                  </Link>
                </li>
                <li>
                  <Link to="/user-register" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-full">
                    <FaVoteYea className="text-xl" />
                    <span className="ml-3">Register as Candidate</span>
                  </Link>
                </li>
                <li>
                  <button onClick={() => console.log("Logging out...")} className="flex items-center px-4 py-2 rounded-lg hover:bg-red-600 transition-all w-full">
                    <FaSignOutAlt className="text-xl" />
                    <span className="ml-3">Logout</span>
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      <div className={`fixed inset-0 bg-blue-900 text-white w-64 z-50 transform transition-transform ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}>
        <div className="flex justify-end p-4">
          <button onClick={toggleMobileMenu} className="text-white">
            <FaTimes className="text-2xl" />
          </button>
        </div>
        <ul className="space-y-4 px-4">
          <li>
            <Link to="/user" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaHome className="text-xl" />
              <span className="ml-3">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/user/voting-apply" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaUser className="text-xl" />
              <span className="ml-3">Register As Voter</span>
            </Link>
          </li>
          <li>
            <Link to="/user/vote" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaVoteYea className="text-xl" />
              <span className="ml-3">Vote</span>
            </Link>
          </li>
          <li>
            <Link to="/user/results" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaChartBar className="text-xl" />
              <span className="ml-3">Results</span>
            </Link>
          </li>
          <li>
            <Link to="/user/feedback" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaComment className="text-xl" />
              <span className="ml-3">Feedback</span>
            </Link>
          </li>
          <li>
            <Link to="/user/support" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaQuestionCircle className="text-xl" />
              <span className="ml-3">Support</span>
            </Link>
          </li>
          <li>
            <Link to="/user/settings" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all">
              <FaCog className="text-xl" />
              <span className="ml-3">Settings</span>
            </Link>
          </li>
          <li>
            <button onClick={toggleProfileMenu} className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-full">
              <FaUserCircle className="text-xl" />
              <span className="ml-3">Profile</span>
              <i className={`ml-auto bx ${isProfileMenuOpen ? "bx-chevron-up" : "bx-chevron-down"} text-xl`}></i>
            </button>
            {isProfileMenuOpen && (
              <ul className="pl-6 mt-2 space-y-2">
                <li>
                  <Link to="#" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-full">
                    <FaVoteYea className="text-xl" />
                    <span className="ml-3">Login as Candidate</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-600 transition-all w-full">
                    <FaVoteYea className="text-xl" />
                    <span className="ml-3">Register as Candidate</span>
                  </Link>
                </li>
                <li>
                  <button onClick={() => console.log("Logging out...")} className="flex items-center px-4 py-2 rounded-lg hover:bg-red-600 transition-all w-full">
                    <FaSignOutAlt className="text-xl" />
                    <span className="ml-3">Logout</span>
                  </button>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default SideBar;