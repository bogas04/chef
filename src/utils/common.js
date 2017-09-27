export const toMap = (list, prop) => list.reduce((map, item) => {
  map[item[prop]] = item; // eslint-disable-line
  return map;
}, {});
