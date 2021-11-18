const REFRESH_TABLE = 'REFRESH_TABLE';

const refreshTable = (table) => ({
  type: REFRESH_TABLE,
  latestTable: table,
});

export default refreshTable;
