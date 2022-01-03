export default (n: number): number[][] => {
  const base = Array.from({ length: n }, (_, i) => i)

  console.log(`n: ${n}, spc: ${n + 1}, ts: ${n ** 2 + n + 1}`)

  return [
    [...base, n],
    ...base.flatMap(a => [
      [0, ...base.map(b => n + 1 + b + n * a)],
      ...base.map(c => [
        a + 1,
        ...base.map(b => n + 1 + n * b + ((a * b + c) % n)),
      ]),
    ]),
  ]
    .map(row => row.map(n => n + 1))
    .sort()
}
