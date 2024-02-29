var size=5;
//Left downwards triangle
for(i=0; i<size; i++){
    var row = '';
    for (var j = 0; j < (size-i); j++) {
        row += '* ';
    }
    console.log(row);
}