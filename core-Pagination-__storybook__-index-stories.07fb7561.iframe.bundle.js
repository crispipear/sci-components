"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[3311],{"./packages/components/src/core/Pagination/__storybook__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),dist=__webpack_require__("./node_modules/@geometricpanda/storybook-addon-badges/dist/index.mjs");var react=__webpack_require__("./node_modules/react/index.js"),Pagination=__webpack_require__("./packages/components/src/core/Pagination/index.tsx");const default_Pagination=props=>{const{pageSize,totalCount,siblingCount,truncateDropdown,sdsStyle}=props,[currentPage,setCurrentPage]=(0,react.useState)(1);return(0,jsx_runtime.jsx)(Pagination.A,{sdsStyle,pageSize,onPageChange:page=>{setCurrentPage(page)},onNextPage:()=>setCurrentPage(currentPage+1),onPreviousPage:()=>setCurrentPage(currentPage-1),totalCount,siblingCount,currentPage,truncateDropdown})};default_Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination"};const TestDemo=props=>(0,jsx_runtime.jsxs)("div",{children:[(0,jsx_runtime.jsx)(Pagination.A,{"data-testid":"Pagination",pageSize:4,onPageChange:()=>{},onNextPage:()=>{},onPreviousPage:()=>{},totalCount:20,siblingCount:1,currentPage:2,truncateDropdown:!0,...props}),(0,jsx_runtime.jsx)(Pagination.A,{"data-testid":"Pagination-disabled-left-arrow",pageSize:4,onPageChange:()=>{},onNextPage:()=>{},onPreviousPage:()=>{},totalCount:20,siblingCount:1,currentPage:1,truncateDropdown:!0}),(0,jsx_runtime.jsx)(Pagination.A,{"data-testid":"Pagination-with-left-dropdown",pageSize:4,onPageChange:()=>{},onNextPage:()=>{},onPreviousPage:()=>{},totalCount:30,siblingCount:1,currentPage:5,truncateDropdown:!0}),(0,jsx_runtime.jsx)(Pagination.A,{"data-testid":"Pagination-with-right-dropdown",pageSize:4,onPageChange:()=>{},onNextPage:()=>{},onPreviousPage:()=>{},totalCount:60,siblingCount:1,currentPage:3,truncateDropdown:!0}),(0,jsx_runtime.jsx)(Pagination.A,{"data-testid":"Pagination-with-both-dropdowns",pageSize:4,onPageChange:()=>{},onNextPage:()=>{},onPreviousPage:()=>{},totalCount:30,siblingCount:1,currentPage:4,truncateDropdown:!0}),(0,jsx_runtime.jsx)(Pagination.A,{"data-testid":"Pagination-disabled-dropdown",pageSize:4,onPageChange:()=>{},onNextPage:()=>{},onPreviousPage:()=>{},totalCount:30,siblingCount:1,currentPage:7,truncateDropdown:!1})]});TestDemo.__docgenInfo={description:"",methods:[],displayName:"TestDemo"};const index_stories={argTypes:{pageSize:{control:{type:"number"}},sdsStyle:{control:{type:"select"},options:["round","square"]},siblingCount:{control:{type:"number"}},totalCount:{control:{type:"number"}},truncateDropdown:{control:{type:"boolean"}}},component:default_Pagination,parameters:{badges:[dist.yq.STABLE]},title:"Components/Table/Pagination"},Default={args:{pageSize:5,siblingCount:1,totalCount:100}},Test={parameters:{controls:{exclude:["pageSize","sdsStyle","siblingCount","totalCount","truncateDropdown"]},snapshot:{skip:!0}},render:args=>(0,jsx_runtime.jsx)(TestDemo,{...args})},__namedExportsOrder=["Default","Test"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    pageSize: 5,\n    siblingCount: 1,\n    totalCount: 100\n  }\n}",...Default.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:"{\n  parameters: {\n    controls: {\n      exclude: PAGINATION_EXCLUDED_CONTROLS\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <TestDemo {...args} />\n}",...Test.parameters?.docs?.source}}}},"./packages/components/src/core/Menu/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_Menu});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Menu=__webpack_require__("./node_modules/@mui/material/Menu/Menu.js"),menuClasses=__webpack_require__("./node_modules/@mui/material/Menu/menuClasses.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");const StyledMenu=(0,emotion_styled_browser_esm.A)(Menu.A,{target:"e1kwmcj80"})("&{.",menuClasses.A.paper,"{",(props=>{const spaces=(0,styles.oZ)(props),semanticColors=(0,styles.Bd)(props);return`\n          background-color: ${semanticColors?.base?.surfacePrimary};\n          background-image: none;\n          padding: ${spaces?.xs}px;\n        `}),"}.MuiList-padding{padding:0;}}"),ANCHOR_ORIGIN={horizontal:"center",vertical:"bottom"},TRANSFORM_ORIGIN={horizontal:"center",vertical:"top"},Menu_Menu=props=>(0,jsx_runtime.jsx)(StyledMenu,{anchorOrigin:ANCHOR_ORIGIN,transformOrigin:TRANSFORM_ORIGIN,...props}),core_Menu=Menu_Menu;Menu_Menu.__docgenInfo={description:"@see https://mui.com/material-ui/react-menu/",methods:[],displayName:"Menu"}},"./packages/components/src/core/MenuItem/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_MenuItem});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),Check=__webpack_require__("./node_modules/@mui/icons-material/esm/Check.js"),Remove=__webpack_require__("./node_modules/@mui/icons-material/esm/Remove.js"),MenuItem=__webpack_require__("./node_modules/@mui/material/MenuItem/MenuItem.js"),menuItemClasses=__webpack_require__("./node_modules/@mui/material/MenuItem/menuItemClasses.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),fonts=__webpack_require__("./packages/components/src/core/styles/common/mixins/fonts.ts"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");const StyledMenuItem=(0,emotion_styled_browser_esm.A)(MenuItem.A,{target:"em28i2e0"})((props=>{const{selected}=props,fontWeights=(0,styles.bI)(props),spaces=(0,styles.oZ)(props),semanticColors=(0,styles.Bd)(props);return`\n      padding: ${spaces?.xs}px ${spaces?.s}px !important;\n      min-height: unset;\n      opacity: 1;\n\n      &.MuiAutocomplete-option {\n        min-height: unset;\n      }\n      \n      .primary-text {\n        font-weight: ${selected?fontWeights?.semibold:fontWeights?.regular};\n      }\n\n      &.MuiButtonBase-root {\n        background-color: transparent;\n        opacity: 1;\n\n        &:hover, &.${menuItemClasses.A.focusVisible} {\n          background-color: ${semanticColors?.base?.fillHover};\n\n          &[aria-selected="true"] {\n            background-color: ${semanticColors?.base?.fillHover};\n          }\n        }\n      }\n\n      &.${menuItemClasses.A.root} .MuiSvgIcon-root {\n        align-self: flex-start;\n      }\n\n      &.${menuItemClasses.A.root} .${menuItemClasses.A.disabled} {\n        opacity: 1 !important;\n      }\n\n      &.MuiAutocomplete-option[aria-selected="true"] {\n        &:hover {\n          background-color: ${semanticColors?.base?.fillHover} !important;\n        }\n\n        svg.check-icon {\n          color: ${selected?semanticColors?.accent?.iconSelected:semanticColors?.base?.iconPrimary};\n        }\n      }\n\n      &.MuiAutocomplete-option[aria-disabled="true"] {\n        opacity: 1;\n      }\n\n      &:hover {\n        background-color: ${semanticColors?.base?.fillHover};\n        svg.check-icon {\n          color: ${selected?semanticColors?.accent?.iconHover:semanticColors?.base?.iconPrimary};\n        }\n      }\n\n      &.Mui-selected.MuiListItem-root.MuiListItem-button {\n        background-color: ${semanticColors?.base?.surfacePrimary};\n        &:hover {\n          background-color: ${semanticColors?.base?.fillHover};\n        }\n        .primary-text {\n          font-weight: ${fontWeights?.semibold};\n        }\n      }\n\n      &:active {\n        svg.check-icon {\n          color: ${semanticColors?.accent?.iconPressed};\n        }\n\n        &:active {\n          svg.check-icon {\n            color: ${semanticColors?.accent?.iconPressed};\n          }\n\n          .primary-text {\n            font-weight: ${fontWeights?.semibold};\n          }\n        }\n      }\n    `})),ContentWrapper=(0,emotion_styled_browser_esm.A)("span",{target:"em28i2e1"})("display:flex;justify-content:space-between;align-items:flex-start;width:100%;"),disabledStyles=props=>{const{disabled}=props;if(!disabled)return"";const semanticColors=(0,styles.Bd)(props);return`\n    color: ${semanticColors?.base?.textDisabled};\n    cursor: default;\n  `},TextWrapper=(0,emotion_styled_browser_esm.A)("span",{target:"em28i2e2"})(fonts.Zo," ",(props=>{const semanticColors=(0,styles.Bd)(props);return`\n      color: ${semanticColors?.base?.textPrimary};\n      display: flex;\n      white-space: pre-wrap;\n    `})," ",disabledStyles),StyledMenuItemIcon=(0,emotion_styled_browser_esm.A)("span",{target:"em28i2e3"})((props=>{const{disabled}=props,spaces=(0,styles.oZ)(props),iconSizes=(0,styles.I7)(props),semanticColors=(0,styles.Bd)(props);return`\n      margin-right: ${spaces?.xs}px;\n      margin-top: ${spaces?.xxxs}px;\n      height: ${iconSizes?.s.height}px;\n\n      .MuiSvgIcon-root {\n        ${disabled?`color: ${semanticColors?.base?.iconDisabled};`:null}\n      }\n    `})),ColumnWrapper=(0,emotion_styled_browser_esm.A)("span",{target:"em28i2e4"})(fonts.Zo," ",(props=>{const semanticColors=(0,styles.Bd)(props),spaces=(0,styles.oZ)(props);return`\n      text-align: right;\n      color: ${semanticColors?.base?.textPrimary};\n      margin-left: ${spaces?.m}px;\n    `})," ",disabledStyles),StyledIconWrapper=(0,emotion_styled_browser_esm.A)("span",{target:"em28i2e5"})((props=>{const spaces=(0,styles.oZ)(props),iconSizes=(0,styles.I7)(props);return`\n      align-self: start;\n      margin-right: ${spaces?.m}px;\n      margin-top: ${spaces?.xxxs}px;\n      height: ${iconSizes?.s.height}px;\n    `})),StyledCheck=(0,emotion_styled_browser_esm.A)(Check.A,{shouldForwardProp:prop=>"selected"!==prop,target:"em28i2e6"})((props=>{const{selected,disabled}=props,iconSizes=(0,styles.I7)(props),semanticColors=(0,styles.Bd)(props);return`\n      color: ${selected?disabled?semanticColors?.base?.iconDisabled:semanticColors?.accent?.icon:"transparent"};\n      padding: 0;\n      height: ${iconSizes?.s.height}px;\n      width: ${iconSizes?.s.width}px;\n\n      &.MuiCheckbox-colorPrimary.Mui-checked:hover {\n        background-color: transparent;\n      }\n    `})),StyledMinus=(0,emotion_styled_browser_esm.A)(Remove.A,{shouldForwardProp:prop=>"selected"!==prop,target:"em28i2e7"})((props=>{const{selected,disabled}=props,semanticColors=(0,styles.Bd)(props),iconSizes=(0,styles.I7)(props);return`\n      color: ${selected?disabled?semanticColors?.base?.iconDisabled:semanticColors?.accent?.icon:"transparent"};\n      padding: 0;\n      height: ${iconSizes?.s.height}px;\n      width: ${iconSizes?.s.width}px;\n\n      &.MuiCheckbox-colorPrimary.Mui-checked:hover {\n        background-color: transparent;\n      }\n    `})),MenuItem_MenuItem=(0,react.forwardRef)((function MenuItem(props,ref){const{children,column=null,disabled,isMultiSelect=!1,icon:newIcon,sdsIcon,sdsIconProps,sdsStyle="determinate",...originalMenuItemProps}=props,{selected=!1}=originalMenuItemProps,icon=newIcon||sdsIcon;return(0,jsx_runtime.jsxs)(StyledMenuItem,{...originalMenuItemProps,disabled,ref,children:[isMultiSelect&&("determinate"===sdsStyle?(0,jsx_runtime.jsx)(StyledIconWrapper,{children:(0,jsx_runtime.jsx)(StyledCheck,{className:"check-icon",selected,color:"primary",disabled})}):(0,jsx_runtime.jsx)(StyledIconWrapper,{children:(0,jsx_runtime.jsx)(StyledMinus,{className:"check-icon",selected,color:"primary",disabled})})),(0,jsx_runtime.jsxs)(ContentWrapper,{children:[(0,jsx_runtime.jsxs)(TextWrapper,{selected,className:"primary-text",disabled,children:[(()=>{if(icon)return"string"!=typeof icon?(0,jsx_runtime.jsx)(StyledMenuItemIcon,{disabled,children:icon}):(0,jsx_runtime.jsx)(StyledMenuItemIcon,{disabled,children:(0,jsx_runtime.jsx)(Icon.A,{color:"blue",...sdsIconProps,sdsType:"static",sdsIcon:icon,sdsSize:"s"})})})(),children]}),column&&(0,jsx_runtime.jsx)(ColumnWrapper,{disabled,children:column})]})]})})),core_MenuItem=MenuItem_MenuItem;MenuItem_MenuItem.__docgenInfo={description:"@see https://mui.com/material-ui/react-menu/",methods:[],displayName:"MenuItem",props:{column:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},isMultiSelect:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"IconName | React.ReactElement<CustomSVGProps>",elements:[{name:"IconName"},{name:"ReactReactElement",raw:"React.ReactElement<CustomSVGProps>",elements:[{name:"CustomSVGProps"}]}]},description:""},sdsIcon:{required:!1,tsType:{name:"union",raw:"IconName | React.ReactElement<CustomSVGProps>",elements:[{name:"IconName"},{name:"ReactReactElement",raw:"React.ReactElement<CustomSVGProps>",elements:[{name:"CustomSVGProps"}]}]},description:"@deprecated Use `icon` instead.\n(masoudmanson): This prop is deprecated and will be removed in the next major version.\nPlease replace instances of `sdsIcon` with `icon`."},sdsIconProps:{required:!1,tsType:{name:"Partial",elements:[{name:"IconProps",elements:[{name:"IconName"}],raw:"IconProps<IconName>"}],raw:"Partial<IconProps<IconName>>"},description:""},sdsStyle:{required:!1,tsType:{name:"union",raw:'"determinate" | "indeterminate"',elements:[{name:"literal",value:'"determinate"'},{name:"literal",value:'"indeterminate"'}]},description:""}}}},"./packages/components/src/core/Pagination/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_Pagination});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),MenuItem=__webpack_require__("./packages/components/src/core/MenuItem/index.tsx"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),Button=__webpack_require__("./packages/components/src/core/Button/index.tsx"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");const doNotForwardProps=["sdsStyle","selected","onPageChange","onNextPage","onPreviousPage","goToPage","totalCount","siblingCount","currentPage","pageSize","truncateDropdown"],StyledPaginationButton=(0,emotion_styled_browser_esm.A)(Button.A,{target:"eeq9fzv0"})((props=>{const semanticColors=(0,styles.Bd)(props);return`\n      width: 32px;\n      height: 32px;\n      cursor: "pointer";\n\n      & .MuiSvgIcon-root {\n        width: 10px;\n        color: ${semanticColors?.base?.iconPrimary}\n      }\n\n      &:hover {\n        background-color: ${semanticColors?.base?.fillHover};\n\n        & .MuiSvgIcon-root {\n          color: ${semanticColors?.base?.iconPrimaryHover}\n        }\n      }\n    `})),StyledPaginationChevronList=(0,emotion_styled_browser_esm.A)("li",{shouldForwardProp:prop=>!doNotForwardProps.includes(prop),target:"eeq9fzv1"})((props=>{const{disabled}=props,spaces=(0,styles.oZ)(props),semanticColors=(0,styles.Bd)(props);return`\n      width: 32px;\n      height: 32px;\n      cursor: ${disabled?"auto":"pointer"};\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: 32px;\n\n      &[data-order="first"] {\n        margin-right: ${spaces?.l}px;\n      }\n\n      &[data-order="last"] {\n        margin-left: ${spaces?.l}px;\n      }\n\n      & .MuiSvgIcon-root {\n        color: ${disabled?semanticColors?.base?.iconDisabled:semanticColors?.base?.iconPrimary};\n      }\n\n      &:hover {\n        background-color: ${disabled?"transparent":semanticColors?.base?.fillHover};\n\n        & .MuiSvgIcon-root {\n          color: ${disabled?semanticColors?.base?.iconDisabled:semanticColors?.base?.iconPrimaryHover}\n        }\n      }\n\n      ${(0,styles.UT)(props)}\n    `})),StyledPagination=(0,emotion_styled_browser_esm.A)("ul",{shouldForwardProp:prop=>!doNotForwardProps.includes(prop),target:"eeq9fzv2"})(styles.JU,"  display:flex;flex-wrap:wrap;padding:0;margin:0;& li{list-style:none;}"),Page=(0,emotion_styled_browser_esm.A)("li",{shouldForwardProp:prop=>!doNotForwardProps.includes(prop),target:"eeq9fzv3"})(styles.qz," ",(props=>{const{selected,sdsStyle}=props,spaces=(0,styles.oZ)(props),corners=(0,styles.VP)(props),semanticColors=(0,styles.Bd)(props);return`\n      color: ${semanticColors?.base?.textSecondary};\n      cursor: pointer;\n      list-style: none;\n      width: 32px;\n      height: 32px;\n      margin-right: ${spaces?.l}px;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      border-radius: ${"round"===sdsStyle?corners?.l:corners?.m}px;\n      user-select: none;\n      &:hover {\n        background-color: ${semanticColors?.base?.fillHover};\n        color: ${semanticColors?.base?.textPrimary};\n      }\n\n      &:nth-last-of-type(-n+2) {\n        margin-right: 0;\n      }\n\n      ${selected&&(props=>{const semanticColors=(0,styles.Bd)(props);return`\n    background-color: ${semanticColors?.base?.fillSelected};\n    color: ${semanticColors?.base?.textPrimaryInverse};\n\n    &:hover {\n      background-color: ${semanticColors?.base?.fillSelected};\n      color: ${semanticColors?.base?.textPrimaryInverse};\n    }\n  `})(props)};\n      ${(0,styles.UT)(props)}\n    `}));var Menu=__webpack_require__("./packages/components/src/core/Menu/index.tsx");const StyledPaginationDropdownMenu=(0,emotion_styled_browser_esm.A)(Menu.A,{target:"e3yd48o0"})("& .MuiPaper-root{max-height:120px;}"),PageListDropdown=props=>{const{pageList,onPageChange,sdsStyle}=props,[anchorEl,setAnchorEl]=(0,react.useState)(null),handleClose=()=>{setAnchorEl(null)};return(0,jsx_runtime.jsxs)(Page,{sdsStyle,children:[(0,jsx_runtime.jsx)(StyledPaginationButton,{"aria-label":"Go to a page",onClick:event=>{setAnchorEl(event.currentTarget)},icon:"DotsHorizontal",sdsSize:"small",sdsStyle:"icon",sdsType:"tertiary"}),(0,jsx_runtime.jsx)(StyledPaginationDropdownMenu,{anchorEl,keepMounted:!0,open:Boolean(anchorEl),onClose:handleClose,children:pageList.map((page=>(0,jsx_runtime.jsx)(MenuItem.A,{onClick:()=>{onPageChange(page),handleClose()},children:page},page)))})]})},components_PageListDropdown=PageListDropdown;PageListDropdown.__docgenInfo={description:"",methods:[],displayName:"PageListDropdown",props:{pageList:{required:!0,tsType:{name:"Array",elements:[{name:"number"}],raw:"number[]"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},sdsStyle:{required:!0,tsType:{name:"union",raw:'"round" | "square"',elements:[{name:"literal",value:'"round"'},{name:"literal",value:'"square"'}]},description:""}}};const range=(start,end)=>{const length=end-start+1;return Array.from({length},((_,idx)=>idx+start))};var Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx");const PaginationPageList=(paginationRange,truncateDropdown,sdsStyle,onPageChange,currentPage)=>paginationRange.map((pageNumber=>Array.isArray(pageNumber)?truncateDropdown?(0,jsx_runtime.jsx)(components_PageListDropdown,{pageList:pageNumber,onPageChange,sdsStyle},pageNumber.join("-")):(0,jsx_runtime.jsx)(Page,{sdsStyle,children:(0,jsx_runtime.jsx)(StyledPaginationButton,{"aria-label":"Go to a page",disabled:!0,icon:"DotsHorizontal",sdsSize:"small",sdsStyle:"icon",sdsType:"tertiary"})},pageNumber.join("-")):(0,jsx_runtime.jsx)(Page,{onClick:()=>onPageChange(pageNumber),onKeyDown:event=>function handlePageKeyDown(event,pageNumber){"Enter"!==event.key&&"Space"!==event.code||onPageChange(pageNumber)}(event,pageNumber),selected:pageNumber===currentPage,sdsStyle,tabIndex:0,children:pageNumber},pageNumber))),Pagination=(0,react.forwardRef)(((props,ref)=>{const{sdsStyle="round",onPageChange,onNextPage,onPreviousPage,totalCount,siblingCount=1,currentPage,pageSize,truncateDropdown=!0}=props;if(pageSize<1)throw new Error("PageSize can not be smaller than 1!");const paginationRange=(({totalCount,pageSize,siblingCount=1,currentPage})=>(0,react.useMemo)((()=>{const totalPageCount=Math.ceil(totalCount/pageSize);if(siblingCount+5>=totalPageCount)return range(1,totalPageCount);const leftSiblingIndex=Math.max(currentPage-siblingCount,1),rightSiblingIndex=Math.min(currentPage+siblingCount,totalPageCount),shouldShowLeftDots=leftSiblingIndex>2,shouldShowRightDots=rightSiblingIndex<totalPageCount-2,lastPageIndex=totalPageCount;if(!shouldShowLeftDots&&shouldShowRightDots){const leftItemCount=3+2*siblingCount;return[...range(1,leftItemCount),range(leftItemCount+1,totalPageCount-1),totalPageCount]}if(shouldShowLeftDots&&!shouldShowRightDots){const rightItemCount=3+2*siblingCount,rightRange=range(totalPageCount-rightItemCount+1,totalPageCount);return[1,range(2,totalPageCount-rightItemCount),...rightRange]}if(shouldShowLeftDots&&shouldShowRightDots){const middleRange=range(leftSiblingIndex,rightSiblingIndex);return[1,range(2,leftSiblingIndex-1),...middleRange,range(rightSiblingIndex+1,totalPageCount-1),lastPageIndex]}}),[totalCount,pageSize,siblingCount,currentPage]))({currentPage,pageSize,siblingCount,totalCount})||[];if(0===currentPage||paginationRange.length<2)return null;const lastPage=paginationRange[paginationRange.length-1];return(0,jsx_runtime.jsxs)(StyledPagination,{ref,...props,children:[(0,jsx_runtime.jsx)(StyledPaginationChevronList,{"data-order":"first",disabled:1===currentPage,onClick:()=>currentPage>1&&onPreviousPage(),onKeyDown:function handleGoBackButtonKeyDown(event){("Enter"===event.key||"Space"===event.code)&&currentPage>1&&onPreviousPage()},tabIndex:0,children:(0,jsx_runtime.jsx)(Icon.A,{"aria-label":"Previous page",sdsIcon:"ChevronLeft",sdsSize:"xs",sdsType:"button"})},"prevPage"),PaginationPageList(paginationRange,truncateDropdown,sdsStyle,onPageChange,currentPage),(0,jsx_runtime.jsx)(StyledPaginationChevronList,{"data-order":"last",disabled:currentPage===lastPage,onClick:()=>currentPage!==lastPage&&onNextPage(),onKeyDown:function handleGoNextButtonKeyDown(event){"Enter"!==event.key&&"Space"!==event.code||currentPage===lastPage||onNextPage()},tabIndex:0,children:(0,jsx_runtime.jsx)(Icon.A,{"aria-label":"Next page",sdsIcon:"ChevronRight",sdsSize:"xs",sdsType:"button"})},"onNextPage")]})})),core_Pagination=Pagination;Pagination.__docgenInfo={description:"",methods:[],displayName:"Pagination",props:{sdsStyle:{required:!1,tsType:{name:"union",raw:'"round" | "square"',elements:[{name:"literal",value:'"round"'},{name:"literal",value:'"square"'}]},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},selected:{required:!1,tsType:{name:"boolean"},description:""},truncateDropdown:{required:!1,tsType:{name:"boolean"},description:""},onPageChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},onNextPage:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onPreviousPage:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},totalCount:{required:!0,tsType:{name:"number"},description:""},siblingCount:{required:!1,tsType:{name:"number"},description:""},currentPage:{required:!0,tsType:{name:"number"},description:""},pageSize:{required:!0,tsType:{name:"number"},description:""}},composes:["CommonThemeProps"]}}}]);