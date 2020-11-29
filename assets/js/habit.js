function toggle(Date){
    let box=document.getElementById(`decide-${Date}`);
    if(box.style.display == "none"){
        box.style.display="block";
    }else{
        box.style.display="none";    
    }
}