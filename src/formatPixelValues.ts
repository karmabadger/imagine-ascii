const str =
  `$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\\|()1{}[]?-_+~<>i!lI;:,"^\`'. `
    .split("")
    .reverse();

const strMap = str.reduce((acc: { [key: string]: number }, curr, i) => {
  acc[curr] = i;
  return acc;
}, {});
console.log(str, str.length, strMap);
