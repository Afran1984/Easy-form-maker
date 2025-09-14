import React from 'react'
import { formSchema } from "@/utils/schema";
import { saveFormData, loadFormData } from "@/utils/storage";

const Canvus = () => {
    console.log(formSchema.fields);
    saveFormData({ name: "Jim", email: "test@dorik.io" });
    console.log(loadFormData());
  return (
    <div>
        {formSchema.fields.map((field) => (
            <div 
            key={field.id}
            className='w-full bg-white border rounded-lg px-3 py-2 text-left mb-2 hover:bg-gray-200'>{field.label}</div>
        ))
        }
      
    </div>
  )
}

export default Canvus
