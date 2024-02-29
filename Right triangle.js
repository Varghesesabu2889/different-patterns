var size=5;

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