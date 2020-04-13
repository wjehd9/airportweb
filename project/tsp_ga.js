var cities = [];
// var totalCities = 10;
var totalCities;
var popSize = 100;

var population = [];

var populations = [];
var fitness = [];

var recordDistance = Infinity;
var bestEver;
var currentBest;

var all_point_list = []; // 시설에 대한 점을 저장
var all_list; // 시설에 대한 이름을 저장
var list_count = 0;
var order = [];
var iiindex = [];

var v;
var cal_min;

function setup() {
  // createCanvas(800, 800);
  // var order = [];
  // for ( var i = 0; i < totalCities; i++) {
  //   // var v = createVector(random(10, width - 10), random(10, height / 2 - 10));
  //   var v = { x: Math.random() * 400, y: Math.random() * 400 };
  //   cities[i] = v; //cities를 선언 -> cities로 시설의 위치를 지정
  //   order[i] = i;
  // }
  // console.log(cities[0]);
  // console.log(cities[totalCities-1]);
  // order = order.slice(1,totalCities-1);
  // for (var i =0; i < popSize; i++) {
  //   populations[i] = shuffle(order); // order을 shuffle한 결과를 population에 넣음
  //   population[i] = [0].concat(populations[i]).concat(totalCities-1);
  // }
  // console.log(populations);

  // console.log(population);

  order = [];

  // v = ["롯데리아", "공닭", "신라면세점1(명품브랜드)", "T11"];
  // v = ["롯데리아", "신라면세점1(명품브랜드)", "공닭", "T11"];
  // v = ["롯데리아", "T7", "T5", "T10"];
  // v = ["롯데리아", "T5", "T7", "T10"];
  // v = ["공차", "T17", "T15", "T20"];
  // v = ["공차", "T15", "T17", "T20"];
  v = ["현재위치", "T17", "T15", "T20", "T26", "T30", "T28", "T29", "T27"];
  // v = ["현재위치", "T15", "T17", "T20"];
  totalCities = v.length;

  cal_min = 99999999;

  iiindex = [];

  if(v[0] != "현재위치") {
    for (var i = 0; i < totalCities; i++) {
      iiindex[i] = all_list.indexOf(v[i]);
    }
  } else {
    calculate();
    iiindex[0] = 0;
    for (var i = 1; i < totalCities; i++) {
      iiindex[i] = all_list.indexOf(v[i]);
    }
  }

  console.log(iiindex);
  

  for (var i = 0; i < totalCities; i++) {
    // var v = createVector(random(10, width - 10), random(10, height / 2 - 10));
    // v = { x: Math.random() * 400, y: Math.random() * 400 };
    if(v[0] != "현재위치") {
      cities[i] = all_point_list[iiindex[i]];
    } else {
      if(i == 0) {
        cities[i] = { x : longitude, y : latitude };
      } else {
        cities[i] = all_point_list[iiindex[i]];
      }
    }
    // cities[i] = v; //cities를 선언 -> cities로 시설의 위치를 지정
    order[i] = i;
  }
  // console.log(cities);
  // console.log(cities[0]);
  // console.log(cities[totalCities - 1]);
  // console.log(order);
  order = order.slice(1, totalCities - 1);
  // console.log(order);
  for (var i = 0; i < popSize; i++) {
    populations[i] = shuffle(order); // order을 shuffle한 결과를 population에 넣음
    population[i] = [0].concat(populations[i]).concat(totalCities - 1);
  }
}

function calcDistance(points, order) { //거리계산
  var cal_sum = 0;
  // console.log(order);
  // console.log(points);
  for (var i = 0; i < order.length - 1; i++) {
    var cityAIndex = order[i];
    var cityA = points[cityAIndex];
    var cityBIndex = order[i + 1];
    var cityB = points[cityBIndex];
    // var d = dist_k(cityA.x, cityA.y, cityB.x, cityB.y)*1000;
    // g.shortestPath(v[i], v[i+1]).concat(v[i]).reverse();
    // for(var j = i; j < order.length - 1; j++) {
    //   g.shortestPath(v[i], v[j+1]).concat(v[i]).reverse();
    //   sum += dist;
    // }
    g.shortestPath(v[cityAIndex], v[cityBIndex]).concat(v[cityAIndex]).reverse();
    cal_sum += dist;
    // var d = 0;
    // sum += d;
  }
  if(cal_sum < cal_min) {
    cal_min = cal_sum;
  }
  console.log(cal_min);
  return cal_min;
}

function swap(a, i, j) { //swap
  var temp = a[i];
  a[i] = a[j];
  a[j] = temp;
}

function draw() { //화면상에 보여주는 부분
  background(0);
  

  calculateFieness();
  normalizeFitness();
  nextGeneration();
  // console.log(population);

  stroke(255);
  strokeWeight(4);
  noFill();
  beginShape();
  for(var m in bestEver) {
    if(v[0] != "현재위치") {
      console.log(all_list[iiindex[m]]);
    } else {
      if(m == 0) {
        console.log("현재위치");
      } else {
        console.log(all_list[iiindex[m]]);
      }
    }
  }
  console.log(bestEver);
  for (var i = 0; i < bestEver.length; i++) {
  	var n = bestEver[i];
  	vertex(cities[n].x, cities[n].y);
  	ellipse(cities[n].x, cities[n].y, 16, 16);
  }

  endShape();

  // translate(0, height/2);

  // stroke(255);
  // strokeWeight(4);
  // noFill();
  // beginShape();
  // for (var i = 0; i < currentBest.length; i++) {
  //   var n = currentBest[i];
  //   vertex(cities[n].x, cities[n].y);
  //   ellipse(cities[n].x, cities[n].y, 16, 16);
  // }

  // endShape();


}
