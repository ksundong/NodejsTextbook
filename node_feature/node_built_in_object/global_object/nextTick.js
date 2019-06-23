setImmediate(() => {
  console.log('immediate');
});
process.nextTick(() => {
  console.log('nextTick');
});
setTimeout(() => {
  console.log('timeout');
}, 0);
Promise.resolve().then(() => console.log('promise'));

// nextTick > Promise > timeout, immediate
// nextTick, Promise call microtask. These callback take priority over other callbacks.
// Microtask's recursive call may cause not running other callback functions.