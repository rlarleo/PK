(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/configureStore */ "./store/configureStore.ts");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.scss */ "./styles/global.scss");
/* harmony import */ var _styles_global_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_global_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\angk8\\OneDrive\\\uBC14\uD0D5 \uD654\uBA74\\graduateGUI\\front\\pages\\_app.tsx";






const Graduate = ({
  Component
}) => {
  // const dispatch = useDispatch();
  // const store = useStore();
  // useEffect(() => {}, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)("meta", {
        charSet: "utf-8"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Component, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 7
    }, undefined)]
  }, void 0, true);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store_configureStore__WEBPACK_IMPORTED_MODULE_1__.default.withRedux(Graduate)); // export default Graduate;

/***/ }),

/***/ "./reducers/file.tsx":
/*!***************************!*\
  !*** ./reducers/file.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RESET_REQUEST": () => (/* binding */ RESET_REQUEST),
/* harmony export */   "FILE_SEND_REQUEST": () => (/* binding */ FILE_SEND_REQUEST),
/* harmony export */   "FILE_SEND_SUCCESS": () => (/* binding */ FILE_SEND_SUCCESS),
/* harmony export */   "FILE_SEND_FAILURE": () => (/* binding */ FILE_SEND_FAILURE),
/* harmony export */   "BYTECODE_INDEX_REQUEST": () => (/* binding */ BYTECODE_INDEX_REQUEST),
/* harmony export */   "BYTECODE_INDEX_SUCCESS": () => (/* binding */ BYTECODE_INDEX_SUCCESS),
/* harmony export */   "BYTECODE_INDEX_FAILURE": () => (/* binding */ BYTECODE_INDEX_FAILURE),
/* harmony export */   "BYTE_TO_OPCODE_REQUEST": () => (/* binding */ BYTE_TO_OPCODE_REQUEST),
/* harmony export */   "BYTE_TO_OPCODE_SUCCESS": () => (/* binding */ BYTE_TO_OPCODE_SUCCESS),
/* harmony export */   "BYTE_TO_OPCODE_FAILURE": () => (/* binding */ BYTE_TO_OPCODE_FAILURE),
/* harmony export */   "SET_HEATMAP_REQUEST": () => (/* binding */ SET_HEATMAP_REQUEST),
/* harmony export */   "SET_HEATMAP_SUCCESS": () => (/* binding */ SET_HEATMAP_SUCCESS),
/* harmony export */   "SET_HEATMAP_FAILURE": () => (/* binding */ SET_HEATMAP_FAILURE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  byteFile: null,
  fileName: null,
  opCode: null,
  strIdx: null,
  endIdx: null,
  exploitName: null,
  heatMap: null,
  fileSendDone: false,
  fileSendLoading: false,
  fileSendError: null,
  byteCodeIndexDone: false,
  byteCodeIndexLoading: false,
  byteCodeIndexError: null,
  opCodeGetDone: false,
  opCodeGetLoading: false,
  opCodeGetError: null,
  getHeatMapDone: false,
  getHeatMapLoading: false,
  getHeatMapError: null
};
const RESET_REQUEST = "RESET_REQUEST";
const FILE_SEND_REQUEST = "FILE_SEND_REQUEST";
const FILE_SEND_SUCCESS = "FILE_SEND_SUCCESS";
const FILE_SEND_FAILURE = "FILE_SEND_FAILURE";
const BYTECODE_INDEX_REQUEST = "BYTECODE_INDEX_REQUEST";
const BYTECODE_INDEX_SUCCESS = "BYTECODE_INDEX_SUCCESS";
const BYTECODE_INDEX_FAILURE = "BYTECODE_INDEX_FAILURE";
const BYTE_TO_OPCODE_REQUEST = "BYTE_TO_OPCODE_REQUEST";
const BYTE_TO_OPCODE_SUCCESS = "BYTE_TO_OPCODE_SUCCESS";
const BYTE_TO_OPCODE_FAILURE = "BYTE_TO_OPCODE_FAILURE";
const SET_HEATMAP_REQUEST = "SET_HEATMAP_REQUEST";
const SET_HEATMAP_SUCCESS = "SET_HEATMAP_SUCCESS";
const SET_HEATMAP_FAILURE = "SET_HEATMAP_FAILURE";

const File = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case RESET_REQUEST:
      draft.byteFile = null;
      draft.fileName = null;
      draft.opCode = null;
      draft.strIdx = null;
      draft.endIdx = null;
      draft.exploitName = null;
      draft.heatMap = null;
      break;

    case FILE_SEND_REQUEST:
      draft.byteFile = action.data.file;
      draft.fileName = action.data.fileName;
      draft.fileSendDone = false;
      draft.fileSendLoading = true;
      draft.fileSendError = null;
      break;

    case FILE_SEND_SUCCESS:
      draft.fileSendDone = true;
      draft.fileSendLoading = false;
      draft.fileSendError = null;
      break;

    case FILE_SEND_FAILURE:
      draft.fileSendDone = false;
      draft.fileSendLoading = false;
      draft.fileSendError = action.error;
      break;

    case SET_HEATMAP_REQUEST:
      draft.heatMap = "http://192.168.0.7:5000" + `/gradCAM?file=${action.data.fileName}`;
      draft.getHeatMapDone = false;
      draft.getHeatMapLoading = true;
      draft.getHeatMapError = null;
      break;

    case SET_HEATMAP_SUCCESS:
      draft.getHeatMapDone = true;
      draft.getHeatMapLoading = false;
      draft.getHeatMapError = null;
      break;

    case SET_HEATMAP_FAILURE:
      draft.getHeatMapDone = false;
      draft.getHeatMapLoading = false;
      draft.getHeatMapError = action.error;
      break;

    case BYTECODE_INDEX_REQUEST:
      draft.byteCodeIndexDone = false;
      draft.byteCodeIndexLoading = true;
      draft.byteCodeIndexError = null;
      break;

    case BYTECODE_INDEX_SUCCESS:
      draft.strIdx = action.data.strIdx;
      draft.endIdx = action.data.endIdx;
      draft.exploitName = action.data.exploitName;
      draft.byteCodeIndexDone = true;
      draft.byteCodeIndexLoading = false;
      draft.byteCodeIndexError = null;
      break;

    case BYTECODE_INDEX_FAILURE:
      draft.byteCodeIndexDone = false;
      draft.byteCodeIndexLoading = false;
      draft.byteCodeIndexError = action.error;
      break;

    case BYTE_TO_OPCODE_REQUEST:
      draft.opCodeGetDone = false;
      draft.opCodeGetLoading = true;
      draft.opCodeGetError = null;
      break;

    case BYTE_TO_OPCODE_SUCCESS:
      draft.opCode = action.data.opcode;
      draft.opCodeGetDone = true;
      draft.opCodeGetLoading = false;
      draft.opCodeGetError = null;
      break;

    case BYTE_TO_OPCODE_FAILURE:
      draft.opCodeGetDone = false;
      draft.opCodeGetLoading = false;
      draft.opCodeGetError = action.error;
      break;

    default:
      break;
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);

/***/ }),

/***/ "./reducers/index.tsx":
/*!****************************!*\
  !*** ./reducers/index.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file */ "./reducers/file.tsx");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server */ "./reducers/server.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const rootReducer = (state, action) => {
  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      {
        const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_1__.combineReducers)({
          File: _file__WEBPACK_IMPORTED_MODULE_2__.default,
          Server: _server__WEBPACK_IMPORTED_MODULE_3__.default
        });
        return combinedReducer(state, action);
      }
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootReducer);

/***/ }),

/***/ "./reducers/server.tsx":
/*!*****************************!*\
  !*** ./reducers/server.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SERVER_TEST_REQUEST": () => (/* binding */ SERVER_TEST_REQUEST),
/* harmony export */   "SERVER_TEST_SUCCESS": () => (/* binding */ SERVER_TEST_SUCCESS),
/* harmony export */   "SERVER_TEST_FAILURE": () => (/* binding */ SERVER_TEST_FAILURE),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! immer */ "immer");
/* harmony import */ var immer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(immer__WEBPACK_IMPORTED_MODULE_0__);

const initialState = {
  byteFile: null,
  opCode: null,
  heatMap: null,
  fileSendDone: false,
  fileSendLoading: false,
  fileSendError: null
};
const SERVER_TEST_REQUEST = "SERVER_TEST_REQUEST";
const SERVER_TEST_SUCCESS = "SERVER_TEST_SUCCESS";
const SERVER_TEST_FAILURE = "SERVER_TEST_FAILURE";

const File = (state = initialState, action) => immer__WEBPACK_IMPORTED_MODULE_0___default()(state, draft => {
  switch (action.type) {
    case SERVER_TEST_REQUEST:
      break;

    case SERVER_TEST_SUCCESS:
      console.log(action.data);
      break;

    case SERVER_TEST_FAILURE:
      break;

    default:
      break;
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (File);

/***/ }),

/***/ "./sagas/file.tsx":
/*!************************!*\
  !*** ./sagas/file.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reducers_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers/file */ "./reducers/file.tsx");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = "http://192.168.0.7:5000";

function fileSendAPI(data) {
  const form = new FormData();
  form.append("file", data);
  return axios__WEBPACK_IMPORTED_MODULE_0___default().post(`/uploader`, form, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}

function* fileSend(action) {
  try {
    const response = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.call)(fileSendAPI, action.data.file);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_file__WEBPACK_IMPORTED_MODULE_1__.FILE_SEND_SUCCESS,
      data: response.data
    });
    yield alert("파일 전송 완료!");
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_file__WEBPACK_IMPORTED_MODULE_1__.FILE_SEND_FAILURE,
      error: err
    });
  }
}

function* watchFileSend() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(reducers_file__WEBPACK_IMPORTED_MODULE_1__.FILE_SEND_REQUEST, fileSend);
}

function runGradCAMAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/gradCAM?file=${data.fileName}`, {
    headers: {
      responseType: "arraybuffer"
    }
  });
}

function* runGradCAM(action) {
  try {
    const response = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.call)(runGradCAMAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_file__WEBPACK_IMPORTED_MODULE_1__.SET_HEATMAP_SUCCESS,
      data: response.data
    });
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_file__WEBPACK_IMPORTED_MODULE_1__.BYTECODE_INDEX_REQUEST,
      data: {
        fileName: action.data.fileName
      }
    });
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_file__WEBPACK_IMPORTED_MODULE_1__.SET_HEATMAP_FAILURE,
      error: err
    });
  }
}

function* watchRunGradCAM() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(reducers_file__WEBPACK_IMPORTED_MODULE_1__.SET_HEATMAP_REQUEST, runGradCAM);
}

function getByteCodeAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/byteCode?file=${data.fileName}`);
}

function* getByteCode(action) {
  try {
    const response = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.call)(getByteCodeAPI, action.data);
    let exploitName = "";

    if (response.data.exploitName) {
      switch (response.data.exploitName) {
        case 1:
          exploitName = "1. Ramnit";
          break;

        case 2:
          exploitName = "2. Lollipop";
          break;

        case 3:
          exploitName = "3.	Kelihos_ver3";
          break;

        case 4:
          exploitName = "4.	Vundo";
          break;

        case 5:
          exploitName = "5.	Simda";
          break;

        case 6:
          exploitName = "6.	Tracur";
          break;

        case 7:
          exploitName = "7.	Kelihos_ver1";
          break;

        case 8:
          exploitName = "8.	Obfuscator.ACY";
          break;

        case 9:
          exploitName = "9.	Gatak";
          break;
      }
    }

    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_file__WEBPACK_IMPORTED_MODULE_1__.BYTECODE_INDEX_SUCCESS,
      data: _objectSpread(_objectSpread({}, response.data), {}, {
        exploitName: exploitName
      })
    });
    yield alert("op code를 확인하세요");
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_file__WEBPACK_IMPORTED_MODULE_1__.BYTECODE_INDEX_FAILURE,
      error: err
    });
  }
}

function* watchGetByteCode() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(reducers_file__WEBPACK_IMPORTED_MODULE_1__.BYTECODE_INDEX_REQUEST, getByteCode);
}

function byteToOPAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/opCode?file=${data.fileName}&strIdx=${data.strIdx}&endIdx=${data.endIdx}`);
}

function* byteToOP(action) {
  try {
    const response = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.call)(byteToOPAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_file__WEBPACK_IMPORTED_MODULE_1__.BYTE_TO_OPCODE_SUCCESS,
      data: response.data
    });
    yield alert("op code 변환 및 수신 완료");
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_file__WEBPACK_IMPORTED_MODULE_1__.BYTE_TO_OPCODE_FAILURE,
      error: err
    });
  }
}

function* watchByteToOp() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(reducers_file__WEBPACK_IMPORTED_MODULE_1__.BYTE_TO_OPCODE_REQUEST, byteToOP);
}

function* File() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.fork)(watchFileSend), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.fork)(watchGetByteCode), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.fork)(watchRunGradCAM), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.fork)(watchByteToOp)]);
}

/***/ }),

/***/ "./sagas/index.tsx":
/*!*************************!*\
  !*** ./sagas/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rootSaga)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _file__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./file */ "./sagas/file.tsx");
/* harmony import */ var _server__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server */ "./sagas/server.tsx");




(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.withCredentials) = true;
function* rootSaga() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(_file__WEBPACK_IMPORTED_MODULE_2__.default), (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_1__.fork)(_server__WEBPACK_IMPORTED_MODULE_3__.default)]);
}

/***/ }),

/***/ "./sagas/server.tsx":
/*!**************************!*\
  !*** ./sagas/server.tsx ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ File)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reducers_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reducers/server */ "./reducers/server.tsx");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__);



(axios__WEBPACK_IMPORTED_MODULE_0___default().defaults.baseURL) = "http://192.168.0.7:5000";

function serverTestAPI(data) {
  return axios__WEBPACK_IMPORTED_MODULE_0___default().get(`/serverTest`, {
    headers: {
      withCredentials: true
    }
  });
}

function* serverTest(action) {
  try {
    const response = yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.call)(serverTestAPI, action.data);
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_server__WEBPACK_IMPORTED_MODULE_1__.SERVER_TEST_SUCCESS,
      data: response.data
    });
    yield alert(response.data);
  } catch (err) {
    yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.put)({
      type: reducers_server__WEBPACK_IMPORTED_MODULE_1__.SERVER_TEST_FAILURE,
      error: err
    });
  }
}

function* watchserverTest() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.takeLatest)(reducers_server__WEBPACK_IMPORTED_MODULE_1__.SERVER_TEST_REQUEST, serverTest);
}

function* File() {
  yield (0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.all)([(0,redux_saga_effects__WEBPACK_IMPORTED_MODULE_2__.fork)(watchserverTest)]);
}

/***/ }),

/***/ "./store/configureStore.ts":
/*!*********************************!*\
  !*** ./store/configureStore.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "configureStore": () => (/* binding */ configureStore),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ "./sagas/index.tsx");
/* harmony import */ var _reducers_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/index */ "./reducers/index.tsx");







const loggerMiddleware = ({
  dispatch,
  getState
}) => next => action => {
  console.log(action);
  return next(action);
};

const configureStore = () => {
  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();
  let middlewares = [sagaMiddleware];
  if (true) middlewares = [...middlewares, loggerMiddleware];
  const enhancer =  false ? 0 : (0,redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__.composeWithDevTools)((0,redux__WEBPACK_IMPORTED_MODULE_1__.applyMiddleware)(...middlewares));
  const store = (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(_reducers_index__WEBPACK_IMPORTED_MODULE_5__.default, enhancer);
  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__.default);
  return store;
};
const wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(configureStore, {
  debug: true
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (wrapper);

/***/ }),

/***/ "./styles/global.scss":
/*!****************************!*\
  !*** ./styles/global.scss ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ "immer":
/*!************************!*\
  !*** external "immer" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("immer");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux-saga/effects");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE1BQVo7QUFDQSxTQUFPa0UsSUFBSSxDQUFDbEUsTUFBRCxDQUFYO0FBQ0QsQ0FIRDs7QUFLTyxNQUFNbUUsY0FBYyxHQUFHLE1BQU07QUFDbEMsUUFBTUMsY0FBYyxHQUFHUCxpREFBb0IsRUFBM0M7QUFDQSxNQUFJUSxXQUFnQixHQUFHLENBQUNELGNBQUQsQ0FBdkI7QUFDQSxZQUEyQ0MsV0FBVyxHQUFHLENBQUMsR0FBR0EsV0FBSixFQUFpQk4sZ0JBQWpCLENBQWQ7QUFDM0MsUUFBTU8sUUFBUSxHQUFHLFNBQXVDWixDQUF2QyxHQUFrRkUsNkVBQW1CLENBQUNILHNEQUFlLENBQUMsR0FBR1ksV0FBSixDQUFoQixDQUF0SDtBQUNBLFFBQU1FLEtBQVUsR0FBR1osa0RBQVcsQ0FBQ0csb0RBQUQsRUFBVVEsUUFBVixDQUE5QjtBQUVBQyxFQUFBQSxLQUFLLENBQUNDLFFBQU4sR0FBaUJKLGNBQWMsQ0FBQ0ssR0FBZixDQUFtQnJCLDJDQUFuQixDQUFqQjtBQUNBLFNBQU9tQixLQUFQO0FBQ0QsQ0FUTTtBQVdQLE1BQU0vRyxPQUFPLEdBQUdnRyxpRUFBYSxDQUFDVyxjQUFELEVBQWlCO0FBQzVDTyxFQUFBQSxLQUFLO0FBRHVDLENBQWpCLENBQTdCO0FBSUEsaUVBQWVsSCxPQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ncmFkdWF0ZS1mcm9udC8uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovL2dyYWR1YXRlLWZyb250Ly4vcmVkdWNlcnMvZmlsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZHVhdGUtZnJvbnQvLi9yZWR1Y2Vycy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZ3JhZHVhdGUtZnJvbnQvLi9yZWR1Y2Vycy9zZXJ2ZXIudHN4Iiwid2VicGFjazovL2dyYWR1YXRlLWZyb250Ly4vc2FnYXMvZmlsZS50c3giLCJ3ZWJwYWNrOi8vZ3JhZHVhdGUtZnJvbnQvLi9zYWdhcy9pbmRleC50c3giLCJ3ZWJwYWNrOi8vZ3JhZHVhdGUtZnJvbnQvLi9zYWdhcy9zZXJ2ZXIudHN4Iiwid2VicGFjazovL2dyYWR1YXRlLWZyb250Ly4vc3RvcmUvY29uZmlndXJlU3RvcmUudHMiLCJ3ZWJwYWNrOi8vZ3JhZHVhdGUtZnJvbnQvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2dyYWR1YXRlLWZyb250L2V4dGVybmFsIFwiaW1tZXJcIiIsIndlYnBhY2s6Ly9ncmFkdWF0ZS1mcm9udC9leHRlcm5hbCBcIm5leHQtcmVkdXgtd3JhcHBlclwiIiwid2VicGFjazovL2dyYWR1YXRlLWZyb250L2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vZ3JhZHVhdGUtZnJvbnQvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9ncmFkdWF0ZS1mcm9udC9leHRlcm5hbCBcInJlZHV4XCIiLCJ3ZWJwYWNrOi8vZ3JhZHVhdGUtZnJvbnQvZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIiIsIndlYnBhY2s6Ly9ncmFkdWF0ZS1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2FcIiIsIndlYnBhY2s6Ly9ncmFkdWF0ZS1mcm9udC9leHRlcm5hbCBcInJlZHV4LXNhZ2EvZWZmZWN0c1wiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFByb3BzIH0gZnJvbSBcIm5leHQvYXBwXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IHdyYXBwZXIgZnJvbSBcIi4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlXCI7XHJcbmltcG9ydCB3aXRoUmVkdXhTYWdhIGZyb20gXCJuZXh0LXJlZHV4LXNhZ2FcIjtcclxuaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbC5zY3NzXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciwgdXNlU3RvcmUgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb290U3RhdGUgfSBmcm9tIFwiLi4vcmVkdWNlcnNcIjtcclxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuY29uc3QgR3JhZHVhdGUgPSAoeyBDb21wb25lbnQgfTogQXBwUHJvcHMpID0+IHtcclxuICAvLyBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcblxyXG4gIC8vIGNvbnN0IHN0b3JlID0gdXNlU3RvcmUoKTtcclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHt9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZD5cclxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxDb21wb25lbnQgLz5cclxuICAgIDwvPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXIud2l0aFJlZHV4KEdyYWR1YXRlKTtcclxuLy8gZXhwb3J0IGRlZmF1bHQgR3JhZHVhdGU7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGJ5dGVGaWxlOiBudWxsLFxyXG4gIGZpbGVOYW1lOiBudWxsLFxyXG4gIG9wQ29kZTogbnVsbCxcclxuICBzdHJJZHg6IG51bGwsXHJcbiAgZW5kSWR4OiBudWxsLFxyXG4gIGV4cGxvaXROYW1lOiBudWxsLFxyXG4gIGhlYXRNYXA6IG51bGwsXHJcblxyXG4gIGZpbGVTZW5kRG9uZTogZmFsc2UsXHJcbiAgZmlsZVNlbmRMb2FkaW5nOiBmYWxzZSxcclxuICBmaWxlU2VuZEVycm9yOiBudWxsLFxyXG5cclxuICBieXRlQ29kZUluZGV4RG9uZTogZmFsc2UsXHJcbiAgYnl0ZUNvZGVJbmRleExvYWRpbmc6IGZhbHNlLFxyXG4gIGJ5dGVDb2RlSW5kZXhFcnJvcjogbnVsbCxcclxuXHJcbiAgb3BDb2RlR2V0RG9uZTogZmFsc2UsXHJcbiAgb3BDb2RlR2V0TG9hZGluZzogZmFsc2UsXHJcbiAgb3BDb2RlR2V0RXJyb3I6IG51bGwsXHJcblxyXG4gIGdldEhlYXRNYXBEb25lOiBmYWxzZSxcclxuICBnZXRIZWF0TWFwTG9hZGluZzogZmFsc2UsXHJcbiAgZ2V0SGVhdE1hcEVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IFJFU0VUX1JFUVVFU1QgPSBcIlJFU0VUX1JFUVVFU1RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBGSUxFX1NFTkRfUkVRVUVTVCA9IFwiRklMRV9TRU5EX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEZJTEVfU0VORF9TVUNDRVNTID0gXCJGSUxFX1NFTkRfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgRklMRV9TRU5EX0ZBSUxVUkUgPSBcIkZJTEVfU0VORF9GQUlMVVJFXCI7XHJcblxyXG5leHBvcnQgY29uc3QgQllURUNPREVfSU5ERVhfUkVRVUVTVCA9IFwiQllURUNPREVfSU5ERVhfUkVRVUVTVFwiO1xyXG5leHBvcnQgY29uc3QgQllURUNPREVfSU5ERVhfU1VDQ0VTUyA9IFwiQllURUNPREVfSU5ERVhfU1VDQ0VTU1wiO1xyXG5leHBvcnQgY29uc3QgQllURUNPREVfSU5ERVhfRkFJTFVSRSA9IFwiQllURUNPREVfSU5ERVhfRkFJTFVSRVwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEJZVEVfVE9fT1BDT0RFX1JFUVVFU1QgPSBcIkJZVEVfVE9fT1BDT0RFX1JFUVVFU1RcIjtcclxuZXhwb3J0IGNvbnN0IEJZVEVfVE9fT1BDT0RFX1NVQ0NFU1MgPSBcIkJZVEVfVE9fT1BDT0RFX1NVQ0NFU1NcIjtcclxuZXhwb3J0IGNvbnN0IEJZVEVfVE9fT1BDT0RFX0ZBSUxVUkUgPSBcIkJZVEVfVE9fT1BDT0RFX0ZBSUxVUkVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTRVRfSEVBVE1BUF9SRVFVRVNUID0gXCJTRVRfSEVBVE1BUF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfSEVBVE1BUF9TVUNDRVNTID0gXCJTRVRfSEVBVE1BUF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTRVRfSEVBVE1BUF9GQUlMVVJFID0gXCJTRVRfSEVBVE1BUF9GQUlMVVJFXCI7XHJcblxyXG5jb25zdCBGaWxlID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBSRVNFVF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmJ5dGVGaWxlID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5maWxlTmFtZSA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQub3BDb2RlID0gbnVsbDtcclxuICAgICAgICBkcmFmdC5zdHJJZHggPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmVuZElkeCA9IG51bGw7XHJcbiAgICAgICAgZHJhZnQuZXhwbG9pdE5hbWUgPSBudWxsO1xyXG4gICAgICAgIGRyYWZ0LmhlYXRNYXAgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEZJTEVfU0VORF9SRVFVRVNUOlxyXG4gICAgICAgIGRyYWZ0LmJ5dGVGaWxlID0gYWN0aW9uLmRhdGEuZmlsZTtcclxuICAgICAgICBkcmFmdC5maWxlTmFtZSA9IGFjdGlvbi5kYXRhLmZpbGVOYW1lO1xyXG4gICAgICAgIGRyYWZ0LmZpbGVTZW5kRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmZpbGVTZW5kTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgZHJhZnQuZmlsZVNlbmRFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgRklMRV9TRU5EX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuZmlsZVNlbmREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5maWxlU2VuZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5maWxlU2VuZEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBGSUxFX1NFTkRfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5maWxlU2VuZERvbmUgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5maWxlU2VuZExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5maWxlU2VuZEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFVF9IRUFUTUFQX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQuaGVhdE1hcCA9IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCArIGAvZ3JhZENBTT9maWxlPSR7YWN0aW9uLmRhdGEuZmlsZU5hbWV9YDtcclxuICAgICAgICBkcmFmdC5nZXRIZWF0TWFwRG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmdldEhlYXRNYXBMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5nZXRIZWF0TWFwRXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFVF9IRUFUTUFQX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuZ2V0SGVhdE1hcERvbmUgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0LmdldEhlYXRNYXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZ2V0SGVhdE1hcEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBTRVRfSEVBVE1BUF9GQUlMVVJFOlxyXG4gICAgICAgIGRyYWZ0LmdldEhlYXRNYXBEb25lID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuZ2V0SGVhdE1hcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5nZXRIZWF0TWFwRXJyb3IgPSBhY3Rpb24uZXJyb3I7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQllURUNPREVfSU5ERVhfUkVRVUVTVDpcclxuICAgICAgICBkcmFmdC5ieXRlQ29kZUluZGV4RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmJ5dGVDb2RlSW5kZXhMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5ieXRlQ29kZUluZGV4RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEJZVEVDT0RFX0lOREVYX1NVQ0NFU1M6XHJcbiAgICAgICAgZHJhZnQuc3RySWR4ID0gYWN0aW9uLmRhdGEuc3RySWR4O1xyXG4gICAgICAgIGRyYWZ0LmVuZElkeCA9IGFjdGlvbi5kYXRhLmVuZElkeDtcclxuICAgICAgICBkcmFmdC5leHBsb2l0TmFtZSA9IGFjdGlvbi5kYXRhLmV4cGxvaXROYW1lO1xyXG4gICAgICAgIGRyYWZ0LmJ5dGVDb2RlSW5kZXhEb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5ieXRlQ29kZUluZGV4TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmJ5dGVDb2RlSW5kZXhFcnJvciA9IG51bGw7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQllURUNPREVfSU5ERVhfRkFJTFVSRTpcclxuICAgICAgICBkcmFmdC5ieXRlQ29kZUluZGV4RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0LmJ5dGVDb2RlSW5kZXhMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQuYnl0ZUNvZGVJbmRleEVycm9yID0gYWN0aW9uLmVycm9yO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEJZVEVfVE9fT1BDT0RFX1JFUVVFU1Q6XHJcbiAgICAgICAgZHJhZnQub3BDb2RlR2V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm9wQ29kZUdldExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIGRyYWZ0Lm9wQ29kZUdldEVycm9yID0gbnVsbDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBCWVRFX1RPX09QQ09ERV9TVUNDRVNTOlxyXG4gICAgICAgIGRyYWZ0Lm9wQ29kZSA9IGFjdGlvbi5kYXRhLm9wY29kZTtcclxuICAgICAgICBkcmFmdC5vcENvZGVHZXREb25lID0gdHJ1ZTtcclxuICAgICAgICBkcmFmdC5vcENvZGVHZXRMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgZHJhZnQub3BDb2RlR2V0RXJyb3IgPSBudWxsO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIEJZVEVfVE9fT1BDT0RFX0ZBSUxVUkU6XHJcbiAgICAgICAgZHJhZnQub3BDb2RlR2V0RG9uZSA9IGZhbHNlO1xyXG4gICAgICAgIGRyYWZ0Lm9wQ29kZUdldExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBkcmFmdC5vcENvZGVHZXRFcnJvciA9IGFjdGlvbi5lcnJvcjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZpbGU7XHJcbiIsImltcG9ydCB7IEhZRFJBVEUgfSBmcm9tIFwibmV4dC1yZWR1eC13cmFwcGVyXCI7XHJcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gXCJyZWR1eFwiO1xyXG5pbXBvcnQgRmlsZSBmcm9tIFwiLi9maWxlXCI7XHJcbmltcG9ydCBTZXJ2ZXIgZnJvbSBcIi4vc2VydmVyXCI7XHJcblxyXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBIWURSQVRFOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfTtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcclxuICAgICAgICBGaWxlLFxyXG4gICAgICAgIFNlcnZlcixcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgUm9vdFN0YXRlID0gUmV0dXJuVHlwZTx0eXBlb2Ygcm9vdFJlZHVjZXI+O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XHJcbiIsImltcG9ydCBwcm9kdWNlIGZyb20gXCJpbW1lclwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGJ5dGVGaWxlOiBudWxsLFxyXG4gIG9wQ29kZTogbnVsbCxcclxuICBoZWF0TWFwOiBudWxsLFxyXG5cclxuICBmaWxlU2VuZERvbmU6IGZhbHNlLFxyXG4gIGZpbGVTZW5kTG9hZGluZzogZmFsc2UsXHJcbiAgZmlsZVNlbmRFcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBTRVJWRVJfVEVTVF9SRVFVRVNUID0gXCJTRVJWRVJfVEVTVF9SRVFVRVNUXCI7XHJcbmV4cG9ydCBjb25zdCBTRVJWRVJfVEVTVF9TVUNDRVNTID0gXCJTRVJWRVJfVEVTVF9TVUNDRVNTXCI7XHJcbmV4cG9ydCBjb25zdCBTRVJWRVJfVEVTVF9GQUlMVVJFID0gXCJTRVJWRVJfVEVTVF9GQUlMVVJFXCI7XHJcblxyXG5jb25zdCBGaWxlID0gKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb246IGFueSkgPT5cclxuICBwcm9kdWNlKHN0YXRlLCAoZHJhZnQpID0+IHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgY2FzZSBTRVJWRVJfVEVTVF9SRVFVRVNUOlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFUlZFUl9URVNUX1NVQ0NFU1M6XHJcbiAgICAgICAgY29uc29sZS5sb2coYWN0aW9uLmRhdGEpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFNFUlZFUl9URVNUX0ZBSUxVUkU6XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmlsZTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQge1xyXG4gIEZJTEVfU0VORF9GQUlMVVJFLFxyXG4gIEZJTEVfU0VORF9SRVFVRVNULFxyXG4gIEZJTEVfU0VORF9TVUNDRVNTLFxyXG4gIEJZVEVDT0RFX0lOREVYX1JFUVVFU1QsXHJcbiAgQllURUNPREVfSU5ERVhfU1VDQ0VTUyxcclxuICBCWVRFQ09ERV9JTkRFWF9GQUlMVVJFLFxyXG4gIEJZVEVfVE9fT1BDT0RFX1JFUVVFU1QsXHJcbiAgQllURV9UT19PUENPREVfU1VDQ0VTUyxcclxuICBCWVRFX1RPX09QQ09ERV9GQUlMVVJFLFxyXG4gIFNFVF9IRUFUTUFQX1JFUVVFU1QsXHJcbiAgU0VUX0hFQVRNQVBfU1VDQ0VTUyxcclxuICBTRVRfSEVBVE1BUF9GQUlMVVJFLFxyXG59IGZyb20gXCJyZWR1Y2Vycy9maWxlXCI7XHJcbmltcG9ydCB7IGFsbCwgY2FsbCwgZm9yaywgcHV0LCBzZWxlY3QsIHRha2VMYXRlc3QgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcblxyXG5heGlvcy5kZWZhdWx0cy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX0JBU0VfVVJMO1xyXG5cclxuZnVuY3Rpb24gZmlsZVNlbmRBUEkoZGF0YTogRmlsZSkge1xyXG4gIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcclxuICBmb3JtLmFwcGVuZChcImZpbGVcIiwgZGF0YSk7XHJcbiAgcmV0dXJuIGF4aW9zLnBvc3QoYC91cGxvYWRlcmAsIGZvcm0sIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICB9LFxyXG4gIH0pO1xyXG59XHJcbmZ1bmN0aW9uKiBmaWxlU2VuZChhY3Rpb246IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoZmlsZVNlbmRBUEksIGFjdGlvbi5kYXRhLmZpbGUpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRklMRV9TRU5EX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHJlc3BvbnNlLmRhdGEsXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGFsZXJ0KFwi7YyM7J28IOyghOyGoSDsmYTro4whXCIpO1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogRklMRV9TRU5EX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoRmlsZVNlbmQoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChGSUxFX1NFTkRfUkVRVUVTVCwgZmlsZVNlbmQpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBydW5HcmFkQ0FNQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvZ3JhZENBTT9maWxlPSR7ZGF0YS5maWxlTmFtZX1gLCB7IGhlYWRlcnM6IHsgcmVzcG9uc2VUeXBlOiBcImFycmF5YnVmZmVyXCIgfSB9KTtcclxufVxyXG5mdW5jdGlvbiogcnVuR3JhZENBTShhY3Rpb246IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwocnVuR3JhZENBTUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VUX0hFQVRNQVBfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG5cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEJZVEVDT0RFX0lOREVYX1JFUVVFU1QsXHJcbiAgICAgIGRhdGE6IHsgZmlsZU5hbWU6IGFjdGlvbi5kYXRhLmZpbGVOYW1lIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IFNFVF9IRUFUTUFQX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoUnVuR3JhZENBTSgpIHtcclxuICB5aWVsZCB0YWtlTGF0ZXN0KFNFVF9IRUFUTUFQX1JFUVVFU1QsIHJ1bkdyYWRDQU0pO1xyXG59XHJcbmZ1bmN0aW9uIGdldEJ5dGVDb2RlQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvYnl0ZUNvZGU/ZmlsZT0ke2RhdGEuZmlsZU5hbWV9YCk7XHJcbn1cclxuZnVuY3Rpb24qIGdldEJ5dGVDb2RlKGFjdGlvbjogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChnZXRCeXRlQ29kZUFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgbGV0IGV4cGxvaXROYW1lID0gXCJcIjtcclxuICAgIGlmIChyZXNwb25zZS5kYXRhLmV4cGxvaXROYW1lKSB7XHJcbiAgICAgIHN3aXRjaCAocmVzcG9uc2UuZGF0YS5leHBsb2l0TmFtZSkge1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgIGV4cGxvaXROYW1lID0gXCIxLiBSYW1uaXRcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgIGV4cGxvaXROYW1lID0gXCIyLiBMb2xsaXBvcFwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgZXhwbG9pdE5hbWUgPSBcIjMuXHRLZWxpaG9zX3ZlcjNcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNDpcclxuICAgICAgICAgIGV4cGxvaXROYW1lID0gXCI0Llx0VnVuZG9cIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNTpcclxuICAgICAgICAgIGV4cGxvaXROYW1lID0gXCI1Llx0U2ltZGFcIjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgNjpcclxuICAgICAgICAgIGV4cGxvaXROYW1lID0gXCI2Llx0VHJhY3VyXCI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDc6XHJcbiAgICAgICAgICBleHBsb2l0TmFtZSA9IFwiNy5cdEtlbGlob3NfdmVyMVwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA4OlxyXG4gICAgICAgICAgZXhwbG9pdE5hbWUgPSBcIjguXHRPYmZ1c2NhdG9yLkFDWVwiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSA5OlxyXG4gICAgICAgICAgZXhwbG9pdE5hbWUgPSBcIjkuXHRHYXRha1wiO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEJZVEVDT0RFX0lOREVYX1NVQ0NFU1MsXHJcbiAgICAgIGRhdGE6IHsgLi4ucmVzcG9uc2UuZGF0YSwgZXhwbG9pdE5hbWU6IGV4cGxvaXROYW1lIH0sXHJcbiAgICB9KTtcclxuICAgIHlpZWxkIGFsZXJ0KFwib3AgY29kZeulvCDtmZXsnbjtlZjshLjsmpRcIik7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBCWVRFQ09ERV9JTkRFWF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaEdldEJ5dGVDb2RlKCkge1xyXG4gIHlpZWxkIHRha2VMYXRlc3QoQllURUNPREVfSU5ERVhfUkVRVUVTVCwgZ2V0Qnl0ZUNvZGUpO1xyXG59XHJcbmZ1bmN0aW9uIGJ5dGVUb09QQVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvb3BDb2RlP2ZpbGU9JHtkYXRhLmZpbGVOYW1lfSZzdHJJZHg9JHtkYXRhLnN0cklkeH0mZW5kSWR4PSR7ZGF0YS5lbmRJZHh9YCk7XHJcbn1cclxuZnVuY3Rpb24qIGJ5dGVUb09QKGFjdGlvbjogYW55KSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0geWllbGQgY2FsbChieXRlVG9PUEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogQllURV9UT19PUENPREVfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgYWxlcnQoXCJvcCBjb2RlIOuzgO2ZmCDrsI8g7IiY7IugIOyZhOujjFwiKTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHlpZWxkIHB1dCh7XHJcbiAgICAgIHR5cGU6IEJZVEVfVE9fT1BDT0RFX0ZBSUxVUkUsXHJcbiAgICAgIGVycm9yOiBlcnIsXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24qIHdhdGNoQnl0ZVRvT3AoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChCWVRFX1RPX09QQ09ERV9SRVFVRVNULCBieXRlVG9PUCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiBGaWxlKCkge1xyXG4gIHlpZWxkIGFsbChbZm9yayh3YXRjaEZpbGVTZW5kKSwgZm9yayh3YXRjaEdldEJ5dGVDb2RlKSwgZm9yayh3YXRjaFJ1bkdyYWRDQU0pLCBmb3JrKHdhdGNoQnl0ZVRvT3ApXSk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhbGwsIGZvcmsgfSBmcm9tIFwicmVkdXgtc2FnYS9lZmZlY3RzXCI7XHJcbmltcG9ydCBGaWxlIGZyb20gXCIuL2ZpbGVcIjtcclxuaW1wb3J0IFNlcnZlciBmcm9tIFwiLi9zZXJ2ZXJcIjtcclxuYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKiByb290U2FnYSgpIHtcclxuICB5aWVsZCBhbGwoW2ZvcmsoRmlsZSksIGZvcmsoU2VydmVyKV0pO1xyXG59XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgU0VSVkVSX1RFU1RfRkFJTFVSRSwgU0VSVkVSX1RFU1RfUkVRVUVTVCwgU0VSVkVSX1RFU1RfU1VDQ0VTUyB9IGZyb20gXCJyZWR1Y2Vycy9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgYWxsLCBjYWxsLCBmb3JrLCBwdXQsIHNlbGVjdCwgdGFrZUxhdGVzdCB9IGZyb20gXCJyZWR1eC1zYWdhL2VmZmVjdHNcIjtcclxuXHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfQkFTRV9VUkw7XHJcblxyXG5mdW5jdGlvbiBzZXJ2ZXJUZXN0QVBJKGRhdGEpIHtcclxuICByZXR1cm4gYXhpb3MuZ2V0KGAvc2VydmVyVGVzdGAsIHsgaGVhZGVyczogeyB3aXRoQ3JlZGVudGlhbHM6IHRydWUgfSB9KTtcclxufVxyXG5mdW5jdGlvbiogc2VydmVyVGVzdChhY3Rpb246IGFueSkge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IHlpZWxkIGNhbGwoc2VydmVyVGVzdEFQSSwgYWN0aW9uLmRhdGEpO1xyXG4gICAgeWllbGQgcHV0KHtcclxuICAgICAgdHlwZTogU0VSVkVSX1RFU1RfU1VDQ0VTUyxcclxuICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YSxcclxuICAgIH0pO1xyXG4gICAgeWllbGQgYWxlcnQocmVzcG9uc2UuZGF0YSk7XHJcbiAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICB5aWVsZCBwdXQoe1xyXG4gICAgICB0eXBlOiBTRVJWRVJfVEVTVF9GQUlMVVJFLFxyXG4gICAgICBlcnJvcjogZXJyLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uKiB3YXRjaHNlcnZlclRlc3QoKSB7XHJcbiAgeWllbGQgdGFrZUxhdGVzdChTRVJWRVJfVEVTVF9SRVFVRVNULCBzZXJ2ZXJUZXN0KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24qIEZpbGUoKSB7XHJcbiAgeWllbGQgYWxsKFtmb3JrKHdhdGNoc2VydmVyVGVzdCldKTtcclxufVxyXG4iLCJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSBcIm5leHQtcmVkdXgtd3JhcHBlclwiO1xyXG5pbXBvcnQgeyBhcHBseU1pZGRsZXdhcmUsIGNvbXBvc2UsIGNyZWF0ZVN0b3JlIH0gZnJvbSBcInJlZHV4XCI7XHJcbmltcG9ydCB7IGNvbXBvc2VXaXRoRGV2VG9vbHMgfSBmcm9tIFwicmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uXCI7XHJcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tIFwicmVkdXgtc2FnYVwiO1xyXG5pbXBvcnQgcm9vdFNhZ2EgZnJvbSBcIi4uL3NhZ2FzXCI7XHJcblxyXG5pbXBvcnQgcmVkdWNlciBmcm9tIFwiLi4vcmVkdWNlcnMvaW5kZXhcIjtcclxuXHJcbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U3RhdGUgfSkgPT4gKG5leHQpID0+IChhY3Rpb24pID0+IHtcclxuICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gIHJldHVybiBuZXh0KGFjdGlvbik7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2FnYU1pZGRsZXdhcmUgPSBjcmVhdGVTYWdhTWlkZGxld2FyZSgpO1xyXG4gIGxldCBtaWRkbGV3YXJlczogYW55ID0gW3NhZ2FNaWRkbGV3YXJlXTtcclxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gJ2RldmVsb3BtZW50JykgbWlkZGxld2FyZXMgPSBbLi4ubWlkZGxld2FyZXMsIGxvZ2dlck1pZGRsZXdhcmVdO1xyXG4gIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJwcm9kdWN0aW9uXCIgPyBjb21wb3NlKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpIDogY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZXMpKTtcclxuICBjb25zdCBzdG9yZTogYW55ID0gY3JlYXRlU3RvcmUocmVkdWNlciwgZW5oYW5jZXIpO1xyXG5cclxuICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XHJcbiAgcmV0dXJuIHN0b3JlO1xyXG59O1xyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcclxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT0gXCJkZXZlbG9wbWVudFwiLFxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdyYXBwZXI7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImltbWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1zYWdhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwibmFtZXMiOlsiSGVhZCIsIndyYXBwZXIiLCJHcmFkdWF0ZSIsIkNvbXBvbmVudCIsIndpdGhSZWR1eCIsInByb2R1Y2UiLCJpbml0aWFsU3RhdGUiLCJieXRlRmlsZSIsImZpbGVOYW1lIiwib3BDb2RlIiwic3RySWR4IiwiZW5kSWR4IiwiZXhwbG9pdE5hbWUiLCJoZWF0TWFwIiwiZmlsZVNlbmREb25lIiwiZmlsZVNlbmRMb2FkaW5nIiwiZmlsZVNlbmRFcnJvciIsImJ5dGVDb2RlSW5kZXhEb25lIiwiYnl0ZUNvZGVJbmRleExvYWRpbmciLCJieXRlQ29kZUluZGV4RXJyb3IiLCJvcENvZGVHZXREb25lIiwib3BDb2RlR2V0TG9hZGluZyIsIm9wQ29kZUdldEVycm9yIiwiZ2V0SGVhdE1hcERvbmUiLCJnZXRIZWF0TWFwTG9hZGluZyIsImdldEhlYXRNYXBFcnJvciIsIlJFU0VUX1JFUVVFU1QiLCJGSUxFX1NFTkRfUkVRVUVTVCIsIkZJTEVfU0VORF9TVUNDRVNTIiwiRklMRV9TRU5EX0ZBSUxVUkUiLCJCWVRFQ09ERV9JTkRFWF9SRVFVRVNUIiwiQllURUNPREVfSU5ERVhfU1VDQ0VTUyIsIkJZVEVDT0RFX0lOREVYX0ZBSUxVUkUiLCJCWVRFX1RPX09QQ09ERV9SRVFVRVNUIiwiQllURV9UT19PUENPREVfU1VDQ0VTUyIsIkJZVEVfVE9fT1BDT0RFX0ZBSUxVUkUiLCJTRVRfSEVBVE1BUF9SRVFVRVNUIiwiU0VUX0hFQVRNQVBfU1VDQ0VTUyIsIlNFVF9IRUFUTUFQX0ZBSUxVUkUiLCJGaWxlIiwic3RhdGUiLCJhY3Rpb24iLCJkcmFmdCIsInR5cGUiLCJkYXRhIiwiZmlsZSIsImVycm9yIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9CQVNFX1VSTCIsIm9wY29kZSIsIkhZRFJBVEUiLCJjb21iaW5lUmVkdWNlcnMiLCJTZXJ2ZXIiLCJyb290UmVkdWNlciIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJTRVJWRVJfVEVTVF9SRVFVRVNUIiwiU0VSVkVSX1RFU1RfU1VDQ0VTUyIsIlNFUlZFUl9URVNUX0ZBSUxVUkUiLCJjb25zb2xlIiwibG9nIiwiYXhpb3MiLCJhbGwiLCJjYWxsIiwiZm9yayIsInB1dCIsInRha2VMYXRlc3QiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJmaWxlU2VuZEFQSSIsImZvcm0iLCJGb3JtRGF0YSIsImFwcGVuZCIsInBvc3QiLCJoZWFkZXJzIiwiZmlsZVNlbmQiLCJyZXNwb25zZSIsImFsZXJ0IiwiZXJyIiwid2F0Y2hGaWxlU2VuZCIsInJ1bkdyYWRDQU1BUEkiLCJnZXQiLCJyZXNwb25zZVR5cGUiLCJydW5HcmFkQ0FNIiwid2F0Y2hSdW5HcmFkQ0FNIiwiZ2V0Qnl0ZUNvZGVBUEkiLCJnZXRCeXRlQ29kZSIsIndhdGNoR2V0Qnl0ZUNvZGUiLCJieXRlVG9PUEFQSSIsImJ5dGVUb09QIiwid2F0Y2hCeXRlVG9PcCIsIndpdGhDcmVkZW50aWFscyIsInJvb3RTYWdhIiwic2VydmVyVGVzdEFQSSIsInNlcnZlclRlc3QiLCJ3YXRjaHNlcnZlclRlc3QiLCJjcmVhdGVXcmFwcGVyIiwiYXBwbHlNaWRkbGV3YXJlIiwiY29tcG9zZSIsImNyZWF0ZVN0b3JlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImNyZWF0ZVNhZ2FNaWRkbGV3YXJlIiwicmVkdWNlciIsImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFN0YXRlIiwibmV4dCIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJtaWRkbGV3YXJlcyIsImVuaGFuY2VyIiwic3RvcmUiLCJzYWdhVGFzayIsInJ1biIsImRlYnVnIl0sInNvdXJjZVJvb3QiOiIifQ==