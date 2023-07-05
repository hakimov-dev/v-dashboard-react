import React, { useState } from 'react'

const Cards = () => {

    const [modal, setModal] = useState<Boolean>(false)

    function updateModal(){
        setModal(!modal)
    }
    return (
        <div>
             <h3 className="text-3xl font-medium text-gray-700">
      Modal
    </h3>
    <button
      className="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none"
      onClick={updateModal}
    >
      Open Modal
    </button>

        </div>
    )
}

export default Cards