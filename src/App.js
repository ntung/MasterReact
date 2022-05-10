import './App.css';
import { Outlet, Link } from "react-router-dom";
function NavBar() {
    return (
        <nav style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
        }}>
            <Link to="/activities">Activities</Link> |{" "}
            <Link to="/invoices">Invoices</Link> |{" "}
            <Link to="/expenses">Expenses</Link>

        </nav>
    );
}

function App() {
  return (
    <div className="App">
        <h1>Book keeper!</h1>
        <NavBar />
        <Outlet />
    </div>
  );
}

export default App;
