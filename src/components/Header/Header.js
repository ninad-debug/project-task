import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style.css";

const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    return navigate(`/search?q=${inputValue}`);
  };

  return (
    <header className="header">
      <Link to="/" className="link">
        <div className="logo">MovieDb</div>
      </Link>
      <nav>
        <ul className="nav-list">
          <li>
            <Link to="/" className="link">
              Home/Popular
            </Link>
          </li>
          <li>
            <Link to="movies/top" className="link">
              Top Rated
            </Link>
          </li>
          <li>
            <Link to="movies/upcoming" className="link">
              Upcoming
            </Link>
          </li>
        </ul>
      </nav>
      <form className="search-bar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={inputValue}
          onChange={handleInputChange}
        />
        <button>Submit</button>
      </form>
    </header>
  );
};

export default Header;
