import { Routes, Route, Link, useSearchParams } from 'react-router-dom'
import './App.css';
import Search from './components/Search';
import Results from './components/Results';

function App() {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <Link to='/'>Pokemon Search</Link>
        </h1>
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Search setSearchParams={setSearchParams} />} />
          <Route path='/results' element={<Results searchParams={searchParams} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
