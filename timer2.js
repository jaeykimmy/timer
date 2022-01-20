const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');

////////////
// Event Handling for User Input
////////////

// on any input from stdin (standard input), output a "." to stdout
stdin.on('data', (key) => {
  const input = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'b') {
    process.stdout.write('.');
  }
  
  if (input.includes(key)) {
    process.stdout.write(`setting timer for ${key} seconds...`);
    setTimeout(() => {
      process.stdout.write('.');
    }, key * 1000);
  }
});

console.log('after callback');