export default function toggleSelectionArray(array, value) {
  const index = array.indexOf(value);
  const newArray = array;
  if (index < 0) {
    newArray.push(value);
  } else {
    newArray.splice(index, 1);
  }
  newArray.sort();
  return newArray;
}
