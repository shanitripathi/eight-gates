import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/logo.svg";
import { fetchSearch, removeSearch } from "../actions";
import { useDispatch } from "react-redux";
import { fadeIn } from "../animations";

const Nav = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const LogoHandler = () => {
    dispatch(removeSearch());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setInput(e.target.children[0].value);

    dispatch(fetchSearch(input));
    setInput("");
  };
  return (
    <StyledNav
      className="container-fluid"
      variants={fadeIn}
      initial="hidden"
      animate="show"
    >
      <Logo onClick={LogoHandler}>
        <h1>
          EIGHT-<span>GATES</span>
        </h1>
      </Logo>
      <form className="search" onSubmit={submitHandler}>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button>search</button>
        <div className="link-container">
          <ul className="list">
            <li className="list-item">
              <a href="#upcoming">UPCOMING</a>
            </li>
            <li className="list-item">
              <a href="#popular">POPULAR</a>
            </li>
            <li className="list-item">
              <a href="#new">NEW</a>
            </li>
          </ul>
        </div>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  text-align: center;
  background-color: #202020;
  padding: 30px 0 0 0;
  input {
    width: 70%;
    border: none;
    outline: none;
    background-color: white;
    height: 40px;
    padding: 20px;
    border-radius: 50px;
    font-weight: bold;
  }
  button {
    border: none;
    height: 40px;
    font-size: 1.3rem;
    color: white;
    background-color: transparent;
    font-weight: bolder;
    padding: 10px;
    outline: none;
  }
  .link-container {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    .list {
      display: flex;
      .list-item {
        padding: 20px;
        list-style: none;

        a {
          text-decoration: none;
          color: white;
          font-size: 900;
          font-size: 1rem;
        }
      }
    }
  }
`;
const Logo = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: start;
  cursor: pointer;

  padding: 20px;

  h1 {
    font-weight: bolder;
    font-size: 2rem;
    margin: 0;
    color: white;
    span {
      color: white;
    }
  }
  img {
    height: 35px;
    width: 30px;
    object-fit: cover;
    margin-right: 10px;
  }
`;
export default Nav;
