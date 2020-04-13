function facility_node_check2(a, b) {
  for (var i = 1; i <= facility_name.length; i++) {
    if (a == facility_name[i]) {
      node_markers[b].setMap(map2);
      node_markers[b].setPosition(facility_node[i]);
      node_markers[b].setVisible(true);
      break;
    }
  }
}
