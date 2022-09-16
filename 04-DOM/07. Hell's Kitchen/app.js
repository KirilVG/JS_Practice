function solve() {
  document.querySelector("#btnSend").addEventListener("click", onClick);

  function onClick() {
    let inputText = document
      .getElementById("inputs")
      .getElementsByTagName("textarea")[0].value;

    let ROutput = document
      .getElementById("bestRestaurant")
      .getElementsByTagName("p")[0];

    let EOutput = document
      .getElementById("workers")
      .getElementsByTagName("p")[0];

    let arr = JSON.parse(inputText);

    let restaurants = [];

    for (let i = 0; i < arr.length; i++) {
      let tokens = arr[i].split(" - ");

      let Rindex = -1;
      
      for (let j = 0; j < restaurants.length; j++) {
        if (restaurants[j]["name"] == tokens[0]) {
          Rindex = j;

          break;
        }
      }

      if (Rindex == -1) {
        let emplArr = [];

        let emp = tokens[1].split(", ");

        let MaxSal = 0;

        let SalSum = 0;

        for (let j = 0; j < emp.length; j++) {
          let emptokens = emp[j].split(" ");

          let employee = {};

          employee["name"] = emptokens[0];

          employee["salary"] = Number(emptokens[1]);

          if (MaxSal < Number(emptokens[1])) MaxSal = Number(emptokens[1]);

          SalSum += Number(emptokens[1]);

          emplArr.push(employee);
        }

        let restaurant = {};

        restaurant["name"] = tokens[0];

        restaurant["employee"] = emplArr;

        restaurant["MaxSalary"] = MaxSal;

        restaurant["AvgSalary"] = SalSum / emplArr.length;

        restaurants.push(restaurant);
      } else {
        restaurants[Rindex]["MaxSalary"];

        let emp = tokens[1].split(", ");

        for (let j = 0; j < emp.length; j++) {
          let emptokens = emp[j].split(" ");

          let employee = {};

          employee["name"] = emptokens[0];

          employee["salary"] = Number(emptokens[1]);

          if (restaurants[Rindex]["MaxSalary"] < Number(emptokens[1]))
            restaurants[Rindex]["MaxSalary"] = Number(emptokens[1]);

          restaurants[Rindex]["employee"].push(employee);
        }

        let SalSum = 0;

        for (let j = 0; j < restaurants[Rindex]["employee"].length; j++) {
          SalSum += restaurants[Rindex]["employee"][j]["salary"];
        }
        restaurants[Rindex]["AvgSalary"] =
          SalSum / restaurants[Rindex]["employee"].length;
      }
    }

    let bestSalary = restaurants[0]["AvgSalary"];

    let index = 0;

    for (let i = 0; i < restaurants.length; i++) {
      if (restaurants[i]["AvgSalary"] > bestSalary) {
        index = i;

        bestSalary = restaurants[i]["AvgSalary"];
      }
    }

    let restaurantOutput = `Name: ${
      restaurants[index]["name"]
    } Average Salary: ${restaurants[index]["AvgSalary"].toFixed(
      2
    )} Best Salary: ${restaurants[index]["MaxSalary"].toFixed(2)}`;

    let elployeeOutput = restaurants[index]["employee"]
      .sort((a, b) => b["salary"] - a["salary"])
      .map((x) => `Name: ${x["name"]} With Salary: ${x["salary"]}`)
      .join(" ");

    ROutput.textContent = restaurantOutput;

    EOutput.textContent = elployeeOutput;
  }
}
