"use client";
import Image from "next/image";
import { useState } from "react";

const ReviewCard = ({ review }) => {
  const { user, photo, rating, review: text, likes, date } = review;

  const [likeCount, setLikeCount] = useState(likes.length);
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className='bg-white shadow-md rounded-2xl p-5 border hover:shadow-lg transition'>
      {/* User Info */}
      <div className='flex items-center gap-4 mb-3'>
        <Image
          src={photo}
          alt={user}
          width={50}
          height={50}
          className='rounded-full'
        />
        <div>
          <h3 className='font-semibold text-lg'>{user}</h3>
          <p className='text-sm text-gray-500'>
            {new Date(date).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Rating */}
      <div className='flex items-center mb-2'>
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className='text-yellow-400 text-lg'>
            ★
          </span>
        ))}
      </div>

      {/* Review Text */}
      <p className='text-gray-700 mb-3 leading-relaxed'>{text}</p>

      {/* Like Button */}
      <button
        onClick={handleLike}
        className={`flex items-center gap-2 text-sm px-3 py-1 cursor-pointer rounded-full border transition 
        ${liked ? "bg-red-100 text-red-500 border-red-300" : "text-gray-500"}`}
      >
        ❤️ {likeCount}
      </button>
    </div>
  );
};

export default ReviewCard;
