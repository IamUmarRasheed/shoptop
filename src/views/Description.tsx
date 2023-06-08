import Wrapper from '@/components/Wrapper'
import React from 'react'

export default function Description() {
  return (
    <section className="w-full pb-14 ">
      <Wrapper>
        <div>
          <div className="text-[120px] font-bold text-[#F6F7F9]   border-b-2 border-[#E1E1E1]">
            Overview
          </div>
          <h3 className="scroll-m-20 text-2xl font-bold tracking-tight -mt-24 pb-20">
            Product Information
          </h3>
          <div className="flex justify-between items-center">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight  basis-[12/4] ">
              PRODUCT DETAILS
            </h4>
            <p className="leading-7 [&:not(:first-child)]:mt-6 basis-[12/8] max-w-[800px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="flex items-center mt-10 justify-between">
            <h4 className="scroll-m-20 text-xl font-semibold tracking-tight  basis-[12/4] ">
              PRODUCT CARE
            </h4>
            <div className="basis-[12/8] w-[800px]">
              {" "}
              <ul className="list-disc font-semibold pl-4 ">
                <li>Hand wash using cold water.</li>
                <li>Do not using bleach.</li>
                <li>Hang it to dry.</li>
                <li>Iron on low temperature.</li>
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
