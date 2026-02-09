export default class Collapse {
  constructor(container) {
    this.container = container;
    this.button = container.querySelector('.collapse-btn');
    this.content = container.querySelector('.collapse-content');
    
    this.button.addEventListener('click', () => this.toggle());
  }
  
  toggle() {
    this.content.classList.toggle('open');
  }
}
