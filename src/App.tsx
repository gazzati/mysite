import Header from "@components/Header"
import React, { useState, useEffect, Suspense } from "react"
import { Navigate, Route, Routes } from "react-router"

import {api} from '@root/api'
import Footer from "@root/components/Footer"
import SideEmail from "@root/components/SideEmail"
import SideSocial from "@root/components/SideSocial"
//import Spotify from "@root/components/Spotify"
import { Locale, LocaleContext } from "@root/helpers/locales"

import routes from "./routes"

const App = () => {
  const [locale, setLocale] = useState(Locale.En)

  useEffect(() => {
    window.history.scrollRestoration = "manual"

    const storageLocale = localStorage.getItem("locale") as Locale
    if (Object.values(Locale).includes(storageLocale)) setLocale(storageLocale)

    api.post("/stats/visit")
  }, [])

  return (
    <>
      <LocaleContext.Provider value={locale}>
        <Header setLocale={setLocale}/>
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

      <Footer />
    </>
  )
}

export default App
