import { useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import icon from "../assets/icon.png"
import { SearchForm } from "../features/search/form/form"
import { GiHamburgerMenu } from "react-icons/gi"
export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const links = [
    { href: "/photo", name: "Photos" },
    { href: "/video", name: "Videos" },
    { href: "/collection", name: "Collections" },
  ]

  return (
    <div
      className={`relative z-20 transition-position duration-150 ease-out  ${
        open && "pb-40 md:pb-0 sm:pb-0"
      }`}
    >
      <div className="flex flex-row items-center fixed top-0 w-full bg-ui py-2">
        <button
          onClick={() => setOpen((open) => !open)}
          className="relative bg-transparent px-3 select-none"
        >
          <img
            className="w-9 bg-inherit hidden sm:block md:block"
            src={icon}
            onClick={() => navigate("/photo")}
          />
          <GiHamburgerMenu
            size={28}
            className={`block sm:hidden md:hidden bg-transparent transition mx-3 ${
              open && "rotate-90 md:rotate-0 sm:rotate-0"
            }`}
          />
          {open && (
            <div className="w-[100rem] bg-ui absolute top-[40px] border-2 border-transparent border-t-back left-0 flex flex-col items-start p-4 gap-2 md:hidden sm:hidden">
              {links.map((link) => (
                <Link
                  className={`bg-transparent hover:text-primary transition text-2xl ${
                    location.pathname.startsWith(link.href) && "text-primary"
                  }`}
                  to={link.href}
                  key={link.href}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          )}
        </button>
        <div className="hidden bg-transparent sm:flex md:flex flex-row gap-3 text-xl">
          {links.map((link) => (
            <Link
              className={`bg-transparent hover:text-primary transition md:text-md text-2xl ${
                location.pathname.startsWith(link.href) && "text-primary"
              }`}
              to={link.href}
              key={link.href}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <SearchForm />
      </div>
      <div className="py-[1.85rem]" />
    </div>
  )
}
