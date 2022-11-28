import React, { useContext, useState, Fragment, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";

// Style
import styles from "./Navbar.module.css";

// Components
import LoginInfoHolder from "../loginInfoHolder/LoginInfoHolder";
import { clearStorage } from "../../../core/services/storage/storage";

// Context
import { CartContext } from "../../../context/CartContextProvider";
import { IsLoggedContext } from "../../../context/LoggedInCheckProvider";
import { AllNewsContext } from "../../../context/AllNewsProvider";
import { AllCoursesContext } from "../../../context/AllCoursesProvider";

// Icon
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import iconBambo from "../../../assets/images/StudentPanel/Bambo.png";
import Person from "../../../assets/images/StudentPanel/person6.png";
import Profile2 from "../../../assets/images/StudentPanel/profile2.png";

const pages = ["درباره ما", "خدمات", "اخبار", "دوره ها"];
const sign = ["ورود", "ثبت نام"];

const Navbar = ({}) => {
  const pageUrl = useLocation().pathname;
  const navigate = useNavigate();

  let activeStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.176)",
  };

  const isLogged = useContext(IsLoggedContext);
  const AllNews = useContext(AllNewsContext);
  const AllCourses = useContext(AllCoursesContext);

  const { state } = useContext(CartContext);

  const CurrentUser = isLogged.currentStudent;

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleLinks = (page) => {
    switch (page) {
      case "درباره ما":
        return "/aboutUs";
        break;
      case "خدمات":
        return "/services";
        break;
      case "اخبار":
        return "/news/";
        break;
      case "دوره ها":
        return "/courses";
        break;
      default:
        break;
    }
  };

  const SignLink = (page) => {
    switch (page) {
      case "ورود":
        return "/login";
        break;
      case "ثبت نام":
        return "/register";
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    if (
      pageUrl === `/AllNews/${AllNews.currentId}/` ||
      pageUrl === `/AllNews/${AllNews.currentId}/comment` ||
      pageUrl === `/news/article`
    ) {
      document.getElementById(
        "allLink3"
      ).className = `${styles.locationClass} ${styles["center-items"]}`;
    } else {
      document.getElementById(
        "allLink3"
      ).className = `${styles["center-items"]}`;
    }
  });

  useEffect(() => {
    if (
      pageUrl === `/AllCourses/${AllCourses.currentId}/` ||
      pageUrl === `/AllCourses/${AllCourses.currentId}/comment`
    ) {
      document.getElementById(
        "allLink4"
      ).className = `${styles.locationClass} ${styles["center-items"]}`;
    } else {
      document.getElementById(
        "allLink4"
      ).className = `${styles["center-items"]}`;
    }
  });

  useEffect(() => {
    if (isLogged.currentLogged === false && pageUrl === `/`) {
      document.getElementById(
        "allSign2"
      ).className = `${styles.locationClass} ${styles["sign-hov"]}`;
    } else if (isLogged.currentLogged === false && pageUrl !== `/`) {
      document.getElementById("allSign2").className = `${styles["sign-hov"]}`;
    }
  });

  const handleLogOut = () => {
    isLogged.changeIsLogged(false);
    clearStorage();
    navigate("/");
    isLogged.studentLoad([]);
  };

  const handleLogOutAdmin = () => {
    window.location.href = `http://localhost:3001`;
    isLogged.changeIsLogged(false);
    clearStorage();

    isLogged.studentLoad([]);
  };

  return (
    <Fragment>
      <AppBar
        position="static"
        elevation={0}
        style={{ background: "transparent" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters style={{ width: "100%", minHeight: "59px" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Link to="/" style={{ display: "flex", alignItems: "center" }}>
                  <img
                    alt=""
                    src={iconBambo}
                    style={{ width: 25 }}
                    className={styles.bamboLogo}
                  />
                  <Typography
                    style={{ flex: "1", fontFamily: "lale" }}
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                    }}
                  >
                    بامبو
                  </Typography>
                </Link>
                <IconButton
                  sx={{
                    mr: 2,
                    display: { xs: "flex", md: "none" },
                  }}
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  style={{ fontFamily: "est" }}
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: {
                      xs: "block",
                      md: "none",
                    },
                    fontFamily: "est",
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">
                        <Link
                          style={{
                            color: "black",
                            fontFamily: "est",
                            fontSize: 12,
                          }}
                          to={handleLinks(page)}
                        >
                          {page}
                        </Link>
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>

                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none", fontFamily: "lale" },
                  }}
                >
                  <Link to="/"> بامبو </Link>
                </Typography>
              </Box>

              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                {pages.map((page, index) => (
                  <Button
                    style={{ fontSize: 17, margin: "0 0" }}
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      fontFamily: "est",
                    }}
                  >
                    <NavLink
                      id={`allLink${index + 1}`}
                      className={`${styles["center-items"]}`}
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                      to={handleLinks(page)}
                    >
                      {page}
                    </NavLink>
                  </Button>
                ))}
                <div className={`${styles.cart} ${styles.cart1}`}>
                  <Link to="/cart">
                    <ShoppingCartRoundedIcon className={styles.icon} />
                    <span>{state.itemsCounter}</span>
                  </Link>
                </div>
              </Box>
              <div className={`${styles.cart} ${styles.cart2}`}>
                <Link to="/cart">
                  <ShoppingCartRoundedIcon className={styles.icon} />
                  <span>{state.itemsCounter}</span>
                </Link>
              </div>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  fontFamily: "lale",
                }}
              >
                {!isLogged.currentLogged &&
                  sign.map((signItem, index) => (
                    <Button
                      style={{ fontSize: 17, margin: "0 0" }}
                      key={signItem}
                      onClick={handleCloseNavMenu}
                      sx={{
                        my: 2,
                        color: "white",
                        display: "block",
                        fontFamily: "est",
                      }}
                    >
                      <Link
                        id={`allSign${index + 1}`}
                        className={`${styles["sign-hov"]}`}
                        to={SignLink(signItem)}
                      >
                        {signItem}
                      </Link>
                    </Button>
                  ))}
                {isLogged.currentLogged && CurrentUser.role !== "admin" && (
                  <LoginInfoHolder
                    userName={CurrentUser.fullName}
                    userImg={CurrentUser.profile}
                    navTo={"/StudentPanel/"}
                    navClassCheck={"left-top-nav-logged"}
                    imgClassCheck={"login-person-logged"}
                    logShow={true}
                    holderClass={"login-holder-logged"}
                    logHandle={handleLogOut}
                  />
                )}
                {isLogged.currentLogged && CurrentUser.role === "admin" && (
                  <LoginInfoHolder
                    userName={CurrentUser.fullName}
                    userImg={CurrentUser.profile}
                    navTo={"/StudentPanel/"}
                    AdminTo={handleLogOutAdmin}
                    navClassCheck={"left-top-nav-logged"}
                    imgClassCheck={"login-person-logged"}
                    logShow={false}
                    holderClass={"login-holder-logged"}
                  />
                )}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
};
export default Navbar;
