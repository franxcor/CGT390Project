import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import EventBlock from './components/EventBlock.jsx';
import LeftDiv from './components/leftDiv.jsx';

function App() {

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <LeftDiv></LeftDiv>
      <h1>Corbishley Project 1</h1>
      <EventBlock length={'150px'} title={"Example Event 1"} startTime={"3:30pm"} endTime={"5:30pm"}></EventBlock>
    </>
  )
}

export default App
