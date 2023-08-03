"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[2536],{"./node_modules/@mui/material/SvgIcon/SvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>SvgIcon_SvgIcon});var esm_extends=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@mui/material/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx_m=__webpack_require__("./node_modules/clsx/dist/clsx.m.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getSvgIconUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiSvgIcon",slot)}(0,generateUtilityClasses.Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],SvgIconRoot=(0,styled.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState}=props;return[styles.root,"inherit"!==ownerState.color&&styles[`color${(0,capitalize.Z)(ownerState.color)}`],styles[`fontSize${(0,capitalize.Z)(ownerState.fontSize)}`]]}})((({theme,ownerState})=>{var _theme$transitions,_theme$transitions$cr,_theme$transitions2,_theme$transitions2$d,_theme$typography,_theme$typography$pxT,_theme$typography2,_theme$typography2$px,_theme$typography3,_theme$typography3$px,_palette$ownerState$c,_palette,_palette$ownerState$c2,_palette2,_palette2$action,_palette3,_palette3$action;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(_theme$transitions=theme.transitions)||null==(_theme$transitions$cr=_theme$transitions.create)?void 0:_theme$transitions$cr.call(_theme$transitions,"fill",{duration:null==(_theme$transitions2=theme.transitions)||null==(_theme$transitions2$d=_theme$transitions2.duration)?void 0:_theme$transitions2$d.shorter}),fontSize:{inherit:"inherit",small:(null==(_theme$typography=theme.typography)||null==(_theme$typography$pxT=_theme$typography.pxToRem)?void 0:_theme$typography$pxT.call(_theme$typography,20))||"1.25rem",medium:(null==(_theme$typography2=theme.typography)||null==(_theme$typography2$px=_theme$typography2.pxToRem)?void 0:_theme$typography2$px.call(_theme$typography2,24))||"1.5rem",large:(null==(_theme$typography3=theme.typography)||null==(_theme$typography3$px=_theme$typography3.pxToRem)?void 0:_theme$typography3$px.call(_theme$typography3,35))||"2.1875rem"}[ownerState.fontSize],color:null!=(_palette$ownerState$c=null==(_palette=(theme.vars||theme).palette)||null==(_palette$ownerState$c2=_palette[ownerState.color])?void 0:_palette$ownerState$c2.main)?_palette$ownerState$c:{action:null==(_palette2=(theme.vars||theme).palette)||null==(_palette2$action=_palette2.action)?void 0:_palette2$action.active,disabled:null==(_palette3=(theme.vars||theme).palette)||null==(_palette3$action=_palette3.action)?void 0:_palette3$action.disabled,inherit:void 0}[ownerState.color]}})),SvgIcon=react.forwardRef((function SvgIcon(inProps,ref){const props=(0,useThemeProps.Z)({props:inProps,name:"MuiSvgIcon"}),{children,className,color="inherit",component="svg",fontSize="medium",htmlColor,inheritViewBox=!1,titleAccess,viewBox="0 0 24 24"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color,component,fontSize,instanceFontSize:inProps.fontSize,inheritViewBox,viewBox}),more={};inheritViewBox||(more.viewBox=viewBox);const classes=(ownerState=>{const{color,fontSize,classes}=ownerState,slots={root:["root","inherit"!==color&&`color${(0,capitalize.Z)(color)}`,`fontSize${(0,capitalize.Z)(fontSize)}`]};return(0,composeClasses.Z)(slots,getSvgIconUtilityClass,classes)})(ownerState);return(0,jsx_runtime.jsxs)(SvgIconRoot,(0,esm_extends.Z)({as:component,className:(0,clsx_m.Z)(classes.root,className),focusable:"false",color:htmlColor,"aria-hidden":!titleAccess||void 0,role:titleAccess?"img":void 0,ref},more,other,{ownerState,children:[children,titleAccess?(0,jsx_runtime.jsx)("title",{children:titleAccess}):null]}))}));SvgIcon.muiName="SvgIcon";const SvgIcon_SvgIcon=SvgIcon},"./node_modules/@mui/material/styles/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps_useThemeProps});var resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps.js");var useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js");function useThemeProps({props,name,defaultTheme,themeId}){let theme=(0,useTheme.Z)(defaultTheme);themeId&&(theme=theme[themeId]||theme);const mergedProps=function getThemeProps(params){const{theme,name,props}=params;return theme&&theme.components&&theme.components[name]&&theme.components[name].defaultProps?(0,resolveProps.Z)(theme.components[name].defaultProps,props):props}({theme,name,props});return mergedProps}var defaultTheme=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useThemeProps_useThemeProps({props,name}){return useThemeProps({props,name,defaultTheme:defaultTheme.Z,themeId:identifier.Z})}},"./node_modules/@mui/material/utils/capitalize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/capitalize.js").Z},"./node_modules/@mui/system/esm/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _createTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js");const systemDefaultTheme=(0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.Z)();const __WEBPACK_DEFAULT_EXPORT__=function useTheme(defaultTheme=systemDefaultTheme){return(0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__.Z)(defaultTheme)}},"./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const defaultGenerator=componentName=>componentName,__WEBPACK_DEFAULT_EXPORT__=(()=>{let generate=defaultGenerator;return{configure(generator){generate=generator},generate:componentName=>generate(componentName),reset(){generate=defaultGenerator}}})()},"./node_modules/@mui/utils/esm/composeClasses/composeClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function composeClasses(slots,getUtilityClass,classes=undefined){const output={};return Object.keys(slots).forEach((slot=>{output[slot]=slots[slot].reduce(((acc,key)=>{if(key){const utilityClass=getUtilityClass(key);""!==utilityClass&&acc.push(utilityClass),classes&&classes[key]&&acc.push(classes[key])}return acc}),[]).join(" ")})),output}__webpack_require__.d(__webpack_exports__,{Z:()=>composeClasses})},"./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>generateUtilityClass});var _ClassNameGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js");const globalStateClassesMapping={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function generateUtilityClass(componentName,slot,globalStatePrefix="Mui"){const globalStateClass=globalStateClassesMapping[slot];return globalStateClass?`${globalStatePrefix}-${globalStateClass}`:`${_ClassNameGenerator__WEBPACK_IMPORTED_MODULE_0__.Z.generate(componentName)}-${slot}`}},"./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>generateUtilityClasses});var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function generateUtilityClasses(componentName,slots,globalStatePrefix="Mui"){const result={};return slots.forEach((slot=>{result[slot]=(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)(componentName,slot,globalStatePrefix)})),result}},"./node_modules/@mui/utils/esm/resolveProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resolveProps(defaultProps,props){const output={...props};return Object.keys(defaultProps).forEach((propName=>{if(propName.toString().match(/^(components|slots)$/))output[propName]={...defaultProps[propName],...output[propName]};else if(propName.toString().match(/^(componentsProps|slotProps)$/)){const defaultSlotProps=defaultProps[propName]||{},slotProps=props[propName];output[propName]={},slotProps&&Object.keys(slotProps)?defaultSlotProps&&Object.keys(defaultSlotProps)?(output[propName]={...slotProps},Object.keys(defaultSlotProps).forEach((slotPropName=>{output[propName][slotPropName]=resolveProps(defaultSlotProps[slotPropName],slotProps[slotPropName])}))):output[propName]=slotProps:output[propName]=defaultSlotProps}else void 0===output[propName]&&(output[propName]=defaultProps[propName])})),output}__webpack_require__.d(__webpack_exports__,{Z:()=>resolveProps})},"./packages/components/src/core/LoadingIndicator/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LivePreview:()=>LivePreview,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var _Default$parameters,_Default$parameters2,_Default$parameters2$,_LivePreview$paramete,_LivePreview$paramete2,_LivePreview$paramete3,_Test$parameters,_Test$parameters2,_Test$parameters2$doc,_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/styles/index.ts"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/core/LoadingIndicator/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={argTypes:{sdsStyle:{control:{type:"select"},options:["minimal","tag"]}},component:function LoadingIndicator(props){var sdsStyle=props.sdsStyle;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.Z,_objectSpread({sdsStyle},props))},title:"LoadingIndicator"};var Default={args:{sdsStyle:"minimal"}},LivePreviewDemo=function LivePreviewDemo(props){var spacings=null===_styles__WEBPACK_IMPORTED_MODULE_1__.GI||void 0===_styles__WEBPACK_IMPORTED_MODULE_1__.GI?void 0:_styles__WEBPACK_IMPORTED_MODULE_1__.GI.spacing;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div",{style:{display:"grid",gridColumnGap:"24px",gridRowGap:"0px",gridTemplateColumns:"repeat(2, 70px)",gridTemplateRows:"1fr"},children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{marginBottom:null==spacings?void 0:spacings.l,marginRight:null==spacings?void 0:spacings.l,marginTop:null==spacings?void 0:spacings.l},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.Z,_objectSpread({sdsStyle:"minimal"},props))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div",{style:{marginBottom:null==spacings?void 0:spacings.l,marginRight:null==spacings?void 0:spacings.l,marginTop:null==spacings?void 0:spacings.l},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.Z,_objectSpread({sdsStyle:"tag"},props))})]})},LivePreview={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LivePreviewDemo,_objectSpread({},args))}},Test={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(LivePreviewDemo,_objectSpread({},args))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    sdsStyle: "minimal"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),LivePreview.parameters=_objectSpread(_objectSpread({},LivePreview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LivePreview$paramete=LivePreview.parameters)||void 0===_LivePreview$paramete?void 0:_LivePreview$paramete.docs),{},{source:_objectSpread({originalSource:"{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}"},null===(_LivePreview$paramete2=LivePreview.parameters)||void 0===_LivePreview$paramete2||null===(_LivePreview$paramete3=_LivePreview$paramete2.docs)||void 0===_LivePreview$paramete3?void 0:_LivePreview$paramete3.source)})}),Test.parameters=_objectSpread(_objectSpread({},Test.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}"},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2$doc=_Test$parameters2.docs)||void 0===_Test$parameters2$doc?void 0:_Test$parameters2$doc.source)})});var __namedExportsOrder=["Default","LivePreview","Test"]},"./packages/components/src/core/LoadingIndicator/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_LoadingIndicator});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var fontBodyS=(0,styles.oJ)("s"),StyledText=(0,styled.ZP)("span")(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var spacings=(0,styles.Gr)(props),typography=(0,styles.cY)(props);return"\n      margin: 0 ".concat(null==spacings?void 0:spacings.xs,"px;\n      font-family: ").concat(null==typography?void 0:typography.fontFamily,";\n    ")})),doNotForwardProps=["sdsStyle"],StyledLoadingIndicator=(0,styled.ZP)("div",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var sdsStyle=props.sdsStyle,spacings=(0,styles.Gr)(props),style=(0,emotion_react_browser_esm.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n      display: inline-flex;\n      align-items: center;\n      padding: ","px;\n    "])),null==spacings?void 0:spacings.xxs);return(0,emotion_react_browser_esm.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n      ","\n      ","\n      ","\n    "])),style,"minimal"===sdsStyle&&function minimal(props){var colors=(0,styles.EC)(props),iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    ","\n\n    color: ",";\n\n    svg {\n      height: ","px;\n      width: ","px;\n\n      path {\n        fill: ",";\n      }\n    }\n  "])),fontBodyS(props),null==colors?void 0:colors.gray[500],null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width,null==colors?void 0:colors.gray[500])}(props),"tag"===sdsStyle&&function tag(props){var colors=(0,styles.EC)(props),corners=(0,styles.DV)(props);return(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    ","\n\n    background-color: ",";\n    border-radius: ","px;\n    color: ",";\n\n    svg {\n      path {\n        fill: ",";\n      }\n    }\n  "])),(0,styles.vz)(props),null==colors?void 0:colors.info[200],null==corners?void 0:corners.l,null==colors?void 0:colors.info[600],null==colors?void 0:colors.info[400])}(props))})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),LoadingIndicator=function LoadingIndicator(_ref){var sdsStyle=_ref.sdsStyle;return(0,jsx_runtime.jsxs)(StyledLoadingIndicator,{sdsStyle,children:[(0,jsx_runtime.jsx)(Icon.Z,{sdsIcon:"loading",sdsSize:"l",sdsType:"static"}),(0,jsx_runtime.jsx)(StyledText,{children:"Loading"})]})};const core_LoadingIndicator=LoadingIndicator;try{LoadingIndicator.displayName="LoadingIndicator",LoadingIndicator.__docgenInfo={description:"",displayName:"LoadingIndicator",props:{sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!0,type:{name:"enum",value:[{value:'"minimal"'},{value:'"tag"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/LoadingIndicator/index.tsx#LoadingIndicator"]={docgenInfo:LoadingIndicator.__docgenInfo,name:"LoadingIndicator",path:"packages/components/src/core/LoadingIndicator/index.tsx#LoadingIndicator"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}}}]);