var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, newElement) {
  var arrayNew = [newElement, ...array];
  return arrayNew;
}
function destructivelyAddElementToBeginningOfArray(array, newElement) {
  array.unshift(newElement);
  return array;
}

function addElementToEndOfArray(array, newElement) {
  var arrayNew = [...array, newElement];
  return arrayNew;
}

function destructivelyAddElementToEndOfArray(array, newElement) {
  array.push(newElement);
  return array;
}
