const gradeGenerator = () => {
  let grade = "Invalid Input";
  let marks = prompt("Please enter student marks: ");
  if (marks) {
    marks = parseFloat(marks);
    if (!isNaN(marks)) {
      if (marks > 79) {
        grade = "A";
      } else if (marks >= 60 && marks <= 79) {
        grade = "B";
      } else if (marks >= 49 && marks <= 59) {
        grade = "C";
      } else if (marks >= 40 && marks <= 49) {
        grade = "D";
      } else if (marks < 40) {
        grade = "E";
      }
    }
  } else {
    document.getElementById("challenge1").textContent =
      "No student marks entered!!";
    return;
  }
  document.getElementById("challenge1").textContent = `Grade: ${grade}`;
  return grade;
};
gradeGenerator();
