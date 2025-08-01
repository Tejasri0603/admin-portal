import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/dashboard">Admin Portal</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/users">Users</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/orders">Orders</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/reports">Reports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/notifications">Notifications</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/support">Support</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/settings">Settings</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;