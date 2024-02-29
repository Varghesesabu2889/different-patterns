var size=5;
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