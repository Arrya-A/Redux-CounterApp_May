import './App.css'
import CounterApp from './components/CounterApp'

function App() {

  return (
    <>
      <h1 className='text-center mt-5'>Counter Application</h1>
      <div style={{height:'70vh'}} className='d-flex justify-content-center align-items-center w-100'>
        <CounterApp/>
      </div>
    </>
  )
}

export default App
