webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _welcome = __webpack_require__(1);

	var _welcome2 = _interopRequireDefault(_welcome);

	var _export = __webpack_require__(5);

	var _export2 = _interopRequireDefault(_export);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/*examples of import/export*/


	console.log(_export.func, 'func');
	console.log(_export2.default, 'funcDefault');
	console.log(_export.ClassSimple, 'ClassSimple');
	console.log(_export2.default, 'ClassDefault');

	/************************/

		(0, _welcome2.default)("home");

/***/ },

/***/ 5:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.func = func;
	exports.default = funcDefault;

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function func() {
	    console.log("function Declaration");
	}

	function funcDefault() {
	    console.log("function Declaration Default");
	}

	var ClassSimple = exports.ClassSimple = function ClassSimple() {
	    _classCallCheck(this, ClassSimple);

	    console.log('ClassSimple');
	};

	var ClassDefault = function ClassDefault() {
	    _classCallCheck(this, ClassDefault);

	    console.log('ClassDefault');
	};

		exports.default = ClassDefault;

/***/ }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9kZXYvanMvbW9kdWxlcy9ob21lLmpzIiwid2VicGFjazovLy9kZXYvanMvbW9kdWxlcy9leHBvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG5pbXBvcnQgd2VsY29tZSBmcm9tIFwiLi93ZWxjb21lXCI7XHJcblxyXG4vKmV4YW1wbGVzIG9mIGltcG9ydC9leHBvcnQqL1xyXG5pbXBvcnQge2Z1bmN9IGZyb20gXCIuL2V4cG9ydFwiO1xyXG5pbXBvcnQgZnVuY0RlZmF1bHQgZnJvbSBcIi4vZXhwb3J0XCI7XHJcbmltcG9ydCB7Q2xhc3NTaW1wbGV9IGZyb20gXCIuL2V4cG9ydFwiO1xyXG5pbXBvcnQgQ2xhc3NEZWZhdWx0IGZyb20gXCIuL2V4cG9ydFwiO1xyXG5cclxuY29uc29sZS5sb2coZnVuYywgJ2Z1bmMnKTtcclxuY29uc29sZS5sb2coZnVuY0RlZmF1bHQsICdmdW5jRGVmYXVsdCcpO1xyXG5jb25zb2xlLmxvZyhDbGFzc1NpbXBsZSwgJ0NsYXNzU2ltcGxlJyk7XHJcbmNvbnNvbGUubG9nKENsYXNzRGVmYXVsdCwgJ0NsYXNzRGVmYXVsdCcpO1xyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG53ZWxjb21lKFwiaG9tZVwiKTtcclxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogZGV2L2pzL21vZHVsZXMvaG9tZS5qc1xuICoqLyIsImV4cG9ydCBmdW5jdGlvbiBmdW5jKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJmdW5jdGlvbiBEZWNsYXJhdGlvblwiKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZnVuY0RlZmF1bHQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImZ1bmN0aW9uIERlY2xhcmF0aW9uIERlZmF1bHRcIik7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBDbGFzc1NpbXBsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnQ2xhc3NTaW1wbGUnKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2xhc3NEZWZhdWx0IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDbGFzc0RlZmF1bHQnKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIGRldi9qcy9tb2R1bGVzL2V4cG9ydC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTs7Ozs7Ozs7Ozs7O0FDbEJBO0FBSUE7QUFDQTs7O0FBTEE7QUFDQTtBQURBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUZBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==