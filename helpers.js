function getExperience() {
  let dateDiff = Math.ceil(new Date() - new Date('2016-12-21'));
  let YOE = (dateDiff/(secsInDay * 365.25)).toFixed(1);
  return YOE;
}
function getPhenomExp() {
  let dateDiff = Math.ceil(new Date() - new Date('2020-12-03'));
  let exp = (dateDiff/(secsInDay*365.25));
  return exp < 1 ? `${Math.round(exp*12)} Months` : `${Math.round(exp)} Years`;
}