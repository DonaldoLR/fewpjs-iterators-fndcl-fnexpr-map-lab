const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//Input: what does the this keyword mean? 
const titleCased = () => {
  return tutorials.map((titles) => {
    let arrayOfWords = titles.split(' ');
    let newCasedArray = arrayOfWords.map(word => {
      let firstLetter = word.slice(0,1);
      let upperCasedLetter = firstLetter.toUpperCase()
      word = upperCasedLetter+word.slice(1);
      return word
    })
    newCasedArray = newCasedArray.join(' ');
    return newCasedArray
  })
}
//Output: What Does The This Keyword Mean?.