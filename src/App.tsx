import "./App.css";
import LandingPage from "./pages/landingPage/Landing.tsx";
// import HomePage from "./pages/homePage/home.tsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import ContactUsPage from "./pages/contacUsPage/contacUsPage.tsx";
import Signup from "./pages/signUpPage/Signup.tsx";
import ItemSearch from "./pages/itemSerchPage/ItemSearch.tsx";
// import StoreList from "./pages/storeListPage/StoreList.tsx";
import AOS from "aos";
import "aos/dist/aos.css";
import React from "react";
import QuestionPage from "./pages/questionPage/QuestionPage.tsx";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
      offset: 100,
    });
    AOS.refresh();
  }, []);
  
  return (
      <>

          <BrowserRouter>
              <Routes>
                  <Route path="/signUp" element={<Signup/>} />
                  <Route path="/" element={<LandingPage/>} />
                  <Route path="/home" element={<LandingPage/>} />
                  <Route path="/itemSearch/:category" element={<ItemSearch />} />
                  <Route path="/contactUs" element={<ContactUsPage/>} />
                  <Route path="/question" element={<QuestionPage />} />
                  {/*<Route path="/storeList" element={<StoreList/>} />*/}
              </Routes>
          </BrowserRouter>

    </>
  );
}

export default App;
