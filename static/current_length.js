var deg2radMultiplier = Math.PI / 180;
var lat1, lng1, lat2, lng2;
var radius = 6378.137;
var dlng, meter;

var x2, y2;

// 현재 위치와 직선이 만나는 교점을 구하는 클래스
class intersection {
  x2(node, line) {
    this.x1 = node.lng();
    this.y1 = node.lat();
    this.a = line[0];
    this.b = line[1];
    this.c = line[2];

    x2 = (Math.pow(this.b, 2) * this.x1 - this.a * this.b * this.y1 - this.a * this.c) / (Math.pow(this.a, 2) + Math.pow(this.b, 2));
    return x2.toFixed(6);
  }

  y2(node, line) {
    this.x1 = node.lng();
    this.y1 = node.lat();
    this.a = line[0];
    this.b = line[1];
    this.c = line[2];

    y2 = (-1 * this.a * this.b * this.x1 + Math.pow(this.a, 2) * this.y1 - this.b * this.c) / (Math.pow(this.a, 2) + Math.pow(this.b, 2));
    return y2.toFixed(6);
  }

  x2check(line) {
    // m1 >= m2
    if(line[3] >= line[5]) {
      if(line[5] <= x2 && x2 <= line[3]) {
        return true;
      } else { 
        return false;
      }
    } 
    // m1 < m2
    else {
      if(line[3] <= x2 && x2 <= line[5]) {
        return true;
      } else { 
        return false;
      }
    }
  }

  y2check(line) {
    // n1 >= n2
    if (line[4] >= line[6]) {
      if (line[6] <= y2 && y2 <= line[4]) {
        return true;
      } else {
        return false;
      }
    } 
    // n1 < n2
    else {
      if (line[4] <= y2 && y2 <= line[6]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

// 현재 위치와 직선의 교점 사이의 거리를 구하기 위한 클래스
class ps_nodedistance {
  far(node, x2, y2) {
    this.x1 = node.lng();
    this.y1 = node.lat();
    this.x2 = x2;
    this.y2 = y2;

    lng1 = this.x1 * deg2radMultiplier;
    lat1 = this.y1 * deg2radMultiplier;
    lng2 = this.x2 * deg2radMultiplier;
    lat2 = this.y2 * deg2radMultiplier;

    dlng = lng2 - lng1;
    meter = Math.acos(Math.sin(lat1) * Math.sin(lat2) + Math.cos(lat1) * Math.cos(lat2) * Math.cos(dlng)) * radius * 1000;
    return meter;
  }
}

var temp_result;
var temp_key = "";
var final_result;
var final_key = "";

var node = [];

let spot = new intersection();
var interspot = []; // 현재 위치와 직선이 만나는 교점

for(var i = 0; i < length.length; i++) {
  interspot[i] = new Array();
}

let ps_distance = new ps_nodedistance();
var ps_length = [];
var ps_length_count = 0;

var minmin;
var mini;

var optimalx2, optimaly2;
var INTER;

for(var i = 0; i < length.length; i++) {
  ps_length[i] = new Array();
}

function calculate() {
  latitude = 37.452022; // 위도
  longitude = 126.451553; // 경도

  // latitude = 37.44949; // 위도
  // longitude = 126.447521; // 경도

  temp_result = {};
  final_result = {};

  node[0] = new naver.maps.LatLng(latitude, longitude);

  for (var i = 0; i < length.length; i++) {
    interspot[i][0] = spot.x2(node[0], line[i]);
    interspot[i][1] = spot.y2(node[0], line[i]);
    interspot[i][3] = spot.x2check(line[i]);
    interspot[i][4] = spot.y2check(line[i]);
  }

  for (var i = 0; i < length.length; i++) {
    if (interspot[i][3] == true && interspot[i][4] == true) {
      ps_length[ps_length_count][0] = ps_distance.far(node[0], interspot[i][0], interspot[i][1]);
      ps_length[ps_length_count][1] = i;
      ps_length[ps_length_count][2] = interspot[i][0];
      ps_length[ps_length_count][3] = interspot[i][1];
      ps_length_count++;
    }
  }

  minmin = 9999999;

  for (var i = 0; i < ps_length_count; i++) {
    if (ps_length[i][0] <= minmin) {
      minmin = ps_length[i][0];
      mini = ps_length[i][1];
      optimalx2 = ps_length[i][2];
      optimaly2 = ps_length[i][3];
    }
  }

  INTER = new naver.maps.LatLng(optimaly2, optimalx2);

  // 현재 위치에서 교점까지 연결시켜 주기 위함
  temp_result[temp_key + "INTER"] = minmin;

  line_vertex(mini, INTER);

  g.addVertex('현재위치', temp_result);
  g.addVertex("INTER", final_result);
}

function line_vertex(num, inter) {
  for(var i = 0; i < length.length; i++) {
    if(i == num) {
      if(num == 164) {
        final_result[final_key + straight_name[i][1]] = new nodedistance(inter, straight_node[i][1]).far();
      } else if(num == 165) {
        final_result[final_key + straight_name[i][1]] = new nodedistance(inter, straight_node[i][1]).far();
      } else {
        final_result[final_key + straight_name[i][0]] = new nodedistance(inter, straight_node[i][0]).far();
        final_result[final_key + straight_name[i][1]] = new nodedistance(inter, straight_node[i][1]).far();
      }
    }
  }
}
