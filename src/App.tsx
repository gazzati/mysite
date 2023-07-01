import Header from "@components/Header"
import React, { useEffect } from "react"
import { Navigate, Route, Routes } from "react-router"

import { api } from "@root/api"
import Footer from "@root/components/Footer"
import SideEmail from "@root/components/SideEmail"
import SideSocial from "@root/components/SideSocial"
//import Spotify from "@root/components/Spotify"
import { Dictionary } from "@root/dictionary"

import routes from "./routes"

const App = () => {
  useEffect(() => {
    window.history.scrollRestoration = "manual"

    api.post("/stats/visit")
  }, [])

  return (
    <Dictionary locales={["en", "ru", "os"]} localStorageKey="locale">
      <Header />
      <SideSocial />
      <SideEmail />
      {/* <Spotify /> */}

      <main>
        <Routes>
          {routes.map(({ name, path, Component }, index) => (
            <Route key={name + index} path={path} element={<Component />} />
          ))}

          <Route path="*" element={<Navigate replace to={""} />} />
        </Routes>
      </main>
      <Footer />
    </Dictionary>
  )
}

export default App
