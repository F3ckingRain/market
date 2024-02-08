const now = new Date(Date.now());

const thisYear = now.getFullYear();
const thisMonth = now.getUTCMonth();
const thisDay = now.getUTCDate();

export { thisDay, thisYear, thisMonth };
