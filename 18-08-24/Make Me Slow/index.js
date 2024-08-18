// Make me slow! Calling makeMeSlow() should take at least 7 seconds.

function makeMeSlow() {
  // This function is too fast!
  return new Promise(resolve => {
    setTimeout(() => {
      for (let x = 0; x < 1000000; ++x) { }
      resolve();
    }, 7000);
  });
}

function makeMeSlow1() {
  // Затримка на 7 секунд
  const start = Date.now();
  while (Date.now() - start < 7000) {
    // Порожній цикл для затримки
  }
  console.log("Function executed after 7 seconds");
}

makeMeSlow();