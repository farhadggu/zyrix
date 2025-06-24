import React from "react";
import Button from "./Shared/Button";

const Header = () => {
  return (
    <header className="bg-neutral-primary-bc h-20 lg:h-[104px] flex items-center max-lg:px-2">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="logo" className="mr-8" />

          <ul className="items-center gap-x-8 hidden lg:flex">
            <li className="text-neutral-sec-tx">Market</li>
            <li className="text-neutral-sec-tx">Spot</li>
            <li className="text-neutral-sec-tx">Support</li>
            <li className="text-neutral-sec-tx">Learn</li>
          </ul>
        </div>

        <div className="flex items-center gap-x-1 lg:gap-x-4">
          <div className="items-center gap-x-4 hidden lg:flex">
            <img src="/icons/icon-search.svg" alt="search" />
            <img src="/icons/icon-bell.svg" alt="bell" />
          </div>

          <Button>Sign up</Button>
          <Button variant="outline">Log in</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
