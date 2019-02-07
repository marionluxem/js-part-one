"use strict";

let name1 = prompt('Hi Sean. Type your name.');
let name2 = prompt('Hi Penelope. Type your name.');
let name3 = prompt('Hi Marion. Type your name.');

/*I commented these next 4 lines out because it wasn't actually showing the name in the results. For example, when I wrote ${name1} it was saying that instead of Sean.*/
//let name1, name2, name3;
//name1 = 'Sean';
//name2 = 'Penelope';
//name3 = 'Marion';

if ( (name1.length === name2.length) && (name1.length > name3.length)) {
    console.log(`Sean, Penelope & Marion tie for the longest name.`);
}

else if ( (name1.length === name2.length) && (name1.length === name3.length)) { 
    console.log ('Sean, Penelope & Marion tie for the longest name.');

}

else if ( (name1.length > name2.length) && (name1.length > name3.length)) {
    console.log ('Sean has the longest name.');
}

else if ( (name2.length > name1.length) && (name2.length > name3.length)) {
    console.log ('Penelope has the longest name.');
}

else if ( (name3.length > name1.length) && (name3.length > name2.length)) {
    console.log ('Marion has the longest name.');
}
