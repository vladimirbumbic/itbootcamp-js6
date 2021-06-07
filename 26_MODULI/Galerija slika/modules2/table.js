import generateImage from "./general.js" //i ovde skinemo zagrade

let generateTable = parent =>{
    let table = document.createElement("table");
    table.style.border="1px solid black";
    parent.appendChild(table);
    return table;
}

let generateTableRow = parent=>{
    let tr=document.createElement("tr");
    parent.appendChild(tr);
    return tr;
}

let generateTableItem = (parent, src)=>{
    let td=document.createElement("td");
    let img=generateImage(src);//putsnju prosledjujemo kao parametar
    td.appendChild(img);
    parent.appendChild(td);
    return td;
}

export{generateTable,generateTableRow,generateTableItem};