"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[3568],{"./node_modules/@mui/material/styles/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>useTheme});__webpack_require__("./node_modules/react/index.js");var _mui_system__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js"),_defaultTheme__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),_identifier__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useTheme(){const theme=(0,_mui_system__WEBPACK_IMPORTED_MODULE_1__.A)(_defaultTheme__WEBPACK_IMPORTED_MODULE_2__.A);return theme[_identifier__WEBPACK_IMPORTED_MODULE_3__.A]||theme}},"./packages/components/src/core/Bases/Colors/__storybook__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PrimitiveColors:()=>PrimitiveColors,SemanticColors:()=>SemanticColors,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,storybookBadges=__webpack_require__("./packages/components/src/common/storybook/storybookBadges.ts"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledColorWrapper=(0,styled.Ay)("div")(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.Zo,(function(props){var _borders$base,backgroundColor=props.backgroundColor,textColor=props.textColor,spaces=(0,styles.oZ)(props),corners=(0,styles.VP)(props),borders=(0,styles.ow)(props),fontWeights=(0,styles.bI)(props);return"\n      background-color: ".concat(backgroundColor,";\n      color: ").concat(textColor,";\n      padding: ").concat(null==spaces?void 0:spaces.xs,"px ").concat(null==spaces?void 0:spaces.s,"px;\n      margin: ").concat(null==spaces?void 0:spaces.xxxs,"px 0;\n      border-radius: ").concat(null==corners?void 0:corners.m,"px;\n      border: solid 1px ").concat(backgroundColor,";\n      transition: transform 0.2s ease-in-out;\n\n      & > div {\n        display: flex;\n        justify-content: space-between;\n      }\n\n      &:hover {\n        border: ").concat(null==borders||null===(_borders$base=borders.base)||void 0===_borders$base?void 0:_borders$base.hover,";\n        z-index: 10;\n\n        .color-title {\n          font-weight: ").concat(null==fontWeights?void 0:fontWeights.semibold,";\n        }\n      }\n    ")})),StyledColorGroupTitle=(0,styled.Ay)("h3")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.To,(function(props){var spaces=(0,styles.oZ)(props);return"\n      margin-bottom: ".concat(null==spaces?void 0:spaces.s,"px;\n    ")})),StyledColorCode=(0,styled.Ay)("span")(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.K,(function(props){var fontWeights=(0,styles.bI)(props);return"\n      cursor: pointer;\n      font-size: 12px;\n\n      &:active {\n        font-weight: ".concat(null==fontWeights?void 0:fontWeights.semibold,";\n      }\n    ")})),StyledColorTitle=(0,styled.Ay)("span")(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n"])),styles.Zo),StyledColorVariable=(0,styled.Ay)("span")(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.K,(function(props){var fontWeights=(0,styles.bI)(props);return"\n      cursor: pointer;\n      font-size: 10px;\n\n      &:active {\n        font-weight: ".concat(null==fontWeights?void 0:fontWeights.semibold,";\n      }\n    ")})),StyledColorsWrapper=(0,styled.Ay)("div")(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  display: grid;\n  grid-template-columns: repeat(1, 1fr);\n  grid-row-gap: 30px;\n"]))),utils=__webpack_require__("./packages/components/src/core/Bases/utils.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Colors_color=function Color(props){var group=props.group,value=props.value,shade=props.shade,_props$prefix=props.prefix,prefix=void 0===_props$prefix?"$":_props$prefix,semanticName=props.semanticName,theme=(0,useTheme.A)(),mode=(0,styles.Wi)({theme}),sassVariable=shade?"$".concat(prefix,"-").concat(group,"-").concat((0,utils.wi)(shade)).concat("dark"===mode?"-dark":""):"$".concat(prefix,"-").concat(group).concat("dark"===mode?"-dark":""),cssVariable=shade?"--"+prefix+"-"+group+"-"+(0,utils.wi)(shade):"--"+prefix+"-"+group,title=shade||group;return(0,jsx_runtime.jsxs)(StyledColorWrapper,{backgroundColor:String(value),textColor:(0,utils.o0)(value),children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(StyledColorTitle,{className:"color-title",children:title.charAt(0).toUpperCase()+title.slice(1)}),(0,jsx_runtime.jsx)(StyledColorVariable,{onClick:function onClick(){return(0,utils.lW)(sassVariable)},children:sassVariable})]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(StyledColorCode,{onClick:function onClick(){return(0,utils.lW)(value)},children:String(semanticName)}),(0,jsx_runtime.jsx)(StyledColorVariable,{onClick:function onClick(){return(0,utils.lW)(cssVariable)},children:cssVariable})]})]},group+shade)};try{color.displayName="color",color.__docgenInfo={description:"",displayName:"color",props:{group:{defaultValue:null,description:"",name:"group",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string"}},shade:{defaultValue:null,description:"",name:"shade",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}},semanticName:{defaultValue:null,description:"",name:"semanticName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Bases/Colors/__storybook__/components/Colors/color.tsx#color"]={docgenInfo:color.__docgenInfo,name:"color",path:"packages/components/src/core/Bases/Colors/__storybook__/components/Colors/color.tsx#color"})}catch(__react_docgen_typescript_loader_error){}function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function flattenObj(obj){var parent=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,res=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};for(var _key in obj){var propName=parent?"".concat(parent,"-").concat(_key):_key;"object"===_typeof(obj[_key])?flattenObj(obj[_key],propName,res):res[obj[_key]]=propName}return res}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Colors=function Colors(props){var colors=props.colors,_props$type=props.type,type=void 0===_props$type?"semantic":_props$type,prefix=props.prefix,theme=(0,useTheme.A)(),primitiveColors=(0,styles.jM)({theme}),flattenColors=primitiveColors?flattenObj(primitiveColors,null):{},renderColors=function renderColors(sdsColors,groupName){return"string"==typeof sdsColors?(0,jsx_runtime.jsx)(Colors_color,{group:groupName,semanticName:"semantic"===type?flattenColors[sdsColors]:sdsColors,value:sdsColors,prefix}):Object.entries(sdsColors).map((function(_ref3){var _ref4=_slicedToArray(_ref3,2),k=_ref4[0],v=_ref4[1];if("transparent"!==v)return"semantic"===type&&v.length>7?(0,jsx_runtime.jsx)(Colors_color,{group:groupName,value:v,semanticName:"".concat(flattenColors[v.slice(0,-2)]," (28% opacity)"),shade:k,prefix},k):(0,jsx_runtime.jsx)(Colors_color,{group:groupName,value:v,semanticName:"semantic"===type?flattenColors[v]:v,shade:k,prefix},k)}))};return(0,jsx_runtime.jsx)(StyledColorsWrapper,{children:colors&&function renderColorGroups(colorGroups){if(colorGroups)return Object.entries(colorGroups).map((function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],value=_ref2[1];return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(StyledColorGroupTitle,{children:key.charAt(0).toLocaleUpperCase()+key.slice(1)}),(0,jsx_runtime.jsx)("div",{children:renderColors(value,key)})]},key)}))}(colors)})};const components_Colors=Colors;try{Colors.displayName="Colors",Colors.__docgenInfo={description:"",displayName:"Colors",props:{colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"object"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"semantic"'},{value:'"primitive"'}]}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Bases/Colors/__storybook__/components/Colors/index.tsx#Colors"]={docgenInfo:Colors.__docgenInfo,name:"Colors",path:"packages/components/src/core/Bases/Colors/__storybook__/components/Colors/index.tsx#Colors"})}catch(__react_docgen_typescript_loader_error){}function primitiveColors_typeof(o){return primitiveColors_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},primitiveColors_typeof(o)}var _excluded=["gray"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=primitiveColors_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=primitiveColors_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==primitiveColors_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var PrimitiveColorsTemplate=function PrimitiveColorsTemplate(){var theme=(0,useTheme.A)(),colors=(0,styles.jM)({theme});if(colors){var gray=colors.gray,rest=_objectWithoutProperties(colors,_excluded);return(0,jsx_runtime.jsx)(components_Colors,{colors:_objectSpread({gray},rest),type:"primitive",prefix:"sds-color-primitive"})}};function semanticColors_typeof(o){return semanticColors_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},semanticColors_typeof(o)}var semanticColors_excluded=["base"];function semanticColors_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function semanticColors_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?semanticColors_ownKeys(Object(t),!0).forEach((function(r){semanticColors_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):semanticColors_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function semanticColors_defineProperty(obj,key,value){return(key=function semanticColors_toPropertyKey(t){var i=function semanticColors_toPrimitive(t,r){if("object"!=semanticColors_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=semanticColors_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==semanticColors_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function semanticColors_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function semanticColors_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SemanticColorsTemplate=function SemanticColorsTemplate(){var theme=(0,useTheme.A)(),semanticColors=(0,styles.Bd)({theme}),_ref=semanticColors||{},base=_ref.base,rest=semanticColors_objectWithoutProperties(_ref,semanticColors_excluded);return semanticColors&&(0,jsx_runtime.jsx)(components_Colors,{colors:semanticColors_objectSpread({base},rest),prefix:"sds-color-semantic"})};const index_stories={parameters:{axe:{disabledRules:["color-contrast"]},badges:[storybookBadges.y.STABLE]},title:"Bases/Colors"};var PrimitiveColors={render:function render(){return(0,jsx_runtime.jsx)(PrimitiveColorsTemplate,{})}},SemanticColors={render:function render(){return(0,jsx_runtime.jsx)(SemanticColorsTemplate,{})}};PrimitiveColors.parameters={...PrimitiveColors.parameters,docs:{...PrimitiveColors.parameters?.docs,source:{originalSource:"{\n  render: () => <PrimitiveColorsTemplate />\n}",...PrimitiveColors.parameters?.docs?.source}}},SemanticColors.parameters={...SemanticColors.parameters,docs:{...SemanticColors.parameters?.docs,source:{originalSource:"{\n  render: () => <SemanticColorsTemplate />\n}",...SemanticColors.parameters?.docs?.source}}};const __namedExportsOrder=["PrimitiveColors","SemanticColors"]},"./packages/components/src/core/Bases/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{lW:()=>copyToClipboard,o0:()=>pickTextColorBasedOnBgColor,wi:()=>convertToKebabCase});var pickTextColorBasedOnBgColor=function pickTextColorBasedOnBgColor(bgColor){var lightColor=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"#ffffff",darkColor=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"#000000",color="#"===bgColor.charAt(0)?bgColor.substring(1,7):bgColor,c=[parseInt(color.substring(0,2),16)/255,parseInt(color.substring(2,4),16)/255,parseInt(color.substring(4,6),16)/255].map((function(col){return col<=.03928?col/12.92:Math.pow((col+.055)/1.055,2.4)}));return.2126*c[0]+.7152*c[1]+.0722*c[2]>.5?darkColor:lightColor},copyToClipboard=function copyToClipboard(text){navigator.clipboard.writeText(text)},convertToKebabCase=function convertToKebabCase(input){return input.replace(/[A-Z]/g,(function(match){return"-".concat(match.toLowerCase())})).replace(/\d+/g,(function(match){return"-".concat(match)})).replace(/^-/,"").replace(/-+/g,"-")}}}]);