import React from "react";

const SpacingAndSizing = () => {
  return (
    <div>
      <div>
        <h3 className="text-2xl">Spacing And Sizing</h3>
        <button className="bg-blue-400 text-white p-4 m-1">Tıkla</button>
        <button className="bg-blue-400 text-white px-4 m-1">Tıkla</button>
        <button className="bg-blue-400 text-white px-4 ml-4">Tıkla</button>
        <button className="bg-blue-400 text-white ms-4">Tıkla</button>
        <button className="bg-blue-400 text-white px-4 ms-2">Tıkla</button>
        <button className="bg-green-400 text-white px-4 mx-2 py-2 border-green-800 rounded-full">Gönder</button>
        <button className="bg-green-400 text-white px-4 mx-2 py-2 border-green-800 rounded-md">Gönder</button>
        <button className="bg-green-400 text-white px-4 mx-2 py-4 border-[3px] rounded-[50%] "></button>
        <button className="bg-green-400 text-white px-4 mx-2 py-4 border-[3px] rounded-[50%] w-50 "></button>
        <button className="bg-green-400 text-white px-4 mx-2 py-4 border-[3px] rounded-[50%] w-1/2"></button>
      </div>
    </div>
  );
};

export default SpacingAndSizing;
