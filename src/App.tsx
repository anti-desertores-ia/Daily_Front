import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import FirstScreen from "./demo-welcome/FirstScreen";
import WelcomeWrapper from "./demo-welcome/WelcomeWrapper";
import IndicationsScreen from "./demo-welcome/IndicationsScreen";
import ProfileSelection from "./demo-welcome/ProfileSelection";

function App() {
  return (
    <HashRouter>
      <Content />
    </HashRouter>
  );
}

function Content() {
  const location = useLocation();
  const hideHeaderPaths = ['/', '/wecolme/indications', '/welcome/profile-selection'];

  return (
    <div className="App">
      {/* Conditionally render the Header based on the route */}
      {!hideHeaderPaths.includes(location.pathname) && <Header />}

      <div className="content">
        <Routes>
          <Route path="/" element={
            <WelcomeWrapper>
              <FirstScreen />
            </WelcomeWrapper>
          } />
          <Route path="/welcome/demo-indications" element={
            <WelcomeWrapper>
              <IndicationsScreen />
            </WelcomeWrapper>
          } />
          <Route path="/welcome/profile-selection" element={
            <WelcomeWrapper>
              <ProfileSelection />
            </WelcomeWrapper>
          } />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
