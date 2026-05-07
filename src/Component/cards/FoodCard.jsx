// components/FoodCard.jsx

import Link from "next/link";
import CartButton from "../buttons/CartButton";

const FoodCard = ({ food }) => {
  const { id, title, foodImg, price, category } = food;

  return (
    <div className='bg-white shadow-md rounded-2xl overflow-hidden'>
      <img src={foodImg} alt='' className='w-full h-48 object-cover' />

      <div className='p-4 space-y-2'>
        <h2 className='text-xl font-semibold'>{title}</h2>
        <p className='text-gray-500 text-sm'>{category}</p>

        <p className='text-lg font-bold text-green-600'>৳ {price}</p>

        <div className='flex gap-2 mt-3'>
          <CartButton food={food} />

          <Link
            href={`/foods/${id}`}
            className='flex-1 text-center border border-gray-300 py-2 rounded-xl hover:bg-gray-100 transition'
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
