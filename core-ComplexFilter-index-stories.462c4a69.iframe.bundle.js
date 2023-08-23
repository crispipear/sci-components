"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[747],{"./node_modules/@mui/base/ClickAwayListener/ClickAwayListener.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@mui/utils/esm/useForkRef.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/utils/esm/useEventCallback.js"),_mui_utils__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/utils/esm/ownerDocument.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function mapEventPropToEvent(eventProp){return eventProp.substring(2).toLowerCase()}const __WEBPACK_DEFAULT_EXPORT__=function ClickAwayListener(props){const{children,disableReactTree=!1,mouseEvent="onClick",onClickAway,touchEvent="onTouchEnd"}=props,movedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),nodeRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),activatedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1),syntheticEventRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>(setTimeout((()=>{activatedRef.current=!0}),0),()=>{activatedRef.current=!1})),[]);const handleRef=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_2__.Z)(children.ref,nodeRef),handleClickAway=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_3__.Z)((event=>{const insideReactTree=syntheticEventRef.current;syntheticEventRef.current=!1;const doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current);if(!activatedRef.current||!nodeRef.current||"clientX"in event&&function clickedRootScrollbar(event,doc){return doc.documentElement.clientWidth<event.clientX||doc.documentElement.clientHeight<event.clientY}(event,doc))return;if(movedRef.current)return void(movedRef.current=!1);let insideDOM;insideDOM=event.composedPath?event.composedPath().indexOf(nodeRef.current)>-1:!doc.documentElement.contains(event.target)||nodeRef.current.contains(event.target),insideDOM||!disableReactTree&&insideReactTree||onClickAway(event)})),createHandleSynthetic=handlerName=>event=>{syntheticEventRef.current=!0;const childrenPropsHandler=children.props[handlerName];childrenPropsHandler&&childrenPropsHandler(event)},childrenProps={ref:handleRef};return!1!==touchEvent&&(childrenProps[touchEvent]=createHandleSynthetic(touchEvent)),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(!1!==touchEvent){const mappedTouchEvent=mapEventPropToEvent(touchEvent),doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current),handleTouchMove=()=>{movedRef.current=!0};return doc.addEventListener(mappedTouchEvent,handleClickAway),doc.addEventListener("touchmove",handleTouchMove),()=>{doc.removeEventListener(mappedTouchEvent,handleClickAway),doc.removeEventListener("touchmove",handleTouchMove)}}}),[handleClickAway,touchEvent]),!1!==mouseEvent&&(childrenProps[mouseEvent]=createHandleSynthetic(mouseEvent)),react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{if(!1!==mouseEvent){const mappedMouseEvent=mapEventPropToEvent(mouseEvent),doc=(0,_mui_utils__WEBPACK_IMPORTED_MODULE_4__.Z)(nodeRef.current);return doc.addEventListener(mappedMouseEvent,handleClickAway),()=>{doc.removeEventListener(mappedMouseEvent,handleClickAway)}}}),[handleClickAway,mouseEvent]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children,childrenProps)})}},"./node_modules/@mui/icons-material/esm/Clear.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/utils/createSvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__=(0,_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__.Z)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear")},"./packages/components/src/core/ComplexFilter/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,LivePreview:()=>LivePreview,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var react=__webpack_require__("./node_modules/react/index.js"),utils=__webpack_require__("./packages/components/src/common/utils.ts"),GITHUB_LABELS=__webpack_require__("./packages/components/src/core/DropdownMenu/GITHUB_LABELS.tsx"),DropdownMenu=__webpack_require__("./packages/components/src/core/DropdownMenu/index.tsx"),core_InputDropdown=(__webpack_require__("./packages/components/src/core/DropdownMenu/style.ts"),__webpack_require__("./packages/components/src/core/InputDropdown/index.tsx")),TagFilter=__webpack_require__("./packages/components/src/core/TagFilter/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Chips=function Chips(_ref){var value=_ref.value,_ref$multiple=_ref.multiple,multiple=void 0!==_ref$multiple&&_ref$multiple,_onDelete=_ref.onDelete;if(!value)return null;if(!multiple){var name=value.name;return(0,jsx_runtime.jsx)(TagFilter.Z,{label:name,onDelete:_onDelete})}return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:value.map((function(item){var name=item.name;return(0,jsx_runtime.jsx)(TagFilter.Z,{label:name,onDelete:function onDelete(){return _onDelete(item)}},name)}))})};const components_Chips=Chips;try{Chips.displayName="Chips",Chips.__docgenInfo={description:"",displayName:"Chips",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"any"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},onDelete:{defaultValue:null,description:"",name:"onDelete",required:!0,type:{name:"(option: DefaultDropdownMenuOption) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/ComplexFilter/components/Chips/index.tsx#Chips"]={docgenInfo:Chips.__docgenInfo,name:"Chips",path:"packages/components/src/core/ComplexFilter/components/Chips/index.tsx#Chips"})}catch(__react_docgen_typescript_loader_error){}var _templateObject,_templateObject2,styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var Wrapper=(0,styled.ZP)("div")(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  min-width: 150px;\n"]))),StyledChipsWrapper=(0,styled.ZP)("div")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var spacings=(0,styles.Gr)(props);return"\n      margin-top: ".concat(null==spacings?void 0:spacings.s,"px;\n    ")}));function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["options","label","multiple","search","onChange","DropdownMenuProps","InputDropdownProps","value","PopperComponent","InputDropdownComponent","isTriggerChangeOnOptionClick"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ComplexFilter=function ComplexFilter(_ref){var options=_ref.options,_ref$label=_ref.label,label=void 0===_ref$label?"":_ref$label,_ref$multiple=_ref.multiple,multiple=void 0!==_ref$multiple&&_ref$multiple,_ref$search=_ref.search,search=void 0!==_ref$search&&_ref$search,onChange=_ref.onChange,_ref$DropdownMenuProp=_ref.DropdownMenuProps,DropdownMenuProps=void 0===_ref$DropdownMenuProp?{}:_ref$DropdownMenuProp,_ref$InputDropdownPro=_ref.InputDropdownProps,InputDropdownProps=void 0===_ref$InputDropdownPro?{sdsStyle:"minimal"}:_ref$InputDropdownPro,propValue=_ref.value,PopperComponent=_ref.PopperComponent,_ref$InputDropdownCom=_ref.InputDropdownComponent,InputDropdownComponent=void 0===_ref$InputDropdownCom?core_InputDropdown.Z:_ref$InputDropdownCom,_ref$isTriggerChangeO=_ref.isTriggerChangeOnOptionClick,isTriggerChangeOnOptionClick=void 0!==_ref$isTriggerChangeO&&_ref$isTriggerChangeO,rest=_objectWithoutProperties(_ref,_excluded),isControlled=void 0!==propValue,_useState2=_slicedToArray((0,react.useState)(!1),2),open=_useState2[0],setOpen=_useState2[1],_useState4=_slicedToArray((0,react.useState)(null),2),anchorEl=_useState4[0],setAnchorEl=_useState4[1],_useState6=_slicedToArray((0,react.useState)(getInitialValue()),2),value=_useState6[0],setValue=_useState6[1],_useState8=_slicedToArray((0,react.useState)(getInitialValue()),2),pendingValue=_useState8[0],setPendingValue=_useState8[1];return(0,react.useEffect)((function(){onChange(value),setPendingValue(value)}),[value]),(0,react.useEffect)((function(){isControlled&&setValue(propValue)}),[propValue]),(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Wrapper,_objectSpread(_objectSpread({},rest),{},{children:[(0,jsx_runtime.jsx)(InputDropdownComponent,_objectSpread({label,onClick:function handleClick(event){open?(multiple&&setValue(pendingValue),setOpen(!1),anchorEl&&anchorEl.focus(),setAnchorEl(null)):(multiple&&setPendingValue(value),setAnchorEl(event.currentTarget),setOpen(!0))},sdsStage:open?"userInput":"default"},InputDropdownProps)),(0,jsx_runtime.jsx)(StyledChipsWrapper,{children:(0,jsx_runtime.jsx)(components_Chips,{value,multiple,onDelete:function handleDelete(option){if(!multiple)return setValue(null);var newValue=(null==value?void 0:value.filter((function(item){return item!==option})))||null;setValue(newValue)}})})]})),(0,jsx_runtime.jsx)(DropdownMenu.Z,_objectSpread({anchorEl,open,onClose:function handleMenuSelectClose(event,reason){["escape","select-option"].includes(reason)&&handleClose()},search,multiple,value:multiple?pendingValue:value,onChange:function handleChange(_,newValue){if(multiple)return isTriggerChangeOnOptionClick?(setPendingValue(newValue),setValue(newValue)):setPendingValue(newValue);setValue(newValue),setOpen(!1)},disableCloseOnSelect:multiple,options,PopperComponent,PopperBaseProps:{sx:{minWidth:250}},onClickAway:handleClose},DropdownMenuProps))]});function handleClose(){open&&(setOpen(!1),multiple&&setValue(pendingValue))}function getInitialValue(){return isControlled?propValue:multiple?[]:null}};const core_ComplexFilter=ComplexFilter;try{InputDropdown.displayName="InputDropdown",InputDropdown.__docgenInfo={description:"",displayName:"InputDropdown",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},intent:{defaultValue:null,description:"",name:"intent",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"warning"'},{value:'"error"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLElement, MouseEvent>) => void) & MouseEventHandler<HTMLButtonElement>"}},state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"open"'}]}},sdsStage:{defaultValue:null,description:"",name:"sdsStage",required:!0,type:{name:"enum",value:[{value:'"default"'},{value:'"userInput"'}]}},sdsStyle:{defaultValue:null,description:"",name:"sdsStyle",required:!1,type:{name:"enum",value:[{value:'"rounded"'},{value:'"square"'},{value:'"minimal"'}]}},sdsType:{defaultValue:null,description:"",name:"sdsType",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"value"'}]}},multiple:{defaultValue:null,description:"",name:"multiple",required:!1,type:{name:"boolean"}},details:{defaultValue:null,description:"",name:"details",required:!1,type:{name:"ReactNode"}},counter:{defaultValue:null,description:"",name:"counter",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"ReactNode"}},shouldTruncateMinimalDetails:{defaultValue:null,description:"",name:"shouldTruncateMinimalDetails",required:!1,type:{name:"boolean"}},shouldPutAColonAfterLabel:{defaultValue:null,description:"",name:"shouldPutAColonAfterLabel",required:!1,type:{name:"boolean"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"SDSTheme"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/ComplexFilter/index.tsx#InputDropdown"]={docgenInfo:InputDropdown.__docgenInfo,name:"InputDropdown",path:"packages/components/src/core/ComplexFilter/index.tsx#InputDropdown"})}catch(__react_docgen_typescript_loader_error){}try{StyledPopper.displayName="StyledPopper",StyledPopper.__docgenInfo={description:"",displayName:"StyledPopper",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},component:{defaultValue:null,description:"The component used for the root node.\nEither a string to use a HTML element or a component.",name:"component",required:!1,type:{name:"ElementType<any>"}},components:{defaultValue:{value:"{}"},description:"The components used for each slot inside the Popper.\nEither a string to use a HTML element or a component.",name:"components",required:!1,type:{name:"{ Root?: ElementType<any>; }"}},componentsProps:{defaultValue:{value:"{}"},description:"The props used for each slot inside the Popper.",name:"componentsProps",required:!1,type:{name:'{ root?: SlotComponentProps<"div", PopperRootSlotPropsOverrides, PopperOwnProps>; }'}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/ComplexFilter/index.tsx#StyledPopper"]={docgenInfo:StyledPopper.__docgenInfo,name:"StyledPopper",path:"packages/components/src/core/ComplexFilter/index.tsx#StyledPopper"})}catch(__react_docgen_typescript_loader_error){}try{ComplexFilter.displayName="ComplexFilter",ComplexFilter.__docgenInfo={description:"",displayName:"ComplexFilter",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"ReactNode"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DefaultDropdownMenuOption[]"}},multiple:{defaultValue:{value:"false"},description:"",name:"multiple",required:!1,type:{name:"boolean"}},search:{defaultValue:{value:"false"},description:"",name:"search",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(options: Value<DefaultDropdownMenuOption, Multiple>) => void"}},DropdownMenuProps:{defaultValue:{value:"{}"},description:"",name:"DropdownMenuProps",required:!1,type:{name:"Partial<(<T extends DefaultDropdownMenuOption, Multiple extends boolean = undefined, DisableClearable extends boolean = undefined, FreeSolo extends boolean | undefined = undefined>(props: DropdownMenuProps<T, Multiple, DisableClearable, FreeSolo>) => Element)> | undefined"}},InputDropdownProps:{defaultValue:{value:'{ sdsStyle: "minimal" }'},description:"",name:"InputDropdownProps",required:!1,type:{name:"Partial<InputDropdownProps>"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"DefaultDropdownMenuOption | DefaultDropdownMenuOption[] | null"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},PopperComponent:{defaultValue:null,description:"",name:"PopperComponent",required:!1,type:{name:'StyledComponent<Omit<PopperProps<"div">, "direction"> & { component?: ElementType<any>; components?: { Root?: ElementType<any>; } | undefined; componentsProps?: { ...; } | undefined; sx?: SxProps<...> | undefined; } & RefAttributes<...> & MUIStyledCommonProps<...>, {}, {}> | undefined'}},InputDropdownComponent:{defaultValue:null,description:"",name:"InputDropdownComponent",required:!1,type:{name:"((props: InputDropdownProps) => Element)"}},isTriggerChangeOnOptionClick:{defaultValue:{value:"false"},description:"",name:"isTriggerChangeOnOptionClick",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/ComplexFilter/index.tsx#ComplexFilter"]={docgenInfo:ComplexFilter.__docgenInfo,name:"ComplexFilter",path:"packages/components/src/core/ComplexFilter/index.tsx#ComplexFilter"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_LivePreview$paramete,_LivePreview$paramete2,_Test$parameters,_Test$parameters2;function index_stories_typeof(obj){return index_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},index_stories_typeof(obj)}function index_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function index_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?index_stories_ownKeys(Object(source),!0).forEach((function(key){index_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):index_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function index_stories_defineProperty(obj,key,value){return(key=function index_stories_toPropertyKey(arg){var key=function index_stories_toPrimitive(input,hint){if("object"!==index_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==index_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===index_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var onChangeOptions=[utils.Z,function(value){console.log(value)}];const index_stories={argTypes:{isTriggerChangeOnOptionClick:{control:{type:"boolean"}},label:{control:{type:"text"}},multiple:{control:{type:"boolean"}},onChange:{control:{labels:["Noop","console.log(value)"],type:"select"},mapping:onChangeOptions,options:Object.keys(onChangeOptions)},search:{control:{type:"boolean"}}},component:function ComplexFilter(props){return(0,jsx_runtime.jsx)(core_ComplexFilter,index_stories_objectSpread({label:"Click Target",onChange:utils.Z,options:GITHUB_LABELS.j,DropdownMenuProps:{groupBy:function groupBy(option){return option.section}}},props))},title:"ComplexFilter"};var Default={args:{isTriggerChangeOnOptionClick:!1,label:"Click Target",multiple:!0,onChange:onChangeOptions[1],search:!0}},livePreviewStyles={display:"grid",gridColumnGap:30,gridTemplateColumns:"repeat(3, min-content)"},LivePreviewDemo=function LivePreviewDemo(){return(0,jsx_runtime.jsxs)("div",{style:livePreviewStyles,children:[(0,jsx_runtime.jsx)("div",{style:{gridArea:"1/1/2/2"},children:(0,jsx_runtime.jsx)(core_ComplexFilter,{DropdownMenuProps:{PopperBaseProps:{sx:{width:160}}},label:"Filter Label",multiple:!1,search:!1,onChange:utils.Z,options:LIVE_PREVIEW_OPTIONS})}),(0,jsx_runtime.jsx)("div",{style:{gridArea:"1/2/2/3"},children:(0,jsx_runtime.jsx)(core_ComplexFilter,{DropdownMenuProps:{PopperBaseProps:{sx:{width:160}}},label:"Filter Label",multiple:!0,search:!1,onChange:utils.Z,options:LIVE_PREVIEW_OPTIONS})})]})},LivePreview={args:{keepSearchOnSelect:!0,multiple:!1,search:!1},parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(LivePreviewDemo,index_stories_objectSpread({},args))}},LIVE_PREVIEW_OPTIONS=[{name:"Filter Item 1"},{name:"Filter Item 2"},{name:"Filter Item 3"}],TestDemo=function TestDemo(props){return(0,jsx_runtime.jsx)(core_ComplexFilter,index_stories_objectSpread({"data-testid":"complex-filter",label:"Click Target",onChange:utils.Z,options:GITHUB_LABELS.j},props))},Test={parameters:{snapshot:{skip:!0}},render:function render(args){return(0,jsx_runtime.jsx)(TestDemo,index_stories_objectSpread({},args))}};Default.parameters=index_stories_objectSpread(index_stories_objectSpread({},Default.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:index_stories_objectSpread({originalSource:'{\n  args: {\n    isTriggerChangeOnOptionClick: false,\n    label: "Click Target",\n    multiple: true,\n    onChange: onChangeOptions[1],\n    search: true\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),LivePreview.parameters=index_stories_objectSpread(index_stories_objectSpread({},LivePreview.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_LivePreview$paramete=LivePreview.parameters)||void 0===_LivePreview$paramete?void 0:_LivePreview$paramete.docs),{},{source:index_stories_objectSpread({originalSource:"{\n  args: {\n    keepSearchOnSelect: true,\n    multiple: false,\n    search: false\n  },\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <LivePreviewDemo {...args} />\n}"},null===(_LivePreview$paramete2=LivePreview.parameters)||void 0===_LivePreview$paramete2||null===(_LivePreview$paramete2=_LivePreview$paramete2.docs)||void 0===_LivePreview$paramete2?void 0:_LivePreview$paramete2.source)})}),Test.parameters=index_stories_objectSpread(index_stories_objectSpread({},Test.parameters),{},{docs:index_stories_objectSpread(index_stories_objectSpread({},null===(_Test$parameters=Test.parameters)||void 0===_Test$parameters?void 0:_Test$parameters.docs),{},{source:index_stories_objectSpread({originalSource:"{\n  parameters: {\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} />\n}"},null===(_Test$parameters2=Test.parameters)||void 0===_Test$parameters2||null===(_Test$parameters2=_Test$parameters2.docs)||void 0===_Test$parameters2?void 0:_Test$parameters2.source)})});var __namedExportsOrder=["Default","LivePreview","Test"]},"./packages/components/src/core/TagFilter/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>core_TagFilter});var _templateObject,_templateObject2,Clear=__webpack_require__("./node_modules/@mui/icons-material/esm/Clear.js"),emotion_react_browser_esm=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js")),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts"),Tag=__webpack_require__("./packages/components/src/core/Tag/index.tsx");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledTag=(0,styled.ZP)(Tag.Z)(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var spacings=(0,styles.Gr)(props);return(0,emotion_react_browser_esm.iv)(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n      padding: ","px ","px;\n\n      &:after {\n        display: none;\n      }\n\n      .MuiChip-label {\n        ","\n      }\n\n      .MuiChip-deleteIcon,\n      .MuiSvgIcon-root {\n        margin-left: ","px;\n      }\n\n      .MuiChip-label,\n      svg {\n        z-index: auto;\n      }\n    "])),null==spacings?void 0:spacings.xxs,null==spacings?void 0:spacings.s,(0,styles.J5)(props),null==spacings?void 0:spacings.s)})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var TagFilter=function TagFilter(props){return(0,jsx_runtime.jsx)(StyledTag,function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({deleteIcon:(0,jsx_runtime.jsx)(Clear.Z,{})},props))};const core_TagFilter=TagFilter;try{TagFilter.displayName="TagFilter",TagFilter.__docgenInfo={description:"",displayName:"TagFilter",props:{label:{defaultValue:null,description:"The content of the component.",name:"label",required:!0,type:{name:"string"}},onDelete:{defaultValue:null,description:"Callback fired when the delete icon is clicked.\nIf set, the delete icon will be shown.",name:"onDelete",required:!0,type:{name:"(event: any) => void"}},icon:{defaultValue:null,description:"Icon element.",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},disabled:{defaultValue:{value:"false"},description:"If `true`, the component is disabled.",name:"disabled",required:!1,type:{name:"boolean"}},classes:{defaultValue:null,description:"Override or extend the styles applied to the component.",name:"classes",required:!1,type:{name:"(Partial<ChipClasses> & Partial<ClassNameMap<never>>)"}},tabIndex:{defaultValue:null,description:"@ignore",name:"tabIndex",required:!1,type:{name:"number"}},children:{defaultValue:null,description:"This prop isn't supported.\nUse the `component` prop if you need to change the children structure.",name:"children",required:!1,type:{name:"null"}},sx:{defaultValue:null,description:"The system prop that allows defining system overrides as well as additional CSS styles.",name:"sx",required:!1,type:{name:"SxProps<Theme>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},size:{defaultValue:{value:"'medium'"},description:"The size of the component.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},avatar:{defaultValue:null,description:"The Avatar element to display.",name:"avatar",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},clickable:{defaultValue:null,description:"If `true`, the chip will appear clickable, and will raise when pressed,\neven if the onClick prop is not defined.\nIf `false`, the chip will not appear clickable, even if onClick prop is defined.\nThis can be used, for example,\nalong with the component prop to indicate an anchor Chip is clickable.\nNote: this controls the UI and does not affect the onClick event.",name:"clickable",required:!1,type:{name:"boolean"}},deleteIcon:{defaultValue:null,description:"Override the default delete icon element. Shown only if `onDelete` is set.",name:"deleteIcon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},skipFocusWhenDisabled:{defaultValue:{value:"false"},description:"If `true`, allows the disabled chip to escape focus.\nIf `false`, allows the disabled chip to receive focus.",name:"skipFocusWhenDisabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/TagFilter/index.tsx#TagFilter"]={docgenInfo:TagFilter.__docgenInfo,name:"TagFilter",path:"packages/components/src/core/TagFilter/index.tsx#TagFilter"})}catch(__react_docgen_typescript_loader_error){}}}]);