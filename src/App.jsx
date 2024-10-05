
import './App.css'
import TopPriorities from './components/TopPriorities'
import Events from './components/Events'
import Notes from './components/Notes'
import Tasks from './components/Tasks'
import Header from './components/Header'

function App() {
 

  return (
    <div>
    <h1 className='text-3xl font-semibold'>My to do list</h1>
    <Header/>
     <TopPriorities/>
     
     <Events/>
     
     <Notes/>
     <Tasks/>
      
    </div>
  )
}

export default App
