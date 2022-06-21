// const list = [10,20,30,40,50];

// Para llamar a la función utilizar: calculateAverage([]);
function calculateAverage(list) {
  // let sumList = 0;

  // for (let i = 0; i < list.length; i++) {
  //   sumList = sumList + list[i];
  // }

  const sumList = list.reduce(function (accumulatedValue = 0, newElement) {
    return accumulatedValue + newElement;
  });

  const averageList = sumList / list.length;
  return averageList;
}
