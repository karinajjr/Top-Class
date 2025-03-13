import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoreContent from './Сomponent/CoreContent/CoreContent';
import CoreContentAfter from "./Сomponent/CoreContent/CoreContentAfter"
import Registration from './Сomponent/Registration/Registration';
import Agreements from './Сomponent/Registration/Agreements';
import Сonditions from './Сomponent/Registration/Сonditions';
import Questions from './Сomponent/CoreContent/Questions'
import { GoogleOAuthProvider } from "@react-oauth/google";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Layout from "./Сomponent/Layout/Layout"
// навигация
import Game from "./Сomponent/CoreContent/Game";
import Graphics from './Сomponent/CoreContent/Graphics';
import Engine from './Сomponent/CoreContent/Engine';
import Portfolio from './Сomponent/CoreContent/Portfolio';
import Jobs from './Сomponent/CoreContent/Jobs';
import Customer from './Сomponent/CoreContent/Customer';

// внутри карточки
import CourseIfsef from './Сomponent/CourseMain/CourseIfsef';
import Payme from './Сomponent/CourseMain/Payme';
// import Card from './Сomponent/CourseMain/Card';
//  карточки
import PageOne from './Сomponent/CourseDetail/PageOne';

const clientId = "1073832419280-fk0uk9l7da42nun76b5947e7prqc29k4.apps.googleusercontent.com";


function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<CoreContent />} />
          <Route path="/CoreContentAfter" element={<CoreContentAfter />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/agreements" element={<Agreements />} />
          <Route path="/conditions" element={<Сonditions />} />
          <Route path="/Questions" element={<Questions />} />
          {/* навигация */}
          <Route path="/Game" element={<Game />} />
          <Route path="/Graphics" element={<Graphics />} />
          <Route path="/Engine" element={<Engine />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Jobs" element={<Jobs />} />
          <Route path="/Customer" element={<Customer />} />

          <Route path="/CourseIfsef" element={<CourseIfsef />} />
          <Route path="/Payme" element={<Payme />} />
          {/* <Route path="/Card" element={<Card />} /> */}

          {/* Page */}
          <Route path="/PageOne" element={<PageOne />} />

        </Routes>
        </Layout>
      </Router>
    </GoogleOAuthProvider>
  )
}

export default App