// Função para iniciar a animação da flor
function iniciarAnimacaoFlor() {
    var flower = document.getElementById("flower");
    flower.classList.add("animate-flower");
}

// Event listener para iniciar a animação da flor quando a página carrega
window.addEventListener("load", iniciarAnimacaoFlor);

// Event listener para parar a animação da flor quando clicada
document.getElementById("flower").addEventListener("click", function() {
    var flower = document.getElementById("flower");
    flower.classList.remove("animate-flower");
});

// Array de mensagens para a carta
var mensagens = [
    "Você é a melhor mãe do mundo!",
    "Obrigado por tudo que você faz por nós!",
    "Seu amor e dedicação são incomparáveis.",
    "Feliz Dia das Mães!"
];

// Função para gerar uma mensagem aleatória
function gerarMensagem() {
    var indice = Math.floor(Math.random() * mensagens.length);
    return mensagens[indice];
}

// Função para exibir a carta
function exibirCarta() {
    var cartaDiv = document.getElementById("carta");
    cartaDiv.innerHTML = "<p>" + gerarMensagem() + "</p>";
    cartaDiv.classList.remove("carta-hidden");
    // Ocultar o vídeo se estiver visível
    document.getElementById("videoContainer").classList.add("video-hidden");
}

// Event listener para o botão de exibir a carta
document.getElementById("cartaButton").addEventListener("click", function() {
    exibirCarta();
});

// Função para exibir o vídeo
function exibirVideo() {
    var videoContainer = document.getElementById("videoContainer");
    videoContainer.classList.remove("video-hidden");
    videoContainer.innerHTML = '<iframe width="560" height="315" src="https://www.youtube.com/embed/bW1Ycl1FaQ8?si=fiVpD-RCCOz8mn2s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
    // Ocultar a carta se estiver visível
    document.getElementById("carta").classList.add("carta-hidden");
}

// Event listener para o botão de exibir o vídeo
document.getElementById("videoButton").addEventListener("click", function() {
    exibirVideo();
});
