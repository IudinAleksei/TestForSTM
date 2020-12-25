import { requestToApi } from './js/network';
import { createTableData } from './js/data';
import renderTable from './js/table';

window.onload = async () => {
  const persons = createTableData(await requestToApi());
  renderTable(persons);
};
