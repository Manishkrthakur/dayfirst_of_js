function test(){
    var a="4";
    var b="9";

    var n=a;
    a=b;
    b=n;
    console.log("value of a is "+a);
    console.log("value of  b is "+b);
}
test();