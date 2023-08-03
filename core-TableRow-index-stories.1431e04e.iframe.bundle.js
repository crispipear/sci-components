"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[7646],{"./node_modules/@mui/material/styles/useThemeProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useThemeProps_useThemeProps});var resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps.js");var useTheme=__webpack_require__("./node_modules/@mui/system/esm/useTheme.js");function useThemeProps({props,name,defaultTheme,themeId}){let theme=(0,useTheme.Z)(defaultTheme);themeId&&(theme=theme[themeId]||theme);const mergedProps=function getThemeProps(params){const{theme,name,props}=params;return theme&&theme.components&&theme.components[name]&&theme.components[name].defaultProps?(0,resolveProps.Z)(theme.components[name].defaultProps,props):props}({theme,name,props});return mergedProps}var defaultTheme=__webpack_require__("./node_modules/@mui/material/styles/defaultTheme.js"),identifier=__webpack_require__("./node_modules/@mui/material/styles/identifier.js");function useThemeProps_useThemeProps({props,name}){return useThemeProps({props,name,defaultTheme:defaultTheme.Z,themeId:identifier.Z})}},"./node_modules/@mui/material/utils/capitalize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/capitalize.js").Z},"./node_modules/@mui/material/utils/useEventCallback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useEventCallback.js").Z},"./node_modules/@mui/material/utils/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef.js").Z},"./node_modules/@mui/material/utils/useIsFocusVisible.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/@mui/utils/esm/useIsFocusVisible.js").Z},"./node_modules/@mui/system/esm/useTheme.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _createTheme__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/system/esm/createTheme/createTheme.js"),_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/system/esm/useThemeWithoutDefault.js");const systemDefaultTheme=(0,_createTheme__WEBPACK_IMPORTED_MODULE_0__.Z)();const __WEBPACK_DEFAULT_EXPORT__=function useTheme(defaultTheme=systemDefaultTheme){return(0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__.Z)(defaultTheme)}},"./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const defaultGenerator=componentName=>componentName,__WEBPACK_DEFAULT_EXPORT__=(()=>{let generate=defaultGenerator;return{configure(generator){generate=generator},generate:componentName=>generate(componentName),reset(){generate=defaultGenerator}}})()},"./node_modules/@mui/utils/esm/composeClasses/composeClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function composeClasses(slots,getUtilityClass,classes=undefined){const output={};return Object.keys(slots).forEach((slot=>{output[slot]=slots[slot].reduce(((acc,key)=>{if(key){const utilityClass=getUtilityClass(key);""!==utilityClass&&acc.push(utilityClass),classes&&classes[key]&&acc.push(classes[key])}return acc}),[]).join(" ")})),output}__webpack_require__.d(__webpack_exports__,{Z:()=>composeClasses})},"./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>generateUtilityClass});var _ClassNameGenerator__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js");const globalStateClassesMapping={active:"active",checked:"checked",completed:"completed",disabled:"disabled",readOnly:"readOnly",error:"error",expanded:"expanded",focused:"focused",focusVisible:"focusVisible",required:"required",selected:"selected"};function generateUtilityClass(componentName,slot,globalStatePrefix="Mui"){const globalStateClass=globalStateClassesMapping[slot];return globalStateClass?`${globalStatePrefix}-${globalStateClass}`:`${_ClassNameGenerator__WEBPACK_IMPORTED_MODULE_0__.Z.generate(componentName)}-${slot}`}},"./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>generateUtilityClasses});var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function generateUtilityClasses(componentName,slots,globalStatePrefix="Mui"){const result={};return slots.forEach((slot=>{result[slot]=(0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__.Z)(componentName,slot,globalStatePrefix)})),result}},"./node_modules/@mui/utils/esm/resolveProps.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resolveProps(defaultProps,props){const output={...props};return Object.keys(defaultProps).forEach((propName=>{if(propName.toString().match(/^(components|slots)$/))output[propName]={...defaultProps[propName],...output[propName]};else if(propName.toString().match(/^(componentsProps|slotProps)$/)){const defaultSlotProps=defaultProps[propName]||{},slotProps=props[propName];output[propName]={},slotProps&&Object.keys(slotProps)?defaultSlotProps&&Object.keys(defaultSlotProps)?(output[propName]={...slotProps},Object.keys(defaultSlotProps).forEach((slotPropName=>{output[propName][slotPropName]=resolveProps(defaultSlotProps[slotPropName],slotProps[slotPropName])}))):output[propName]=slotProps:output[propName]=defaultSlotProps}else void 0===output[propName]&&(output[propName]=defaultProps[propName])})),output}__webpack_require__.d(__webpack_exports__,{Z:()=>resolveProps})},"./node_modules/@mui/utils/esm/setRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function setRef(ref,value){"function"==typeof ref?ref(value):ref&&(ref.current=value)}__webpack_require__.d(__webpack_exports__,{Z:()=>setRef})},"./node_modules/@mui/utils/esm/useEnhancedEffect.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__="undefined"!=typeof window?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect},"./node_modules/@mui/utils/esm/useEventCallback.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useEventCallback});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/useEnhancedEffect.js");function useEventCallback(fn){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(fn);return(0,_useEnhancedEffect__WEBPACK_IMPORTED_MODULE_1__.Z)((()=>{ref.current=fn})),react__WEBPACK_IMPORTED_MODULE_0__.useCallback(((...args)=>(0,ref.current)(...args)),[])}},"./node_modules/@mui/utils/esm/useForkRef.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useForkRef});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_setRef__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/utils/esm/setRef.js");function useForkRef(...refs){return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>refs.every((ref=>null==ref))?null:instance=>{refs.forEach((ref=>{(0,_setRef__WEBPACK_IMPORTED_MODULE_1__.Z)(ref,instance)}))}),refs)}},"./node_modules/@mui/utils/esm/useIsFocusVisible.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useIsFocusVisible});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");let hadFocusVisibleRecentlyTimeout,hadKeyboardEvent=!0,hadFocusVisibleRecently=!1;const inputTypesWhitelist={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function handleKeyDown(event){event.metaKey||event.altKey||event.ctrlKey||(hadKeyboardEvent=!0)}function handlePointerDown(){hadKeyboardEvent=!1}function handleVisibilityChange(){"hidden"===this.visibilityState&&hadFocusVisibleRecently&&(hadKeyboardEvent=!0)}function isFocusVisible(event){const{target}=event;try{return target.matches(":focus-visible")}catch(error){}return hadKeyboardEvent||function focusTriggersKeyboardModality(node){const{type,tagName}=node;return!("INPUT"!==tagName||!inputTypesWhitelist[type]||node.readOnly)||"TEXTAREA"===tagName&&!node.readOnly||!!node.isContentEditable}(target)}function useIsFocusVisible(){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{null!=node&&function prepare(doc){doc.addEventListener("keydown",handleKeyDown,!0),doc.addEventListener("mousedown",handlePointerDown,!0),doc.addEventListener("pointerdown",handlePointerDown,!0),doc.addEventListener("touchstart",handlePointerDown,!0),doc.addEventListener("visibilitychange",handleVisibilityChange,!0)}(node.ownerDocument)}),[]),isFocusVisibleRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);return{isFocusVisibleRef,onFocus:function handleFocusVisible(event){return!!isFocusVisible(event)&&(isFocusVisibleRef.current=!0,!0)},onBlur:function handleBlurVisible(){return!!isFocusVisibleRef.current&&(hadFocusVisibleRecently=!0,window.clearTimeout(hadFocusVisibleRecentlyTimeout),hadFocusVisibleRecentlyTimeout=window.setTimeout((()=>{hadFocusVisibleRecently=!1}),100),isFocusVisibleRef.current=!1,!0)},ref}}},"./packages/components/src/core/TableRow/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Test$parameters,_Test$parameters2,_Test$parameters2$doc,_CellBasic__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/core/CellBasic/index.tsx"),_index__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/TableRow/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const __WEBPACK_DEFAULT_EXPORT__={argTypes:{disabled:{control:{type:"boolean"}},hover:{control:{type:"boolean"}},rowHeight:{control:{type:"number"}},selected:{control:{type:"boolean"}},shouldShowTooltipOnHover:{control:{type:"boolean"}},tooltipProps:{control:{type:"object"}},tooltipSubtitle:{control:{type:"text"}},tooltipText:{control:{type:"text"}},useDivider:{control:{type:"boolean"}}},component:function TableRow(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table",{style:{borderCollapse:"collapse"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_index__WEBPACK_IMPORTED_MODULE_1__.Z,_objectSpread(_objectSpread({},props),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CellBasic__WEBPACK_IMPORTED_MODULE_0__.Z,{primaryText:"Primary",shouldShowTooltipOnHover:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CellBasic__WEBPACK_IMPORTED_MODULE_0__.Z,{primaryText:"Primary",shouldShowTooltipOnHover:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CellBasic__WEBPACK_IMPORTED_MODULE_0__.Z,{primaryText:"Primary",shouldShowTooltipOnHover:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CellBasic__WEBPACK_IMPORTED_MODULE_0__.Z,{primaryText:"Primary",shouldShowTooltipOnHover:!1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CellBasic__WEBPACK_IMPORTED_MODULE_0__.Z,{primaryText:"Primary",shouldShowTooltipOnHover:!1})]}))})})},title:"Table/TableRow"};var Default={args:{disabled:!1,hover:!0,selected:!1,shouldShowTooltipOnHover:!0,tooltipProps:{sdsStyle:"dark"},tooltipText:"This is a TableRow component",useDivider:!0}},TestDemo=function TestDemo(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("table",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("tbody",{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_index__WEBPACK_IMPORTED_MODULE_1__.Z,{"data-testid":"TableRow",hover:!0,shouldShowTooltipOnHover:!0,tooltipText:"testTooltipTitle",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_CellBasic__WEBPACK_IMPORTED_MODULE_0__.Z,{primaryText:"Primary",shouldShowTooltipOnHover:!1})})})})},Test={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TestDemo,_objectSpread(_objectSpread({},args),{},{"data-testid":"table-row"}))}};Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    disabled: false,\n    hover: true,\n    selected: false,\n    shouldShowTooltipOnHover: true,\n    tooltipProps: {\n      sdsStyle: "dark"\n    },\n    tooltipText: "This is a TableRow component",\n    useDivider: true\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Test.parameters=_objectSpread(_objectSpread({},Test.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} data-testid="table-row" />\n}'},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2$doc=_Test$parameters2.docs)||void 0===_Test$parameters2$doc?void 0:_Test$parameters2$doc.source)})});var __namedExportsOrder=["Default","Test"]},"./packages/components/src/core/CellBasic/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_CellBasic});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,react=__webpack_require__("./node_modules/react/index.js"),Tooltip=__webpack_require__("./packages/components/src/core/Tooltip/index.tsx"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var doNotForwardProps=["icon","iconVerticalAlign","horizontalAlign","verticalAlign","primaryText","secondaryText","tertiaryText","shouldTextWrap","shouldShowTooltipOnHover","tooltipProps","primaryTextWrapLineCount","secondaryTextWrapLineCount","tertiaryTextWrapLineCount"],verticalAlignCSSMap={bottom:"bottom",center:"middle",top:"top"},verticalAlignToFlexMap={bottom:"flex-end",center:"center",top:"flex-start"},StyledTableData=(0,styled.ZP)("td",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _props$horizontalAlig=props.horizontalAlign,horizontalAlign=void 0===_props$horizontalAlig?"left":_props$horizontalAlig,_props$verticalAlign=props.verticalAlign,verticalAlign=void 0===_props$verticalAlign?"top":_props$verticalAlign,spacings=(0,styles.Gr)(props),typography=(0,styles.cY)(props);return"\n        font-family: ".concat(null==typography?void 0:typography.fontFamily,";\n        padding: ").concat(null==spacings?void 0:spacings.l,"px ").concat(null==spacings?void 0:spacings.s,"px;\n        text-align: ").concat(horizontalAlign,";\n        vertical-align: ").concat(verticalAlignCSSMap[verticalAlign],";\n        width: 96px;\n        overflow: hidden;\n    ")})),ShouldWrap=function ShouldWrap(lineCount){return"\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(lineCount,";\n    -webkit-box-orient: vertical; \n  ")},StyledCellContent=(0,styled.ZP)("div")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  display: flex;\n"]))),StyledCellContentWrapper=(0,styled.ZP)("div")(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  width: 100%;\n"]))),StyledCellIconWrapper=(0,styled.ZP)("div",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _props$iconVerticalAl=props.iconVerticalAlign,iconVerticalAlign=void 0===_props$iconVerticalAl?"top":_props$iconVerticalAl,spacings=(0,styles.Gr)(props);return"\n      padding-right: ".concat(null==spacings?void 0:spacings.l,"px;\n      display: flex;\n      flex-direction: column;\n      justify-content: ").concat(verticalAlignToFlexMap[iconVerticalAlign],";\n    ")})),PrimaryText=(0,styled.ZP)("span",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.GW,(function(props){var _props$primaryTextWra=props.primaryTextWrapLineCount,primaryTextWrapLineCount=void 0===_props$primaryTextWra?3:_props$primaryTextWra;return"\n      display: block;\n      line-height: 20px;\n      ".concat(props.shouldTextWrap?ShouldWrap(primaryTextWrapLineCount):"\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  ","\n    ")})),SecondaryText=(0,styled.ZP)("span",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.mA,(function(props){var _props$secondaryTextW=props.secondaryTextWrapLineCount,secondaryTextWrapLineCount=void 0===_props$secondaryTextW?1:_props$secondaryTextW,colors=(0,styles.EC)(props),spaces=(0,styles.Gr)(props);return"\n      display: block;\n      color: ".concat(null==colors?void 0:colors.gray[600],";\n      padding-top: ").concat(null==spaces?void 0:spaces.xxxs,"px;\n\n      ").concat(props.shouldTextWrap?ShouldWrap(secondaryTextWrapLineCount):"\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  ","\n    ")})),TertiaryText=(0,styled.ZP)("span",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.mA,(function(props){var _props$tertiaryTextWr=props.tertiaryTextWrapLineCount,tertiaryTextWrapLineCount=void 0===_props$tertiaryTextWr?1:_props$tertiaryTextWr,colors=(0,styles.EC)(props),spaces=(0,styles.Gr)(props);return"\n      display: block;\n      color: ".concat(null==colors?void 0:colors.gray[500],";\n      padding-top: ").concat(null==spaces?void 0:spaces.s,"px;\n\n      ").concat(props.shouldTextWrap?ShouldWrap(tertiaryTextWrapLineCount):"\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  ","\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var CellBasicContent=function CellBasicContent(props){var primaryText=props.primaryText,primaryTextWrapLineCount=props.primaryTextWrapLineCount,secondaryText=props.secondaryText,secondaryTextWrapLineCount=props.secondaryTextWrapLineCount,tertiaryText=props.tertiaryText,tertiaryTextWrapLineCount=props.tertiaryTextWrapLineCount,_props$shouldTextWrap=props.shouldTextWrap,shouldTextWrap=void 0===_props$shouldTextWrap||_props$shouldTextWrap,icon=props.icon,iconVerticalAlign=props.iconVerticalAlign;return(0,jsx_runtime.jsxs)(StyledCellContent,{children:[icon&&(0,jsx_runtime.jsx)(StyledCellIconWrapper,{iconVerticalAlign,children:icon}),(0,jsx_runtime.jsxs)(StyledCellContentWrapper,{children:[(0,jsx_runtime.jsx)(PrimaryText,{shouldTextWrap,primaryTextWrapLineCount,children:primaryText}),secondaryText&&(0,jsx_runtime.jsx)(SecondaryText,{shouldTextWrap,secondaryTextWrapLineCount,children:secondaryText}),tertiaryText&&(0,jsx_runtime.jsx)(TertiaryText,{shouldTextWrap,tertiaryTextWrapLineCount,children:tertiaryText})]})]})},CellBasic=(0,react.forwardRef)((function(props,ref){var primaryText=props.primaryText,secondaryText=props.secondaryText,_props$shouldShowTool=props.shouldShowTooltipOnHover,shouldShowTooltipOnHover=void 0===_props$shouldShowTool||_props$shouldShowTool,tooltipProps=props.tooltipProps;return shouldShowTooltipOnHover?(0,jsx_runtime.jsx)(Tooltip.Z,_objectSpread(_objectSpread({title:primaryText,subtitle:secondaryText,arrow:!0,leaveDelay:0,leaveTouchDelay:0,sdsStyle:"dark"},tooltipProps),{},{children:(0,jsx_runtime.jsx)(StyledTableData,_objectSpread(_objectSpread({ref},props),{},{children:(0,jsx_runtime.jsx)(CellBasicContent,_objectSpread({},props))}))})):(0,jsx_runtime.jsx)(StyledTableData,_objectSpread(_objectSpread({ref},props),{},{children:(0,jsx_runtime.jsx)(CellBasicContent,_objectSpread({},props))}))}));const core_CellBasic=CellBasic;try{CellBasic.displayName="CellBasic",CellBasic.__docgenInfo={description:"",displayName:"CellBasic",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},shouldShowTooltipOnHover:{defaultValue:null,description:"",name:"shouldShowTooltipOnHover",required:!1,type:{name:"boolean"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:"Partial<TooltipProps>"}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"center"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'}]}},iconVerticalAlign:{defaultValue:null,description:"",name:"iconVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"center"'}]}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!0,type:{name:"string"}},primaryTextWrapLineCount:{defaultValue:null,description:"",name:"primaryTextWrapLineCount",required:!1,type:{name:"number"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string"}},secondaryTextWrapLineCount:{defaultValue:null,description:"",name:"secondaryTextWrapLineCount",required:!1,type:{name:"number"}},shouldTextWrap:{defaultValue:null,description:"",name:"shouldTextWrap",required:!1,type:{name:"boolean"}},tertiaryText:{defaultValue:null,description:"",name:"tertiaryText",required:!1,type:{name:"string"}},tertiaryTextWrapLineCount:{defaultValue:null,description:"",name:"tertiaryTextWrapLineCount",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/CellBasic/index.tsx#CellBasic"]={docgenInfo:CellBasic.__docgenInfo,name:"CellBasic",path:"packages/components/src/core/CellBasic/index.tsx#CellBasic"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/clsx/dist/clsx.m.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(f=r(e[t]))&&(n&&(n+=" "),n+=f);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function clsx(){for(var e,t,f=0,n="";f<arguments.length;)(e=arguments[f++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}},"./node_modules/react-transition-group/esm/TransitionGroupContext.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__("./node_modules/react/index.js").createContext(null)},"./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _inheritsLoose(subClass,superClass){subClass.prototype=Object.create(superClass.prototype),subClass.prototype.constructor=subClass,_setPrototypeOf(subClass,superClass)}__webpack_require__.d(__webpack_exports__,{Z:()=>_inheritsLoose})},"./node_modules/react-transition-group/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutPropertiesLoose})}}]);