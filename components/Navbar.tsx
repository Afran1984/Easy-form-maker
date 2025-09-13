"use client";
import { useState } from 'react';

const Navbar = () => {
    const [previewModel, sertPreviewModel] = useState(false);
  return (
    <div className='w-full bg-gray-800 text-white px-4 py-3 flex justify-between items-center shadow-md'>
      <h1>Daynamic Form Builders</h1>
      <button onClick={()=>sertPreviewModel(!previewModel)} className='bg-amber-500 rounded-2xl px-2 hover:bg-blue-600'>{previewModel? "Edit Form" : "Viwes"}</button>
    </div>
  )
}

export default Navbar
