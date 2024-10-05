import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import { createContext } from 'react'
import App from './App.jsx'
import './index.css'

export const myContext=createContext()
const Main=()=>{
  const [selectedDay,setSelectedDay]=useState('Mon');
  const [days,setDay]=useState({Mon:{events:['','','','','','','',''],notes:['','','','','','','','',''],tasks:['','','','','','','','','','','','','','',''],topPriority:['','','','','','']},
  Tues:{events:['','','','','','','',''],notes:['','','','','','','','',''],tasks:['','','','','','','','','','','','','','',''],topPriority:['','','','','','']},
  Wed: {events:['','','','','','','',''],notes:['','','','','','','','',''],tasks:['','','','','','','','','','','','','','',''],topPriority:['','','','','','']},
  Thur: {events:['','','','','','','',''],notes:['','','','','','','','',''],tasks:['','','','','','','','','','','','','','',''],topPriority:['','','','','','']},
  Fri: {events:['','','','','','','',''],notes:['','','','','','','','',''],tasks:['','','','','','','','','','','','','','',''],topPriority:['','','','','','']},
  Sat: {events:['','','','','','','',''],notes:['','','','','','','','',''],tasks:['','','','','','','','','','','','','','',''],topPriority:['','','','','','']},
   Sun:{events:['','','','','','','',''],notes:['','','','','','','','',''],tasks:['','','','','','','','','','','','','','',''],topPriority:['','','','','','']}});
  return(
    <StrictMode>
      <myContext.Provider value={{value1:[days,setDay],value2:[selectedDay,setSelectedDay]}}>
      <App/>
    </myContext.Provider>
    </StrictMode>
  )
}
createRoot(document.getElementById('root')).render(
  <Main/>
)
