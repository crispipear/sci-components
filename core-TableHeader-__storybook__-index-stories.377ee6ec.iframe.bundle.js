"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[7826],{"./packages/components/src/core/TableHeader/__storybook__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var dist=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs"),CellHeader=__webpack_require__("./packages/components/src/core/CellHeader/index.tsx"),core_TableHeader=__webpack_require__("./packages/components/src/core/TableHeader/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TableHeader=function TableHeader(props){return(0,jsx_runtime.jsx)("table",{children:(0,jsx_runtime.jsxs)(core_TableHeader.A,_objectSpread(_objectSpread({},props),{},{children:[(0,jsx_runtime.jsx)(CellHeader.A,{active:!0,children:"Column 1"}),(0,jsx_runtime.jsx)(CellHeader.A,{children:"Column 2"}),(0,jsx_runtime.jsx)(CellHeader.A,{children:"Column 3"})]}))})};try{TableHeader.displayName="TableHeader",TableHeader.__docgenInfo={description:"",displayName:"TableHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TableHeader/__storybook__/stories/default.tsx#TableHeader"]={docgenInfo:TableHeader.__docgenInfo,name:"TableHeader",path:"packages/components/src/core/TableHeader/__storybook__/stories/default.tsx#TableHeader"})}catch(__react_docgen_typescript_loader_error){}var TestDemo=function TestDemo(){return(0,jsx_runtime.jsx)("table",{children:(0,jsx_runtime.jsxs)(core_TableHeader.A,{"data-testid":"TableHeader",children:[(0,jsx_runtime.jsx)(CellHeader.A,{active:!0,children:"Column 1"}),(0,jsx_runtime.jsx)(CellHeader.A,{children:"Column 2"}),(0,jsx_runtime.jsx)(CellHeader.A,{children:"Column 3"})]})})};function index_stories_typeof(o){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},index_stories_typeof(o)}function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(t){var i=function index_stories_toPrimitive(t,r){if("object"!=index_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=index_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==index_stories_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const index_stories={component:TableHeader,parameters:{badges:[dist.yq.STABLE]},title:"Components/Table/TableHeader"};var Default={},Test={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(TestDemo,index_stories_objectSpread(index_stories_objectSpread({},args),{},{"data-testid":"table-header"}))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} data-testid="table-header" />\n}',...Test.parameters?.docs?.source}}};const __namedExportsOrder=["Default","Test"]},"./packages/components/src/common/warnings.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{S:()=>showWarningIfFirstOccurence,o:()=>SDSWarningTypes});var SDSWarningTypes=function(SDSWarningTypes){return SDSWarningTypes.ButtonMinimalIsAllCaps="buttonMinimalIsAllCaps",SDSWarningTypes.ButtonMissingSDSProps="buttonMissingProps",SDSWarningTypes.ButtonIconMissingIconProp="buttonIconMissingIconProp",SDSWarningTypes.ChipDeprecated="chipDeprecated",SDSWarningTypes.MenuSelectDeprecated="menuSelectDeprecated",SDSWarningTypes.TooltipSubtitle="tooltipSubtitle",SDSWarningTypes.TooltipWidth="tooltipWidth",SDSWarningTypes.TooltipInverted="tooltipInverted",SDSWarningTypes}({}),SDS_WARNINGS=_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty(_defineProperty({},SDSWarningTypes.ButtonMinimalIsAllCaps,{hasWarned:!1,message:"Warning: isAllCaps is only applied to buttons with sdsStyle='minimal'."}),SDSWarningTypes.ButtonMissingSDSProps,{hasWarned:!1,message:"Warning: Buttons without sdsStyle or sdsType props will be deprecated."}),SDSWarningTypes.ButtonIconMissingIconProp,{hasWarned:!1,message:"Warning: Buttons with an SDS type of icon require an icon prop to be provided."}),SDSWarningTypes.ChipDeprecated,{hasWarned:!1,message:"Warning: <Chip /> will be deprecated and replaced with <Tag />"}),SDSWarningTypes.MenuSelectDeprecated,{hasWarned:!1,message:"Warning: MenuSelect will be deprecated and replaced with <DropdownMenu />"}),SDSWarningTypes.TooltipSubtitle,{hasWarned:!1,message:"Warning: The 'subtitle' text is only available for dark tooltips!"}),SDSWarningTypes.TooltipWidth,{hasWarned:!1,message:"Warning: The 'wide' width is only available for light tooltips!"}),SDSWarningTypes.TooltipInverted,{hasWarned:!1,message:"Warning: Tooltips using the inverted prop will be deprecated. Please use sdsStyle: 'dark' | 'light' instead!"}),showWarningIfFirstOccurence=function showWarningIfFirstOccurence(warningType){warningType in SDS_WARNINGS||(SDS_WARNINGS[warningType]={hasWarned:!1,message:"Warning: SDSWarningType ".concat(warningType," is not defined in SDS_WARNINGS")}),SDS_WARNINGS[warningType].hasWarned||(console.warn(SDS_WARNINGS[warningType].message),SDS_WARNINGS[warningType].hasWarned=!0)}},"./packages/components/src/core/CellHeader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_CellHeader});var _templateObject,_templateObject2,_templateObject3,react=__webpack_require__("./node_modules/react/index.js"),Tooltip=__webpack_require__("./packages/components/src/core/Tooltip/index.tsx"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts"),Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var contentPositionMapping={center:"center",left:"flex-start",right:"flex-end"},doNotForwardProps=["active","horizontalAlign","shouldShowTooltipOnHover","tooltipProps","tooltipText","hideSortIcon"],StyledSortingIcon=(0,styled.Ay)(Icon.A,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _semanticColors$accen,_semanticColors$base,_props$active=props.active,active=void 0!==_props$active&&_props$active,hideSortIcon=props.hideSortIcon,spaces=(0,styles.oZ)(props),semanticColors=(0,styles.Bd)(props);return"\n      margin-left: ".concat(null==spaces?void 0:spaces.s,"px;\n      margin-bottom: ").concat(null==spaces?void 0:spaces.xxs,"px;\n      color: ").concat(active?null==semanticColors||null===(_semanticColors$accen=semanticColors.accent)||void 0===_semanticColors$accen?void 0:_semanticColors$accen.icon:null==semanticColors||null===(_semanticColors$base=semanticColors.base)||void 0===_semanticColors$base?void 0:_semanticColors$base.iconPrimary,";\n      opacity: ").concat(hideSortIcon?active?1:0:1,";\n      outline: none !important;\n    ")})),StyledTableHeader=(0,styled.Ay)("th",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n  ","\n\n  ","\n"])),styles._Z,styles.UT,(function(props){var _semanticColors$accen2,_semanticColors$base2,_semanticColors$accen3,_semanticColors$base3,_semanticColors$accen4,_semanticColors$base4,_semanticColors$accen5,_semanticColors$base5,_props$active2=props.active,active=void 0!==_props$active2&&_props$active2,_props$horizontalAlig=props.horizontalAlign,horizontalAlign=void 0===_props$horizontalAlig?"left":_props$horizontalAlig,spaces=(0,styles.oZ)(props),semanticColors=(0,styles.Bd)(props);return"\n      color: ".concat(active?null==semanticColors||null===(_semanticColors$accen2=semanticColors.accent)||void 0===_semanticColors$accen2?void 0:_semanticColors$accen2.textAction:null==semanticColors||null===(_semanticColors$base2=semanticColors.base)||void 0===_semanticColors$base2?void 0:_semanticColors$base2.textSecondary,";\n      padding: ").concat(null==spaces?void 0:spaces.l,"px ").concat(null==spaces?void 0:spaces.m,"px;\n      text-align: ").concat(horizontalAlign,";\n      min-width: 96px;\n      width: 96px;\n      cursor: pointer;\n      vertical-align: bottom;\n\n      & .MuiButtonBase-root {\n        outline: none;\n      }\n\n      &:hover {\n        color: ").concat(active?null==semanticColors||null===(_semanticColors$accen3=semanticColors.accent)||void 0===_semanticColors$accen3?void 0:_semanticColors$accen3.textActionHover:null==semanticColors||null===(_semanticColors$base3=semanticColors.base)||void 0===_semanticColors$base3?void 0:_semanticColors$base3.textPrimary,";\n\n        & .MuiButtonBase-root {\n          color: ").concat(active?null==semanticColors||null===(_semanticColors$accen4=semanticColors.accent)||void 0===_semanticColors$accen4?void 0:_semanticColors$accen4.textActionHover:null==semanticColors||null===(_semanticColors$base4=semanticColors.base)||void 0===_semanticColors$base4?void 0:_semanticColors$base4.textPrimary,";\n          opacity: 1;\n        }\n\n        & svg {\n          color: ").concat(active?null==semanticColors||null===(_semanticColors$accen5=semanticColors.accent)||void 0===_semanticColors$accen5?void 0:_semanticColors$accen5.iconHover:null==semanticColors||null===(_semanticColors$base5=semanticColors.base)||void 0===_semanticColors$base5?void 0:_semanticColors$base5.iconPrimaryHover,";\n        }\n      }\n    ")})),StyledCellHeaderContainer=(0,styled.Ay)("div",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _props$horizontalAlig2=props.horizontalAlign,horizontalAlign=void 0===_props$horizontalAlig2?"left":_props$horizontalAlig2;return"\n      align-items: flex-end;\n      width: 100%;\n      display: flex;\n      justify-content: ".concat(horizontalAlign?contentPositionMapping[horizontalAlign]:"flex-start",";\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","shouldShowTooltipOnHover","tooltipProps","tooltipText","tooltipSubtitle"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var CellHeaderContent=function CellHeaderContent(props){var active=props.active,children=props.children,_props$direction=props.direction,direction=void 0===_props$direction?"desc":_props$direction,_props$hideSortIcon=props.hideSortIcon,hideSortIcon=void 0!==_props$hideSortIcon&&_props$hideSortIcon,horizontalAlign=props.horizontalAlign,sdsIconName="asc"===direction?"ChevronUp":"ChevronDown",sortIcon=(0,jsx_runtime.jsx)(StyledSortingIcon,{"aria-label":"asc"===direction?"Change sort direction from ascending to descending":"Change sort direction from descending to ascending",sdsIcon:sdsIconName,sdsType:"static",sdsSize:"xs",active,hideSortIcon});return(0,jsx_runtime.jsxs)(StyledCellHeaderContainer,{horizontalAlign,children:[(0,jsx_runtime.jsx)("span",{children}),(!hideSortIcon||active)&&sortIcon]})},CellHeader=(0,react.forwardRef)((function(props,ref){var children=props.children,_props$shouldShowTool=props.shouldShowTooltipOnHover,shouldShowTooltipOnHover=void 0!==_props$shouldShowTool&&_props$shouldShowTool,tooltipProps=props.tooltipProps,_props$tooltipText=props.tooltipText,tooltipText=void 0===_props$tooltipText?"":_props$tooltipText,tooltipSubtitle=props.tooltipSubtitle,rest=_objectWithoutProperties(props,_excluded);return shouldShowTooltipOnHover?(0,jsx_runtime.jsx)(Tooltip.A,_objectSpread(_objectSpread({arrow:!0,placement:"top-start",sdsStyle:"dark",subtitle:tooltipSubtitle,title:tooltipText},tooltipProps),{},{children:(0,jsx_runtime.jsx)(StyledTableHeader,_objectSpread(_objectSpread({ref},rest),{},{children:(0,jsx_runtime.jsx)(CellHeaderContent,_objectSpread(_objectSpread({},props),{},{children}))}))})):(0,jsx_runtime.jsx)(StyledTableHeader,_objectSpread(_objectSpread({ref},rest),{},{children:(0,jsx_runtime.jsx)(CellHeaderContent,_objectSpread(_objectSpread({},props),{},{children}))}))}));const core_CellHeader=CellHeader;try{CellHeader.displayName="CellHeader",CellHeader.__docgenInfo={description:"",displayName:"CellHeader",props:{shouldShowTooltipOnHover:{defaultValue:null,description:"",name:"shouldShowTooltipOnHover",required:!1,type:{name:"boolean"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:"any"}},tooltipSubtitle:{defaultValue:null,description:"",name:"tooltipSubtitle",required:!1,type:{name:"string"}},tooltipText:{defaultValue:null,description:"",name:"tooltipText",required:!1,type:{name:"string"}},active:{defaultValue:null,description:"",name:"active",required:!1,type:{name:"boolean"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"asc"'},{value:'"desc"'}]}},hideSortIcon:{defaultValue:null,description:"",name:"hideSortIcon",required:!1,type:{name:"boolean"}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"center"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/CellHeader/index.tsx#CellHeader"]={docgenInfo:CellHeader.__docgenInfo,name:"CellHeader",path:"packages/components/src/core/CellHeader/index.tsx#CellHeader"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/core/TableHeader/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_TableHeader});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),TableRow=__webpack_require__("./packages/components/src/core/TableRow/index.tsx"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");var StyledTableHeader=(0,styled.Ay)("thead")(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  ","\n"])),(function(props){var _semanticColors$base,semanticColors=(0,styles.Bd)(props);return"\n      border-bottom: solid 2px ".concat(null==semanticColors||null===(_semanticColors$base=semanticColors.base)||void 0===_semanticColors$base?void 0:_semanticColors$base.borderTable,";\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TableHeader=(0,react.forwardRef)((function(props,ref){var children=props.children;return(0,jsx_runtime.jsx)(StyledTableHeader,_objectSpread(_objectSpread({ref},props),{},{children:(0,jsx_runtime.jsx)(TableRow.A,{hover:!1,shouldShowTooltipOnHover:!1,children})}))}));const core_TableHeader=TableHeader;try{TableHeader.displayName="TableHeader",TableHeader.__docgenInfo={description:"",displayName:"TableHeader",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TableHeader/index.tsx#TableHeader"]={docgenInfo:TableHeader.__docgenInfo,name:"TableHeader",path:"packages/components/src/core/TableHeader/index.tsx#TableHeader"})}catch(__react_docgen_typescript_loader_error){}}}]);