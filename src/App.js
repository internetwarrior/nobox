import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Header from "./components/Header";
import MainButton from "./components/MainButton";
import Detail from "./pages/Detail";
import Create from "./pages/Create";
import  Language  from "./pages/lang/language";

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
        <Route path="/lang" element={ <Language/>
}/>
      </Routes>
    </>
  );
}

export default App;
