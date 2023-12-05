export const devPrint = (...args) => {
  if (process.env.REACT_APP_MODE === 'dev') { console.log(...args); }
  // console.log(...args);
};
