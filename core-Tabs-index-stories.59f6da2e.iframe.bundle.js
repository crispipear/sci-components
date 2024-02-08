"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[667],{"./node_modules/@emotion/css/dist/emotion-css.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{iv:()=>css});var emotion_cache_browser_esm=__webpack_require__("./node_modules/@emotion/cache/dist/emotion-cache.browser.esm.js"),emotion_serialize_browser_esm=__webpack_require__("./node_modules/@emotion/serialize/dist/emotion-serialize.browser.esm.js"),emotion_utils_browser_esm=__webpack_require__("./node_modules/@emotion/utils/dist/emotion-utils.browser.esm.js");function insertWithoutScoping(cache,serialized){if(void 0===cache.inserted[serialized.name])return cache.insert("",serialized,cache.sheet,!0)}function merge(registered,css,className){var registeredStyles=[],rawClassName=(0,emotion_utils_browser_esm.fp)(registered,registeredStyles,className);return registeredStyles.length<2?className:rawClassName+css(registeredStyles)}var classnames=function classnames(args){for(var cls="",i=0;i<args.length;i++){var arg=args[i];if(null!=arg){var toAdd=void 0;switch(typeof arg){case"boolean":break;case"object":if(Array.isArray(arg))toAdd=classnames(arg);else for(var k in toAdd="",arg)arg[k]&&k&&(toAdd&&(toAdd+=" "),toAdd+=k);break;default:toAdd=arg}toAdd&&(cls&&(cls+=" "),cls+=toAdd)}}return cls},_createEmotion=function createEmotion(options){var cache=(0,emotion_cache_browser_esm.Z)(options);cache.sheet.speedy=function(value){this.isSpeedy=value},cache.compat=!0;var css=function css(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];var serialized=(0,emotion_serialize_browser_esm.O)(args,cache.registered,void 0);return(0,emotion_utils_browser_esm.My)(cache,serialized,!1),cache.key+"-"+serialized.name};return{css,cx:function cx(){for(var _len4=arguments.length,args=new Array(_len4),_key4=0;_key4<_len4;_key4++)args[_key4]=arguments[_key4];return merge(cache.registered,css,classnames(args))},injectGlobal:function injectGlobal(){for(var _len3=arguments.length,args=new Array(_len3),_key3=0;_key3<_len3;_key3++)args[_key3]=arguments[_key3];var serialized=(0,emotion_serialize_browser_esm.O)(args,cache.registered);insertWithoutScoping(cache,serialized)},keyframes:function keyframes(){for(var _len2=arguments.length,args=new Array(_len2),_key2=0;_key2<_len2;_key2++)args[_key2]=arguments[_key2];var serialized=(0,emotion_serialize_browser_esm.O)(args,cache.registered),animation="animation-"+serialized.name;return insertWithoutScoping(cache,{name:serialized.name,styles:"@keyframes "+animation+"{"+serialized.styles+"}"}),animation},hydrate:function hydrate(ids){ids.forEach((function(key){cache.inserted[key]=!0}))},flush:function flush(){cache.registered={},cache.inserted={},cache.sheet.flush()},sheet:cache.sheet,cache,getRegisteredStyles:emotion_utils_browser_esm.fp.bind(null,cache.registered),merge:merge.bind(null,cache.registered,css)}}({key:"css"}),css=(_createEmotion.flush,_createEmotion.hydrate,_createEmotion.cx,_createEmotion.merge,_createEmotion.getRegisteredStyles,_createEmotion.injectGlobal,_createEmotion.keyframes,_createEmotion.css);_createEmotion.sheet,_createEmotion.cache},"./packages/components/src/core/Tabs/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LivePreview:()=>LivePreview,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./packages/components/src/common/utils.ts"),Tag=__webpack_require__("./packages/components/src/core/Tag/index.tsx"),emotion_css_esm=__webpack_require__("./node_modules/@emotion/css/dist/emotion-css.esm.js"),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),selectors_theme=__webpack_require__("./packages/components/src/core/styles/common/selectors/theme.ts"),TabsContext=(0,react.createContext)({sdsSize:"large"}),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Wrapper=(0,styled.ZP)("span")(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var colors=(0,styles.EC)(props);return"\n      &:active {\n        color: black;\n      }\n\n      &:disabled {\n        color: ".concat(null==colors?void 0:colors.gray[200],";\n      }\n    ")})),LABEL_DO_NOT_FORWARD_PROPS=["sdsSize"],Label=(0,styled.ZP)("span",{shouldForwardProp:function shouldForwardProp(prop){return!LABEL_DO_NOT_FORWARD_PROPS.includes(String(prop))}})(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),(function(props){return"large"===props.sdsSize?(0,styles.GW)(props):(0,styles.$g)(props)}),(function(props){var fontWeights=(0,styles.y2)(props),spaces=(0,styles.Gr)(props),sdsSize=props.sdsSize;return"\n      margin-right: ".concat("large"===sdsSize?null==spaces?void 0:spaces.l:null==spaces?void 0:spaces.m,"px;\n      font-weight: ").concat(null==fontWeights?void 0:fontWeights.semibold,";\n  ")})),COUNT_DO_NOT_FORWARD_PROPS=["sdsSize"],Count=(0,styled.ZP)("span",{shouldForwardProp:function shouldForwardProp(prop){return!COUNT_DO_NOT_FORWARD_PROPS.includes(String(prop))}})(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),(function(props){return"large"===props.sdsSize?(0,styles.$g)(props):(0,styles.mA)(props)}),(function(props){var colors=(0,styles.EC)(props);return"\n      color: ".concat(null==colors?void 0:colors.gray[500],";\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const components_LabelWithCount=(0,react.forwardRef)((function LabelWithCount(props,ref){var _useContext$sdsSize=(0,react.useContext)(TabsContext).sdsSize,sdsSize=void 0===_useContext$sdsSize?"large":_useContext$sdsSize,label=props.label,count=props.count;return(0,jsx_runtime.jsxs)(Wrapper,{ref,children:[(0,jsx_runtime.jsx)(Label,{sdsSize,children:label}),(0,jsx_runtime.jsx)(Count,{sdsSize,children:count})]})}));try{LabelWithCount.displayName="LabelWithCount",LabelWithCount.__docgenInfo={description:"",displayName:"LabelWithCount",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},count:{defaultValue:null,description:"",name:"count",required:!0,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tabs/components/LabelWithCount/index.tsx#LabelWithCount"]={docgenInfo:LabelWithCount.__docgenInfo,name:"LabelWithCount",path:"packages/components/src/core/Tabs/components/LabelWithCount/index.tsx#LabelWithCount"})}catch(__react_docgen_typescript_loader_error){}var style_templateObject,style_templateObject2,Tabs=__webpack_require__("./node_modules/@mui/material/Tabs/Tabs.js"),Tab=__webpack_require__("./node_modules/@mui/material/Tab/Tab.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function style_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TABS_DO_NOT_FORWARD_PROPS=["underlined","sdsSize"],StyledTabs=(0,styled.ZP)((function TempTabs(props){return(0,jsx_runtime.jsx)(Tabs.Z,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},props))}),{shouldForwardProp:function shouldForwardProp(prop){return!TABS_DO_NOT_FORWARD_PROPS.includes(String(prop))}})(style_templateObject||(style_templateObject=style_taggedTemplateLiteral(["\n  box-sizing: border-box;\n  padding-bottom: 0px;\n  min-height: unset;\n  position: relative;\n  z-index: 1;\n  overflow: inherit;\n\n  & .MuiTabs-scroller {\n    overflow: inherit !important;\n  }\n\n  ","\n"])),(function(props){var underlined=props.underlined,_props$sdsSize=props.sdsSize,sdsSize=void 0===_props$sdsSize?"large":_props$sdsSize,colors=(0,selectors_theme.EC)(props),spaces=(0,selectors_theme.Gr)(props),isLarge="large"===sdsSize;return"\n      margin-top: ".concat(isLarge?null==spaces?void 0:spaces.l:null==spaces?void 0:spaces.m,"px;\n      margin-bottom: ").concat(isLarge?null==spaces?void 0:spaces.xl:null==spaces?void 0:spaces.m,"px;\n      border-bottom: ").concat(underlined?"2px solid ".concat(null==colors?void 0:colors.gray[200],";"):"none",";\n    ")})),TAB_DO_NOT_FORWARD_PROPS=["sdsSize"],StyledTab=(0,styled.ZP)(Tab.Z,{shouldForwardProp:function shouldForwardProp(prop){return!TAB_DO_NOT_FORWARD_PROPS.includes(String(prop))}})(style_templateObject2||(style_templateObject2=style_taggedTemplateLiteral(["\n  min-height: unset;\n  padding: 0;\n  min-width: 32px;\n  opacity: 1 !important;\n\n  ","\n  ","\n\n  ","\n"])),(function tabFontMixin(props){return"large"===props.sdsSize?(0,styles.GW)(props):(0,styles.$g)(props)}),styles.sX,(function(props){var _palette$text,colors=(0,selectors_theme.EC)(props),spaces=(0,selectors_theme.Gr)(props),fontWeights=(0,selectors_theme.y2)(props),palette=(0,selectors_theme.XN)(props);return"\n      font-weight: ".concat(null==fontWeights?void 0:fontWeights.semibold,";\n      margin: 0 ").concat(null==spaces?void 0:spaces.xl,"px ").concat(null==spaces?void 0:spaces.xxs,"px 0;\n\n      color: ").concat(null==palette||null===(_palette$text=palette.text)||void 0===_palette$text?void 0:_palette$text.secondary,";\n\n      &:hover, :focus {\n        color: black;\n      }\n\n      &.Mui-selected {\n        color: black;\n\n        &:hover {\n          color: black;\n        }\n      }\n\n      &:active {\n        color: black;\n      }\n\n      &:disabled {\n        color: ").concat(null==colors?void 0:colors.gray[200],";\n      }\n    ")}));try{StyledTabs.displayName="StyledTabs",StyledTabs.__docgenInfo={description:"",displayName:"StyledTabs",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},underlined:{defaultValue:null,description:"",name:"underlined",required:!1,type:{name:"boolean"}},sdsSize:{defaultValue:null,description:"",name:"sdsSize",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tabs/style.tsx#StyledTabs"]={docgenInfo:StyledTabs.__docgenInfo,name:"StyledTabs",path:"packages/components/src/core/Tabs/style.tsx#StyledTabs"})}catch(__react_docgen_typescript_loader_error){}try{StyledTab.displayName="StyledTab",StyledTab.__docgenInfo={description:"",displayName:"StyledTab",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},sdsSize:{defaultValue:null,description:"",name:"sdsSize",required:!0,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tabs/style.tsx#StyledTab"]={docgenInfo:StyledTab.__docgenInfo,name:"StyledTab",path:"packages/components/src/core/Tabs/style.tsx#StyledTab"})}catch(__react_docgen_typescript_loader_error){}function Tabs_typeof(o){return Tabs_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},Tabs_typeof(o)}var Tabs_templateObject,_excluded=["sdsSize"],_excluded2=["count","label"];function Tabs_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function Tabs_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Tabs_ownKeys(Object(t),!0).forEach((function(r){Tabs_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Tabs_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function Tabs_defineProperty(obj,key,value){return(key=function Tabs_toPropertyKey(t){var i=function Tabs_toPrimitive(t,r){if("object"!=Tabs_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=Tabs_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==Tabs_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TabIndicator=function TabIndicator(theme){var colors=(0,selectors_theme.EC)({theme});return(0,emotion_css_esm.iv)(Tabs_templateObject||(Tabs_templateObject=function Tabs_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n    &.MuiTabs-indicator {\n      background-color: ",";\n      height: 2px;\n      bottom: -2px;\n      z-index: 2;\n    }\n  "])),null==colors?void 0:colors.primary[400])},Tabs_Tabs=(0,react.forwardRef)((function Tabs(props,ref){var _props$sdsSize=props.sdsSize,sdsSize=void 0===_props$sdsSize?"large":_props$sdsSize,rest=_objectWithoutProperties(props,_excluded),theme=(0,useTheme.Z)(),contextValue=react.useMemo((function(){return{sdsSize}}),[sdsSize]),indicatorProps=(0,react.useMemo)((function(){return{className:TabIndicator(theme)}}),[theme]);return(0,jsx_runtime.jsx)(TabsContext.Provider,{value:contextValue,children:(0,jsx_runtime.jsx)(StyledTabs,Tabs_objectSpread({TabIndicatorProps:indicatorProps,ref},rest))})}));const core_Tabs=Tabs_Tabs;var index_stories_templateObject,Tabs_Tab=(0,react.forwardRef)((function Tab(props,ref){var count=props.count,label=props.label,rest=_objectWithoutProperties(props,_excluded2),context=(0,react.useContext)(TabsContext),Label=void 0===count?label:(0,jsx_runtime.jsx)(components_LabelWithCount,{label,count});return(0,jsx_runtime.jsx)(StyledTab,Tabs_objectSpread(Tabs_objectSpread({label:Label,ref},rest),context))}));try{Tabs_Tabs.displayName="Tabs",Tabs_Tabs.__docgenInfo={description:"",displayName:"Tabs",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},sdsSize:{defaultValue:null,description:"",name:"sdsSize",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'}]}},underlined:{defaultValue:null,description:"",name:"underlined",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tabs/index.tsx#Tabs"]={docgenInfo:Tabs_Tabs.__docgenInfo,name:"Tabs",path:"packages/components/src/core/Tabs/index.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}try{Tabs_Tab.displayName="Tab",Tabs_Tab.__docgenInfo={description:"",displayName:"Tab",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},count:{defaultValue:null,description:"",name:"count",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tabs/index.tsx#Tab"]={docgenInfo:Tabs_Tab.__docgenInfo,name:"Tab",path:"packages/components/src/core/Tabs/index.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}function index_stories_typeof(o){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},index_stories_typeof(o)}var index_stories_excluded=["tabOneLabel","tabTwoLabel","tabOneCount","tabTwoCount"];function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(t){var i=function index_stories_toPrimitive(t,r){if("object"!=index_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=index_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==index_stories_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function index_stories_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function index_stories_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var index_stories_Tabs=function Tabs(props){var tabOneLabel=props.tabOneLabel,tabTwoLabel=props.tabTwoLabel,tabOneCount=props.tabOneCount,tabTwoCount=props.tabTwoCount,args=index_stories_objectWithoutProperties(props,index_stories_excluded),_useState2=_slicedToArray((0,react.useState)(0),2),value=_useState2[0],setValue=_useState2[1];return(0,jsx_runtime.jsxs)(core_Tabs,index_stories_objectSpread(index_stories_objectSpread({},args),{},{value,onChange:function handleTabsChange(_,tabsValue){setValue(tabsValue)},children:[(0,jsx_runtime.jsx)(Tabs_Tab,{label:tabOneLabel,count:tabOneCount}),(0,jsx_runtime.jsx)(Tabs_Tab,{label:tabTwoLabel,count:tabTwoCount})]}))};const index_stories={argTypes:{sdsSize:{control:{type:"select"},options:["large","small"]},tabOneLabel:{control:{type:"text"}},tabTwoLabel:{control:{type:"text"}},underlined:{control:{type:"boolean"}}},component:index_stories_Tabs,parameters:{chromatic:{delay:1e4}},title:"Tabs"};var Default={args:{sdsSize:"large",tabOneLabel:"Upload from Your Computer",tabTwoLabel:"Upload from Basespace",underlined:!0},parameters:{chromatic:{delay:5e3}}},livePreviewWrapperStyle={alignItems:"center",display:"flex",gap:"40px",width:"100%"};function LivePreviewDemo(props){var finalProps=index_stories_objectSpread(index_stories_objectSpread({},props),{},{style:{width:"150px"}});return(0,jsx_runtime.jsxs)("div",{style:livePreviewWrapperStyle,children:[(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(index_stories_Tabs,index_stories_objectSpread({onChange:utils.ZT,sdsSize:"large",tabOneLabel:"Label",tabTwoLabel:"Label",underlined:!0},finalProps))}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(index_stories_Tabs,index_stories_objectSpread({onChange:utils.ZT,sdsSize:"large",tabOneLabel:"Label",tabTwoLabel:"Label",tabOneCount:0,tabTwoCount:0,underlined:!0},finalProps))}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(index_stories_Tabs,index_stories_objectSpread({sdsSize:"small",onChange:utils.ZT,tabOneLabel:"Label",tabTwoLabel:"Label",underlined:!0},finalProps))}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(index_stories_Tabs,index_stories_objectSpread({sdsSize:"small",onChange:utils.ZT,tabOneLabel:"Label",tabTwoLabel:"Label",tabOneCount:0,tabTwoCount:0,underlined:!0},finalProps))})]})}var LivePreview={parameters:{chromatic:{delay:5e3},snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(LivePreviewDemo,index_stories_objectSpread({},args))}};function TestDemo(props){var finalProps=index_stories_objectSpread(index_stories_objectSpread({},props),{},{"data-testid":"tabs",style:{width:"400px"}});return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsxs)("div",{style:livePreviewWrapperStyle,children:[(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h4",{children:"Default"}),(0,jsx_runtime.jsx)(index_stories_Tabs,index_stories_objectSpread({tabOneLabel:"Tab One",tabTwoLabel:"Tab Two",tabOneCount:123,onChange:utils.ZT},finalProps))]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h4",{children:"Small"}),(0,jsx_runtime.jsx)(index_stories_Tabs,index_stories_objectSpread({tabOneLabel:"Tab One",tabTwoLabel:"Tab Two",tabOneCount:123,onChange:utils.ZT,sdsSize:"small"},finalProps))]}),(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h4",{children:"Underlined"}),(0,jsx_runtime.jsx)(index_stories_Tabs,index_stories_objectSpread({onChange:utils.ZT,tabOneLabel:"Tab One",tabTwoLabel:"Tab Two",tabOneCount:123,underlined:!0},finalProps))]})]}),(0,jsx_runtime.jsx)("div",{style:livePreviewWrapperStyle,children:(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)("h4",{children:"Label with count"}),(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(index_stories_Tabs,index_stories_objectSpread(index_stories_objectSpread({onChange:utils.ZT,sdsSize:"large",tabOneLabel:"Label",tabTwoLabel:"Label",underlined:!0,tabOneCount:(0,jsx_runtime.jsx)(BetaTagWithCount,{})},finalProps),{},{style:{width:"200px"}}))})]})})]})}var Test={parameters:{chromatic:{delay:5e3},snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(TestDemo,index_stories_objectSpread({},args))}},CountWrapper=(0,emotion_styled_browser_esm.Z)("span")(index_stories_templateObject||(index_stories_templateObject=function index_stories_taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  margin-right: 5px;\n"])));function BetaTagWithCount(){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(CountWrapper,{children:"123"}),(0,jsx_runtime.jsx)(Tag.Z,{label:"BETA",color:"beta",sdsStyle:"rounded",sdsType:"secondary"})]})}Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    sdsSize: "large",\n    tabOneLabel: "Upload from Your Computer",\n    tabTwoLabel: "Upload from Basespace",\n    underlined: true\n  },\n  parameters: {\n    // tab indicator bug known by MUI where width for indicator updates once font is loaded in.\n    // delay allows for font to load and prevents chromatic from constantly creating new baselines\n    // https://github.cwom/mui/material-ui/blob/v4.x/packages/material-ui/src/Tabs/Tabs.js#L194\n    chromatic: {\n      delay: 5000\n    }\n  }\n}',...Default.parameters?.docs?.source}}},LivePreview.parameters={...LivePreview.parameters,docs:{...LivePreview.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    chromatic: {\n      delay: 5000\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}",...LivePreview.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    chromatic: {\n      delay: 5000\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} />\n}",...Test.parameters?.docs?.source}}};const __namedExportsOrder=["Default","LivePreview","Test"]},"./packages/components/src/common/utils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Nu:()=>EMPTY_OBJECT,ZT:()=>noop,mA:()=>toKebabCase});var noop=function noop(){},toKebabCase=function toKebabCase(str){return str.replace(/[\s_]+/g,"-").toLowerCase()},EMPTY_OBJECT={}},"./packages/components/src/core/Tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Tag});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function createTypeCss(props,type){var themeColors=(0,styles.EC)(props),intent="string"==typeof props.tagColor?props.tagColor:"primary",colors=Array.isArray(props.tagColor)?_toConsumableArray(props.tagColor):[],typeColors={primary:{background:colors.length>=2?colors[1]:null==themeColors?void 0:themeColors[intent][400],backgroundClicked:colors.length>=2?(0,colorManipulator._j)(colors[1],.3):null==themeColors?void 0:themeColors[intent][600],backgroundHover:colors.length>=2?(0,colorManipulator._j)(colors[1],.15):null==themeColors?void 0:themeColors[intent][500],iconColor:colors.length>2?colors[2]:"white",label:colors.length?colors[0]:"white"},secondary:{background:colors.length>=2?colors[1]:null==themeColors?void 0:themeColors[intent][200],backgroundClicked:colors.length>=2?(0,colorManipulator._j)(colors[1],.3):null==themeColors?void 0:themeColors[intent][600],backgroundHover:colors.length>=2?(0,colorManipulator._j)(colors[1],.15):null==themeColors?void 0:themeColors[intent][500],iconColor:colors.length>2?colors[2]:null==themeColors?void 0:themeColors[intent][400],label:colors.length?colors[0]:null==themeColors?void 0:themeColors[intent][600]}}[type];return(0,emotion_react_browser_esm.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    background-color: ",";\n    position: relative;\n\n    .MuiChip-label {\n      color: ",";\n    }\n\n    svg {\n      fill: ",";\n    }\n\n    &:hover,\n    &:active,\n    &:focus {\n      .MuiChip-label {\n        color: white;\n      }\n\n      svg {\n        fill: white;\n      }\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n\n    &:active {\n      background-color: ",";\n    }\n\n    &:focus {\n      background-color: ",";\n    }\n\n    &:focus:hover {\n      background-color: ",";\n    }\n\n    &:focus:active {\n      background-color: ",";\n    }\n  "])),typeColors.background,typeColors.label,typeColors.iconColor,typeColors.backgroundHover,typeColors.backgroundClicked,typeColors.background,typeColors.backgroundHover,typeColors.backgroundClicked)}var typeToCss={primary:function primary(props){return createTypeCss(props,"primary")},secondary:function secondary(props){return createTypeCss(props,"secondary")}},doNotForwardProps=["sdsType","sdsStyle","tagColor","hover"],StyledTag=(0,styled.ZP)(Chip.Z,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  border: none;\n\n  ","\n"])),(function(props){var _props$hover=props.hover,hover=void 0===_props$hover||_props$hover,sdsType=props.sdsType,sdsStyle=props.sdsStyle,icon=props.icon,isRounded="rounded"===sdsStyle,type=sdsType||"primary";return(0,emotion_react_browser_esm.iv)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n      ","\n      ","\n      ","\n      ","\n    "])),icon?function withIcon(props){var spacings=(0,styles.Gr)(props),iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    height: unset;\n    margin: 0 ","px ","px 0;\n\n    .MuiChip-label {\n      ","\n      padding: 0;\n    }\n\n    .MuiSvgIcon-root {\n      height: ","px;\n      width: ","px;\n      padding-right: ","px;\n      margin: 0 0 0 -","px;\n    }\n\n    .MuiChip-deleteIcon {\n      ","\n      color: white;\n      margin: 0 0 0 ","px;\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xs,(0,styles.$g)(props),null==iconSizes?void 0:iconSizes.l.height,null==iconSizes?void 0:iconSizes.l.width,null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xxxs,(0,styles.J5)(props),null==spacings?void 0:spacings.xxs,null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props):function withoutIcon(props){var spacings=(0,styles.Gr)(props),iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    height: unset;\n    margin: 0 ","px ","px 0;\n\n    .MuiChip-label {\n      ","\n      padding: 0;\n    }\n\n    .MuiChip-deleteIcon {\n      ","\n      color: white;\n      margin: 0 0 0 ","px;\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xs,(0,styles.aI)(props),(0,styles.J5)(props),null==spacings?void 0:spacings.xxs,null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props),typeToCss[type](props),isRounded?function rounded(props){var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props),icon=props.icon;return(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    border-radius: ","px;\n    padding: ",";\n\n    &:after {\n      border-radius: ","px;\n    }\n  "])),null==corners?void 0:corners.l,icon?"".concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.s,"px ").concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.xs,"px"):"".concat(null==spacings?void 0:spacings.xxxs,"px ").concat(null==spacings?void 0:spacings.s,"px"),null==corners?void 0:corners.l)}(props):function square(props){var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props),icon=props.icon;return(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    border-radius: ","px;\n    padding: ",";\n\n    &:after {\n      border-radius: ","px;\n    }\n  "])),null==corners?void 0:corners.m,icon?"".concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.s,"px"):"".concat(null==spacings?void 0:spacings.xxxs,"px ").concat(null==spacings?void 0:spacings.xs,"px"),null==corners?void 0:corners.m)}(props),hover?function withHover(){return(0,emotion_react_browser_esm.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    &:hover {\n      cursor: pointer;\n    }\n\n    &:hover,\n    &:focus-visible {\n      color: white;\n    }\n  "])))}():"pointer-events: none;")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Tag=function Tag(props){var color=props.color;return(0,jsx_runtime.jsx)(StyledTag,_objectSpread(_objectSpread({tagColor:color},props),{},{color:"primary"}))};const core_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{label:{defaultValue:null,description:"The content of the component.",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"SdsTagColorType"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},sdsType:{defaultValue:null,description:"",name:"sdsType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},tagColor:{defaultValue:null,description:"",name:"tagColor",required:!1,type:{name:"SdsTagColorType"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"packages/components/src/core/Tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}}}]);