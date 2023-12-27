import Loader from "@components/Loader"
import React, { lazy, Suspense } from "react"
import {createRoot} from "react-dom/client"

import "@styles"

const App = lazy(() => import("./App"))

const rootElement = document.getElementById("root")
const root = createRoot(rootElement as HTMLElement)

root.render(
  <Suspense fallback={<Loader />}>
    <App />
  </Suspense>
)
