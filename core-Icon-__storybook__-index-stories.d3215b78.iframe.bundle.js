"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[9824],{"./packages/components/src/core/Icon/__storybook__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,IconBank:()=>IconBank,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var core_Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),dist=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["sdsIcon","sdsSize","sdsType"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Icon=function Icon(props){var sdsIcon=props.sdsIcon,sdsSize=props.sdsSize,sdsType=props.sdsType,rest=_objectWithoutProperties(props,_excluded);return(0,jsx_runtime.jsx)(core_Icon.A,function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({sdsIcon,sdsSize,sdsType},rest))};try{Icon.displayName="Icon",Icon.__docgenInfo={description:"",displayName:"Icon",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Icon/__storybook__/stories/default.tsx#Icon"]={docgenInfo:Icon.__docgenInfo,name:"Icon",path:"packages/components/src/core/Icon/__storybook__/stories/default.tsx#Icon"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,_templateObject2,styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),react=__webpack_require__("./node_modules/react/index.js"),Callout=__webpack_require__("./packages/components/src/core/Callout/index.tsx"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts"),map=__webpack_require__("./packages/components/src/core/Icon/map.ts"),InputSearch=__webpack_require__("./packages/components/src/core/InputSearch/index.tsx");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var IconBankWrapper=(0,styled.Ay)("div")(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var typography=(0,styles.Of)(props),spaces=(0,styles.oZ)(props);return"\n      font-family: ".concat(null==typography?void 0:typography.fontFamily,";\n      display: grid;\n      grid-gap: ").concat(null==spaces?void 0:spaces.s,"px;\n      margin: 0 auto;\n      grid-template-columns: repeat(auto-fit, 210px);\n      margin-top: ").concat(null==spaces?void 0:spaces.m,"px;\n    ")})),IconWrapper=(0,styled.Ay)("div")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.Zo,(function(props){var _semanticColors$base,_semanticColors$base2,_colors$color,_colors$color2,_semanticColors$base3,_semanticColors$base4,_semanticColors$base5,_semanticColors$base6,colors=(0,styles.jM)(props),spaces=(0,styles.oZ)(props),semanticColors=(0,styles.Bd)(props),mode=(0,styles.Wi)(props),_props$color=props.color,color=void 0===_props$color?"blue":_props$color,_props$shade=props.shade,shade=void 0===_props$shade?500:_props$shade;return"\n      align-items: center;\n      border-radius: 4px;\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      padding: 8px;\n      position: relative;\n      cursor: pointer;\n      transition: all .2s;\n\n      p {\n        margin: ".concat(null==spaces?void 0:spaces.m,"px 0 0 0;\n        text-align: center;\n        font-size: 13px;\n        background-color: transparent;\n      }\n\n      span {\n        color: ").concat(null==semanticColors||null===(_semanticColors$base=semanticColors.base)||void 0===_semanticColors$base?void 0:_semanticColors$base.textPrimary,";\n        font-size: 11px;\n      }\n\n      span.size-tag {\n        background-color: ").concat(null==semanticColors||null===(_semanticColors$base2=semanticColors.base)||void 0===_semanticColors$base2?void 0:_semanticColors$base2.surfaceSecondary,";\n        font-size: 10px;\n        padding: 0 4px;\n        margin: 0 2px;\n        border-radius: 2px;\n      }\n\n      &:hover {\n        border-radius: 4px;\n        background-color: ").concat(null==colors||null===(_colors$color=colors[color])||void 0===_colors$color?void 0:_colors$color[shade],";\n        border-color: ").concat(null==colors||null===(_colors$color2=colors[color])||void 0===_colors$color2?void 0:_colors$color2[shade],";\n        color: ").concat(null==semanticColors||null===(_semanticColors$base3=semanticColors.base)||void 0===_semanticColors$base3?void 0:_semanticColors$base3.textPrimaryInverse,";\n\n        p {\n          color: ").concat(null==semanticColors||null===(_semanticColors$base4=semanticColors.base)||void 0===_semanticColors$base4?void 0:_semanticColors$base4.textPrimaryInverse,";\n        }\n\n        span {\n          color: ").concat(null==semanticColors||null===(_semanticColors$base5=semanticColors.base)||void 0===_semanticColors$base5?void 0:_semanticColors$base5.textPrimaryInverse,";\n        }\n\n        span.size-tag {\n          background-color: ").concat("dark"===mode?"rgba(0, 0, 0, 0.2)":"rgba(255, 255, 255, 0.2)",";\n        }\n\n        svg {\n          fill: ").concat(null==semanticColors||null===(_semanticColors$base6=semanticColors.base)||void 0===_semanticColors$base6?void 0:_semanticColors$base6.iconPrimaryInverse,";\n        }\n\n        div.notification {\n          display: flex;\n        }\n      }\n\n      div.icon {\n        min-height: 22px;\n        display: flex;\n        align-items: center;\n      }\n\n      div.notification {\n        flex-direction: column;\n        border-radius: 2px;\n        display: none;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background-color: rgba(0, 0, 0, 0.3);\n        backdrop-filter: blur(3px);\n        color: white;\n        align-items: center;\n        justify-content: center;\n      }\n    ")})),IconItem=function IconItem(props){var sdsIcon=props.sdsIcon,innerIcon=props.innerIcon,color=props.color,_useState2=_slicedToArray((0,react.useState)(!1),2),copied=_useState2[0],setCopied=_useState2[1];if(!innerIcon[1])return null;var sdsSize="smallIcon"===innerIcon[0]?"s":"l";return(0,jsx_runtime.jsxs)(IconWrapper,{color,onClick:function onClick(){return function copyIconNameHandler(iconName){navigator.clipboard.writeText(iconName),setCopied(!0),setTimeout((function(){setCopied(!1)}),1500)}(sdsIcon)},children:[(0,jsx_runtime.jsx)("div",{className:"icon",children:(0,jsx_runtime.jsx)(core_Icon.A,{color,sdsSize,sdsIcon,sdsType:"static"})}),(0,jsx_runtime.jsx)("p",{children:sdsIcon}),(0,jsx_runtime.jsxs)("span",{children:["Available sizes"," ","s"===sdsSize?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"size-tag",children:"xs"}),(0,jsx_runtime.jsx)("span",{className:"size-tag",children:"s"})]}):(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("span",{className:"size-tag",children:"l"}),(0,jsx_runtime.jsx)("span",{className:"size-tag",children:"xl"})]})]}),copied&&(0,jsx_runtime.jsxs)("div",{className:"notification",children:[(0,jsx_runtime.jsx)(core_Icon.A,{color,sdsSize,sdsIcon,sdsType:"static"}),(0,jsx_runtime.jsx)("p",{children:"Copied!"}),(0,jsx_runtime.jsx)("span",{children:(0,jsx_runtime.jsx)(core_Icon.A,{color,sdsSize:"xs",sdsIcon:"Check",sdsType:"static"})})]})]},sdsIcon+sdsSize)},IconBankDemo=function IconBankDemo(props){var color=props.color,initialIcons=Object.entries(map.K),_useState4=_slicedToArray((0,react.useState)(initialIcons),2),icons=_useState4[0],setIcons=_useState4[1];return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InputSearch.A,{id:"squareSearchPreview",label:"Search",sdsStyle:"square",placeholder:"Search icons",name:"square-input-search",onChange:function searchIconHandler(e){var query=e.target.value,regex=new RegExp(query,"gi"),newIcons=initialIcons.filter((function(icon){return icon[0].match(regex)}));setIcons(newIcons)}}),icons.length?(0,jsx_runtime.jsx)(IconBankWrapper,{children:icons.map((function(_ref){var _ref2=_slicedToArray(_ref,2),sdsIcon=_ref2[0],icon=_ref2[1];return Object.entries(icon).map((function(innerIcon){return(0,jsx_runtime.jsx)(IconItem,{color,innerIcon,sdsIcon},sdsIcon+innerIcon[0])}))}))}):(0,jsx_runtime.jsx)(Callout.A,{intent:"notice",icon:(0,jsx_runtime.jsx)(core_Icon.A,{sdsSize:"l",sdsIcon:"InfoSpeechBubble",sdsType:"static"}),children:"Sorry, there are no matches for your search!"})]})};try{IconBankDemo.displayName="IconBankDemo",IconBankDemo.__docgenInfo={description:"",displayName:"IconBankDemo",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Icon/__storybook__/stories/iconBank.tsx#IconBankDemo"]={docgenInfo:IconBankDemo.__docgenInfo,name:"IconBankDemo",path:"packages/components/src/core/Icon/__storybook__/stories/iconBank.tsx#IconBankDemo"})}catch(__react_docgen_typescript_loader_error){}function index_stories_typeof(o){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},index_stories_typeof(o)}function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(t){var i=function index_stories_toPrimitive(t,r){if("object"!=index_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=index_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==index_stories_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const index_stories={argTypes:{color:{control:{type:"select"},options:["blue","gray","green","purple","red","yellow"]},sdsIcon:{control:{type:"select"},options:["CheckCircle","Copy","Edit","LightBulb","LinesHorizontal","Loading","XMark"]},sdsSize:{control:{type:"select"},options:["xs","s","l","xl"]},sdsType:{control:{type:"select"},options:["iconButton","interactive","static","button"]},shade:{control:{type:"select"},options:[100,200,300,400,500,600,700,800]}},component:Icon,parameters:{badges:[dist.yq.STABLE]},title:"Components/Icon"};var Default={args:{color:"blue",sdsIcon:"CheckCircle",sdsSize:"xl",sdsType:"static",shade:500}},IconBank={args:{color:"blue"},parameters:{controls:{exclude:["sdsIcon","sdsSize","sdsType","shade"]}},render:function render(args){return(0,jsx_runtime.jsx)(IconBankDemo,index_stories_objectSpread({},args))}},Test={parameters:{controls:{exclude:["color","sdsIcon","sdsSize","sdsType","shade"]},snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(core_Icon.A,index_stories_objectSpread({sdsIcon:"CheckCircle",sdsSize:"l",sdsType:"static",color:"blue","data-testid":"icon"},args))}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "blue",\n    sdsIcon: "CheckCircle",\n    sdsSize: "xl",\n    sdsType: "static",\n    shade: 500\n  }\n}',...Default.parameters?.docs?.source}}},IconBank.parameters={...IconBank.parameters,docs:{...IconBank.parameters?.docs,source:{originalSource:'{\n  args: {\n    color: "blue"\n  },\n  parameters: {\n    controls: {\n      exclude: ["sdsIcon", "sdsSize", "sdsType", "shade"]\n    }\n  },\n  render: (args: Args) => <IconBankDemo {...args} />\n}',...IconBank.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:'{\n  parameters: {\n    controls: {\n      exclude: ["color", "sdsIcon", "sdsSize", "sdsType", "shade"]\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <RawIcon sdsIcon="CheckCircle" sdsSize="l" sdsType="static" color="blue" data-testid="icon" {...args} />\n}',...Test.parameters?.docs?.source}}};const __namedExportsOrder=["Default","IconBank","Test"]},"./packages/components/src/core/Callout/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>CALLOUT_TITLE_DISPLAY_NAME});var CALLOUT_TITLE_DISPLAY_NAME="CalloutTitle"},"./packages/components/src/core/Callout/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_Callout});var _templateObject,Grow=__webpack_require__("./node_modules/@mui/material/Grow/Grow.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./packages/components/src/core/Button/index.tsx"),Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),constants=__webpack_require__("./packages/components/src/core/Callout/constants.ts"),Alert=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),alertClasses=__webpack_require__("./node_modules/@mui/material/Alert/alertClasses.js"),alertTitleClasses=__webpack_require__("./node_modules/@mui/material/AlertTitle/alertTitleClasses.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");var doNotForwardProps=["calloutTitle","collapsed","severity"],StyledCallout=(0,styled.Ay)(Alert.A,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  ","\n  ","\n"])),styles.Zo,(function(props){var _semanticColors$inten,_semanticColors$inten2,_semanticColors$inten3,_semanticColors$inten4,_iconSizes$l$height,_typography$styles$bo,_typography$styles,_palette$text,_props$intent=props.intent,intent=void 0===_props$intent?"info":_props$intent,spaces=(0,styles.oZ)(props),corners=(0,styles.VP)(props),iconSizes=(0,styles.I7)(props),palette=(0,styles.Sf)(props),typography=(0,styles.Of)(props),semanticColors=(0,styles.Bd)(props),iconColor=null!==(_semanticColors$inten=null==semanticColors||null===(_semanticColors$inten2=semanticColors[intent])||void 0===_semanticColors$inten2?void 0:_semanticColors$inten2.ornament)&&void 0!==_semanticColors$inten?_semanticColors$inten:"black",backgroundColor=null!==(_semanticColors$inten3=null==semanticColors||null===(_semanticColors$inten4=semanticColors[intent])||void 0===_semanticColors$inten4?void 0:_semanticColors$inten4.surfacePrimary)&&void 0!==_semanticColors$inten3?_semanticColors$inten3:"white",titleBottomMargin=props.collapsed?"margin-bottom: 0;":"",alertMessagePaddingTop=Math.abs(((null!==(_iconSizes$l$height=null==iconSizes?void 0:iconSizes.l.height)&&void 0!==_iconSizes$l$height?_iconSizes$l$height:0)-parseInt(String(null!==(_typography$styles$bo=null==typography||null===(_typography$styles=typography.styles)||void 0===_typography$styles||null===(_typography$styles=_typography$styles.body)||void 0===_typography$styles||null===(_typography$styles=_typography$styles.regular)||void 0===_typography$styles||null===(_typography$styles=_typography$styles.xs)||void 0===_typography$styles?void 0:_typography$styles.lineHeight)&&void 0!==_typography$styles$bo?_typography$styles$bo:"0")))/2);return"\n      width: 360px;\n      margin: ".concat(null==spaces?void 0:spaces.m,"px 0;\n      border-radius: ").concat(null==corners?void 0:corners.m,"px;\n      color: ").concat(null==palette||null===(_palette$text=palette.text)||void 0===_palette$text?void 0:_palette$text.primary,";\n      padding: ").concat(null==spaces?void 0:spaces.m,"px;\n      background-color: ").concat(backgroundColor,";\n\n      .").concat(alertClasses.A.icon," {\n        height: ").concat(null==iconSizes?void 0:iconSizes.l.height,"px;\n        width: ").concat(null==iconSizes?void 0:iconSizes.l.width,"px;\n        margin-right: ").concat(null==spaces?void 0:spaces.s,"px;\n        padding: 0;\n\n        path {\n          fill: ").concat(iconColor,";\n        }\n      }\n\n      .").concat(alertClasses.A.message," {\n        padding: ").concat(alertMessagePaddingTop,"px 0 0;\n        margin-right: ").concat(null==spaces?void 0:spaces.m,"px;\n\n        .").concat(alertTitleClasses.A.root," {\n          margin-top: 0;\n          ").concat(titleBottomMargin,"\n        }\n      }\n\n      .").concat(alertClasses.A.action," {\n        margin-right: 0;\n        padding: 0;\n        align-items: flex-start;\n        margin-top: ").concat(null==spaces?void 0:spaces.xxs,"px;\n\n        > button {\n          padding: 0;\n        }\n      }\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["autoDismiss","children","dismissed","expandable","onClose","icon","sdsIconProps","intent","sdsStage"];function _toArray(arr){return _arrayWithHoles(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||_nonIterableRest()}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return _arrayWithHoles(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||_unsupportedIterableToArray(arr,i)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Callout=function Callout(_ref){var _children$,autoDismiss=_ref.autoDismiss,children=_ref.children,dismissed=_ref.dismissed,expandable=_ref.expandable,onClose=_ref.onClose,icon=_ref.icon,sdsIconProps=_ref.sdsIconProps,intent=_ref.intent,sdsStage=_ref.sdsStage,rest=_objectWithoutProperties(_ref,_excluded),_useState2=_slicedToArray((0,react.useState)(dismissed),2),hide=_useState2[0],setHide=_useState2[1],_useState4=_slicedToArray((0,react.useState)(sdsStage||"closed"),2),stage=_useState4[0],setStage=_useState4[1];(0,react.useEffect)((function(){(setHide(dismissed),autoDismiss)&&setTimeout((function(){setHide(!0)}),"boolean"==typeof autoDismiss?8e3:autoDismiss)}),[dismissed,autoDismiss]);var calloutContent,handleClose=function handleClose(event){setHide(!0),onClose&&onClose(event)},collapsed=expandable&&"closed"===stage||!1,calloutTitle=children;if(Array.isArray(children)&&(null===(_children$=children[0])||void 0===_children$||null===(_children$=_children$.type)||void 0===_children$?void 0:_children$.displayName)===constants.P){var _children=_toArray(children);calloutTitle=_children[0],calloutContent=_children.slice(1)}return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Grow.A,{in:!hide,children:(0,jsx_runtime.jsxs)(StyledCallout,_objectSpread(_objectSpread({onClose:onClose?handleClose:void 0,action:function getAction(collapsed){return expandable?(0,jsx_runtime.jsx)(Button.A,{"aria-label":collapsed?"open":"close",onClick:function onClick(){setStage(collapsed?"open":"closed")},sdsSize:"small",sdsType:"tertiary",sdsStyle:"icon",icon:collapsed?"ChevronDown":"ChevronUp"}):onClose?(0,jsx_runtime.jsx)(Button.A,{"aria-label":"Dismiss",onClick:handleClose,sdsSize:"small",sdsType:"tertiary",sdsStyle:"icon",size:"large",icon:"XMark"}):null}(collapsed),icon:function getIcon(){if(void 0!==icon)return"string"!=typeof icon?icon:(0,jsx_runtime.jsx)(Icon.A,_objectSpread({sdsSize:"l",sdsIcon:icon,sdsType:"static"},sdsIconProps));switch(intent){case"positive":return(0,jsx_runtime.jsx)(Icon.A,{sdsSize:"l",sdsIcon:"CheckCircle",sdsType:"static"});case"info":return(0,jsx_runtime.jsx)(Icon.A,{sdsSize:"l",sdsIcon:"InfoCircle",sdsType:"static"});default:return(0,jsx_runtime.jsx)(Icon.A,{sdsSize:"l",sdsIcon:"ExclamationMarkCircle",sdsType:"static"})}}(),intent,collapsed:collapsed||!1},rest),{},{children:[calloutTitle,!collapsed&&calloutContent]}))})})};const core_Callout=Callout;try{Callout.displayName="Callout",Callout.__docgenInfo={description:"",displayName:"Callout",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},autoDismiss:{defaultValue:null,description:"",name:"autoDismiss",required:!1,type:{name:"number | boolean"}},dismissed:{defaultValue:null,description:"",name:"dismissed",required:!1,type:{name:"boolean"}},expandable:{defaultValue:null,description:"",name:"expandable",required:!1,type:{name:"boolean"}},sdsIconProps:{defaultValue:null,description:"",name:"sdsIconProps",required:!1,type:{name:"any"}},intent:{defaultValue:null,description:"",name:"intent",required:!0,type:{name:"enum",value:[{value:'"info"'},{value:'"positive"'},{value:'"notice"'},{value:'"negative"'}]}},sdsStage:{defaultValue:null,description:"",name:"sdsStage",required:!1,type:{name:"enum",value:[{value:'"open"'},{value:'"closed"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/Callout/index.tsx#Callout"]={docgenInfo:Callout.__docgenInfo,name:"Callout",path:"packages/components/src/core/Callout/index.tsx#Callout"})}catch(__react_docgen_typescript_loader_error){}}}]);