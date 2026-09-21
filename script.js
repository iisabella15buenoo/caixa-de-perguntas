const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Como você considera o mercado de trabalho atual para os profissionais formados em Odontologia?",
        alternativas: [
            {
                texto: "Considero um mercado favorável, com diversas oportunidades de emprego e possibilidades de crescimento profissional.",
                afirmacao: "Representa uma visão positiva sobre as oportunidades disponíveis para profissionais formados em Odontologia."
            },
            {
                texto: "Acredito que o mercado apresenta desafios significativos, como a concorrência, a necessidade de experiência e a busca constante por qualificação.",
                afirmacao: "Representa uma visão mais crítica, destacando os desafios encontrados pelos profissionais de Odontologia."
            }
        ]
    },

    {
        enunciado: "Na sua opinião, qual é o nível de dificuldade que um recém-formado em Odontologia encontra para ingressar no mercado de trabalho?",
        alternativas: [
            {
                texto: "Acredito que encontra poucas dificuldades, pois existem oportunidades suficientes para iniciar a carreira profissional.",
                afirmacao: "Representa uma visão de que o mercado oferece oportunidades acessíveis para profissionais recém-formados."
            },
            {
                texto: "Acredito que encontra muitas dificuldades, principalmente pela falta de experiência, pela concorrência e pela dificuldade de conquistar os primeiros pacientes.",
                afirmacao: "Representa uma visão que destaca as dificuldades enfrentadas pelos recém-formados para iniciar a carreira."
            }
        ]
    },

    {
        enunciado: "Após a graduação em Odontologia, você acredita que fazer uma especialização pode contribuir para conseguir melhores oportunidades no mercado de trabalho?",
        alternativas: [
            {
                texto: "Sim. Acredito que uma especialização pode ampliar as áreas de atuação e ajudar o profissional a se destacar diante da concorrência.",
                afirmacao: "Representa uma visão que considera a especialização um importante diferencial para a carreira profissional."
            },
            {
                texto: "Não necessariamente. Acredito que experiência profissional, qualidade do atendimento e relacionamento com os pacientes também são fatores importantes.",
                afirmacao: "Representa uma visão que considera outros fatores profissionais tão relevantes quanto a especialização."
            }
        ]
    },

    {
        enunciado: "Ao analisar o mercado de trabalho em Odontologia, qual fator você considera mais importante para um profissional conseguir se destacar?",
        alternativas: [
            {
                texto: "Acredito que a qualificação, a experiência e a atualização constante sejam os principais fatores para se destacar.",
                afirmacao: "Representa uma visão que valoriza o conhecimento, a experiência e o desenvolvimento profissional contínuo."
            },
            {
                texto: "Acredito que a comunicação, o bom atendimento e a capacidade de criar um relacionamento de confiança com os pacientes sejam mais importantes.",
                afirmacao: "Representa uma visão que valoriza as habilidades de comunicação e o relacionamento com os pacientes."
            }
        ]
    },

    {
        enunciado: "Você tem um trabalho sobre o mercado de trabalho em Odontologia para entregar na semana seguinte. O grupo está atrasado e uma pessoa sugere utilizar uma inteligência artificial para produzir o trabalho. O que você faria?",
        alternativas: [
            {
                texto: "Utilizaria a IA como ferramenta de apoio, mas revisaria as informações, pesquisaria outras fontes e acrescentaria as opiniões e conhecimentos do grupo.",
                afirmacao: "Representa uma utilização responsável da inteligência artificial, combinando a tecnologia com pesquisa, revisão e participação dos estudantes."
            },
            {
                texto: "Utilizaria o texto produzido pela IA diretamente, sem necessidade de revisar ou pesquisar outras informações.",
                afirmacao: "Representa uma utilização da inteligência artificial sem verificação das informações ou participação significativa dos estudantes."
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
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

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

mostraPergunta();