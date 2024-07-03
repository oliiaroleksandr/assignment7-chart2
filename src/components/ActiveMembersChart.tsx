import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { activeCommunityMembers } from "../data/members";

const ActiveMembersChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart>
        <XAxis dataKey="date" allowDuplicatedCategory={false} />
        <YAxis ticks={[0, 300, 600, 900, 1200, 1500]} interval={0} />
        <Tooltip  />
        {Object.keys(activeCommunityMembers).map((key) => {
          const { data, color } =
            activeCommunityMembers[key as keyof typeof activeCommunityMembers];

          return (
            <Line
              key={key}
              type="monotone"
              data={data}
              dataKey="members"
              name={key}
              stroke={color}
              strokeWidth={2}
            />
          );
        })}
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ActiveMembersChart;
