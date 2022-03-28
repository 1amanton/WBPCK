/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./analytics.ts ***!
  \**********************/
var createAnalytics = function createAnalytics() {
  var counter = 0;
  var isDestroyed = false;
  console.log(isDestroyed);

  var listener = function listener() {
    return counter++;
  };

  document.addEventListener("click", listener);
  return {
    destroy: function destroy() {
      document.removeEventListener("click", listener);
      isDestroyed = true;
    },
    getClicks: function getClicks() {
      if (isDestroyed) {
        return "Analytics is destroyed. Total clicks = ".concat(counter);
      }

      return counter;
    }
  };
};

window["analytics"] = createAnalytics();
/******/ })()
;
//# sourceMappingURL=analytics.js.map