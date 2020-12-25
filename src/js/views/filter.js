import { CLASS_LIST } from '../common/constants';

const createFilterForm = () => {
  const container = document.createElement('div');
  const input = document.createElement('input');

  container.classList.add(CLASS_LIST.filterContainer);
  input.classList.add(CLASS_LIST.filter);

  input.setAttribute('type', 'text');

  container.append(input);
  return container;
};

export default createFilterForm;
