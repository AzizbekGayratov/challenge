import React, { useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";

export default function LotSoldBtn() {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      onClick={() => setIsLiked(!isLiked)}
      className="hover:shadow-lg hover:border hover:border-gray-200 lg:leading-normal p-2 rounded-md absolute right-0 top-0"
    >
      {isLiked ? (
        <IoMdHeart size={20} className="text-red-600" />
      ) : (
        <IoMdHeartEmpty size={20} className=" text-red-600 " />
      )}
    </button>
  );
}
