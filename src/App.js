import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

function App() {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);

  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={"3px"}
          progress={progress}
          loaderSpeed={900}
          transitionTime={500}
          shadow={false}
        />
        <Routes>
          <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" pageSize={pageSize} category="general" country="in" />} ></Route>
          <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" pageSize={pageSize} category="business" country="in" />} ></Route>
          <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} category="entertainment" country="in" />} ></Route>
          <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" pageSize={pageSize} category="health" country="in" />} ></Route>
          <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" pageSize={pageSize} category="sports" country="in" />} ></Route>
          <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" pageSize={pageSize} category="science" country="in" />} ></Route>
          <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" pageSize={pageSize} category="technology" country="in" />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
