import Navbar from "./components/Navbar";
import Register from "./components/Register"
import Login from "./components/Login"
import Portfolio from "./components/trader/Portfolio";
import Transactions from "./components/trader/Transactions";
import Stocks from "./components/trader/Stocks"
import Pending from "./components/admin/Pending"
import Traders from "./components/admin/Traders"
import Create from "./components/admin/Create"

function App() {
  return (
    <>
      <Navbar />
      <Traders />
    </>
  )
}

export default App;
