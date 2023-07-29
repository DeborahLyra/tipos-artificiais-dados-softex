// Desenvolva um código que simule uma eleição com três candidatos.
// - candidato_X => 889
// - candidato_Y => 847
// - candidato_Z => 515
//  - branco => 0

// O código deve perguntar se deseja finalizar a votação depois do voto.Caso o número 
// do voto não corresponda a nenhum candidato ou seja branco, ele deve ser tratado como nulo.
// e for inserido um texto ao invés de número, o código deve retornar uma mensagem para votar novamente.

// Quando a votação for finalizada, o código deverá mostrar o vencedor, aquele com o maior número de 
// votos e, também, a quantidade de votos de cada candidato, os brancos e nulos. 

const button = document.querySelector('button');


const voteOptions = {
    "889": "x",
    "847": "y",
    "515": "z",
    "0": "branco",
}

let candidates = {
    x: 0,
    y: 0,
    z: 0,
    branco: 0,
}

button.addEventListener('click', addVote)

function addVote() {
    const vote = prompt('Qual o número do seu candidato:'); 

    console.log(voteOptions[vote])

    if (!voteOptions[vote]) return alert('Voto inválido, digite novamente');

    if (voteOptions[vote]) {
        candidates[voteOptions[vote]] += 1 
    }

    const confirmation = prompt('Deseja finalizar a votação? sim/não');
    if (confirmation == 'sim') {
        console.log(candidates)

        const max = Object.entries(candidates).reduce((max, entry) => entry[1] >= max[1] ? entry : max, [0, -Infinity]) 
                           
        const maxVotes = Math.max(...Object.values(candidates));

        const numCandidatesWithMaxVotes = Object.values(candidates).filter(votes => votes === maxVotes).length;

        if (numCandidatesWithMaxVotes > 1) {
            console.log('Houve empate na votação');
            return; 
        }
        console.log(`O vencedor é ${max[0]} com ${max[1]} votos`)
        console.log(`Quantidade de votos de cada candidato: ${candidates.x} votos para o candidato X, ${candidates.y} votos para o candidato Y, ${candidates.z} votos para o candidato Z, ${candidates.branco} votos brancos`) 
    }
}

