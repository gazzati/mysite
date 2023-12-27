
import Footer from "@components/Footer"
import Header from "@components/Header"
import SideEmail from "@components/SideEmail"
import SideSocial from "@components/SideSocial"
import About from "@sections/About"
import Contacts from "@sections/Contacts"
import Projects from "@sections/Projects"
import Start from "@sections/Start"
import React, { useEffect } from "react"

import { api } from "@root/api"
import { Dictionary } from "@root/dictionary"

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
        <Start />
        <About />
        <Projects />
        <Contacts />
      </main>
      <Footer />
    </Dictionary>
  )
}

export default App
