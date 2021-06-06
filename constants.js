const secsInDay = 1000 * 24 * 60 * 60;

const personalSection = [
  {'Name': 'Prashanth Avvari'},
  {'Role': 'Senior Front End Developer'},
  {'Experience': `${getExperience()} Years`},
  {'Organizations': `
                <a class="light-blue" href="javascript(0)" onclick="showExperience('php', event)">Phenom people(${getPhenomExp()})</a>,
                <a class="light-blue" href="javascript(0)" onclick="showExperience('zoho', event)">Zoho Corporation(~4 Years)</a>`
                },
  {'Education': `Bachelor of Engineering in Information Technology` }
];

const otherDetails = [
  { 'Programming/Scripting languages': 'JavaScript, C, python, Java' },
  { 'Frameworks': 'Ember.js, React.js, node.js' },
  { 'Hobbies': 'Cricket, Photography' },
  { 'Projects': `
              <a class="light-blue" href="javascript(0)" onclick="loadInFrame('https://bonus-clone.azurewebsites.net', event)">Bonus Card Game</a>, 
              <a class="light-blue" href="javascript(0)" onclick="loadInFrame('https://prashanthavvari.github.io/stick-hero/', event)"> Stick Hero Web</a>,
              <a class="light-blue" href="javascript(0)" onclick="loadInFrame('https://literature-game.azurewebsites.net/', event)">Literature Card Game</a>`
            }
]