import React from "react";

function Result({ secretNumber, term }) {
  let result;
  if (term) {
    if (term > secretNumber) {
      result = "Higher";
    } else if(term < secretNumber) {
      result = "Lower";
    } else if(term == secretNumber) {
      result = "superr";
    } else {
      result = "Enter Valid INput";
    }

    return <h3>You guessed the {result} </h3>;
  }
}

export default Result;
