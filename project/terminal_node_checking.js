function terminal_node_check2(a, b) {
  for (var i = 1; i <= terminal_name.length; i++) {
    if (a == terminal_name[i]) {
      node_markers[b].setMap(map2);
      node_markers[b].setPosition(terminal_node[i]);
      node_markers[b].setVisible(true);
      break;
    }
  }
}
