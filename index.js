function sum(...values) {
  return values.reduce((acc, curr) => acc + curr, 0);
}

const useConstIfPossible = 'Use const if possible';
const useSingleQuote = 'Use single quote';
console.log('Should', useConstIfPossible, useSingleQuote);
console.log('Should link this branch with GH-1 issue');

module.exports = sum;
