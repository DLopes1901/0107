console.log("Esta mensagem aparecera no console,nao na pagina.") ;

function adicione_elemento(valor, nome_elemento = "p") {
    const pai = document.getElementById("conteudo");
    const novo_elemento = document.createElement(nome_elemento);
    novo_elemento.innerHTML = valor;
    pai.appendChild(novo_elemento);
}

adicione_elemento("Olá! Meu nome Ronaldo. Qual o seu nome?");
adicione_elemento("Dale dale");
adicione_elemento("É os guris", "h1");
adicione_elemento("Faz o L", "h2");
adicione_elemento("Siuuuu", "h3");
adicione_elemento("Dale tricolor", "h4");
adicione_elemento("Prr prr Patapin", "h5");
adicione_elemento("Bora toma um chimas", "h6");

let nome = prompt("Qual é seu nome?");
adicione_elemento(nome, "h1");
adicione_elemento("Siuuuu", "p");
adicione_elemento("Hala Madri");

console.log("Its the best");