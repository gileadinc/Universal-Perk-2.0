import { FaUserCircle } from "react-icons/fa";

const Testimonials = ({ isDarkMode }) => {
  return (
    <section
      className={`pb-20 pt-10 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto text-center">
        <h2 className="mb-10 text-4xl font-bold">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center space-y-6 sm:space-y-0 sm:space-x-6">
          <div
            className={`p-6 mx-2 transition-transform transform rounded-lg shadow-lg w-80 hover:scale-105 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Our call center efficiency has improved significantly with their
              services. Highly recommended!
            </p>
            <div className="flex items-center">
              <div className="text-left">
                <h4
                  className={`flex items-center font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <FaUserCircle className="mr-2" />
                  <span>John Doe</span>
                </h4>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  CEO, Tech Company
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-6 mx-2 transition-transform transform rounded-lg shadow-lg w-80 hover:scale-105 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Our call center efficiency has improved significantly with their
              services. Highly recommended!
            </p>
            <div className="flex items-center">
              <div className="text-left">
                <h4
                  className={`flex items-center font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <FaUserCircle className="mr-2" />
                  <span>John Doe</span>
                </h4>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  CEO, Tech Company
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-6 mx-2 transition-transform transform rounded-lg shadow-lg w-80 hover:scale-105 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              Our call center efficiency has improved significantly with their
              services. Highly recommended!
            </p>
            <div className="flex items-center">
              <div className="text-left">
                <h4
                  className={`flex items-center font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <FaUserCircle className="mr-2" />
                  <span>John Doe</span>
                </h4>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  CEO, Tech Company
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-6 mx-2 transition-transform transform rounded-lg shadow-lg w-80 hover:scale-105 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              The advanced IVR system has reduced our call handling time by 30%.
              Excellent service!
            </p>
            <div className="flex items-center">
              <div className="text-left">
                <h4
                  className={`flex items-center font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <FaUserCircle className="mr-2" />
                  <span>Jane Smith</span>
                </h4>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  COO, FinTech Solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
