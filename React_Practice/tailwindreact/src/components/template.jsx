import React from 'react'

function Template({username, btnText}) {
    return (
        <div className="bg-white">
        <div className="mx-auto flex display:flex py-5 sm:px-6 sm:py-5 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 pt-16 shadow-2xl sm:rounded-3xl md:pt-24 lg:flex lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              aria-hidden="true"
              className="absolute top-1/2 left-1/2 -z-10 size-256 -translate-y-1/2 mask-[radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            >
              <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-semibold tracking-tight text-balance text-white sm:text-4xl">
                Boost {username}'s productivity. Start using our app {btnText}.
              </h2>
              <p className="mt-6 text-lg/8 text-pretty text-gray-300">
                ill make it happen </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <a
                  href="#"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 mb-5 shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                >
                  {' '}
                  Get started {username}{''}
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white hover:text-gray-100 mb-5">
                  Learn more
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    )
}

export default Template
