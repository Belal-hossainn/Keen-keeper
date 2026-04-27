import { useContext, useState } from "react";
import { FriendContext } from "../../context/FriendProvider";
import TimelineCard from "../../components/ui/TimelineCard";

const TimelinePage = () => {
  const { connectFriends } = useContext(FriendContext);
  const [isOpen, setIsOpen] = useState(false);
  const [sortingtype, setSortingType] = useState("");

  return (
    <div className="container md:max-w-5xl mx-auto p-4 pb-10 flex flex-col gap-6">
      <h1 className="font-bold text-[#244D3F] text-3xl">Timeline</h1>
      
      <div className="relative inline-block">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="btn m-1 text-gray-500"
        >
          Filter Timeline: {sortingtype} ⬇️
        </button>

        {isOpen && (
          <ul className="absolute z-10 mt-2 w-52 bg-base-100 text-gray-500 rounded-box shadow p-2">
            <li><button className="w-full text-left p-2 hover:bg-base-200 rounded" onClick={() => { setSortingType(""); setIsOpen(false); }}>All</button></li>
            <li><button className="w-full text-left p-2 hover:bg-base-200 rounded" onClick={() => { setSortingType("call"); setIsOpen(false); }}>Call</button></li>
            <li><button className="w-full text-left p-2 hover:bg-base-200 rounded" onClick={() => { setSortingType("text"); setIsOpen(false); }}>Text</button></li>
            <li><button className="w-full text-left p-2 hover:bg-base-200 rounded" onClick={() => { setSortingType("video"); setIsOpen(false); }}>Video</button></li>
          </ul>
        )}
      </div>

      {connectFriends.length === 0 
        ? <p className="text-[#64748B] text-center mt-10">No interactions yet. Go connect with a friend!</p>
        : connectFriends.map((friend) => (
            <TimelineCard key={friend.id} friend={friend} sortingType={sortingtype} />
          ))
      }
    </div>
  );
};

export default TimelinePage;