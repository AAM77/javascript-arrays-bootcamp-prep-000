var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, newElement) {
  const newArray = [newElement, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, newElement) {
  array.unshift(newElement);
}

function addElementToEndOfArray(array, newElement) {
  var arrayNew = [...array, newElement];
}

function destructivelyAddElementToEndOfArray(array, newElement) {
  array.push(newElement);
}
