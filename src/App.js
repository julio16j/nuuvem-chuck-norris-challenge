import HomePage from './pages/Home'
import SearchJokesPage from './pages/SearchJokes'
import React from 'react';
import Helmet from 'react-helmet'
import { Route, Routes, HashRouter } from "react-router-dom";
function App() {
  return (
    <div>
      <Helmet>
        <title>Chuck Norris Jokes</title>
        <meta name="theme-color" content="#282C34" media="(prefers-color-scheme: light)" /> 
        <meta name="theme-color" content="#282C34" media="(prefers-color-scheme: dark)" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"/>
      </Helmet>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/jokes/:searchTerm" element={<SearchJokesPage />} />
          <Route path="/jokes" element={<SearchJokesPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </HashRouter>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossOrigin="anonymous"/>
    </div>
  );
}

export default App;
