let A1 = [1,2];
let A2 = [1,2,3];


function isSubsetOf(A, B) {
    let x = [];
    for(i=0; i<A.length; i++) {
        for(j=0; j<B.length; j++) {
            if(A[i]===B[j]) {
                A[i]=true;
                x.push(A[i])
            } 
        }
    }
    if(A.length===x.length) {
        return true
    } else {
        return false
    }
}



function isSupersetOf(A, B) {
    let x = [];
    for(i=0; i<B.length; i++) {
        for(j=0; j<A.length; j++) {
            if(B[i]===A[j]) {
                B[i]=true;
                x.push(B[i])
                console.log(B)
            } 
        }
    }
    if(B.length===x.length) {
        return true
    } else {
        return false
    }
}



