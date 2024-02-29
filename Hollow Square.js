var size=5;

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
