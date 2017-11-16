var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];
function addElementToBeginningOfArray(array, newElement) {
  var arrayNew = [newElement, ...array];
}
function destructivelyAddElementToBeginningOfArray(array, newElement) {
  array = [newElement, ...array];
}

function addElementToEndOfArray(array, newElement) {
  var arrayNew = [...array, newElement];
}

function destructivelyAddElementToEndOfArray(array, newElement) {
  array = [...array, newElement ];
}
