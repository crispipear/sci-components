"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[4422],{"./packages/components/src/core/Bases/DropShadows/__storybook__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var _templateObject,_templateObject2,_templateObject3,storybookBadges=__webpack_require__("./packages/components/src/common/storybook/storybookBadges.ts"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var StyledShadowsWrapper=(0,styled.Ay)("div")(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  max-width: 100%;\n"]))),StyledShadowBox=(0,styled.Ay)("div")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var shadow=props.shadow,colors=(0,styles.jM)(props);return"\n      position: relative;\n      margin-left: 10px;\n      width: ".concat(60,"px;\n      height: ").concat(60,"px;\n      background-color: ").concat(null==colors?void 0:colors.gray[100],";\n      border-radius: 6px;\n      box-shadow: ").concat(shadow,";\n\n      &:hover {\n        animation: boxShadowAnimation 3s infinite;\n      }\n\n      @keyframes boxShadowAnimation {\n        50% {\n          box-shadow: ").concat(shadow,";\n        }\n      }\n    ")})),StyledShadowVariable=(0,styled.Ay)("p")(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.K,(function(props){var fontWeights=(0,styles.bI)(props);return"\n      margin: 0;\n      cursor: pointer;\n    \n      &:active {\n        font-weight: ".concat(null==fontWeights?void 0:fontWeights.semibold,";\n      }\n    ")})),useTheme=__webpack_require__("./node_modules/@mui/material/styles/useTheme.js"),Table=__webpack_require__("./packages/components/src/core/Table/index.tsx"),TableHeader=__webpack_require__("./packages/components/src/core/TableHeader/index.tsx"),CellHeader=__webpack_require__("./packages/components/src/core/CellHeader/index.tsx"),TableRow=__webpack_require__("./packages/components/src/core/TableRow/index.tsx"),CellComponent=__webpack_require__("./packages/components/src/core/CellComponent/index.tsx"),CellBasic=__webpack_require__("./packages/components/src/core/CellBasic/index.tsx"),utils=__webpack_require__("./packages/components/src/core/Bases/utils.ts"),style=__webpack_require__("./packages/components/src/core/Bases/style.ts"),DROP_SHADOWS_USAGE={l:"Containers that layer on top of all other page content (bottom panels, side panels, modals, etc.)",m:"Containers that are part of a page's content, but appear on user input, layering over primary content (dropdown menus, tooltips, etc.)",none:"No shadows.",s:"Containers that layer closely over content, including images of documents/screens placed in content, and sign up forms."},DROP_SHADOWS_TITLE={l:"Large Shadow",m:"Medium Shadow",none:"No Shadow",s:"Small Shadow"},jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var Template=function Template(){var theme=(0,useTheme.A)(),shadows=(0,styles.CG)({theme});if(shadows){var l=shadows.l,m=shadows.m,s=shadows.s,none=shadows.none,TableBodyContent=Object.entries({l,m,s,none}).map((function(_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0];return function RenderTableRow(shadow,name){var sassVariable="$sds-drop-shadow-"+name,cssVariable="--sds-drop-shadow-"+name;return(0,jsx_runtime.jsxs)(TableRow.A,{children:[(0,jsx_runtime.jsx)(CellComponent.A,{verticalAlign:"center",horizontalAlign:"center",children:(0,jsx_runtime.jsx)(StyledShadowBox,{shadow})}),(0,jsx_runtime.jsx)(CellBasic.A,{primaryText:DROP_SHADOWS_TITLE[name],verticalAlign:"center",shouldShowTooltipOnHover:!1}),(0,jsx_runtime.jsxs)(CellComponent.A,{verticalAlign:"center",children:[(0,jsx_runtime.jsx)(style.k,{onClick:function onClick(){return(0,utils.lW)(sassVariable)},type:"sass",children:sassVariable}),(0,jsx_runtime.jsx)(style.k,{onClick:function onClick(){return(0,utils.lW)(cssVariable)},type:"css",children:cssVariable})]}),(0,jsx_runtime.jsx)(CellComponent.A,{verticalAlign:"center",onClick:function onClick(){return(0,utils.lW)("box-shadow: ".concat(shadow,";"))},children:(0,jsx_runtime.jsxs)(StyledShadowVariable,{children:["box-shadow: ",shadow,";"]})}),(0,jsx_runtime.jsx)(CellBasic.A,{verticalAlign:"center",primaryText:DROP_SHADOWS_USAGE[name],shouldShowTooltipOnHover:!1,primaryTextWrapLineCount:5})]},name)}(_ref2[1],key)}));return(0,jsx_runtime.jsxs)(Table.A,{children:[(0,jsx_runtime.jsxs)(TableHeader.A,{children:[(0,jsx_runtime.jsx)(CellHeader.A,{hideSortIcon:!0,style:{width:40},children:"Example"}),(0,jsx_runtime.jsx)(CellHeader.A,{hideSortIcon:!0,style:{width:40},children:"Shadow Type"}),(0,jsx_runtime.jsx)(CellHeader.A,{hideSortIcon:!0,children:"Variables"}),(0,jsx_runtime.jsx)(CellHeader.A,{hideSortIcon:!0,children:"Value"}),(0,jsx_runtime.jsx)(CellHeader.A,{hideSortIcon:!0,children:"Usage"})]}),(0,jsx_runtime.jsx)("tbody",{children:TableBodyContent})]})}};const index_stories={parameters:{badges:[storybookBadges.y.WIP]},title:"Bases/Drop Shadows"};var Default={render:function render(){return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(StyledShadowsWrapper,{children:(0,jsx_runtime.jsx)(Template,{})})})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: () => <>\n      <StyledShadowsWrapper>\n        <Template />\n      </StyledShadowsWrapper>\n    </>\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/components/src/core/CellBasic/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_CellBasic});var _templateObject,_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,react=__webpack_require__("./node_modules/react/index.js"),Tooltip=__webpack_require__("./packages/components/src/core/Tooltip/index.tsx"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");function _taggedTemplateLiteral(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}var doNotForwardProps=["icon","iconVerticalAlign","horizontalAlign","verticalAlign","primaryText","secondaryText","tertiaryText","shouldTextWrap","shouldShowTooltipOnHover","tooltipProps","primaryTextWrapLineCount","secondaryTextWrapLineCount","tertiaryTextWrapLineCount","primaryTextComponentSlotBottom","primaryTextComponentSlotRight"],verticalAlignCSSMap={bottom:"bottom",center:"middle",top:"top"},verticalAlignToFlexMap={bottom:"flex-end",center:"center",top:"flex-start"},StyledTableData=(0,styled.Ay)("td",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject||(_templateObject=_taggedTemplateLiteral(["\n  ","\n  ","\n\n  ","\n"])),styles.JU,styles.UT,(function(props){var _props$horizontalAlig=props.horizontalAlign,horizontalAlign=void 0===_props$horizontalAlig?"left":_props$horizontalAlig,_props$verticalAlign=props.verticalAlign,verticalAlign=void 0===_props$verticalAlign?"top":_props$verticalAlign,spaces=(0,styles.oZ)(props);return"\n        padding: ".concat(null==spaces?void 0:spaces.l,"px ").concat(null==spaces?void 0:spaces.m,"px;\n        text-align: ").concat(horizontalAlign,";\n        vertical-align: ").concat(verticalAlignCSSMap[verticalAlign],";\n        overflow: hidden;\n    ")})),ShouldWrap=function ShouldWrap(lineCount){return"\n    overflow: hidden;\n    display: -webkit-box;\n    -webkit-line-clamp: ".concat(lineCount,";\n    -webkit-box-orient: vertical; \n  ")},StyledCellContent=(0,styled.Ay)("div")(_templateObject2||(_templateObject2=_taggedTemplateLiteral(["\n  display: flex;\n"]))),StyledCellContentWrapper=(0,styled.Ay)("div")(_templateObject3||(_templateObject3=_taggedTemplateLiteral(["\n  width: 100%;\n"]))),StyledCellIconWrapper=(0,styled.Ay)("div",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject4||(_templateObject4=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var _props$iconVerticalAl=props.iconVerticalAlign,iconVerticalAlign=void 0===_props$iconVerticalAl?"top":_props$iconVerticalAl,spaces=(0,styles.oZ)(props);return"\n      padding-right: ".concat(null==spaces?void 0:spaces.l,"px;\n      display: flex;\n      flex-direction: column;\n      justify-content: ").concat(verticalAlignToFlexMap[iconVerticalAlign],";\n    ")})),PrimaryTextWrapper=(0,styled.Ay)("div")(_templateObject5||(_templateObject5=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var horizontalAlign=props.horizontalAlign;return"\n      display: flex;\n      justify-content: ".concat("left"===horizontalAlign?"flex-start":"flex-end",";\n    ")})),PrimaryText=(0,styled.Ay)("div",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject6||(_templateObject6=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.JU,(function(props){var _props$primaryTextWra=props.primaryTextWrapLineCount,primaryTextWrapLineCount=void 0===_props$primaryTextWra?3:_props$primaryTextWra;return"\n      display: block;\n      ".concat(props.shouldTextWrap?ShouldWrap(primaryTextWrapLineCount):"\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  ","\n    ")})),SecondaryText=(0,styled.Ay)("span",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject7||(_templateObject7=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.Pf,(function(props){var _semanticTextColors$b,_props$secondaryTextW=props.secondaryTextWrapLineCount,secondaryTextWrapLineCount=void 0===_props$secondaryTextW?1:_props$secondaryTextW,spaces=(0,styles.oZ)(props),semanticTextColors=(0,styles.yA)(props);return"\n      display: block;\n      color: ".concat(null==semanticTextColors||null===(_semanticTextColors$b=semanticTextColors.base)||void 0===_semanticTextColors$b?void 0:_semanticTextColors$b.secondary,";\n      padding-top: ").concat(null==spaces?void 0:spaces.xxxs,"px;\n\n      ").concat(props.shouldTextWrap?ShouldWrap(secondaryTextWrapLineCount):"\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  ","\n    ")})),TertiaryText=(0,styled.Ay)("span",{shouldForwardProp:function shouldForwardProp(prop){return!doNotForwardProps.includes(prop)}})(_templateObject8||(_templateObject8=_taggedTemplateLiteral(["\n  ","\n\n  ","\n"])),styles.Pf,(function(props){var _semanticTextColors$b2,_props$tertiaryTextWr=props.tertiaryTextWrapLineCount,tertiaryTextWrapLineCount=void 0===_props$tertiaryTextWr?1:_props$tertiaryTextWr,spaces=(0,styles.oZ)(props),semanticTextColors=(0,styles.yA)(props);return"\n      display: block;\n      color: ".concat(null==semanticTextColors||null===(_semanticTextColors$b2=semanticTextColors.base)||void 0===_semanticTextColors$b2?void 0:_semanticTextColors$b2.secondary,";\n      padding-top: ").concat(null==spaces?void 0:spaces.s,"px;\n\n      ").concat(props.shouldTextWrap?ShouldWrap(tertiaryTextWrapLineCount):"\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n  ","\n    ")})),PrimaryTextComponentSlotBottomWrapper=(0,styled.Ay)("div")(_templateObject9||(_templateObject9=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var spaces=(0,styles.oZ)(props);return"\n      margin-top: ".concat(null==spaces?void 0:spaces.xxs,"px;\n    ")})),PrimaryTextComponentSlotRightWrapper=(0,styled.Ay)("div")(_templateObject10||(_templateObject10=_taggedTemplateLiteral(["\n  ","\n"])),(function(props){var spaces=(0,styles.oZ)(props);return"\n      margin-left: ".concat(null==spaces?void 0:spaces.xs,"px;\n    ")})),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:String(i)}(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var CellBasicContent=function CellBasicContent(props){var primaryText=props.primaryText,primaryTextWrapLineCount=props.primaryTextWrapLineCount,secondaryText=props.secondaryText,secondaryTextWrapLineCount=props.secondaryTextWrapLineCount,tertiaryText=props.tertiaryText,tertiaryTextWrapLineCount=props.tertiaryTextWrapLineCount,_props$shouldTextWrap=props.shouldTextWrap,shouldTextWrap=void 0===_props$shouldTextWrap||_props$shouldTextWrap,icon=props.icon,iconVerticalAlign=props.iconVerticalAlign,primaryTextComponentSlotRight=props.primaryTextComponentSlotRight,primaryTextComponentSlotBottom=props.primaryTextComponentSlotBottom,_props$horizontalAlig=props.horizontalAlign,horizontalAlign=void 0===_props$horizontalAlig?"left":_props$horizontalAlig;return(0,jsx_runtime.jsxs)(StyledCellContent,{children:[icon&&(0,jsx_runtime.jsx)(StyledCellIconWrapper,{iconVerticalAlign,children:icon}),(0,jsx_runtime.jsxs)(StyledCellContentWrapper,{children:[(0,jsx_runtime.jsxs)(PrimaryTextWrapper,{horizontalAlign,children:[(0,jsx_runtime.jsx)(PrimaryText,{shouldTextWrap,primaryTextWrapLineCount,children:primaryText}),primaryTextComponentSlotRight&&(0,jsx_runtime.jsx)(PrimaryTextComponentSlotRightWrapper,{children:primaryTextComponentSlotRight})]}),!secondaryText&&!tertiaryText&&primaryTextComponentSlotBottom&&(0,jsx_runtime.jsx)(PrimaryTextComponentSlotBottomWrapper,{children:primaryTextComponentSlotBottom}),secondaryText&&(0,jsx_runtime.jsx)(SecondaryText,{shouldTextWrap,secondaryTextWrapLineCount,children:secondaryText}),tertiaryText&&(0,jsx_runtime.jsx)(TertiaryText,{shouldTextWrap,tertiaryTextWrapLineCount,children:tertiaryText})]})]})},CellBasic=(0,react.forwardRef)((function(props,ref){var primaryText=props.primaryText,secondaryText=props.secondaryText,_props$shouldShowTool=props.shouldShowTooltipOnHover,shouldShowTooltipOnHover=void 0===_props$shouldShowTool||_props$shouldShowTool,tooltipProps=props.tooltipProps;return shouldShowTooltipOnHover?(0,jsx_runtime.jsx)(Tooltip.A,_objectSpread(_objectSpread({title:primaryText,subtitle:secondaryText,arrow:!0,leaveDelay:0,leaveTouchDelay:0,sdsStyle:"dark"},tooltipProps),{},{children:(0,jsx_runtime.jsx)(StyledTableData,_objectSpread(_objectSpread({ref},props),{},{children:(0,jsx_runtime.jsx)(CellBasicContent,_objectSpread({},props))}))})):(0,jsx_runtime.jsx)(StyledTableData,_objectSpread(_objectSpread({ref},props),{},{children:(0,jsx_runtime.jsx)(CellBasicContent,_objectSpread({},props))}))}));const core_CellBasic=CellBasic;try{CellBasic.displayName="CellBasic",CellBasic.__docgenInfo={description:"",displayName:"CellBasic",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<CustomSVGProps, string | JSXElementConstructor<any>>"}},shouldShowTooltipOnHover:{defaultValue:null,description:"",name:"shouldShowTooltipOnHover",required:!1,type:{name:"boolean"}},tooltipProps:{defaultValue:null,description:"",name:"tooltipProps",required:!1,type:{name:"any"}},horizontalAlign:{defaultValue:null,description:"",name:"horizontalAlign",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'}]}},verticalAlign:{defaultValue:null,description:"",name:"verticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"center"'}]}},iconVerticalAlign:{defaultValue:null,description:"",name:"iconVerticalAlign",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'},{value:'"center"'}]}},primaryText:{defaultValue:null,description:"",name:"primaryText",required:!0,type:{name:"string"}},primaryTextComponentSlotBottom:{defaultValue:null,description:"",name:"primaryTextComponentSlotBottom",required:!1,type:{name:"ReactNode"}},primaryTextComponentSlotRight:{defaultValue:null,description:"",name:"primaryTextComponentSlotRight",required:!1,type:{name:"ReactNode"}},primaryTextWrapLineCount:{defaultValue:null,description:"",name:"primaryTextWrapLineCount",required:!1,type:{name:"number"}},secondaryText:{defaultValue:null,description:"",name:"secondaryText",required:!1,type:{name:"string"}},secondaryTextWrapLineCount:{defaultValue:null,description:"",name:"secondaryTextWrapLineCount",required:!1,type:{name:"number"}},shouldTextWrap:{defaultValue:null,description:"",name:"shouldTextWrap",required:!1,type:{name:"boolean"}},tertiaryText:{defaultValue:null,description:"",name:"tertiaryText",required:!1,type:{name:"string"}},tertiaryTextWrapLineCount:{defaultValue:null,description:"",name:"tertiaryTextWrapLineCount",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/components/src/core/CellBasic/index.tsx#CellBasic"]={docgenInfo:CellBasic.__docgenInfo,name:"CellBasic",path:"packages/components/src/core/CellBasic/index.tsx#CellBasic"})}catch(__react_docgen_typescript_loader_error){}}}]);