"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[6386],{"./node_modules/@mui/icons-material/esm/CheckCircleOutline.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M16.59 7.58 10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"CheckCircleOutline")},"./node_modules/@mui/material/SvgIcon/SvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SvgIcon_SvgIcon});var esm_extends=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSvgIcon",slot)}(0,generateUtilityClasses.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SvgIconRoot=(0,styled.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`],styles[`fontSize${(0,capitalize.Z)(ownerState.fontSize)}`]]}})((({theme,ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette2,_palette3;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:ownerState.hasSvgAsChild?void 0:"currentColor",flexShrink:0,transition:null==(_theme$transitions=theme.transitions)||null==(_theme$transitions$cr=_theme$transitions.create)?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:null==(_theme$transitions2=theme.transitions)||null==(_theme$transitions2=_theme$transitions2.duration)?void 0:_theme$transitions2.shorter}),fontSize:{inherit:"inherit",small:(null==(_theme$typography=theme.typography)||null==(_theme$typography$pxT=_theme$typography.pxToRem)?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:(null==(_theme$typography2=theme.typography)||null==(_theme$typography2$px=_theme$typography2.pxToRem)?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:(null==(_theme$typography3=theme.typography)||null==(_theme$typography3$px=_theme$typography3.pxToRem)?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875rem"}[ownerState.fontSize],color:null!=(_palette$ownerState$c=null==(_palette=(theme.vars||theme).palette)||null==(_palette=_palette[ownerState.color])?void 0:_palette.main)?_palette$ownerState$c:{action:null==(_palette2=(theme.vars||theme).palette)||null==(_palette2=_palette2.action)?void 0:_palette2.active,disabled:null==(_palette3=(theme.vars||theme).palette)||null==(_palette3=_palette3.action)?void 0:_palette3.disabled,inherit:void 0}[ownerState.color]}})),SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),hasSvgAsChild=react.isValidElement(children)&&"svg"===children.type,ownerState=(0,esm_extends.Z)({},props,{color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox,hasSvgAsChild}),more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.Z)(color)}`,`fontSize${(0,capitalize.Z)(fontSize)}`]};return(0,composeClasses.Z)(slots,getSvgIconUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,(0,esm_extends.Z)({as:component,className:(0,clsx.Z)(classes.root,className),focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref},more,other,hasSvgAsChild&&children.props,{ownerState,children:[hasSvgAsChild?children.props.children:children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]}))}));SvgIcon.muiName="SvgIcon";const SvgIcon_SvgIcon=SvgIcon},"./packages/components/src/core/Tag/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,GrayPrimaryScreenshotTest:()=>GrayPrimaryScreenshotTest,LivePreview:()=>LivePreview,ScreenshotTest:()=>ScreenshotTest,SuccessWarningScreenshotTest:()=>SuccessWarningScreenshotTest,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var createSvgIcon=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const WbSunny=(0,createSvgIcon.Z)((0,jsx_runtime.jsx)("path",{d:"m6.76 4.84-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7 1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91 1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z"}),"WbSunny");var CheckCircleOutline=__webpack_require__("./node_modules/@mui/icons-material/esm/CheckCircleOutline.js"),react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),core_Tag=__webpack_require__("./packages/components/src/core/Tag/index.tsx");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var SDS_STYLES=["rounded","square"],DISPLAY_CONTENTS={display:"contents"},MID_LABEL={borderStyle:"solid none none none",gridColumn:"1 / 6",justifySelf:"stretch",paddingTop:10},ICON_OPTIONS=[void 0,(0,jsx_runtime.jsx)(Icon.Z,{sdsSize:"l",sdsIcon:"checkCircle",sdsType:"button"},"checkCircle")],HOVER_OPTIONS=[!0,!1];function CommonScreenshotTestDemo(_ref){var props=_ref.props,colors=_ref.colors,types=_ref.types;return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:SDS_STYLES.map((function(sdsStyle){return(0,jsx_runtime.jsx)(TagStyle,{colors,types,props,sdsStyle},sdsStyle)}))})}function TagStyle(_ref2){var colors=_ref2.colors,types=_ref2.types,sdsStyle=_ref2.sdsStyle,props=_ref2.props;return(0,jsx_runtime.jsxs)("div",{style:{columnGap:"20px",display:"inline-grid",fontFamily:"sans-serif",marginRight:"50px"},children:[(0,jsx_runtime.jsxs)("p",{style:{fontSize:"2em",gridColumn:"1 / 6",marginBottom:0},children:["Style: ",(0,jsx_runtime.jsx)("b",{children:sdsStyle})]}),colors.map((function(color){return(0,jsx_runtime.jsx)(TagColor,{sdsStyle,color,types,props},String(color))}))]})}function TagColor(_ref3){var sdsStyle=_ref3.sdsStyle,color=_ref3.color,types=_ref3.types,props=_ref3.props,LABEL_STYLE=_objectSpread(_objectSpread({},MID_LABEL),{},{borderWidth:"5px",fontSize:"1.5em",margin:"20px 0 0 0"});return(0,jsx_runtime.jsxs)("div",{style:DISPLAY_CONTENTS,children:[(0,jsx_runtime.jsxs)("p",{style:LABEL_STYLE,children:["Color: ",(0,jsx_runtime.jsx)("b",{children:"string"==typeof color?color:"custom"})]}),types.map((function(sdsType){return types.includes("secondary")&&"primary"===sdsType&&"gray"===color?null:(0,jsx_runtime.jsx)(TagType,{sdsStyle,color,sdsType,props},sdsType)}))]})}function TagType(_ref4){var sdsStyle=_ref4.sdsStyle,color=_ref4.color,sdsType=_ref4.sdsType,props=_ref4.props,LABEL_STYLE=_objectSpread(_objectSpread({},MID_LABEL),{},{borderWidth:"2px",fontSize:"1.17em",margin:"20px 0"});return(0,jsx_runtime.jsxs)("div",{style:DISPLAY_CONTENTS,children:[(0,jsx_runtime.jsxs)("p",{style:LABEL_STYLE,children:["Type: ",(0,jsx_runtime.jsx)("b",{children:sdsType})]}),ICON_OPTIONS.map((function(icon){return(0,jsx_runtime.jsx)(TagIcon,{sdsStyle,color,sdsType,icon,props},String(icon))}))]})}function TagIcon(_ref5){var sdsStyle=_ref5.sdsStyle,color=_ref5.color,sdsType=_ref5.sdsType,icon=_ref5.icon,props=_ref5.props,LABEL_STYLE=_objectSpread(_objectSpread({},MID_LABEL),{},{alignSelf:"end",borderWidth:"1px",fontSize:"0.83em",margin:"0 0 5px 0"});return(0,jsx_runtime.jsxs)("div",{style:DISPLAY_CONTENTS,children:[(0,jsx_runtime.jsxs)("p",{style:LABEL_STYLE,children:["Icon: ",(0,jsx_runtime.jsx)("b",{children:icon?"yes":"no"})]}),HOVER_OPTIONS.map((function(hover){return(0,react.createElement)(TagState,_objectSpread(_objectSpread({},props),{},{sdsStyle,color,sdsType,icon,hover,key:String(hover)}))}))]})}function TagState(props){var sdsStyle=props.sdsStyle,color=props.color,sdsType=props.sdsType,icon=props.icon,hover=props.hover,STATE_LABEL={fontSize:"0.67em",margin:"10px 0"},STATE_LEVEL={marginBottom:10};return(0,jsx_runtime.jsx)("div",{style:{display:"contents"},children:["default","hover","active","focus-visible"].map((function(state){return(0,jsx_runtime.jsx)("div",{style:STATE_LEVEL,children:(!0===hover||!1===hover&&"default"===state)&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{style:STATE_LABEL,children:[hover?"State: ":"Hoverable: ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("b",{children:hover?state:"false"})]}),(0,react.createElement)(core_Tag.Z,_objectSpread(_objectSpread({},props),{},{label:"Label","data-testid":"tag",sdsStyle,color,sdsType,icon,hover,className:hover?"pseudo-".concat(state):"pseudo-default",key:state}))]})},state)}))})}try{CommonScreenshotTestDemo.displayName="CommonScreenshotTestDemo",CommonScreenshotTestDemo.__docgenInfo={description:"",displayName:"CommonScreenshotTestDemo",props:{props:{defaultValue:null,description:"",name:"props",required:!0,type:{name:"Args"}},colors:{defaultValue:null,description:"",name:"colors",required:!0,type:{name:"(SdsTagColorType | undefined)[]"}},types:{defaultValue:null,description:"",name:"types",required:!0,type:{name:'("primary" | "secondary" | undefined)[]'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tag/index.testUtils.tsx#CommonScreenshotTestDemo"]={docgenInfo:CommonScreenshotTestDemo.__docgenInfo,name:"CommonScreenshotTestDemo",path:"packages/components/src/core/Tag/index.testUtils.tsx#CommonScreenshotTestDemo"})}catch(__react_docgen_typescript_loader_error){}function index_stories_typeof(o){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},index_stories_typeof(o)}function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(t){var i=function index_stories_toPrimitive(t,r){if("object"!=index_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=index_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==index_stories_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ICONS=[void 0,(0,jsx_runtime.jsx)(Icon.Z,{sdsSize:"l",sdsIcon:"checkCircle",sdsType:"button"},"checkCircle"),(0,jsx_runtime.jsx)(Icon.Z,{sdsSize:"l",sdsIcon:"loading",sdsType:"button"},"loading"),(0,jsx_runtime.jsx)(WbSunny,{},"WBSunny"),(0,jsx_runtime.jsx)(CheckCircleOutline.Z,{},"CheckCircleOutline")],index_stories_SDS_STYLES=["rounded","square"],PANEL_COLORS=["primary","info","success","warning","error","gray","beta",["#000000","#C65FA7","#FFD400"]],colors=PANEL_COLORS.slice(0,8);colors.splice(2,2);var SDS_TYPES=["primary","secondary"];const index_stories={argTypes:{color:{control:{labels:["primary","info","success","warning","error","gray","beta","Custom colors for Label, Background, Icon"],type:"select"},mapping:PANEL_COLORS,options:Object.keys(PANEL_COLORS)},hover:{control:{type:"boolean"}},icon:{control:{labels:["No Icon","SDS Check Circle","SDS Loading","MUI WbSunny","MUI Check Circle"],type:"select"},mapping:ICONS,options:Object.keys(ICONS)},label:{control:{type:"text"},required:!0},sdsStyle:{control:{type:"radio"},options:["rounded","square"]},sdsType:{control:{type:"radio"},options:["primary","secondary"]}},component:function Tag(props){var label=props.label;return(0,jsx_runtime.jsx)(core_Tag.Z,index_stories_objectSpread({label},props))},title:"Tag"};var Default={args:{hover:!0,label:"Label",sdsStyle:"square",sdsType:"primary"}},livePreviewStyles={display:"inline-grid",gridColumnGap:24,gridRowGap:24,gridTemplateColumns:"repeat(3, auto)",gridTemplateRows:"repeat(2, auto)"},LivePreviewDemo=function LivePreviewDemo(props){var color=props.color,icon=props.icon,label=props.label;return(0,jsx_runtime.jsxs)("div",{style:livePreviewStyles,children:[(0,jsx_runtime.jsx)("div",{style:{gridArea:"1 / 1 / 2 / 2"},children:(0,jsx_runtime.jsx)(core_Tag.Z,index_stories_objectSpread(index_stories_objectSpread({},props),{},{color,icon:void 0,label,sdsStyle:"square",sdsType:"primary"}))}),(0,jsx_runtime.jsx)("div",{style:{gridArea:"1 / 2 / 2 / 3"},children:(0,jsx_runtime.jsx)(core_Tag.Z,index_stories_objectSpread(index_stories_objectSpread({},props),{},{color,icon:void 0,label,sdsStyle:"square",sdsType:"secondary"}))}),(0,jsx_runtime.jsx)("div",{style:{gridArea:"1 / 3 / 2 / 4"},children:(0,jsx_runtime.jsx)(core_Tag.Z,index_stories_objectSpread(index_stories_objectSpread({},props),{},{color,icon:icon||(0,jsx_runtime.jsx)(Icon.Z,{sdsSize:"l",sdsIcon:"checkCircle",sdsType:"button"}),label,sdsStyle:"square",sdsType:"secondary"}))}),(0,jsx_runtime.jsx)("div",{style:{gridArea:"2 / 1 / 3 / 2"},children:(0,jsx_runtime.jsx)(core_Tag.Z,index_stories_objectSpread(index_stories_objectSpread({},props),{},{color,icon:void 0,label,sdsStyle:"rounded",sdsType:"primary"}))}),(0,jsx_runtime.jsx)("div",{style:{gridArea:"2 / 2 / 3 / 3"},children:(0,jsx_runtime.jsx)(core_Tag.Z,index_stories_objectSpread(index_stories_objectSpread({},props),{},{color,icon:void 0,label,sdsStyle:"rounded",sdsType:"secondary"}))}),(0,jsx_runtime.jsx)("div",{style:{gridArea:"2 / 3 / 3 / 4"},children:(0,jsx_runtime.jsx)(core_Tag.Z,index_stories_objectSpread(index_stories_objectSpread({},props),{},{color,icon:icon||(0,jsx_runtime.jsx)(Icon.Z,{sdsSize:"l",sdsIcon:"checkCircle",sdsType:"button"}),label,sdsStyle:"rounded",sdsType:"secondary"}))})]})},LivePreview={args:{label:"Label"},parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(LivePreviewDemo,index_stories_objectSpread({},args))}},SANS_SERIF_STYLE={fontFamily:"sans-serif"};function ScreenshotTestDemo(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{style:SANS_SERIF_STYLE,children:"This story currently excludes Tags with both `sdsType` of `primary` and `color` of `gray`, and those with `color` of `success` and `primary`, because they do not pass the a11y tests. They have their own stories wherein the a11y tests are disabled until the a11y tests are updated to accommodate APCA (for gray x primary) or until the Tag colors are updated by design (for success and primary)."}),(0,jsx_runtime.jsx)(CommonScreenshotTestDemo,{props,colors,types:SDS_TYPES})]})}var ScreenshotTest={args:{color:colors[0],hover:HOVER_OPTIONS[0],label:"Label",sdsStyle:index_stories_SDS_STYLES[0],sdsType:SDS_TYPES[0]},parameters:{axe:{timeout:1e4},controls:{exclude:["color","hover","label","sdsStyle","sdsType","icon"]},snapshot:{skip:!0}},render:function render(props){return(0,jsx_runtime.jsx)(ScreenshotTestDemo,index_stories_objectSpread({},props))}},GRAY_PRIMARY_COLORS=["gray"],GRAY_PRIMARY_TYPES=["primary"];function GrayPrimaryScreenshotTestDemo(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{style:SANS_SERIF_STYLE,children:"Tags with `color` of `gray` and `sdsType` of `primary` have their own story here because they do not currently pass the a11y tests. However, design has manually tested them with APCA, and they are accessible; our tests just do not use APCA yet. In the meantime, the a11y tests are currently disabled for this story, but enabled for the remaining colors in the ScreenshotTest story, so they can be tested properly."}),(0,jsx_runtime.jsx)(CommonScreenshotTestDemo,{props,colors:GRAY_PRIMARY_COLORS,types:GRAY_PRIMARY_TYPES})]})}var GrayPrimaryScreenshotTest={args:{color:colors[0],hover:HOVER_OPTIONS[0],label:"Label",sdsStyle:index_stories_SDS_STYLES[0],sdsType:SDS_TYPES[0]},parameters:{axe:{disabledRules:["color-contrast"],timeout:1e4},controls:{exclude:["color","hover","label","sdsStyle","sdsType","icon"]},snapshot:{skip:!0}},render:function render(props){return(0,jsx_runtime.jsx)(GrayPrimaryScreenshotTestDemo,index_stories_objectSpread({},props))}},SUCCESS_WARNING_PRIMARY_COLORS=["success","warning"];function SuccessWarningScreenshotTestDemo(props){return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("p",{style:SANS_SERIF_STYLE,children:"Tags with `color` of `success` or `warning`have their own story here because they do not currently pass the a11y tests. Design is aware of this and will be updating their colors. In the meantime the a11y tests are currently disabled for this story, but enabled for the remaining colors in the ScreenshotTest story, so they can be tested properly."}),(0,jsx_runtime.jsx)(CommonScreenshotTestDemo,{props,colors:SUCCESS_WARNING_PRIMARY_COLORS,types:SDS_TYPES})]})}var SuccessWarningScreenshotTest={args:{color:colors[0],hover:HOVER_OPTIONS[0],label:"Label",sdsStyle:index_stories_SDS_STYLES[0],sdsType:SDS_TYPES[0]},parameters:{axe:{disabledRules:["color-contrast"],timeout:1e4},controls:{exclude:["color","hover","label","sdsStyle","sdsType","icon"]},snapshot:{skip:!0}},render:function render(props){return(0,jsx_runtime.jsx)(SuccessWarningScreenshotTestDemo,index_stories_objectSpread({},props))}},TestDemo=function TestDemo(props){var label=props.label;return(0,jsx_runtime.jsx)(core_Tag.Z,index_stories_objectSpread(index_stories_objectSpread({label},props),{},{"data-testid":"tags"}))},Test={args:{label:"Label"},parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(TestDemo,index_stories_objectSpread({},args))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    hover: true,\n    label: "Label",\n    sdsStyle: "square",\n    sdsType: "primary"\n  }\n}',...Default.parameters?.docs?.source}}},LivePreview.parameters={...LivePreview.parameters,docs:{...LivePreview.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label"\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}',...LivePreview.parameters?.docs?.source}}},ScreenshotTest.parameters={...ScreenshotTest.parameters,docs:{...ScreenshotTest.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: colors[0],\n    hover: HOVER_OPTIONS[0],\n    label: "Label",\n    sdsStyle: SDS_STYLES[0],\n    sdsType: SDS_TYPES[0]\n  },\n  parameters: {\n    axe: {\n      timeout: 10 * 1000\n    },\n    controls: {\n      exclude: ["color", "hover", "label", "sdsStyle", "sdsType", "icon"]\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (props: Args): JSX.Element => <ScreenshotTestDemo {...props} />\n}',...ScreenshotTest.parameters?.docs?.source}}},GrayPrimaryScreenshotTest.parameters={...GrayPrimaryScreenshotTest.parameters,docs:{...GrayPrimaryScreenshotTest.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: colors[0],\n    hover: HOVER_OPTIONS[0],\n    label: "Label",\n    sdsStyle: SDS_STYLES[0],\n    sdsType: SDS_TYPES[0]\n  },\n  parameters: {\n    axe: {\n      // `color-contrast` is disabled for this test because design tested it with APCA and determined these colors pass, our test just isn\'t able to use APCA yet; this color was pulled into its own story so the remaining colors can be tested separately\n      disabledRules: ["color-contrast"],\n      timeout: 10 * 1000\n    },\n    controls: {\n      exclude: ["color", "hover", "label", "sdsStyle", "sdsType", "icon"]\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (props: Args): JSX.Element => <GrayPrimaryScreenshotTestDemo {...props} />\n}',...GrayPrimaryScreenshotTest.parameters?.docs?.source}}},SuccessWarningScreenshotTest.parameters={...SuccessWarningScreenshotTest.parameters,docs:{...SuccessWarningScreenshotTest.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: colors[0],\n    hover: HOVER_OPTIONS[0],\n    label: "Label",\n    sdsStyle: SDS_STYLES[0],\n    sdsType: SDS_TYPES[0]\n  },\n  parameters: {\n    axe: {\n      // `color-contrast` is disabled for this test because it is now a known issue and design will work on adjusting the colors so that they pass; these colors were pulled into their own story so the remaining colors can be tested separately\n      disabledRules: ["color-contrast"],\n      timeout: 10 * 1000\n    },\n    controls: {\n      exclude: ["color", "hover", "label", "sdsStyle", "sdsType", "icon"]\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (props: Args): JSX.Element => <SuccessWarningScreenshotTestDemo {...props} />\n}',...SuccessWarningScreenshotTest.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label"\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} />\n}',...Test.parameters?.docs?.source}}};const __namedExportsOrder=["Default","LivePreview","ScreenshotTest","GrayPrimaryScreenshotTest","SuccessWarningScreenshotTest","Test"]},"./packages/components/src/core/Tag/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_Tag});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),Chip=__webpack_require__("./node_modules/@mui/material/Chip/Chip.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function createTypeCss(props,type){var themeColors=(0,styles.EC)(props),intent="string"==typeof props.tagColor?props.tagColor:"primary",colors=Array.isArray(props.tagColor)?_toConsumableArray(props.tagColor):[],typeColors={primary:{background:colors.length>=2?colors[1]:null==themeColors?void 0:themeColors[intent][400],backgroundClicked:colors.length>=2?(0,colorManipulator._j)(colors[1],.3):null==themeColors?void 0:themeColors[intent][600],backgroundHover:colors.length>=2?(0,colorManipulator._j)(colors[1],.15):null==themeColors?void 0:themeColors[intent][500],iconColor:colors.length>2?colors[2]:"white",label:colors.length?colors[0]:"white"},secondary:{background:colors.length>=2?colors[1]:null==themeColors?void 0:themeColors[intent][200],backgroundClicked:colors.length>=2?(0,colorManipulator._j)(colors[1],.3):null==themeColors?void 0:themeColors[intent][600],backgroundHover:colors.length>=2?(0,colorManipulator._j)(colors[1],.15):null==themeColors?void 0:themeColors[intent][500],iconColor:colors.length>2?colors[2]:null==themeColors?void 0:themeColors[intent][400],label:colors.length?colors[0]:null==themeColors?void 0:themeColors[intent][600]}}[type];return(0,emotion_react_browser_esm.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    background-color: ",";\n    position: relative;\n\n    .MuiChip-label {\n      color: ",";\n    }\n\n    svg {\n      fill: ",";\n    }\n\n    &:hover,\n    &:active,\n    &:focus {\n      .MuiChip-label {\n        color: white;\n      }\n\n      svg {\n        fill: white;\n      }\n    }\n\n    &:hover {\n      background-color: ",";\n    }\n\n    &:active {\n      background-color: ",";\n    }\n\n    &:focus {\n      background-color: ",";\n    }\n\n    &:focus:hover {\n      background-color: ",";\n    }\n\n    &:focus:active {\n      background-color: ",";\n    }\n  "])),typeColors.background,typeColors.label,typeColors.iconColor,typeColors.backgroundHover,typeColors.backgroundClicked,typeColors.background,typeColors.backgroundHover,typeColors.backgroundClicked)}var typeToCss={primary:function primary(props){return createTypeCss(props,"primary")},secondary:function secondary(props){return createTypeCss(props,"secondary")}},doNotForwardProps=["sdsType","sdsStyle","tagColor","hover"],StyledTag=(0,styled.ZP)(Chip.Z,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  border: none;\n\n  ","\n"])),(function(props){var _props$hover=props.hover,hover=void 0===_props$hover||_props$hover,sdsType=props.sdsType,sdsStyle=props.sdsStyle,icon=props.icon,isRounded="rounded"===sdsStyle,type=sdsType||"primary";return(0,emotion_react_browser_esm.iv)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n      ","\n      ","\n      ","\n      ","\n    "])),icon?function withIcon(props){var spacings=(0,styles.Gr)(props),iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    height: unset;\n    margin: 0 ","px ","px 0;\n\n    .MuiChip-label {\n      ","\n      padding: 0;\n    }\n\n    .MuiSvgIcon-root {\n      height: ","px;\n      width: ","px;\n      padding-right: ","px;\n      margin: 0 0 0 -","px;\n    }\n\n    .MuiChip-deleteIcon {\n      ","\n      color: white;\n      margin: 0 0 0 ","px;\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xs,(0,styles.$g)(props),null==iconSizes?void 0:iconSizes.l.height,null==iconSizes?void 0:iconSizes.l.width,null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xxxs,(0,styles.J5)(props),null==spacings?void 0:spacings.xxs,null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props):function withoutIcon(props){var spacings=(0,styles.Gr)(props),iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    height: unset;\n    margin: 0 ","px ","px 0;\n\n    .MuiChip-label {\n      ","\n      padding: 0;\n    }\n\n    .MuiChip-deleteIcon {\n      ","\n      color: white;\n      margin: 0 0 0 ","px;\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.xs,(0,styles.aI)(props),(0,styles.J5)(props),null==spacings?void 0:spacings.xxs,null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props),typeToCss[type](props),isRounded?function rounded(props){var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props),icon=props.icon;return(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    border-radius: ","px;\n    padding: ",";\n\n    &:after {\n      border-radius: ","px;\n    }\n  "])),null==corners?void 0:corners.l,icon?"".concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.s,"px ").concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.xs,"px"):"".concat(null==spacings?void 0:spacings.xxxs,"px ").concat(null==spacings?void 0:spacings.s,"px"),null==corners?void 0:corners.l)}(props):function square(props){var corners=(0,styles.DV)(props),spacings=(0,styles.Gr)(props),icon=props.icon;return(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    border-radius: ","px;\n    padding: ",";\n\n    &:after {\n      border-radius: ","px;\n    }\n  "])),null==corners?void 0:corners.m,icon?"".concat(null==spacings?void 0:spacings.xxs,"px ").concat(null==spacings?void 0:spacings.s,"px"):"".concat(null==spacings?void 0:spacings.xxxs,"px ").concat(null==spacings?void 0:spacings.xs,"px"),null==corners?void 0:corners.m)}(props),hover?function withHover(){return(0,emotion_react_browser_esm.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    &:hover {\n      cursor: pointer;\n    }\n\n    &:hover,\n    &:focus-visible {\n      color: white;\n    }\n  "])))}():"pointer-events: none;")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Tag=function Tag(props){var color=props.color;return(0,jsx_runtime.jsx)(StyledTag,_objectSpread(_objectSpread({tagColor:color},props),{},{color:"primary"}))};const core_Tag=Tag;try{Tag.displayName="Tag",Tag.__docgenInfo={description:"",displayName:"Tag",props:{label:{defaultValue:null,description:"The content of the component.",name:"label",required:!0,type:{name:"string"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"SdsTagColorType"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},hover:{defaultValue:null,description:"",name:"hover",required:!1,type:{name:"boolean"}},sdsType:{defaultValue:null,description:"",name:"sdsType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},tagColor:{defaultValue:null,description:"",name:"tagColor",required:!1,type:{name:"SdsTagColorType"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Tag/index.tsx#Tag"]={docgenInfo:Tag.__docgenInfo,name:"Tag",path:"packages/components/src/core/Tag/index.tsx#Tag"})}catch(__react_docgen_typescript_loader_error){}}}]);