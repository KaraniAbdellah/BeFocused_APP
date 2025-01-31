import React from 'react'

export default function Card() {
  return (
    <div className="card bg-gray-100 p-2 rounded-sm lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-6">
        <h3 className="font-semibold">Task Name</h3>
        <p className="description mb-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, sint?
        </p>
        <hr />
        <div className="btns mt-3">
            <button class="bg-green-600 hover:bg-green-700 text-white text-sm font-bold py-1 px-2 rounded">Start</button>
            <button class="bg-red-600 hover:bg-red-700 mx-2 text-white text-sm font-bold py-1 px-2 rounded">Delete</button>
            <button class="bg-yellow-500 hover:bg-yellow-600  text-white text-sm font-bold py-1 px-2 rounded">State</button>
        </div>
    </div>
  );
}

