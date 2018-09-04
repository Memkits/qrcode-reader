import React from "react";
import { parseRoutePath, IRouteParseResult } from "ruled-router";
import { css } from "emotion";
import QrReader from "react-qr-reader";

import Home from "./home";
import Content from "./content";

const renderChildPage = (routerTree: IRouteParseResult) => {
  if (routerTree != null) {
    switch (routerTree.name) {
      case "home":
        return <Home />;
      case "content":
        return <Content />;
    }
  }
  return <div>NOTHING</div>;
};

export default (props) => {
  return <div className={styleContainer}>{renderChildPage(props.router)}</div>;
};

const styleContainer = css`
  font-family: "Helvetica";
`;
