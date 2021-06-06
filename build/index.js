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
const experience = {
  'php': [
    '<h3>Phenom People Pvt Ltd<h3>',
    'My role in Phenom is senior front end developer',
    'The product which i am working in Phenom is a career site generating platform as CMS',
    `CMS is a content management system for the career site that we'll be generating using the platform`,
    'We will have a variety of widgets that we will be using for the career site',
    'My work is mainly focused on the settings part of the widget where we can manage the data inside the widget',
    '<br>',
    'Apart from this i also worked on imagekit integration',
    'Imagekit provides the images in different sizes for a given image and also it provides low quality images which will be used as placeholder(lqip)',
    `Using Vue.js's directive and Javascript's intersection Observer i've handled both lqip image load and lazy loading of images.`
  ],
  'zoho': [
    '<h3>Zoho Corporation Pvt Ltd</h3>',
    'My role in Zoho was Member of Technical Staff (Front end)',
    `The product which i've worked in Zoho is Zoho Books`,
    `Zoho Books is an online accounting software which is statisfies most of the accounting requirements for a business to run`,
    `We have different editions in Zoho Books which handles the taxes of different regions`,
    `I've worked for Indian edition for sometime and then moved to Gulf countries regions(in terms of editions in Zoho Books)`,
    `My work here was mainly focused on handling the tax related transactions and settings`,
    `where we handle all the tax related information required in the bussiness transactions while creating/editing the transactions`,
    '<br>',
    `I also worked on a payment gateway integration for the gateway named PayTabs`,
    '<br>',
    'Apart from this i worked on an internal product named as Kalki',
    `Kalki is a tool using which we used to monitor the app performance in various browsers and devices`
  ]
}
class Experience {
  list = [];
  constructor(company, compId) {
    this.company = company;
    this.load(compId);
  }
  load(compId) {
    let parent = document.querySelector(compId);
    this.section = document.createElement('section');
    this.section.className = "exp-sec";

    let close = document.createElement('div');
    close.innerText = 'x';
    close.className = 'close-button sticky';
    close.onclick = () => { this.destroy() };

    this.section.appendChild(close);

    experience[this.company].forEach((line) => {
      let elem = document.createElement('div');
      elem.classList.add('experience-info');
      elem.innerHTML = line;

      this.section.appendChild(elem);
      this.list.push(elem);
    });

    parent.appendChild(this.section);
    this.animate();
  }
  animate() {
    let prof = setTimeout(() => {
      this.section.classList.add('open-right');
    }, 100);
    for(let i = 0; i < this.list.length; i++) {
      setTimeout(() => {
        this.list[i].classList.add('open');
      }, i*1000);
    }
  }
  destroy() {
    this.section && this.section.remove();
  }
}
class InfoSection {
  colList = [];
  
  createRowEle() {
    let row = document.createElement('div');
    row.classList.add('row');
    this.row = row;
  }
  createColEle(classname) {
    let col = document.createElement('div');
    col.classList.add(classname);
    this.colList.push(col);
    this.row.appendChild(col);
  }
  initialize() {
    this.createRowEle();
    //need to implement exact classification of no.of classes
    this.createColEle('col-5');
    this.createColEle('col-7');
  }
  populateName(data) {
    let text = typeof data === 'string' ? data : Object.keys(data)[0];
    this.colList[0].innerHTML = text;
  }
  populateValue(data) {
    let text = typeof data === 'string' ? data : Object.values(data)[0];
    this.colList[1].innerHTML = text;
  }
  populateData(section, data, index) {
    this.initialize();
    this.populateName(data);
    this.populateValue(data);
    section.appendChild(this.row);
    this.animateElement(index);
  }
  animateElement(index) {
    setTimeout(() => {
        this.row.classList.add('open')
    },500*index);
  }
}
class SnP {
  colList = [];
  isChecked = false;
  constructor(compId, type) {
    this.type = type;
    this.createRow(compId);
  }
  createRowEle() {
    let row = document.createElement('div');
    row.classList.add('inline-row');
    this.row = row;
    this.row.onclick = (e) => { this.handleChange(e) };
    this.row.onmouseover = (e) => { this.handleHover(e) };
  }
  createCheckBox() {
    let label = document.createElement('label');
    label.innerText = this.type;
    this.colList.push(label);
    this.row.appendChild(label);
  }
  createRow(compId) {
    this.createRowEle();
    this.createCheckBox();
    compId.appendChild(this.row);
  }
  handleChange(e) {
    if (!window.isSkillsInfoShown || !this.isChecked) {
      this.isChecked = !this.isChecked;
      if (this.isChecked) {
        this.row.classList.add('checked');
        window.pushSkillInfoSelections(this.type);
      } else {
        this.row.classList.remove('checked');
        window.removeSkillInfoSelections(this.type);
      }
    } else {
      this.row.classList.add('disable-cursor');
    }
  }
  handleHover(e) {
    if(window.isSkillsInfoShown && this.isChecked && !this.row.classList.contains('disable-cursor')) {
      this.row.classList.add('disable-cursor');
    }
  }
}
let personalSectionElements = [];
let selectedOptions = [];
var isSkillsInfoShown = false;

function showKnowMoreComp() {
    let element = document.querySelector('#questions-section');
    element.classList.remove('hide');
    let contactInfo = document.querySelector('.contact.top-header');
    contactInfo && contactInfo.remove();
    setTimeout(() => {
        element.classList.add('open');
    },10);
}

function showProfileSection(id) {
    let activeElements = document.querySelectorAll('section.open');
    activeElements.forEach((element) => { element.classList.remove('open'); element.classList.add('hide')});
    let profileSection = document.querySelector('.profile-section');
    profileSection.classList.remove('hide');
    setTimeout(() => {
        profileSection.classList.add('open');
        createPersonalSection(id);
    }, 10);    
}

function createPersonalSection(id, skills, selectedFields) {
    let personalData = skills === undefined ? personalSection : selectedFields;
    let compId= document.querySelector(`#${id}`);
    let listLength = Object.keys(personalData).length;
    for (let i = 0; i < listLength; i++) {
        personalSectionElements.push(new InfoSection().populateData(compId, personalData[i], i));
    }
    if(!skills) {
        setTimeout(() => {
            document.querySelector('#person-know-more').classList.add('open');
        }, 500*listLength);
    }
}

function showExperience(company, event) {
    event.preventDefault();
    let expComponent = document.querySelector('.exp-sec');
    expComponent && expComponent.remove();
    new Experience(company, '.main');
}

function showSkillsSection(el, ele) {
    ele.disabled = true;
    let otherSkills = otherDetails;
    let compId = document.querySelector(`#${el}`);
    otherSkills.forEach((el) => {
        new SnP(compId, Object.keys(el));
    });
}

function addInfoToLayout(type) {
    let fieldToAdd = otherDetails.find((field) => Object.keys(field)[0] === type);
    let compId = document.querySelector('#personal-component');
    personalSectionElements.push(new InfoSection().populateData(compId, fieldToAdd, 0));
}

function pushSkillInfoSelections(type) {
    selectedOptions.push(type);
    if (isSkillsInfoShown) {
        addInfoToLayout(type[0]);
    }
    let s = setTimeout(() => {
        let skillsMoreRow = document.querySelector('#skills-know-more');
        skillsMoreRow && skillsMoreRow.classList.add('open');
        clearTimeout(s);
    }, 100);
}

function removeSkillInfoSelections(type) {
    let index = selectedOptions.indexOf(type);
    selectedOptions.splice(index, 1);

    if (selectedOptions.length === 0) {
        document.querySelector('#skills-know-more').classList.remove('open');
    }
}

function destroyPersonalSection() {
    personalSectionElements = [];
    document.querySelector('#personal-component').innerHTML = '';
    let knowMoreButton = document.querySelector('#person-know-more');
    knowMoreButton && knowMoreButton.remove();
}

function showSkillsInDetail(event) {
    event && (event.target.disabled = true);
    document.querySelector('#skills-know-more').remove();

    destroyPersonalSection();
    isSkillsInfoShown = true;

    document.querySelector('#info-message').innerHTML = 'Technical skills & projects:';
    let selectedOps = selectedOptions.reduce((a,b) => a.concat(b), []);
    let selectedFields = otherDetails.filter((detail) => selectedOps.includes(Object.keys(detail)[0]))
    createPersonalSection('personal-component', true, selectedFields);
}

function loadInFrame(link, event) {
    event.stopPropagation();
    event.preventDefault();
    setLoadState();
    let frameSection = document.createElement('div');
    frameSection.className = 'iframe';

    let closeButton =document.createElement('div');
    closeButton.innerText = 'x';
    closeButton.className = 'close-button';
    closeButton.onclick = () => { removeFrames(1) };

    let frame = document.createElement('iframe');
    frame.src = link;
    frame.loading = 'lazy';
    frameSection.appendChild(closeButton);
    frameSection.appendChild(frame);
    frame.onload = () => { removeFrames() };

    let timeOut = setTimeout(() => {
        document.querySelector('body').appendChild(frameSection);
        clearTimeout(timeOut);
    },100);
}
function setLoadState() {
    let elem = document.createElement('div');
    elem.classList.add('load-state');
    elem.innerText = ' Please wait.......';
    document.querySelector('body').appendChild(elem);
}

function removeFrames(s) {
    let loadingState = document.querySelector('.load-state');
    if (s) {
        document.querySelector('.iframe').remove();
    }
    loadingState && loadingState.remove();
}
