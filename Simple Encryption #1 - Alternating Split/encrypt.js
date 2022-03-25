function encrypt(text, n) {
    if(text===""||n<=0 || text===null){
        return text;
    }
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

function decrypt(text, n) {
    
    let oddStr;
    let evenStr;
    let result
    
    for(let j=0;j<n;j++){
        result=[];
        oddStr="";
        evenStr="";
    for(let i=Math.floor(text.length/2);i<text.length;i++){

        evenStr+=text[i];
        }
    for(let i=0;i<Math.floor(text.length/2);i++){
            oddStr+=text[i];}
    
        // console.log(oddStr);
        // console.log(evenStr);
    
    for(let i=0;i<evenStr.length;i++){
        result.push(evenStr[i]);
        result.push(oddStr[i]);
    }
     text=result.join("");
}
    

    return text;
}



console.log(decrypt("s eT ashi tist!", 2));