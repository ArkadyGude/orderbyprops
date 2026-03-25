import orderByProps from '../src/orderByProps';

describe('orderByProps', () => {
  test('должен вернуть отсортированный массив согласно примеру', () => {
    const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40 };
    const order = ['name', 'level'];
    const expected = [
      { key: 'name', value: 'мечник' },
      { key: 'level', value: 2 },
      { key: 'attack', value: 80 },
      { key: 'defence', value: 40 },
      { key: 'health', value: 10 },
    ];
    expect(orderByProps(obj, order)).toEqual(expected);
  });

  test('должен игнорировать несуществующие ключи в order', () => {
    const obj = { a: 1, b: 2 };
    const order = ['c', 'a', 'd'];
    const expected = [
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
    ];
    expect(orderByProps(obj, order)).toEqual(expected);
  });

  test('должен корректно работать с пустым массивом order', () => {
    const obj = { z: 10, a: 20, b: 30 };
    const order = [];
    const expected = [
      { key: 'a', value: 20 },
      { key: 'b', value: 30 },
      { key: 'z', value: 10 },
    ];
    expect(orderByProps(obj, order)).toEqual(expected);
  });

  test('должен корректно работать с пустым объектом', () => {
    const obj = {};
    const order = ['x', 'y'];
    const expected = [];
    expect(orderByProps(obj, order)).toEqual(expected);
  });

  test('должен возвращать только собственные свойства, игнорируя унаследованные', () => {
    const parent = { inherited: 'inherited' };
    const obj = Object.create(parent);
    obj.own = 'own';
    const order = [];
    const expected = [{ key: 'own', value: 'own' }];
    expect(orderByProps(obj, order)).toEqual(expected);
  });

  test('должен корректно обрабатывать значения разных типов', () => {
    const obj = { num: 42, str: 'text', bool: true, arr: [1, 2], obj: { nested: true } };
    const order = ['bool', 'num'];
    const expected = [
      { key: 'bool', value: true },
      { key: 'num', value: 42 },
      { key: 'arr', value: [1, 2] },
      { key: 'obj', value: { nested: true } },
      { key: 'str', value: 'text' },
    ];
    expect(orderByProps(obj, order)).toEqual(expected);
  });

  test('должен корректно работать при вызове без порядка сортировки', () => {
    const obj = { b: 2, a: 1 };
    const expected = [
      { key: 'a', value: 1 },
      { key: 'b', value: 2 },
    ];
    expect(orderByProps(obj)).toEqual(expected);
  });
});
