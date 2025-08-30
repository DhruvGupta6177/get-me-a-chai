import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex justify-center gap-4 items-center text-white h-[44vh] flex-col">
        <div className="font-bold gap-2 flex text-5xl">
          Get Me A Chai <span className=""><img className="rounded-full invertImg"  width={88} src="https://imgs.search.brave.com/RmoK3snXJ-PALuef1YeVp3pxEfOexgImJvj5-r3Z9Ns/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/NDExOTcwNTkwNTYt/N2M0YTY3MzZkZTdl/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjAuMyZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE1UVjhmR052/YVc1OFpXNThNSHg4/TUh4OGZEQT0.jpeg" alt="" /></span>
        </div>
        <p>
          A crowdfunding platform for creators. Get funded by your fans and followers.Start Now!
        </p>
        <div>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start here</button>
          <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
        </div>
      </div>
      <div className="bg-white h-1 opacity-40"></div>


      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-3xl font-bold text-center mb-14">Your Fans Can Buy You a Chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="bitcoin.png" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>

          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>

          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-400 rounded-full p-2 text-black" width={88} src="" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are available for you to help you</p>

          </div>
        </div>
      </div>

      <div className="bg-white h-1 opacity-40"></div>


      <div className="text-white container mx-auto pb-32 pt-14 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center mb-14">Your Fans Can Buy You a Chai</h1>
       
        <iframe width="560" height="315" src="https://www.youtube.com/embed/gIOea2pgfIo?si=nTB7kg_dvW9-u9EN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

    </>
  );
}
