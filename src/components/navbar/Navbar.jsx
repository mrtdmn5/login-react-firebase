import { Button } from "reactstrap";
import React from "react";
import { useContext } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { Badge } from "antd";

const Navbar = () => {
  const { dispatch } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const logOut = async (values) => {
    await dispatch({ type: "LOGOUT", payload: null });
  };
  let userDetails = currentUser ? currentUser : "buttons";
  const RequireAuth = ({ children }) => {
    return currentUser ? (
      children
    ) : (
      <Link to="/login">
        {" "}
        <Button className="buttons">Login</Button>{" "}
      </Link>
    );
  };

  return (
    <div>
      <div className="navBar">
        <Link to="/">
          <Button className="buttons">Home</Button>
        </Link>
        <div>
          <RequireAuth>
            <Link to="/login">
              <Button
                onClick={() => {
                  logOut();
                }}
                className="buttons"
              >
                Logout
              </Button>
            </Link>
            <div
              style={{
                backgroundColor: "#1890ff",
                borderRadius: "5px",
                padding: "2px",
                marginTop: "3px",
                color: "white",
                fontWeight: "bold",
              }}
            >
              {userDetails.fullName}
            </div>
          </RequireAuth>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
