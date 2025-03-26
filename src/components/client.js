import Image from "next/image";

export default function Client() {
    return (
      <div className="relative bg-[#D8E2FF] mt-10 sm:mt-0 isolate overflow-hidden">
        <div className="w-full pt-10  lg:flex lg:row-reverse  lg:justify-between pb-6">
          <div className="flex max-w-2xl  lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none">
            <div className="max-w-3xl flex-none sm:w-full lg:max-w-none">
              <div className="-m-2 rounded-xl p-2 lg:-m-4 lg:p-4 max-w-[70vh] max">
                <Image
                  alt="App screenshot"
                  src="/client.png"
                  width={100}
                  height={100}
                  className="w-[76rem] rounded-md"
                />
              </div>
            </div>
          </div>
          <div className="max-w-4xl lg:mx-0 lg:flex-shrink-0 lg:pt-8">
              <div>
                  <div className="max-w-40">
                      <Image src="/dasguzo.png" alt="DASGUZO logo" width={250} height={75}/> 
                  </div>

                  <div>
                      <p className="font-bold text-[32px]">Client Name</p>
                      <p className="font-[300] text-[32px]">DASGUZO</p>
                  </div>
              </div>
            <h1 className="mt-10 text-xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Client Overview
            </h1>
            <p className="mt-6 text-[20px] leading-8 text-gray-600">
            DASGUZO is an innovative company dedicated to reshaping the car rental experience by connecting car owners with renters. The platform allows users to rent vehicles from local owners, while offering owners an easy way to generate income from unused cars. Alongside the rental service, DASGUZO integrates an issue reporting system, allowing users to report problems with the car they rented, helping maintain a high standard of service and vehicle quality.

            </p>
          </div>
        </div>
      </div>
    );
  }