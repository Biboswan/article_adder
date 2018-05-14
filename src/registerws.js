
const regsw = () => {
    if (!navigator.serviceWorker) return;
    navigator.serviceWorker.register('./sw/sw.js').then(function(reg) {
    if (!navigator.serviceWorker.controller) {
      return;
    }
});
};

export default regsw;