import React from 'react';
import '../App.css';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid position-fixed- top-0 z-7">
    <a className="navbar-brand" href="#home">Sangeetha Prabu | Portfolio </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item fs-4 fw-semibold p-3 m-2 ">
          <a className="nav-link active" aria-current="page" href="#home">Home</a>
        </li>
        <li className="nav-item fs-4 fw-semibold p-3 m-2">
          <a className="nav-link" href="#about">About</a>
        </li>
        <li className="nav-item fs-4 fw-semibold p-3 m-2">
          <a className="nav-link" href="#projects">Projects</a>
        </li>
        <li className="nav-item fs-4 fw-semibold p-3 m-2">
          <a className="nav-link" href="#contact">Contacts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )

}

export default Navbar
