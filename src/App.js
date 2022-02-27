import './App.css';
import './assets/style/global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Welcome } from './pages/Welcome';
import { Wait } from './pages/Wait';

function App() {
  return (
    <section className="app">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome />}/>
      <Route path="/wait" element={<Wait />}/>
      {/* <Welcome /> */}
      </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
