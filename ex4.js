//find the area of a triangle given lengths of its 3 sides 

function calculateArea(a, b, c) {
    let p = (a + b + c) / 2,
        area = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        
    return area;

}
console.log(calculateArea(5,6,7))