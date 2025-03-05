import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import EventBlock from './components/EventBlock.jsx';
import LeftDiv from './components/leftDiv.jsx';
import MainCalendar from './components/mainCalendar.jsx';
import RightDiv from './components/RightDiv.jsx'

function App() {

  return (
    <>
      <div>
        <Header></Header>
      </div>
      <div className="content">
        <LeftDiv></LeftDiv>
        <MainCalendar></MainCalendar>
        <RightDiv></RightDiv>
      </div>
      
      <h1>Corbishley Project 1</h1>
      <EventBlock length={'150px'} title={"Example Event 1"} startTime={"3:30pm"} endTime={"5:30pm"}></EventBlock>
    </>
  )
}

export default App
