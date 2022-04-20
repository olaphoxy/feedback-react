import PropTypes from "prop-types";
import React from "react";

const Header = ({ text, bgColor, textColor }) => {
  const stylistic = { backgroundColor: bgColor, color: textColor };
  return (
    <header style={stylistic}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
};

Header.defaultProps = {
  text: "Feedback UI",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#ff6a95",
};

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};
export default Header;
