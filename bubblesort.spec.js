describe('GreaterThan function', () => {
  it('is a function', () => {
    expect(typeof greaterThan).toEqual('function')
  });
  it('returns true if first arg is greater than second arg', () => {
    expect(greaterThan([4, 7])).toEqual(false);
    expect(greaterThan([8, 3])).toEqual(true);
  })
});

describe('Swap function', () => {
  it('it is a function', () => {
    expect(typeof swap).toEqual('function');
  });
  it('swaps two values', () => {
    expect(swap([4, 2])).toEqual([2, 4]);
  });
});

describe('Bubble Sort', () => {
  beforeEach(() => {
    spyOn(window, 'greaterThan').and.callThrough();
    spyOn(window, 'swap').and.callThrough();
  });
  it('handles an empty array', () => {
    expect(bubbleSort([])).toEqual([]);
  });
  it('sorts an array of numbers', () => {
    expect(bubbleSort([2, 4, 5, 3, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(swap.calls.count()).toEqual(6)
  });
  it('only runs as many comparisons as is necessary', () => {
    bubbleSort([1, 2, 3, 5, 4])
    expect(swap.calls.count()).toEqual(1)
    expect(greaterThan.calls.count()).toEqual(7)
  })
});