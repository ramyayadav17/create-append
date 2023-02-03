
var images=["../auditorium.jpg","../library2.jpg","../svu.jpeg"];

function bodyLoad() {
    for(var path of images) {
        var pic=document.createElement("img");
        pic.src=path;
        pic.width="400";
        pic.height="300";
        document.getElementById("container").appendChild(pic);
      
        var option=document.createElement("option");
        option.text=path;
        document.querySelector("select").appendChild(option);
        
        var li=document.createElement("li");
        li.innerHTML=path;
        document.querySelector("ol").appendChild(li);

    }
}
        
       