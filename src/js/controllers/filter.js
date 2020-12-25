import { CLASS_LIST } from '../common/constants';

const inputFilterHandler = () => {
  const input = document.querySelector(`.${CLASS_LIST.filter}`);
  input.addEventListener('input', (event) => console.log(event.target.value));
};

export default inputFilterHandler;
