function uniqueInOrder(iter){
    let arr=[];
    for (let i=0;i<iter.length;i++){
        iter[i]===iter[i+1]||arr.push(iter[i]);
    }
    return arr;
}
console.log(uniqueInOrder("AAAABBBCCDAABBB"));