import './App.css'
import CardGrid from './components/CardGrid'
import { GlobalStateProvider } from './context/GlobalStateProvider'
function App() {

  return (
    <GlobalStateProvider>
      <CardGrid />
    </GlobalStateProvider>
  )
}

export default App
