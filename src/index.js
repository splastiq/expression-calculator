function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let array = [];
    let string = expr;
    let rezArray = [];

    //make array from string
    for (let i = 0; i < string.length; i++) {
        string = string.replace(/ /g, '');
        if (string[i] == '+' || string[i] == '-' || string[i] == '*' || string[i] == '/') {
            array.push(string.slice(0, i), string.slice(i, i + 1));
            string = string.slice(i + 1, string.length);
            i = 0;
        }
    }
    array.push(string);

    //make new array
    rezArray = parseInt(array[0]);
    for (let i = 1; i < array.length; i++) {
        if (array[i] == '+') {
            rezArray += parseInt(array[i + 1]);
        } else
            if (array[i] == '-') {
                rezArray -= parseInt(array[i + 1]);
            } else
                if (array[i] == '*') {
                    rezArray *= parseInt(array[i + 1]);
                } else
                    if (array[i] == '/') {
                        if (array[i + 1] != 0) {
                            rezArray /= parseInt(array[i + 1]);
                        } else throw new Error('Devision by zero!');
                    }
    }
    //console.log(array);

    //VERSION2
    //   for (let i = 1; i < array.length; i++) {
    //     if (array[i] == '/') {
    //       let temp = parseFloat(array[i-1]) / parseFloat(array[i+1]);
    //       array[i-1] = temp;      
    //       array.splice(i, i-1);  
    //     }
    //     if (array[i] == '*') {
    //       let temp = parseFloat(array[i-1]) * parseFloat(array[i+1]);
    //       array[i-1] = temp;      
    //       array.splice(i, i-1);  
    //     }

    //   }  
    //   console.log(array);
    //     for (let i = 1; i < array.length; i++) {
    //     if (array[i] == '+') {
    //       let temp = parseFloat(array[i-1]) + parseFloat(array[i+1]);
    //       array[i-1] = temp;      
    //       array.splice(i, i-1);  
    //       i = 1;
    //     }
    //     if (array[i] == '-') {
    //       let temp = parseFloat(array[i-1]) - parseFloat(array[i+1]);
    //       array[i-1] = temp;      
    //       array.splice(i, i-1);  
    //       i = 1;
    //     }
    //   }   
    //VERSION2 END 

    //console.log(array);
    //console.log(rezArray);
    return rezArray;
}

module.exports = {
    expressionCalculator
}