function passwordValidation(password) {
  //    if (password.length > 7) {
  //        return 'Strong!';
  //    } else {
  //        return 'Weak';
  //    }
  return password.length > 7 ? "Strong!" : "weak";
}
console.log(passwordValidation("dxbfgbxfgb"));

const isCapital = (password) => {
  return /[A-Z]/.test(password);
};

function advancedPassword(password) {
  if (isCapital(password) && password.length > 7) {
    return "Very Strong!";
  } else if (password.length === 7) {
    return "Strong";
  } else if (password.length < 7) {
    return "Weak";
  } else if (password.length > 7) {
    return "Almost";
  }
}
console.log(advancedPassword("ffffffffff"));
