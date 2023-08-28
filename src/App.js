import "./App.scss";
import Rooms from "./components/Rooms-page/Rooms";
import ContactsPage from "./components/contacts-page/ContactsPage";
import Homepage from "./components/homepage/Homepage";
import Overview from "./components/overview-page/Overview";
import ServicesPage from "./components/services-page/ServicesPage";
import Header from "./re-components/header/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/overview" element={<Overview />}></Route>
            <Route path="/rooms" element={<Rooms />}></Route>
            <Route path="/services" element={<ServicesPage />}></Route>
            <Route path="/contacts" element={<ContactsPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
