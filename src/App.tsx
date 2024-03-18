import { Toaster } from "react-hot-toast";
import RouteMain from "./routes/Route";

function App() {
  return (
    <>
      <Toaster position="top-right" />
      <RouteMain />
    </>
  );
}

export default App;
