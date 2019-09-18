const aggregateFunc = {
  sum: data => data.reduce((a, b) => a + b.y, 0),
  max: data => data.reduce((a, b) => (a > b.y ? a : b.y), 0),
  min: data => data.reduce((a, b) => (a < b.y ? a : b.y), 0),
  avg: data => data.reduce((a, b) => a + b.y, 0) / data.length
};

export default function aggregateData(func, data) {
  const reduced = {};
  const uniqueX = [...new Set(data.map(d => d.x))];
  uniqueX.forEach(x => {
    reduced[x] = {
      x,
      y: aggregateFunc[func](data.filter(d => d.x === x))
    };
  });

  return Object.values(reduced);
}
