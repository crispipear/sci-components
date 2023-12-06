"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[4559],{"./packages/components/src/common/warnings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _SDS_WARNINGS;function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{$:()=>showWarningIfFirstOccurence,e:()=>SDSWarningTypes});var SDSWarningTypes=function(SDSWarningTypes){return SDSWarningTypes.ButtonMissingSDSProps="buttonMissingProps",SDSWarningTypes.ChipDeprecated="chipDeprecated",SDSWarningTypes.MenuSelectDeprecated="menuSelectDeprecated",SDSWarningTypes.ButtonIconMediumSize="buttonIconMediumSize",SDSWarningTypes.TooltipSubtitle="tooltipSubtitle",SDSWarningTypes.TooltipWidth="tooltipWidth",SDSWarningTypes.TooltipInverted="tooltipInverted",SDSWarningTypes}({}),SDS_WARNINGS=(_defineProperty(_SDS_WARNINGS={},SDSWarningTypes.ButtonMissingSDSProps,{hasWarned:!1,message:"Warning: Buttons without sdsStyle or sdsType props will be deprecated."}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.ChipDeprecated,{hasWarned:!1,message:"Warning: <Chip /> will be deprecated and replaced with <Tag />"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.MenuSelectDeprecated,{hasWarned:!1,message:"Warning: MenuSelect will be deprecated and replaced with <DropdownMenu />"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.ButtonIconMediumSize,{hasWarned:!1,message:"Warning: A medium size ButtonIcon can only be of type tertiary!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipSubtitle,{hasWarned:!1,message:"Warning: The 'subtitle' text is only available for dark tooltips!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipWidth,{hasWarned:!1,message:"Warning: The 'wide' width is only available for light tooltips!"}),_defineProperty(_SDS_WARNINGS,SDSWarningTypes.TooltipInverted,{hasWarned:!1,message:"Warning: Tooltips using the inverted prop will be deprecated. Please use sdsStyle: 'dark' | 'light' instead!"}),_SDS_WARNINGS),showWarningIfFirstOccurence=function showWarningIfFirstOccurence(warningType){warningType in SDS_WARNINGS||(SDS_WARNINGS[warningType]={hasWarned:!1,message:"Warning: SDSWarningType ".concat(warningType," is not defined in SDS_WARNINGS")}),SDS_WARNINGS[warningType].hasWarned||(console.warn(SDS_WARNINGS[warningType].message),SDS_WARNINGS[warningType].hasWarned=!0)}},"./packages/components/src/core/ButtonIcon/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_ButtonIcon});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),IconButton=__webpack_require__("./node_modules/@mui/material/IconButton/IconButton.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),warnings=__webpack_require__("./packages/components/src/common/warnings.ts"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var doNotForwardProps=["on","sdsSize","sdsType","sdsIcon","sdsIconProps"],StyledButtonIcon=(0,styled.ZP)(IconButton.Z,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject9||(_templateObject9=_taggedTemplateLiteral(["\n  padding: 0;\n  ","\n\n  ","\n"])),styles.sX,(function(props){var on=props.on,disabled=props.disabled,sdsSize=props.sdsSize,sdsType=props.sdsType;return(0,emotion_react_browser_esm.iv)(_templateObject10||(_templateObject10=_taggedTemplateLiteral(["\n      ","\n      ","\n      ","\n      ","\n      ","\n      ","\n      ","\n      ","\n    "])),"primary"===sdsType&&function primary(props){var colors=(0,styles.EC)(props),sdsSize=props.sdsSize;return(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    color: ",";\n\n    &:hover {\n      background: ",";\n      color: ",";\n    }\n\n    &:active {\n      color: ",";\n    }\n  "])),null==colors?void 0:colors.primary[400],null==colors?void 0:colors.gray[200],"small"===sdsSize?null==colors?void 0:colors.primary[600]:null==colors?void 0:colors.primary[400],null==colors?void 0:colors.primary[600])}(props),"secondary"===sdsType&&function secondary(props){var colors=(0,styles.EC)(props);return(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    color: ",";\n\n    &:hover,\n    &:active {\n      background: none;\n      color: ",";\n    }\n  "])),null==colors?void 0:colors.gray[500],null==colors?void 0:colors.primary[400])}(props),"tertiary"===sdsType&&function tertiary(props){var colors=(0,styles.EC)(props);return(0,emotion_react_browser_esm.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    color: ",";\n\n    &:hover {\n      background: none;\n      color: black;\n    }\n\n    &:active {\n      color: black;\n    }\n  "])),null==colors?void 0:colors.gray[500])}(props),on&&function isOn(props){var sdsType=props.sdsType,colors=(0,styles.EC)(props);return(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    ","\n  "])),"tertiary"!==sdsType&&"\n      color: ".concat("primary"===sdsType?null==colors?void 0:colors.primary[600]:null==colors?void 0:colors.primary[400],";\n\n      &:hover {\n        color: ").concat(null==colors?void 0:colors.primary[600],";\n      }\n    "))}(props),disabled&&function isDisabled(props){var colors=(0,styles.EC)(props);return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    color: ",";\n  "])),null==colors?void 0:colors.gray[300])}(props),"small"===sdsSize&&function small(props){var iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n    &:hover {\n      background: none;\n    }\n\n    .MuiSvgIcon-root {\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==iconSizes?void 0:iconSizes.s.height,null==iconSizes?void 0:iconSizes.s.width)}(props),"medium"===sdsSize&&function medium(props){var sdsType=props.sdsType,iconSizes=(0,styles.Dk)(props);return"primary"!==sdsType&&"secondary"!==sdsType||(0,warnings.$)(warnings.e.ButtonIconMediumSize),(0,emotion_react_browser_esm.iv)(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n    &:hover {\n      background: none;\n    }\n\n    .MuiSvgIcon-root {\n      height: ","px;\n      width: ","px;\n    }\n  "])),null==iconSizes?void 0:iconSizes.l.height,null==iconSizes?void 0:iconSizes.l.width)}(props),"large"===sdsSize&&function large(props){var sdsType=props.sdsType,iconSizes=(0,styles.Dk)(props);return(0,emotion_react_browser_esm.iv)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n    .MuiSvgIcon-root {\n      height: ","px;\n      width: ","px;\n      ","\n    }\n  "])),null==iconSizes?void 0:iconSizes.xl.height,null==iconSizes?void 0:iconSizes.xl.height,"primary"===sdsType?"margin: 5px;":"")}(props))})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ButtonIconSizeToSdsIconSize={large:"xl",medium:"l",small:"s"},ButtonIcon=(0,react.forwardRef)((function ButtonIcon(props,ref){var sdsIcon=props.sdsIcon,_props$sdsSize=props.sdsSize,sdsSize=void 0===_props$sdsSize?"large":_props$sdsSize,sdsIconProps=props.sdsIconProps,iconSize=ButtonIconSizeToSdsIconSize[sdsSize];return(0,jsx_runtime.jsx)(StyledButtonIcon,_objectSpread(_objectSpread({},props),{},{ref,children:(0,jsx_runtime.jsx)(Icon.Z,_objectSpread(_objectSpread({sdsType:"iconButton"},sdsIconProps),{},{sdsIcon,sdsSize:iconSize}))}))}));const core_ButtonIcon=ButtonIcon;try{ButtonIcon.displayName="ButtonIcon",ButtonIcon.__docgenInfo={description:"",displayName:"ButtonIcon",props:{color:{defaultValue:{value:"'default'"},description:"The color of the component.\nIt supports both default and custom theme colors, which can be added as shown in the\n[palette customization guide](https://mui.com/material-ui/customization/palette/#adding-new-colors).",name:"color",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"primary"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"secondary"'},{value:'"inherit"'}]}},sdsSize:{defaultValue:null,description:"",name:"sdsSize",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"medium"'}]}},sdsType:{defaultValue:null,description:"",name:"sdsType",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:{value:"false\nfalse"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},sdsIcon:{defaultValue:null,description:"",name:"sdsIcon",required:!0,type:{name:"enum",value:[{value:'"list"'},{value:'"infoCircle"'},{value:'"table"'},{value:'"globe"'},{value:'"people"'},{value:'"search"'},{value:'"bacteria"'},{value:'"barChartHorizontal3"'},{value:'"checkCircle"'},{value:'"gear"'},{value:'"flagCheck"'},{value:'"download"'},{value:'"filter"'},{value:'"grid"'},{value:'"link"'},{value:'"copy"'},{value:'"open"'},{value:'"loading"'},{value:'"edit"'},{value:'"lightBulb"'},{value:'"linesHorizontal"'},{value:'"xMark"'},{value:'"puzzlePiece"'},{value:'"treeVertical"'},{value:'"dotsHorizontal"'},{value:'"treeHorizontal"'},{value:'"virus"'},{value:'"barChartVertical3"'},{value:'"barChartVertical4"'},{value:'"book"'},{value:'"check"'},{value:'"chevronDown"'},{value:'"chevronLeft2"'},{value:'"chevronLeft"'},{value:'"chevronRight2"'},{value:'"chevronRight"'},{value:'"chevronUp"'},{value:'"circlesOverlap"'},{value:'"compass"'},{value:'"cube"'},{value:'"dna"'},{value:'"document"'},{value:'"exclamationMarkCircle"'},{value:'"exclamationMarkSpeechBubble"'},{value:'"eyeClosed"'},{value:'"eyeOpen"'},{value:'"flagOutline"'},{value:'"flagQuestionmark"'},{value:'"flagXmark"'},{value:'"flask"'},{value:'"flaskPrivate"'},{value:'"flaskPublic"'},{value:'"globeBasic"'},{value:'"gridPrivate"'},{value:'"gridPublic"'},{value:'"house"'},{value:'"infoSpeechBubble"'},{value:'"lifeRing"'},{value:'"linesDashed3Solid1"'},{value:'"lock"'},{value:'"lockCircle"'},{value:'"minus"'},{value:'"percentage"'},{value:'"person"'},{value:'"pin"'},{value:'"pinLocation"'},{value:'"play"'},{value:'"plus"'},{value:'"plusCircle"'},{value:'"projectPrivate"'},{value:'"projectPublic"'},{value:'"questionMark"'},{value:'"quote"'},{value:'"refresh"'},{value:'"save"'},{value:'"searchLinesHorizontal"'},{value:'"share"'},{value:'"slidersHorizontal"'},{value:'"speechBubbles"'},{value:'"squareOnDashedSquare"'},{value:'"starburst"'},{value:'"star"'},{value:'"trashCan"'},{value:'"treeDendogram"'},{value:'"treeHorizontalPrivate"'},{value:'"treeHorizontalPublic"'},{value:'"treeHorizontalTopRightFilled"'},{value:'"triangleDown"'},{value:'"triangleLeft"'},{value:'"triangleRight"'},{value:'"triangleUp"'},{value:'"upload"'},{value:'"virusCircleS"'},{value:'"xMarkCircle"'}]}},sdsIconProps:{defaultValue:null,description:"",name:"sdsIconProps",required:!1,type:{name:"Partial<IconProps<keyof IconNameToSizes>>"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<IconButtonClasses> & Partial<ClassNameMap<never>>)"}},tabIndex:{defaultValue:{value:"0"},description:"",name:"tabIndex",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"The icon to display.\nThe content of the component.",name:"children",required:!1,type:{name:"ReactNode"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},on:{defaultValue:null,description:"",name:"on",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.\n`small` is equivalent to the dense button styling.",name:"size",required:!1,type:{name:"enum",value:[{value:'"large"'},{value:'"small"'},{value:'"medium"'}]}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableRipple:{defaultValue:{value:"false"},description:"If `true`, the ripple effect is disabled.\n\n⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure\nto highlight the element by applying separate styles with the `.Mui-focusVisible` class.",name:"disableRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},disableFocusRipple:{defaultValue:{value:"false"},description:"If `true`, the  keyboard focus ripple is disabled.",name:"disableFocusRipple",required:!1,type:{name:"boolean"}},edge:{defaultValue:{value:"false"},description:"If given, uses a negative margin to counteract the padding on one\nside (this is often helpful for aligning the left or right\nside of the icon with content above or below, without ruining the border\nsize and shape).",name:"edge",required:!1,type:{name:'false | "end" | "start"'}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/ButtonIcon/index.tsx#ButtonIcon"]={docgenInfo:ButtonIcon.__docgenInfo,name:"ButtonIcon",path:"packages/components/src/core/ButtonIcon/index.tsx#ButtonIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/core/InputSearch/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_ButtonIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/ButtonIcon/index.tsx"),_style__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/core/InputSearch/style.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["label","id","placeholder","sdsStyle","intent","handleSubmit","onChange"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var InputSearch=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function InputSearch(props,ref){var label=props.label,id=props.id,placeholder=props.placeholder,_props$sdsStyle=props.sdsStyle,sdsStyle=void 0===_props$sdsStyle?"square":_props$sdsStyle,_props$intent=props.intent,intent=void 0===_props$intent?"default":_props$intent,handleSubmit=props.handleSubmit,onChange=props.onChange,rest=_objectWithoutProperties(props,_excluded),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),hasValue=_useState2[0],setHasValue=_useState2[1],_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),2),value=_useState4[0],setValue=_useState4[1];return id&&label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.ar,{htmlFor:id,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_style__WEBPACK_IMPORTED_MODULE_2__.S,_objectSpread({ref,InputProps:{endAdornment:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_style__WEBPACK_IMPORTED_MODULE_2__.eL,{position:"end",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ButtonIcon__WEBPACK_IMPORTED_MODULE_1__.Z,{"aria-label":"clear-button",className:"input-search-clear-icon",onClick:function clearInput(){setValue(""),setHasValue(!1),handleSubmit&&handleSubmit(""),onChange&&onChange({target:{value:""}})},sdsType:"primary",sdsSize:"small",sdsIconProps:{sdsType:"iconButton"},sdsIcon:"xMark"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_ButtonIcon__WEBPACK_IMPORTED_MODULE_1__.Z,{"aria-label":"search-button",onClick:function localHandleSubmit(){handleSubmit&&handleSubmit(value)},sdsType:"secondary",sdsSize:"small",sdsIconProps:{sdsType:"interactive"},sdsIcon:"search"})]})},type:"search",id,variant:"outlined",size:"small",placeholder,value,sdsStyle,sdsStage:hasValue?"userInput":"default",onChange:function handleChange(event){event.target.value?setHasValue(!0):setHasValue(!1),setValue(event.target.value),onChange&&onChange(event)},onKeyDown:function handleKeyPress(event){"Enter"===event.key&&(event.preventDefault(),handleSubmit&&handleSubmit(value))},intent,autoComplete:"one-time-code"},rest))]}):(console.error("Error: @czi-sds/components component InputText requires id and label props for accessibility."),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment,{}))}));const __WEBPACK_DEFAULT_EXPORT__=InputSearch;try{InputSearch.displayName="InputSearch",InputSearch.__docgenInfo={description:"",displayName:"InputSearch",props:{sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'}]}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"error"'}]}},margin:{defaultValue:{value:"'none'"},description:"If `dense` or `normal`, will adjust vertical spacing of this and contained components.",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"dense"'},{value:'"normal"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}},sdsStage:{defaultValue:null,description:"",name:"sdsStage",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"userInput"'}]}},focused:{defaultValue:null,description:"If `true`, the component is displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:{value:"false"},description:"If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}},handleSubmit:{defaultValue:null,description:"",name:"handleSubmit",required:!1,type:{name:"((value: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/InputSearch/index.tsx#InputSearch"]={docgenInfo:InputSearch.__docgenInfo,name:"InputSearch",path:"packages/components/src/core/InputSearch/index.tsx#InputSearch"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/core/InputSearch/style.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>StyledSearchBase,ar:()=>StyledLabel,eL:()=>StyledInputAdornment});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_emotion_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_mui_material__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/ButtonBase/buttonBaseClasses.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/InputBase/inputBaseClasses.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),_styles__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var sdsPropNames=["sdsStyle","sdsStage","intent","handleSubmit"],StyledLabel=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.ZP)("label")(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  ","\n  ","\n"])),_styles__WEBPACK_IMPORTED_MODULE_0__.yT,(function(props){var typography=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.cY)(props),spacings=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.Gr)(props);return"\n      font-family: ".concat(null==typography?void 0:typography.fontFamily,";\n      margin-bottom: ").concat(null==spacings?void 0:spacings.xxs,"px;\n      position: absolute;\n      overflow: hidden;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      width: 1px;\n      margin: -1px; \n      padding: 0; \n      border: 0;\n    ")})),StyledSearchBase=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop.toString())}})(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var intent=props.intent,disabled=props.disabled,sdsStyle=props.sdsStyle,sdsStage=props.sdsStage,value=props.value,spacings=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.Gr)(props),borders=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.W0)(props),colors=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.EC)(props);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n      margin-top: ","px;\n      margin-bottom: ","px;\n      margin-right: ",'px;\n      min-width: 120px;\n      display: block;\n\n      [type="search"]::-webkit-search-cancel-button {\n        -webkit-appearance: none;\n        appearance: none;\n      }\n\n      & .input-search-clear-icon {\n        opacity: 0;\n        margin-right: ',"px;\n      }\n\n      ."," {\n        ."," {\n          border: ",";\n        }\n\n        &:hover .input-search-clear-icon,\n        &:focus-within .input-search-clear-icon {\n          opacity: ",";\n        }\n      }\n\n      ."," {\n        padding: ","px ","px;\n        height: 34px;\n        box-sizing: border-box;\n        background-color: #fff;\n      }\n\n      .",":hover\n        ."," {\n        border: ",";\n      }\n\n      .","."," {\n        ."," {\n          border: ",";\n        }\n\n        ."," .",":last-of-type {\n          cursor: default;\n          svg {\n            color: ",";\n          }\n        }\n      }\n\n      ","\n      ","\n      ","\n      ","\n      ","\n    "])),null==spacings?void 0:spacings.m,null==spacings?void 0:spacings.m,null==spacings?void 0:spacings.xl,null==spacings?void 0:spacings.s,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.gray[400],value?1:0,_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z.inputSizeSmall,null==spacings?void 0:spacings.xs,null==spacings?void 0:spacings.l,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.gray[500],_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.focused,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.primary[400],_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z.root,null==colors?void 0:colors.primary[400],"rounded"===sdsStyle&&function rounded(props){var corners=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.DV)(props),borders=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.W0)(props);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    ."," ."," {\n      border-radius: ","px;\n      border: ",";\n    }\n  "])),_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==corners?void 0:corners.l,null==borders?void 0:borders.gray[400])}(props),"error"===intent&&function error(props){var borders=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.W0)(props),colors=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.EC)(props);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    ."," ."," {\n      border: ",";\n    }\n\n    .",":hover\n      ."," {\n      border: ",";\n    }\n\n    .","."," {\n      ."," {\n        border: ",";\n      }\n\n      ."," .",":last-of-type {\n        cursor: default;\n        svg {\n          color: ",";\n        }\n      }\n    }\n  "])),_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.error[400],_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.error[400],_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.focused,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.error[400],_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z.root,null==colors?void 0:colors.gray[500])}(props),"warning"===intent&&function warning(props){var borders=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.W0)(props),colors=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.EC)(props);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    ."," ."," {\n      border: ",";\n    }\n\n    .",":hover\n      ."," {\n      border: ",";\n    }\n\n    .","."," {\n      ."," {\n        border: ",";\n      }\n\n      ."," .",":last-of-type {\n        cursor: default;\n        svg {\n          color: ",";\n        }\n      }\n    }\n  "])),_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.warning[400],_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.warning[400],_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.focused,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.warning[400],_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_4__.Z.root,null==colors?void 0:colors.gray[500])}(props),disabled&&function disabledStyled(props){var borders=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.W0)(props),colors=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.EC)(props);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    ."," {\n      ."," {\n        border: ",";\n      }\n\n      ."," svg {\n        color: ",";\n      }\n\n      &:hover ."," {\n        border: ",";\n      }\n\n      &::placeholder {\n        color: ",";\n        opacity: 1;\n      }\n    }\n  "])),_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.disabled,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.gray[300],_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z.root,null==colors?void 0:colors.gray[300],_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,null==borders?void 0:borders.gray[300],null==colors?void 0:colors.gray[300])}(props),"userInput"===sdsStage&&function userInput(props){var intent=props.intent,colors=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.EC)(props),borders=(0,_styles__WEBPACK_IMPORTED_MODULE_0__.W0)(props),border="error"===intent?null==borders?void 0:borders.error[400]:"warning"===intent?null==borders?void 0:borders.warning[400]:null==borders?void 0:borders.primary[400],color="default"===intent?null==colors?void 0:colors.primary[400]:null==colors?void 0:colors.gray[500];return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_1__.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    ."," ."," {\n      border: ",";\n    }\n\n    .",":hover\n      ."," {\n      border: ",";\n    }\n\n    ."," svg {\n      color: ",";\n    }\n  "])),_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,border,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.root,_mui_material__WEBPACK_IMPORTED_MODULE_2__.Z.notchedOutline,border,_mui_material__WEBPACK_IMPORTED_MODULE_3__.Z.root,color)}(props))})),StyledInputAdornment=(0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_5__.ZP)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.Z)(_templateObject9||(_templateObject9=_taggedTemplateLiteral(["\n  position: relative;\n"])))}}]);