async function buscar(){
    console.log("Passei por aqui!")
   const resposta = await fetch("https://66186cd09a41b1b3dfbd0d32.mockapi.io/agendas");
   const respostaDadosAgendas = await  resposta.json();
   console.log("Resposta: ", resposta)
   console.log("Resposta:" , respostaDadosAgendas)



const cards = document.getElementById("cards_games")


cards.innerHTML = respostaDadosAgendas.map((itemAgenda) => {
return "TESTE "

   });
}
console.log("antes de buscar")
buscar();
console.log("depois de buscar")