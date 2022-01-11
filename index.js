// Code your solution here
function findMatching(source, string) {
    return source.filter(
        (possible) => possible.toLowerCase() === string.toLowerCase ()
    );
}

function fuzzyMatch(source, string) {
    return source.filter(
      (possible) =>
        possible.toLowerCase().indexOf(string.toLowerCase()) === 0
    );
  }
  
  function matchName(source, stringName) {
    return source.filter((record) => record.name === stringName);
  }