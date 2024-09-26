import { DevicePhoneMobileIcon } from "@heroicons/react/16/solid";

const Points = () => {
  return (
    <div className="px-10 lg:px-0 flex w-full flex-col lg:flex-row lg:gap-x-4 justify-center">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:px-40 w-full items-center justify-center">
        <div className="bg-[#FBBC05] w-full rounded-lg shadow-md p-6 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col items-start space-y-4">
            <DevicePhoneMobileIcon className="h-10 h-10" />
            <div className="w-full">
              <h3 className="text-lg font-semibold text-left">
                Accurate Issue Reporting
              </h3>
            </div>
          </div>
          <p className="mt-4 text-black">
            The challenge was ensuring that users could provide accurate details
            about when and where the issue with the car occurred. This was
            solved by integrating Google Maps to allow users to drop a pin at
            the exact location of the incident and capture the time of the
            event.
          </p>
        </div>

        <div className="bg-[#001A43] rounded-lg shadow-md p-6 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col items-start space-y-4">
            <DevicePhoneMobileIcon className="h-10 h-10 text-white" />
            <div className="w-full">
              <h3 className="text-lg text-white font-semibold text-left">
                Accurate Issue Reporting
              </h3>
            </div>
          </div>
          <p className="mt-4 text-white">
            The challenge was ensuring that users could provide accurate details
            about when and where the issue with the car occurred. This was
            solved by integrating Google Maps to allow users to drop a pin at
            the exact location of the incident and capture the time of the
            event.
          </p>
        </div>
        <div className="bg-[#001A43] rounded-lg shadow-md p-6 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col items-start space-y-4">
            <DevicePhoneMobileIcon className="h-10 h-10 text-white" />
            <div className="w-full">
              <h3 className="text-lg text-white font-semibold text-left">
                Accurate Issue Reporting
              </h3>
            </div>
          </div>
          <p className="mt-4 text-white">
            The challenge was ensuring that users could provide accurate details
            about when and where the issue with the car occurred. This was
            solved by integrating Google Maps to allow users to drop a pin at
            the exact location of the incident and capture the time of the
            event.
          </p>
        </div>
        <div className="bg-[#FBBC05] rounded-lg shadow-md p-6 border border-gray-200 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
          <div className="flex flex-col items-start space-y-4">
            <DevicePhoneMobileIcon className="h-10 h-10" />
            <div className="w-full">
              <h3 className="text-lg font-semibold text-left">
                Accurate Issue Reporting
              </h3>
            </div>
          </div>
          <p className="mt-4 text-black">
            The challenge was ensuring that users could provide accurate details
            about when and where the issue with the car occurred. This was
            solved by integrating Google Maps to allow users to drop a pin at
            the exact location of the incident and capture the time of the
            event.
          </p>
        </div>
      </div>

      <div className="w-full flex items-center mt-10 lg:mt-0">
        <div className="w-full flex flex-col items-center justify-center items-center">
          <h1 className="text-4xl md:text-6xl font-[700] max-w-[30rem]">
            Pain Points Discovered
          </h1>
          <img className="max-w-[10rem]" src="/pin.svg" />
        </div>
      </div>
    </div>
  );
};

export default Points;
