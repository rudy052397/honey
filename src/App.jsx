import { RouterProvider, createHashRouter } from "react-router-dom"
import ContinentsPage from "./pages/ContinentsPage"
import PrimaryLayout from "./layouts/PrimaryLayout"

const router = createHashRouter(
  [
    {
      path: '/',
      element: <PrimaryLayout />,
      children:
        [
          {
            index: true,
            element: <ContinentsPage />
          }
        ]
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App