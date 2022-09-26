import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">        
        <nav className='top-strip'>
          <p className='strip-item-right'>
            Link 3
          </p>
          <p className='strip-item-right'>
            Link 2
          </p>
          <p className='strip-item-right'>
            Link 1
          </p>
          <p className='strip-item-left'>
            Rudra Sett
          </p>
        </nav>
        
        {/* <h1 className="name">
          Rudra Sett
        </h1> */}
      </header>
      <body className='main-content'>
      <p className="bio">
          Hello! This is a lot of words to show that I have words to say and mostly to fill up space until I write something actually useful.
        </p>
      </body>
    </div>
  );
}

export default App;
