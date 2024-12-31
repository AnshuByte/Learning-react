import React from "react";

const Weather = ({ temprature }) => {
  if (temprature < 15) {
    return <div>It sold outside</div>;
  } else if (temprature >= 15 && temprature <= 25) {
    return <div>its nice day today</div>;
  } else {
    return <div>its hot outside</div>;
  }
};

export default Weather;
