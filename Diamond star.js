var size=5;
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

