import React, { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router"

import Header from "@components/Header"
import SideSocial from "@root/components/SideSocial"
import SideEmail from "@root/components/SideEmail"
import Spotify from "@root/components/Spotify"

import routes from "./routes"

const App = () => {
  return (
    <>
      <Header />
      <SideSocial />
      <SideEmail />
      <Spotify />
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
    </>
  )
}

export default App
