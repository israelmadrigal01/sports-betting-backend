const express = require('express');
const router = express.Router();

// Random pick generator
const teams = {
  NBA: ['Lakers', 'Warriors', 'Bulls', 'Heat', 'Celtics'],
  MLB: ['Yankees', 'Red Sox', 'Dodgers', 'Giants', 'Cubs']
};

function generatePick() {
  const sports = Object.keys(teams);
  const sport = sports[Math.floor(Math.random() * sports.length)];
  const teamList = teams[sport];
  const team = teamList[Math.floor(Math.random() * teamList.length)];

  let opponent;
  do {
    opponent = teamList[Math.floor(Math.random() * teamList.length)];
  } while (opponent === team);

  return {
    sport,
    team,
    opponent,
    pick: `${team} ML`,
    confidence: `${Math.floor(Math.random() * 21) + 70}%`, // 70–90%
    reason: `AI model predicts favorable matchup for ${team} against ${opponent}.`
  };
}

router.get('/', (req, res) => {
  const picks = Array.from({ length: 3 }, generatePick);
  res.json({ picks });
});

module.exports = router;
