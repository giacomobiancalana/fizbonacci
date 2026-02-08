
// QUESTA E' QUELLA CHE USO !!!
// E se mi tenessi in memoria sempre e solo gli ultimi due valori?
// Prestazioni migliori, anche 3x rispetto a memoized (in termini di tempo, per spazio ancor di più poi)
function alternateFib(num: number): number {
  if (num === 1 || num === 2){
    return 1;
  };
  let arrLast2Sol = [1, 1];
  let tempSol = 0;
  for (let i = 3; i <= num; i++) {
    tempSol = arrLast2Sol[0] + arrLast2Sol[1];
    arrLast2Sol[i % 2] = tempSol;
  };
  return tempSol;
};

const numeroDaProvare = 1000;

const pippo = performance.now();
const strana = alternateFib(numeroDaProvare);
const pippo2 = performance.now();
console.log(strana, "in", pippo2 - pippo, "ms");

const pap = performance.now();
const res = fib(numeroDaProvare); // con la fib old non superare i 45
const pap2 = performance.now();
console.log(res, "in", pap2 - pap, "ms");


/** NON VA BENE, INFATTI NON LA USO: sarebbe la normale funzione Fibonacci, not memoized -> NON SUPERARE I 45 !!!*/
function oldFib(n: number): number {
  if (n === 1 || n === 2) {
    return 1;
  };
  return fib(n-1) + fib(n-2);
}

// FibonacciMemoized è meglio in generale, perché anche se occupa memoria in Ram, comunque
// è mooooolto più performante. Come vedi dai commenti sotto, non puoi andare oltre 45 con oldFib()
// IN OGNI CASO NON LA USO

/** FibonacciMemoized */
function fib(n: number, prevValues: number[] = []): number {
  if (!!prevValues[n]) {
    return prevValues[n];
  };

  if (n === 1 || n === 2) {
    return 1;
  };

  prevValues[n] = fib(n-1, prevValues) + fib(n-2, prevValues);

  return prevValues[n];
};
