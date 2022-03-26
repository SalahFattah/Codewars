function ipToInt32(ip){
    //...
    let num=ip.split(".");
    for(let i=0;i<num.length;i++ ){
        let str='';
        let secondStr='';
        num[i]=+(num[i]);
        while(num[i]>0){
            str+=num[i]%2;
            num[i]=Math.floor(num[i]/2);
        }
        for(let i=str.length-1;i>=0;i--){
            secondStr+=str[i];
        }
        
        // console.log(secondStr);
    }
    // console.log(num)
  }


  ipToInt32("128.32.10.1");