// Import Essentiel Component
import Main  from './Main';
import Aside  from './Aside';


import React from 'react'

export default function Section() {
  return (
    <section className="flex justify-between ml-10 mr-10 bg-slate-400
    p-5">
        <Aside></Aside>
        <Main></Main>
    </section>
  )
}



