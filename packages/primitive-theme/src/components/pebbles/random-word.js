import React from "react";
import { randomWord } from "../sand/utils";

const RandomWord = () => {
  return (
    <span>{ randomWord() }</span>
  );
};
export default RandomWord;