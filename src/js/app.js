// import { requestToApi } from './js/network';
// import { createTableData } from './js/data';
// import { filterPersons } from './js/filter';
import requestToApi from './model/network';
import { createTableData, filterPersons } from './model/data';
import renderFilter from './views/filter';
import createTable from './views/table';
import mouseOverThumbnailHandler from './controllers/table';
import inputFilterHandler from './controllers/filter';
import { CLASS_LIST } from './common/constants';

const init = async () => {
  const JSONResponse = await requestToApi();
  const persons = createTableData(JSONResponse);

  return persons;
};

const renderTable = (persons) => {
  const main = document.querySelector(`.${CLASS_LIST.main}`);

  const oldTable = document.querySelector(`.${CLASS_LIST.table}`);

  if (oldTable) {
    oldTable.remove();
  }

  const table = createTable(persons);

  mouseOverThumbnailHandler(table);

  main.append(table);
};

const app = async () => {
  const persons = await init();
  renderFilter();
  renderTable(persons);
  inputFilterHandler(renderTable, filterPersons, persons);
};

export default app;
