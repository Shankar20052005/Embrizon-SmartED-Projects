import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg className="bi me-2" width="40" height="32"></svg>
                <img src="https://img.freepik.com/premium-vector/pizza-isolated-white_821599-790.jpg" width={50} height={50} alt="Pizza Store Logo"></img>
                <span className="fs-4">Pizza Store</span>
            </a>

            <ul className="nav nav-pills">
                <li className="nav-item"><Link to="/home" className="nav-link active" aria-current="page">Home</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
                <li className="nav-item"><Link to="/display-all-items" className="nav-link">DisplayAllItems</Link></li>
                <li className="nav-item"><Link to="/add-item" className="nav-link">AddNewItem</Link></li>
                <li className="nav-item"><Link to="/contact-us" className="nav-link">Contact</Link></li>
            </ul>
        </header>
    );
}

export default Navbar;
