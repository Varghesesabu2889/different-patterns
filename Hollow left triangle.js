var size=5;

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