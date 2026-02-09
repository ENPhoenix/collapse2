import './css/style.css';
import Collapse from './js/Collapse';

document.addEventListener('DOMContentLoaded', () => {
  const collapseContainer = document.querySelector('.collapse-container');
  if (collapseContainer) {
    new Collapse(collapseContainer);
  }
});
