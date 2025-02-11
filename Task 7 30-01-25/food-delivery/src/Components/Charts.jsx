
const Chart = () => {
  return (
    <div className="relative">
      <div className="   w-[718px] h-[327px] left-[397px] top-[465px]">
        <PieChart />
      </div>
      <div className="absolute w-[714px] h-[327px] left-[1156px] top-[465px]">
        <ChartOrder />
      </div>
      <div className="absolute w-[972px] h-[430px] left-[402px] top-[832px]">
        <TotalRevenue />
      </div>
      <div className="absolute w-[456px] h-[430px] left-[1414px] top-[832px]">
        <CustomerMap />
      </div>
    </div>
  );
};

export default Chart;

export const PieChart = () => {
  return <div className="bg-white shadow-md p-4">Pie Chart</div>;
};

export const ChartOrder = () => {
  return <div className="bg-white shadow-md p-4">Chart Order</div>;
};

export const TotalRevenue = () => {
  return <div className="bg-white shadow-md p-4">Total Revenue</div>;
};

export const CustomerMap = () => {
  return <div className="bg-white shadow-md p-4">Customer Map</div>;
};
