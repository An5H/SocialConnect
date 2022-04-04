(function() {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/Layout/HeadTags.js":
/*!***************************************!*\
  !*** ./components/Layout/HeadTags.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Ansh\\Documents\\SocialConnect\\components\\Layout\\HeadTags.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);


const HeadTags = () => __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }
}, __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 7
  }
}), __jsx("meta", {
  charSet: "UTF-8",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "icon",
  href: "/favicon.png",
  sizes: "16*16",
  type: "image/png",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/listMessages.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/styles.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 7
  }
}), __jsx("link", {
  rel: "stylesheet",
  type: "text/css",
  href: "/nprogress.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}), __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
}, "Mini Social Media")));

/* harmony default export */ __webpack_exports__["default"] = (HeadTags);

/***/ }),

/***/ "./components/Layout/Layout.js":
/*!*************************************!*\
  !*** ./components/Layout/Layout.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeadTags__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeadTags */ "./components/Layout/HeadTags.js");
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar */ "./components/Layout/Navbar.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _SideMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SideMenu */ "./components/Layout/SideMenu.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Search */ "./components/Layout/Search.js");
var _jsxFileName = "C:\\Users\\Ansh\\Documents\\SocialConnect\\components\\Layout\\Layout.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);









const Layout = ({
  children,
  user
}) => {
  const contextRef = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createRef)(); //loading thing at top

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeStart) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().start();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeComplete) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  (next_router__WEBPACK_IMPORTED_MODULE_5___default().onRouteChangeError) = () => nprogress__WEBPACK_IMPORTED_MODULE_4___default().done();

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_HeadTags__WEBPACK_IMPORTED_MODULE_1__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), user ? __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx("div", {
    style: {
      marginLeft: "1rem",
      marginRight: "1rem"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Ref, {
    innerRef: contextRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    floated: "left",
    width: 2,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Sticky, {
    context: contextRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, __jsx(_SideMenu__WEBPACK_IMPORTED_MODULE_6__.default, {
    user: user,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }))), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    width: 10,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Visibility, {
    context: contextRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  }, children)), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Grid.Column, {
    floated: "left",
    width: 4,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Sticky, {
    context: contextRef,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Segment, {
    basic: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx(_Search__WEBPACK_IMPORTED_MODULE_7__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 23
    }
  })))))))) : __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(_Navbar__WEBPACK_IMPORTED_MODULE_2__.default, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__.Container, {
    style: {
      paddingTop: "1rem"
    },
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }, children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/Layout/Navbar.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Ansh\\Documents\\SocialConnect\\components\\Layout\\Navbar.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);





const Navbar = () => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  const isActive = route => {
    return router.pathname === route;
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
    fluid: true,
    borderless: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
    text: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/login",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/login"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "sign in",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 13
    }
  }), "Log In")), __jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
    href: "/signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
    header: true,
    active: isActive("/signup"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    size: "large",
    name: "signup",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }), "Sign Up"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/Layout/Search.js":
/*!*************************************!*\
  !*** ./components/Layout/Search.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/baseUrl */ "./utils/baseUrl.js");
var _jsxFileName = "C:\\Users\\Ansh\\Documents\\SocialConnect\\components\\Layout\\Search.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






let cancel;

const SearchComponent = () => {
  const {
    0: text,
    1: setText
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: loading,
    1: setLoading
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: results,
    1: setResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);

  const handleChange = async e => {
    const {
      value
    } = e.target;
    setText(value);
    setLoading(true);

    try {
      cancel && cancel();
      const CancelToken = (axios__WEBPACK_IMPORTED_MODULE_2___default().CancelToken);
      const token = js_cookie__WEBPACK_IMPORTED_MODULE_3___default().get("token");
      const res = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_5__.default}/api/search/${value}`, {
        headers: {
          Authorization: token
        },
        cancelToken: new CancelToken(canceler => {
          cancel = canceler;
        })
      });
      if (res.data.length === 0) return setLoading(false);
      setResults(res.data);
    } catch (error) {
      console.error("Error searching" + error);
    }

    setLoading(false);
  };

  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Search, {
    onBlur: () => {
      results.length > 0 && setResults([]);
      loading && setLoading(false);
      setText("");
    },
    loading: loading,
    value: text,
    resultRenderer: ResultRenderer,
    results: results,
    onSearchChange: handleChange,
    minCharacters: 1,
    onResultSelect: (e, data) => next_router__WEBPACK_IMPORTED_MODULE_4___default().push(`/${data.result.username}`),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  });
};

const ResultRenderer = ({
  _id,
  profilePicUrl,
  name
}) => {
  return __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    key: _id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 5
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
    src: profilePicUrl,
    alt: "ProfilePic",
    avatar: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    header: name,
    as: "a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SearchComponent);

/***/ }),

/***/ "./components/Layout/SideMenu.js":
/*!***************************************!*\
  !*** ./components/Layout/SideMenu.js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/authUser */ "./utils/authUser.js");
var _jsxFileName = "C:\\Users\\Ansh\\Documents\\SocialConnect\\components\\Layout\\SideMenu.js";
var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);






const SideMenu = ({
  user: {
    unreadNotifications,
    email,
    unreadMessage,
    username
  }
}) => {
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();

  const isActive = route => {
    return router.pathname === route;
  };

  return __jsx((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List, {
    style: {
      paddingTop: "1rem"
    },
    size: "big",
    verticalAlign: "middle",
    selection: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive("/"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "home",
    size: "large",
    color: isActive("/") && "teal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Home",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  })))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/messages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive("/messages"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: unreadMessage ? "hand point right" : "mail outline",
    size: "large",
    color: isActive("/messages") && "teal" || unreadMessage && "orange",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Messages",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  })))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: "/notifications",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: isActive("/notifications"),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: unreadNotifications ? "hand point right" : "bell outline",
    size: "large",
    color: isActive("/notifications") && "teal" || unreadNotifications && "orange",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Notifications",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 15
    }
  })))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }
  }), __jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
    href: `/${username}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    active: router.query.username === username,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "user",
    size: "large",
    color: router.query.username === username && "teal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 13
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Account",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 15
    }
  })))), __jsx("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Item, {
    onClick: () => (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.logoutUser)(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
    name: "log out",
    size: "large",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Content, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 11
    }
  }, __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__.List.Header, {
    content: "Logout",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (SideMenu);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ "nookies");
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _utils_authUser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/authUser */ "./utils/authUser.js");
/* harmony import */ var _components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Layout/Layout */ "./components/Layout/Layout.js");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\Ansh\\Documents\\SocialConnect\\pages\\_app.js";

var __jsx = (react__WEBPACK_IMPORTED_MODULE_0___default().createElement);

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(_components_Layout_Layout__WEBPACK_IMPORTED_MODULE_5__.default, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), __jsx(Component, _extends({}, pageProps, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  })));
};

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => {
  const {
    token
  } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)(ctx);
  let pageProps = {};
  const protectedRoutes = ctx.pathname === "/" || ctx.pathname === "/[username]" || ctx.pathname === "/notifications" || ctx.pathname === "/post/[postid]" || ctx.pathname === "/messages" || ctx.pathname === "/search";

  if (!token) {
    protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.redirectUser)(ctx, "/login");
  } else {
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    try {
      const res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(`${_utils_baseUrl__WEBPACK_IMPORTED_MODULE_3__.default}/api/auth`, {
        headers: {
          Authorization: token
        }
      });
      const {
        user,
        userFollowerStats
      } = res.data;

      if (user) {
        !protectedRoutes && (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.redirectUser)("/");
      }

      pageProps.user = user;
      pageProps.userFollowerStats = userFollowerStats;
    } catch (error) {
      (0,nookies__WEBPACK_IMPORTED_MODULE_2__.destroyCookie)(ctx, "token");
      (0,_utils_authUser__WEBPACK_IMPORTED_MODULE_4__.redirectUser)(ctx, "/login");
    }
  }

  return {
    pageProps
  };
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./utils/authUser.js":
/*!***************************!*\
  !*** ./utils/authUser.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerUser": function() { return /* binding */ registerUser; },
/* harmony export */   "loginUser": function() { return /* binding */ loginUser; },
/* harmony export */   "redirectUser": function() { return /* binding */ redirectUser; },
/* harmony export */   "logoutUser": function() { return /* binding */ logoutUser; }
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _baseUrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./baseUrl */ "./utils/baseUrl.js");
/* harmony import */ var _catchErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catchErrors */ "./utils/catchErrors.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);






const setToken = token => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("token", token);
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/");
};

const registerUser = async (user, profilePicUrl, setError, setLoading) => {
  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/signup`, {
      user,
      profilePicUrl
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const loginUser = async (user, setError, setLoading) => {
  setLoading(true);

  try {
    const res = await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${_baseUrl__WEBPACK_IMPORTED_MODULE_1__.default}/api/auth`, {
      user
    });
    setToken(res.data);
  } catch (error) {
    const errorMsg = (0,_catchErrors__WEBPACK_IMPORTED_MODULE_2__.default)(error);
    setError(errorMsg);
  }

  setLoading(false);
};
const redirectUser = (ctx, route) => {
  if (ctx.req) {
    ctx.res.writeHead(302, {
      Location: route
    });
    ctx.res.end();
  } else {
    next_router__WEBPACK_IMPORTED_MODULE_3___default().push(route);
  }
};
const logoutUser = email => {
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().set("userEmail", email);
  js_cookie__WEBPACK_IMPORTED_MODULE_4___default().remove("token");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().push("/login");
  next_router__WEBPACK_IMPORTED_MODULE_3___default().reload();
};

/***/ }),

/***/ "./utils/baseUrl.js":
/*!**************************!*\
  !*** ./utils/baseUrl.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const baseUrl = "http://localhost:3000";
/* harmony default export */ __webpack_exports__["default"] = (baseUrl);

/***/ }),

/***/ "./utils/catchErrors.js":
/*!******************************!*\
  !*** ./utils/catchErrors.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const catchErrors = error => {
  let errorMsg = '';

  if (error.response) {
    // If the request was made and the server not responded with a status code in the range of 2xx
    errorMsg = error.response.data;
    console.error(errorMsg);
  } else if (error.request) {
    // if the request was made and no response was recevied from server
    errorMsg = error.request;
    console.error(errorMsg);
  } else {
    // if something else happened while making the request
    errorMsg = error.message;
    console.error(errorMsg);
  }

  return errorMsg;
};

/* harmony default export */ __webpack_exports__["default"] = (catchErrors);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("js-cookie");;

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ (function(module) {

"use strict";
module.exports = require("nookies");;

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("nprogress");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("semantic-ui-react");;

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_semantic-ui-css_semantic_min_css-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/_app.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hbnNoLXNvY2lhbC1tZWRpYS8uL2NvbXBvbmVudHMvTGF5b3V0L0hlYWRUYWdzLmpzIiwid2VicGFjazovL2Fuc2gtc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0LmpzIiwid2VicGFjazovL2Fuc2gtc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvTmF2YmFyLmpzIiwid2VicGFjazovL2Fuc2gtc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvU2VhcmNoLmpzIiwid2VicGFjazovL2Fuc2gtc29jaWFsLW1lZGlhLy4vY29tcG9uZW50cy9MYXlvdXQvU2lkZU1lbnUuanMiLCJ3ZWJwYWNrOi8vYW5zaC1zb2NpYWwtbWVkaWEvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2Fuc2gtc29jaWFsLW1lZGlhLy4vdXRpbHMvYXV0aFVzZXIuanMiLCJ3ZWJwYWNrOi8vYW5zaC1zb2NpYWwtbWVkaWEvLi91dGlscy9iYXNlVXJsLmpzIiwid2VicGFjazovL2Fuc2gtc29jaWFsLW1lZGlhLy4vdXRpbHMvY2F0Y2hFcnJvcnMuanMiLCJ3ZWJwYWNrOi8vYW5zaC1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovL2Fuc2gtc29jaWFsLW1lZGlhL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vYW5zaC1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vYW5zaC1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vYW5zaC1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly9hbnNoLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vYW5zaC1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJub29raWVzXCIiLCJ3ZWJwYWNrOi8vYW5zaC1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly9hbnNoLXNvY2lhbC1tZWRpYS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vYW5zaC1zb2NpYWwtbWVkaWEvZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovL2Fuc2gtc29jaWFsLW1lZGlhL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly9hbnNoLXNvY2lhbC1tZWRpYS9pZ25vcmVkfEM6XFxVc2Vyc1xcQW5zaFxcRG9jdW1lbnRzXFxTb2NpYWxDb25uZWN0XFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiSGVhZFRhZ3MiLCJMYXlvdXQiLCJjaGlsZHJlbiIsInVzZXIiLCJjb250ZXh0UmVmIiwiY3JlYXRlUmVmIiwiUm91dGVyIiwibnByb2dyZXNzIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwicGFkZGluZ1RvcCIsIk5hdmJhciIsInJvdXRlciIsInVzZVJvdXRlciIsImlzQWN0aXZlIiwicm91dGUiLCJwYXRobmFtZSIsImNhbmNlbCIsIlNlYXJjaENvbXBvbmVudCIsInRleHQiLCJzZXRUZXh0IiwidXNlU3RhdGUiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJlc3VsdHMiLCJzZXRSZXN1bHRzIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiQ2FuY2VsVG9rZW4iLCJheGlvcyIsInRva2VuIiwiY29va2llIiwicmVzIiwiYmFzZVVybCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiY2FuY2VsVG9rZW4iLCJjYW5jZWxlciIsImRhdGEiLCJsZW5ndGgiLCJlcnJvciIsImNvbnNvbGUiLCJSZXN1bHRSZW5kZXJlciIsInJlc3VsdCIsInVzZXJuYW1lIiwiX2lkIiwicHJvZmlsZVBpY1VybCIsIm5hbWUiLCJTaWRlTWVudSIsInVucmVhZE5vdGlmaWNhdGlvbnMiLCJlbWFpbCIsInVucmVhZE1lc3NhZ2UiLCJxdWVyeSIsImxvZ291dFVzZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsImN0eCIsInBhcnNlQ29va2llcyIsInByb3RlY3RlZFJvdXRlcyIsInJlZGlyZWN0VXNlciIsInVzZXJGb2xsb3dlclN0YXRzIiwiZGVzdHJveUNvb2tpZSIsInNldFRva2VuIiwicmVnaXN0ZXJVc2VyIiwic2V0RXJyb3IiLCJlcnJvck1zZyIsImNhdGNoRXJyb3JzIiwibG9naW5Vc2VyIiwicmVxIiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJyZXNwb25zZSIsInJlcXVlc3QiLCJtZXNzYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxNQUFNQSxRQUFRLEdBQUcsTUFDZixxRUFDRSxNQUFDLGtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFNLE1BQUksRUFBQyxVQUFYO0FBQXNCLFNBQU8sRUFBQyx1Q0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQURGLEVBRUU7QUFBTSxTQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBRkYsRUFHRTtBQUFNLEtBQUcsRUFBQyxNQUFWO0FBQWlCLE1BQUksRUFBQyxjQUF0QjtBQUFxQyxPQUFLLEVBQUMsT0FBM0M7QUFBbUQsTUFBSSxFQUFDLFdBQXhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixFQUtFO0FBQU0sS0FBRyxFQUFDLFlBQVY7QUFBdUIsTUFBSSxFQUFDLFVBQTVC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Q21DLE9BQWpCO0FBRUFsQyxXQUFPLENBQUNELEtBQVIsQ0FBYzJCLFFBQWQ7QUFDRCxHQUxNLE1BS0E7QUFDTDtBQUNBQSxZQUFRLEdBQUczQixLQUFLLENBQUNvQyxPQUFqQjtBQUVBbkMsV0FBTyxDQUFDRCxLQUFSLENBQWMyQixRQUFkO0FBQ0Q7O0FBQ0YsU0FBT0EsUUFBUDtBQUNBLENBckJEOztBQXVCQSwrREFBZUMsV0FBZixFOzs7Ozs7Ozs7OztBQ3ZCQSxtQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSxxQzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNvbnN0IEhlYWRUYWdzID0gKCkgPT4gKFxyXG4gIDw+XHJcbiAgICA8SGVhZD5cclxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxyXG4gICAgICA8bWV0YSBjaGFyU2V0PVwiVVRGLThcIiAvPlxyXG4gICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLnBuZ1wiIHNpemVzPVwiMTYqMTZcIiB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuXHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL2xpc3RNZXNzYWdlcy5jc3NcIiAvPlxyXG5cclxuICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3R5bGVzLmNzc1wiIC8+XHJcbiAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiB0eXBlPVwidGV4dC9jc3NcIiBocmVmPVwiL25wcm9ncmVzcy5jc3NcIiAvPlxyXG5cclxuICAgICAgPHRpdGxlPk1pbmkgU29jaWFsIE1lZGlhPC90aXRsZT5cclxuICAgIDwvSGVhZD5cclxuICA8Lz5cclxuKTtcclxuZXhwb3J0IGRlZmF1bHQgSGVhZFRhZ3M7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWRUYWdzIGZyb20gXCIuL0hlYWRUYWdzXCI7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vTmF2YmFyXCI7XHJcbmltcG9ydCB7XHJcbiAgQ29udGFpbmVyLFxyXG4gIFZpc2liaWxpdHksXHJcbiAgR3JpZCxcclxuICBTdGlja3ksXHJcbiAgUmVmLFxyXG4gIERpdmlkZXIsXHJcbiAgU2VnbWVudCxcclxufSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IG5wcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBTaWRlTWVudSBmcm9tIFwiLi9TaWRlTWVudVwiO1xyXG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuL1NlYXJjaFwiO1xyXG5cclxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHVzZXIgfSkgPT4ge1xyXG4gIGNvbnN0IGNvbnRleHRSZWYgPSBjcmVhdGVSZWYoKTtcclxuXHJcbiAgLy9sb2FkaW5nIHRoaW5nIGF0IHRvcFxyXG4gIFJvdXRlci5vblJvdXRlQ2hhbmdlU3RhcnQgPSAoKSA9PiBucHJvZ3Jlc3Muc3RhcnQoKTtcclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUNvbXBsZXRlID0gKCkgPT4gbnByb2dyZXNzLmRvbmUoKTtcclxuICBSb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKCkgPT4gbnByb2dyZXNzLmRvbmUoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkVGFncyAvPlxyXG4gICAgICB7dXNlciA/IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5MZWZ0OiBcIjFyZW1cIiwgbWFyZ2luUmlnaHQ6IFwiMXJlbVwiIH19PlxyXG4gICAgICAgICAgICA8UmVmIGlubmVyUmVmPXtjb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICA8R3JpZD5cclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiBmbG9hdGVkPVwibGVmdFwiIHdpZHRoPXsyfT5cclxuICAgICAgICAgICAgICAgICAgPFN0aWNreSBjb250ZXh0PXtjb250ZXh0UmVmfT5cclxuICAgICAgICAgICAgICAgICAgICA8U2lkZU1lbnUgdXNlcj17dXNlcn0gLz5cclxuICAgICAgICAgICAgICAgICAgPC9TdGlja3k+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17MTB9PlxyXG4gICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eSBjb250ZXh0PXtjb250ZXh0UmVmfT57Y2hpbGRyZW59PC9WaXNpYmlsaXR5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuXHJcbiAgICAgICAgICAgICAgICA8R3JpZC5Db2x1bW4gZmxvYXRlZD1cImxlZnRcIiB3aWR0aD17NH0+XHJcbiAgICAgICAgICAgICAgICAgIDxTdGlja3kgY29udGV4dD17Y29udGV4dFJlZn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlZ21lbnQgYmFzaWM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8U2VhcmNoLz5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvU3RpY2t5PlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkLkNvbHVtbj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDwvUmVmPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIDxOYXZiYXIgLz5cclxuXHJcbiAgICAgICAgICA8Q29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmdUb3A6IFwiMXJlbVwiIH19IHRleHQ+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBNZW51LCBDb250YWluZXIsIEljb24gfSBmcm9tIFwic2VtYW50aWMtdWktcmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuXHJcbmNvbnN0IE5hdmJhciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgY29uc3QgaXNBY3RpdmUgPSAocm91dGUpID0+IHtcclxuICAgIHJldHVybiByb3V0ZXIucGF0aG5hbWUgPT09IHJvdXRlO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51IGZsdWlkIGJvcmRlcmxlc3M+XHJcbiAgICAgIDxDb250YWluZXIgdGV4dD5cclxuICAgICAgICA8TGluayBocmVmPVwiL2xvZ2luXCI+XHJcbiAgICAgICAgICA8TWVudS5JdGVtIGhlYWRlciBhY3RpdmU9e2lzQWN0aXZlKFwiL2xvZ2luXCIpfT5cclxuICAgICAgICAgICAgPEljb24gc2l6ZT1cImxhcmdlXCIgbmFtZT1cInNpZ24gaW5cIiAvPlxyXG4gICAgICAgICAgICBMb2cgSW5cclxuICAgICAgICAgIDwvTWVudS5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8TGluayBocmVmPVwiL3NpZ251cFwiPlxyXG4gICAgICAgICAgPE1lbnUuSXRlbSBoZWFkZXIgYWN0aXZlPXtpc0FjdGl2ZShcIi9zaWdudXBcIil9PlxyXG4gICAgICAgICAgICA8SWNvbiBzaXplPVwibGFyZ2VcIiBuYW1lPVwic2lnbnVwXCIgLz5cclxuICAgICAgICAgICAgU2lnbiBVcFxyXG4gICAgICAgICAgPC9NZW51Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvTWVudT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTGlzdCwgSW1hZ2UsIFNlYXJjaCB9IGZyb20gXCJzZW1hbnRpYy11aS1yZWFjdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgYmFzZVVybCBmcm9tIFwiLi4vLi4vdXRpbHMvYmFzZVVybFwiO1xyXG5sZXQgY2FuY2VsO1xyXG5cclxuY29uc3QgU2VhcmNoQ29tcG9uZW50ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0ZXh0LCBzZXRUZXh0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbcmVzdWx0cywgc2V0UmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IGFzeW5jIChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldDtcclxuICAgIHNldFRleHQodmFsdWUpO1xyXG4gICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjYW5jZWwgJiYgY2FuY2VsKCk7XHJcbiAgICAgIGNvbnN0IENhbmNlbFRva2VuID0gYXhpb3MuQ2FuY2VsVG9rZW47XHJcbiAgICAgIGNvbnN0IHRva2VuID0gY29va2llLmdldChcInRva2VuXCIpO1xyXG5cclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KGAke2Jhc2VVcmx9L2FwaS9zZWFyY2gvJHt2YWx1ZX1gLCB7XHJcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxyXG4gICAgICAgIGNhbmNlbFRva2VuOiBuZXcgQ2FuY2VsVG9rZW4oKGNhbmNlbGVyKSA9PiB7XHJcbiAgICAgICAgICBjYW5jZWwgPSBjYW5jZWxlcjtcclxuICAgICAgICB9KSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID09PSAwKSByZXR1cm4gc2V0TG9hZGluZyhmYWxzZSk7XHJcblxyXG4gICAgICBzZXRSZXN1bHRzKHJlcy5kYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBzZWFyY2hpbmdcIiArIGVycm9yKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFNlYXJjaFxyXG4gICAgICBvbkJsdXI9eygpID0+IHtcclxuICAgICAgICByZXN1bHRzLmxlbmd0aCA+IDAgJiYgc2V0UmVzdWx0cyhbXSk7XHJcbiAgICAgICAgbG9hZGluZyAmJiBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICBzZXRUZXh0KFwiXCIpO1xyXG4gICAgICB9fVxyXG4gICAgICBsb2FkaW5nPXtsb2FkaW5nfVxyXG4gICAgICB2YWx1ZT17dGV4dH1cclxuICAgICAgcmVzdWx0UmVuZGVyZXI9e1Jlc3VsdFJlbmRlcmVyfVxyXG4gICAgICByZXN1bHRzPXtyZXN1bHRzfVxyXG4gICAgICBvblNlYXJjaENoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICBtaW5DaGFyYWN0ZXJzPXsxfVxyXG4gICAgICBvblJlc3VsdFNlbGVjdD17KGUsIGRhdGEpID0+IFJvdXRlci5wdXNoKGAvJHtkYXRhLnJlc3VsdC51c2VybmFtZX1gKX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IFJlc3VsdFJlbmRlcmVyID0gKHsgX2lkLCBwcm9maWxlUGljVXJsLCBuYW1lIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpc3Qga2V5PXtfaWR9PlxyXG4gICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e3Byb2ZpbGVQaWNVcmx9IGFsdD1cIlByb2ZpbGVQaWNcIiBhdmF0YXIgLz5cclxuICAgICAgICA8TGlzdC5Db250ZW50IGhlYWRlcj17bmFtZX0gYXM9XCJhXCIgLz5cclxuICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICA8L0xpc3Q+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlYXJjaENvbXBvbmVudDtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMaXN0LCBJY29uIH0gZnJvbSBcInNlbWFudGljLXVpLXJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IGxvZ291dFVzZXIgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYXV0aFVzZXJcIjtcclxuXHJcbmNvbnN0IFNpZGVNZW51ID0gKHtcclxuICB1c2VyOiB7IHVucmVhZE5vdGlmaWNhdGlvbnMsIGVtYWlsLCB1bnJlYWRNZXNzYWdlLCB1c2VybmFtZSB9LFxyXG59KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGNvbnN0IGlzQWN0aXZlID0gKHJvdXRlKSA9PiB7XHJcbiAgICByZXR1cm4gcm91dGVyLnBhdGhuYW1lID09PSByb3V0ZTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPExpc3RcclxuICAgICAgICBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjFyZW1cIiB9fVxyXG4gICAgICAgIHNpemU9XCJiaWdcIlxyXG4gICAgICAgIHZlcnRpY2FsQWxpZ249XCJtaWRkbGVcIlxyXG4gICAgICAgIHNlbGVjdGlvblxyXG4gICAgICA+XHJcbiAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9cIil9PlxyXG4gICAgICAgICAgICA8SWNvbiBuYW1lPVwiaG9tZVwiIHNpemU9XCJsYXJnZVwiIGNvbG9yPXtpc0FjdGl2ZShcIi9cIikgJiYgXCJ0ZWFsXCJ9IC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJIb21lXCIgLz5cclxuICAgICAgICAgICAgPC9MaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPGJyIC8+XHJcblxyXG4gICAgICAgIDxMaW5rIGhyZWY9XCIvbWVzc2FnZXNcIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9tZXNzYWdlc1wiKX0+XHJcbiAgICAgICAgICAgIDxJY29uXHJcbiAgICAgICAgICAgICAgbmFtZT17dW5yZWFkTWVzc2FnZSA/IFwiaGFuZCBwb2ludCByaWdodFwiIDogXCJtYWlsIG91dGxpbmVcIn1cclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXtcclxuICAgICAgICAgICAgICAgIChpc0FjdGl2ZShcIi9tZXNzYWdlc1wiKSAmJiBcInRlYWxcIikgfHwgKHVucmVhZE1lc3NhZ2UgJiYgXCJvcmFuZ2VcIilcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxMaXN0LkNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPExpc3QuSGVhZGVyIGNvbnRlbnQ9XCJNZXNzYWdlc1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8TGluayBocmVmPVwiL25vdGlmaWNhdGlvbnNcIj5cclxuICAgICAgICAgIDxMaXN0Lkl0ZW0gYWN0aXZlPXtpc0FjdGl2ZShcIi9ub3RpZmljYXRpb25zXCIpfT5cclxuICAgICAgICAgICAgPEljb25cclxuICAgICAgICAgICAgICBuYW1lPXt1bnJlYWROb3RpZmljYXRpb25zID8gXCJoYW5kIHBvaW50IHJpZ2h0XCIgOiBcImJlbGwgb3V0bGluZVwifVxyXG4gICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgY29sb3I9e1xyXG4gICAgICAgICAgICAgICAgKGlzQWN0aXZlKFwiL25vdGlmaWNhdGlvbnNcIikgJiYgXCJ0ZWFsXCIpIHx8XHJcbiAgICAgICAgICAgICAgICAodW5yZWFkTm90aWZpY2F0aW9ucyAmJiBcIm9yYW5nZVwiKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPExpc3QuQ29udGVudD5cclxuICAgICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIk5vdGlmaWNhdGlvbnNcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgIDwvTGluaz5cclxuICAgICAgICA8YnIgLz5cclxuXHJcbiAgICAgICAgPExpbmsgaHJlZj17YC8ke3VzZXJuYW1lfWB9PlxyXG4gICAgICAgICAgPExpc3QuSXRlbSBhY3RpdmU9e3JvdXRlci5xdWVyeS51c2VybmFtZSA9PT0gdXNlcm5hbWV9PlxyXG4gICAgICAgICAgICA8SWNvblxyXG4gICAgICAgICAgICAgIG5hbWU9XCJ1c2VyXCJcclxuICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPXtyb3V0ZXIucXVlcnkudXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIFwidGVhbFwifVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICAgIDxMaXN0LkhlYWRlciBjb250ZW50PVwiQWNjb3VudFwiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDxiciAvPlxyXG5cclxuICAgICAgICA8TGlzdC5JdGVtIG9uQ2xpY2s9eygpID0+IGxvZ291dFVzZXIoKX0+XHJcbiAgICAgICAgICA8SWNvbiBuYW1lPVwibG9nIG91dFwiIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICA8TGlzdC5Db250ZW50PlxyXG4gICAgICAgICAgICA8TGlzdC5IZWFkZXIgY29udGVudD1cIkxvZ291dFwiIC8+XHJcbiAgICAgICAgICA8L0xpc3QuQ29udGVudD5cclxuICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgPC9MaXN0PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVNZW51O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBwYXJzZUNvb2tpZXMsIGRlc3Ryb3lDb29raWUgfSBmcm9tIFwibm9va2llc1wiO1xuaW1wb3J0IGJhc2VVcmwgZnJvbSBcIi4uL3V0aWxzL2Jhc2VVcmxcIjtcbmltcG9ydCB7IHJlZGlyZWN0VXNlciB9IGZyb20gXCIuLi91dGlscy9hdXRoVXNlclwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXQvTGF5b3V0XCI7XG5pbXBvcnQgXCJzZW1hbnRpYy11aS1jc3Mvc2VtYW50aWMubWluLmNzc1wiO1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0IHsuLi5wYWdlUHJvcHN9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuTXlBcHAuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKHsgQ29tcG9uZW50LCBjdHggfSkgPT4ge1xuICBjb25zdCB7IHRva2VuIH0gPSBwYXJzZUNvb2tpZXMoY3R4KTtcbiAgbGV0IHBhZ2VQcm9wcyA9IHt9O1xuXG4gIGNvbnN0IHByb3RlY3RlZFJvdXRlcyA9XG4gICAgY3R4LnBhdGhuYW1lID09PSBcIi9cIiB8fFxuICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvW3VzZXJuYW1lXVwiIHx8XG4gICAgY3R4LnBhdGhuYW1lID09PSBcIi9ub3RpZmljYXRpb25zXCIgfHxcbiAgICBjdHgucGF0aG5hbWUgPT09IFwiL3Bvc3QvW3Bvc3RpZF1cIiB8fFxuICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvbWVzc2FnZXNcIiB8fFxuICAgIGN0eC5wYXRobmFtZSA9PT0gXCIvc2VhcmNoXCI7XG5cbiAgaWYgKCF0b2tlbikge1xuICAgIHByb3RlY3RlZFJvdXRlcyAmJiByZWRpcmVjdFVzZXIoY3R4LCBcIi9sb2dpblwiKTtcbiAgfSBcbiAgZWxzZSB7XG4gICAgaWYgKENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIHBhZ2VQcm9wcyA9IGF3YWl0IENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChgJHtiYXNlVXJsfS9hcGkvYXV0aGAsIHtcbiAgICAgICAgaGVhZGVyczogeyBBdXRob3JpemF0aW9uOiB0b2tlbiB9LFxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IHsgdXNlciwgdXNlckZvbGxvd2VyU3RhdHMgfSA9IHJlcy5kYXRhO1xuXG4gICAgICBpZiAodXNlcikge1xuICAgICAgICAhcHJvdGVjdGVkUm91dGVzICYmIHJlZGlyZWN0VXNlcihcIi9cIik7XG4gICAgICB9XG5cbiAgICAgIHBhZ2VQcm9wcy51c2VyID0gdXNlcjtcbiAgICAgIHBhZ2VQcm9wcy51c2VyRm9sbG93ZXJTdGF0cyA9IHVzZXJGb2xsb3dlclN0YXRzO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkZXN0cm95Q29va2llKGN0eCwgXCJ0b2tlblwiKTtcbiAgICAgIHJlZGlyZWN0VXNlcihjdHgsIFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7IHBhZ2VQcm9wcyB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCBiYXNlVXJsIGZyb20gXCIuL2Jhc2VVcmxcIjtcclxuaW1wb3J0IGNhdGNoRXJyb3JzIGZyb20gXCIuL2NhdGNoRXJyb3JzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBjb29raWUgZnJvbSBcImpzLWNvb2tpZVwiO1xyXG5cclxuY29uc3Qgc2V0VG9rZW4gPSAodG9rZW4pID0+IHtcclxuICBjb29raWUuc2V0KFwidG9rZW5cIiwgdG9rZW4pO1xyXG4gIFJvdXRlci5wdXNoKFwiL1wiKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZWdpc3RlclVzZXIgPSBhc3luYyAoXHJcbiAgdXNlcixcclxuICBwcm9maWxlUGljVXJsLFxyXG4gIHNldEVycm9yLFxyXG4gIHNldExvYWRpbmdcclxuKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoYCR7YmFzZVVybH0vYXBpL3NpZ251cGAsIHtcclxuICAgICAgdXNlcixcclxuICAgICAgcHJvZmlsZVBpY1VybCxcclxuICAgIH0pO1xyXG4gICAgc2V0VG9rZW4ocmVzLmRhdGEpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zdCBlcnJvck1zZyA9IGNhdGNoRXJyb3JzKGVycm9yKTtcclxuICAgIHNldEVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbG9naW5Vc2VyID0gYXN5bmMgKHVzZXIsIHNldEVycm9yLCBzZXRMb2FkaW5nKSA9PiB7XHJcbiAgc2V0TG9hZGluZyh0cnVlKTtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtiYXNlVXJsfS9hcGkvYXV0aGAsIHsgdXNlciB9KTtcclxuICAgIHNldFRva2VuKHJlcy5kYXRhKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc3QgZXJyb3JNc2cgPSBjYXRjaEVycm9ycyhlcnJvcik7XHJcbiAgICBzZXRFcnJvcihlcnJvck1zZyk7XHJcbiAgfVxyXG4gIHNldExvYWRpbmcoZmFsc2UpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlZGlyZWN0VXNlciA9IChjdHgsIHJvdXRlKSA9PiB7XHJcbiAgaWYgKGN0eC5yZXEpIHtcclxuICAgIGN0eC5yZXMud3JpdGVIZWFkKDMwMiwgeyBMb2NhdGlvbjogcm91dGUgfSk7XHJcbiAgICBjdHgucmVzLmVuZCgpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBSb3V0ZXIucHVzaChyb3V0ZSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxvZ291dFVzZXIgPSAoZW1haWwpID0+IHtcclxuICBjb29raWUuc2V0KFwidXNlckVtYWlsXCIsIGVtYWlsKTtcclxuICBjb29raWUucmVtb3ZlKFwidG9rZW5cIik7XHJcbiAgUm91dGVyLnB1c2goXCIvbG9naW5cIik7XHJcbiAgUm91dGVyLnJlbG9hZCgpO1xyXG59O1xyXG4iLCJjb25zdCBiYXNlVXJsID1cImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYmFzZVVybDtcclxuIiwiY29uc3QgY2F0Y2hFcnJvcnMgPSAoZXJyb3IpID0+IHtcclxuICBsZXQgZXJyb3JNc2cgPSAnJztcclxuXHJcbiAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XHJcbiAgICAvLyBJZiB0aGUgcmVxdWVzdCB3YXMgbWFkZSBhbmQgdGhlIHNlcnZlciBub3QgcmVzcG9uZGVkIHdpdGggYSBzdGF0dXMgY29kZSBpbiB0aGUgcmFuZ2Ugb2YgMnh4XHJcblxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXNwb25zZS5kYXRhO1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xyXG4gICAgLy8gaWYgdGhlIHJlcXVlc3Qgd2FzIG1hZGUgYW5kIG5vIHJlc3BvbnNlIHdhcyByZWNldmllZCBmcm9tIHNlcnZlclxyXG4gICAgZXJyb3JNc2cgPSBlcnJvci5yZXF1ZXN0O1xyXG5cclxuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3JNc2cpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyBpZiBzb21ldGhpbmcgZWxzZSBoYXBwZW5lZCB3aGlsZSBtYWtpbmcgdGhlIHJlcXVlc3RcclxuICAgIGVycm9yTXNnID0gZXJyb3IubWVzc2FnZTtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGVycm9yTXNnKTtcclxuICB9XHJcbiByZXR1cm4gZXJyb3JNc2c7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYXRjaEVycm9ycztcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9va2llc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibnByb2dyZXNzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInNlbWFudGljLXVpLXJlYWN0XCIpOzsiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9