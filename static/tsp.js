function Point() {
    var name;
    var point;
}

var visited, stack, shortest_path, point_name, min;

var tsp_point = new Array(20);
for (var i = 0; i < 20; i++) {
    tsp_point[i] = new Point();
};

var high = -1;
var p = new process();
let tsp_temp;

function process() {
    this.push = function (element) {
        stack[++high] = element;
    }

    this.pop = function () {
        return stack[high--];
    }

    this.getDistance = function (a, b) {
        g.shortestPath(a.name, b.name).concat([a.name]).reverse();
        return dist;
    }
}

function TSP(start, tsp_point, number, sum, now, end) {
    visited[start] = 1;
    visited[end] = 1;
    var count = 0;
    for (var i = 0; i < number; i++) {
        if (visited[i] == 0) {
            count++;
            visited[i] = 1;
            p.push(tsp_point[i]);
            TSP(start, tsp_point, number, sum + p.getDistance(tsp_point[now], tsp_point[i]), i, end);
            visited[i] = 0;
            p.pop();
        }
    }
    if (count == 0) {
        sum = sum + p.getDistance(tsp_point[now], tsp_point[end]);
        if (min > sum) {
            min = sum;
            for (var j = 0; j <= high; j++) {
                shortest_path[j] = stack[j];
                point_name[j + 1] = shortest_path[j].name;
            }
        }
    }
}

function TSP_execute(num) {
    var start_node = 0;
    var end_node = num - 1;

    min = 2147483647;

    visited = new Array(num);
    for (var i = 0; i < num; i++) {
        visited[i] = 0;
    }
    stack = new Array(num);
    for (var i = 0; i < num; i++) {
        stack[i] = 0;
    }
    shortest_path = new Array(num);
    for (var i = 0; i < num; i++) {
        shortest_path[i] = new Point();
    }
    point_name = new Array(num);

    point_name[start_node] = tsp_point[start_node].name;
    point_name[end_node] = tsp_point[end_node].name;

    TSP(start_node, tsp_point, num, 0, 0, end_node);

    for (var i = 0; i < num - 1; i++) {
        final = g.shortestPath(point_name[i], point_name[i + 1]).concat([point_name[i]]).reverse();
        if (final.length == 1) {
            document.getElementById("length").innerHTML = "잘못된 경로입니다.";
            document.getElementById("path").innerHTML = "";
            document.getElementById("path_time").innerHTML = "";
            return;
        }
        push_node();
        length_distance[i] = dist;
    }

    document.getElementById("path").innerHTML = tsp_point[start_node].name + "->";
    for (var i = 0; i < num - 2; i++) {
        document.getElementById("path").innerHTML += shortest_path[i].name + "->";
    }
    document.getElementById("path").innerHTML += tsp_point[end_node].name;
}

// 추천 받은 경로들을 TSP돌리기 위한 함수
function TSP_execute2(num, num2) {
  var start_node = 0;
  var end_node = num - 1;

  min = 2147483647;

  visited = new Array(num);
  for (var i = 0; i < num; i++) {
    visited[i] = 0;
  }
  stack = new Array(num);
  for (var i = 0; i < num; i++) {
    stack[i] = 0;
  }
  shortest_path = new Array(num);
  for (var i = 0; i < num; i++) {
    shortest_path[i] = new Point();
  }
  point_name = new Array(num);

  point_name[start_node] = tsp_point[start_node].name;
  point_name[end_node] = tsp_point[end_node].name;

  TSP(start_node, tsp_point, num, 0, 0, end_node);

  for (var i = 0; i < num - 1; i++) {
    recommend[num2][i] = g.shortestPath(point_name[i], point_name[i + 1]).concat([point_name[i]]).reverse();
    if (recommend[num2][i].length == 1) {
        // 시작 이외의 경로가 없으면
        recommend_length_distance[num2] = [];
        return;
    }
    push_node2(num2);
    recommend_length_distance[num2][i] = dist;
  }
}