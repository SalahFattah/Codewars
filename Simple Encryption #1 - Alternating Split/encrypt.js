function encrypt(text, n) {
    let oddStr="";
    let evenStr="";
    for(let i=0;i<text.length;i++){
        if(i%2===0){
            evenStr+=text[i];
        }else{
            oddStr+=text[i];
        }
    }
    return oddStr+evenStr;
}

console.log(encrypt("012345", 1));