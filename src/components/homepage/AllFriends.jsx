import { use } from "react";
import FriendCard from "../ui/FriendCard";

const friendsPromise = fetch('/friendsData.json').then(res=> res.json());
const AllFriends = () => {
    const friends = use(friendsPromise);
    console.log(friends, "friends data");
  return (
    <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-[#1F2937] mb-4">Your Friends</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {friends.map(friend => (
            <FriendCard key={friend.id} friend={friend} />
        ))}
    </div>
    </div>
  );
}

export default AllFriends;
