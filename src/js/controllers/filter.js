import { CLASS_LIST } from '../common/constants';

export const clearButtonHandler = () => {
  const button = document.querySelector(`.${CLASS_LIST.clearBtn}`);
  button.addEventListener('click', () => {
    const input = document.querySelector(`.${CLASS_LIST.filter}`);
    const event = new InputEvent('input');
    input.value = '';
    input.dispatchEvent(event);
  });
};

export const inputFilterHandler = (renderTable, filterPersons, persons) => {
  clearButtonHandler();
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
