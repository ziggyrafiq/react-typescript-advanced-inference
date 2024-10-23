import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button/Button'
import Counter from './components/Counter/Counter';
import Card from './components/Card/Card'
import Alert from './components/Alert/Alert';
import ProtectedExample from './components/ProtectedExample/ProtectedExample'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
       Ziggy Rafiq Article
        </p>
        
        <Button label="Click Me" onClick={() => alert("Clicked!")} />
      
      </header>
      <div>
            <h1>Ziggy Counter App</h1>
            <Counter />
        </div>

        <div>
            <h1>Ziggy Card Application</h1>
            
            <Card title="Ziggy First Card">
                <p>This is some content inside the first card.</p>
            </Card>
            <Card title="Ziggy Second Card">
                <p>This is some content inside the second card.</p>
            </Card>
        </div>
        <div>
            <h1>Ziggy Alert Application</h1>
            <Alert message="This is a success alert!" />
            <Alert message="This is an error alert!" type="error" />
        </div>

        <div>
            <h1>My Protected Application</h1>
            <ProtectedExample title="Ziggy Rafiq Secret Title" /> {}
        </div>
        
    </div>

    
  );
}

export default App;
