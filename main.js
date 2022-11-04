function creatGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

function creatCard(date, day, games) {
  return `
    <div class="card">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}
document.querySelector("#cards").innerHTML =
  creatCard("24/11", "quinta", creatGame("brasil", "16:00", "servia")) +
  creatCard("28/11", "segunda", creatGame("Brasil", "13:00", "Suiça")) +
  creatCard("02/12", "sexta", creatGame("Brasil", "16:00", "Camaroes"))
