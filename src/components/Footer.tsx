const Footer = () => {
  return (
    <footer className="bg-neutral-primary-bc w-full pt-16 pb-8">
      <div className="w-full mx-auto container">
        <div className="flex items-center gap-8 flex-col lg:flex-row">
          <img src="/logo.svg" />

          <div className="w-full h-px bg-[#7F7F7F]" />

          <div className="flex items-center gap-x-[18px]">
            <img className="size-6" src="/icons/instagram.svg" alt="social" />
            <img className="size-6" src="/icons/facebook.svg" alt="social" />
            <img className="size-6" src="/icons/x.svg" alt="social" />
            <img className="size-6" src="/icons/linkdein.svg" alt="social" />
            <img className="size-6" src="/icons/telegram.svg" alt="social" />
          </div>
        </div>
      </div>

      <div className="w-full mx-auto container flex items-start justify-center gap-20 flex-col lg:flex-row">
        <div className="flex flex-col gap-y-4">
          <span className="text-xl font-semibold text-white">Services</span>

          <ul className="flex flex-col gap-y-4">
            <li className="text-neutral-primary-tx">Exchange</li>
            <li className="text-neutral-primary-tx">Spot</li>
            <li className="text-neutral-primary-tx">P2P Trading</li>
            <li className="text-neutral-primary-tx">Securities Trading</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <span className="text-xl font-semibold text-white">Product</span>

          <ul className="flex flex-col gap-y-4">
            <li className="text-neutral-primary-tx">Mobile App</li>
            <li className="text-neutral-primary-tx">Lending Pro</li>
            <li className="text-neutral-primary-tx">Reporting APP</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <span className="text-xl font-semibold text-white">Company</span>

          <ul className="flex flex-col gap-y-4">
            <li className="text-neutral-primary-tx">About</li>
            <li className="text-neutral-primary-tx">Affiliates</li>
            <li className="text-neutral-primary-tx">Careers</li>
            <li className="text-neutral-primary-tx">Announcement</li>
          </ul>
        </div>

        <div className="flex flex-col gap-y-4">
          <span className="text-xl font-semibold text-white">Support</span>

          <ul className="flex flex-col gap-y-4">
            <li className="text-neutral-primary-tx">Help Center</li>
            <li className="text-neutral-primary-tx">Contact Us</li>
            <li className="text-neutral-primary-tx">Status</li>
            <li className="text-neutral-primary-tx">Learn</li>
          </ul>
        </div>
      </div>

      <div className="w-full h-px bg-neutral-dividers mx-auto container mt-6" />

      <span className="mx-auto container mt-5 text-sm font-medium text-neutral-primary-tx flex items-center justify-center">
        Copy Right 2013-2025 Zyrix lnc. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
