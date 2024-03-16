const { writeFile } = require("fs");

console.log("at start");
console.log('--------------------------------------------------------');
writeFile("./temporary/fileB.txt", "Line 1\n", (err, result) => {
    if (err) {
        console.log("Error occurred while writing line 1: ", err);
    } else {
        console.log("Line 1 written successfully.");
        writeFile("./temporary/fileB.txt", "Line 2\n", { flag: 'a' }, (err, result) => {
            if (err) {
                console.log("Error occurred while writing line 2: ", err);
            } else {
                console.log("Line 2 written successfully.");
                writeFile("./temporary/fileB.txt", "Line 3\n", { flag: 'a' }, (err, result) => {
                    if (err) {
                        console.log("Error occurred while writing line 3: ", err);
                    } else {
                        console.log("Line 3 written successfully.");
                        console.log("File writing completed.");
                    }
                });
            }
        });
    }
});

console.log("at end");
