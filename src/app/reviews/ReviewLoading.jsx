import ReviewCardSkeliton from "@/Component/skeletons/ReviewCardSkeliton";
import React from "react";

const ReviewLoading = () => {
  return (
    <div className='grid grid-cols-3 gap-5'>
      {[...Array(6)].map((_, i) => (
        <ReviewCardSkeliton key={i}></ReviewCardSkeliton>
      ))}
    </div>
  );
};

export default ReviewLoading;
