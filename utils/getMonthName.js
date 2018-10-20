import months from '../constants/months.json';

const getMonthName = () => {
  let year = document.getElementsByClassName('ant-select-selection-selected-value')[0].innerHTML;
  let abbr = document.getElementsByClassName('ant-select-selection-selected-value')[1].innerHTML;
  return ({ month: months[abbr], year });
}

export default getMonthName;