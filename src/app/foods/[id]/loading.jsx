export default function Loading() {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='max-w-6xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2 animate-pulse'>
        {/* Image Skeleton */}
        <div className='bg-gray-300 h-[400px] w-full relative'>
          <div className='absolute top-4 left-4 bg-gray-400 h-6 w-24 rounded-full'></div>
        </div>

        {/* Content Skeleton */}
        <div className='p-8 space-y-6'>
          {/* Title */}
          <div className='h-10 bg-gray-300 rounded w-3/4'></div>

          {/* Area */}
          <div className='h-5 bg-gray-200 rounded w-1/2'></div>

          {/* Price */}
          <div className='h-8 bg-gray-300 rounded w-1/3'></div>

          {/* Buttons */}
          <div className='flex gap-4 mt-6'>
            <div className='h-12 bg-gray-300 rounded-xl flex-1'></div>
            <div className='h-12 bg-gray-200 rounded-xl flex-1'></div>
          </div>

          {/* Extra text */}
          <div className='h-4 bg-gray-200 rounded w-2/3 mt-6'></div>
        </div>
      </div>
    </div>
  );
}
