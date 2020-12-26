import { CLASS_LIST } from '../common/constants';

const inputFilterHandler = (renderTable, filterPersons, persons) => {
  const input = document.querySelector(`.${CLASS_LIST.filter}`);
  let isRunnable = true;
  input.addEventListener('input', (event) => {
    if (!isRunnable) {
      return;
    }

    isRunnable = false;

    setTimeout(() => {
      isRunnable = true;
      renderTable(filterPersons(event.target.value, persons));
    }, 500);
  });
};

export default inputFilterHandler;
