import './App.css';
import JsonTree from './JsonTree';
import Nav from './shared/Navbar';
function App() {
  return (
    <div className='App'>
      <Nav />
      <JsonTree style={{ margin: 20 }} />
    </div>
  );
}

export default App;
