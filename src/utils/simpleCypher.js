const map = {
  a: 'q',
  b: 'w',
  c: 'e',
  d: 'r',
  e: 't',
  f: 'y',
  g: 'u',
  h: 'i',
  i: 'o',
  j: 'p',
  k: 'a',
  l: 's',
  m: 'd',
  n: 'f',
  o: 'g',
  p: 'h',
  q: 'j',
  r: 'k',
  s: 'l',
  t: 'z',
  u: 'x',
  v: 'c',
  w: 'v',
  x: 'b',
  y: 'n',
  z: 'm',
};

export const simpleCypher = (string) => {
  const chars = string.split('');
  const mapped = chars
    .map((char) => char.toLowerCase())
    .map((char) => {
      if (char === ' ') return '_';
      return map[char] ? map[char] : char;
    });
  return mapped.join('');
};

export const reverseCypher = (string) => {
  const chars = string.split('');
  const mapped = chars.map((char) => {
    const mapping = Object.keys(map).find((key) => map[key] === char);
    if (char === '_') {
      return ' ';
    } else if (mapping === undefined) {
      return char;
    } else {
      return mapping;
    }
  });
  return mapped.join('');
};

export const toTitleCase = (string) => {
  return string.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
};
