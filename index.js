function bastardize(element) {
    //Yeah, I cannot code. Not that much, anyway
    text=element.innerText
    html=""
    while (text!=""){
        //i'd scream if i had to debug this
        html+="<span style='font-family: \"Times New Roman\", Times, serif;'>"+(()=>{reurn=text.slice(0,6);text=text.slice(6);return reurn})()+"</span>"
        html+="<span style='font-family: Arial, Helvetica, sans-serif;'>"+(()=>{reurn=text.slice(0,1);text=text.slice(1);return reurn})()+"</span>"
    }
    // hope you don't have any angle brackets
    element.innerHTML=html
}
