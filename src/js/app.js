// import { requestToApi } from './js/network';
// import { createTableData } from './js/data';
// import { filterPersons } from './js/filter';
import requestToApi from './model/network';
import createTableData from './model/data';
import createFilterForm from './views/filter';
import createTable from './views/table';
import mouseOverThumbnailHandler from './controllers/table';
import inputFilterHandler from './controllers/filter';
import { CLASS_LIST } from './common/constants';

const STATE = {
  persons: null,
};

const init = async () => {
  const JSONResponse = await requestToApi();
  const persons = createTableData(JSONResponse);

  return persons;
};

const render = (persons) => {
  const main = document.querySelector(`.${CLASS_LIST.main}`);
  const filter = createFilterForm();
  const table = createTable(persons);

  mouseOverThumbnailHandler(table);

  main.append(filter);
  main.append(table);
};

const app = async () => {
  const persons = await init();
  STATE.persons = persons;
  render(persons);
  inputFilterHandler();
};

export default app;
