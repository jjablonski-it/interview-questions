import func from './main'

it('should work for n = 1', () => {
  expect(func(1)).toEqual([
    [1, 2],
    [1, 3],
    [2, 3],
  ])
})

it('should work for n = 2', () => {
  expect(func(2)).toEqual([
    [1, 2, 3],
    [1, 4, 5],
    [1, 6, 7],
    [2, 4, 6],
    [2, 5, 7],
    [3, 4, 7],
    [3, 5, 6],
  ])
})

it('should always have only 1 in common', () => {
  const result = func(2)
  console.log(result)
  result.forEach((group, index) => {
    const rest = result.filter((_, i) => i !== index)
    rest.forEach(g => {
      let pairs = 0
      group.forEach(element => {
        g.forEach(e => {
          if (e === element) pairs++
          // if (pairs > 1) console.log(group, g)
        })
      })
      expect(pairs).toEqual(1)
    })
  })
})
