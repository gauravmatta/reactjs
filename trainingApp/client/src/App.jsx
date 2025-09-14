//import './App.css'
import Header from './core/components/layouts/Header'
import Landing from './core/components/layouts/Landing'
import Footer from './core/components/layouts/Footer'
import RootRouter from './RootRouter'
import Alert from './core/components/layouts/Alert';

function App() {
  const appName = "Support Connector";
  return (
    <>
      <Header appName={appName} />
      <Alert />
      <RootRouter />
      <Footer appName={appName} />
    </>
  )
}

export default App
