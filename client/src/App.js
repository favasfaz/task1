import "./App.css";
import UserLogin from "./Components/UserLogin";
import Header from './Components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import DeteilsPage from "./Components/DeteilsPage";

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<UserLogin />} />
          <Route path='/home' element={<Home />}/>
          <Route path="/deteilsPage" element={<DeteilsPage />} />
          {/* <Route exact path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
