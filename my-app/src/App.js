// src/App.js
import './App.css';
import ironhackLogo from './images/ironhack-logo-xs.png';
import menuTop from './images/menu-top-xs.png';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';

function App() {
  return (
    <div className="App">
      <nav>
        <img src={ironhackLogo} alt="Ironhack logo" />
        <img src={menuTop} alt="Menu" />
      </nav>
      <header>
        <h1>Say hello to ReactJS</h1>
        <p>
          You will learn how to use
          <br />
          the most popular frontend library,
          <br />
          and become a super Ninja developer.
        </p>
        <button>Awesome!</button>
      </header>
      <section>
        <div>
          <img src={icon1} alt="Icon 1" />
          <h2>Declarative</h2>
          <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div>
          <img src={icon2} alt="Icon 2" />
          <h2>Components</h2>
          <p>Build encapsulated components that manage their state.</p>
        </div>
        <div>
          <img src={icon3} alt="Icon 3" />
          <h2>Single-Way</h2>
          <p>A set of immutable values are passed to the component's.</p>
        </div>
        <div>
          <img src={icon4} alt="Icon 4" />
          <h2>JSX</h2>
          <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
