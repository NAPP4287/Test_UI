import { Route, Routes } from "react-router-dom";
// pages
import Home from "./pages/Home";
import TestFirst from "./pages/TestFirst";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/first" element={<TestFirst />} />
    </Routes>
  );
}

export default App;
