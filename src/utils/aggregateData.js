const aggregateFunc = {
  sum: data => data.reduce((a, b) => a + b.y, 0),
  max: data => data.reduce((a, b) => (a > b.y ? a : b.y), 0),
  min: data => data.reduce((a, b) => (a < b.y ? a : b.y), 0),
  avg: data => data.reduce((a, b) => a + b.y, 0) / data.length
};

export default function aggregateData(option, data) {
  const reduced = {};
  const uniqueX = [...new Set(data.map(d => d.x))];
  const [func, format] = option.split(':');
  uniqueX.forEach(x => {
    reduced[x] = {
      x,
      y: aggregateFunc[func.split(':')[0]](data.filter(d => d.x === x))
    };
  });

  if (format === 'percent') {
    const total = Object.values(reduced).reduce((a, b) => a + b.y, 0);
    return Object.values(reduced).map(d => ({
      ...d,
      y: (100 * d.y) / total
    }));
  }

  return Object.values(reduced);
}
