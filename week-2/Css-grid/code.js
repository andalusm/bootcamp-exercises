// How many times foo is called 6 times  (2 goo, 1 boo, 1 foo, 2 noo)

function foo(a,b,c){
    return a+b+c;
}

function boo(a,c){
    var d = c + 2;
    var x = foo(a,c,d);
    return x-d;
}

function goo(x){
    var y = boo(x, 3);
    return y + foo(y,y,y);
}

function moo(n, k){
    return goo(n) + too(k);
}

function too(j){
    return j * 2;
}

function zoo(z){
    return too(z);
}

function noo(a,b){
    if (boo(a,b) * 3.7 > 5887){
        return moo(4, koo(b));
    }
    return boo(a,b) + 4.66;
}

function koo(d){
    var f = zoo(d) * 5.3;
    return f * 1.2;
}

var r = goo(5);
var w = r + too(3) + zoo(r) + boo(r, too(712));
var q = foo(r, w, 4) + koo(34) + noo(w,r);


// What is the value of b in the 3rd time foo is called? b=1424
// who is calling too the second time? zoo
//what is the return value of zoo(r) when we calculate variable w? 64
// is there any function that is not called at all? yes, moo
// Who is calling foo the first time it is being called? goo
// what is the greatest value zoo sends as a parameter to too? 34
// what is the largest value of j*2.3 when calling too? 1637.6
// what would be the value of too(a)+too(c)+moo(a,c) the third time you call boo? 9488

































