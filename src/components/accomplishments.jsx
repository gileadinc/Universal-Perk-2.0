import { DevicePhoneMobileIcon } from "@heroicons/react/16/solid";

function Accomplishments() {
  const accomplishments = [
    {
      icon: <DevicePhoneMobileIcon />,
      title: "Seamless Maps Integration",
      description:
        "The integration of Google Maps for reporting car-related issues made it easier for users to provide precise details, ensuring that all issues were accurately reported and resolved efficiently.",
    },
    {
      icon: <DevicePhoneMobileIcon />,
      title: "Admin Dashboard Management",
      description:
        "The admin dashboard was designed for easy management of car listings, bookings, and issue reports. Admins could efficiently track, prioritize, and resolve both rental-related tasks and user-reported problems",
    },
    {
      icon: <DevicePhoneMobileIcon />,
      title: "Booking Requests and Approvals",
      description:
        "The platform provided clear workflows for renters to request bookings and for owners/admins to approve or reject them. This transparency helped streamline the rental process and enhanced user trust",
    },
    {
      icon: <DevicePhoneMobileIcon />,
      title: "User Trust and Satisfaction",
      description:
        "DASGUZO implemented a review system where users could leave feedback after completing a booking. This enhanced transparency and helped users make informed decisions, contributing to a higher level of trust and satisfaction on the platform",
    },
  ];
  return (
    <div id="portfolio">
      <div className="text-center mb-6">
        <h2 className="text-4xl md:text-6xl font-extrabold text-gray-900">
          Accomplishments
        </h2>
      </div>

      <div className="px-10 lg:px-[20rem] mb-20">
        <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
          {accomplishments.map((service, index) => (
            <div
              key={index}
              className="bg-white w-full rounded-lg shadow-md p-6 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex flex-col items-start space-y-4">
                <div className="w-10">{service.icon}</div>
                <div className="w-full">
                  <h3 className="text-lg font-semibold text-left">
                    {service.title}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Accomplishments;
