import { Suspense } from "react";
import { Router } from "./Routes";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <Suspense>
      <RouterProvider router={Router} />
    </Suspense>
  )
}

export default App;