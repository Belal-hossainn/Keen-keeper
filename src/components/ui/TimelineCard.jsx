import { use, useEffect } from "react";
import { FaCommentDots, FaPhoneAlt, FaVideo } from "react-icons/fa";

const TimelineCard = ({ friend, sortingType }) => {
    const { name, method, date } = friend;

    useEffect(() => {
        
    }, [sortingType]);

     const isVisible = sortingType ? method === sortingType : true;

    if (!isVisible) return null;

  return (
   <div className="w-full flex gap-4 items-center  p-4 bg-base-100 shadow rounded-lg">

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

            <div className="flex flex-col">
                <h2 className="font-semibold capitalize">
                    {method === "text" && (
                        <p className="font-semibold text-[#244D3F]">Text<span className="text-[#64748B] text-sm"> with {name}</span> </p>
                    )}

                    {method === "call" && (
                       <p className="font-semibold text-[#244D3F]">Call<span className="text-[#64748B] text-sm"> with {name}</span> </p>
                    )}

                    {method === "video" && (
                        <p className="font-semibold text-[#244D3F]">Video<span className="text-[#64748B] text-sm"> with {name}</span> </p>
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