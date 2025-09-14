import Canvus from "@/components/Canvus";
import LeftField from "@/components/LeftField";
import Navbar from "@/components/Navbar";
import RightField from "@/components/RightField";


import Image from "next/image";

export default function Home() {
  return (
      <div className="h-screen">
        <Navbar />
        <div className="grid grid-cols-3 h-[calc(100vh-64px)]">
          <div className="flex-1 overflow-y-auto p-6">
            <LeftField/>
          </div>
        
          <div className="flex-1 overflow-y-auto p-6">
            <Canvus/>
          </div>
          <div className="w-1/4 bg-white border-l shadow-md">
            <RightField/>
          </div>
        </div>
      </div>
  );
}
