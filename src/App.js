import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import MainButton from "./components/MainButton";
import Sidebar from "./components/Sidebar";
import Detail from "./pages/Detail";
import Create from "./pages/Create";

function App() {
  return (
    <>
      <Header />
      {/* <Sidebar /> */}
      <MainButton />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </>
  );
}

export default App;
