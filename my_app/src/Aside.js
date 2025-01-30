// Import React
import React from 'react'

// Import Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";


function Aside() {
  return (
    <aside className="bg-red-950 p-3">
        <button className="p-5 text-white block rounded-xl bg-sky-400 font-medium">
            <FontAwesomeIcon icon={faPlus} />
            <span className="ml-2">Add New</span>
        </button>
        <button className="p-5 text-white block rounded-xl bg-red-400 font-medium">
            <FontAwesomeIcon icon={faTrashCan} />
            <span className="Trach">Trach</span>
        </button>
    </aside>
  )
}

export default Aside;
