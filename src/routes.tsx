import { lazy, LazyExoticComponent, ReactNode } from "react"

const Home = lazy(() => import("./pages/Home"))
const TestPage = lazy(() => import("./pages/Test"))

type Route = {
  name: string
  path: string
  Component: LazyExoticComponent<() => JSX.Element>
  Fallback: ReactNode | null
}

const routes = [
  {
    name: "home",
    path: "",
    Component: Home,
    Fallback: null
  },
  {
    name: "test-page",
    path: "test-page",
    Component: TestPage,
    Fallback: null
  }
] as Array<Route>

export default routes
