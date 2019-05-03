import React from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleComponent from './components/simplecomponent';
import ClassComponent from './components/classcomponent';
import MyHeader from './components/myheader';

function App() {
  return (
    <div>
      <MyHeader title="Test #3899" >
        <p>J'ai perdu</p>
        <p>KILLROY was here</p>
      </MyHeader>

      <SimpleComponent />

      <ClassComponent />
    </div>
  )
}

export default App;
