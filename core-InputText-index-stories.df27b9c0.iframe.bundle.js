"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[4673],{"./packages/components/src/core/InputText/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LivePreview:()=>LivePreview,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,FormControl=__webpack_require__("./node_modules/@mui/material/FormControl/FormControl.js"),react=__webpack_require__("./node_modules/react/index.js"),emotion_react_browser_esm=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),outlinedInputClasses=__webpack_require__("./node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js"),inputAdornmentClasses=__webpack_require__("./node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js"),buttonBaseClasses=__webpack_require__("./node_modules/@mui/material/ButtonBase/buttonBaseClasses.js"),TextField=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var sdsPropNames=["sdsStyle","sdsStage","sdsType","intent","hideLabel"],StyledLabel=(0,styled.ZP)("label")(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  display: block;\n  ","\n\n  ","\n"])),styles.GW,(function(props){var typography=(0,styles.cY)(props),spacings=(0,styles.Gr)(props);return"\n      font-family: ".concat(null==typography?void 0:typography.fontFamily,";\n      margin-bottom: ").concat(null==spacings?void 0:spacings.xxs,"px;\n    ")})),StyledInputBase=(0,styled.ZP)(TextField.Z,{shouldForwardProp:function shouldForwardProp(prop){return!sdsPropNames.includes(prop.toString())}})(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var intent=props.intent,sdsType=props.sdsType,sdsStage=props.sdsStage,disabled=props.disabled,spacings=(0,styles.Gr)(props),borders=(0,styles.W0)(props),corners=(0,styles.DV)(props);return(0,emotion_react_browser_esm.iv)(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n      margin-bottom: ","px;\n      margin-right: ","px;\n      min-width: 160px;\n      display: block;\n\n      ."," {\n        padding: ","px ","px;\n        height: 34px;\n        box-sizing: border-box;\n        background-color: #fff;\n\n        ."," {\n          border-radius: ","px;\n          border: ",";\n        }\n      }\n\n      .",":hover\n        ."," {\n        border: ",";\n      }\n\n      .",".","\n        ."," {\n        border: ",";\n      }\n\n      ","\n      ","\n      ","\n      ","\n      ","\n    "])),null==spacings?void 0:spacings.l,null==spacings?void 0:spacings.m,outlinedInputClasses.Z.inputSizeSmall,null==spacings?void 0:spacings.xs,null==spacings?void 0:spacings.l,outlinedInputClasses.Z.notchedOutline,null==corners?void 0:corners.m,null==borders?void 0:borders.gray[400],outlinedInputClasses.Z.root,outlinedInputClasses.Z.notchedOutline,null==borders?void 0:borders.gray[500],outlinedInputClasses.Z.root,outlinedInputClasses.Z.focused,outlinedInputClasses.Z.notchedOutline,null==borders?void 0:borders.primary[400],"textArea"===sdsType&&function textArea(props){var spacings=(0,styles.Gr)(props);return(0,emotion_react_browser_esm.iv)(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n    ."," {\n      padding: ","px;\n\n      > ."," {\n        padding: ","px ","px ","px;\n        resize: both;\n      }\n    }\n  "])),outlinedInputClasses.Z.multiline,null==spacings?void 0:spacings.xxs,outlinedInputClasses.Z.inputMultiline,null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.m,null==spacings?void 0:spacings.m)}(props),"error"===intent&&function error(props){var borders=(0,styles.W0)(props),colors=(0,styles.EC)(props);return(0,emotion_react_browser_esm.iv)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n    ."," ."," {\n      border: ",";\n    }\n\n    .",":hover\n      ."," {\n      border: ",";\n    }\n\n    .","."," {\n      ."," {\n        border: ",";\n      }\n\n      ."," .",":last-of-type {\n        cursor: default;\n        svg {\n          color: ",";\n        }\n      }\n    }\n  "])),outlinedInputClasses.Z.root,outlinedInputClasses.Z.notchedOutline,null==borders?void 0:borders.error[400],outlinedInputClasses.Z.root,outlinedInputClasses.Z.notchedOutline,null==borders?void 0:borders.error[400],outlinedInputClasses.Z.root,outlinedInputClasses.Z.focused,outlinedInputClasses.Z.notchedOutline,null==borders?void 0:borders.error[400],inputAdornmentClasses.Z.root,buttonBaseClasses.Z.root,null==colors?void 0:colors.gray[500])}(props),"warning"===intent&&function warning(props){var borders=(0,styles.W0)(props),colors=(0,styles.EC)(props);return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n    ."," ."," {\n      border: ",";\n    }\n\n    .",":hover\n      ."," {\n      border: ",";\n    }\n\n    .","."," {\n      ."," {\n        border: ",";\n      }\n\n      ."," .",":last-of-type {\n        cursor: default;\n        svg {\n          color: ",";\n        }\n      }\n    }\n  "])),outlinedInputClasses.Z.root,outlinedInputClasses.Z.notchedOutline,null==borders?void 0:borders.warning[400],outlinedInputClasses.Z.root,outlinedInputClasses.Z.notchedOutline,null==borders?void 0:borders.warning[400],outlinedInputClasses.Z.root,outlinedInputClasses.Z.focused,outlinedInputClasses.Z.notchedOutline,null==borders?void 0:borders.warning[400],inputAdornmentClasses.Z.root,buttonBaseClasses.Z.root,null==colors?void 0:colors.gray[500])}(props),disabled&&function disabledStyled(props){var borders=(0,styles.W0)(props),colors=(0,styles.EC)(props);return(0,emotion_react_browser_esm.iv)(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n    ."," {\n      ."," {\n        border: ",";\n      }\n\n      &:hover ."," {\n        border: ",";\n      }\n\n      &::placeholder {\n        color: ",";\n        opacity: 1;\n      }\n    }\n  "])),outlinedInputClasses.Z.disabled,outlinedInputClasses.Z.notchedOutline,null==borders?void 0:borders.gray[300],outlinedInputClasses.Z.notchedOutline,null==borders?void 0:borders.gray[300],null==colors?void 0:colors.gray[300])}(props),"userInput"===sdsStage&&function userInput(props){var intent=props.intent,borders=(0,styles.W0)(props),border="error"===intent?null==borders?void 0:borders.error[400]:"warning"===intent?null==borders?void 0:borders.warning[400]:null==borders?void 0:borders.primary[400];return(0,emotion_react_browser_esm.iv)(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n    ."," ."," {\n      border: ",";\n    }\n\n    .",":hover\n      ."," {\n      border: ",";\n    }\n  "])),outlinedInputClasses.Z.root,outlinedInputClasses.Z.notchedOutline,border,outlinedInputClasses.Z.root,outlinedInputClasses.Z.notchedOutline,border)}(props))})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["id","intent","label","placeholder","sdsType","hideLabel"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var InputText=(0,react.forwardRef)((function InputText(props,ref){var id=props.id,_props$intent=props.intent,intent=void 0===_props$intent?"default":_props$intent,label=props.label,placeholder=props.placeholder,sdsType=props.sdsType,hideLabel=props.hideLabel,rest=_objectWithoutProperties(props,_excluded),_useState2=_slicedToArray((0,react.useState)(!1),2),hasValue=_useState2[0],setHasValue=_useState2[1],inputProps={"aria-label":"".concat(label)};return id&&label?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[!hideLabel&&(0,jsx_runtime.jsx)(StyledLabel,{htmlFor:id,children:label}),(0,jsx_runtime.jsx)(StyledInputBase,_objectSpread({ref,inputProps,type:"text",multiline:"textArea"===sdsType,minRows:"textArea"===sdsType?4:2,id,intent,variant:"outlined",size:"small",placeholder,sdsStage:hasValue?"userInput":"default",sdsType,onChange:function handleChange(event){event.target.value?setHasValue(!0):setHasValue(!1)}},rest))]}):(console.error("Error: @czi-sds/components component InputText requires id and label props for accessibility."),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{}))}));const core_InputText=InputText;try{InputText.displayName="InputText",InputText.__docgenInfo={description:"",displayName:"InputText",props:{sdsType:{defaultValue:null,description:"",name:"sdsType",required:!1,type:{name:"enum",value:[{value:'"textField"'},{value:'"textArea"'}]}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"error"'}]}},margin:{defaultValue:{value:"'none'"},description:"If `dense` or `normal`, will adjust vertical spacing of this and contained components.",name:"margin",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"dense"'},{value:'"normal"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}},hideLabel:{defaultValue:null,description:"",name:"hideLabel",required:!1,type:{name:"boolean"}},sdsStage:{defaultValue:null,description:"",name:"sdsStage",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"userInput"'}]}},focused:{defaultValue:null,description:"If `true`, the component is displayed in focused state.",name:"focused",required:!1,type:{name:"boolean"}},hiddenLabel:{defaultValue:{value:"false"},description:"If `true`, the label is hidden.\nThis is used to increase density for a `FilledInput`.\nBe sure to add `aria-label` to the `input` element.",name:"hiddenLabel",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/InputText/index.tsx#InputText"]={docgenInfo:InputText.__docgenInfo,name:"InputText",path:"packages/components/src/core/InputText/index.tsx#InputText"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_LivePreview$paramete,_LivePreview$paramete2,_Test$parameters,_Test$parameters2;function index_stories_typeof(o){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},index_stories_typeof(o)}function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(arg){var key=function index_stories_toPrimitive(input,hint){if("object"!==index_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==index_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===index_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}const index_stories={argTypes:{disabled:{control:{type:"boolean"}},hideLabel:{control:{type:"boolean"}},id:{control:{type:"text"},required:!0},intent:{control:{type:"radio"},options:["default","error","warning"]},label:{control:{type:"text"},required:!0},placeholder:{control:{type:"text"}},sdsStage:{control:{type:"radio"},options:["default","userInput"]},sdsType:{control:{type:"radio"},options:["textField","textArea"]}},component:function InputText(props){var id=props.id,intent=props.intent,disabled=props.disabled,hideLabel=props.hideLabel,placeholder=props.placeholder,label=props.label,sdsType=props.sdsType,sdsStage=props.sdsStage;return(0,jsx_runtime.jsx)(core_InputText,{id,sdsType,sdsStage,label,placeholder,intent,hideLabel,disabled,name:"input-text-name",autoComplete:"off"})},title:"Inputs/InputText"};var Default={args:{disabled:!1,hideLabel:!1,id:"Test",label:"Label",placeholder:"Value",sdsType:"textField"}},storyRow={alignItems:"flex-start",display:"flex",flexDirection:"row",gap:"24px"},LivePreviewDemo=function LivePreviewDemo(props){return(0,jsx_runtime.jsxs)("div",{style:storyRow,children:[(0,jsx_runtime.jsx)(core_InputText,index_stories_objectSpread(index_stories_objectSpread({},props),{},{id:"textFieldPreview",sdsType:"textField",label:"Label",hideLabel:!0,placeholder:"Value",style:{width:"200px"}})),(0,jsx_runtime.jsx)(core_InputText,index_stories_objectSpread(index_stories_objectSpread({},props),{},{id:"textAreaPreview",sdsType:"textArea",label:"Label",hideLabel:!0,placeholder:"Value",style:{minWidth:"200px"},inputProps:{style:{minWidth:"200px"}}}))]})},LivePreview={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(LivePreviewDemo,index_stories_objectSpread({},args))}},TestDemo=function TestDemo(props){return(0,jsx_runtime.jsxs)(FormControl.Z,{children:[(0,jsx_runtime.jsx)(core_InputText,index_stories_objectSpread(index_stories_objectSpread({},props),{},{id:"test-textField",sdsType:"textField",label:"Label",hideLabel:!1,placeholder:"Value","data-testid":"inputTextBase"})),(0,jsx_runtime.jsx)(core_InputText,{sdsType:"textField",hideLabel:!1,"data-testid":"inputTextFail"}),(0,jsx_runtime.jsx)(core_InputText,{id:"test-hide-label",sdsType:"textField",label:"Hidden Label",hideLabel:!0,"data-testid":"inputTextHideLabel"}),(0,jsx_runtime.jsx)(core_InputText,{id:"test-textArea",sdsType:"textArea",label:"Label",hideLabel:!1,placeholder:"Value","data-testid":"inputTextArea"})]})},Test={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(TestDemo,index_stories_objectSpread({},args))}};Default.parameters=index_stories_objectSpread(index_stories_objectSpread({},Default.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    disabled: false,\n    hideLabel: false,\n    id: "Test",\n    label: "Label",\n    placeholder: "Value",\n    sdsType: "textField"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),LivePreview.parameters=index_stories_objectSpread(index_stories_objectSpread({},LivePreview.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_LivePreview$paramete=LivePreview.parameters)||void 0===_LivePreview$paramete?void 0:_LivePreview$paramete.docs),{},{source:index_stories_objectSpread({originalSource:"{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}"},null===(_LivePreview$paramete2=LivePreview.parameters)||void 0===_LivePreview$paramete2||null===(_LivePreview$paramete2=_LivePreview$paramete2.docs)||void 0===_LivePreview$paramete2?void 0:_LivePreview$paramete2.source)})}),Test.parameters=index_stories_objectSpread(index_stories_objectSpread({},Test.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:index_stories_objectSpread({originalSource:"{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} />\n}"},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2=_Test$parameters2.docs)||void 0===_Test$parameters2?void 0:_Test$parameters2.source)})});var __namedExportsOrder=["Default","LivePreview","Test"]}}]);