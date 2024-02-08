"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[1971],{"./packages/components/src/core/List/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,ListItem=__webpack_require__("./node_modules/@mui/material/ListItem/ListItem.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var fontBodyL=(0,styles.oJ)("l"),fontBodyM=(0,styles.oJ)("m"),fontBodyS=(0,styles.oJ)("s"),fontBodyXs=(0,styles.oJ)("xs"),fontBodyXxs=(0,styles.oJ)("xxs"),fontBodyXxxs=(0,styles.oJ)("xxxs"),doNotForwardProps=["marginBottom","fontSize","ordered"],StyledListItem=(0,styled.ZP)(ListItem.ZP,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n  ","\n\n  padding: 0;\n\n  ","\n\n  &:before {\n    display: inline-block;\n\n    ","\n  }\n"])),(function propsToMarginBottom(props){var spacings=(0,styles.Gr)(props),propsToMarginBottomMap={s:null==spacings?void 0:spacings.s,xs:null==spacings?void 0:spacings.xs,xxs:null==spacings?void 0:spacings.xxs},marginBottom=props.marginBottom;return"\n    margin-bottom: ".concat(propsToMarginBottomMap[marginBottom||"xs"],"px;\n  ")}),(function propsToFontBody(props){var propsToFontBodyMap={l:fontBodyL,m:fontBodyM,s:fontBodyS,xs:fontBodyXs,xxs:fontBodyXxs,xxxs:fontBodyXxxs},fontSize=props.fontSize;return propsToFontBodyMap[fontSize||"s"]}),(function(props){var ordered=props.ordered,typography=props.theme.typography;return"\n      align-items: flex-start;\n      font-family: ".concat(null==typography?void 0:typography.fontFamily,";\n      ").concat(ordered?"counter-increment: section;":"","\n    ")}),(function(props){var spacings=(0,styles.Gr)(props),fontWeights=(0,styles.y2)(props),ordered=props.ordered;return"        \n        font-weight: ".concat(null==fontWeights?void 0:fontWeights.semibold,";\n        content: ").concat(ordered?'counters(section, ".")"."':'"•"',";\n        margin-right: ").concat(ordered?null==spacings?void 0:spacings.xs:null==spacings?void 0:spacings.s,"px;\n      ")}));(0,styled.ZP)("span")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  margin-right: 5px;\n\n  ","\n"])),(function(props){var fontWeights=(0,styles.y2)(props);return"\n      font-weight: ".concat(null==fontWeights?void 0:fontWeights.semibold,";\n    ")}));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ListItem_ListItem=function ListItem(props){return(0,jsx_runtime.jsx)(StyledListItem,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({disableGutters:!0},props))};const core_ListItem=ListItem_ListItem;try{ListItemLabel.displayName="ListItemLabel",ListItemLabel.__docgenInfo={description:"",displayName:"ListItemLabel",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/ListItem/index.tsx#ListItemLabel"]={docgenInfo:ListItemLabel.__docgenInfo,name:"ListItemLabel",path:"packages/components/src/core/ListItem/index.tsx#ListItemLabel"})}catch(__react_docgen_typescript_loader_error){}try{ListItem_ListItem.displayName="ListItem",ListItem_ListItem.__docgenInfo={description:"",displayName:"ListItem",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"xs"'},{value:'"xxs"'}]}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"s"'},{value:'"xs"'},{value:'"l"'},{value:'"xxxs"'},{value:'"xxs"'}]}},ordered:{defaultValue:null,description:"",name:"ordered",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/ListItem/index.tsx#ListItem"]={docgenInfo:ListItem_ListItem.__docgenInfo,name:"ListItem",path:"packages/components/src/core/ListItem/index.tsx#ListItem"})}catch(__react_docgen_typescript_loader_error){}var style_templateObject,ListSubheader=__webpack_require__("./node_modules/@mui/material/ListSubheader/ListSubheader.js");var fontHeaderM=(0,styles.C5)("m"),StyledListSubheader=(0,styled.ZP)(ListSubheader.Z)(style_templateObject||(style_templateObject=function style_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  &.MuiListSubheader-root {\n    ","\n\n    line-height: unset;\n    color: unset;\n\n    ","\n  }\n"])),fontHeaderM,(function(props){var spacings=(0,styles.Gr)(props);return"\n        margin-bottom: ".concat(null==spacings?void 0:spacings.l,"px;\n      ")}));function ListSubheader_typeof(o){return ListSubheader_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},ListSubheader_typeof(o)}function ListSubheader_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function ListSubheader_defineProperty(obj,key,value){return(key=function ListSubheader_toPropertyKey(t){var i=function ListSubheader_toPrimitive(t,r){if("object"!=ListSubheader_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=ListSubheader_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==ListSubheader_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ListSubheader_ListSubheader=function ListSubheader(props){return(0,jsx_runtime.jsx)(StyledListSubheader,function ListSubheader_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ListSubheader_ownKeys(Object(t),!0).forEach((function(r){ListSubheader_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ListSubheader_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({disableGutters:!0},props))};const core_ListSubheader=ListSubheader_ListSubheader;try{ListSubheader_ListSubheader.displayName="ListSubheader",ListSubheader_ListSubheader.__docgenInfo={description:"",displayName:"ListSubheader",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLLIElement | null) => void) | RefObject<HTMLLIElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/ListSubheader/index.tsx#ListSubheader"]={docgenInfo:ListSubheader_ListSubheader.__docgenInfo,name:"ListSubheader",path:"packages/components/src/core/ListSubheader/index.tsx#ListSubheader"})}catch(__react_docgen_typescript_loader_error){}var List_style_templateObject,List=__webpack_require__("./node_modules/@mui/material/List/List.js");var style_doNotForwardProps=["marginBotton","ordered"],StyledList=(0,styled.ZP)(List.Z,{shouldForwardProp:function shouldForwardProp(prop){return!style_doNotForwardProps.includes(prop)}})(List_style_templateObject||(List_style_templateObject=function List_style_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  .MuiListSubheader-root {\n    ","\n  }\n\n  ","\n"])),(function style_propsToMarginBottom(props){var spacings=(0,styles.Gr)(props),propsToMarginBottomMap={l:null==spacings?void 0:spacings.l,m:null==spacings?void 0:spacings.l,s:null==spacings?void 0:spacings.m,xs:null==spacings?void 0:spacings.m,xxs:null==spacings?void 0:spacings.m,xxxs:null==spacings?void 0:spacings.s},marginBottom=props.marginBottom;return"\n    margin-bottom: ".concat(propsToMarginBottomMap[marginBottom||"s"],"px;\n  ")}),(function(props){return props.ordered?"\n      counter-reset: section;\n    ":""}));function List_typeof(o){return List_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},List_typeof(o)}function List_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function List_defineProperty(obj,key,value){return(key=function List_toPropertyKey(t){var i=function List_toPrimitive(t,r){if("object"!=List_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=List_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==List_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var List_List=function List(props){var ordered=props.ordered;return(0,jsx_runtime.jsx)(StyledList,function List_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?List_ownKeys(Object(t),!0).forEach((function(r){List_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):List_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({component:ordered?"ol":"ul",disablePadding:!0},props))};const core_List=List_List;try{List_List.displayName="List",List_List.__docgenInfo={description:"",displayName:"List",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},marginBottom:{defaultValue:null,description:"",name:"marginBottom",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"s"'},{value:'"xs"'},{value:'"l"'},{value:'"xxxs"'},{value:'"xxs"'}]}},ordered:{defaultValue:null,description:"",name:"ordered",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLUListElement | null) => void) | RefObject<HTMLUListElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/List/index.tsx#List"]={docgenInfo:List_List.__docgenInfo,name:"List",path:"packages/components/src/core/List/index.tsx#List"})}catch(__react_docgen_typescript_loader_error){}function index_stories_typeof(o){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},index_stories_typeof(o)}function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(t){var i=function index_stories_toPrimitive(t,r){if("object"!=index_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=index_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==index_stories_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const index_stories={component:function List(props){return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)(core_List,index_stories_objectSpread(index_stories_objectSpread({subheader:(0,jsx_runtime.jsx)(core_ListSubheader,{disableSticky:!0,children:"Font sizes and spacing for an unordered list"})},props),{},{children:[(0,jsx_runtime.jsx)(core_ListItem,{fontSize:"l",marginBottom:"s",children:"fontSize=l marginBottom=s"}),(0,jsx_runtime.jsx)(core_ListItem,{fontSize:"m",marginBottom:"s",children:"fontSize=m marginBottom=s"}),(0,jsx_runtime.jsx)(core_ListItem,{fontSize:"s",marginBottom:"xs",children:"fontSize=s marginBottom=xs"}),(0,jsx_runtime.jsx)(core_ListItem,{fontSize:"xs",marginBottom:"xs",children:"fontSize=xs marginBottom=xs"}),(0,jsx_runtime.jsx)(core_ListItem,{fontSize:"xxs",marginBottom:"xs",children:"fontSize=xxs marginBottom=xs"}),(0,jsx_runtime.jsx)(core_ListItem,{fontSize:"xxxs",marginBottom:"xxs",children:"fontSize=xxxs marginBottom=xxs"}),(0,jsx_runtime.jsx)(core_ListItem,{fontSize:"m",children:(0,jsx_runtime.jsx)("div",{style:{width:"200px"},children:"Really long list item here to make it wrap, so we can see if the bullet is top aligned"})})]})),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)(core_List,index_stories_objectSpread(index_stories_objectSpread({ordered:!0,subheader:(0,jsx_runtime.jsx)(core_ListSubheader,{disableSticky:!0,children:"Font sizes and spacing for a nested ordered list"})},props),{},{children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:(0,jsx_runtime.jsxs)("span",{children:["Nested List 1",(0,jsx_runtime.jsxs)(core_List,{ordered:!0,children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"l",marginBottom:"s",children:"fontSize=l marginBottom=s"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"m",marginBottom:"s",children:"fontSize=m marginBottom=s"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"s",marginBottom:"xs",children:"fontSize=s marginBottom=xs"})]})]})}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:(0,jsx_runtime.jsxs)("span",{children:["Nested List 2",(0,jsx_runtime.jsxs)(core_List,{ordered:!0,children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"l",children:(0,jsx_runtime.jsxs)("span",{children:["Nested List 2",(0,jsx_runtime.jsxs)(core_List,{ordered:!0,children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"l",marginBottom:"s",children:"fontSize=l marginBottom=s"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"m",marginBottom:"s",children:"fontSize=m marginBottom=s"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"s",marginBottom:"xs",children:"fontSize=s marginBottom=xs"})]})]})}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"m",marginBottom:"s",children:"fontSize=m marginBottom=s"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"s",marginBottom:"xs",children:"fontSize=s marginBottom=xs"})]})]})}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:(0,jsx_runtime.jsxs)("span",{children:["Nested List 3",(0,jsx_runtime.jsxs)(core_List,{ordered:!0,children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"l",marginBottom:"s",children:"fontSize=l marginBottom=s"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"m",marginBottom:"s",children:"fontSize=m marginBottom=s"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,fontSize:"s",marginBottom:"xs",children:"fontSize=s marginBottom=xs"})]})]})})]})),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)(core_List,index_stories_objectSpread(index_stories_objectSpread({ordered:!0,subheader:(0,jsx_runtime.jsx)(core_ListSubheader,{disableSticky:!0,children:"This is an ordered list"})},props),{},{children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 1."}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 2."}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 3."}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 4."}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 5."}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 6."}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 7."}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 8."}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 9."}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 10."}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"This is an ordered list item 11."})]})),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsxs)(core_List,index_stories_objectSpread(index_stories_objectSpread({ordered:!0,subheader:(0,jsx_runtime.jsx)(core_ListSubheader,{disableSticky:!0,children:"This is an unordered list"})},props),{},{children:[(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 1."}),(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 2."}),(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 3."}),(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 4."}),(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 5."}),(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 6."}),(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 7."}),(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 8."}),(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 9."}),(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 10."}),(0,jsx_runtime.jsx)(core_ListItem,{children:"This is an unordered list item 11."})]})),(0,jsx_runtime.jsxs)(core_List,index_stories_objectSpread(index_stories_objectSpread({ordered:!0,subheader:(0,jsx_runtime.jsx)(core_ListSubheader,{disableSticky:!0,children:"Font sizes and spacing for a nested ordered list"})},props),{},{children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:(0,jsx_runtime.jsxs)("span",{children:["Nested List 1",(0,jsx_runtime.jsxs)(core_List,{ordered:!0,children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"})]})]})}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:(0,jsx_runtime.jsxs)("span",{children:["Nested List 2",(0,jsx_runtime.jsxs)(core_List,{ordered:!0,children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:(0,jsx_runtime.jsxs)("span",{children:["Nested List 2",(0,jsx_runtime.jsxs)(core_List,{ordered:!0,children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"})]})]})}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"})]})]})}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:(0,jsx_runtime.jsxs)("span",{children:["Nested List 3",(0,jsx_runtime.jsxs)(core_List,{ordered:!0,children:[(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"}),(0,jsx_runtime.jsx)(core_ListItem,{ordered:!0,children:"Nested List item"})]})]})})]}))]})},title:"List"};var Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);