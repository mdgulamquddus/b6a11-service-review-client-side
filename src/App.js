import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./utils/Route";

function App({ children }) {
  return <RouterProvider router={router}>{children}</RouterProvider>;
}

export default App;
