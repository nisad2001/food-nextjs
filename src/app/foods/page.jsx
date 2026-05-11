import FoodCard from "@/Component/cards/FoodCard";
import React from "react";
import CartItems from "./CartItems";
import InputSearch from "@/Component/InputSearch";

const getFoods = async (search) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`,
    { next: { revalidate: 10 } },
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate loading delay
  return data.foods || [];
};

export const metadata = {
  title: "All Foods",
  description: "Delivering delicious food to your doorstep",
};

const FoodPage = async ({ searchParams }) => {
  const { search = "" } = await searchParams;
  console.log(search);

  const foods = await getFoods(search);
  return (
    <div>
      <h2 className='text-5xl font-bold'>
        Total <span className='text-yellow-500'>{foods.length}</span> Foods
        Found
      </h2>
      <InputSearch></InputSearch>

      <div className='flex gap-5 mt-5'>
        <div className='flex-1 grid grid-cols-3 my-5 gap-5'>
          {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
          ))}
        </div>
        <div className='w-[200px] border-2 rounded-xl text-center'>
          <h2 className='text-2xl font-bold p-4 text-center underline'>
            Cart Items
          </h2>
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default FoodPage;
