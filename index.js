function sum(...values) {
  return values.reduce((acc, curr) => acc + curr, 0);
}

const useConstIfPossible = 'Use const if possible';
const useSingleQuote = 'Use single quote';
console.log('Should', useConstIfPossible, useSingleQuote);

module.exports = sum;
