function nav(){
    const nav = document.getElementById("nav");

    const temClasse = nav.classList.contains('open');
    if (temClasse){

        nav.classList.toggle('open');

        let botao = document.getElementById('btn-menu');
        botao.innerHTML = `<i class="fa fa-bars" aria-hidden="true">`;

        let header = document.getElementById("header");
        header.classList.toggle('open');
    }
    else{
        nav.classList.add('open');
        let botao = document.getElementById('btn-menu');
        botao.innerHTML = "X";

        let header = document.getElementById("header");
        header.classList.add('open');
    }
    
}