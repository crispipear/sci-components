"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[6749],{"./packages/components/src/core/InputCheckbox/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LivePreview:()=>LivePreview,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _rect,Box=__webpack_require__("./node_modules/@mui/material/Box/Box.js"),react=__webpack_require__("./node_modules/react/index.js"),SvgIcon=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgIconCheckboxChecked=function SvgIconCheckboxChecked(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16},props),_rect||(_rect=react.createElement("rect",{width:16,height:16,rx:2})),react.createElement("path",{fill:props.fillcontrast,fillRule:"evenodd",d:"M11.868 3.722a.558.558 0 0 0-.346.239l-4.486 6.083-2.32-2.62c-.148-.206-.393-.286-.615-.186-.21.095-.354.33-.382.606-.027.272.063.544.238.704l2.733 3.09c.235.263.595.24.808-.048l4.875-6.612c.167-.22.21-.553.11-.833-.107-.294-.353-.472-.615-.423Z",clipRule:"evenodd"}))};var IconCheckboxIndeterminate_rect;function IconCheckboxIndeterminate_extends(){return IconCheckboxIndeterminate_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},IconCheckboxIndeterminate_extends.apply(this,arguments)}var SvgIconCheckboxIndeterminate=function SvgIconCheckboxIndeterminate(props){return react.createElement("svg",IconCheckboxIndeterminate_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16},props),IconCheckboxIndeterminate_rect||(IconCheckboxIndeterminate_rect=react.createElement("rect",{width:16,height:16,rx:2})),react.createElement("path",{fill:props.fillcontrast,fillRule:"evenodd",d:"M13 8a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1Z",clipRule:"evenodd"}))};var _path;function IconCheckboxUnchecked_extends(){return IconCheckboxUnchecked_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},IconCheckboxUnchecked_extends.apply(this,arguments)}var SvgIconCheckboxUnchecked=function SvgIconCheckboxUnchecked(props){return react.createElement("svg",IconCheckboxUnchecked_extends({xmlns:"http://www.w3.org/2000/svg",width:16,height:16},props),react.createElement("path",{fill:props.fillcontrast,d:"M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Z"}),_path||(_path=react.createElement("path",{fillRule:"evenodd",d:"M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1ZM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Z",clipRule:"evenodd"})))};var _templateObject,_templateObject2,FormControlLabel=__webpack_require__("./node_modules/@mui/material/FormControlLabel/FormControlLabel.js"),Checkbox=__webpack_require__("./node_modules/@mui/material/Checkbox/Checkbox.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts"),theme=__webpack_require__("./packages/components/src/core/styles/common/selectors/theme.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledFormControlLabel=(0,styled.ZP)(FormControlLabel.Z)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  position: relative;\n  z-index: 0;\n\n  &:after {\n    ","\n    left:34px;\n    position: absolute;\n    top: 30px;\n    z-index: -1;\n\n    ","\n  }\n"])),styles.mA,(function(props){var caption=props.caption,content=void 0!==caption?caption:"",typography=(0,theme.cY)(props),colors=(0,theme.EC)(props);return'\n        content: "'.concat(content,'";\n        font-family: ').concat(null==typography?void 0:typography.fontFamily,";\n        color: ").concat(null==colors?void 0:colors.gray[500],";\n      ")})),StyledCheckbox=(0,styled.ZP)(Checkbox.Z)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var colors=(0,theme.EC)(props),iconSizes=(0,theme.Dk)(props);return"\n      color: ".concat(null==colors?void 0:colors.gray[400],";\n      &:hover {\n        color: ").concat(null==colors?void 0:colors.gray[500],";\n        background-color: transparent;\n      }\n      &.Mui-disabled {\n        color: ").concat(null==colors?void 0:colors.gray[300],";\n      }\n      &.Mui-checked {\n        color: ").concat(null==colors?void 0:colors.primary[400],";\n        &:hover {\n          color: ").concat(null==colors?void 0:colors.primary[500],";\n          background-color: transparent;\n        }\n        &.Mui-disabled {\n          color: ").concat(null==colors?void 0:colors.primary[300],"\n        }\n      }\n\n      .MuiSvgIcon-root {\n        height: ").concat(null==iconSizes?void 0:iconSizes.input.height,"px;\n        width: ").concat(null==iconSizes?void 0:iconSizes.input.width,"px;\n      }\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["caption","checkboxProps","disabled","label","stage","value"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var InputCheckbox=function InputCheckbox(props){var newProps,caption=props.caption,checkboxProps=props.checkboxProps,disabled=props.disabled,label=props.label,stage=props.stage,value=props.value,rest=_objectWithoutProperties(props,_excluded);switch(stage){case"checked":newProps=_objectSpread(_objectSpread({},rest),{},{checked:!0,color:"primary"});break;case"unchecked":newProps=_objectSpread(_objectSpread({},rest),{},{checked:!1,color:"default"});break;case"indeterminate":newProps=_objectSpread(_objectSpread({},rest),{},{checked:!0,color:"primary",indeterminate:!0});break;default:newProps=rest}return(0,jsx_runtime.jsx)(StyledFormControlLabel,{caption,control:(0,jsx_runtime.jsx)(StyledCheckbox,_objectSpread(_objectSpread({disabled,checkedIcon:(0,jsx_runtime.jsx)(SvgIcon.Z,{fillcontrast:"white",component:SvgIconCheckboxChecked,viewBox:"0 0 16 16"}),icon:(0,jsx_runtime.jsx)(SvgIcon.Z,{fillcontrast:"white",component:SvgIconCheckboxUnchecked,viewBox:"0 0 16 16"}),indeterminateIcon:(0,jsx_runtime.jsx)(SvgIcon.Z,{fillcontrast:"white",component:SvgIconCheckboxIndeterminate,viewBox:"0 0 16 16"})},checkboxProps),newProps)),label,value})};const core_InputCheckbox=InputCheckbox;try{InputCheckbox.displayName="InputCheckbox",InputCheckbox.__docgenInfo={description:"",displayName:"InputCheckbox",props:{checkboxProps:{defaultValue:null,description:"",name:"checkboxProps",required:!1,type:{name:"Partial<CheckboxProps>"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},stage:{defaultValue:null,description:"",name:"stage",required:!1,type:{name:"enum",value:[{value:'"indeterminate"'},{value:'"checked"'},{value:'"unchecked"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLButtonElement | null) => void) | RefObject<HTMLButtonElement> | null"}},action:{defaultValue:null,description:"A ref for imperative actions.\nIt currently only supports `focusVisible()` action.",name:"action",required:!1,type:{name:"Ref<ButtonBaseActions>"}},centerRipple:{defaultValue:{value:"false"},description:"If `true`, the ripples are centered.\nThey won't start at the cursor interaction position.",name:"centerRipple",required:!1,type:{name:"boolean"}},disableTouchRipple:{defaultValue:{value:"false"},description:"If `true`, the touch ripple effect is disabled.",name:"disableTouchRipple",required:!1,type:{name:"boolean"}},focusRipple:{defaultValue:{value:"false"},description:"If `true`, the base button will have a keyboard focus ripple.",name:"focusRipple",required:!1,type:{name:"boolean"}},focusVisibleClassName:{defaultValue:null,description:"This prop can help identify which element has keyboard focus.\nThe class name will be applied when the element gains the focus through keyboard interaction.\nIt's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).\nThe rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).\nA [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components\nif needed.",name:"focusVisibleClassName",required:!1,type:{name:"string"}},LinkComponent:{defaultValue:{value:"'a'"},description:"The component used to render a link when the `href` prop is provided.",name:"LinkComponent",required:!1,type:{name:"ElementType<any>"}},onFocusVisible:{defaultValue:null,description:"Callback fired when the component is focused with a keyboard.\nWe trigger a `onFocus` callback too.",name:"onFocusVisible",required:!1,type:{name:"FocusEventHandler<any>"}},TouchRippleProps:{defaultValue:null,description:"Props applied to the `TouchRipple` element.",name:"TouchRippleProps",required:!1,type:{name:"Partial<TouchRippleProps>"}},touchRippleRef:{defaultValue:null,description:"A ref that points to the `TouchRipple` element.",name:"touchRippleRef",required:!1,type:{name:"Ref<TouchRippleActions>"}},caption:{defaultValue:null,description:"",name:"caption",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/InputCheckbox/index.tsx#InputCheckbox"]={docgenInfo:InputCheckbox.__docgenInfo,name:"InputCheckbox",path:"packages/components/src/core/InputCheckbox/index.tsx#InputCheckbox"})}catch(__react_docgen_typescript_loader_error){}function index_stories_typeof(o){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},index_stories_typeof(o)}var _Default$parameters,_Default$parameters2,_LivePreview$paramete,_LivePreview$paramete2,_Test$parameters,_Test$parameters2;function index_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function index_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?index_stories_ownKeys(Object(t),!0).forEach((function(r){index_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):index_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(arg){var key=function index_stories_toPrimitive(input,hint){if("object"!==index_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==index_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===index_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var index_stories_InputCheckbox=function InputCheckbox(props){var disabled=props.disabled,_React$useState2=_slicedToArray(react.useState(!0),2),checked=_React$useState2[0],setChecked=_React$useState2[1];return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(core_InputCheckbox,index_stories_objectSpread({disabled,onChange:function handleChange(){return setChecked((function(prevState){return!prevState}))},stage:checked?"unchecked":"checked"},props))})};const index_stories={argTypes:{caption:{control:{type:"text"}},label:{control:{type:"text"}},stage:{control:{type:"radio"},options:["checked","unchecked","indeterminate"]}},component:index_stories_InputCheckbox,title:"Inputs/InputCheckbox"};var Default={args:{caption:"Caption",label:"Label"}},CheckboxLabelDemo=function CheckboxLabelDemo(props){var caption=props.caption,label=props.label,disabled=props.disabled;return(0,jsx_runtime.jsx)("div",{children:(0,jsx_runtime.jsx)(core_InputCheckbox,index_stories_objectSpread({caption,label,disabled,value:"Demo"},props))})},IndeterminateDemo=function IndeterminateDemo(){var _React$useState4=_slicedToArray(react.useState([!0,!1]),2),checked=_React$useState4[0],setChecked=_React$useState4[1],children=(0,jsx_runtime.jsxs)(Box.Z,{sx:{display:"flex",flexDirection:"column",ml:3},children:[(0,jsx_runtime.jsx)(core_InputCheckbox,{label:"Child 1",checkboxProps:{checked:checked[0],onChange:function handleChange2(event){setChecked([event.target.checked,checked[1]])}}}),(0,jsx_runtime.jsx)(core_InputCheckbox,{label:"Child 2",checkboxProps:{checked:checked[1],onChange:function handleChange3(event){setChecked([checked[0],event.target.checked])}}})]});return(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(core_InputCheckbox,{label:"Parent",checkboxProps:{checked:checked[0]&&checked[1],indeterminate:checked[0]!==checked[1],onChange:function handleChange1(event){setChecked([event.target.checked,event.target.checked])}}}),children]})},LivePreviewDemo=function LivePreviewDemo(){return(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gridColumnGap:"24px",gridRowGap:"0px",gridTemplateColumns:"repeat(3, 70px)",gridTemplateRows:"1fr"},children:[(0,jsx_runtime.jsx)("div",{style:{gridArea:"1 / 1 / 1 / 2"},children:(0,jsx_runtime.jsx)(CheckboxLabelDemo,{label:"Label",disabled:!1})}),(0,jsx_runtime.jsx)("div",{style:{gridArea:"1 / 2 / 1 / 2"},children:(0,jsx_runtime.jsx)(index_stories_InputCheckbox,{disabled:!0,label:"Label"})}),(0,jsx_runtime.jsx)("div",{style:{gridArea:"1 / 3 / 1 / 3"},children:(0,jsx_runtime.jsx)(IndeterminateDemo,{})})]})},LivePreview={parameters:{controls:{exclude:["caption","label","stage"]},snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(LivePreviewDemo,index_stories_objectSpread({},args))}},TestDemo=function TestDemo(){return(0,jsx_runtime.jsxs)("div",{style:{display:"grid",gridColumnGap:"10px",gridRowGap:"0px",gridTemplateColumns:"repeat(2, 100px)",gridTemplateRows:"1fr"},children:[(0,jsx_runtime.jsx)("div",{style:{gridArea:"1 / 1 / 1 / 2"},children:(0,jsx_runtime.jsx)(CheckboxLabelDemo,{caption:"Caption",label:"Lable A",disabled:!1,"data-testid":"labelCheckbox"})}),(0,jsx_runtime.jsx)("div",{style:{gridArea:"1 / 2 / 1 / 2"},children:(0,jsx_runtime.jsx)(index_stories_InputCheckbox,{"data-testid":"checkbox",label:"Label"})})]})},Test={args:{id:"test-story"},parameters:{controls:{exclude:["caption","label","id","stage"]},snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(TestDemo,index_stories_objectSpread(index_stories_objectSpread({},args),{},{"data-testid":"input-checkbox"}))}};Default.parameters=index_stories_objectSpread(index_stories_objectSpread({},Default.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    caption: "Caption",\n    label: "Label"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),LivePreview.parameters=index_stories_objectSpread(index_stories_objectSpread({},LivePreview.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_LivePreview$paramete=LivePreview.parameters)||void 0===_LivePreview$paramete?void 0:_LivePreview$paramete.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  parameters: {\n    controls: {\n      exclude: ["caption", "label", "stage"]\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}'},null===(_LivePreview$paramete2=LivePreview.parameters)||void 0===_LivePreview$paramete2||null===(_LivePreview$paramete2=_LivePreview$paramete2.docs)||void 0===_LivePreview$paramete2?void 0:_LivePreview$paramete2.source)})}),Test.parameters=index_stories_objectSpread(index_stories_objectSpread({},Test.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    id: testId\n  },\n  parameters: {\n    controls: {\n      exclude: ["caption", "label", "id", "stage"]\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} data-testid="input-checkbox" />\n}'},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2=_Test$parameters2.docs)||void 0===_Test$parameters2?void 0:_Test$parameters2.source)})});var __namedExportsOrder=["Default","LivePreview","Test"]}}]);