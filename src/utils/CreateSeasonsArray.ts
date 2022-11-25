export default function createSeasonsArray(number: number): number[] {
  const seasonsArray = [];
  for (let i = 1; i <= number; i++) {
    seasonsArray.push(i);
  }
  return seasonsArray;
}
