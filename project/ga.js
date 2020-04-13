var ccccccc;
var kkkkk;

function calculateFieness() {
  var currentRecord = Infinity;
  var recordDistance = Infinity;
  // ccccccc = 0;
  // console.log("Exec");
    for (var i = 0; i < population.length; i++) {
      // if (ccccccc < population.length * popSize) {
        // ccccccc = ccccccc + 1;
        var d = calcDistance(cities, population[i]);
        // console.log(cities);
        // console.log(population[i]);
        // kkkkk = d;
        // console.log(d);
        if (d < recordDistance) {
          recordDistance = d;
          bestEver = population[i];
          // console.log(cities);
          // console.log(bestEver);
        }
        if (d < currentRecord) {
          currentRecord = d;
          currentBest = population[i];
          kkkkk = currentRecord;
        }
        // kkkkk = recordDistance;
        fitness[i] = 1 / (d + 1);

        // final_show2();
      // }
      // final_show2();
      // ccccccc = ccccccc + 1;
      // var d = calcDistance(cities, population[i]);
      // if (d < recordDistance) {
      //   recordDistance = d;
      //   bestEver = population[i];
      // }
      // if (d < currentRecord) {
      //   currentRecord = d;
      //   currentBest = population[i];
      // }

      // fitness[i] = 1 / (d + 1);
    }
  
  // for (var i = 0; i< population.length; i++) {
  //   console.log(population.length);
  //   var d = calcDistance(cities, population[i]);
  //   if (d < recordDistance) {
  //     recordDistance = d;
  //     bestEver = population[i];
  //   }
  //   if (d < currentRecord) {
  //     currentRecord = d;
  //     currentBest = population[i];
  //   }

  //   fitness[i] = 1 / (d + 1);
  // }

}


function normalizeFitness() { 
 var sum = 0;
  for (var i = 0; i< fitness.length; i++) {
    sum += fitness[i];
  }
  for (var i = 0; i< fitness.length; i++) {
    fitness[i] = fitness[i] / sum;
  }
}

function nextGeneration() { //다음세대 생성
  var newPopulation = [];
  for (var i = 0; i< population.length; i++) {
    var orderA_p = pickOne(population, fitness);
    var orderB_p = pickOne(population, fitness);
    var orderA = orderA_p.slice(1,totalCities-1);
    var orderB = orderB_p.slice(1,totalCities-1);

    var order = crossOver(orderA, orderB);
    mutate(order, 0.01);
    newPopulation[i] = [0].concat(order).concat(totalCities-1);
  
  }
  population = newPopulation;

}

function pickOne(list, prob) { //하나를 고름
  var index = 0;
  var r = random(1);

  while (r > 0) {
    r = r - prob[index];
    index++;
  }
  index--;
  return list[index].slice();

}

function crossOver(orderA, orderB) {
  var start = floor(random(orderA.length));
  var end = floor(random(start + 1, orderA.length));
  var neworder = orderA.slice(start, end);

  var left = (totalCities-2) - neworder.length;
  for (var i = 0; i < orderB.length; i++) {
    var city = orderB[i];
    if(!neworder.includes(city)) {
      neworder.push(city);

    }
  }
  return neworder;

}


function mutate(order, mutationRate) { 
  for (var i =0; i < (totalCities-2); i++) {
    if (random(1) < mutationRate) {
      var indexA = floor(random(order.length));
      var indexB = (indexA + 1) % (totalCities-2);    
      swap(order, indexA, indexB);     
    }
  }
}