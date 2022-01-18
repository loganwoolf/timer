const args = process.argv.slice(2);
for (let time of args) {
  if (typeof +time === 'number' && time > 0) {
    setTimeout(() => {
      process.stdout.write(`Alert! ${time} sec have elapsed.\n`);
    }, time * 1000);
  }
}

// all events are set at same time by iterating through the array
// executions are done after timeout specified on setTimeout function