function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {n
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

var randomColor=generateRandomColor();//"#F10531"
