const experience = {
  'php': [
    '<h3>Phenom People Pvt Ltd<h3>',
    'My role in Phenom is senior front end developer',
    'The product which i am working in Phenom is a career site generating platform called as CMS',
    `CMS is a content management system for the career site which we'll be generating using the platform`,
    'We have a variety of widgets which are being used for the career site development',
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
    `Zoho Books is an online accounting software which statisfies most of the accounting requirements for a business to run`,
    `We have different editions in Zoho Books which handles the taxes of different regions`,
    `I've worked for Indian edition for sometime and then moved to Gulf countries regions(in terms of editions in Zoho Books)`,
    `My work there was mainly focused on handling the tax related transactions and settings`,
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