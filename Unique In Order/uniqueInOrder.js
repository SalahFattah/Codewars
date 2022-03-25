function uniqueInOrder(str){
    let arr=[];
    for (let i=0;i<str.length;i++){
        arr.includes(str[i])||arr.push(str[i]);
    }
    return arr;
}
console.log(uniqueInOrder('AAAABBBCCDAABBB'));