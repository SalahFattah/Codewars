function alphabetPosition(text) {
    text=text.toLowerCase();
    let alpha="abcdefghijklmnopqrstuvwxyz";
    let newStr="";
    for (let i=0;i<text.length;i++){
        if(alpha.includes(text[i])){
            newStr+=alpha.indexOf(text[i])+1+" ";
        }
    }
    return newStr
  }

  console.log(alphabetPosition("The sunset sets at twelve o' clock."));