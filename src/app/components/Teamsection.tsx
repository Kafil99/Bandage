import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import React from "react";
export default function TeamSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600">
            Problems trying to resolve the conflict between the two major realms
            of Classical physics: Newtonian mechanics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Images/team1.png"
                alt="Team member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-1">Sarah Johnson</h3>
                <p className="text-gray-600 mb-4">Product Designer</p>
                <div className="flex justify-center space-x-4">
                  <a className="text-gray-400 hover:text-blue-500 transition-colors">
                    <FaFacebook size={20} />
                  </a>
                  <a className="text-gray-400 hover:text-pink-500 transition-colors">
                    <FaInstagram size={20} />
                  </a>
                  <a className="text-gray-400 hover:text-blue-400 transition-colors">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Images/team2.jpg"
                alt="Team member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-1">Emily Davis</h3>
                <p className="text-gray-600 mb-4">Art Director</p>
                <div className="flex justify-center space-x-4">
                  <a className="text-gray-400 hover:text-blue-500 transition-colors">
                    <FaFacebook size={20} />
                  </a>
                  <a className="text-gray-400 hover:text-pink-500 transition-colors">
                    <FaInstagram size={20} />
                  </a>
                  <a className="text-gray-400 hover:text-blue-400 transition-colors">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src="/Images/team3.jpg"
                alt="Team member"
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-1">Michael Wilson</h3>
                <p className="text-gray-600 mb-4">Developer</p>
                <div className="flex justify-center space-x-4">
                  <a className="text-gray-400 hover:text-blue-500 transition-colors">
                    <FaFacebook size={20} />
                  </a>
                  <a className="text-gray-400 hover:text-pink-500 transition-colors">
                    <FaInstagram size={20} />
                  </a>
                  <a className="text-gray-400 hover:text-blue-400 transition-colors">
                    <FaTwitter size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

