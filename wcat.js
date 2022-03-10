
// Commands
// node wcat.js filename => Display the content of the file
// node wcat.js filename1 filename2 filename3 => Display the content of the file in concatination and in order.
// node wcat.js options filepath => options are flag for edit the file
            //   -n => add no. at starting
            //   -s => remove the empty lines
            //   -b => add no. in front of non empty lines


// index    0      1      2      3
//         node wcat.js f1.txt f2.txt

const { table } = require("console");
let fs=require("fs");
let n=process.argv.slice(2);
// console.log("Files to be read are: "+n);

let filearr=[];
let optionsArr = [];
for (let i = 0; i < n.length; i++) {
    let firstChar = n[i].charAt(0);

    if (firstChar == '-') {
        optionsArr.push(n[i]);
    }
    else {
        filearr.push(n[i]);
    }
}



// check if file exists or not

for (let i=0; i<filearr.length ;i++){
    let exists = fs.existsSync(filearr[i]);
    if (!exists) {
        console.log(filearr[i]+" doesnot exists.");
        //break;
    }
}


// Display the content and appending.

let content="";

for (let i = 0; i < filearr.length; i++) {
    let file=fs.readFileSync(filearr[i]);
    content+=file+"\r\n";
}

console.log(content);

let contentArr= content.split("\r\n");
console.table(contentArr);

//  check if -s is written
let temp="";
let sPresent= optionsArr.includes("-s");
if (sPresent){
    for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i]=="" || contentArr[i]=="\n") {
            contentArr[i]=null;   
        }
        if (contentArr[i]!=null) {
            temp+=contentArr[i]+"\n";
        }
    }
}
console.table(contentArr);
console.log(temp);