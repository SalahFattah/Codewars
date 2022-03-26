function ipToInt32(ip){
    //...
    let num=ip.split(".");
    for(let i=0;i<num.length;i++ ){
        num[i]=+(num[i]);
    }
    console.log(num)
  }

  ipToInt32("128.32.10.1");