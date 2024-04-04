"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[6946],{"./packages/components/src/core/InputSlider/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_InputSlider});var _templateObject,react=__webpack_require__("./node_modules/react/index.js"),sliderClasses=__webpack_require__("./node_modules/@mui/material/Slider/sliderClasses.js"),Slider=__webpack_require__("./node_modules/@mui/material/Slider/Slider.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");var StyledSlider=(0,styled.Ay)(Slider.Ay)(_templateObject||(_templateObject=function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}(["\n  ","\n\n  ","\n"])),styles.Pf,(function(props){var disabled=props.disabled;return"\n      ".concat(function inputSlider(props){var _semanticComponentCol,_semanticComponentCol2,_semanticComponentCol3,_semanticComponentCol4,_semanticComponentCol5,_semanticTextColors$b,_semanticComponentCol6,_fontBodyXxxs,_semanticTextColors$b2,corners=(0,styles.VP)(props),colors=(0,styles.jM)(props),shadows=(0,styles.CG)(props),semanticComponentColors=(0,styles.Ac)(props),semanticTextColors=(0,styles.yA)(props);return"\n    position: relative;\n\n    .".concat(sliderClasses.A.rail,",\n    .").concat(sliderClasses.A.track," {\n      border-radius: 2px;\n    }\n\n    .").concat(sliderClasses.A.rail," {\n      background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol=semanticComponentColors.base)||void 0===_semanticComponentCol?void 0:_semanticComponentCol.surfaceTertiary,";\n    }\n    \n    .").concat(sliderClasses.A.track," {\n      background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol2=semanticComponentColors.accent)||void 0===_semanticComponentCol2?void 0:_semanticComponentCol2.fill,";\n    }\n\n    .").concat(sliderClasses.A.thumb," {\n      height: 14px;\n      width: 14px;\n      background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol3=semanticComponentColors.accent)||void 0===_semanticComponentCol3?void 0:_semanticComponentCol3.fill,";\n\n      &.").concat(sliderClasses.A.focusVisible,", &:hover, &:focus, &:active {\n        box-shadow: ").concat(null==shadows?void 0:shadows.none,";\n      }\n    }\n\n    .").concat(sliderClasses.A.thumb,"::before {\n      display: none;\n    }\n\n    .").concat(sliderClasses.A.thumb,"::after {\n      background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol4=semanticComponentColors.base)||void 0===_semanticComponentCol4?void 0:_semanticComponentCol4.surface," !important;\n      height: 6px !important;\n      width: 6px !important;\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n    }\n\n    .").concat(sliderClasses.A.valueLabel," {\n      padding: 2px 4px;\n      color: black;\n      background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol5=semanticComponentColors.accent)||void 0===_semanticComponentCol5?void 0:_semanticComponentCol5.surface,";\n      border-radius: ").concat(null==corners?void 0:corners.m,"px;\n      left: unset; \n      top: -3px;\n\n      &::before {\n        display: none;\n      }\n\n      & * {\n        background: transparent;\n        color: ").concat(null==semanticTextColors||null===(_semanticTextColors$b=semanticTextColors.base)||void 0===_semanticTextColors$b?void 0:_semanticTextColors$b.primary,";\n        transform: none;\n        width: unset;\n        height: unset;\n      }\n    }\n\n    .").concat(sliderClasses.A.mark," {\n      background-color: ").concat(null==colors?void 0:colors.gray[400],";\n      opacity: 1;\n    }\n\n    .").concat(sliderClasses.A.mark,".").concat(sliderClasses.A.markActive," {\n      background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol6=semanticComponentColors.base)||void 0===_semanticComponentCol6?void 0:_semanticComponentCol6.surface,";\n    }\n\n    .").concat(sliderClasses.A.markLabel," {\n      ").concat(null===(_fontBodyXxxs=(0,styles.jT)(props))||void 0===_fontBodyXxxs?void 0:_fontBodyXxxs.styles,"\n      color: ").concat(null==colors?void 0:colors.gray[500],";\n    }\n\n    .").concat(sliderClasses.A.markLabelActive," {\n      color: ").concat(null==semanticTextColors||null===(_semanticTextColors$b2=semanticTextColors.base)||void 0===_semanticTextColors$b2?void 0:_semanticTextColors$b2.primary,";\n    }\n  ")}(props),"\n      ").concat(function horizontal(props){var marks=props.marks,lastMarkIndex=Array.isArray(marks)?marks.length-1:null;return"\n    .".concat(sliderClasses.A.rail,",\n    .").concat(sliderClasses.A.track,' {\n      border: none;\n      height: 4px;\n    }\n\n    // Adjust the position of the first mark by moving it 2px to the right to fit it inside the track\n    span[data-index="0"].').concat(sliderClasses.A.mark,' {\n      left: 2px !important;\n    }\n\n    // Adjust the position of the last mark by moving it 2px to the left to fit it inside the track\n    span[data-index="').concat(lastMarkIndex,'"].').concat(sliderClasses.A.mark," {\n      left: calc(100% - 2px) !important;\n    }\n    \n    .").concat(sliderClasses.A.markLabel," {\n      top: 26px;\n    }\n\n    .").concat(sliderClasses.A.disabled," .").concat(sliderClasses.A.track," {\n      border: none;\n    }\n  ")}(props),"\n      ").concat(disabled?function disabledSlider(props){var _semanticComponentCol7,_semanticComponentCol8,_semanticComponentCol9,_semanticTextColors$b3,_semanticTextColors$b4,_semanticComponentCol10,colors=(0,styles.jM)(props),semanticComponentColors=(0,styles.Ac)(props),semanticTextColors=(0,styles.yA)(props);return"\n    .".concat(sliderClasses.A.track," {\n      background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol7=semanticComponentColors.base)||void 0===_semanticComponentCol7?void 0:_semanticComponentCol7.fillDisabled,";\n    }\n\n    .").concat(sliderClasses.A.thumb,".").concat(sliderClasses.A.disabled," {\n      background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol8=semanticComponentColors.base)||void 0===_semanticComponentCol8?void 0:_semanticComponentCol8.fillDisabled,";\n    }\n\n    .").concat(sliderClasses.A.valueLabel," {\n      color: ").concat(null==colors?void 0:colors.gray[300],";\n      background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol9=semanticComponentColors.base)||void 0===_semanticComponentCol9?void 0:_semanticComponentCol9.surfaceSecondary,";\n      \n      & * {\n        color: ").concat(null==semanticTextColors||null===(_semanticTextColors$b3=semanticTextColors.base)||void 0===_semanticTextColors$b3?void 0:_semanticTextColors$b3.disabled,";\n      }\n    }\n\n    .").concat(sliderClasses.A.markLabel," {\n      color: ").concat(null==semanticTextColors||null===(_semanticTextColors$b4=semanticTextColors.base)||void 0===_semanticTextColors$b4?void 0:_semanticTextColors$b4.disabled,"\n    }\n\n    .").concat(sliderClasses.A.mark," {\n      background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol10=semanticComponentColors.base)||void 0===_semanticComponentCol10?void 0:_semanticComponentCol10.fillDisabled,";\n    }\n  ")}(props):"","\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var InputSlider=(0,react.forwardRef)((function(props,ref){return(0,jsx_runtime.jsx)(StyledSlider,_objectSpread(_objectSpread({ref},props),{},{orientation:"horizontal"}))}));const core_InputSlider=InputSlider;try{InputSlider.displayName="InputSlider",InputSlider.__docgenInfo={description:"",displayName:"InputSlider",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/InputSlider/index.tsx#InputSlider"]={docgenInfo:InputSlider.__docgenInfo,name:"InputSlider",path:"packages/components/src/core/InputSlider/index.tsx#InputSlider"})}catch(__react_docgen_typescript_loader_error){}},"./packages/components/src/core/NavigationJumpTo/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_NavigationJumpTo});var react=__webpack_require__("./node_modules/react/index.js");const scrollStop=function useScrollStopListener(callback){var timeout=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,callbackRef=(0,react.useRef)();callbackRef.current=callback,(0,react.useEffect)((function(){var destroyListener=function createScrollStopListener(callback){var timeout=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50,removed=!1,handle=null,onScroll=function onScroll(){handle&&clearTimeout(handle),handle=setTimeout(callback,timeout)};return document.addEventListener("scroll",onScroll,!0),function(){removed||(removed=!0,handle&&clearTimeout(handle),document.removeEventListener("scroll",onScroll))}}((function(){callbackRef.current&&callbackRef.current()}),timeout);return function(){return destroyListener()}}),[timeout])};var _templateObject,_templateObject2,utils=__webpack_require__("./packages/components/src/common/utils.ts"),Tabs=__webpack_require__("./node_modules/@mui/material/Tabs/Tabs.js"),Tab=__webpack_require__("./node_modules/@mui/material/Tab/Tab.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var doNotForwardProps=["items","sdsIndicatorColor"],StyledTabs=(0,styled.Ay)(Tabs.A,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _semanticComponentCol,_semanticComponentCol2,_props$sdsIndicatorCo=props.sdsIndicatorColor,sdsIndicatorColor=void 0===_props$sdsIndicatorCo?"info":_props$sdsIndicatorCo,spaces=(0,styles.oZ)(props),semanticComponentColors=(0,styles.Ac)(props);return"\n      &:before {\n        background-color: ".concat(null==semanticComponentColors||null===(_semanticComponentCol=semanticComponentColors.base)||void 0===_semanticComponentCol?void 0:_semanticComponentCol.surfaceTertiary,";\n        border-radius: ").concat(null==spaces?void 0:spaces.xxxs,'px;\n        content: "";\n        height: 100%;\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: ').concat(null==spaces?void 0:spaces.xxxs,"px;\n      }\n      max-width: 180px;\n      top: ").concat(null==spaces?void 0:spaces.xl,"px;\n      margin-bottom: ").concat(null==spaces?void 0:spaces.l,"px;\n      margin-right: ").concat(null==spaces?void 0:spaces.m,"px;\n      position: sticky;\n      .MuiTabs-indicator {\n        background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol2=semanticComponentColors[sdsIndicatorColor])||void 0===_semanticComponentCol2?void 0:_semanticComponentCol2.fill," !important;\n        border-radius: 2px;\n        left: 0;\n        width: 2px;\n      }\n    ")})),StyledTab=(0,styled.Ay)(Tab.A,{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.Zo,(function(props){var _semanticComponentCol3,_semanticComponentCol4,spaces=(0,styles.oZ)(props),semanticComponentColors=(0,styles.Ac)(props);return"\n      box-sizing: border-box;\n      max-width: 180px;\n      padding-left: ".concat(null==spaces?void 0:spaces.l,"px;\n      margin: 0 ").concat(null==spaces?void 0:spaces.l,"px ").concat(null==spaces?void 0:spaces.m,"px ").concat(null==spaces?void 0:spaces.l,'px;\n      align-items: start;\n      min-height: unset;\n      max-height: unset;\n      text-transform: none;\n      &:last-child {\n        margin-bottom: 0;\n      }\n      &:before {\n        content: "";\n        position: absolute;\n        left: -').concat(null==spaces?void 0:spaces.l,"px;\n        width: ").concat(null==spaces?void 0:spaces.xxxs,"px;\n        height: 100%;\n        background-color: ").concat(null==semanticComponentColors||null===(_semanticComponentCol3=semanticComponentColors.base)||void 0===_semanticComponentCol3?void 0:_semanticComponentCol3.border,";\n        display: none;\n        border-radius: ").concat(null==spaces?void 0:spaces.xxxs,"px;\n      }\n      &:hover {\n        color: black;\n        &:before {\n          display: block;\n        }\n      }\n      &.Mui-selected {\n        color: black;\n        font-weight: 600;\n      }\n      &.MuiTabs-indicator {\n        backgroundColor: ").concat(null==semanticComponentColors||null===(_semanticComponentCol4=semanticComponentColors.base)||void 0===_semanticComponentCol4?void 0:_semanticComponentCol4.surfaceTertiary,";\n        width: ").concat(null==spaces?void 0:spaces.xxxs,"px;\n      }\n      &.MuiButtonBase-root {\n        white-space: nowrap;\n        padding: 0;\n        overflow: visible;\n      }\n    ")}));function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function NavigationJumpTo_typeof(o){return NavigationJumpTo_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},NavigationJumpTo_typeof(o)}var _excluded=["items","indicatorColor","offsetTop","onChange"];function NavigationJumpTo_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function NavigationJumpTo_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?NavigationJumpTo_ownKeys(Object(t),!0).forEach((function(r){NavigationJumpTo_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):NavigationJumpTo_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function NavigationJumpTo_defineProperty(obj,key,value){return(key=function NavigationJumpTo_toPropertyKey(t){var i=function NavigationJumpTo_toPrimitive(t,r){if("object"!=NavigationJumpTo_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=NavigationJumpTo_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==NavigationJumpTo_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function NavigationJumpTo_slicedToArray(arr,i){return function NavigationJumpTo_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function NavigationJumpTo_iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function NavigationJumpTo_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return NavigationJumpTo_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return NavigationJumpTo_arrayLikeToArray(o,minLen)}(arr,i)||function NavigationJumpTo_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function NavigationJumpTo_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var NavigationJumpTo=(0,react.forwardRef)((function(props,ref){var items=props.items,indicatorColor=props.indicatorColor,_props$offsetTop=props.offsetTop,offsetTop=void 0===_props$offsetTop?0:_props$offsetTop,onChange=props.onChange,rest=_objectWithoutProperties(props,_excluded),_useState2=NavigationJumpTo_slicedToArray((0,react.useState)(!1),2),navItemClicked=_useState2[0],setNavItemClicked=_useState2[1],_useState4=NavigationJumpTo_slicedToArray((0,react.useState)(0),2),firstTabIndexInview=_useState4[0],setFirstTabIndexInview=_useState4[1],_useState6=NavigationJumpTo_slicedToArray((0,react.useState)(-1),2),emittedValue=_useState6[0],setEmittedValue=_useState6[1],sectionIsInView=function useInView(items){var _useState2=_slicedToArray((0,react.useState)({}),2),elements=_useState2[0],setElements=_useState2[1];return(0,react.useEffect)((function(){var observer=new IntersectionObserver((function observerCallback(entries){entries.forEach((function(entry,index){var name=entry.target.getAttribute("id")||index;setElements((function(prev){return _objectSpread(_objectSpread({},prev),{},_defineProperty({},name,{intersectionEntry:entry,isInView:entry.isIntersecting}))}))}))}));return items.forEach((function(item){item.elementRef.current&&observer.observe(item.elementRef.current)})),function(){observer.disconnect()}}),[items]),"undefined"!=typeof window&&window.IntersectionObserver?elements:items.map((function(item){return{el:item.elementRef,isInView:!1}}))}(items);(0,react.useEffect)((function(){items.forEach((function(item){if(offsetTop){var _item$elementRef$curr,_item$elementRef$curr2,wrapper=document.createElement("div");wrapper.style.position="relative";var hiddenDiv=document.createElement("div");hiddenDiv.style.height="".concat(offsetTop,"px"),hiddenDiv.style.top="-".concat(offsetTop,"px"),hiddenDiv.style.position="absolute",hiddenDiv.style.pointerEvents="none",hiddenDiv.setAttribute("id","".concat(null===(_item$elementRef$curr=item.elementRef.current)||void 0===_item$elementRef$curr?void 0:_item$elementRef$curr.getAttribute("id"),"-hiddenDiv")),wrapper.appendChild(hiddenDiv),null===(_item$elementRef$curr2=item.elementRef.current)||void 0===_item$elementRef$curr2||_item$elementRef$curr2.before(wrapper),item.elementRef.current&&wrapper.appendChild(item.elementRef.current)}}))}),[items,offsetTop]);var handleOnChange=(0,react.useCallback)((function(value){value!==emittedValue&&(null==onChange||onChange(value),setEmittedValue(value))}),[emittedValue,onChange]);return(0,react.useEffect)((function(){var sectionInView=Object.values(sectionIsInView).findIndex((function(section){return section.isInView}));sectionInView>-1&&!navItemClicked&&(setFirstTabIndexInview(sectionInView),handleOnChange(sectionInView))}),[handleOnChange,navItemClicked,sectionIsInView]),scrollStop((function(){setNavItemClicked(!1)})),(0,jsx_runtime.jsx)(StyledTabs,NavigationJumpTo_objectSpread(NavigationJumpTo_objectSpread({ref,orientation:"vertical",variant:"fullWidth",value:firstTabIndexInview,onChange:function handleChange(event,newValue){if(setNavItemClicked(!0),offsetTop){var _items$newValue,hiddenDiv=document.getElementById("".concat(null===(_items$newValue=items[newValue])||void 0===_items$newValue||null===(_items$newValue=_items$newValue.elementRef)||void 0===_items$newValue||null===(_items$newValue=_items$newValue.current)||void 0===_items$newValue?void 0:_items$newValue.getAttribute("id"),"-hiddenDiv"));null==hiddenDiv||hiddenDiv.scrollIntoView({behavior:"smooth",block:"start"})}else{var _items$newValue2;null===(_items$newValue2=items[newValue])||void 0===_items$newValue2||null===(_items$newValue2=_items$newValue2.elementRef)||void 0===_items$newValue2||null===(_items$newValue2=_items$newValue2.current)||void 0===_items$newValue2||_items$newValue2.scrollIntoView({behavior:"smooth",block:"start"})}setFirstTabIndexInview(newValue),handleOnChange(newValue)},"aria-label":"navigation-jump-to",sdsIndicatorColor:indicatorColor},rest),{},{children:items.map((function(_ref,index){var _elementRef$current,title=_ref.title,elementRef=_ref.elementRef;return(0,jsx_runtime.jsx)(StyledTab,NavigationJumpTo_objectSpread({label:title},function a11yProps(title,elementId){return{"aria-controls":elementId,id:"navigation-tab-".concat(title)}}((0,utils.fX)(title),(null===(_elementRef$current=elementRef.current)||void 0===_elementRef$current?void 0:_elementRef$current.getAttribute("id"))||"navigation-panel-".concat(index+1))),(0,utils.fX)(title))}))}))}));const core_NavigationJumpTo=NavigationJumpTo;try{NavigationJumpTo.displayName="NavigationJumpTo",NavigationJumpTo.__docgenInfo={description:"",displayName:"NavigationJumpTo",props:{component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},indicatorColor:{defaultValue:null,description:"",name:"indicatorColor",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"info"'},{value:'"positive"'},{value:'"notice"'},{value:'"negative"'},{value:'"beta"'}]}},items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"{ title: string; elementRef: MutableRefObject<HTMLElement | null>; }[]"}},offsetTop:{defaultValue:null,description:"",name:"offsetTop",required:!1,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}},sdsIndicatorColor:{defaultValue:null,description:"",name:"sdsIndicatorColor",required:!1,type:{name:"enum",value:[{value:'"accent"'},{value:'"info"'},{value:'"positive"'},{value:'"notice"'},{value:'"negative"'},{value:'"beta"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/NavigationJumpTo/index.tsx#NavigationJumpTo"]={docgenInfo:NavigationJumpTo.__docgenInfo,name:"NavigationJumpTo",path:"packages/components/src/core/NavigationJumpTo/index.tsx#NavigationJumpTo"})}catch(__react_docgen_typescript_loader_error){}}}]);