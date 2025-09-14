import React from 'react';
// import {v4 as uuidv4} from "uuid";

const fieldTypes = [
    {type: "text", label: "Text"},
    {type: "email", label: "Email"},
    {type: "date", label: "date"},
    {type: "time", label: "time"},
    {type: "file", label: "file"},
    {type: "select", label: "select"},
    {type: "checkbox", label: "checkbox"},
    {type: "radio", label: "radio"},
    {type: "acceptance", label: "acceptance"},
];



const LeftField = () => {
  return (
    <div className='w-3/4 bg-gray-100 p-4 border-r overflow-y-auto h-full'>
        {
            fieldTypes.map((fileld) => (
                <button key={fileld.type}
                className='w-full bg-white border rounded-lg px-3 py-2 text-left mb-2 hover:bg-gray-200'
                >{fileld.label}</button>
            ))
        }
      
    </div>
  )
}

export default LeftField
