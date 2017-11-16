var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, element) {
  var arrayNew = [newElement, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(newElement);
}

function addElementToEndOfArray(array, element) {
  var arrayNew = [...array, newElement];
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(newElement);
}
