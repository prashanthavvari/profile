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