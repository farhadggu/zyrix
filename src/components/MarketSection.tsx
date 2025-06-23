const MarketSection = () => {
  return (
    <div className="container mx-auto mt-[100px]">
      <h3 className="text-[32px] text-white font-medium">
        <span className="text-primary">Market </span>Trend
      </h3>

      <div className="bg-[#1c1c1c] rounded-4xl p-8 mt-8">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">#</th>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">Name</th>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">Price</th>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">24h Changes</th>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">Chart</th>
              <th className="text-neutral-primary-tx p-4 border-b border-neutral-dividers">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="w-full p-4 flex items-center justify-center bg-neutral-primary-bc text-white rounded-l-4xl">
                  1
                </div>
              </td>
              <td>
                <div className="w-full p-4 flex items-center justify-center bg-neutral-primary-bc text-white">
                  Bitcoin
                </div>
              </td>
              <td>
                <div className="w-full p-4 flex items-center justify-center bg-neutral-primary-bc text-white">
                  $94,456.987
                </div>
              </td>
              <td>
                <div className="w-full p-4 flex items-center justify-center bg-neutral-primary-bc text-success">
                  +16.5
                </div>
              </td>
              <td>
                <div className="w-full p-4 flex items-center justify-center bg-neutral-primary-bc text-white">s</div>
              </td>
              <td>
                <div className="w-full p-4 flex items-center justify-center bg-neutral-primary-bc text-primary rounded-r-4xl">
                  Trade
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MarketSection;
