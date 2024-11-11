function openTab(evt, tabName) {
    // Esconde todas as abas
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Remove a classe 'active' de todas as abas
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active");
    }

    // Mostra a aba ativa e adiciona a classe 'active' ao link
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.classList.add("active");
}

// Definir a aba 'Início' como ativa por padrão
document.getElementsByClassName("tablinks")[0].click();
