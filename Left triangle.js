var size=5;

//Left triangle
for(i=0; i<size; i++){
    var row = '';
    for (var j = 0; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}