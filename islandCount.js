function countIslands (mapStr) {
    var mapArr = mapStr.split('\n')
    var islands = 0
    var subArr = mapArr.map(i => i.split(''))
    console.log(subArr);
    for (var i = 0; i < subArr.length; i++) {
        for (var j = 0; j < subArr[i].length; j++) {
            if (subArr[i][j] === '0' ) {
                if( i === 0 && j === 0 ) {
                    if (subArr[i][j + 1] === '.' && subArr[i + 1][j] === '.') {
                        islands++
                    }
                } else if ((j===0 || subArr[i][j - 1] === '.') && (i=== 0 || subArr[i -1][j] === '.')) {
                    islands++
                } 
            }
        }
    }
    console.log('islands', islands);
    return subArr
}
  
countIslands('0..00.\n..0...\n..00.0\n..0...\n...00.')



