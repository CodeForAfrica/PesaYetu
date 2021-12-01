export function idify(string) {
  return string
    .replace(/^\s+|\s+$/g, "")
    .replace(/[^a-z0-9]/g, "")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_");
}
/**
 * createFiltersForGroups
 * this method creates the filter for the data transformations as well as the signals that drive the filter. we can set signals from outside to set the filter. we use two signals, one to indicate if the filter is active (we can have multiple filters) the second is the value we filter for.
 *
 * */
export function createFiltersForGroups(groups) {
  // we use a Map here to make it faster to create unique filters
  const filters = new Map();
  const signals = new Map();
  groups.forEach((group) => {
    const { name } = group;
    const keyName = idify(name);
    filters.set(keyName, {
      type: "filter",
      expr: `!${keyName}Filter || (${keyName}Filter && datum["${name}"] === ${keyName}FilterValue)`,
    });
    signals.set(keyName, { name: `${keyName}Filter`, value: false });
    signals.set(`${keyName}Value`, { name: `${keyName}FilterValue` });
  });
  return {
    signals: Array.from(signals.values()),
    filters: Array.from(filters.values()),
  };
}

export function calculateTooltipPosition(event, tooltipBox, offsetX, offsetY) {
  let x = event.pageX + offsetX;
  if (x + tooltipBox.width > window.innerWidth) {
    x = +event.pageX - offsetX - tooltipBox.width;
  }
  let y = event.pageY + offsetY;
  if (y < window.innerHeight) {
    y = window.innerHeight + offsetY;
  }
  if (y + tooltipBox.height > window.innerHeight) {
    y = +event.pageY - offsetY - tooltipBox.height;
  }
  return { x, y };
}
