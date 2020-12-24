const convertDate = (inputString) => {
  const inputDate = new Date(inputString);
  const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const dateArray = inputDate.toLocaleDateString('en-US', options).split('/');
  const outputDate = `${dateArray[1]}.${dateArray[0]}.${dateArray[2]}`;
  return outputDate;
};

export const convertToRowData = (item) => {
  const output = {
    name: `${item.name.first} ${item.name.last}`,
    picture: {
      thumbnail: item.picture.thumbnail,
      large: item.picture.large,
    },
    location: `${item.location.state} ${item.location.city}`,
    email: item.email,
    phone: item.phone,
    registeredDate: convertDate(item.registered.date),
  };

  return output;
};

export const createTableData = (JSONRequest) => JSONRequest.results
  .map((item) => convertToRowData(item));

export const filterTableData = () => {

};
