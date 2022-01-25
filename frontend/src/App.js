import "./App.css";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen/RegisterScreen";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { EventNotes } from "./screens/EventNotes/EventNotes";
import { ProfileScreen } from "./screens/ProfileScreen/ProfileScreen";
import  MapScreen  from "./screens/MapScreen/MapScreen";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/login" component={LoginScreen}  />
      <Route path="/register" component={RegisterScreen}  />
      <Route path="/myevents" component={EventNotes} />
      <Route path="/profile" component={ProfileScreen}  />
      <Route path="/map" component={MapScreen}  />
    </main>
    <div className="footer">
    <Footer />
    </div>
  </BrowserRouter>
);

export default App;
