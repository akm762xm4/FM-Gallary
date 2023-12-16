import { Link } from "react-router-dom"

export const NoResults = () => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center h-screen text-center">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-[#EF233C]">
        Page Not Found
      </h1>
      <p className="text-lg">
        Sorry, the page you are looking for does not exist.
      </p>
      <div>or You can browse</div>
      <div className="flex gap-2 text-xl">
        <Link to="/photo">Photos</Link>
        <div className="w-0 h-6 border-[#EF233C] border" />
        <Link to="/video">Videos</Link>
        <div className="w-0 h-6 border-[#EF233C] border" />
        <Link to="/collection">Collections</Link>
      </div>
    </div>
  )
}
