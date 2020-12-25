import { CLASS_LIST, TABLE_HEAD } from './constants';

const createTableHeadCell = (title) => {
  const cell = document.createElement('th');
  cell.classList.add(CLASS_LIST.tableHeadCell);
  cell.innerText = title;

  return cell;
};

const createTableHead = () => {
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  thead.classList.add(CLASS_LIST.tableHead);

  TABLE_HEAD.forEach((title) => {
    const headCell = createTableHeadCell(title);
    headRow.append(headCell);
  });

  thead.append(headRow);
  return thead;
};

const createTableRow = (person) => {
  const row = document.createElement('tr');
  TABLE_HEAD.forEach((title) => {
    const cell = document.createElement('td');
    cell.classList.add(CLASS_LIST.tableCell);

    cell.innerText = person[title];
    row.append(cell);
  });

  return row;
};

const renderTable = (persons) => {
  const main = document.querySelector(`.${CLASS_LIST.main}`);
  const table = document.createElement('table');
  const thead = createTableHead();

  table.classList.add(CLASS_LIST.table);

  table.append(thead);
  persons.forEach((person) => {
    const row = createTableRow(person);
    table.append(row);
  });
  main.append(table);
};

export default renderTable;
