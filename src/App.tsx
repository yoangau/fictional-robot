import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/header/header';
import { Language } from './stores/language';

const languageStore = new Language()

function App() {
  return (
    <div className="App">
      <Header language={languageStore.language}/>
    </div>
  );
}

export default App;
