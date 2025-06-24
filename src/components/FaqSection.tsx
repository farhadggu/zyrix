"use client";

import Drawer from "./Shared/Drawer";

const FaqSection = () => {
  return (
    <div className="mt-[100px] mx-auto container w-full">
      <h3 className="text-white text-[32px] font-medium">
        Frequently Asked <span className="text-primary">Questions</span>
      </h3>

      {Array.from({ length: 5 }).map((_, index) => (
        <Drawer
          key={index}
          className="mt-6 p-8 rounded-4xl layer-bg even:mr-auto odd:ml-auto w-[calc(100%_-_104px)]"
          trigger={(toggle, open) => (
            <div onClick={() => toggle()} className="w-full flex items-center justify-between cursor-pointer">
              <span className="text-[22px] text-neutral-title font-medium">How does Zyrix work?</span>

              <img src="/arrow.svg" />
            </div>
          )}
        >
          <>
            <div className="w-full h-px bg-[#353945] my-4" />

            <p className="text-sm text-neutral-sec-tx">
              Zyrix offers a variety of trading and investment options that allow you to buy and sell crypto with as
              little as $1. With products like zero-fee conversion, spot trading, margin trading, and futures trading,
              you can try out different strategies and build your skills on Zyrix without worrying about entry costs.
            </p>
          </>
        </Drawer>
      ))}
    </div>
  );
};

export default FaqSection;
