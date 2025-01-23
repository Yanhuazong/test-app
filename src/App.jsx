import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import image_man from "./assets/headshot-man.png";
import image_woman from "./assets/headshot-woman.png";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import { useState } from "react";

const App = () => {
  const profiles = [
    {
      img: image_man,
      name: "John Doe",
      title: "Software Engineer",
      email: "a@a.com",
    },
    {
      img: image_woman,
      name: "Lily Smith",
      title: "UX designer",
      email: "b@a.com",
    },
  ];
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Wrapper>
          <h1>Profile App</h1>
          <button onClick={handleClick}>
            {clicked ? "Click me" : "Clicked"}
          </button>
        </Wrapper>
        <Wrapper>
          <About />
        </Wrapper>
        <Wrapper>
          <div className="profile-cards">
            {profiles.map((profile) => (
              <Card key={profile.email} {...profile} />
            ))}
          </div>
        </Wrapper>
      </main>
    </>
  );
};

export default App;
