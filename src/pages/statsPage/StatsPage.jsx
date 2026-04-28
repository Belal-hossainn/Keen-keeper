import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { useContext } from "react";
import { FriendContext } from "../../context/FriendProvider";

const StatsPage = () => {
  const { connectFriends } = useContext(FriendContext);
  const callConnections = connectFriends.filter(friend => friend.method === "call");
  const textConnections = connectFriends.filter(friend => friend.method === "text");
  const videoConnections = connectFriends.filter(friend => friend.method === "video");

  const data = [
    { name: "Call", value: callConnections.length, fill: "#244D3F" },
    { name: "Text", value: textConnections.length, fill: "#7E35E1" },
    { name: "Video", value: videoConnections.length, fill: "#37A163" },
  ];

  return (
    <div className=" my-4 container mx-auto">
      <h2 className="font-bold text-[#244D3F] text-4xl mb-6 text-center">
        Friendship Analytics
      </h2>
      <div className="shadow p-6 rounded-md border border-slate-300">
        <h3 className="font-semibold text-lg mb-4 text-[#244D3F] text-left">By interaction type</h3>
        <PieChart
        style={{
          width: "100%",
          maxWidth: "400px",
          maxHeight: "70vh",
          margin: "auto",
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie
          data={data}
          innerRadius="80%"
          outerRadius="100%"
          cornerRadius="50%"
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
          isAnimationActive={true}
        />
        <Legend />
        <Tooltip />
      </PieChart>
      </div>  
    </div>
  );
};

export default StatsPage;