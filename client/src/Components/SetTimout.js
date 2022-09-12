import { Button, Grid } from "@mui/material";
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useParams, useNavigate } from "react-router-dom";

function SetTimout() {
  const navigate = useNavigate();
  let time = useParams().id;
  time = `${time}`;
  const handlePush = () => {
    navigate("/tableView");
  };
  const children = (time) => {
    console.log(time, "time");
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds}`;
  };
  console.log(children(time));
  return (
    <>
      <Grid container mt={4} justifyContent="center">
        <Grid>
          <Button
            mt={4}
            justifyContent="center"
            variant="contained"
            size="medium"
            onClick={handlePush}
          >
            Back
          </Button>
        </Grid>
        <CountdownCircleTimer
          isPlaying
          duration={time}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
        >
          {({ remainingTime }) => remainingTime}
        </CountdownCircleTimer>
      </Grid>
    </>
  );
}

export default SetTimout;
