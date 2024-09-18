import './App.css'
import PopoverWrapper from './components/popover/PopoverWrapper'
import { GlobalStateProvider } from './context/GlobalStateProvider'
function App() {

  return (
    <GlobalStateProvider>
      <PopoverWrapper />
    </GlobalStateProvider>
  )
}

export default App
