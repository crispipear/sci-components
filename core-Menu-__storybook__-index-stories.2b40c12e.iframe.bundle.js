"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[62],{"./packages/components/src/core/Menu/__storybook__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomPlacement:()=>CustomPlacement,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./packages/components/src/core/Button/index.tsx"),MenuItem=__webpack_require__("./packages/components/src/core/MenuItem/index.tsx"),core_Menu=__webpack_require__("./packages/components/src/core/Menu/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Menu=function Menu(props){var _React$useState2=_slicedToArray(react.useState(null),2),anchorEl=_React$useState2[0],setAnchorEl=_React$useState2[1],handleClose=function handleClose(){setAnchorEl(null)};return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Button.A,{sdsStyle:"minimal",sdsType:"secondary",onClick:function handleClick(event){setAnchorEl(event.currentTarget)},children:"Click me!"}),(0,jsx_runtime.jsxs)(core_Menu.A,_objectSpread(_objectSpread({anchorEl,keepMounted:!0,open:Boolean(anchorEl),onClose:handleClose},props),{},{children:[(0,jsx_runtime.jsx)(MenuItem.A,{onClick:handleClose,children:"Contact us"}),(0,jsx_runtime.jsx)(MenuItem.A,{onClick:handleClose,children:"Terms of Use"}),(0,jsx_runtime.jsx)(MenuItem.A,{onClick:handleClose,children:"Privacy Policy"}),(0,jsx_runtime.jsx)(MenuItem.A,{onClick:handleClose,children:"Logout"})]}))]})};try{Menu.displayName="Menu",Menu.__docgenInfo={description:"",displayName:"Menu",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Menu/__storybook__/stories/default.tsx#Menu"]={docgenInfo:Menu.__docgenInfo,name:"Menu",path:"packages/components/src/core/Menu/__storybook__/stories/default.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}const index_stories={component:Menu,parameters:{badges:[__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs").yq.STABLE]},title:"Components/Dropdowns/Menu"};var Default={},CustomPlacement={args:{anchorOrigin:{horizontal:"right",vertical:"bottom"},column:"column value",transformOrigin:{horizontal:"right",vertical:"top"}}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},CustomPlacement.parameters={...CustomPlacement.parameters,docs:{...CustomPlacement.parameters?.docs,source:{originalSource:'{\n  args: {\n    anchorOrigin: {\n      horizontal: "right",\n      vertical: "bottom"\n    },\n    column: "column value",\n    transformOrigin: {\n      horizontal: "right",\n      vertical: "top"\n    }\n  }\n}',...CustomPlacement.parameters?.docs?.source}}};const __namedExportsOrder=["Default","CustomPlacement"]},"./packages/components/src/core/Menu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_Menu});var _templateObject,Menu=__webpack_require__("./node_modules/@mui/material/Menu/Menu.js"),menuClasses=__webpack_require__("./node_modules/@mui/material/Menu/menuClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");var StyledMenu=(0,styled.Ay)(Menu.A)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  & {\n    ."," {\n      ","\n    }\n\n    .MuiList-padding {\n      padding: 0;\n    }\n  }\n"])),menuClasses.A.paper,(function(props){var spaces=(0,styles.oZ)(props);return"\n          padding: ".concat(null==spaces?void 0:spaces.xs,"px;\n        ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ANCHOR_ORIGIN={horizontal:"center",vertical:"bottom"},TRANSFORM_ORIGIN={horizontal:"center",vertical:"top"},Menu_Menu=function Menu(props){return(0,jsx_runtime.jsx)(StyledMenu,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({anchorOrigin:ANCHOR_ORIGIN,transformOrigin:TRANSFORM_ORIGIN},props))};const core_Menu=Menu_Menu;try{Menu_Menu.displayName="Menu",Menu_Menu.__docgenInfo={description:"",displayName:"Menu",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Menu/index.tsx#Menu"]={docgenInfo:Menu_Menu.__docgenInfo,name:"Menu",path:"packages/components/src/core/Menu/index.tsx#Menu"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/core/MenuItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_MenuItem});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),Check=__webpack_require__("./node_modules/@mui/icons-material/esm/Check.js"),Remove=__webpack_require__("./node_modules/@mui/icons-material/esm/Remove.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),menuItemClasses=__webpack_require__("./node_modules/@mui/material/MenuItem/menuItemClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),fonts=__webpack_require__("./packages/components/src/core/styles/common/mixins/fonts.ts"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledMenuItem=(0,styled.Ay)(MenuItem.A)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _semanticComponentCol,_semanticComponentCol2,_semanticComponentCol3,_semanticComponentCol4,_semanticComponentCol5,_semanticComponentCol6,_semanticComponentCol7,selected=props.selected,colors=(0,styles.jM)(props),fontWeights=(0,styles.bI)(props),spaces=(0,styles.oZ)(props),semanticComponentColors=(0,styles.Ac)(props),primary=null==colors?void 0:colors.blue[400];return"\n      padding: ".concat(null==spaces?void 0:spaces.xs,"px ").concat(null==spaces?void 0:spaces.s,"px !important;\n      min-height: unset;\n      opacity: 1;\n\n      &.MuiAutocomplete-option {\n        min-height: unset;\n      }\n      \n      .primary-text {\n        font-weight: ").concat(selected?null==fontWeights?void 0:fontWeights.semibold:null==fontWeights?void 0:fontWeights.regular,";\n      }\n\n      &.MuiButtonBase-root {\n        background-color: transparent;\n        opacity: 1;\n\n        &:hover, &.").concat(menuItemClasses.A.focusVisible," {\n          background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol=semanticComponentColors.base)||void 0===_semanticComponentCol?void 0:_semanticComponentCol.fillHover,';\n\n          &[aria-selected="true"] {\n            background-color: ').concat(null==semanticComponentColors||null===(_semanticComponentCol2=semanticComponentColors.base)||void 0===_semanticComponentCol2?void 0:_semanticComponentCol2.fillHover,";\n          }\n        }\n      }\n\n      &.").concat(menuItemClasses.A.root," .MuiSvgIcon-root {\n        align-self: flex-start;\n      }\n\n      &.").concat(menuItemClasses.A.root," .").concat(menuItemClasses.A.disabled,' {\n        opacity: 1 !important;\n      }\n\n      &.MuiAutocomplete-option[aria-selected="true"] {\n        &:hover {\n          background-color: ').concat(null==semanticComponentColors||null===(_semanticComponentCol3=semanticComponentColors.base)||void 0===_semanticComponentCol3?void 0:_semanticComponentCol3.fillHover," !important;\n        }\n\n        svg.check-icon {\n          color: ").concat(selected?primary:null==semanticComponentColors||null===(_semanticComponentCol4=semanticComponentColors.base)||void 0===_semanticComponentCol4?void 0:_semanticComponentCol4.icon,';\n        }\n      }\n\n      &.MuiAutocomplete-option[aria-disabled="true"] {\n        opacity: 1;\n      }\n\n      &:hover {\n        background-color: ').concat(null==semanticComponentColors||null===(_semanticComponentCol5=semanticComponentColors.base)||void 0===_semanticComponentCol5?void 0:_semanticComponentCol5.fillHover,";\n        svg.check-icon {\n          color: ").concat(selected?primary:null==semanticComponentColors||null===(_semanticComponentCol6=semanticComponentColors.base)||void 0===_semanticComponentCol6?void 0:_semanticComponentCol6.icon,";\n        }\n      }\n\n      &.Mui-selected.MuiListItem-root.MuiListItem-button {\n        background-color: white;\n        &:hover {\n          background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol7=semanticComponentColors.base)||void 0===_semanticComponentCol7?void 0:_semanticComponentCol7.fillHover,";\n        }\n        .primary-text {\n          font-weight: ").concat(null==fontWeights?void 0:fontWeights.semibold,";\n        }\n      }\n\n      &:active {\n        svg.check-icon {\n          color: ").concat(primary,";\n        }\n\n        &:active {\n          svg.check-icon {\n            color: ").concat(primary,";\n          }\n\n          .primary-text {\n            font-weight: ").concat(null==fontWeights?void 0:fontWeights.semibold,";\n          }\n        }\n      }\n    ")})),ContentWrapper=(0,styled.Ay)("span")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  width: 100%;\n"]))),disabledStyles=function disabledStyles(props){var _semanticComponentCol8;if(!props.disabled)return"";var semanticComponentColors=(0,styles.Ac)(props);return"\n    color: ".concat(null==semanticComponentColors||null===(_semanticComponentCol8=semanticComponentColors.base)||void 0===_semanticComponentCol8?void 0:_semanticComponentCol8.iconDisabled,";\n    cursor: default;\n  ")},TextWrapper=(0,styled.Ay)("span")(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n\n  ","\n\n  ","\n"])),fonts.Zo,(function(props){var _semanticTextColors$b,semanticTextColors=(0,styles.yA)(props);return"\n      color: ".concat(null==semanticTextColors||null===(_semanticTextColors$b=semanticTextColors.base)||void 0===_semanticTextColors$b?void 0:_semanticTextColors$b.primary,";\n      display: flex;\n      white-space: pre-wrap;\n    ")}),disabledStyles),StyledMenuItemIcon=(0,styled.Ay)("span")(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _semanticComponentCol9,disabled=props.disabled,spaces=(0,styles.oZ)(props),iconSizes=(0,styles.I7)(props),semanticComponentColors=(0,styles.Ac)(props);return"\n      margin-right: ".concat(null==spaces?void 0:spaces.xs,"px;\n      margin-top: ").concat(null==spaces?void 0:spaces.xxxs,"px;\n      height: ").concat(null==iconSizes?void 0:iconSizes.s.height,"px;\n\n      .MuiSvgIcon-root {\n        ").concat(disabled?"color: ".concat(null==semanticComponentColors||null===(_semanticComponentCol9=semanticComponentColors.base)||void 0===_semanticComponentCol9?void 0:_semanticComponentCol9.iconDisabled,";"):null,"\n      }\n    ")})),ColumnWrapper=(0,styled.Ay)("span")(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n\n  ","\n\n  ","\n"])),fonts.Zo,(function(props){var _semanticTextColors$b2,semanticTextColors=(0,styles.yA)(props),spaces=(0,styles.oZ)(props);return"\n      text-align: right;\n      color: ".concat(null==semanticTextColors||null===(_semanticTextColors$b2=semanticTextColors.base)||void 0===_semanticTextColors$b2?void 0:_semanticTextColors$b2.primary,";\n      margin-left: ").concat(null==spaces?void 0:spaces.m,"px;\n    ")}),disabledStyles),StyledIconWrapper=(0,styled.Ay)("span")(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var spaces=(0,styles.oZ)(props),iconSizes=(0,styles.I7)(props);return"\n      align-self: start;\n      margin-right: ".concat(null==spaces?void 0:spaces.m,"px;\n      margin-top: ").concat(null==spaces?void 0:spaces.xxxs,"px;\n      height: ").concat(null==iconSizes?void 0:iconSizes.s.height,"px;\n    ")})),StyledCheck=(0,styled.Ay)(Check.A,{shouldForwardProp:function shouldForwardProp(prop){return"selected"!==prop}})(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _semanticComponentCol10,_semanticComponentCol11,selected=props.selected,disabled=props.disabled,iconSizes=(0,styles.I7)(props),semanticComponentColors=(0,styles.Ac)(props),selectedColor=disabled?null==semanticComponentColors||null===(_semanticComponentCol10=semanticComponentColors.base)||void 0===_semanticComponentCol10?void 0:_semanticComponentCol10.iconDisabled:null==semanticComponentColors||null===(_semanticComponentCol11=semanticComponentColors.accent)||void 0===_semanticComponentCol11?void 0:_semanticComponentCol11.icon;return"\n      color: ".concat(selected?selectedColor:"transparent",";\n      padding: 0;\n      height: ").concat(null==iconSizes?void 0:iconSizes.s.height,"px;\n      width: ").concat(null==iconSizes?void 0:iconSizes.s.width,"px;\n\n      &.MuiCheckbox-colorPrimary.Mui-checked:hover {\n        background-color: transparent;\n      }\n    ")})),StyledMinus=(0,styled.Ay)(Remove.A,{shouldForwardProp:function shouldForwardProp(prop){return"selected"!==prop}})(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _semanticComponentCol12,_semanticComponentCol13,selected=props.selected,disabled=props.disabled,semanticComponentColors=(0,styles.Ac)(props),iconSizes=(0,styles.I7)(props),selectedColor=disabled?null==semanticComponentColors||null===(_semanticComponentCol12=semanticComponentColors.base)||void 0===_semanticComponentCol12?void 0:_semanticComponentCol12.iconDisabled:null==semanticComponentColors||null===(_semanticComponentCol13=semanticComponentColors.accent)||void 0===_semanticComponentCol13?void 0:_semanticComponentCol13.icon;return"\n      color: ".concat(selected?selectedColor:"transparent",";\n      padding: 0;\n      height: ").concat(null==iconSizes?void 0:iconSizes.s.height,"px;\n      width: ").concat(null==iconSizes?void 0:iconSizes.s.width,"px;\n\n      &.MuiCheckbox-colorPrimary.Mui-checked:hover {\n        background-color: transparent;\n      }\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["children","column","disabled","isMultiSelect","icon","sdsIcon","sdsIconProps","sdsStyle"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var MenuItem_MenuItem=(0,react.forwardRef)((function MenuItem(props,ref){var children=props.children,_props$column=props.column,column=void 0===_props$column?null:_props$column,disabled=props.disabled,_props$isMultiSelect=props.isMultiSelect,isMultiSelect=void 0!==_props$isMultiSelect&&_props$isMultiSelect,newIcon=props.icon,sdsIcon=props.sdsIcon,sdsIconProps=props.sdsIconProps,_props$sdsStyle=props.sdsStyle,sdsStyle=void 0===_props$sdsStyle?"determinate":_props$sdsStyle,originalMenuItemProps=_objectWithoutProperties(props,_excluded),_ref$selected=originalMenuItemProps.selected,selected=void 0!==_ref$selected&&_ref$selected,icon=newIcon||sdsIcon;return(0,jsx_runtime.jsxs)(StyledMenuItem,_objectSpread(_objectSpread({},originalMenuItemProps),{},{disabled,ref,children:[isMultiSelect&&function selectionIcon(){return"determinate"===sdsStyle?(0,jsx_runtime.jsx)(StyledIconWrapper,{children:(0,jsx_runtime.jsx)(StyledCheck,{className:"check-icon",selected,color:"primary",disabled})}):(0,jsx_runtime.jsx)(StyledIconWrapper,{children:(0,jsx_runtime.jsx)(StyledMinus,{className:"check-icon",selected,color:"primary",disabled})})}(),(0,jsx_runtime.jsxs)(ContentWrapper,{children:[(0,jsx_runtime.jsxs)(TextWrapper,{selected,className:"primary-text",disabled,children:[function iconItem(){if(icon)return"string"!=typeof icon?(0,jsx_runtime.jsx)(StyledMenuItemIcon,{disabled,children:icon}):(0,jsx_runtime.jsx)(StyledMenuItemIcon,{disabled,children:(0,jsx_runtime.jsx)(Icon.A,_objectSpread(_objectSpread({color:"blue"},sdsIconProps),{},{sdsType:"static",sdsIcon:icon,sdsSize:"s"}))})}(),children]}),column&&(0,jsx_runtime.jsx)(ColumnWrapper,{disabled,children:column})]})]}))}));const core_MenuItem=MenuItem_MenuItem;try{MenuItem_MenuItem.displayName="MenuItem",MenuItem_MenuItem.__docgenInfo={description:"",displayName:"MenuItem",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"determinate"'},{value:'"indeterminate"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"string | number | ReactElement<CustomSVGProps, string | JSXElementConstructor<any>>"}},sdsIconProps:{defaultValue:null,description:"",name:"sdsIconProps",required:!1,type:{name:"any"}},column:{defaultValue:null,description:"",name:"column",required:!1,type:{name:"ReactNode"}},isMultiSelect:{defaultValue:null,description:"",name:"isMultiSelect",required:!1,type:{name:"boolean"}},sdsIcon:{defaultValue:null,description:"@deprecated Use `icon` instead.\n(masoudmanson): This prop is deprecated and will be removed in the next major version.\nPlease replace instances of `sdsIcon` with `icon`.",name:"sdsIcon",required:!1,type:{name:"string | number | ReactElement<CustomSVGProps, string | JSXElementConstructor<any>>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/MenuItem/index.tsx#MenuItem"]={docgenInfo:MenuItem_MenuItem.__docgenInfo,name:"MenuItem",path:"packages/components/src/core/MenuItem/index.tsx#MenuItem"})}catch(__react_docgen_typescript_loader_error){}}}]);