let grade =  prompt("What's your grade ?")
let textinfo
if (grade >= 0 && grade <= 100 ){
    info.classList.add("text-primary")
    if(grade >=90){
        textinfo = "AA π" 
    }else if (grade >= 85 && grade <= 89 ){
        textinfo = "BA π" 
    }else if (grade >= 80 && grade <= 84 ){
        textinfo = "BB π" 
    }else if (grade >= 75 && grade <= 79 ){
        textinfo = "CB π" 
    }else if (grade >= 70 && grade <= 74 ){
        textinfo = "CC π" 
    }else if (grade >= 65 && grade <= 69 ){
        textinfo = "DC π€" 
    }else if (grade >= 60 && grade <= 64 ){
        textinfo = "DD π" 
    }else if (grade >= 50 && grade <= 59 ){
        textinfo = "FD π" 
    }else if (grade <= 49 ){
        textinfo = "FF π­" 
        info.classList.remove("text-primary")
        info.classList.add("text-danger")

    }
}else{
    textinfo = "Bilgiler DoΔru DeΔil"
}
let info = document.querySelector("#grade")
info.innerHTML = `${textinfo} -> ${grade}` 

/*if(grade >=90 && grade <= 100 ){
    textinfo = "AA π" 
}else if (grade >= 85 && grade <= 89 ){
    textinfo = "BA π" 
}else if (grade >= 80 && grade <= 84 ){
    textinfo = "BB π" 
}else if (grade >= 75 && grade <= 79 ){
    textinfo = "CB π" 
}else if (grade >= 70 && grade <= 74 ){
    textinfo = "CC π" 
}else if (grade >= 65 && grade <= 69 ){
    textinfo = "DC π€" 
}else if (grade >= 60 && grade <= 64 ){
    textinfo = "DD π" 
}else if (grade >= 50 && grade <= 59 ){
    textinfo = "FD π" 
}else if (grade > 0 && grade <= 49 ){
    textinfo = "FF π­" 
}else if(grade >= 0 && grade > 100){
    textinfo = "Bilgiler DoΔru DeΔil"
}*/

console.log(textinfo)
