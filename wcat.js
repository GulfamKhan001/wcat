
// Commands
// node wcat.js filename => Display the content of the file
// node wcat.js filename1 filename2 filename3 => Display the content of the file in concatination and in order.


// index    0      1      2      3
//         node wcat.js f1.txt f2.txt

let fs=require("fs");
let n=process.argv.slice(2);
// console.log("Files to be read are: "+n);

let filearr=[];
for (let i = 0; i < n.length; i++) {
    filearr.push(n[i]);
}

// check if file exists or not

for (let i=0; i<n.length ;i++){
    let exists = fs.existsSync(n[i]);
    if (!exists) {
        console.log(n[i]+" doesnot exists.");
        //break;
    }
}


// Display the content and appending.

let content="";

for (let i = 0; i < n.length; i++) {
    let file=fs.readFileSync(n[i]);
    content+=file+"\n";
}

console.log(content);