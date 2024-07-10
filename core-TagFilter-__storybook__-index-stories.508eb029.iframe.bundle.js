"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[8467],{"./packages/components/src/core/TagFilter/__storybook__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ScreenshotTest:()=>ScreenshotTest,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var dist=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs"),react=__webpack_require__("./node_modules/react/index.js"),TAG_FILTER_EXCLUDED_CONTROLS=["label"],TAG_FILTER_DEFAULT_STYLES={display:"inline-grid",gridColumnGap:24,gridRowGap:24,gridTemplateColumns:"repeat(1, 1fr)",gridTemplateRows:"repeat(1, 1fr)"},TAG_FILTER_PSEUDO_STATES=["default","hover","active","focus"],TAG_FILTER_LABEL_STYLE={fontFamily:"sans-serif",fontSize:"0.67em",fontWeight:"normal",margin:"20px 0 10px"},core_TagFilter=__webpack_require__("./packages/components/src/core/TagFilter/index.tsx"),Button=__webpack_require__("./packages/components/src/core/Button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var TagFilter=function TagFilter(props){var label=props.label,_useState2=_slicedToArray((0,react.useState)(!0),2),visible=_useState2[0],setVisible=_useState2[1];return(0,jsx_runtime.jsxs)("div",{style:TAG_FILTER_DEFAULT_STYLES,children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(Button.A,{disabled:visible,onClick:function handleShowChip(){return setVisible(!0)},sdsStyle:"minimal",sdsType:visible?"secondary":"primary",children:visible?"Delete the tag by clicking on its icon":"Click to reset"})}),(0,jsx_runtime.jsx)("div",{children:visible&&(0,jsx_runtime.jsx)(core_TagFilter.A,_objectSpread({label,onDelete:function handleDismissChip(){return setVisible(!1)}},props))})]})};try{TagFilter.displayName="TagFilter",TagFilter.__docgenInfo={description:"",displayName:"TagFilter",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TagFilter/__storybook__/stories/default.tsx#TagFilter"]={docgenInfo:TagFilter.__docgenInfo,name:"TagFilter",path:"packages/components/src/core/TagFilter/__storybook__/stories/default.tsx#TagFilter"})}catch(__react_docgen_typescript_loader_error){}function screenshot_typeof(o){return screenshot_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},screenshot_typeof(o)}function screenshot_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function screenshot_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?screenshot_ownKeys(Object(t),!0).forEach((function(r){screenshot_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):screenshot_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function screenshot_defineProperty(obj,key,value){return(key=function screenshot_toPropertyKey(t){var i=function screenshot_toPrimitive(t,r){if("object"!=screenshot_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=screenshot_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==screenshot_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ScreenshotTestDemo=function ScreenshotTestDemo(props){var label=props.label;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:TAG_FILTER_PSEUDO_STATES.map((function(state){return(0,jsx_runtime.jsxs)(react.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{style:TAG_FILTER_LABEL_STYLE,children:["State: ",(0,jsx_runtime.jsx)("b",{children:state})]}),(0,jsx_runtime.jsx)(core_TagFilter.A,screenshot_objectSpread({"data-testid":"button",label,onDelete:function onDelete(){},className:"pseudo-".concat(state)},props),state)]},state)}))})};try{ScreenshotTestDemo.displayName="ScreenshotTestDemo",ScreenshotTestDemo.__docgenInfo={description:"",displayName:"ScreenshotTestDemo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TagFilter/__storybook__/stories/screenshot.tsx#ScreenshotTestDemo"]={docgenInfo:ScreenshotTestDemo.__docgenInfo,name:"ScreenshotTestDemo",path:"packages/components/src/core/TagFilter/__storybook__/stories/screenshot.tsx#ScreenshotTestDemo"})}catch(__react_docgen_typescript_loader_error){}function test_typeof(o){return test_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},test_typeof(o)}function test_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function test_defineProperty(obj,key,value){return(key=function test_toPropertyKey(t){var i=function test_toPrimitive(t,r){if("object"!=test_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=test_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==test_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TestDemo=function TestDemo(props){var label=props.label;return(0,jsx_runtime.jsx)(core_TagFilter.A,function test_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?test_ownKeys(Object(t),!0).forEach((function(r){test_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):test_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({"data-testid":"tag-filter",label,onDelete:function onDelete(){}},props))};try{TestDemo.displayName="TestDemo",TestDemo.__docgenInfo={description:"",displayName:"TestDemo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TagFilter/__storybook__/stories/test.tsx#TestDemo"]={docgenInfo:TestDemo.__docgenInfo,name:"TestDemo",path:"packages/components/src/core/TagFilter/__storybook__/stories/test.tsx#TestDemo"})}catch(__react_docgen_typescript_loader_error){}function index_stories_typeof(o){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},index_stories_typeof(o)}function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(t){var i=function index_stories_toPrimitive(t,r){if("object"!=index_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=index_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==index_stories_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const index_stories={argTypes:{label:{control:{type:"text"},required:!0}},component:TagFilter,parameters:{badges:[dist.yq.STABLE]},title:"Components/TagFilter"};var Default={args:{label:"TagFilter"}},ScreenshotTest={args:{label:"Label"},parameters:{controls:{exclude:TAG_FILTER_EXCLUDED_CONTROLS},snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(ScreenshotTestDemo,index_stories_objectSpread({},args))}},Test={args:{label:"Label"},parameters:{controls:{exclude:TAG_FILTER_EXCLUDED_CONTROLS},snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(TestDemo,index_stories_objectSpread(index_stories_objectSpread({},args),{},{"data-testid":"tag-filter"}))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "TagFilter"\n  }\n}',...Default.parameters?.docs?.source}}},ScreenshotTest.parameters={...ScreenshotTest.parameters,docs:{...ScreenshotTest.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label"\n  },\n  parameters: {\n    controls: {\n      exclude: TAG_FILTER_EXCLUDED_CONTROLS\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <ScreenshotTestDemo {...args} />\n}',...ScreenshotTest.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label"\n  },\n  parameters: {\n    controls: {\n      exclude: TAG_FILTER_EXCLUDED_CONTROLS\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} data-testid="tag-filter" />\n}',...Test.parameters?.docs?.source}}};const __namedExportsOrder=["Default","ScreenshotTest","Test"]},"./packages/components/src/core/Tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_Tag});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function generatePrimaryTagColors(intent,colors,semanticColors){return intent?{background:colors.length>=2?colors[1]:null==semanticColors?void 0:semanticColors[intent].fill,backgroundClicked:colors.length>=2?(0,colorManipulator.e$)(colors[1],.3):null==semanticColors?void 0:semanticColors[intent].fillPressed,backgroundHover:colors.length>=2?(0,colorManipulator.e$)(colors[1],.15):null==semanticColors?void 0:semanticColors[intent].fillHover,iconColor:colors.length>2?colors[2]:"white",label:colors.length?colors[0]:"white"}:{background:null==semanticColors?void 0:semanticColors.neutral.fill,backgroundClicked:null==semanticColors?void 0:semanticColors.neutral.fillPressed,backgroundHover:null==semanticColors?void 0:semanticColors.neutral.fillHover,iconColor:"white",label:"white"}}function generateSecondaryTagColors(intent,colors,semanticColors){return intent?{background:colors.length>=2?colors[1]:null==semanticColors?void 0:semanticColors[intent].surface,backgroundClicked:colors.length>=2?(0,colorManipulator.e$)(colors[1],.3):null==semanticColors?void 0:semanticColors[intent].fillPressed,backgroundHover:colors.length>=2?(0,colorManipulator.e$)(colors[1],.15):null==semanticColors?void 0:semanticColors[intent].fillHover,iconColor:colors.length>2?colors[2]:null==semanticColors?void 0:semanticColors[intent].icon,label:colors.length?colors[0]:null==semanticColors?void 0:semanticColors[intent].fillPressed}:{background:null==semanticColors?void 0:semanticColors.neutral.surface,backgroundClicked:null==semanticColors?void 0:semanticColors.neutral.fillPressed,backgroundHover:null==semanticColors?void 0:semanticColors.neutral.fillHover,iconColor:null==semanticColors?void 0:semanticColors.neutral.icon,label:null==semanticColors?void 0:semanticColors.neutral.fillPressed}}function createTypeCss(props,type){var _semanticTextColors$b2,_semanticTextColors$b3,semanticColors=(0,styles.Ac)(props),semanticTextColors=(0,styles.yA)(props),intent="string"==typeof props.tagColor?props.tagColor:null,colors=Array.isArray(props.tagColor)?_toConsumableArray(props.tagColor):[],typeColors={primary:generatePrimaryTagColors(intent,colors,semanticColors),secondary:generateSecondaryTagColors(intent,colors,semanticColors)}[type];return(0,emotion_react_browser_esm.AH)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    ","\n\n    background-color: ",";\n    position: relative;\n\n    .MuiChip-label {\n      color: ",";\n    }\n\n    svg {\n      fill: ",";\n    }\n\n    &:hover,\n    &:active {\n      .MuiChip-label {\n        color: ",";\n      }\n\n      svg {\n        fill: ",";\n      }\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n\n    &:active {\n      background-color: ",";\n    }\n\n    &.Mui-focusVisible {\n      background-color: ",";\n    }x\n  "])),(0,styles.UT)(),typeColors.background,typeColors.label,typeColors.iconColor,null==semanticTextColors||null===(_semanticTextColors$b2=semanticTextColors.base)||void 0===_semanticTextColors$b2?void 0:_semanticTextColors$b2.onFill,null==semanticTextColors||null===(_semanticTextColors$b3=semanticTextColors.base)||void 0===_semanticTextColors$b3?void 0:_semanticTextColors$b3.onFill,typeColors.backgroundHover,typeColors.backgroundClicked,typeColors.backgroundHover)}var typeToCss={primary:function primary(props){return createTypeCss(props,"primary")},secondary:function secondary(props){return createTypeCss(props,"secondary")}},doNotForwardProps=["sdsType","sdsStyle","sdsSize","tagColor","hover"],StyledTag=(0,styled.Ay)(Chip.A,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  border: none;\n\n  ","\n"])),(function(props){var _props$hover=props.hover,hover=void 0===_props$hover||_props$hover,sdsType=props.sdsType,sdsStyle=props.sdsStyle,_props$sdsSize3=props.sdsSize,sdsSize=void 0===_props$sdsSize3?"s":_props$sdsSize3,isRounded="rounded"===sdsStyle,type=sdsType||"primary";return(0,emotion_react_browser_esm.AH)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n      ","\n      ","\n      ","\n      ","\n    "])),"l"===sdsSize?function tagSizeL(props){var spaces=(0,styles.oZ)(props),iconSizes=(0,styles.I7)(props);return(0,emotion_react_browser_esm.AH)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    height: unset;\n    margin: 0 ","px ","px 0;\n\n    .MuiChip-label {\n      ","\n      padding: 0;\n    }\n\n    .MuiSvgIcon-root {\n      height: ","px;\n      width: ","px;\n      margin: 0 ","px 0 -","px;\n    }\n\n    .MuiChip-deleteIcon {\n      ","\n      color: white;\n      margin: 0 0 0 ","px;\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==spaces?void 0:spaces.xxs,null==spaces?void 0:spaces.xs,(0,styles.Zo)(props),null==iconSizes?void 0:iconSizes.l.height,null==iconSizes?void 0:iconSizes.l.width,null==spaces?void 0:spaces.xxs,null==spaces?void 0:spaces.xxxs,(0,styles.Se)(props),null==spaces?void 0:spaces.xxs,null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props):function tagSizeS(props){var spaces=(0,styles.oZ)(props),iconSizes=(0,styles.I7)(props);return(0,emotion_react_browser_esm.AH)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    height: unset;\n    margin: 0 ","px ","px 0;\n\n    .MuiChip-label {\n      ","\n      padding: 0;\n    }\n\n    .MuiSvgIcon-root {\n      height: ","px;\n      width: ","px;\n      margin: 0 ","px 0 -","px;\n    }\n\n    .MuiChip-deleteIcon {\n      ","\n      color: white;\n      margin: 0 0 0 ","px;\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==spaces?void 0:spaces.xxs,null==spaces?void 0:spaces.xs,(0,styles.jT)(props),null==iconSizes?void 0:iconSizes.xs.height,null==iconSizes?void 0:iconSizes.xs.width,null==spaces?void 0:spaces.xxs,null==spaces?void 0:spaces.xxxs,(0,styles.Se)(props),null==spaces?void 0:spaces.xxs,null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props),typeToCss[type](props),isRounded?function rounded(props){var corners=(0,styles.VP)(props),spaces=(0,styles.oZ)(props),_props$sdsSize=props.sdsSize,sdsSize=void 0===_props$sdsSize?"s":_props$sdsSize,icon=props.icon,topBottomPadding="s"===sdsSize?null==spaces?void 0:spaces.xxxs:icon?null==spaces?void 0:spaces.xxs:null==spaces?void 0:spaces.xs;return(0,emotion_react_browser_esm.AH)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    border-radius: ","px;\n    padding: ","px ","px;\n\n    &:after {\n      border-radius: ","px;\n    }\n  "])),null==corners?void 0:corners.l,topBottomPadding,null==spaces?void 0:spaces.s,null==corners?void 0:corners.l)}(props):function square(props){var corners=(0,styles.VP)(props),spaces=(0,styles.oZ)(props),_props$sdsSize2=props.sdsSize,sdsSize=void 0===_props$sdsSize2?"s":_props$sdsSize2,icon=props.icon,topBottomPadding="s"===sdsSize?null==spaces?void 0:spaces.xxxs:icon?null==spaces?void 0:spaces.xxs:null==spaces?void 0:spaces.xs;return(0,emotion_react_browser_esm.AH)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    border-radius: ","px;\n    padding: ","px ","px;\n\n    &:after {\n      border-radius: ","px;\n    }\n  "])),null==corners?void 0:corners.m,topBottomPadding,null==spaces?void 0:spaces.s,null==corners?void 0:corners.m)}(props),hover?function withHover(props){var _semanticTextColors$b,semanticTextColors=(0,styles.yA)(props);return(0,emotion_react_browser_esm.AH)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    &:hover {\n      cursor: pointer;\n    }\n\n    &:hover,\n    &:focus-visible {\n      color: ",";\n    }\n  "])),null==semanticTextColors||null===(_semanticTextColors$b=semanticTextColors.base)||void 0===_semanticTextColors$b?void 0:_semanticTextColors$b.onFill)}(props):"pointer-events: none;")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Tag=function Tag(props){var color=props.color;return(0,jsx_runtime.jsx)(StyledTag,_objectSpread(_objectSpread({tagColor:color},props),{},{color:"primary"}))};const core_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{label:{defaultValue:null,description:"The content of the component.",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"SdsTagColorType"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},sdsType:{defaultValue:null,description:"",name:"sdsType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},sdsSize:{defaultValue:null,description:"",name:"sdsSize",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"l"'}]}},tagColor:{defaultValue:null,description:"",name:"tagColor",required:!1,type:{name:"SdsTagColorType"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"packages/components/src/core/Tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/core/TagFilter/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_TagFilter});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts"),Tag=__webpack_require__("./packages/components/src/core/Tag/index.tsx");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledTag=(0,styled.Ay)(Tag.A)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _iconSizes$xs,_iconSizes$xs2,_iconSizes$xs3,_iconSizes$xs4,spaces=(0,styles.oZ)(props),iconSizes=(0,styles.I7)(props);return(0,emotion_react_browser_esm.AH)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n      padding: ","px ","px;\n\n      &:after {\n        display: none;\n      }\n\n      .MuiChip-label {\n        ","\n      }\n\n      .MuiChip-deleteIcon {\n        margin: 0 0 0 ","px;\n        width: ","px !important;\n        height: ","px !important;\n      }\n\n      .MuiSvgIcon-root {\n        margin: 0;\n        width: ","px !important;\n        height: ","px !important;\n      }\n\n      .MuiChip-label,\n      svg {\n        z-index: auto;\n      }\n    "])),null==spaces?void 0:spaces.xxs,null==spaces?void 0:spaces.s,(0,styles.Se)(props),null==spaces?void 0:spaces.s,null==iconSizes||null===(_iconSizes$xs=iconSizes.xs)||void 0===_iconSizes$xs?void 0:_iconSizes$xs.width,null==iconSizes||null===(_iconSizes$xs2=iconSizes.xs)||void 0===_iconSizes$xs2?void 0:_iconSizes$xs2.height,null==iconSizes||null===(_iconSizes$xs3=iconSizes.xs)||void 0===_iconSizes$xs3?void 0:_iconSizes$xs3.width,null==iconSizes||null===(_iconSizes$xs4=iconSizes.xs)||void 0===_iconSizes$xs4?void 0:_iconSizes$xs4.height)})),Button=__webpack_require__("./packages/components/src/core/Button/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TagFilter=function TagFilter(props){return(0,jsx_runtime.jsx)(StyledTag,_objectSpread(_objectSpread({role:"none presentation"},props),{},{deleteIcon:(0,jsx_runtime.jsx)(Button.A,{"aria-label":"Delete Tag",icon:"XMark",sdsSize:"small",sdsType:"tertiary",sdsStyle:"icon"}),color:"info"}))};const core_TagFilter=TagFilter;try{TagFilter.displayName="TagFilter",TagFilter.__docgenInfo={description:"",displayName:"TagFilter",props:{label:{defaultValue:null,description:"The content of the component.",name:"label",required:!0,type:{name:"string"}},onDelete:{defaultValue:null,description:"Callback fired when the delete icon is clicked.\nIf set, the delete icon will be shown.",name:"onDelete",required:!0,type:{name:"(event: any) => void"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TagFilter/index.tsx#TagFilter"]={docgenInfo:TagFilter.__docgenInfo,name:"TagFilter",path:"packages/components/src/core/TagFilter/index.tsx#TagFilter"})}catch(__react_docgen_typescript_loader_error){}}}]);