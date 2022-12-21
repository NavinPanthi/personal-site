function darkmode(){
    if(document.body.style.backgroundColor=="black"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
    else{
        document.body.style.backgroundColor="black";
        document.body.style.color = "white";
    }
    console.log(document.body.style.backgroundColor);
}

