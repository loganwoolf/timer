const keyboard = process.stdin;
keyboard.setRawMode(true);
keyboard.setEncoding('utf8');

keyboard.on('data', (key) => {
  if (key === '\u0003') {
    process.exit();
  }

  if (/[1-9]/.test(key)) {
    console.log(`Setting timer for ${key} seconds...`);
    setTimeout(()=>{
      console.log(`${key} second timer has expired!`);
    }, key * 1000);
  }



});

