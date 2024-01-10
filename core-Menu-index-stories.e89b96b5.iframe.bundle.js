"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[2922],{"./packages/components/src/core/Menu/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomPlacement:()=>CustomPlacement,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_Button__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/Button/index.tsx"),_MenuItem__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/core/MenuItem/index.tsx"),_index__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/core/Menu/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}const __WEBPACK_DEFAULT_EXPORT__={component:function Menu(props){var _React$useState2=_slicedToArray(react__WEBPACK_IMPORTED_MODULE_0__.useState(null),2),anchorEl=_React$useState2[0],setAnchorEl=_React$useState2[1],handleClose=function handleClose(){setAnchorEl(null)};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div",{style:{display:"flex",justifyContent:"space-around"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Button__WEBPACK_IMPORTED_MODULE_1__.Z,{sdsStyle:"minimal",sdsType:"secondary",onClick:function handleClick(event){setAnchorEl(event.currentTarget)},children:"Click me!"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({anchorEl,keepMounted:!0,open:Boolean(anchorEl),onClose:handleClose},props),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:handleClose,children:"Contact us"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:handleClose,children:"Terms of Use"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:handleClose,children:"Privacy Policy"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_MenuItem__WEBPACK_IMPORTED_MODULE_2__.Z,{onClick:handleClose,children:"Logout"})]}))]})},title:"Dropdowns/Menu"};var Default={},CustomPlacement={args:{anchorOrigin:{horizontal:"right",vertical:"bottom"},column:"column value",transformOrigin:{horizontal:"right",vertical:"top"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},CustomPlacement.parameters={...CustomPlacement.parameters,docs:{...CustomPlacement.parameters?.docs,source:{originalSource:'{\n  args: {\n    anchorOrigin: {\n      horizontal: "right",\n      vertical: "bottom"\n    },\n    column: "column value",\n    transformOrigin: {\n      horizontal: "right",\n      vertical: "top"\n    }\n  }\n}',...CustomPlacement.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomPlacement"]},"./packages/components/src/core/Button/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Button});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,react=__webpack_require__("./node_modules/react/index.js"),warnings=__webpack_require__("./packages/components/src/common/warnings.ts"),Button=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts"),a11y=__webpack_require__("./packages/components/src/core/styles/common/mixins/a11y.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var sdsPropNames=["isAllCaps","isRounded","sdsStyle","sdsType"],ButtonBase=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  box-shadow: none;\n  ","\n  ","\n"])),a11y.s,(function(props){var variant=props.variant,colors=(0,styles.EC)(props),spacings=(0,styles.Gr)(props),containedPadding="".concat(null==spacings?void 0:spacings.xs,"px ").concat(null==spacings?void 0:spacings.l,"px"),outlinedPadding="".concat(((null==spacings?void 0:spacings.xs)||0)-1,"px ").concat(((null==spacings?void 0:spacings.l)||0)-1,"px"),padding="outlined"===variant?outlinedPadding:containedPadding,outlineBorder="outlined"===variant?"border-color: ".concat(null==colors?void 0:colors.primary[400],";"):"";return"\n      ".concat(outlineBorder,"\n      padding: ").concat(padding,";\n      min-width: 120px;\n      height: 34px;\n      &:hover {\n        color: white;\n        background-color: ").concat(null==colors?void 0:colors.primary[500],";\n        box-shadow: none;\n      }\n      &:active {\n        color: white;\n        background-color: ").concat(null==colors?void 0:colors.primary[600],";\n        box-shadow: none;\n      }\n      &:disabled {\n        color: ").concat(null==colors?void 0:colors.gray[400],";\n        background-color: ").concat(null==colors?void 0:colors.gray[300],";\n        border-color: ").concat(null==colors?void 0:colors.gray[300],";\n      }\n      .MuiButton-startIcon {\n        margin-right: ").concat(null==spacings?void 0:spacings.m,"px;\n      }\n      .MuiButton-endIcon {\n        margin-left: ").concat(null==spacings?void 0:spacings.m,"px;\n      }\n    ")})),RoundedButton=(0,styled.ZP)(ButtonBase,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var corners=(0,styles.DV)(props);return"\n      border-radius: ".concat(null==corners?void 0:corners.l,"px;\n    ")})),SquareButton=ButtonBase,MinimalButton=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n\n  ","\n\n  ","\n  &:hover, &:focus-visible {\n    background-color: transparent;\n  }\n"])),a11y.s,(function(props){var spacings=(0,styles.Gr)(props);return"\n      padding: ".concat(null==spacings?void 0:spacings.xxs,"px 0;\n    ")}),(function(props){return null!=props&&props.isAllCaps?styles.n$:""})),minimal=function minimal(props){var colors=(0,styles.EC)(props),spaces=(0,styles.Gr)(props);return"\n    &:hover, &:focus-visible {\n      color: ".concat(null==colors?void 0:colors.primary[500],";\n    }\n    &:active {\n      color: ").concat(null==colors?void 0:colors.primary[600],";\n    }\n    &:disabled {\n      color: ").concat(null==colors?void 0:colors.gray[400],";\n    }\n\n    .MuiButton-startIcon {\n      margin-right: ").concat(null==spaces?void 0:spaces.xxs,"px;\n    }\n  ")},PrimaryMinimalButton=(0,styled.ZP)(MinimalButton)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n"])),minimal),SecondaryMinimalButton=(0,styled.ZP)(MinimalButton)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n  color: #000;\n"])),minimal),StyledButton=(0,styled.ZP)(Button.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop)}})(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  ","\n  ","\n"])),a11y.s,(function(props){if(!props.isRounded)return"";var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props);return"\n      border-radius: ".concat(null==corners?void 0:corners.l,"px;\n      padding: ").concat(null==spacings?void 0:spacings.xs,"px ").concat(null==spacings?void 0:spacings.l,"px;\n      min-width: 120px;\n      height: 34px;\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Button_Button=react.forwardRef((function(props,ref){var sdsStyle=null==props?void 0:props.sdsStyle,sdsType=null==props?void 0:props.sdsType;sdsStyle&&sdsType||(0,warnings.$)(warnings.e.ButtonMissingSDSProps),"boolean"==typeof(null==props?void 0:props.isAllCaps)&&"minimal"!==sdsStyle&&console.warn("Warning: isAllCaps is only applied to buttons with sdsStyle='minimal'.");var isAllCaps="boolean"!=typeof(null==props?void 0:props.isAllCaps)||(null==props?void 0:props.isAllCaps),propsWithDefault=_objectSpread(_objectSpread({},props),{},{isAllCaps});switch(!0){case"rounded"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(RoundedButton,_objectSpread({color:"primary",ref,variant:"contained"},propsWithDefault));case"rounded"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(RoundedButton,_objectSpread({color:"primary",ref,variant:"outlined"},propsWithDefault));case"square"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(SquareButton,_objectSpread({color:"primary",ref,variant:"contained"},propsWithDefault));case"square"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(SquareButton,_objectSpread({color:"primary",ref,variant:"outlined"},propsWithDefault));case"minimal"===sdsStyle&&"primary"===sdsType:return(0,jsx_runtime.jsx)(PrimaryMinimalButton,_objectSpread({color:"primary",ref,variant:"text"},propsWithDefault));case"minimal"===sdsStyle&&"secondary"===sdsType:return(0,jsx_runtime.jsx)(SecondaryMinimalButton,_objectSpread({color:"primary",ref,variant:"text"},propsWithDefault));default:return(0,jsx_runtime.jsx)(StyledButton,_objectSpread(_objectSpread({},propsWithDefault),{},{ref}))}}));const core_Button=Button_Button;try{Button_Button.displayName="Button",Button_Button.__docgenInfo={description:"",displayName:"Button",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Button/index.tsx#Button"]={docgenInfo:Button_Button.__docgenInfo,name:"Button",path:"packages/components/src/core/Button/index.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}}}]);