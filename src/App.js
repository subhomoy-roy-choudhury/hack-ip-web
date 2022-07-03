import './App.css';
import SystemDetails from './components/SystemDetails/SystemDetails.js';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Test() {
  return (
    <>
    <h1>Test</h1>
    </>
  )
}

function App() {
  return (
    <Router basename="/hack-ip-web/">
      <Routes>
        <Route path="" element={<Test />} />
        <Route path="details" element={<Test />} />
        <Route path="details/:encoded_string" element={<SystemDetails />} />
        {/* <Route path="/search" element={<SearchPage />} /> */}
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
