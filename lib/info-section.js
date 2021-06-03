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