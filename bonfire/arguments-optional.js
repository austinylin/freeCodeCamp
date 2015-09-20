function add() {
  if(arguments.length == 1 && typeof(arguments[0]) !== "number")
    return undefined;
  if(arguments.length == 2 && (typeof(arguments[0]) !== "number" || typeof(arguments[1]) !== "number"))
    return undefined;

  if(arguments.length == 1) {
    return num => add(arguments[0], num);
  }

  return arguments[0]+arguments[1];
}

add(2,3);
