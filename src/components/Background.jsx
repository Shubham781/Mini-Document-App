import React from "react";

function Background() {
  return (
    <>
      <div className="fixed z-[2] w-full h-screen">
        <div className="absolute top-[5%] w-full py-5 text-zinc-500 text-xl font-semibold flex justify-center">
          Documents
        </div>
        <h1 className="absolute text-[13vw] top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] leading-none tracking-tighter font-semibold text-zinc-800">
          Docs.
        </h1>
      </div>
    </>
  );
}

export default Background;
