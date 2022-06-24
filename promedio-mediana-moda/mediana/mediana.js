function calculateAverage(list) {
  const sumList = list.reduce(function (accumulatedValue = 0, newElement) {
    return accumulatedValue + newElement;
  });

  const averageList = sumList / list.length;
  return averageList;
}

function calculateMedian(list) {
  list.sort();

  const halfList = parseInt(list.length / 2);

  function esPar(number) {
    if (number % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

  let median;
  if (esPar(list.length)) {
    const element1 = list[halfList - 1];
    const element2 = list[halfList];

    const averageElement1n2 = calculateAverage([element1, element2]);

    median = averageElement1n2;
  } else {
    median = list[halfList];
  }
  return median;
}
