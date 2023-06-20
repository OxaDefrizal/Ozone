import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Popular from "./routes/Popular";
import Community from "./routes/Community";
import Marketplace from "./routes/Marketplace";
import Nopage from "./routes/NoPage";
import style from "./assets/css/App.module.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Splashscreen from "./routes/Splashscreen";
import Profile from "./routes/Profile";

function App() {
  return (
    <>
      <div className={style.container}>
        {/* Header */}
        <Header />
        <div className={style["main-container"]}>
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/Home" element={<Home />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/popular" element={<Popular />} />
              <Route path="/community" element={<Community />} />
              <Route path="/marketplace" element={<Marketplace />} />
              <Route path="/nopage" element={<Nopage />} />
              <Route path="/splashscreen" element={<Splashscreen />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
