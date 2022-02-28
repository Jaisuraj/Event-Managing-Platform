
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { LoginScreen } from "./screens/LoginScreen/LoginScreen";
import { RegisterScreen } from "./screens/RegisterScreen/RegisterScreen";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { EventNotes } from "./screens/EventNotes/EventNotes";
import { ProfileScreen } from "./screens/ProfileScreen/ProfileScreen";
import  MapScreen  from "./screens/MapScreen/MapScreen";
import Home from "./components/home/Home.tsx"
import Testmap from "./screens/TestMap/Testmap.js";
import MyNotes from './screens/MyNotes/MyNotes';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import CreateNote from './screens/CreateNote/CreateNote';
import SingleNote from './screens/CreateNote/SingleNote';
import './css/index1.css'


const App = () => (
  <BrowserRouter>
 
    <Header />
    
    <main>
      <Route path="/" component={LandingPage} exact />
      <Route path="/login" component={LoginScreen} />
      <Route path="/register" component={RegisterScreen} />
      <Route path="/myevents" component={EventNotes} />
      <Route path="/profile" component={ProfileScreen} />
      <Route path="/features" component={MapScreen}  />
      <Route path="/deets" component={Home}  />
      <Route path="/createnote" component={CreateNote}/>
      <Route path="/mynotes" component={MyNotes}/>
      <Route path="/note/:id" component={SingleNote}/>
    </main>

    <Footer />
 
  </BrowserRouter>
  
);

export default App;
