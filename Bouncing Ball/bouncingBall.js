function bouncingBall(h,  bounce,  window) {
    // your code here
    if(!(h>0 && (bounce>0 && bounce<1)&& window<h)){
        return -1
    }
    let count=0;
    do{
        count++
        h=h*bounce;
    }while(h>window);

    return count*2-1;
  }
  console.log(bouncingBall(10.0, 0.66, 1.5));