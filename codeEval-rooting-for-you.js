// Pick the winning submitter based on highest rank in certain category
const judgeVegetable = function (vegetables, metric) {
  let rank = 0, submitter;
  for (let tomato of vegetables) {
    if (tomato[metric] > rank) {
      rank = tomato[metric];
      submitter = tomato.submitter;
    }
  }
  return submitter;
}

const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'plumpness';

console.log(judgeVegetable(vegetables, metric));