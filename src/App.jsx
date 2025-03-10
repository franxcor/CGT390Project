import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx';
import EventBlock from './components/EventBlock.jsx';
import LeftDiv from './components/leftDiv.jsx';
import MainCalendar from './components/MainCalendar.jsx';
import RightDiv from './components/RightDiv.jsx'
import AddEvent from './components/AddEvent.jsx';
import { MonthProvider } from './contexts/MonthContext.jsx';
import { SelectedProvider } from './contexts/SelectedContext.jsx';
import { OffSetProvider } from './contexts/OffSetContext.jsx';

function App() {
  const [globalOffset, setGlobalOffset] = useState(0);
  
  return (
    <OffSetProvider>
      <MonthProvider>
        <SelectedProvider>
          <div>
            <Header></Header>
          </div>
          <div className="content">
            <LeftDiv></LeftDiv>
            <MainCalendar offset={globalOffset}></MainCalendar>
            <RightDiv></RightDiv>
          </div>        
        </SelectedProvider>
      </MonthProvider>
    </OffSetProvider>
  )
}

export default App
