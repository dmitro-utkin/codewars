// v 1
// function calcSalesByCompany(data, year) {
//   const salesByCompany = {};

//   const filteredData = year ? data.filter(item => item.year === year) : data;
//   filteredData.forEach(item => {
//     const { company, sales } = item;
//     if (salesByCompany[company]) {
//       salesByCompany[company] += sales;
//     } else {
//       salesByCompany[company] = sales;
//     }
//   });
//   return salesByCompany;
// }

