function nav(){
    const nav = document.getElementById("nav");

    const temClasse = nav.classList.contains('open');
    if (temClasse){
        nav.classList.toggle('open')
    }
    else{
        nav.classList.add('open')
    }
    
}