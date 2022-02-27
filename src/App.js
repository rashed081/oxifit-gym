import "./App.css";
import Header from "./Components/Header/Header";
import { useSpring, animated } from "react-spring";
import { Route, Routes } from "react-router-dom";
import Oxifit from "./Components/Oxifit/Oxifit";
import Features from "./Components/Features/Features";
import GroupClass from "./Components/Group Class/GroupClass";
import Membership from "./Components/Membership/Membership";
import Beginner from "./Components/Beginner/Beginner";
import PersonalTrainer from "./Components/Personal Trainer/PersonalTrainer";
import NotFound from "./Components/Not Found/NotFound";
import Footer from "./Components/Footer/Footer";

function App() {
  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    config: { delay: 500, duration: 1000 },
  });
  return (
    <animated.div style={props}>
      <Header />
      <Routes>
        <Route path="/" element={<Oxifit />} />
        <Route path="/features" element={<Features />} />
        <Route path="/group-class" element={<GroupClass />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/beginner" element={<Beginner />} />
        <Route path="/personal-trainer" element={<PersonalTrainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </animated.div>
  );
}

export default App;
