import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import logo from "../images/logo.png";

const pageStyles = {
  backgroundColor: "#DCC99C",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
  minHeight: "800px",
};

const masthead = {
  height: 200,
  backgroundColor: "#ECD9C0",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

const mastheadImg = {
  height: 200,
  objectFit: "cover",
};

const mastheadItem = {};

const nav = {
  backgroundColor: "#55520D",
  height: "60px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
};

const navItem = {
  color: "#B0A56A",
  fontSize: "24px",
  padding: "10px",
  fontFamily: "Libre Franklin",
};

const body = {};

const headingStyles = {
  marginTop: 0,
  maxWidth: 800,
  padding: "10px",
  color: "#96673A",
  fontFamily: "Libre Franklin",
};

const contactForm = {
  display: "grid",
  gridTemplateColumns: "100px 1fr",
  gridGap: 16,
  overflow: "hidden",
  fontSize: 16
};

const contactLabel = {
  float: "left",
  width: 100,
  paddingRight: 24,
  gridColumn: "1 / 2",
};

const contactInput = {
  gridColumn: "2 / 3",
  float: "left",
  width: 400,
  height: 24
};

const contactButton = {
  gridColumn: "2 / 3",
  float: "left",
  width: 200,
  height: 24
}

const IndexPage: React.FC<PageProps> = ({ data }) => {
  return (
    <main style={pageStyles}>
      <div style={masthead}>
        <div style={mastheadItem}>
          <img src={logo} style={mastheadImg} alt="logo" />
        </div>
      </div>
      <nav style={nav}>
        <div style={navItem}> Marketplace </div>
        <div style={navItem}> Gallery </div>
        <div style={navItem}> Artists </div>
        <div style={navItem}> About </div>
      </nav>

      <div style={body}>
        <h1 style={headingStyles}>
          Signup to be the first to join the marketplace
        </h1>
        <form
          style={contactForm}
          method="post"
          action="https://getform.io/f/0434ab0c-ec6e-4523-9f1d-cc62836977c1"
        >
          <label style={contactLabel}>Email</label>
          <input style={contactInput} type="email" name="email" />
          <label style={contactLabel}>Name</label>
          <input style={contactInput} type="text" name="name" />
          <label style={contactLabel}>Message</label>
          <input style={contactInput} type="text" name="message" />
          <button style={contactButton} type="submit">
            Send
          </button>
          <input style={contactButton} type="reset" value="Clear" />
        </form>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
