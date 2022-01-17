import "./App.css";
import { LandingPage } from "./screens/LandingPage/LandingPage.js";
import { Footer } from "./components/Footer/Footer.js";
import { Header } from "./components/Header/Header.js";
import { BrowserRouter, Route } from "react-router-dom";
import { EventNotes } from "./screens/EventNotes/EventNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/eventnotes" component={EventNotes} />
    </main>

    <Footer />
  </BrowserRouter>
);

export default App;
