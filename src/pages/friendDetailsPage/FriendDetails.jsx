import { useContext } from "react";
import { FaCommentDots, FaPhoneAlt, FaVideo } from "react-icons/fa";
import { HiOutlineArchive, HiOutlineClock } from "react-icons/hi";
import { MdDeleteOutline } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { FriendContext } from "../../context/FriendProvider";
import { toast } from "react-toastify";

const FriendDetails = () => {
    const { id } = useParams();
    const {connectFriends, setConnectFriends} = useContext(FriendContext);
    console.log(connectFriends, "friends from context");
    const friends = useLoaderData();
    const friend = friends.find(f => f.id === parseInt(id));
   const { id: friendId, name, picture, days_since_contact, tags, status, goal, next_due_date, bio } = friend;

   const formattedDate = new Date(next_due_date).toLocaleDateString('en-US', {
  month: 'short',
  day: 'numeric',
  year: 'numeric'
});

const handleFriend = (method) => {
        setConnectFriends((prev) => [
            ...prev,
            {
                id: friend.id, method,
                name: friend.name,
                date: new Date().toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })
            }
        ]);
        toast.success(`${friend.name} ${method} successfuly `)
    };
  return (
   <div className=" bg-base-200 p-6">
      <div className="max-w-6xl mx-auto space-y-4">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
          <div>
            <div>
                <div className="card flex items-center gap-2 bg-base-100 shadow p-2 text-center">
            <div className="avatar flex justify-center ">
              <div className="w-20 rounded-full">
                <img src={picture} alt="profile" />
              </div>
            </div>
            <h2 className="text-xl font-semibold">{name}</h2>

            <div className="flex items-center gap-2">
        {friend.tags.map(tag => (<div key={tag} className="badge  rounded-full px-4 py-2 bg-green-200 text-[12px] ">{tag.toUpperCase()}</div>))}
    </div>
            <div className="badge rounded-full px-4 py-2 bg-red-400 text-white">{friend.status}</div>

            <p className="text-xs italic text-gray-500">
              {bio}
            </p>

            <p className="text-sm text-gray-400">
              Preferred: email
            </p>
            
          </div>
            </div>
            <div> <div className="mt-5 space-y-2">
              <button className="btn bg-base-100 shadow  w-full flex items-center gap-2">
                <HiOutlineClock /> Snooze 2 Weeks
              </button>

              <button className="btn bg-base-100 shadow w-full flex items-center gap-2">
                <HiOutlineArchive /> Archive
              </button>

              <button className="btn bg-base-100 text-red-400 shadow w-full flex items-center gap-2">
                <MdDeleteOutline /> Delete
              </button>
            </div></div>
          </div>

          {/* Right Side */}
          <div className="md:col-span-2 space-y-4">

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card bg-base-100 p-6 shadow text-center">
                <h2 className="text-3xl text-[#244D3F] font-semibold">{days_since_contact}</h2>
                <p className="text-[#64748B]">Days Since Contact</p>
              </div>

              <div className="card bg-base-100 p-6 shadow text-center">
                <h2 className="text-3xl text-[#244D3F] font-semibold">{goal}</h2>
                <p className="text-[#64748B]">Goal (Days)</p>
              </div>

              <div className="card bg-base-100 p-6 shadow text-center">
                <h2 className="text-2xl text-[#244D3F] font-semibold">{formattedDate}</h2>
                <p className="text-[#64748B]">Next Due</p>
              </div>
            </div>

            {/* Relationship Goal */}
            <div className="card bg-base-100 p-6 shadow flex flex-row justify-between items-center">
              <div>
                <h3 className="text-lg text-[#244D3F] font-semibold">
                  Relationship Goal
                </h3>
                <p className="text-[#64748B]">
                  Connect every <span className="font-bold text-[#244D3F] ">{goal} days</span> 
                </p>
              </div>
              <button className="btn btn-sm ">Edit</button>
            </div>

            {/* Quick Check-In */}
            <div className="card bg-base-100 p-6 shadow">
              <h3 className="text-lg text-[#244D3F] font-semibold mb-4">
                Quick Check-In
              </h3>

              <div className="grid grid-cols-3 gap-6">
                <button onClick={() => handleFriend("call")} className="btn bg-[#F8FAFC] text-[#1F2937] shadow flex flex-col h-20 gap-2">
                  <FaPhoneAlt className="text-lg" />
                  <span>Call</span>
                </button>

                <button onClick={() => handleFriend("text")} className="btn bg-[#F8FAFC] text-[#1F2937]  shadow flex flex-col h-20 gap-2">
                  <FaCommentDots className="text-lg" />
                  <span>Text</span>
                </button>

                <button onClick={() => handleFriend("video")} className="btn bg-[#F8FAFC] text-[#1F2937] shadow flex flex-col h-20 gap-2">
                  <FaVideo className="text-lg" />
                  <span>Video</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default FriendDetails;