import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CiSearch } from "react-icons/ci"

export const SearchForm = () => {
  const [term, setTerm] = useState<string>("")
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (!term || !term.length) {
      return
    }
    navigate(`/search/${term}`)
  }

  return (
    <div className="flex flex-row ml-auto bg-inherit mr-3">
      <form className="rounded" onSubmit={handleSubmit}>
        <input
          className="text-lg relative h-11 outline-none px-1 rounded-l focus:placeholder:-translate-x-28 hover:placeholder:-translate-x-28 placeholder:transition duration-300"
          onChange={(e) => setTerm(e.target.value)}
          type="text"
          placeholder="search photos"
        />
      </form>
      <button className="bg-back rounded-r px-1" onClick={handleSubmit}>
        <CiSearch size={25} />
      </button>
    </div>
  )
}
