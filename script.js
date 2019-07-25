// Cube
const answer = ( ) => {
    var l = document.getElementById("length").value;
    var w = document.getElementById("width").value;
    var h = document.getElementById("height").value;
        return l*w*h + " un<sup>3</sup>";
}
const volumeCube = ( ) => {
    document.getElementById("demo").innerHTML = answer( );
};
// RECTANGULAR PRISM
const answer2 = ( ) => {
    var l2 = document.getElementById("length2").value;
    var w2 = document.getElementById("width2").value;
    var h2 = document.getElementById("height2").value;
        return l2*w2*h2 + " un<sup>3</sup>";
}
const volumeRectPrism = ( ) => {
    document.getElementById("demo2").innerHTML = answer2( );
};
// Cylinders///
const answer3 = ( ) => {
    var r = document.getElementById("radius").value;
    var h = document.getElementById("height3").value;
    var calculation = r*r*h*Math.PI;
    var finalAnswer = calculation.toFixed(2);
        return finalAnswer + " un<sup>3</sup>";
}
const volumeCylinder = ( ) => {
    document.getElementById("demo3").innerHTML = answer3(  );
};
// Cones///
const answer4 = ( ) => {
    var r = document.getElementById("radius4").value;
    var h = document.getElementById("height4").value;
    var calculation1 = r*r*h*Math.PI;
    var calculation2 = calculation1/3;
    var finalAnswer = calculation2.toFixed(2);
        return finalAnswer + " un<sup>3</sup>";
}
const volumeCone = ( ) => {
    document.getElementById("demo4").innerHTML = answer4(  );
};

// Pyramids ///
const answer5 = ( ) => {
    var l = document.getElementById("length5").value;
    var w = document.getElementById("width5").value;
    var h = document.getElementById("height5").value;
    var calculation = l*w*h / 3;
    var finalAnswer = calculation.toFixed(2);
        return finalAnswer + " un<sup>3</sup>";
}
const volumePyramid = ( ) => {
    document.getElementById("demo5").innerHTML = answer5(  );
};
// VOL OF SPHERES

const answer6 = ( ) => {
    var r = document.getElementById("radius6").value;
    var calculation = 4 / 3 *r*r*r*Math.PI;
    var finalAnswer = calculation.toFixed(2);
        return finalAnswer + " un<sup>3</sup>";
}
const volumeSphere = ( ) => {
    document.getElementById("demo6").innerHTML = answer6(  );
};


