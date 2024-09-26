const FeaturesSection = () => {
    return (
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="sm:text-6xl text-xl font-extrabold text-gray-900">
              Implementation Approach
            </h2>
            <p className="text-[20px]">
              To create a seamless platform for car rentals and issue reporting,
              DASGUZO focused on two core functionalities: a simple rental process
              and an efficient system for reporting car-related issues. Here’s how
              the solution was implemented:
            </p>
          </div>
          <div className="w-full flex flex-col gap-y-10">
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-[20px] gap-y-[20px] md:gap-y-0">
              <div className="bg-[#D8E2FF] p-6 rounded-lg shadow-lg sm:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Dual-Flow Design
                </h3>
                <p className="text-gray-600">
                  The platform was designed with two clear paths for users: one
                  for searching and booking vehicles and another for reporting
                  issues with a vehicle.
                </p>
              </div>
  
              <div className="bg-[#D8E2FF] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Payment Integration
                </h3>
                <p className="text-gray-600">
                  DASGUZO integrated secure payment gateways to facilitate
                  transactions between renters and car owners. Payment methods
                  include credit cards and digital wallets.
                </p>
              </div>
            </div>
  
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-[20px] gap-y-[20px] md:gap-y-0">
              <div className="bg-[#D8E2FF] p-6 rounded-lg shadow-lg sm:col-span-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Google Maps Integration for Issue Reporting
                </h3>
                <p className="text-gray-600">
                  Users can easily report any car-related issues by sending
                  details such as the time and location of the issue. Integration
                  with Google Maps allows users to pinpoint where the issue
                  occurred.
                </p>
              </div>
  
              <div className="bg-[#D8E2FF] p-6 rounded-lg shadow-lg col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Simple Car Listing and Booking
                </h3>
                <p className="text-gray-600">
                  Car owners could quickly upload vehicle details, set pricing,
                  and manage their listings. Renters have access to an intuitive
                  search system to find and book cars based on location,
                  availability, and price.
                </p>
              </div>
            </div>
  
            <div className="grid md:grid-cols-3 grid-cols-1 md:gap-x-[20px] gap-y-[20px] md:gap-y-0">
              <div className="bg-[#D8E2FF] p-6 rounded-lg shadow-lg md:col-span-2">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Chat Communication
                </h3>
                <p className="text-gray-600">
                  A real-time chat feature was incorporated, allowing renters and
                  car owners to communicate directly. This helps with
                  clarifications, pick-up coordination, and resolving any queries
                  quickly.
                </p>
              </div>
  
              <div className="bg-[#D8E2FF] p-6 rounded-lg shadow-lg md:col-span-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Admin Dashboard
                </h3>
                <p className="text-gray-600">
                  A comprehensive admin panel was created to manage car listings,
                  rentals, and reported issues. Admins can review reported car
                  problems, assign them to the appropriate team for resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturesSection;
  