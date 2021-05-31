function Profile() {
  const profileObject = [{ 
      'key': 'NAME',
      'value': 'Prashanth Avvari'
    }, {
      'key': 'age',
      'value': parseInt((new Date() - new Date('1995-08-31'))/(24 * 60 * 60 * 1000 * 365.25))
    }, {
      'key': 'Total Experience',
      'value': '4 years'
    }, {
      'key': 'Organizations',
      'value': 'Phenom people| Zoho Corporation pvt ltd'
    }, {
      'key': 'Programming/Scripting languages',
      'value': 'C, Java, Javascript, python'
    }, {
      'key': 'Js Frameworks',
      'value': 'Ember.js, React.js, Node.js'
    }];
    console.log('You need my hobbies and interests too? :p');
    return profileObject;
}
function main(){
  Profile().forEach((obj) => {
    document.querySelector('.main').innerText += `${obj.key} ${obj.value} \n`;
  });
}
window.onload = main