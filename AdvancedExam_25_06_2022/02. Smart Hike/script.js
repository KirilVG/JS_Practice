class SmartHike {
  constructor(username) {
    this.username = username;

    this.goals = {};

    this.listOfHikes = [];

    this.resources = 100;
  }
}

SmartHike.prototype.addGoal = function (peak, altitude) {
  let res;

  if (this.goals.hasOwnProperty(peak)) {
    res = `${peak} has already been added to your goals`;
  } else {
    this.goals[peak] = altitude;

    res = `You have successfully added a new goal - ${peak}`;
  }

  return res;
};

SmartHike.prototype.hike = function (peak, time, difficultyLevel) {
  if (!this.goals.hasOwnProperty(peak)) {
    throw new Error(`${peak} is not in your current goals`);
  } else if (this.resources == 0) {
    throw new Error("You don't have enough resources to start the hike");
  }

  let diff = this.resources - time * 10;

  if (diff < 0) {
    return "You don't have enough resources to complete the hike";
  }

  this.resources = diff;

  let hike = {
    peak: peak,
    time: time,
    difficultyLevel: difficultyLevel,
  };

  this.listOfHikes.push(hike);

  return `You hiked ${peak} peak for ${time} hours and you have ${this.resources}% resources left`;
};

SmartHike.prototype.rest = function (time) {
  this.resources += time * 10;

  if (this.resources > 100) this.resources = 100;

  if (this.resources == 100)
    return `Your resources are fully recharged. Time for hiking!`;

  return `You have rested for ${time} hours and gained ${time * 10}% resources`;
};

SmartHike.prototype.showRecord = function (criteria) {
  if (this.listOfHikes.length == 0)
    return `${this.username} has not done any hiking yet`;

  let hikeArr;

  if (criteria != "all") {
    hikeArr = this.listOfHikes.filter((x) => x.difficultyLevel == criteria);

    if (hikeArr.length == 0)
      return `${this.username} has not done any ${criteria} hiking yet`;

    let bestHike = hikeArr[0];

    for (let i = 1; i < hikeArr.length; i++) {
      if (hikeArr[i].time < bestHike.time) bestHike = hikeArr[i];
    }

    return `${this.username}'s best ${criteria} hike is ${bestHike.peak} peak, for ${bestHike.time} hours`;
  }

  hikeArr = this.listOfHikes;

  let res = "All hiking records:";

  for (let i = 0; i < hikeArr.length; i++) {
    res += `\n${this.username} hiked ${hikeArr[i].peak} for ${hikeArr[i].time} hours`;
  }

  return res;
};

const Hike = result;

let newHike = new Hike("Vili");

assert.equal(
  newHike.addGoal("Musala", 2925),
  "You have successfully added a new goal - Musala"
);
assert.equal(
  newHike.addGoal("Rui", 1706),
  "You have successfully added a new goal - Rui"
);
assert.equal(
  newHike.addGoal("Musala", 2925),
  "Musala has already been added to your goals"
);
