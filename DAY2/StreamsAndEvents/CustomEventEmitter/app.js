const EventEmitter = require("events").EventEmitter;
function GetCount(maxCount) {
  let e = new EventEmitter();

  let count = 0;
  // emit / publish
  process.nextTick(() => {
    e.emit("start", count);
    let t = setInterval(() => {
      if (count < maxCount) {
        e.emit("count", count++);
      } else if (count == maxCount) {
        e.emit("end", count);
        clearInterval(t);
      }
    }, 500);
  });
  return e;
}

// Subscriber
const e = GetCount(10);
e.on("count", currCount => {
  console.log(currCount);
});

e.on("start", startCount => {
  console.log(`The couting has started with count ${startCount}`);
});
e.on("end", endCount => {
  console.log(`The couting has ended with count ${endCount}`);
});
