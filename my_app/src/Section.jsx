// Import Essentiel Component
import Main  from './Main';
import Aside  from './Aside';
import React from 'react';


export default function Section() {
  return (
    <section className="justify-between flex flex-col md:flex-col lg:flex-row sm:flex-col mx-5 my-5 rounded-md bg-gray-50 p-5">
        <Aside></Aside>
        <Main></Main>
    </section>
  );
}



