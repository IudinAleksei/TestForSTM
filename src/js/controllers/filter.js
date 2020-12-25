import { CLASS_LIST } from '../common/constants';

const inputFilterHandler = (renderTable, filterPersons, persons) => {
  const input = document.querySelector(`.${CLASS_LIST.filter}`);
  input.addEventListener('input', (event) => {
    const pattern = event.target.value;
    renderTable(filterPersons(pattern, persons));
  });
};

export default inputFilterHandler;
