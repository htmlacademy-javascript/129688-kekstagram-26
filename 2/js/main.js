function getRandomInteger(min, max) {
  // случайное число от min до (max+1)
  if (min>=0 && max>=0 && min < max) {
    const rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  return false;
}

// console.log(getRandomInteger(40, 3));

function checkLength(text, max = 140) {
  if (text.length < max) {
    return true;
  }
  return false;
}

// alert(checkLength("Чебурашка", 140));

getRandomInteger(1,1);
checkLength('!', 140);
