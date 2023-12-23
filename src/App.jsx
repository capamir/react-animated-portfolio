import {
  Navbar,
  Hero,
  Services,
  Portfolio,
  Contact,
  Cursor,
} from "./components";
import "./app.scss";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>

      <Services />
      <Portfolio />
      <Contact />
    </div>
  );
};

export default App;
