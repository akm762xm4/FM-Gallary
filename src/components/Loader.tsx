export const Loader = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <div className="border-4 border-solid border-[#EFF6E0] border-t-[#01161E] rounded-full w-12 md:w-16 h-12 md:h-16 animate-spin"></div>
      <div className="text-xlmd:text-3xl tracking-tight text-[#EF233C]">
        Loading...
      </div>
    </div>
  )
}

export const SmallLoader = () => {
  return (
    <div className="z-20 fixed bottom-1 left-1/2 -translate-x-1/2 bg-transparent transition">
      <div className="bg-inherit w-12 md:w-16 h-12 md:h-16 border-4 md:border-[6px] border-solid border-t-transparent border-[#8d99ae] rounded-full animate-spin relative">
        <div className="bg-inherit absolute top-1 left-1 right-1 bottom-1 border-4 border-solid border-r-transparent border-b-transparent border-t-[#ef2352] border-l-[#ef2352] rounded-full"></div>
      </div>
    </div>
  )
}
