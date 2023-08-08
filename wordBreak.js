const sortByLength = (wordArray) => {
    wordArray.sort((a,b) => {
        const al = a.length;
        const bl = b.length;

        if(al > bl) return -1;
        if(bl > al) return 1;
        return 0;
    })

    return wordArray
}

const getWordFromString = (str, word, originalString) => {
    let remainingStr = str
    let lastIndex = 0;
    let startIndex = 0

    if(originalString.indexOf(word) < 0) return str

    while(startIndex >= 0){
        startIndex = remainingStr.indexOf(word)
        if(startIndex < lastIndex){
            return remainingStr
        } else if(startIndex >= 0){
            const start = startIndex > 0 ? remainingStr.substring(0, startIndex) : ""
            const end = remainingStr = remainingStr.substring(startIndex + word.length, remainingStr.length)
            const spacer = end[0] === word[word.length - 1] ? "" : " "
            remainingStr = start + spacer + end
        }
        lastIndex = startIndex
    }

    return remainingStr
}

var wordBreak = function(s, wordDict, skipSort) {
    const sortedArray = !skipSort ? sortByLength(wordDict) : wordDict
    let stringToCheck = s

    for(let i = 0; i < sortedArray.length; i++){
        stringToCheck = getWordFromString(stringToCheck, sortedArray[i], s)
    }

    let isPerfectBreak = stringToCheck.trim().length === 0

    if(!isPerfectBreak && wordDict.length){
        sortedArray.shift()
        return (wordBreak(s, sortedArray, true))
    }
    
    return isPerfectBreak
};

// const words1 = ["this", "is", "a", "good", "day"]
// const str1 = "thisisagoodday"

// console.log(wordBreak(str1, words1))

// const words2 = ["a","b","bbb","bbbb"]
// const str2 = "bb"

// console.log(wordBreak(str2, words2))

// const words3 = ["a","abc","b","cd"]
// const str3 = "abcd"

// console.log(wordBreak(str3, words3))

// const words4 = ["bc","cb"]
// const str4 = "ccbb"

// console.log(wordBreak(str4, words4), "expect false")

// const words5 = ["bc","ca"]
// const str5 = "cbca"

// console.log(wordBreak(str5, words5), "expect false")

// const words6 = ["cc","ac"]
// const str6 = "ccaccc"

// console.log(wordBreak(str6, words6))

const words7 = ["cats","cat","dog","ski"]
const str7 = "catskicatcats"

console.log(wordBreak(str7, words7))


/*

sort wordDict

loop over wordDict 

remove every instance of word in string if not instring return false


*/