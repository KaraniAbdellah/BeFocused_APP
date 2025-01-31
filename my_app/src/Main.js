import React from 'react';
import Card from "./Card";


export default function Main() {
  return (
    <main className="bg-white inset-shadow-2xs py-4 px-5 rounded w-[68%] ">
        <h2 className="font-semibold text-lg mb-5">Today tasks</h2>
        <ul class="flex border-b navigation mb-5">
            <button className="text-center block border border-blue-500 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Do</button>
            <button className="text-center block border border-blue-500 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Doing</button>
            <button className="text-center block border border-blue-500 py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white">Done</button>
        </ul>
        <div className="cards flex justify-center items-center">
            <Card></Card>
            <Card></Card>
            <Card></Card>
        </div>
    </main>
  )
}
