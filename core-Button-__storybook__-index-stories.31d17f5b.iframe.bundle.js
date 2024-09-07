"use strict";(self.webpackChunk_czi_sds_monorepo=self.webpackChunk_czi_sds_monorepo||[]).push([[1447],{"./packages/components/src/core/Button/__storybook__/index.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,ScreenshotTest:()=>ScreenshotTest,Test:()=>Test,__namedExportsOrder:()=>__namedExportsOrder,default:()=>index_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./packages/components/src/core/Button/index.tsx"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),customSdsIcon=__webpack_require__("./packages/components/src/common/storybook/customSdsIcon.tsx"),customSvgIcon=__webpack_require__("./packages/components/src/common/storybook/customSvgIcon.tsx");const BUTTON_EXCLUDED_CONTROLS=["endIcon","startIcon","onClick","sdsStyle","sdsType","text","label","disabled","sdsSize","icon","sdsIconProps","isAllCaps"],BUTTON_SDS_SIZE=["small","medium","large"],BUTTON_ICON_OPTIONS=[void 0,"XMark","Download","Copy","DotsHorizontal","Cube",(0,jsx_runtime.jsx)(customSdsIcon.A,{},"customSdsIcon"),(0,jsx_runtime.jsx)(customSvgIcon.A,{},"customIcon")],BUTTON_ICON_LABELS=["No Icon","SDS Icon: XMark","SDS Icon: Download","SDS Icon: Copy","SDS Icon: DotsHorizontal","SDS Icon: Cube","Custom SDS Icon","Custom SVG Icon"],BUTTON_DISABLED_OPTIONS=[!1,!0],BUTTON_PSEUDO_STATES=["default","hover","active","focus-visible"],BUTTON_ACTIONS={onClick:(0,dist.XI)("onClick")},SCREENSHOT_BUTTON_ICON_OPTIONS=[void 0,"Download"],SCREENSHOT_BUTTON_SDS_STYLES=["rounded","square","minimal"],SCREENSHOT_BUTTON_SDS_TYPES=["primary","secondary","destructive"],BUTTON_ICON_SDS_TYPES=["primary","secondary","tertiary"],BUTTON_ICON_SDS_SIZES=["large","medium","small"],BUTTON_ICON_DISABLED_OPTIONS=[!1,!0],BUTTON_ICON_PSEUDO_STATES=["default","hover","active","focus-visible"];var Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx");const ScreenshotTestDemo=props=>{const topLevel={columnGap:"20px",display:"inline-grid",fontFamily:"sans-serif",marginRight:"50px"},displayContents={display:"contents"},penultimateLevel={display:"contents"},bottomLevel={marginBottom:10},fontWeightNormal={fontWeight:"normal"},topLabel={...fontWeightNormal,fontSize:"2em",gridColumn:"1 / 6",marginBottom:0},midLabel={...fontWeightNormal,borderStyle:"solid none none none",gridColumn:"1 / 6",justifySelf:"stretch",paddingTop:10},secondLabel={...midLabel,borderWidth:"2px",fontSize:"1.17em",margin:"20px 0"},thirdLabel={...midLabel,alignSelf:"end",borderWidth:"1px",fontWeight:"normal",margin:"0 0 5px 0"},bottomLabel={...fontWeightNormal,margin:"10px 0"},MID_LABEL={borderStyle:"solid none none none",gridColumn:"1 / 6",justifySelf:"stretch",paddingTop:10},DISPLAY_CONTENTS={display:"contents"};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[SCREENSHOT_BUTTON_SDS_STYLES.map((sdsStyle=>(0,jsx_runtime.jsx)(ButtonStyleOption,{sdsStyle},sdsStyle))),(0,jsx_runtime.jsx)("div",{children:BUTTON_ICON_SDS_TYPES.map((sdsType=>(0,jsx_runtime.jsx)(ButtonIconTypeOption,{sdsType},sdsType)))})]});function ButtonStyleOption({sdsStyle}){return(0,jsx_runtime.jsxs)("div",{style:topLevel,children:[(0,jsx_runtime.jsxs)("h3",{style:topLabel,children:["Style: ",(0,jsx_runtime.jsx)("b",{children:sdsStyle})]}),SCREENSHOT_BUTTON_SDS_TYPES.map((type=>"minimal"===sdsStyle&&"destructive"===type?null:(0,jsx_runtime.jsx)(ButtonTypeOption,{sdsStyle,type},type)))]})}function ButtonTypeOption({sdsStyle,type}){return(0,jsx_runtime.jsxs)("div",{style:displayContents,children:[(0,jsx_runtime.jsxs)("h4",{style:secondLabel,children:["Type: ",(0,jsx_runtime.jsx)("b",{children:type})]}),SCREENSHOT_BUTTON_ICON_OPTIONS.map((icon=>void 0!==icon?"minimal"===sdsStyle?(0,jsx_runtime.jsx)(ButtonIconOption,{sdsStyle,type,icon:(0,jsx_runtime.jsx)(Icon.A,{sdsIcon:icon,sdsType:"button",sdsSize:"s"})},String(icon)):(0,jsx_runtime.jsx)(ButtonIconOption,{sdsStyle,type,icon:(0,jsx_runtime.jsx)(Icon.A,{sdsIcon:icon,sdsType:"button",sdsSize:"l"})},String(icon)):(0,jsx_runtime.jsx)(ButtonIconOption,{sdsStyle,type,icon:void 0},String(icon))))]})}function ButtonIconOption({sdsStyle,type,icon}){return(0,jsx_runtime.jsxs)("div",{style:displayContents,children:[(0,jsx_runtime.jsxs)("h5",{style:thirdLabel,children:["Icon: ",(0,jsx_runtime.jsx)("b",{children:icon?"yes":"no"})]}),BUTTON_DISABLED_OPTIONS.map((disabled=>(0,jsx_runtime.jsx)(ButtonDisabledOption,{sdsStyle,type,icon,disabled},String(disabled))))]})}function ButtonDisabledOption({sdsStyle,type,icon,disabled}){return(0,jsx_runtime.jsx)("div",{style:penultimateLevel,children:BUTTON_PSEUDO_STATES.map((state=>(0,jsx_runtime.jsx)("div",{style:bottomLevel,children:(!1===disabled||!0===disabled&&"default"===state)&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("h6",{style:bottomLabel,children:[!1===disabled?"State: ":"Disabled: ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("b",{children:!1===disabled?state:"true"})]}),(0,react.createElement)(Button.A,{...props,"data-testid":"button",sdsStyle,sdsType:type,startIcon:icon,disabled,className:`pseudo-${state}`,key:state},"Label")]})},state)))})}function ButtonIconTypeOption({sdsType}){return(0,jsx_runtime.jsxs)("div",{style:{columnGap:"20px",display:"inline-grid",fontFamily:"sans-serif",marginRight:"50px"},children:[(0,jsx_runtime.jsxs)("p",{style:{fontSize:"2em",gridColumn:"1 / 6",marginBottom:0},children:["Type: ",(0,jsx_runtime.jsx)("b",{children:sdsType})]}),BUTTON_ICON_SDS_SIZES.map((sdsSize=>(0,jsx_runtime.jsx)(ButtonIconSizeOption,{sdsType,sdsSize},sdsSize)))]})}function ButtonIconSizeOption({sdsType,sdsSize}){const LABEL_STYLE={...MID_LABEL,borderWidth:"2px",fontSize:"1.17em",margin:"20px 0"};return(0,jsx_runtime.jsxs)("div",{style:DISPLAY_CONTENTS,children:[(0,jsx_runtime.jsxs)("p",{style:LABEL_STYLE,children:["Size: ",(0,jsx_runtime.jsx)("b",{children:sdsSize})]}),BUTTON_ICON_DISABLED_OPTIONS.map((disabled=>(0,jsx_runtime.jsx)(ButtonIconDisabledOption,{sdsType,sdsSize,disabled},String(disabled))))]})}function ButtonIconDisabledOption({sdsType,sdsSize,disabled}){const SDS_ICONS={primary:{large:"Cube",medium:"Cube",small:"Cube"},secondary:{large:"ExclamationMarkCircle",medium:"ExclamationMarkCircle",small:"ExclamationMarkCircle"},tertiary:{large:"XMark",medium:"XMark",small:"XMark"}},PSEUDO_STATE_LEVEL={marginBottom:10},PSEUDO_STATE_LABEL={fontSize:"0.67em",margin:"10px 0"};return(0,jsx_runtime.jsx)("div",{style:{display:"contents"},children:BUTTON_ICON_PSEUDO_STATES.map((state=>{const icon=SDS_ICONS[sdsType][sdsSize];return(0,jsx_runtime.jsx)("div",{style:PSEUDO_STATE_LEVEL,children:(!1===disabled||!0===disabled&&"default"===state)&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)("p",{style:PSEUDO_STATE_LABEL,children:[!1===disabled?"State: ":"Disabled: ",(0,jsx_runtime.jsx)("br",{}),(0,jsx_runtime.jsx)("b",{children:!1===disabled?state:"true"})]}),(0,jsx_runtime.jsx)(Button.A,{"aria-label":icon,icon,"data-testid":"button-icon",sdsStyle:"icon",sdsType,sdsSize,disabled,className:`pseudo-${state}`},state)]})},`div-${state}`)}))})}};ScreenshotTestDemo.__docgenInfo={description:"",methods:[],displayName:"ScreenshotTestDemo"};var Callout=__webpack_require__("./packages/components/src/core/Callout/index.tsx"),CalloutTitle=__webpack_require__("./packages/components/src/core/Callout/components/CalloutTitle/index.tsx");const ButtonIconSizeToSdsIconSize={large:"xl",medium:"l",small:"s"},InvalidIconButtonPropsError=(0,jsx_runtime.jsxs)(Callout.A,{intent:"negative",children:[(0,jsx_runtime.jsx)(CalloutTitle.A,{children:"Invalid Props!"}),(0,jsx_runtime.jsxs)("p",{children:["The ",(0,jsx_runtime.jsx)("strong",{children:"icon"})," styled Button must include an icon. Please choose an icon from from the controls section."]})]}),InvalidSdsTypeTertiaryError=(0,jsx_runtime.jsxs)(Callout.A,{intent:"negative",children:[(0,jsx_runtime.jsx)(CalloutTitle.A,{children:"Invalid Props!"}),(0,jsx_runtime.jsxs)("p",{children:["Only buttons with the ",(0,jsx_runtime.jsx)("strong",{children:"icon"})," style can have the"," ",(0,jsx_runtime.jsx)("strong",{children:"tertiary"})," type. Please select another type, either"," ",(0,jsx_runtime.jsx)("strong",{children:"primary"})," or ",(0,jsx_runtime.jsx)("strong",{children:"secondary"}),"."]})]}),InvalidSdsTypeDestructiveError=(0,jsx_runtime.jsxs)(Callout.A,{intent:"negative",children:[(0,jsx_runtime.jsx)(CalloutTitle.A,{children:"Invalid Props!"}),(0,jsx_runtime.jsxs)("p",{children:["Buttons with the ",(0,jsx_runtime.jsx)("strong",{children:"icon"})," or ",(0,jsx_runtime.jsx)("strong",{children:"minimal"})," styles cannot have the ",(0,jsx_runtime.jsx)("strong",{children:"destructive"})," type. Please choose another type, such as ",(0,jsx_runtime.jsx)("strong",{children:"square"})," or ",(0,jsx_runtime.jsx)("strong",{children:"rounded"}),"."]})]}),default_Button=props=>{const{sdsType,sdsStyle,sdsSize,text,startIcon,endIcon,icon}=props,finalIconSize=((sdsStyle,sdsSize)=>"minimal"===sdsStyle?"s":"icon"===sdsStyle?ButtonIconSizeToSdsIconSize[sdsSize]:"l")(sdsStyle,sdsSize);let startIconFinal=startIcon,endIconFinal=endIcon;return startIcon&&finalIconSize&&(startIconFinal="string"!=typeof startIcon?react.cloneElement(startIcon,{sdsSize:finalIconSize}):(0,jsx_runtime.jsx)(Icon.A,{sdsIcon:startIcon,sdsType:"button",sdsSize:finalIconSize})),endIcon&&finalIconSize&&(endIconFinal="string"!=typeof endIcon?react.cloneElement(endIcon,{sdsSize:finalIconSize}):(0,jsx_runtime.jsx)(Icon.A,{sdsIcon:endIcon,sdsType:"button",sdsSize:finalIconSize})),"icon"===sdsStyle&&void 0===icon?InvalidIconButtonPropsError:"icon"!==sdsStyle&&"tertiary"===sdsType?InvalidSdsTypeTertiaryError:"icon"!==sdsStyle&&"minimal"!==sdsStyle||"destructive"!==sdsType?(0,jsx_runtime.jsx)(Button.A,{...props,startIcon:startIconFinal,endIcon:endIconFinal,children:text}):InvalidSdsTypeDestructiveError};default_Button.__docgenInfo={description:"",methods:[],displayName:"Button"};var storybookBadges=__webpack_require__("./packages/components/src/common/storybook/storybookBadges.ts");const index_stories={argTypes:{endIcon:{control:{labels:BUTTON_ICON_LABELS,type:"select"},if:{arg:"sdsStyle",neq:"icon"},mapping:BUTTON_ICON_OPTIONS,options:Object.keys(BUTTON_ICON_OPTIONS)},icon:{control:{labels:BUTTON_ICON_LABELS,type:"select"},if:{arg:"sdsStyle",eq:"icon"},mapping:BUTTON_ICON_OPTIONS,options:Object.keys(BUTTON_ICON_OPTIONS)},isAllCaps:{control:{type:"boolean"}},onClick:{action:BUTTON_ACTIONS.onClick},sdsSize:{control:{labels:BUTTON_SDS_SIZE,type:"select"},if:{arg:"sdsStyle",eq:"icon"},mapping:BUTTON_SDS_SIZE,options:Object.keys(BUTTON_SDS_SIZE)},sdsStyle:{control:{type:"select"},options:["rounded","square","minimal","icon"]},sdsType:{control:{type:"select"},options:["primary","secondary","tertiary","destructive"]},startIcon:{control:{labels:BUTTON_ICON_LABELS,type:"select"},if:{arg:"sdsStyle",neq:"icon"},mapping:BUTTON_ICON_OPTIONS,options:Object.keys(BUTTON_ICON_OPTIONS)},text:{control:{type:"text"},if:{arg:"sdsStyle",neq:"icon"}}},component:default_Button,parameters:{badges:[storybookBadges.y.STABLE]},title:"Components/Button"},Default={args:{disabled:!1,icon:"Cube",sdsSize:"medium",sdsStyle:"rounded",sdsType:"primary",text:"Label"}},ScreenshotTest={args:{label:"Label"},parameters:{controls:{exclude:BUTTON_EXCLUDED_CONTROLS},snapshot:{skip:!0}},render:args=>(0,jsx_runtime.jsx)(ScreenshotTestDemo,{...args})},Test={args:{disabled:!1,sdsStyle:"rounded",sdsType:"primary",text:"Label"},parameters:{controls:{exclude:BUTTON_EXCLUDED_CONTROLS},snapshot:{skip:!0}},render:props=>(0,jsx_runtime.jsx)(default_Button,{...props,"data-testid":"button"})},__namedExportsOrder=["Default","ScreenshotTest","Test"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    disabled: false,\n    icon: "Cube",\n    sdsSize: "medium",\n    sdsStyle: "rounded",\n    sdsType: "primary",\n    text: "Label"\n  }\n}',...Default.parameters?.docs?.source}}},ScreenshotTest.parameters={...ScreenshotTest.parameters,docs:{...ScreenshotTest.parameters?.docs,source:{originalSource:'{\n  args: {\n    label: "Label"\n  },\n  parameters: {\n    controls: {\n      exclude: BUTTON_EXCLUDED_CONTROLS\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (args: Args) => <ScreenshotTestDemo {...args} />\n}',...ScreenshotTest.parameters?.docs?.source}}},Test.parameters={...Test.parameters,docs:{...Test.parameters?.docs,source:{originalSource:'{\n  args: {\n    disabled: false,\n    sdsStyle: "rounded",\n    sdsType: "primary",\n    text: "Label"\n  },\n  parameters: {\n    controls: {\n      exclude: BUTTON_EXCLUDED_CONTROLS\n    },\n    snapshot: {\n      skip: true\n    }\n  },\n  render: (props: Args) => <Button {...props} data-testid="button" />\n}',...Test.parameters?.docs?.source}}}},"./packages/components/src/common/storybook/customSdsIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_core_Icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/components/src/core/Icon/index.tsx");function CustomSdsIcon(props){const{sdsIcon="Bacteria",sdsSize="l",sdsType="static",color="blue",shade=400,...rest}=props;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_core_Icon__WEBPACK_IMPORTED_MODULE_1__.A,{sdsIcon,sdsSize,sdsType,color,shade,...rest})}const __WEBPACK_DEFAULT_EXPORT__=CustomSdsIcon;CustomSdsIcon.__docgenInfo={description:"CustomSdsIcon is an Icon component built on top of the core SDS Icon.\nThis custom component is designed for use in Storybook demos,\nallowing easy customization.",methods:[],displayName:"CustomSdsIcon",props:{sdsIcon:{required:!1,tsType:{name:'intersection["sdsIcon"]',raw:'IconProps<"Bacteria">["sdsIcon"]'},description:""},sdsSize:{required:!1,tsType:{name:'intersection["sdsSize"]',raw:'IconProps<"Bacteria">["sdsSize"]'},description:""},sdsType:{required:!1,tsType:{name:'intersection["sdsType"]',raw:'IconProps<"Bacteria">["sdsType"]'},description:""},color:{required:!1,tsType:{name:'intersection["color"]',raw:'IconProps<"Bacteria">["color"]'},description:""},shade:{required:!1,tsType:{name:'intersection["shade"]',raw:'IconProps<"Bacteria">["shade"]'},description:""}}}},"./packages/components/src/common/storybook/customSvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_mui_material__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@mui/material/SvgIcon/SvgIcon.js");function CustomSvgIcon(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.A,{color:"primary",viewBox:"2 2 20 20",...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M7 19c-1.1 0-2 .9-2 2h14c0-1.1-.9-2-2-2h-4v-2h3c1.1 0 2-.9 2-2h-8c-1.66 0-3-1.34-3-3 0-1.09.59-2.04 1.46-2.56C8.17 9.03 8 8.54 8 8c0-.21.04-.42.09-.62C6.28 8.13 5 9.92 5 12c0 2.76 2.24 5 5 5v2z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path",{d:"M10.56 5.51C11.91 5.54 13 6.64 13 8c0 .75-.33 1.41-.85 1.87l.59 1.62.94-.34.34.94 1.88-.68-.34-.94.94-.34-2.74-7.53-.94.34-.34-.94-1.88.68.34.94-.94.35z"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle",{cx:"10.5",cy:"8",r:"1.5"})]})}const __WEBPACK_DEFAULT_EXPORT__=CustomSvgIcon;CustomSvgIcon.__docgenInfo={description:"CustomSvgIcon is a component that extends the SvgIcon component from the Material-UI library.\nIt allows easy usage of custom SVG icons with in the storybook demos.",methods:[],displayName:"CustomSvgIcon"}},"./packages/components/src/core/Callout/components/CalloutTitle/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>components_CalloutTitle});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),constants=__webpack_require__("./packages/components/src/core/Callout/constants.ts"),AlertTitle=__webpack_require__("./node_modules/@mui/material/AlertTitle/AlertTitle.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");const StyledCalloutTitle=(0,emotion_styled_browser_esm.A)(AlertTitle.A,{target:"e1l6x9tq0"})(styles.Zo," ",(props=>{const spaces=(0,styles.oZ)(props);return`\n      margin: ${spaces?.xxxs}px 0 ${spaces?.xs}px;\n    `})),CalloutTitle=({children})=>(0,jsx_runtime.jsx)(StyledCalloutTitle,{children});CalloutTitle.displayName=constants.P;const components_CalloutTitle=CalloutTitle;CalloutTitle.__docgenInfo={description:"",methods:[]}},"./packages/components/src/core/Callout/constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{P:()=>CALLOUT_TITLE_DISPLAY_NAME});const CALLOUT_TITLE_DISPLAY_NAME="CalloutTitle"},"./packages/components/src/core/Callout/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>core_Callout});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Grow=__webpack_require__("./node_modules/@mui/material/Grow/Grow.js"),react=__webpack_require__("./node_modules/react/index.js"),Button=__webpack_require__("./packages/components/src/core/Button/index.tsx"),Icon=__webpack_require__("./packages/components/src/core/Icon/index.tsx"),constants=__webpack_require__("./packages/components/src/core/Callout/constants.ts"),Alert=__webpack_require__("./node_modules/@mui/material/Alert/Alert.js"),alertClasses=__webpack_require__("./node_modules/@mui/material/Alert/alertClasses.js"),alertTitleClasses=__webpack_require__("./node_modules/@mui/material/AlertTitle/alertTitleClasses.js"),emotion_styled_browser_esm=__webpack_require__("./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js"),styles=__webpack_require__("./packages/components/src/core/styles/index.ts");const doNotForwardProps=["calloutTitle","collapsed","severity"],StyledCallout=(0,emotion_styled_browser_esm.A)(Alert.A,{shouldForwardProp:prop=>!doNotForwardProps.includes(prop),target:"e1tlf1u40"})(styles.Zo," ",(props=>{const{intent="info"}=props,spaces=(0,styles.oZ)(props),corners=(0,styles.VP)(props),iconSizes=(0,styles.I7)(props),palette=(0,styles.Sf)(props),typography=(0,styles.Of)(props),semanticColors=(0,styles.Bd)(props),iconColor=semanticColors?.[intent]?.ornament??"black",backgroundColor=semanticColors?.[intent]?.surfacePrimary??"white",titleBottomMargin=props.collapsed?"margin-bottom: 0;":"",alertMessagePaddingTop=Math.abs(((iconSizes?.l.height??0)-parseInt(String(typography?.styles?.body?.regular?.xs?.lineHeight??"0")))/2);return`\n      width: 360px;\n      margin: ${spaces?.m}px 0;\n      border-radius: ${corners?.m}px;\n      color: ${palette?.text?.primary};\n      padding: ${spaces?.m}px;\n      background-color: ${backgroundColor};\n\n      .${alertClasses.A.icon} {\n        height: ${iconSizes?.l.height}px;\n        width: ${iconSizes?.l.width}px;\n        margin-right: ${spaces?.s}px;\n        padding: 0;\n\n        path {\n          fill: ${iconColor};\n        }\n      }\n\n      .${alertClasses.A.message} {\n        padding: ${alertMessagePaddingTop}px 0 0;\n        margin-right: ${spaces?.m}px;\n\n        .${alertTitleClasses.A.root} {\n          margin-top: 0;\n          ${titleBottomMargin}\n        }\n      }\n\n      .${alertClasses.A.action} {\n        margin-right: 0;\n        padding: 0;\n        align-items: flex-start;\n        margin-top: ${spaces?.xxs}px;\n\n        > button {\n          padding: 0;\n        }\n      }\n    `})),Callout=({autoDismiss,children,dismissed,expandable,onClose,icon,sdsIconProps,intent,sdsStage,...rest})=>{const[hide,setHide]=(0,react.useState)(dismissed),[stage,setStage]=(0,react.useState)(sdsStage||"closed");(0,react.useEffect)((()=>{if(setHide(dismissed),autoDismiss){setTimeout((()=>{setHide(!0)}),"boolean"==typeof autoDismiss?8e3:autoDismiss)}}),[dismissed,autoDismiss]);const handleClose=event=>{setHide(!0),onClose&&onClose(event)},collapsed=expandable&&"closed"===stage||!1;let calloutContent,calloutTitle=children;return Array.isArray(children)&&children[0]?.type?.displayName===constants.P&&([calloutTitle,...calloutContent]=children),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsx)(Grow.A,{in:!hide,children:(0,jsx_runtime.jsxs)(StyledCallout,{onClose:onClose?handleClose:void 0,action:(collapsed=>expandable?(0,jsx_runtime.jsx)(Button.A,{"aria-label":collapsed?"open":"close",onClick:()=>{setStage(collapsed?"open":"closed")},sdsSize:"small",sdsType:"tertiary",sdsStyle:"icon",icon:collapsed?"ChevronDown":"ChevronUp"}):onClose?(0,jsx_runtime.jsx)(Button.A,{"aria-label":"Dismiss",onClick:handleClose,sdsSize:"small",sdsType:"tertiary",sdsStyle:"icon",size:"large",icon:"XMark"}):null)(collapsed),icon:(()=>{if(void 0!==icon)return"string"!=typeof icon?icon:(0,jsx_runtime.jsx)(Icon.A,{sdsSize:"l",sdsIcon:icon,sdsType:"static",...sdsIconProps});switch(intent){case"positive":return(0,jsx_runtime.jsx)(Icon.A,{sdsSize:"l",sdsIcon:"CheckCircle",sdsType:"static"});case"info":return(0,jsx_runtime.jsx)(Icon.A,{sdsSize:"l",sdsIcon:"InfoCircle",sdsType:"static"});default:return(0,jsx_runtime.jsx)(Icon.A,{sdsSize:"l",sdsIcon:"ExclamationMarkCircle",sdsType:"static"})}})(),intent,collapsed:collapsed||!1,...rest,children:[calloutTitle,!collapsed&&calloutContent]})})})},core_Callout=Callout;Callout.__docgenInfo={description:"@see https://mui.com/material-ui/react-alert/",methods:[],displayName:"Callout",props:{autoDismiss:{required:!1,tsType:{name:"union",raw:"boolean | number",elements:[{name:"boolean"},{name:"number"}]},description:""},dismissed:{required:!1,tsType:{name:"boolean"},description:""},expandable:{required:!1,tsType:{name:"boolean"},description:""},icon:{required:!1,tsType:{name:"union",raw:"keyof IconNameToSizes | React.ReactElement<CustomSVGProps>",elements:[{name:"IconNameToSizes"},{name:"ReactReactElement",raw:"React.ReactElement<CustomSVGProps>",elements:[{name:"CustomSVGProps"}]}]},description:""},sdsIconProps:{required:!1,tsType:{name:"Partial",elements:[{name:"IconProps",elements:[{name:"IconNameToSizes"}],raw:"IconProps<keyof IconNameToSizes>"}],raw:"Partial<IconProps<keyof IconNameToSizes>>"},description:""},intent:{required:!0,tsType:{name:"union",raw:'"info" | "negative" | "notice" | "positive"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"negative"'},{name:"literal",value:'"notice"'},{name:"literal",value:'"positive"'}]},description:""},sdsStage:{required:!1,tsType:{name:"union",raw:"typeof SDS_STAGE_CLOSED | typeof SDS_STAGE_OPEN",elements:[{name:"SDS_STAGE_CLOSED"},{name:"SDS_STAGE_OPEN"}]},description:""}}}}}]);