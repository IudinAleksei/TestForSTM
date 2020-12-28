import { CLASS_LIST, TABLE_HEAD, EMPTY_TABLE_MESSAGE } from '../common/constants';

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
  headRow.classList.add(CLASS_LIST.tableRow);

  TABLE_HEAD.forEach((title) => {
    const headCell = createTableHeadCell(title);
    headRow.append(headCell);
  });

  thead.append(headRow);
  return thead;
};

const createPesronImage = (urls) => {
  const container = document.createElement('div');
  const thumbnail = document.createElement('img');
  const large = document.createElement('img');

  container.classList.add(CLASS_LIST.imageContainer);
  thumbnail.classList.add(CLASS_LIST.personThumbnail, CLASS_LIST.hidden);
  large.classList.add(CLASS_LIST.personLarge, CLASS_LIST.hidden);

  thumbnail.setAttribute('src', urls.thumbnail);
  thumbnail.setAttribute('alt', '');
  large.setAttribute('src', urls.large);
  large.setAttribute('alt', '');

  container.append(thumbnail);
  thumbnail.onload = () => {
    thumbnail.classList.remove(CLASS_LIST.hidden);
    container.append(large);
  };

  return container;
};

const createTableRow = (person) => {
  const row = document.createElement('tr');
  row.classList.add(CLASS_LIST.tableRow);
  TABLE_HEAD.forEach((title) => {
    const cell = document.createElement('td');
    cell.classList.add(CLASS_LIST.tableCell);
    const cellData = person[title];

    if (typeof cellData === 'object') {
      const image = createPesronImage(cellData);
      cell.append(image);
    } else {
      cell.innerText = person[title];
    }

    row.append(cell);
  });

  return row;
};

const createMessage = () => {
  const message = document.createElement('p');
  message.classList.add(CLASS_LIST.message);
  message.innerText = EMPTY_TABLE_MESSAGE;

  return message;
};

const createTable = (persons) => {
  const container = document.createElement('div');
  container.classList.add(CLASS_LIST.tableContainer);

  if (Array.isArray(persons) && persons.length > 0) {
    const table = document.createElement('table');
    const thead = createTableHead();

    table.classList.add(CLASS_LIST.table);

    table.append(thead);
    persons.forEach((person) => {
      const row = createTableRow(person);
      table.append(row);
    });

    container.append(table);
  } else {
    const message = createMessage();
    container.append(message);
  }

  return container;
};

export default createTable;
