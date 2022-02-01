class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph() {
    const p = document.createElement("p");
    p.innerHTML = 'This paragraph has been dynamically added by JavaScript!';
    document.getElementById("main-container").appendChild(p);
    // console.log(this.mainContainerEl.childNodes);
  }


};

module.exports = View;