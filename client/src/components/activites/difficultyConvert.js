const difficultyConvert = (difficulty) => {
  switch (difficulty) {
    case 1:
      return "Beginner";
    case 2:
      return "Easy";
    case 3:
      return "Intermediate";
    case 4:
      return "Hard";
    case 5:
      return "Expert";
    default:
      break;
  }
};
export default difficultyConvert;
