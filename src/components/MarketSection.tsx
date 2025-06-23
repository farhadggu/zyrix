const MarketSection = () => {
  return (
    <div className="container mx-auto mt-[100px]">
      <h3 className="text-[32px] text-white font-medium">
        <span className="text-primary">Market </span>Trend
      </h3>

      <div className="bg-[#1c1c1c] rounded-4xl p-8 mt-8">
        <table className="w-full border-separate border-spacing-y-8">
          <thead>
            <tr>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">
                {" "}
                <div className="flex items-start w-full">#</div>
              </th>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">
                {" "}
                <div className="flex items-start w-full">Name</div>
              </th>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">
                {" "}
                <div className="flex items-start w-full">Price</div>
              </th>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">
                {" "}
                <div className="flex items-start w-full">24h Changes</div>
              </th>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">
                {" "}
                <div className="flex items-start w-full">Chart</div>
              </th>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">
                {" "}
                <div className="flex items-start w-full">Action</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="w-full p-5 flex bg-neutral-primary-bc text-white rounded-l-4xl">1</div>
              </td>
              <td>
                <div className="w-full p-5 flex font-medium bg-neutral-primary-bc text-white">
                  <img className="size-6 mr-2" src="/coins/bitcoin.svg" />
                  Bitcoin
                  <span className="text-neutral-primary-tx text-[10px] ml-1">BTC</span>
                </div>
              </td>
              <td>
                <div className="w-full p-5 flex bg-neutral-primary-bc text-white">$94,456.987</div>
              </td>
              <td>
                <div className="w-full p-5 flex bg-neutral-primary-bc text-success">+16.5</div>
              </td>
              <td>
                <div className="w-full p-5 flex bg-neutral-primary-bc text-white">
                  <img src="/illustrations/success-chart.svg" alt="success" className="h-6" />
                </div>
              </td>
              <td>
                <div className="w-full p-5 flex bg-neutral-primary-bc text-primary rounded-r-4xl">Trade</div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="w-full p-5 flex text-white rounded-l-4xl">2</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white">
                  <img className="size-6 mr-2" src="/coins/ethereum.svg" />
                  Ethereum
                  <span className="text-neutral-primary-tx text-[10px] ml-1">ETH</span>
                </div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white">$50,632.964</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-error">-10.8</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white h-7">
                  <img src="/illustrations/error-chart.svg" className="h-6" alt="error" />
                </div>
              </td>
              <td>
                <div className="w-full p-5 flex text-primary rounded-r-4xl">Trade</div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="w-full p-5 flex text-white rounded-l-4xl">3</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white">
                  <img className="size-6 mr-2" src="/coins/tether.svg" />
                  Tether
                  <span className="text-neutral-primary-tx text-[10px] ml-1">USDT</span>
                </div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white">$15,896.123</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-error">-5.8</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white h-7">
                  <img src="/illustrations/error-chart.svg" className="h-6" alt="error" />
                </div>
              </td>
              <td>
                <div className="w-full p-5 flex text-primary rounded-r-4xl">Trade</div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="w-full p-5 flex text-white rounded-l-4xl">4</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white">
                  <img className="size-6 mr-2" src="/coins/ripple.svg" />
                  Ripple
                  <span className="text-neutral-primary-tx text-[10px] ml-1">XRP</span>
                </div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white">$5,548.621</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-success">+14.6</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white h-7">
                  <img src="/illustrations/success-chart.svg" className="h-6" alt="error" />
                </div>
              </td>
              <td>
                <div className="w-full p-5 flex text-primary rounded-r-4xl">Trade</div>
              </td>
            </tr>

            <tr>
              <td>
                <div className="w-full p-5 flex text-white rounded-l-4xl">5</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white">
                  <img className="size-6 mr-2" src="/coins/dogeicon.svg" />
                  Dogecoin
                  <span className="text-neutral-primary-tx text-[10px] ml-1">Dodge</span>
                </div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white">$15,548.621</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-success">+14.6</div>
              </td>
              <td>
                <div className="w-full p-5 flex text-white h-7">
                  <img src="/illustrations/success-chart.svg" className="h-6" alt="error" />
                </div>
              </td>
              <td>
                <div className="w-full p-5 flex text-primary rounded-r-4xl">Trade</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketSection;
