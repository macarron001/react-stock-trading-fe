import Navbar from "./components/Navbar";
import Register from "./components/Register"
import Login from "./components/Login"
import Portfolio from "./components/trader/Portfolio";
import Transactions from "./components/trader/Transactions";
import Stocks from "./components/trader/Stocks"
import Pending from "./components/admin/Pending"

function App() {
  return (
    <>
      <Navbar />
      <Pending />
    </>
  )
}

export default App;
