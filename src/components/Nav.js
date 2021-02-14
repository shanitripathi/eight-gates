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
  const [timeoutId, setTimeoutId] = useState(null);

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
          EIGHT<span>GATES</span>
        </h1>
      </Logo>
      <form className="search" onSubmit={submitHandler}>
        <input
          placeholder="search"
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />

        <div className="link-container">
          <ul className="list">
            <li className="list-item">
              <a className="js-scroll" href="#upcoming">
                UPCOMING
              </a>
            </li>
            <li className="list-item">
              <a className="js-scroll" href="#popular">
                POPULAR
              </a>
            </li>
            <li className="list-item">
              <a className="js-scroll" href="#new">
                NEW
              </a>
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
  padding: 20px 0 0 0;
  input {
    width: 50%;
    border: none;
    outline: none;
    background-color: white;
    height: 40px;
    padding: 20px;
    border-radius: 50px;
    font-weight: bold;
    @media (max-width: 520px) {
      width: 90%;
    }
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
    margin-top: 20px;
    .list {
      display: flex;
      .list-item {
        padding: 20px;
        list-style: none;

        a {
          text-decoration: none;
          color: white;
          font-size: 900;
          font-size: 0.8rem;
          transition: all 500ms ease-in-out;

          &:hover {
            color: #f4c518;
          }
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
    font-size: 2.5rem;
    margin: 0;
    color: #f4c518;
    box-shadow: 0 0 5px 0;
    padding: 5px;
  }
  img {
    height: 35px;
    width: 30px;
    object-fit: cover;
    margin-right: 10px;
  }
`;
export default Nav;
