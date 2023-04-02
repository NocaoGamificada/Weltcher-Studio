const btnSobre = document.getElementById("btnSobre");
btnSobre.onclick = scrollToSobre;
const btnJogos = document.getElementById("btnJogos");
btnJogos.onclick = scrollToGames;
const btnEquipe = document.getElementById("btnEquipe");
btnEquipe.onclick = scrollToEquipe;
const btnTec = document.getElementById("btnTec");
btnTec.onclick = scrollToTecnologias;

function scrollToEquipe()
{
    const div = document.getElementById("equipe"); // substitua "minhaDiv" pelo ID da sua div
    const y = div.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

function scrollToTecnologias() {
    const div = document.getElementById("tecnologias"); // substitua "minhaDiv" pelo ID da sua div
    const y = div.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

function scrollToSobre() {
    const div = document.getElementById("sobre"); // substitua "minhaDiv" pelo ID da sua div
    const y = div.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}

function scrollToGames() {
    const div = document.getElementById("jogos"); // substitua "minhaDiv" pelo ID da sua div
    const y = div.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({top: y, behavior: 'smooth'});
}