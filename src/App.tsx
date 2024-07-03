import { ActiveMembersChart, ChartLegend } from "./components";

const App = () => {
  return (
    <div className="container px-4 mx-auto py-10">
      <div className="mb-10 flex items-center justify-between gap-4 flex-wrap ml-16">
        <h1 className="text-3xl font-semibold text-slate-600 leading-none">
          Active community members
        </h1>
        <div className="mt-2.5">
          <ChartLegend />
        </div>
      </div>
      <ActiveMembersChart />
    </div>
  );
};

export default App;
