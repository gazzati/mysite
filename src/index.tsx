import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import Loader from "@components/Loader"
import "@styles/index.scss"

const App = lazy(() => import("./App"))

ReactDOM.render(
  <Router>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </Router>,
  document.getElementById("root")
)
