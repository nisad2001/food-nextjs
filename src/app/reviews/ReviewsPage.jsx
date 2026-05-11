"use client";
import ReviewCard from "@/Component/ReviewCard";
import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data?.data || data?.reviews || []);
        setLoading(false); // ✅ এখানে হবে
      })
      .catch(() => {
        setLoading(false); // error হলেও loading off
      });
  }, []);

  if (loading) {
    return <ReviewLoading />;
  }

  return (
    <div>
      <h2 className='text-5xl font-bold'>
        Total{" "}
        <span className='text-yellow-500'>
          {Array.isArray(reviews) ? reviews.length : 0}
        </span>{" "}
        Reviews Found
      </h2>

      <div className='grid grid-cols-3 my-5 gap-5'>
        {Array.isArray(reviews) &&
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
