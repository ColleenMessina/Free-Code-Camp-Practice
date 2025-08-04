function getAverage(testScoresArr) {
  let sum = 0;
  for (let i = 0; i < testScoresArr.length; i++) {
    sum += testScoresArr[i];
  }
  return sum / testScoresArr.length;
}

function getGrade(studentScores) {
  if (studentScores === 100) {
    return "A+";
  } else if (studentScores >= 90 && studentScores <= 99) {
    return "A";
  } else if (studentScores >= 80 && studentScores <= 89) {
    return "B";
  } else if (studentScores >= 70 && studentScores <= 79) {
    return "C";
  } else if (studentScores >= 60 && studentScores <= 69) {
    return "D";
  } else {
    studentScores >= 0 && studentScores <= 59;
    return "F";
  }
}

function hasPassingGrade(score) {
  return getGrade(score) === "F";
}

function studentMsg(average, studentScore) {
  if (hasPassingGrade(studentScore)) {
    return `Class average: ${getAverage(average)}. Your grade: ${getGrade(
      studentScore
    )}. You passed the course.`;
  } else {
    return `Class average: ${getAverage(average)}. Your grade: ${getGrade(
      studentScore
    )}. You failed the course.`;
  }
}
