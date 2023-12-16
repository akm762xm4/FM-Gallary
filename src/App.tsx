import { Navbar } from "./components/Navbar"
import { Routes } from "./routes"

export const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes />
      </main>
    </>
  )
}
