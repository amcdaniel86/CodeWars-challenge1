//  INSTRUCTIONS QUESTION
//  An anagram is a word, phrase, or sentence formed from another by rearranging its letters. An example of this is "angel", which is an anagram of "glean".

// Given an array of words write a method that will return the total number of different anagrams inside that array. You can only count once the anagram between 2 words. For instance, in the previous example we show "angel" and "glean" as anagrams, but you don't have to count the opposite between "glean" and "angel".

// Some examples:

// There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
// There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]

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
      console.log('the index is ' + theIndex + ' and i is ' + i + word + ' is being compared to ' + sortedWords[i])
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

// Best Practices: 