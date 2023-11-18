import React from "react";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import CanvasPage from "./CanvasPage";


const App = () => {
  return (
  <div className="App">
  <div className="appHeaderPadding"></div>
  <AppHeader />
  <main className="appBody">
    <section className="homepageMain">
      <CanvasPage />
      <div className="homepageHeadingText">
        <h1>Heading here</h1>
      </div>
    </section>
    <article className="homepageMissionStatement">
      <section className="homepageMissionStatementHeadings">
        <h3>Our People</h3>
        <h3>Our Events</h3>
        <h3>Out Stuff</h3>
      </section>
      <section className="homepageMissionStatementBodies">
        <p>Test 1</p>
        <p>Test 1</p>
        <p>Test 1</p>
      </section>
    </article>
  </main>
    <AppFooter />
</div>

);
};

export default App;
