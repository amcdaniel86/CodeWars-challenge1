let words = ['dell', 'ledl', 'abc', 'cba', 'bca', 'bac', 'cab']
// great explanation of function with answer!



function anagramCounter(arrayOfWords){
  let sortedWords = arrayOfWords.map(word=> word.split('').sort().join(''));
  let numberOfAnagrams = 0;

// current word +1 = need 2nd param, theIndex
  sortedWords.forEach((word, theIndex)=> {
    console.log('------', word, )
    // explanation ^^^


    for(let i= theIndex+1; i < sortedWords.length; i++){ 
      console.log('the index is' + theIndex + 'and i is' + i + word + 'is being compared to' + sortedWords[i])
      // explanation ^^^

      if(word === sortedWords[i]){
        console.log('its a match')
        // explanation ^^^

        numberOfAnagrams++
          }


      }

  })
return numberOfAnagrams
  console.log(sortedWords);
}

console.log(anagramCounter(words));