import * as React from "react"
import Logo from "../../../images/x-camp_cpi.png"
import Image from "next/image"
export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-7xl lg:w-full mx-auto lg:pb-28 xl:pb-32">
          <main className="pt-10 mx-auto max-w-screen-xl px-4 sm:pt-12 sm:px-6 md:pt-16 lg:pt-18 lg:px-8 xl:pt-24 grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
            <div className="sm:text-center lg:text-left">
              <div className="text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                March 6, 2022
              </div>
              <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
                <span className="text-purple-600">
                  USACO February Contest Solutions
                </span>
              </h2>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Want to learn how to solve the USACO February Problems? Join
                this joint workshop with X-Camp on <b>March 6</b> to gain a
                better understanding of the solutions from the contest! There
                will be two sessions: the Bronze and Silver divisions will be
                covered from <b>10am-12pm PST</b>, and the Gold division will be
                discussed from <b>4pm-5pm PST</b>.
              </p>
              <p className="mt-1 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl lg:mx-0">
                Bronze/Silver Session Zoom:{" "}
                <a
                  target="_blank"
                  href="https://us06web.zoom.us/j/83196328567"
                  className="underline text-blue-600"
                >
                  ID: 831 9632 8567
                </a>
                <br />
                Gold Session Zoom:{" "}
                <a
                  target="_blank"
                  href="https://us06web.zoom.us/j/86739411537"
                  className="underline text-blue-600"
                >
                  ID: 867 3941 1537
                </a>
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="https://forms.gle/QUiNote2bzFXjGHQ8"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Sign Up
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="mailto:maggieliu@joincpi.org"
                    target="_blank"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-purple-700 bg-purple-100 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:shadow-outline-purple focus:border-purple-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
            <div className={"w-full max-w-2xl mx-auto"}>
              <Image
                src={Logo}
                placeholder="blur"
                priority
                layout="responsive"
                className="rounded-lg"
              />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}
