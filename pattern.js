console.log("-----------------------------------------Square-------------------------------");

var size=5;
//Square
for(i=0; i<size; i++){
    var row = '';
    for (var j = 0; j < size; j++) {
        row += '* ';
    }
    console.log(row);
}
console.log("-----------------------------------------Hollow Square-------------------------------");

// Hollow Square
for(i=0; i<size; i++){
    var row = '';
    for (var j = 0; j < size; j++) {
        if(i==0 || i==(size-1) || j==0 || j==(size-1))
            row += '* ';
        else
            row+='  ';
    }
    console.log(row);
}

console.log("-----------------------------------------Left triangle-------------------------------");

//Left triangle
for(i=0; i<size; i++){
    var row = '';
    for (var j = 0; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}

console.log("-----------------------------------------Right triangle-------------------------------");

//Right triangle
for(i=0; i<size; i++){
    var row = '';
    for(j=0; (j<size-i-1); j++){
        row += '  ';
    }
    for (var j = 0; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}


console.log("-----------------------------------------Hollow left triangle-------------------------------");

//Hollow left triangle
for(i=0; i<size; i++){
    var row = '';
    for (var j = 0; j < size; j++) {
        if(i+j==(size-1) || i==(size-1) || j==(size-1))
            row += '* ';
        else
            row += '  ';
    }
    console.log(row);
}



console.log("-----------------------------------------Left downwards triangle -------------------------------");

//Left downwards triangle
for(i=0; i<size; i++){
    var row = '';
    for (var j = 0; j < (size-i); j++) {
        row += '* ';
    }
    console.log(row);
}



console.log("-----------------------------------------Pyramid-------------------------------");

//Pyramid
for(i=0; i<size; i++){
    var row = '';
    for(j=0; j<(size-1-i); j++){
        row += '  ';
    }
    for (var j = 0; j < (i*2+1); j++) {
        row += '* ';
    }
    console.log(row);
}


console.log("-----------------------------------------Hollow pyramid-------------------------------");


//Hollow pyramid
for(i=0; i<size; i++){
    var row = '';
    for(j=0; j<(size-1-i); j++){
        row += '  ';
    }
    for (var j = 0; j < (i*2+1); j++) {
        if(i==(size-1))
            row += '* ';
        else if(j==0 || j==(i*2))
            row += '* ';
        else
            row += '  ';
    }
    console.log(row);
}


console.log("-----------------------------------------Diamond star-------------------------------");

//Diamond star
for (var i = 1; i <= size; i++) {
    var row = '';
    for (var j = 1; j <= size - i; j++) {
        row += '  ';
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        row += '* ';
    }
    console.log(row);
}

for (var i = size - 1; i >= 1; i--) {
    var row = '';
    for (var j = 1; j <= size - i; j++) {
        row += '  ';
    }
    for (var k = 1; k <= 2 * i - 1; k++) {
        row += '* ';
    }
    console.log(row);
}



console.log("-----------------------------------------Hollow Diamond star-------------------------------");

//Hollow Diamond star
for (var i = 1; i <= size; i++) {
    var row = '';
    for (var j = 1; j <= size - i; j++) {
        row += '  ';
    }
    row += '*';
    for (var k = 1; k < 2 * i - 1; k++) {
        row += '  ';
    }
    if (i !== 1) 
        row += '*';
    console.log(row);
}

for (var i = size - 1; i >= 1; i--) {
    var row = '';
    for (var j = 1; j <= size - i; j++) {
        row += '  ';
    }
    row += '*';
    for (var k = 1; k < 2 * i - 1; k++) {
        row += '  ';
    }
    if (i !== 1) 
        row += '*';
    console.log(row);
}

