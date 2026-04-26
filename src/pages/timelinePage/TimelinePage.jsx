import { useContext } from "react";
import { FriendContext } from "../../context/FriendProvider";
import TimelineCard from "../../components/ui/TimelineCard";

const TimelinePage = ({ items }) => {
  const { connectFriends } = useContext(FriendContext);
 

  
  return (
    <div className="container md:max-w-5xl mx-auto p-4 flex flex-col gap-6">
      <h1 className="font-bold text-[##244D3F] text-2xl">Timeline</h1>
      {
        connectFriends.map((friend) => (
          <TimelineCard key={friend.id} friend={friend} />
        ))
      }
    </div>
  );
};

export default TimelinePage;