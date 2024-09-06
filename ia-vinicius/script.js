const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "os animais são inofensivos e a maioria precisa de ajuda. como ajudá los?",

        alternativas: [
            {
                texto: "voce pode estar adotando um animalzinho.",
                afirmacao: "VOCẼ éuma pessoa com um bom coração, e gosta muito de animais."

            },
            {
                texto: "abrigo de animais.",
                afirmacao: "afirmacao"
            }

        ]
    },
    {
        enunciado: "Plantar árvores frutíferas é essencial para sustentar o meio ambiente e fornecer alimentos frescos aumentando a quantidade de árvores e melhorando a qualidade de vida da população. Qual seria a melhor maneira para começar essa iniciativa?",
        alternativas: [
            {
                texto: "Escolha espécies frutíferas adequadas á sua região, prepare bem o solo e plante em áreas com boa luz solar.",
                afirmacao: ""
            },
            {
                texto: "Escolher lugares estratégicos onde podemos aproveitar ao máximo os benefícios que as árvores tem a oferecer. ",
                afirmacao: "afirmacao"
            }
        ]
    },
    {
        enunciado: "Museus são importantes para ver a trajetória de nossos antepassados,  mas um dia nós seremos a história. O que você quer deixar para a história?",

        alternativas: [
            {
                texto: "eu quero deixar um legado!",
                afirmacao: " afirmacao"
            },
            {
                texto: "eu não ligo para a historia, oque importa é o agora, e o futuro!",
                afirmacao: "afirmacao"
            }

        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}
function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }

}
function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++
    mostraPergunta();
}
function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}



mostraPergunta();