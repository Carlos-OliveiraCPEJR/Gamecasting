/* eslint-disable no-unused-vars */
import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./barra.css";

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
} from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import { BsLightbulbFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { BiTrendingUp, BiLogOut, BiSearchAlt2 } from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import { useNavigate } from "react-router-dom";

//import {Button} from 'react-bootstrap';

function Barra() {

  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);

  const pathName = location.pathname;

  const [open, setOpen] = useState(false);

  function handleDrawerClose(isopen) {
    setOpen(isopen);
  }

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: (theme.shape.borderRadius, 100),
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "30ch",
        "&:focus": {
          width: "30ch",
        },
      },
    },
  }));

  const [user, setUser] = useState({ nome: "" });

  return (
    <>
      <AppBar position="static">
        <Toolbar className="toolbar">
          <div className="caixa-esquerda-plataforma">
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => handleDrawerClose(!open)}
            >
              <FiMenu />
            </IconButton>
            <div className="position_logo">
              <img
                src="/images/Logo Gamecasting (2).svg"
                alt="Gamecasting"
              ></img>
            </div>
          </div>

          <div className="userContainer">
            <p className="userName">{user.nome}</p>
            <div
              className="avatar"
              onClick={() => {
                navigate("/usuario");
              }}
            >
              <Avatar alt={user.nome} src="/images/Avatar1.png" />
            </div>
            <div
              className="logout"
              onClick={() => {
                navigate("/home");
              }}
            >
              <IconContext.Provider value={{ top: "0.25px", size: "2.5em" }}>
                <BiLogOut />
              </IconContext.Provider>
            </div>
            <div></div>
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        className="drawer"
        open={open}
        onClose={() => handleDrawerClose(false)}
      >
        <List className="list">
          <ListItem
            button
            selected={pathName === "/plataforma"}
            onClick={() => {
              navigate("/plataforma");
            }}
          >
            <IconContext.Provider value={{ color: "#7A04EB", size: "1.4em" }}>
              <AiFillHome />
            </IconContext.Provider>
            <ListItemText className="list_item_text">
              <Typography>HOME</Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            selected={pathName === "/plataforma/lancamentos"}
            onClick={() => {
              navigate("/plataforma/lancamentos");
            }}
          >
            <IconContext.Provider value={{ color: "#7A04EB", size: "1.4em" }}>
              <FaRocket />
            </IconContext.Provider>
            <ListItemText className="list_item_text">
              <Typography>LANÇAMENTOS</Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            selected={pathName === "/plataforma/recomendados"}
            onClick={() => {
              navigate("/plataforma/recomendados");
            }}
          >
            <IconContext.Provider value={{ color: "#7A04EB", size: "1.4em" }}>
              <BsLightbulbFill />
            </IconContext.Provider>
            <ListItemText className="list_item_text">
              <Typography>RECOMENDADOS</Typography>
            </ListItemText>
          </ListItem>
          <ListItem
            button
            selected={pathName === "/plataforma/maisjogados"}
            onClick={() => {
              navigate("/plataforma/maisjogados");
            }}
          >
            <IconContext.Provider value={{ color: "#7A04EB", size: "1.4em" }}>
              <BiTrendingUp />
            </IconContext.Provider>
            <ListItemText className="list_item_text">
              <Typography>EM ALTA</Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
          }

/*<div className="searchbar">
            <Search>
              <SearchIconWrapper>
                <BiSearchAlt2 />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pesquisar"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
          </div>



function Logo() {
  return (
    <div>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@800&display=swap"
        rel="stylesheet"
      ></link>
      <div class="logo"></div>
      <div class="logo-parte-roxa"></div>
      <div class="logo-parte-branca"></div>
      <div class="logo-texto">GAMECASTING</div>
    </div>
  );
}
*/
export default Barra;
