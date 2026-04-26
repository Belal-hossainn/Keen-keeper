import { FaCommentDots, FaPhoneAlt, FaVideo } from "react-icons/fa";

const TimelineCard = ({ friend }) => {
    const { name, method, date } = friend;
  return (
   <div className="w-full flex gap-4 p-4 bg-base-100 shadow rounded-lg">

            {/* Icon */}
            <div className="flex-shrink-0">
                {method === "text" && (
                    <FaCommentDots className="text-lg" />
                )}

                {method === "call" && (
                    <FaPhoneAlt className="text-lg" />
                )}

                {method === "video" && (
                    <FaVideo className="text-lg" />
                )}
            </div>

            {/* Content */}
            <div className="flex flex-col">
                <h2 className="font-semibold capitalize">
                    {method === "text" && (
                        <p><span className="font-semibold">Text</span> with {name}</p>
                    )}

                    {method === "call" && (
                        <p><span className="font-semibold">Call</span> with {name}</p>
                    )}

                    {method === "video" && (
                        <p><span className="font-semibold">Video</span> with {name}</p>
                    )}
                </h2>

                <p className="text-xs opacity-60">
                    {date || "No date"}
                </p>
            </div>

        </div>
  );
};

export default TimelineCard;