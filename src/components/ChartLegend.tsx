import { activeCommunityMembers } from "../data/members";

const ChartLegend = () => {
  return (
    <div className="flex items-center gap-6 lg:gap-16 flex-wrap">
      {Object.keys(activeCommunityMembers).map((key) => {
        const { total, color } =
          activeCommunityMembers[key as keyof typeof activeCommunityMembers];

        return (
          <div className="flex items-center gap-2">
            <div
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="font-semibold capitalize">{key}</span>
            <span className="leading-none flex items-center justify-center p-[3px] border border-slate-400 rounded-md font-semibold">
              {total}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default ChartLegend;
