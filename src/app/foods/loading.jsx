import FoodCardSkeleton from "@/Component/skeletons/FoodCardSkeliton";
import React from "react";

const loading = () => {
  return (
    <div className='text-5xl font-bold'>
      {[...Array(12)].map((_, i) => (
        <FoodCardSkeleton key={i}></FoodCardSkeleton>
      ))}
    </div>
  );
};

export default loading;
