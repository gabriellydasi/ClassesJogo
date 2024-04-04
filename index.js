// Classe 'heroi' que possui as características de nome, idade e tipo
class personagem{
    constructor (nome, idade, tipo){
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
    }

    // Método 'atacar' que usa estrutura de decisão 'if-else if' para definir a maneira de atacar de cada tipo de personagem
    atacar(){
        let ataque
        if (this.tipo === "mago"){
            ataque = "magia";
        } else if (this.tipo === "guerreiro"){
            ataque = "espada";
        } else if (this.tipo === "monge"){
            ataque = "artes marciais";
        } else if (this.tipo === "ninja"){
            ataque = "shuriken";
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Array de personagens
let personagens = [
    new personagem("Gandalf the Gray", "2000 anos", "mago"),
    new personagem("Alexandre Magno", "25 anos", "guerreiro"),
    new personagem("Saito Musashibo Benkei", "30 anos", "monge"),
    new personagem("Kido Yazaemon", "27 anos", "ninja")
];

// Laço de repetição 'for-of' que percorre o array 'personagens' e chama o método 'atacar' para cada um dos personagens 
for (let personagem of personagens) {
    personagem.atacar();
}