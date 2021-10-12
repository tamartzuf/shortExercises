function rightAngle(a,b,c){
    return sqr(a) + sqr(b) === sqr(c);
}
function sqr(num){
    return multiplication(num,num); 
}
function multiplication(x,y){
    return x*y;
}
console.log(rightAngle(3, 4, 5));
console.log(rightAngle(3, 3, 5));

