const secsInDay = 1000 * 24 * 60 * 60;
const personalSection = [
  {'Name': 'Prashanth Avvari'},
  {'Role': 'Senior Front End Developer'},
  {'Experience': `${getExperience()} Years`},
  {'Organizations': `Phenom people (${getPhenomExp()}) | Zoho Corporation (~4 Years)`},
  {'Education': `Bachelor of Engineering in Information Technology` }
];
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