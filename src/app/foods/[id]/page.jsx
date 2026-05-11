// app/foods/[id]/page.jsx

import Image from "next/image";
import Link from "next/link";
export function generateStaticParams() {
  return [{ id: "52896" }, { id: "53046" }, { id: "52847" }];
}
export async function generateMetadata({ params }) {
  const { id } = await params;
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );

  const { details = {} } = await res.json();
  return {
    title: details.title || "Food Details",
    generator: "Next.js",
    applicationName: "Next.js",
    referrer: "origin-when-cross-origin",
    keywords: ["Next.js", "React", "JavaScript"],
    authors: [{ name: "Seb" }, { name: "Josh", url: "https://nextjs.org" }],
    creator: "Jiachi Liu",
    publisher: "Sebastian Markbåge",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
  };
}

const getSingleFood = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );

  const data = await res.json();
  return data.details;
};

const Page = async ({ params }) => {
  const { id } = await params;

  const food = await getSingleFood(id);

  if (!food) {
    return (
      <div className='text-center text-3xl font-bold text-red-500 mt-20'>
        Food Not Found 😢
      </div>
    );
  }

  const { title, foodImg, price, category, area, video } = food;

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 px-4'>
      <div className='max-w-6xl w-full bg-white shadow-2xl rounded-3xl overflow-hidden grid md:grid-cols-2'>
        {/* Image Section */}
        <div className='relative'>
          <Image
            src={foodImg}
            alt={title}
            width={600}
            height={500}
            className='w-full h-full object-cover'
          />

          {/* overlay badge */}
          <div className='absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm'>
            🍽️ {category}
          </div>
        </div>

        {/* Content Section */}
        <div className='p-8 flex flex-col justify-center space-y-5'>
          <h1 className='text-4xl font-extrabold text-gray-800'>{title}</h1>

          <p className='text-gray-500 text-lg'>
            📍 Area: <span className='font-semibold text-gray-700'>{area}</span>
          </p>

          <div className='text-3xl font-bold text-green-600'>৳ {price}</div>

          {/* Buttons */}
          <div className='flex gap-4 mt-4'>
            <button className='flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition shadow-md'>
              Add to Cart
            </button>

            <a
              href={video}
              target='_blank'
              className='flex-1 text-center border border-gray-300 hover:bg-gray-100 py-3 rounded-xl font-semibold transition'
            >
              Watch Video
            </a>
          </div>

          {/* small info box */}
          <div className='mt-6 text-sm text-gray-400'>
            Fresh & delicious food delivered fast 🚀
          </div>
          <Link
            href='/foods'
            className='text-red-800 hover:underline text-2xl font-bold mt-10'
          >
            ← Back to Foods
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
