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
  objectFit: "cover"
}

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

const headingAccentStyles = {
  color: "#ECD9C0",
};

const paragraphStyles = {
  padding: "10px",
};

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
};

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
};

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
        <h1 style={headingStyles}>What is BZ Marketplace?</h1>
        <p style={paragraphStyles}>
          Currently, in order to sell handmade products by hand you need to
          either set up your own shop or sell in the hyper-competitive world of
          Etsy or Amazon Marketplace. Although I think both of these are truly
          necessary I think there can also be a middle-ground. Similar to brick
          and mortar consignment shops we can have online retailer co-ops. By
          decentralizing online shops from companies like Etsy you are able to
          create shops that satisfy a particular niche, that cater to specific
          audiences, that share hosting, advertising costs and technical
          expertise. Most makers do not have the time, resources, and money to
          manage an online store. By turning to the larger shops you are at the
          mercy of those vendors, pay their fees, and their algorithms.
        </p>
        <p style={paragraphStyles}>
          The biggest challenge with the larger retailers is that their idea of
          what is “home-made” could vary from what you consider. The result is
          your items being listed along side things that are drop-shipped,
          knocked-off, machine-made, or low-quality. By decentralizing these
          marketplaces into smaller, independently run shops can democratically
          decide on the type of product, the vendors, marketing strategy, etc.
          You can target your particular niche and see your product aligned with
          similarly crafted items.
        </p>
      </div>
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
