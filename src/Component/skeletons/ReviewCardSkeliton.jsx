const ReviewCardSkeliton = () => {
  return (
    <div className='animate-pulse bg-white shadow-md rounded-2xl p-5 border'>
      {/* User */}
      <div className='flex items-center gap-4 mb-3'>
        <div className='w-12 h-12 bg-gray-300 rounded-full'></div>
        <div className='space-y-2'>
          <div className='w-32 h-4 bg-gray-300 rounded'></div>
          <div className='w-24 h-3 bg-gray-200 rounded'></div>
        </div>
      </div>

      {/* Stars */}
      <div className='flex gap-2 mb-2'>
        <div className='w-5 h-5 bg-gray-300 rounded'></div>
        <div className='w-5 h-5 bg-gray-300 rounded'></div>
        <div className='w-5 h-5 bg-gray-300 rounded'></div>
      </div>

      {/* Text */}
      <div className='space-y-2'>
        <div className='w-full h-3 bg-gray-300 rounded'></div>
        <div className='w-5/6 h-3 bg-gray-300 rounded'></div>
        <div className='w-2/3 h-3 bg-gray-300 rounded'></div>
      </div>

      {/* Button */}
      <div className='mt-3 w-16 h-6 bg-gray-300 rounded-full'></div>
    </div>
  );
};

export default ReviewCardSkeliton;
