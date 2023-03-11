import Loader from "@components/Loader"
import React, { lazy, Suspense } from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import "@styles"

const App = lazy(() => import("./App"))

ReactDOM.render(
  <Router>
    <Suspense fallback={<Loader />}>
      <App />
    </Suspense>
  </Router>,
  document.getElementById("root")
)
