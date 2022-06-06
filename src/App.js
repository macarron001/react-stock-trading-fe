import Navbar from "./components/Navbar";
import Register from "./components/Register"
import Login from "./components/Login"
import Portfolio from "./components/trader/Portfolio";
import Transactions from "./components/trader/Transactions";
import Stocks from "./components/trader/Stocks"

function App() {
  return (
    <>
      <Navbar />
      <Portfolio />
    </>
  )
}

export default App;
