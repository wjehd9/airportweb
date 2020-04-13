var m1, n1, m2, n2;

class straight {
  constructor(p1, p2) {
    m1 = p1.lng();
    n1 = p1.lat();
    m2 = p2.lng();
    n2 = p2.lat();
  }

  a() {
    return n2 - n1;
  }

  b() {
    return m1 - m2;
  }

  c() {
    return n1 * (m2 - m1) - m1 * (n2 - n1);
  }

  m1() {
    return m1;
  }

  n1() {
    return n1;
  }

  m2() {
    return m2;
  }

  n2() {
    return n2;
  }
}

var line = new Array();
for (var i = 0; i < length.length; i++) {
  line[i] = new Array();
}

let temp_line;
var line_count = 0;

for (var i = 0; i < straight_node.length; i++) {
  temp_line = new straight(straight_node[i][0], straight_node[i][1]);
  line[line_count][0] = parseFloat(temp_line.a());
  line[line_count][1] = parseFloat(temp_line.b());
  line[line_count][2] = parseFloat(temp_line.c());
  line[line_count][3] = parseFloat(temp_line.m1());
  line[line_count][4] = parseFloat(temp_line.n1());
  line[line_count][5] = parseFloat(temp_line.m2());
  line[line_count][6] = parseFloat(temp_line.n2());
  line_count++;
}