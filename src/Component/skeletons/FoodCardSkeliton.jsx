// components/FoodCardSkeleton.jsx

const FoodCardSkeleton = () => {
  return (
    <div className='bg-white shadow-md rounded-2xl overflow-hidden animate-pulse'>
      <div className='w-full h-48 bg-gray-300'></div>

      <div className='p-4 space-y-3'>
        <div className='h-5 bg-gray-300 rounded w-3/4'></div>
        <div className='h-4 bg-gray-200 rounded w-1/2'></div>

        <div className='h-5 bg-gray-300 rounded w-1/4'></div>

        <div className='flex gap-2 mt-3'>
          <div className='flex-1 h-10 bg-gray-300 rounded-xl'></div>
          <div className='flex-1 h-10 bg-gray-200 rounded-xl'></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
