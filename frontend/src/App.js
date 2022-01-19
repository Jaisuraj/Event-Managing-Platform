import "./App.css";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen/RegisterScreen";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { EventNotes } from "./screens/EventNotes/EventNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/login" component={LoginScreen} exact />
      <Route path="/register" component={RegisterScreen} exact />
      <Route path="/myevents" component={EventNotes} />
    </main>

    <Footer />
  </BrowserRouter>
);

export default App;
