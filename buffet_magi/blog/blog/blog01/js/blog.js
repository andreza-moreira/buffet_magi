const eventos = [
    {
        img: "img/blog1.png",
        titulo: "Evento Gala de Primavera",
        desc: "Uma noite sofisticada com decoração floral luxuosa, mesa de 12 metros e mais de 500 doces artesanais exclusivos."
    },
    {
        img: "img/blog2.png",
        titulo: "Festa Encantada da Sofia",
        desc: "Tema unicórnio com doces personalizados, bolo de 3 andares e decoração delicada em tons pastel."
    },
    {
        img: "img/blog3.png",
        titulo: "Casamento Ana & Pedro",
        desc: "Casamento romântico com mesa completa de sobremesas finas, flores naturais e bolo de 5 andares."
    },
    {
        img: "img/blog4.png",
        titulo: "Coffee Break Corporativo",
        desc: "Evento corporativo elegante com mini sobremesas gourmet para mais de 200 convidados."
    }
];

function abrirModal(i) {
    document.getElementById("modal").classList.add("active");
    document.getElementById("modalImg").src = eventos[i].img;
    document.getElementById("modalTitulo").innerText = eventos[i].titulo;
    document.getElementById("modalDesc").innerText = eventos[i].desc;
}

function fecharModal() {
    document.getElementById("modal").classList.remove("active");
}

window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target == modal) {
        fecharModal();
    }
}