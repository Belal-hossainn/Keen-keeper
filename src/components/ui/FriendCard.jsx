import { Link } from "react-router";




const FriendCard = ({ friend }) => {
  return (
    <Link to={`/friend/${friend.id}`} className="card bg-base-100 flex flex-col justify-center items-center shadow-sm py-6">
  <figure className="rounded">
    <img className="w-[100px] h-[100px] object-cover rounded-full"
      src={friend.picture}
      alt={friend.name} />
  </figure>
  <div className="card-body flex items-center text-center">
    <h2 className="card-title text-[#1F2937] font-bold text-lg">
      {friend.name}
    </h2>
    <p className="text-[#64748B] text-sm">{friend.days_since_contact}d ago</p>
    <div className="flex items-center gap-2">
        {friend.tags.map(tag => (<div key={tag} className="badge  rounded-full px-4 py-2 bg-green-200 text-[12px] ">{tag.toUpperCase()}</div>))}
    </div>
      <div className={`badge rounded-full px-4 py-2 text-white ${friend.status === 'on-track' ? 'bg-[#244D3F]' : friend.status === 'almost due' ? 'bg-[#EFAD44]' : 'bg-red-500'}`}>
        {friend.status}
      </div>
  </div>
</Link>
  );
};

export default FriendCard;