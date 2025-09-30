import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

// Import your components
import Home from './components/Home.jsx';
import About from './components/About.jsx';
import ProjectSection from './components/Projects.jsx';
import ContactSection from './components/Contact.jsx';
import Header from './components/Header.jsx';

const App = () => (
  <>
  <Header />
  <ReactFullpage
    // This is where you configure the vertical scroll and navigation
    scrollingSpeed={700}
    navigation={true}
    navigationTooltips={['Home', 'About', 'Projects', 'Contact']}
    showActiveTooltip={true}
    controlArrows={true} // Add this to enable horizontal arrows for slides within a section
    render={({ state, fullpageApi }) => {
      return (
        
        <ReactFullpage.Wrapper>
          
          <div className="section">
            <Home />
          </div>
          <div className="section">
            <About />
          </div>
          <div className="section">
            <ProjectSection />
          </div>
          <div className="section">
            <ContactSection />
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
  </>
);

export default App;