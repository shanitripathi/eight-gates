import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { bounce } from "../animations";

const Loader = () => {
  return (
    <StyledLoader>
      <Ball variants={bounce} animate="show" className="ball"></Ball>
    </StyledLoader>
  );
};

const StyledLoader = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #202020;
`;

const Ball = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(50%, 50%);
  height: 100px;
  width: 100px;
  border-radius: 50%;
  background-color: white;
`;

export default Loader;
