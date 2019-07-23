

    let i = 0;
    while (i++ < 5) console.log( i ); //output 1 2 3 4 5

    let k = 0;
    while (++k < 5) console.log(k); //output 1 2 3 4  

    for (let j=0; j<5; ++j) console.log(j);

    for (let h=2; h<=10;h++){
        if (h%2==0){
            console.log(h); 
        }
    }

    for (let i = 0; i < 3; i++) {
  console.log( `number ${i}` );
}

    let t = 0;
    do console.log(`number ${t}`)
    while(++t <3);

    let f = 0;
    while(f<3){
        console.log(`number ${t}`);
        f++;
    };

    // let num = prompt("Enter a number greater than 100", "");
    // if (while (!(num > 100)) ){
    //     alert("Please enter a number greater than 100");
    // }

    // let num;
    // do { num = prompt("Enter a number greater than 100", "");}
    // while(num<=100 && num);

    let n = 10;
    nextPrime:
    for (let i = 2; i <= n; i++){
        for (let j=2;j<i;j++){
            if (i%j==0) continue nextPrime;
        }
        console.log(i);
    }
