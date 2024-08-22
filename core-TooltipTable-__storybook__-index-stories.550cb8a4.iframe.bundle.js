"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[4084],{"./packages/components/src/core/TooltipTable/__storybook__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var dist=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs"),TOOLTIP_TABLE_ROWS=[{label:"Label 1",value:1},{label:"Label 2",value:2},{label:"Label 3",value:3},{label:"Label 4",value:4},{label:"Label 5 ",value:5},{label:"Label 6",value:6},{label:"Label 7",value:7},{label:"Label 8",value:8},{label:"Label 9",value:9},{label:"Label 10",value:10},{label:"Label 11",value:11},{label:"Label 12",value:12},{label:"Label 13",value:13},{label:"Label 14",value:14},{label:"Label 15",value:15}],TOOLTIP_TABLE_DATA=[{dataRows:TOOLTIP_TABLE_ROWS.slice(0,5),label:"Section 1"},{dataRows:TOOLTIP_TABLE_ROWS.slice(5,10),label:"Section 2"},{dataRows:TOOLTIP_TABLE_ROWS.slice(10,15),label:"Section 3"}],stories_default=__webpack_require__("./packages/components/src/core/TooltipTable/__storybook__/stories/default.tsx"),TooltipTable=__webpack_require__("./packages/components/src/core/TooltipTable/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TestDemo=function TestDemo(props){return(0,jsx_runtime.jsx)(TooltipTable.A,_objectSpread(_objectSpread({},props),{},{data:[TOOLTIP_TABLE_DATA[0],TOOLTIP_TABLE_DATA[1]],"data-testid":"tooltipTable"}))};try{TestDemo.displayName="TestDemo",TestDemo.__docgenInfo={description:"",displayName:"TestDemo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TooltipTable/__storybook__/stories/test.tsx#TestDemo"]={docgenInfo:TestDemo.__docgenInfo,name:"TestDemo",path:"packages/components/src/core/TooltipTable/__storybook__/stories/test.tsx#TestDemo"})}catch(__react_docgen_typescript_loader_error){}function index_stories_typeof(o){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},index_stories_typeof(o)}function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(t){var i=function index_stories_toPrimitive(t,r){if("object"!=index_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=index_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==index_stories_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const index_stories={argTypes:{contentAlert:{control:{type:"select"},options:["String","Element","None"]},itemAlign:{control:{type:"radio"},options:["right","left"]}},component:stories_default.x,parameters:{badges:[dist.yq.STABLE]},title:"Components/TooltipTable"};var Default={args:{contentAlert:"None",data:TOOLTIP_TABLE_DATA,itemAlign:"right"}},Test={parameters:{controls:{exclude:["contentAlert","itemAlign"]},snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(TestDemo,function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},args))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    contentAlert: "None",\n    data: TOOLTIP_TABLE_DATA,\n    itemAlign: "right"\n  }\n}',...Default.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      exclude: TOOLTIP_TABLE_EXCLUDED_CONTROLS\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} />\n}",...Test.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Test"]},"./packages/components/src/core/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_Link});var _templateObject,_templateObject2,_templateObject3,_templateObject4,react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),Link=__webpack_require__("./node_modules/@mui/material/Link/Link.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var doNotForwardProps=["sdsStyle","sdsSize","fontWeight"],StyledLink=(0,styled.Ay)(Link.A,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop.toString())}})(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  all: unset;\n\n  ","\n\n  ","\n"])),styles.UT,(function(props){var _props$fontWeight=props.fontWeight,fontWeight=void 0===_props$fontWeight?"normal":_props$fontWeight,sdsStyle=props.sdsStyle,_props$sdsSize3=props.sdsSize,sdsSize=void 0===_props$sdsSize3?"s":_props$sdsSize3;return(0,emotion_react_browser_esm.AH)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n      ","\n      ","\n      ","\n      ","\n\n      font-weight: ",";\n      display: inline-block;\n      cursor: pointer;\n    "])),"default"===sdsStyle&&function defaultStyle(props){var _semanticColors$accen,_semanticColors$accen2,_semanticColors$accen3,_semanticColors$accen4,_semanticColors$accen5,_semanticColors$accen6,_semanticColors$accen7,_props$sdsSize=props.sdsSize,sdsSize=void 0===_props$sdsSize?"s":_props$sdsSize,semanticColors=(0,styles.Bd)(props);return(0,emotion_react_browser_esm.AH)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    color: ",';\n    position: relative;\n\n    &::after {\n      content: "";\n      display: block;\n      position: absolute;\n      height: 1px;\n      margin-top: ',"px;\n      width: 100%;\n    }\n\n    &:hover {\n      color: ",";\n\n      &::after {\n        background-color: ",";\n      }\n    }\n\n    &:focus {\n      color: ",";\n\n      &::after {\n        background-color: ",";\n      }\n    }\n\n    &:active {\n      color: ",";\n\n      &::after {\n        background-color: ",";\n      }\n    }\n  "])),null==semanticColors||null===(_semanticColors$accen=semanticColors.accent)||void 0===_semanticColors$accen?void 0:_semanticColors$accen.textAction,"s"===sdsSize?-4:-3,null==semanticColors||null===(_semanticColors$accen2=semanticColors.accent)||void 0===_semanticColors$accen2?void 0:_semanticColors$accen2.textActionHover,null==semanticColors||null===(_semanticColors$accen3=semanticColors.accent)||void 0===_semanticColors$accen3?void 0:_semanticColors$accen3.borderHover,null==semanticColors||null===(_semanticColors$accen4=semanticColors.accent)||void 0===_semanticColors$accen4?void 0:_semanticColors$accen4.textActionHover,null==semanticColors||null===(_semanticColors$accen5=semanticColors.accent)||void 0===_semanticColors$accen5?void 0:_semanticColors$accen5.borderHover,null==semanticColors||null===(_semanticColors$accen6=semanticColors.accent)||void 0===_semanticColors$accen6?void 0:_semanticColors$accen6.textActionPressed,null==semanticColors||null===(_semanticColors$accen7=semanticColors.accent)||void 0===_semanticColors$accen7?void 0:_semanticColors$accen7.borderPressed)}(props),"dashed"===sdsStyle&&function dashedStyle(props){var _semanticColors$base,_semanticColors$base2,_semanticColors$base3,_props$sdsSize2=props.sdsSize,sdsSize=void 0===_props$sdsSize2?"s":_props$sdsSize2,semanticColors=(0,styles.Bd)(props);return(0,emotion_react_browser_esm.AH)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(['\n    color: inherit;\n    position: relative;\n\n    &::after {\n      content: "";\n      display: block;\n      position: absolute;\n      height: 1px;\n      margin-top: ',"px;\n      margin-left: 1px;\n      width: 100%;\n      background-image: linear-gradient(\n        to right,\n        "," 60%,\n        transparent 60%\n      );\n      background-size: 5px 100%;\n    }\n\n    &:hover,\n    &:focus {\n      text-decoration: none;\n      &::after {\n        background-image: linear-gradient(\n          to right,\n          "," 60%,\n          "," 60%\n        );\n      }\n    }\n  "])),"s"===sdsSize?-4:-3,null==semanticColors||null===(_semanticColors$base=semanticColors.base)||void 0===_semanticColors$base?void 0:_semanticColors$base.borderHover,null==semanticColors||null===(_semanticColors$base2=semanticColors.base)||void 0===_semanticColors$base2?void 0:_semanticColors$base2.borderHover,null==semanticColors||null===(_semanticColors$base3=semanticColors.base)||void 0===_semanticColors$base3?void 0:_semanticColors$base3.borderHover)}(props),"s"===sdsSize&&function smallStyle(props){return(0,styles.JU)(props)}(props),"xs"===sdsSize&&function extraSmallStyle(props){return(0,styles.Zo)(props)}(props),"normal"===fontWeight?"400":"600")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Link_Link=(0,react.forwardRef)((function(props,ref){var underline;return"default"===props.sdsStyle&&(underline="none"),(0,jsx_runtime.jsx)(StyledLink,_objectSpread(_objectSpread({},props),{},{underline,ref}))}));const core_Link=Link_Link;try{Link_Link.displayName="Link",Link_Link.__docgenInfo={description:"",displayName:"Link",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Link/index.tsx#Link"]={docgenInfo:Link_Link.__docgenInfo,name:"Link",path:"packages/components/src/core/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/core/TooltipTable/__storybook__/stories/default.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>TooltipTableContent});var src_core_Link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/core/Link/index.tsx"),src_core_TooltipTable__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/TooltipTable/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TooltipTableContent=function TooltipTableContent(props){var contentAlert=props.contentAlert;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(src_core_TooltipTable__WEBPACK_IMPORTED_MODULE_1__.A,_objectSpread(_objectSpread({},props),{},{contentAlert:function handleAlert(){var alertContent;switch(contentAlert){case"String":alertContent="Some values do not pass the selected filter";break;case"Element":alertContent=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(src_core_Link__WEBPACK_IMPORTED_MODULE_0__.A,{href:"/",children:"Click this link to see samples"});break;default:alertContent=void 0}return alertContent}()}))};try{TooltipTableContent.displayName="TooltipTableContent",TooltipTableContent.__docgenInfo={description:"",displayName:"TooltipTableContent",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TooltipTable/__storybook__/stories/default.tsx#TooltipTableContent"]={docgenInfo:TooltipTableContent.__docgenInfo,name:"TooltipTableContent",path:"packages/components/src/core/TooltipTable/__storybook__/stories/default.tsx#TooltipTableContent"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/core/TooltipTable/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_TooltipTable});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,TableContainer=__webpack_require__("./node_modules/@mui/material/TableContainer/TableContainer.js"),Table=__webpack_require__("./node_modules/@mui/material/Table/Table.js"),TableBody=__webpack_require__("./node_modules/@mui/material/TableBody/TableBody.js"),TableRow=__webpack_require__("./node_modules/@mui/material/TableRow/TableRow.js"),TableCell=__webpack_require__("./node_modules/@mui/material/TableCell/TableCell.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var sdsPropNames=["contentAlert","itemAlign"],disabledStyle=function disabledStyle(props){var _semanticColors$base,disabled=props.disabled,semanticColors=(0,styles.Bd)(props);return disabled?"\n    color: ".concat(null==semanticColors||null===(_semanticColors$base=semanticColors.base)||void 0===_semanticColors$base?void 0:_semanticColors$base.textDisabled,";\n  "):""},Section=(0,styled.Ay)("div")(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),disabledStyle,(function(props){var _borders$base,spaces=(0,styles.oZ)(props),borders=(0,styles.ow)(props);return"\n      &:not(:last-child) {\n        padding-bottom: ".concat(null==spaces?void 0:spaces.m,"px;\n        border-bottom: ").concat(null==borders||null===(_borders$base=borders.base)||void 0===_borders$base?void 0:_borders$base.divider,";\n      }\n\n      &:not(:first-of-type) {\n        padding-top: ").concat(null==spaces?void 0:spaces.m,"px;\n      }\n    ")})),SectionLabel=(0,styled.Ay)("div")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n  ","\n\n  ","\n"])),styles.Uw,disabledStyle,(function(props){var _semanticColors$base2,spaces=(0,styles.oZ)(props),semanticColors=(0,styles.Bd)(props);return props.label?"\n      margin-bottom: ".concat(null==spaces?void 0:spaces.s,"px;      \n      color: ").concat(null==semanticColors||null===(_semanticColors$base2=semanticColors.base)||void 0===_semanticColors$base2?void 0:_semanticColors$base2.textSecondary,";\n    "):""})),RowLabel=(0,styled.Ay)(TableCell.A,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop.toString())}})(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n  ","\n  ","\n"])),styles.Zo,disabledStyle,(function(props){var spaces=(0,styles.oZ)(props);return"\n      padding: 0 0 ".concat(null==spaces?void 0:spaces.xxs,"px 0;\n      width: 50%;\n      border-bottom: none;\n      font-weight: 600;\n    ")})),RowValue=(0,styled.Ay)(TableCell.A,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop.toString())}})(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n  ","\n\n  padding-top: 0;\n  padding-bottom: 0;\n  padding-right: 0 !important;\n  border-bottom: none;\n"])),styles.aU,disabledStyle),Alert=(0,styled.Ay)("div")(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n"])),styles.Pf),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["contentAlert","data","itemAlign"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}const core_TooltipTable=function TooltipTableContent(props){var contentAlert=props.contentAlert,data=props.data,_props$itemAlign=props.itemAlign,itemAlign=void 0===_props$itemAlign?"right":_props$itemAlign,rest=_objectWithoutProperties(props,_excluded);return(0,jsx_runtime.jsxs)(TableContainer.A,_objectSpread(_objectSpread({},rest),{},{children:[contentAlert&&(0,jsx_runtime.jsx)(Alert,{children:contentAlert}),null==data?void 0:data.map((function(section,index){return(0,jsx_runtime.jsxs)(Section,{disabled:section.disabled,children:[(0,jsx_runtime.jsx)(SectionLabel,{disabled:section.disabled,label:section.label,children:section.label}),(0,jsx_runtime.jsx)(Table.A,{size:"small",children:(0,jsx_runtime.jsx)(TableBody.A,{children:section.dataRows.map((function(row,rowIndex){return(0,jsx_runtime.jsxs)(TableRow.A,{children:[(0,jsx_runtime.jsx)(RowLabel,{disabled:section.disabled,align:"left",children:row.label}),(0,jsx_runtime.jsx)(RowValue,{disabled:section.disabled,align:itemAlign,children:row.value})]},row.label+String(rowIndex))}))})})]},"".concat(section.label+String(index)))}))]}))};try{TooltipTable.displayName="TooltipTable",TooltipTable.__docgenInfo={description:"",displayName:"TooltipTable",props:{data:{defaultValue:null,description:"",name:"data",required:!1,type:{name:"{ label?: string; dataRows: { label: string; value: string | number; }[]; disabled?: boolean; }[] | undefined"}},contentAlert:{defaultValue:null,description:"",name:"contentAlert",required:!1,type:{name:"string | Element"}},itemAlign:{defaultValue:null,description:"",name:"itemAlign",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TooltipTable/index.tsx#TooltipTable"]={docgenInfo:TooltipTable.__docgenInfo,name:"TooltipTable",path:"packages/components/src/core/TooltipTable/index.tsx#TooltipTable"})}catch(__react_docgen_typescript_loader_error){}}}]);