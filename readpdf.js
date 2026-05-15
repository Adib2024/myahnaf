import fs from 'fs';
import pdf from 'pdf-parse';

let dataBuffer = fs.readFileSync('C:/Adib/Portfolio/Muhammad Adib Ahnaf bin Mohammad Khozaini.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(function(error) {
    console.log('Error:', error);
});
