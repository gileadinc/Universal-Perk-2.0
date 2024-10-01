import { Computer, Settings, User, Wallet } from "lucide-react";

const Requirements = () => {
  return (
    <div className="mb-8 ">
      <div className="text-center mb-12">
        <h2 className="text-6xl md:text-4xl font-extrabold text-gray-900">
          Requirements
        </h2>
        <p className="text-[20px]">
          To meet DASGUZO’s vision, several key requirements had to be
          addressed:
        </p>
      </div>
      <div className="w-full px-10 lg:px-0">
        <div className="flex flex-col gap-y-10 w-full">
          <div
            className="lg:ml-[30rem] max-w-[691px] bg-white rounded-lg  p-6 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            style={{
              boxShadow:
                "0px 257px 72px 0px rgba(205, 167, 251, 0.00), 0px 164px 66px 0px rgba(205, 167, 251, 0.01), 0px 92px 55px 0px rgba(205, 167, 251, 0.05), 0px 41px 41px 0px rgba(205, 167, 251, 0.09), 0px 10px 23px 0px rgba(205, 167, 251, 0.20);",
            }}
          >
            <div className="flex flex-col items-start space-y-4">
              <Computer size="35"/>
              <div className="w-full">
                <h3 className="text-lg font-semibold text-left">
                  Payment Integration
                </h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              A secure payment system that allowed easy booking and payment
              processing.
            </p>
          </div>

          <div
            className="bg-white lg:ml-[40rem] max-w-[691px] rounded-lg  p-6 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            style={{
              boxShadow:
                "0px 257px 72px 0px rgba(205, 167, 251, 0.00), 0px 164px 66px 0px rgba(205, 167, 251, 0.01), 0px 92px 55px 0px rgba(205, 167, 251, 0.05), 0px 41px 41px 0px rgba(205, 167, 251, 0.09), 0px 10px 23px 0px rgba(205, 167, 251, 0.20)",
            }}
          >
            <div className="flex flex-col items-start space-y-4">
              <Settings size="35" />
              <div className="w-full">
                <h3 className="text-lg font-semibold text-left">
                  Chat Functionality
                </h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Real-time communication between renters, owners, and admins to
              ensure quick problem resolution and seamless coordination.
            </p>
          </div>

          <div
            className="bg-white lg:ml-[50rem] max-w-[691px] rounded-lg p-6 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            style={{
              boxShadow:
                "0px 257px 72px 0px rgba(205, 167, 251, 0.00), 0px 164px 66px 0px rgba(205, 167, 251, 0.01), 0px 92px 55px 0px rgba(205, 167, 251, 0.05), 0px 41px 41px 0px rgba(205, 167, 251, 0.09), 0px 10px 23px 0px rgba(205, 167, 251, 0.20)",
            }}
          >
            <div className="flex flex-col items-start space-y-4">
              <Wallet size="35" />
              <div className="w-full">
                <h3 className="text-lg font-semibold text-left">
                  Admin Dashboard
                </h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              A user-friendly admin interface for managing listings, bookings,
              and issue reports effectively.
            </p>
          </div>

          <div
            className="bg-white lg:ml-[60rem] max-w-[691px] rounded-lg p-6 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            style={{
              boxShadow:
                "0px 257px 72px 0px rgba(205, 167, 251, 0.00), 0px 164px 66px 0px rgba(205, 167, 251, 0.01), 0px 92px 55px 0px rgba(205, 167, 251, 0.05), 0px 41px 41px 0px rgba(205, 167, 251, 0.09), 0px 10px 23px 0px rgba(205, 167, 251, 0.20)",
            }}
          >
            <div className="flex flex-col items-start space-y-4">
              <User size="35" />
              <div className="w-full">
                <h3 className="text-lg font-semibold text-left">
                  User-Friendly Interface
                </h3>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              Both the car rental and issue reporting features had to be
              intuitive and easy to navigate, ensuring a smooth user experience
              for renters and car owners alike.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Requirements;
