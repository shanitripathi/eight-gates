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
        <img src={logo} alt="logo" />
        <h1>
          Eight-<span>Gates</span>
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
        <button>Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.div)`
  text-align: center;

  input {
    width: 70%;
    border: none;
    outline: none;
    background-color: #bdc6c9;
    height: 40px;
    padding: 20px;
    border-radius: 10%;
    font-weight: bold;
  }
  button {
    border: none;
    height: 40px;
    font-size: 1.3rem;
    color: burlywood;
    background-color: transparent;
    font-weight: bolder;
    padding: 10px;
    outline: none;
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
    span {
      color: red;
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
