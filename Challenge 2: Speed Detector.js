const speedDetector = () => {
  let extraSpeed = 0;
  let points = 0;
  let speed = prompt("Please enter speed in km/h: ");//Displays an input for user to key in a value
  //Conditional Statements to execute a block of code based on the speed
  if (speed) {
    speed = parseFloat(speed);
    if (!isNaN(speed)) {
      if (speed < 70) {
        speed = "OK";
        document.getElementById("speedDetector").textContent = speed;
        return speed;
      } else {
        extraSpeed = speed - 70;
        points = Math.floor(extraSpeed / 5);
        if (points > 12) {
          document.getElementById("speedDetector").textContent =
            "License suspended.";
        } else {
          document.getElementById(
            "speedDetector"
          ).textContent = `Points: ${points}`;
        }
        return points;
      }
    } else {
      document.getElementById("speedDetector").textContent = "Invalid Input";
      return;
    }
  } else {
    document.getElementById("speedDetector").textContent = "No speed input!!";
  }
  return points;
};

//Function call
speedDetector();
