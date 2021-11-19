const REFRESH_TABLE = 'REFRESH_TABLE';
const FILTER_TABLE = 'FILTER_TABLE';

const refreshTable = (table) => ({
  type: REFRESH_TABLE,
  latestTable: table,
});

const filterTable = (filter) => ({
  type: FILTER_TABLE,
  filter,
});

export { refreshTable, filterTable };
