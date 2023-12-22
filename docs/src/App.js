import React from 'react';
import NavigationBar from './NavigationBar'; // Import the NavigationBar component
import AboutMe from './AboutMe';
import GetToKnowMe from './GetToKnowMe'; // Import the GetToKnowMe component
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar /> {/* Include the NavigationBar component */}
      <AboutMe />
      <GetToKnowMe /> {/* Include the GetToKnowMe component */}
      {/* Other components or content */}
    </div>
  );
}

export default App;
