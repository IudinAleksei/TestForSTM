import { requestToApi } from './js/network';
import { createTableData } from './js/data';

window.onload = async () => {
  console.log(createTableData(await requestToApi()));
};
