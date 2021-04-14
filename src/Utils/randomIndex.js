export default function randomIndex(arrayLength, controlArray) {
  const res = Math.floor(Math.random() * (arrayLength));
  if (controlArray.includes(res)) {
    return randomIndex(arrayLength, controlArray);
  }
  return res;
}
