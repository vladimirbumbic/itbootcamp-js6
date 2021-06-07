import generateImage from "./modules2/general.js";  // i ovde skinemo zagrade zbog default exporta
import{generateList, generateListItem} from "./modules2/list.js"
import{generateTable,generateTableRow,generateTableItem} from "./modules2/table.js"

document.body.appendChild(generateImage("images/1.jpg"));
document.body.appendChild(generateImage("images/2.jpg"));
document.body.appendChild(generateImage("images/3.jpg")); //stavi 4.jpg zbog alt

let ul = generateList(document.body);
let li1 = generateListItem(ul, "images/1.jpg");
let li2 = generateListItem(ul, "images/2.jpg");
let li3 = generateListItem(ul, "images/3.jpg");

let t = generateTable(document.body);
let tr = generateTableRow(t);
for(let i =1;i<=3;i++){
    generateTableItem(tr, `images/${i}.jpg`);
}
