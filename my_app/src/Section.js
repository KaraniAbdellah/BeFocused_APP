// Import Essentiel Component
import Main  from './Main';
import Aside  from './Aside';
import React from 'react';


export default function Section() {
  return (
    <section className="flex justify-between ml-10 mr-10 mt-5 rounded-md bg-gray-50 p-5">
        <Aside></Aside>
        <Main></Main>
    </section>
  )
}



