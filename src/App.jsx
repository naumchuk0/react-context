import './App.css';
import Quote from './components/Quote';
import Cities from './components/Cities';
import Counter from './components/Counter';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';

function App() {
  return (
    <div>
      <Menu></Menu>
      <div class="center">
        <Routes>
          <Route path='/' element={<p>Home Page!</p>}></Route>
          <Route path='/quotes' element={<Quote></Quote>}></Route>
          <Route path='/cities' element={<Cities></Cities>}></Route>
          <Route path='/counter' element={<Counter></Counter>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
