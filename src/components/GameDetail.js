import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useLocation, useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { exitCard } from "../actions";
import playStation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import nintendo from "../img/nintendo.svg";
import xbox from "../img/xbox.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";
import starEmpty from "../img/star-empty.png";
import starFull from "../img/star-full.png";

const GameDetail = ({ id }) => {
  const { game, screenshots } = useSelector((state) => state.detailReducer);
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  console.log(pathname);
  const exitHandler = (e) => {
    if (
      e.target.classList.contains("card-shadow") ||
      e.target.classList.contains("btn-back")
    ) {
      dispatch(exitCard());
      document.body.style.overflow = "auto";
    }
  };
  const getPlatformImages = (platform) => {
    switch (platform) {
      case "PlayStation":
        return playStation;
      case "Xbox":
        return xbox;
      case "PC":
        return steam;
      case "Nintendo Switch":
        return nintendo;
      case "iOS":
        return apple;
      default:
        return gamepad;
    }
  };
  const getStars = () => {
    const stars = [];
    const rating = Math.floor(game.rating);
    for (let i = 0; i < 5; i++) {
      if (i <= rating) {
        stars.push(<img alt="star" key={i} src={starFull}></img>);
      } else {
        stars.push(<img alt="star" key={i} src={starEmpty}></img>);
      }
    }
    return stars;
  };
  if (game.name) {
    return (
      <CardShadow className="card-shadow" onClick={exitHandler}>
        <Detail LayoutId={id} className="detail container">
          <div className="row">
            <Stats className="stats col-12">
              <div className="rating">
                <span className="btn-back" onClick={exitHandler}>
                  Back
                </span>
                <h5 className="mt-2">{game.name}</h5>

                <p>Rating: {getStars()}</p>
              </div>
              <Info className="info">
                <h5>Platforms</h5>
                <Platforms className="platforms">
                  {game.parent_platforms.map((data) => {
                    return (
                      <p key={data.platform.id}>
                        <img
                          className="img-platform"
                          src={getPlatformImages(data.platform.name)}
                          alt=""
                        />
                      </p>
                    );
                  })}
                </Platforms>
              </Info>
            </Stats>
            <Media className="media col-12">
              <img src={game.background_image} class="img-main" alt="image" />
            </Media>
            <Description className="description">
              <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
              {screenshots.results.map((image) => {
                return <img key={image.id} src={image.image} alt="" />;
              })}
            </div>
          </div>
        </Detail>
      </CardShadow>
    );
  } else {
    return null;
  }
};

const CardShadow = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  overflow-y: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
`;

const Detail = styled(motion.div)`
  border-radius: 1rem;
  padding: 2rem 2rem;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 70%;
  height: 90%;
  overflow-y: scroll;
  color: black;

  .btn-back {
    font-size: 0.7rem;
    font-weight: bold;
    background-color: black;
    color: white;
    padding: 5px;
    cursor: pointer;
  }

  img {
    width: 100%;
  }
  /* &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: coral;
  }
  &::-webkit-scrollbar-track {
    background-color: white;
  } */
  @media (max-width: 520px) {
    padding: 1rem 1.3rem;
    height: 90%;
    width: 100%;
    h5 {
      font-size: 0.8rem;
      font-weight: bold;
    }
    p {
      font-size: 0.7rem;
    }
    .description {
      p {
        line-height: 1.2rem;
        font-weight: light;
        padding: 10px;
        color: rgb(74, 87, 88);
      }
    }
  }
`;

const Stats = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .rating {
    img {
      height: 20px;
      width: 20px;
      display: inline;
      @media (max-width: 520px) {
        height: 10px;
        width: 10px;
      }
    }
  }
`;

const Info = styled(motion.div)`
  text-align: center;
  @media (max-width: 520px) {
    h5 {
      font-size: 0.7rem;
    }
    .img-platform {
      height: 10px;
      width: 10px;
    }
  }
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  p {
    margin-left: 0.5rem;
    @media (max-width: 520px) {
      margin-left: 0rem;
    }
    img {
      width: 20px;
      height: 20px;
      object-fit: cover;
    }
  }
  img {
    margin-left: 1rem;
  }
`;

const Media = styled(motion.div)`
  margin-top: 2rem;
  img {
    width: 100%;
    height: 60vh;
    object-fit: cover;
  }
  @media (max-width: 500px) {
    .img-main {
      height: 40vh;
    }
  }
`;
const Description = styled(motion.div)`
  margin: 2rem 0rem;
  p {
    line-height: 1.7rem;
    font-weight: light;

    color: rgb(74, 87, 88);
  }
`;

export default GameDetail;