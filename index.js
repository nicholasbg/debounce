/**
 * @description Debounce
 * 
 * @param {function} callback function to debounce
 * @param {string | number | symbol} id unique id required to avoid collisions
 * when using independent instances of the function
 * @param {number} delay time, in milliseconds that the timer should wait before
 * the specified function or code is executed
 * 
 * @return {undefined}
 * 
 * @example
 * debounce(function(){
 *   console.log('bababoo');
 * }, 'unique-id-0', 100);
 */
module.exports = (() => {
  const timeouts = {};
  return (callback, id, delay) => {
    timeouts[id] && clearTimeout(timeouts[id]);
    timeouts[id] = setTimeout(callback, delay);
  };
})();