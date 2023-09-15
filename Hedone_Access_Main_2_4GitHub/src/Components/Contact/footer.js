import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import hlogocrop from "../../Assets/hlogocrop.png";
import hlogo1crop from "../../Assets/hlogo1crop.png";
import hlogo2 from "../../Assets/hlogo2.png";
import { VscLocation } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer class="bg-black">
      <div className=" mx-auto w-[90%]  grid xl:grid-cols-9 lg:grid-cols-9 md:grid-cols-4 sm:grid-cols-4 xs:grid-cols-1 gap-5">
          <div className=" xl:col-span-3 lg:col-span-3 md:col-span-2 sm:col-span-2 xs:col-span-1 xs:flex xs:justify-center xs:items-center mt-20">
            <a href="https://flowbite.com/" class="flex items-center">
              <img src={hlogocrop} class="hidden xs:flex" />
              <img src={hlogo2} class="flex xs:hidden" />
            </a>
          </div>
          <div className=" mt-10 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1 xs:flex xs:flex-col xs:justify-center xs:items-center">
          <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white font-Cinzel">
                Membership Types
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium font-Montserrat ">
                <li class="mb-4">
                  <a href="" class="hover:underline">
                    Individual Membership
                  </a>
                </li>
                <li>
                  <a href="" class="hover:underline">
                    Corporate Membership
                  </a>
                </li>
              </ul>
          </div>
          <div className=" mt-10 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1 xs:flex xs:flex-col xs:justify-center xs:items-center">
          <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white font-Cinzel">
                Recommended Services
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium font-Montserrat">
                <li class="mb-4">
                  <a href="" class="hover:underline ">
                    Travel & Accomodation
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" class="hover:underline">
                    Premium Real Estate
                  </a>
                </li>
                <li className="mb-4">
                  <a href="" class="hover:underline">
                    Private Events
                  </a>
                </li>
              </ul>
          </div>
          <div className=" mt-10 xl:col-span-2 lg:col-span-2 md:col-span-2 sm:col-span-2 xs:col-span-1 xs:flex xs:flex-col xs:justify-center xs:items-center">
          <h2 class="mb-6 text-sm font-semibold text-white uppercase dark:text-white font-Cinzel">
                Address
              </h2>
              <ul class="text-white dark:text-gray-400 font-medium font-Montserrat">
                <li class="mb-4 flex items-center">
                  <VscLocation />
                  <a href="#" class="hover:underline">
                    Dubai, United Arab Emirates
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Majid Sultan - Building 142-0
                  </a>
                </li>
              </ul>
          </div>
s
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div class="grid h-[60px] justify-center items-center mx-auto grid-cols-2 w-[90%]">
           <p className="xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-2 xs:col-span-2 font-Montserrat flex text-[12px] xs:text-[9px] text-white justify-center"> © 2023 We International Digital Marketing™  _<p className=" flex justify-center items-center ">For Software Solutions <span className="px-2"><MdOutlineMarkEmailRead /> </span>zainulabideenbaloch@proton.me</p></p>
        </div>
    </footer>
  );
};

export default Footer;
