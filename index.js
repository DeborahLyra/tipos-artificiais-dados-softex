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

const candidates = {
    x: 0,
    y: 0,
    z: 0,
    branco: 0,
}

button.addEventListener('click', () => {

    let vote = Number(prompt('Qual o número do seu candidato:'));

    let confirmation = prompt('Deseja finalizar a votação? sim/não');

    if (confirmation === 'sim') {
        if (vote == 889) {
            candidates.x += 1
        } else if (vote == 874) {
            candidates.y += 1
        } else if (vote == 515) {
            candidates.z += 1
        } else if (vote == 0) {
            candidates.branco += 1
        } else {
            alert('Número inválido')
        }
    } else {
        alert('Clique no botão novamente para votar')
    }

    const winner = Object.entries(candidates).reduce((prev, [name, value]) => {
        return value > prev[1] ? [name, value] : prev
    }, ['', 0])

    if (winner[0] == 'branco') {
        alert(`Ninguém ganhou, ${winner[1]} votos nulos`)
    } else {
        alert(`O candidato vencedor é ${winner[0]}, com ${winner[1]} votos`)
    }
})

  //console.log(candidatesArray)
    /* 

    

 const winner =  Object.entries(candidates).reduce((prev, [name, value]) => {
     console.log('outros',[name, value])
     console.log('prev', prev)
         if (value > prev[1]) {
             return [name, value];
         } else if (value == prev[1]) {
             return alert('Empate, continue votando')
         } else {
             return prev
         }
     }, ["", 0])
  */


