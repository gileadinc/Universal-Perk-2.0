import { IconUserCircle } from "@tabler/icons-react";

const Testimonials = ({ isDarkMode }) => {
  return (
    <section
      className={`pb-20 pt-10 ${
        isDarkMode ? "bg-gray-800 text-white" : "text-white"
      }`}
    >
      <div className="mx-auto text-center">
        <h2 className="mb-10 text-4xl font-bold">What Our Donators Say</h2>
        <div className="flex justify-center space-y-6 sm:space-y-0 sm:space-x-6">
          <div
            className={`p-6 mx-2 rounded-lg shadow-lg w-80 hover:scale-105 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              "Supporting this charity has been one of the most fulfilling
              experiences. Their transparency and dedication are unmatched."
            </p>
            <div className="flex items-center">
              <div className="text-left">
                <h4
                  className={`flex items-center font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <IconUserCircle className="mr-2" />
                  <span>John Doe</span>
                </h4>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  Philanthropist
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-6 mx-2 rounded-lg shadow-lg w-80 hover:scale-105 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              "I've seen firsthand the impact this organization has on the
              community. I'm proud to be a donor."
            </p>
            <div className="flex items-center">
              <div className="text-left">
                <h4
                  className={`flex items-center font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <IconUserCircle className="mr-2" />
                  <span>Jane Smith</span>
                </h4>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  Donor
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-6 mx-2  rounded-lg shadow-lg w-80 hover:scale-105 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              "The dedication and effort put in by this charity are inspiring.
              They truly make a difference."
            </p>
            <div className="flex items-center">
              <div className="text-left">
                <h4
                  className={`flex items-center font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <IconUserCircle className="mr-2" />
                  <span>Michael Johnson</span>
                </h4>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  Benefactor
                </p>
              </div>
            </div>
          </div>
          <div
            className={`p-6 mx-2  rounded-lg shadow-lg w-80 hover:scale-105 ${
              isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
            }`}
          >
            <p
              className={`mb-6 ${
                isDarkMode ? "text-gray-300" : "text-gray-800"
              }`}
            >
              "It's incredible to see the positive changes brought about by this
              charity. Their work is truly commendable."
            </p>
            <div className="flex items-center">
              <div className="text-left">
                <h4
                  className={`flex items-center font-bold ${
                    isDarkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  <IconUserCircle className="mr-2" />
                  <span>Emily Davis</span>
                </h4>
                <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                  Supporter
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
