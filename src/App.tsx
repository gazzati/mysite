import React, { useState, useEffect, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router"

import Header from "@components/Header"
import SideSocial from "@root/components/SideSocial"
import SideEmail from "@root/components/SideEmail"
//import Spotify from "@root/components/Spotify"
import { Locale, LocaleContext } from "@root/helpers/locales"

import routes from "./routes"

const App = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [locale, setLocale] = useState(Locale.En)

  useEffect(() => {
    const storageLocale = localStorage.getItem("locale") as Locale
    if(Object.values(Locale).includes(storageLocale)) setLocale(storageLocale)
  }, [])

  const toggleMenuOpen = () => {
    document.body.classList.toggle("blur")
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <LocaleContext.Provider value={locale} >
        <Header setLocale={setLocale} menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
        <SideSocial />
        <SideEmail />
        {/* <Spotify /> */}

        <main>
          <Routes>
            {routes.map(({ name, path, Component }, index) => (
              <Route
                key={name + index}
                path={path}
                element={
                  <Suspense fallback={null}>
                    <Component />
                  </Suspense>
                }
              />
            ))}

            <Route path="*" element={<Navigate replace to={""} />} />
          </Routes>
        </main>
      </LocaleContext.Provider>
    </>
  )
}

export default App
