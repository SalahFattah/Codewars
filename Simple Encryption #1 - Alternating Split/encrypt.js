function encrypt(text, n) {
    let oddStr;
    let evenStr;
    let result;
    for(let j=0;j<n;j++){
        oddStr="";
        evenStr="";
    for(let i=0;i<text.length;i++){
        if(i%2===0){
            evenStr+=text[i];
        }else{
            oddStr+=text[i];
        }
    }
     result=oddStr+evenStr;
     text=result;
}
    return result;
}

console.log(encrypt("012345", 2));