import React, { useContext } from "react";
import { IsLoggedContext } from "../context/LoggedInCheckProvider";
import UnAuthenticatedApp from "./UnAuthenticatedApp/UnAuthenticatedApp";
import AuthenticatedApp from "./AuthenticatedApp/AuthenticatedApp";
import OnlineSupport from "../components/common/OnlineSupport";
import Footer from "../components/common/Footer/Footer";
import NavBarAll from "../components/common/Navbar/NavBarAll";
import AllCoursesProvider from "../context/AllCoursesProvider";
import AllNewsProvider from "../context/AllNewsProvider";

// Context
import CartContextProvider from "../context/CartContextProvider";

function App() {
  const isLogged = useContext(IsLoggedContext);
  return (
    <CartContextProvider>
      <AllCoursesProvider>
        <AllNewsProvider>
          <NavBarAll />
          {isLogged.currentLogged ? (
            <AuthenticatedApp />
          ) : (
            <UnAuthenticatedApp />
          )}
          <Footer />
          <OnlineSupport />
        </AllNewsProvider>
      </AllCoursesProvider>
    </CartContextProvider>
  );
}

export default App;
