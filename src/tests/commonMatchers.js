test('2 + 2 = 4', () => {
    expect(2 + 2).toBe(4);
  });

  test('obj assignment', () => {
    const data = {one: 1};
    data['two'] = 2;
    expect(data).toEqual({one: 1, two: 2});
  });

  const can1 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  const can2 = {
    flavor: 'grapefruit',
    ounces: 12,
  };
  
  describe('the La Croix cans on my desk', () => {
    test('have all the same properties', () => {
      expect(can1).toEqual(can2);
    });
    test('are not the exact same can', () => {
      expect(can1).not.toBe(can2);
    });
  });