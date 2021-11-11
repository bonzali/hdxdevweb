"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./components/Details.jsx":
/*!********************************!*\
  !*** ./components/Details.jsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\softin\\Desktop\\projects\\hdxdevweb\\components\\Details.jsx";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function Details({
  data
}) {
  const [selection, setUserSelection] = react__WEBPACK_IMPORTED_MODULE_0___default().useState({
    colorIndex: 0,
    sizeIndex: 0
  });
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: `col-sm-12 col-md-7 Details `,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "p-4 p-md-0 pt-md-5",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "d-flex",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "flex-fill",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
            className: "item-name",
            children: data.title
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 24
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "avatar d-flex",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "name details-title",
            children: "Xels trends"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 24
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              alt: "Xels profile",
              src: "/images/bg2.jpg"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 30
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 24
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "item-details details-title",
        children: data.details.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: item
        }, `detail-${i}`, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 51
        }, this))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "mb-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "details-title",
          children: "Select Color"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-flex item-colors mt-1 ",
          children: data.colors.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            onClick: () => setUserSelection(_objectSpread(_objectSpread({}, selection), {}, {
              colorIndex: i
            })),
            className: selection.colorIndex === i ? 'active' : "",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
              style: {
                background: `${item}`
              },
              children: " "
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 28
            }, this)
          }, `color-${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 54
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "mb-2",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "details-title",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "mr-5",
            children: "Select Size"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 24
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
            className: "text-danger",
            children: "Size Guide"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 24
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 20
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "d-flex item-sizes mt-1 ",
          children: data.sizes.map((item, i) => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
            onClick: () => setUserSelection(_objectSpread(_objectSpread({}, selection), {}, {
              sizeIndex: i
            })),
            className: selection.sizeIndex === i ? 'active' : "",
            children: item
          }, `color-${i}`, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 53
          }, this))
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 20
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        children: data.description
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 16
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: 'item-options d-flex justify-content-around p-2 mt-1',
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: "Option 1"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: "Option 2"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
          children: "Option 3"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 16
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 12
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Details);

/***/ }),

/***/ "./components/ImageComponent.jsx":
/*!***************************************!*\
  !*** ./components/ImageComponent.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\softin\\Desktop\\projects\\hdxdevweb\\components\\ImageComponent.jsx";



function ImageComponent({
  images
}) {
  const [previewImageIndex, setPreviewImageIndex] = react__WEBPACK_IMPORTED_MODULE_0___default().useState(2);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: 'col-sm-12 col-md-5 mb-5',
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "d-flex",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: " item-images",
          children: [images.map((item, i) => {
            return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
              alt: "image",
              src: item,
              width: "50",
              onClick: () => setPreviewImageIndex(i),
              className: `img-fluid ${previewImageIndex === i ? 'active' : ""}`
            }, i.toString(), false, {
              fileName: _jsxFileName,
              lineNumber: 11,
              columnNumber: 33
            }, this);
          }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "flex-fill preview",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
          alt: "image preview",
          className: "",
          src: images[previewImageIndex]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "img-border",
          children: " "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageComponent);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var _components_ImageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/ImageComponent */ "./components/ImageComponent.jsx");
/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Details */ "./components/Details.jsx");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\softin\\Desktop\\projects\\hdxdevweb\\pages\\index.js";



function Home({
  item
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
    className: "main",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
      className: "mx-auto col-sm-12 col-xl-10 pt-2 content",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("div", {
        className: "row g-0",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ImageComponent__WEBPACK_IMPORTED_MODULE_0__.default, {
          images: item.images
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 14
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_Details__WEBPACK_IMPORTED_MODULE_1__.default, {
          data: item
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 14
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 10
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, this);
}
async function getStaticProps() {
  const data = {
    title: 'Host Lequite Artisic',
    details: ['Formal Wears', 'Available', '100 Cotton'],
    colors: ['#ffffff', "#ce9314", "#CE1F14FF"],
    sizes: [11, 12, 13, 15],
    images: ['/images/bg1.jpeg', '/images/bg2.jpg', '/images/bg1.jpeg'],
    description: `orem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid.`
  };
  return {
    props: {
      item: data
    }
  };
}

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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NkJBQ0c7QUFBSyxpQkFBUyxFQUFDLFNBQWY7QUFBQSxnQ0FDSSw4REFBQywrREFBRDtBQUFnQixnQkFBTSxFQUFFQSxJQUFJLENBQUNPO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREosZUFFSSw4REFBQyx3REFBRDtBQUFTLGNBQUksRUFBRVA7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFXRDtBQUVNLGVBQWVZLGNBQWYsR0FBK0I7QUFDbEMsUUFBTXJCLElBQUksR0FBRztBQUNUTSxJQUFBQSxLQUFLLEVBQUUsc0JBREU7QUFFVEMsSUFBQUEsT0FBTyxFQUFFLENBQUMsY0FBRCxFQUFpQixXQUFqQixFQUE4QixZQUE5QixDQUZBO0FBR1RJLElBQUFBLE1BQU0sRUFBRSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFdBQXZCLENBSEM7QUFJVEUsSUFBQUEsS0FBSyxFQUFHLENBQUMsRUFBRCxFQUFJLEVBQUosRUFBTyxFQUFQLEVBQVUsRUFBVixDQUpDO0FBS1RHLElBQUFBLE1BQU0sRUFBRyxDQUFDLGtCQUFELEVBQXNCLGlCQUF0QixFQUF5QyxrQkFBekMsQ0FMQTtBQU1URixJQUFBQSxXQUFXLEVBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWmlCLEdBQWI7QUFnQkEsU0FBTztBQUNIUSxJQUFBQSxLQUFLLEVBQUc7QUFDSmIsTUFBQUEsSUFBSSxFQUFFVDtBQURGO0FBREwsR0FBUDtBQUtIOzs7Ozs7Ozs7O0FDeENEOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oZHhkZXZ3ZWIvLi9jb21wb25lbnRzL0RldGFpbHMuanN4Iiwid2VicGFjazovL2hkeGRldndlYi8uL2NvbXBvbmVudHMvSW1hZ2VDb21wb25lbnQuanN4Iiwid2VicGFjazovL2hkeGRldndlYi8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL2hkeGRldndlYi9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vaGR4ZGV2d2ViL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcblxyXG5cclxuZnVuY3Rpb24gRGV0YWlscyh7ZGF0YX0pIHtcclxuICAgIGNvbnN0IFtzZWxlY3Rpb24sIHNldFVzZXJTZWxlY3Rpb25dID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgICAgIGNvbG9ySW5kZXg6IDAsXHJcbiAgICAgICAgc2l6ZUluZGV4OiAwLFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLXNtLTEyIGNvbC1tZC03IERldGFpbHMgYH0+XHJcbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTQgcC1tZC0wIHB0LW1kLTVcIj5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1maWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cIml0ZW0tbmFtZVwiPntkYXRhLnRpdGxlfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXZhdGFyIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hbWUgZGV0YWlscy10aXRsZVwiPlhlbHMgdHJlbmRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPjxpbWcgYWx0PVwiWGVscyBwcm9maWxlXCIgc3JjPXtcIi9pbWFnZXMvYmcyLmpwZ1wifS8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtLWRldGFpbHMgZGV0YWlscy10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAge2RhdGEuZGV0YWlscy5tYXAoKGl0ZW0sIGkpID0+IDxzcGFuIGtleT17YGRldGFpbC0ke2l9YH0+e2l0ZW19PC9zcGFuPil9XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGV0YWlscy10aXRsZVwiPlNlbGVjdCBDb2xvcjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggaXRlbS1jb2xvcnMgbXQtMSBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5jb2xvcnMubWFwKChpdGVtLCBpKSA9PiA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFVzZXJTZWxlY3Rpb24oey4uLnNlbGVjdGlvbiAsIGNvbG9ySW5kZXggOiBpfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c2VsZWN0aW9uLmNvbG9ySW5kZXggPT09IGkgPyAnYWN0aXZlJyA6IFwiXCJ9ICBrZXk9e2Bjb2xvci0ke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kIDogYCR7aXRlbX1gfX0gPiA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4pfVxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTInPlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxzLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItNVwiPlNlbGVjdCBTaXplPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+U2l6ZSBHdWlkZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggaXRlbS1zaXplcyBtdC0xIFwiID5cclxuICAgICAgICAgICAgICAgICAgICAgICB7ZGF0YS5zaXplcy5tYXAoKGl0ZW0sIGkpID0+IDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VXNlclNlbGVjdGlvbih7Li4uc2VsZWN0aW9uICwgc2l6ZUluZGV4IDogaX0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3NlbGVjdGlvbi5zaXplSW5kZXggPT09IGkgPyAnYWN0aXZlJyA6IFwiXCJ9ICBrZXk9e2Bjb2xvci0ke2l9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2Pil9XHJcbiAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgPHA+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxyXG5cclxuICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydpdGVtLW9wdGlvbnMgZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmQgcC0yIG10LTEnfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PcHRpb24gMTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PcHRpb24gMjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PcHRpb24gMzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsczsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5mdW5jdGlvbiBJbWFnZUNvbXBvbmVudCh7aW1hZ2VzfSkge1xyXG4gICAgY29uc3QgW3ByZXZpZXdJbWFnZUluZGV4ICwgc2V0UHJldmlld0ltYWdlSW5kZXhdID0gUmVhY3QudXNlU3RhdGUoMilcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb2wtc20tMTIgY29sLW1kLTUgbWItNSd9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBpdGVtLWltYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aW1hZ2VzLm1hcCgoaXRlbSAsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBhbHQ9XCJpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjUwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFByZXZpZXdJbWFnZUluZGV4KGkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgaW1nLWZsdWlkICR7cHJldmlld0ltYWdlSW5kZXggPT09IGkgPyAnYWN0aXZlJyA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aS50b1N0cmluZygpfS8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Lz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWZpbGwgcHJldmlld1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImltYWdlIHByZXZpZXdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2ltYWdlc1twcmV2aWV3SW1hZ2VJbmRleF19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1ib3JkZXJcIj4gPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDb21wb25lbnQ7IiwiXG5pbXBvcnQgSW1hZ2VDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudHMvSW1hZ2VDb21wb25lbnRcIjtcbmltcG9ydCBEZXRhaWxzIGZyb20gXCIuLi9jb21wb25lbnRzL0RldGFpbHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7aXRlbX0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gY29sLXNtLTEyIGNvbC14bC0xMCBwdC0yIGNvbnRlbnRcIj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGctMFwiPlxuICAgICAgICAgICAgIDxJbWFnZUNvbXBvbmVudCBpbWFnZXM9e2l0ZW0uaW1hZ2VzfS8+XG4gICAgICAgICAgICAgPERldGFpbHMgZGF0YT17aXRlbX0vPlxuICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgXG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgdGl0bGU6ICdIb3N0IExlcXVpdGUgQXJ0aXNpYycsXG4gICAgICAgIGRldGFpbHM6IFsnRm9ybWFsIFdlYXJzJywgJ0F2YWlsYWJsZScsICcxMDAgQ290dG9uJ10sXG4gICAgICAgIGNvbG9yczogWycjZmZmZmZmJywgXCIjY2U5MzE0XCIsIFwiI0NFMUYxNEZGXCJdLFxuICAgICAgICBzaXplcyA6IFsxMSwxMiwxMywxNV0gLFxuICAgICAgICBpbWFnZXMgOiBbJy9pbWFnZXMvYmcxLmpwZWcnICwgJy9pbWFnZXMvYmcyLmpwZycsICcvaW1hZ2VzL2JnMS5qcGVnJyAsXSxcbiAgICAgICAgZGVzY3JpcHRpb24gOiBgb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBNYXhpbWUgbW9sbGl0aWEsXG4gICAgICBtb2xlc3RpYWUgcXVhcyB2ZWwgc2ludCBjb21tb2RpIHJlcHVkaWFuZGFlIGNvbnNlcXV1bnR1ciB2b2x1cHRhdHVtIGxhYm9ydW1cbiAgICAgICAgbnVtcXVhbSBibGFuZGl0aWlzIGhhcnVtIHF1aXNxdWFtIGVpdXMgc2VkIG9kaXQgZnVnaWF0IGl1c3RvIGZ1Z2EgcHJhZXNlbnRpdW1cbm9wdGlvLCBlYXF1ZSByZXJ1bSEgUHJvdmlkZW50IHNpbWlsaXF1ZSBhY2N1c2FudGl1bSBuZW1vIGF1dGVtLiBWZXJpdGF0aXNcbm9iY2FlY2F0aSB0ZW5ldHVyIGl1cmUgZWl1cyBlYXJ1bSB1dCBtb2xlc3RpYXMgYXJjaGl0ZWN0byB2b2x1cHRhdGUgYWxpcXVhbVxubmloaWwsIGV2ZW5pZXQgYWxpcXVpZCBjdWxwYSBvZmZpY2lhIGF1dCEgSW1wZWRpdCBzaXQgc3VudCBxdWFlcmF0LCBvZGl0LFxudGVuZXR1ciBlcnJvciwgaGFydW0gbmVzY2l1bnQgaXBzdW0gZGViaXRpcyBxdWFzIGFsaXF1aWQuYFxuXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHMgOiB7XG4gICAgICAgICAgICBpdGVtOiBkYXRhXG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIlJlYWN0IiwiRGV0YWlscyIsImRhdGEiLCJzZWxlY3Rpb24iLCJzZXRVc2VyU2VsZWN0aW9uIiwidXNlU3RhdGUiLCJjb2xvckluZGV4Iiwic2l6ZUluZGV4IiwidGl0bGUiLCJkZXRhaWxzIiwibWFwIiwiaXRlbSIsImkiLCJjb2xvcnMiLCJiYWNrZ3JvdW5kIiwic2l6ZXMiLCJkZXNjcmlwdGlvbiIsIkltYWdlQ29tcG9uZW50IiwiaW1hZ2VzIiwicHJldmlld0ltYWdlSW5kZXgiLCJzZXRQcmV2aWV3SW1hZ2VJbmRleCIsInRvU3RyaW5nIiwiSG9tZSIsImdldFN0YXRpY1Byb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9