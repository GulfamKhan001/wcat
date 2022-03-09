
// Commands
// node wcat.js filename => Display the content of the file
// node wcat.js filename1 filename2 filename3 => Display the content of the file in concatination and in order.


// index    0      1      2      3
//         node wcat.js f1.txt f2.txt


let n=process.argv.slice(2);
console.log(n);