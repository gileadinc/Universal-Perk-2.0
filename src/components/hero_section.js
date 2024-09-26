export default function Hero() {
    return (
      <div className="relative bg-[#D8E2FF] isolate overflow-hidden mt-[20p]">
        <div className="mx-auto max-w-7xl px-6  pt-10 lg:flex lg:px-8 lg:pt-40">
          <div className="max-w-4xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              DASGUZO: Revolutionizing Peer-to-Peer Car Rentals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              DASGUZO aimed to create a streamlined peer-to-peer (P2P) car rental
              platform where users could rent vehicles from local owners with
              ease. Additionally, DASGUZO wanted to empower users to report any
              car-related issues directly within the app. Whether it's a
              mechanical issue, damage, or any other car-related concern, users
              needed a simple way to report the problem, provide accurate details,
              and track its resolution.
            </p>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              <div className="-m-2 rounded-xl p-2 lg:-m-4 lg:p-4 max-w-[70vh] max">
                <img
                  alt="App screenshot"
                  src="/phone.png"
                  width={100}
                  height={100}
                  className="w-[76rem] rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  