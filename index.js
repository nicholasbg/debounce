export default (() => {
  const timeouts = {};
  return (callback, id, delay) => {
    timeouts[id] && clearTimeout(timeouts[id]);
    timeouts[id] = setTimeout(callback, delay);
  };
})();
