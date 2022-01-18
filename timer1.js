const slicedArgs = process.argv.slice(2);

for (let i = 0; i < slicedArgs.length; i++) {
  setTimeout(() => {
    process.stdout.write('\x07');
  }, slicedArgs[i] * 1000);
  //converting to seconds
  //console.log(slicedArgs[i] * 1000);
}
