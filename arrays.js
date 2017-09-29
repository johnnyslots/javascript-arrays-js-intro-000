var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element){
  var array = [1];
  return [element,...array];
};

function destructivelyAddElementToBeginningOfArray(array, element){
  var array = [1];
  var addElement = element
  array.unshift(addElement);
  return array;
};
