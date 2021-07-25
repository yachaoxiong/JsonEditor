import './App.css';
import JsonTree from './JsonTree';
import Nav from './shared/Navbar';
function App() {
  return (
    <div className='App'>
      <Nav />

      <JsonTree style={{ margin: 20 }} />
      <div style={{ padding: '15px 0px 0px 40px', color: 'gray' }}>
        The data resource is from{' '}
        <a href='https://random-data-api.com/' target='_blank' rel='noreferrer'>
          Random Data API.
        </a>
      </div>
    </div>
  );
}

export default App;
