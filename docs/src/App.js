import React from 'react';

import NavigationBar from './NavigationBar'; // Import the NavigationBar component
import AboutMe from './AboutMe';
import GetToKnowMe from './GetToKnowMe'; // Import the GetToKnowMe component
import PersonalProject from './PersonalProject'; // Import the PersonalProject component
import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationBar /> {/* Include the NavigationBar component */}
      <AboutMe />
      <GetToKnowMe /> {/* Include the GetToKnowMe component */}
      <PersonalProject /> {/* Include the PersonalProject component */}
      {/* Other components or content */}
    </div>
  );
}

export default App;

