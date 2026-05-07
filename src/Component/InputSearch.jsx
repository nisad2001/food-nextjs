"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const InputSearch = () => {
  const router = useRouter();
  const params = useSearchParams();
  const handleSearch = (e) => {
    e.preventDefault();
    const value = e.target.search.value;

    const newParams = new URLSearchParams(params.toString());
    newParams.set("search", value);
    router.push(`?${newParams.toString()}`);
  };
  return (
    <div className='my-3'>
      <form onSubmit={handleSearch}>
        <input
          name='search'
          type='text'
          placeholder='Enter food name'
          className=' border-2 rounded-xl p-2 w-2xl'
        />
        <button className='bg-yellow-500 text-black p-2 rounded-xl hover:bg-yellow-600 cursor-pointer transition ml-2 font-semibold px-5  py-2'>
          search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
