const listOfNeighbours = [['Canada', 'Mexico'], ['Spain'], ['Norway', 'Sweden', 'Russia']];

for (let i = listOfNeighbours.length - 1; i >= 0; i--) {
  const innerArray = listOfNeighbours[i];

  for (let j = innerArray.length - 1; j >= 0; j--) {
    console.log(innerArray[j]);
  }
}