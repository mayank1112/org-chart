import React from 'react';
import './App.css';
import TreeViewContainer from "./containers/TreeViewContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          Organization Chart
       </header>
      <section>
        <TreeViewContainer />
      </section>
    </div>
  );
}

export default App;
