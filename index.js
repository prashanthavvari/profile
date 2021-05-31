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