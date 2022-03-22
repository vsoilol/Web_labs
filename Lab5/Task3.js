function method(h, S, S1) {
  return (1 / 3) * h * (S + S1 + Math.sqrt(S * S1));
}

console.log(method(1, 2, 3));
