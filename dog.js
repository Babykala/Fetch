let button=document.querySelector("#submit");
button.addEventListener("click",function(){
    
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res=>res.json())
    .then(data=>{
        let imageElement=document.createElement("img");
        imageElement.src=data.message;
        document.body.append(imageElement);
       
    })
   
    
})
