var size=5;
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