
function findMatching(data, nameIn) {
    return data.filter((nameSearched) => nameSearched.toLowerCase() === nameIn.toLowerCase())
  }

function fuzzyMatch(dataIn, lettersIn){
    return dataIn.filter(function (letterSearched) {
            return letterSearched.substring(0, 2) == lettersIn;
        })
}
function matchName(arr, stringIn){
    return arr.filter(function (driver){ return driver.name.toLowerCase() == stringIn.toLowerCase()
     })
}