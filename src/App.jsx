import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Screens/Home";
const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  return <RouterProvider router={Router} />;
}

export default App;
