module.exports = function reverse (n) {
  
  let revStr = String(Math.abs(n)).split('').reverse().join('');

  return Number(revStr);
}
