import React from "react";
  
const Heading = ({ level, text, icon }) => {

  const defaultTitle = `Default ${level ? level : 'h2'} Title`;

  const weight = {
    h1: <h1>{text ? text : defaultTitle}</h1>,
    h2: <h2>{text ? text : defaultTitle}</h2>,
    h3: <h3>{text ? text : defaultTitle}</h3>,
    h4: <h4>{text ? text : defaultTitle}</h4>,
    h5: <h5>{text ? text : defaultTitle}</h5>,
    h6: <h6 >{text ? text : defaultTitle}</h6>
  };

  const header = level ? weight[level] : weight.h2;

  return header;

};

export default Heading;
