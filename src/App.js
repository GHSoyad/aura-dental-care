import { RouterProvider } from "react-router-dom";
import router from "./Routes/MainRoute/MainRoute";

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
