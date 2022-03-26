function ipToInt32(ip){
    //...
    let num=ip.split(".");
    let wholeNum='';
    for(let i=0;i<num.length;i++ ){
        let str='';
        // let secondStr='';
        num[i]=+(num[i]);
        str=num[i].toString(2);
        if(str.length<8){
            str=str.padStart(8,0);
        }

        // while(num[i]>0){
        //     str+=num[i]%2;
        //     num[i]=Math.floor(num[i]/2);
        // }
        // for(let i=str.length-1;i>=0;i--){
        //     secondStr+=str[i];
        // }
        // if(secondStr.length<8){
        //     secondStr=secondStr.padStart(8,0);
        // }
        wholeNum+=str;
        
    }
    wholeNum=+("0b"+wholeNum);
    
    return +wholeNum.toString();
  }


  console.log(ipToInt32("128.32.10.1"));