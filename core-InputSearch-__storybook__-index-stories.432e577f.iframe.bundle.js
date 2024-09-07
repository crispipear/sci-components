"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[6037],{"./packages/components/src/core/InputSearch/__storybook__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs");var InputSearch=__webpack_require__("./packages/components/src/core/InputSearch/index.tsx");const default_InputSearch=props=>{const{id,placeholder,label,disabled,sdsStyle,intent}=props;return(0,jsx_runtime.jsx)(InputSearch.A,{id,placeholder,label,disabled,sdsStyle,intent,handleSubmit:value=>{console.log(value)},name:"input-search-name"})};default_InputSearch.__docgenInfo={description:"",methods:[],displayName:"InputSearch"};var addon_actions_dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const TestDemo=props=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(InputSearch.A,{id:"test-round",sdsStyle:"rounded",label:"Round Search",placeholder:"Search","data-testid":"inputSearchRound",handleSubmit:(0,addon_actions_dist.XI)("onSubmit"),name:"round-search",...props}),(0,jsx_runtime.jsx)(InputSearch.A,{id:"test-square",sdsStyle:"square",label:"Square Search",placeholder:"Search","data-testid":"inputSearchSquare",handleSubmit:(0,addon_actions_dist.XI)("onSubmit"),name:"square-search",...props}),(0,jsx_runtime.jsx)(InputSearch.A,{sdsStyle:"square",placeholder:"Search","data-testid":"inputSearchFail",handleSubmit:(0,addon_actions_dist.XI)("onSubmit"),name:"with-error"})]});TestDemo.__docgenInfo={description:"",methods:[],displayName:"TestDemo"};const index_stories={argTypes:{disabled:{control:{type:"boolean"}},id:{control:{type:"text"},required:!0},intent:{control:{type:"radio"},options:["default","negative","notice"]},label:{control:{type:"text"},required:!0},placeholder:{control:{type:"text"}},sdsStyle:{control:{type:"radio"},options:["rounded","square"]}},component:default_InputSearch,parameters:{badges:[dist.yq.STABLE]},title:"Components/Inputs/InputSearch"},Default={args:{disabled:!1,id:"Test",label:"Search",placeholder:"Search"}},Test={parameters:{controls:{exclude:["disabled","id","intent","label","placeholder","sdsStyle"]},snapshot:{skip:!0}},render:args=>(0,jsx_runtime.jsx)(TestDemo,{...args})},__namedExportsOrder=["Default","Test"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    disabled: false,\n    id: "Test",\n    label: "Search",\n    placeholder: "Search"\n  }\n}',...Default.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      exclude: INPUT_SEARCH_EXCLUDED_CONTROLS\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} />\n}",...Test.parameters?.docs?.source}}}},"./packages/components/src/common/helpers/userTabbing.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const __WEBPACK_DEFAULT_EXPORT__=ref=>{(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{if(ref.current){const destroyListener=(element=>{if(!element)return;let removed=!1;function handleFirstTab(e){"Tab"===e.code&&(element.classList.add("user-is-tabbing"),element.setAttribute("data-user-is-tabbing","true"),window.removeEventListener("keydown",handleFirstTab),window.addEventListener("mousedown",handleMouseDownOnce))}function handleMouseDownOnce(){element.classList.remove("user-is-tabbing"),element.removeAttribute("data-user-is-tabbing"),window.removeEventListener("mousedown",handleMouseDownOnce),window.addEventListener("keydown",handleFirstTab)}return window.addEventListener("keydown",handleFirstTab),()=>{removed||(removed=!0,window.removeEventListener("keydown",handleFirstTab),window.removeEventListener("mousedown",handleMouseDownOnce))}})(ref.current);return()=>destroyListener?.()}}),[ref])}},"./packages/components/src/core/InputSearch/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),src_core_Button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/components/src/core/Button/index.tsx"),_style__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/components/src/core/InputSearch/style.ts"),src_common_helpers_userTabbing__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/components/src/common/helpers/userTabbing.ts");const InputSearch=(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)((function InputSearch(props,ref){const{label,id,placeholder,sdsStyle="square",intent="default",handleSubmit,onChange,disabled,...rest}=props,inputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);(0,src_common_helpers_userTabbing__WEBPACK_IMPORTED_MODULE_4__.A)(ref||inputRef);const[value,setValue]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");return id&&label?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_3__.Gw,{htmlFor:id,children:label}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_3__.Vd,{id,ref:ref||inputRef,InputProps:{endAdornment:value?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_3__.sR,{position:"end",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_core_Button__WEBPACK_IMPORTED_MODULE_2__.A,{"aria-label":"clear-button",className:"input-search-clear-icon",onClick:()=>{setValue(""),handleSubmit&&handleSubmit(""),onChange&&onChange({target:{value:""}})},sdsType:"tertiary",sdsSize:"small",sdsStyle:"icon",disabled,sdsIconProps:{sdsType:"iconButton"},icon:"XMarkCircle"})}):null,startAdornment:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_style__WEBPACK_IMPORTED_MODULE_3__.sR,{position:"start",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(src_core_Button__WEBPACK_IMPORTED_MODULE_2__.A,{"aria-label":"search-button",onClick:()=>{handleSubmit&&handleSubmit(value)},sdsType:"tertiary",sdsSize:"small",sdsStyle:"icon",disabled,sdsIconProps:{sdsType:"interactive"},icon:"Search"})})},type:"search",variant:"outlined",size:"small",placeholder,value,sdsStyle,onChange:event=>{setValue(event.target.value),onChange&&onChange(event)},onKeyDown:event=>{"Enter"===event.key&&(event.preventDefault(),handleSubmit&&handleSubmit(value))},intent,disabled,autoComplete:"one-time-code",...rest})]}):(console.error("Error: @czi-sds/components component InputText requires id and label props for accessibility."),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment,{}))})),__WEBPACK_DEFAULT_EXPORT__=InputSearch;InputSearch.__docgenInfo={description:"@see https://mui.com/material-ui/react-text-field/",methods:[],displayName:"InputSearch"}},"./packages/components/src/core/InputSearch/style.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Gw:()=>StyledLabel,Vd:()=>StyledSearchBase,sR:()=>StyledInputAdornment});var _emotion_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@emotion/react/dist/emotion-react.browser.esm.js"),_mui_material__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js"),_mui_material__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js"),_mui_material__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@mui/material/ButtonBase/buttonBaseClasses.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@mui/material/TextField/TextField.js"),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/InputBase/inputBaseClasses.js"),_mui_material__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@mui/material/InputAdornment/InputAdornment.js"),_emotion_styled__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),src_core_styles__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/styles/index.ts");const sdsPropNames=["sdsStyle","intent","handleSubmit"],StyledLabel=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)("label",{target:"eo335x80"})(src_core_styles__WEBPACK_IMPORTED_MODULE_1__.HC," ",(props=>{const spaces=(0,src_core_styles__WEBPACK_IMPORTED_MODULE_1__.oZ)(props);return`\n      margin-bottom: ${spaces?.xxs}px;\n      position: absolute;\n      overflow: hidden;\n      clip: rect(0 0 0 0);\n      height: 1px;\n      width: 1px;\n      margin: -1px; \n      padding: 0; \n      border: 0;\n    `})),StyledSearchBase=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.A,{shouldForwardProp:prop=>!sdsPropNames.includes(prop.toString()),target:"eo335x81"})((props=>{const{intent,disabled,sdsStyle}=props,spaces=(0,src_core_styles__WEBPACK_IMPORTED_MODULE_1__.oZ)(props),iconSizes=(0,src_core_styles__WEBPACK_IMPORTED_MODULE_1__.I7)(props),semanticColors=(0,src_core_styles__WEBPACK_IMPORTED_MODULE_1__.Bd)(props);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)("margin-top:",spaces?.m,"px;margin-bottom:",spaces?.m,"px;margin-right:",spaces?.xl,'px;min-width:120px;display:block;[type="search"]::-webkit-search-cancel-button{-webkit-appearance:none;appearance:none;}& .input-search-clear-icon{opacity:0;cursor:pointer;svg{height:',iconSizes?.xs?.height,"px;width:",iconSizes?.xs?.width,"px;}}.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root,"{padding:0 ",spaces?.m,"px;background-color:",semanticColors?.base?.surfacePrimary,";.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.base?.border,";}&:hover .input-search-clear-icon,&:focus-within .input-search-clear-icon{opacity:1;svg{color:",semanticColors?.base?.iconPrimary," !important;}&:hover{svg{color:",semanticColors?.base?.iconPrimaryHover," !important;}}&:active{svg{color:",semanticColors?.accent?.fillPressed," !important;}}}}.",_mui_material__WEBPACK_IMPORTED_MODULE_7__.A.inputSizeSmall,"{",(0,src_core_styles__WEBPACK_IMPORTED_MODULE_1__.Zo)(props),"        padding:",spaces?.xs,"px ",spaces?.s,"px;height:unset;box-sizing:border-box;background-color:",semanticColors?.base?.surfacePrimary,";}.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root,":hover{& .",_mui_material__WEBPACK_IMPORTED_MODULE_5__.A.root,":last-of-type{svg{color:",semanticColors?.base?.iconPrimaryHover,";}}.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.base?.borderHover,";}}.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root,".",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.focused,"{outline:none;.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.accent?.border,";}.",_mui_material__WEBPACK_IMPORTED_MODULE_4__.A.root," .",_mui_material__WEBPACK_IMPORTED_MODULE_5__.A.root,":last-of-type{cursor:default;svg{color:",semanticColors?.accent?.icon,";}}}&.user-is-tabbing .",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root,":focus-within{outline:2px solid ",semanticColors?.base?.borderHover,";outline-offset:1px;}","rounded"===sdsStyle&&(props=>{const corners=(0,src_core_styles__WEBPACK_IMPORTED_MODULE_1__.VP)(props),semanticColors=(0,src_core_styles__WEBPACK_IMPORTED_MODULE_1__.Bd)(props);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(".",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root,"{border-radius:",corners?.l,"px;.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border-radius:",corners?.l,"px;border:1px solid ",semanticColors?.base?.border,";}}")})(props)," ","negative"===intent&&(props=>{const semanticColors=(0,src_core_styles__WEBPACK_IMPORTED_MODULE_1__.Bd)(props);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(".",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root," .",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.negative?.border,";}.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root,":hover\n      .",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.base?.borderHover,";}.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root,".",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.focused,"{.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.base?.borderHover,";}.",_mui_material__WEBPACK_IMPORTED_MODULE_4__.A.root," .",_mui_material__WEBPACK_IMPORTED_MODULE_5__.A.root,":last-of-type{cursor:default;svg{color:",semanticColors?.base?.iconPrimaryHover,";}}}")})(props)," ","notice"===intent&&(props=>{const semanticColors=(0,src_core_styles__WEBPACK_IMPORTED_MODULE_1__.Bd)(props);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(".",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root," .",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.notice?.border,";}.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root,":hover\n      .",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.base?.borderHover,";}.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.root,".",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.focused,"{.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.base?.borderHover,";}.",_mui_material__WEBPACK_IMPORTED_MODULE_4__.A.root," .",_mui_material__WEBPACK_IMPORTED_MODULE_5__.A.root,":last-of-type{cursor:default;svg{color:",semanticColors?.base?.iconPrimaryHover,";}}}")})(props)," ",disabled&&(props=>{const semanticColors=(0,src_core_styles__WEBPACK_IMPORTED_MODULE_1__.Bd)(props);return(0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH)(".",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.disabled,"{.",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.base?.borderDisabled," !important;}.",_mui_material__WEBPACK_IMPORTED_MODULE_4__.A.root," svg{color:",semanticColors?.base?.iconDisabled,";}&:hover .",_mui_material__WEBPACK_IMPORTED_MODULE_3__.A.notchedOutline,"{border:1px solid ",semanticColors?.base?.borderDisabled,";}&::placeholder{color:",semanticColors?.base?.textDisabled,";opacity:1;}}")})(props))})),StyledInputAdornment=(0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__.A)(_mui_material__WEBPACK_IMPORTED_MODULE_8__.A,{target:"eo335x82"})("position:relative;height:unset;margin:0;")}}]);