import { CLASS_LIST } from './constants';

const createTableHead = () => {
  const thead = document.createElement('thead');
  const headRow = document.createElement('tr');
  thead.classList.add(CLASS_LIST.tableHead);
  STATS_TITLES.forEach((item) => {
    const headCell = document.createElement('th');
    const arrow = createArrowImage(assets.arrowUp);
    headCell.classList.add(CLASS_LIST.tableHeadCell);
    headCell.innerText = item;
    headCell.append(arrow);
    headRow.append(headCell);
  });
  thead.append(headRow);
  return thead;
};

const createTableRow = (wordStats) => {
  const row = document.createElement('tr');
  wordStats.forEach((item) => {
    const cell = document.createElement('td');
    cell.classList.add(CLASS_LIST.tableCell);
    cell.innerText = item;
    row.append(cell);
  });
  return row;
};
