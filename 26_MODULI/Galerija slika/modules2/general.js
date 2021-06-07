 function generateImage(src){//x
     let img= document.createElement("img");
     img.src= src;
              //x
     img.alt = "This image could not be loaded";
     return img;
 }
//export{generateImage};  ili da stavimo da bude difoltni export
export default generateImage;