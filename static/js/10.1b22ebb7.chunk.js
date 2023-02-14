(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{1742:function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return l}));var r=a(9),n=a(17);const o=r.c.form`
  display: grid;
  grid-template-rows: 1fr auto;
  justify-content: stretch;
  color: var(--color-text-dark);
  ${n.e.size14}

  @media ${n.a.tablet} {
    ${n.e.size16};
  }
`,i=r.c.section`
  overflow: auto;
`,l=r.c.section`
  z-index: 1;
  ${({hasBoxShadow:e})=>e&&"box-shadow: 0 -12px 16px 2px var(--color-layer-base);"}
`},1755:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(9),i=a(17),l=a(68),s=a(1);t.a=({hasNewBadge:e,icon:t,title:a,children:r,onBannerClick:o})=>{const i=Object(l.u)();return n.a.createElement(c.Banner,{onClick:o,role:"button",tabIndex:o?0:void 0},a&&n.a.createElement("h3",null,e&&n.a.createElement(c.BadgeSpan,null,i({key:s.a.NEW})),t,a),r)};const c={};c.BadgeSpan=o.c.span`
  font-size: 0.7em;
  background-color: var(--color-purple);
  padding: 0 6px;
  text-transform: uppercase;
  border-radius: 16px;
`,c.Banner=o.c.div`
  display: grid;
  background-color: var(--color-layer-lighter);
  border-radius: 6px;
  padding: 12px;

  color: var(--color-text-base);

  ${i.e.size13};
  gap: 6px;
  margin-bottom: 16px;

  @media ${i.a.tablet} {
    ${i.e.size15};
    gap: 8px;
  }

  ${({onClick:e})=>e&&o.b`
      cursor: pointer;

      &:hover {
        filter: brightness(1.1);
        p a {
          text-decoration: underline;
        }
      }
    `}

  h3 {
    color: var(--color-text-light);
    font-size: 1.15em;

    display: flex;
    align-items: center;
    gap: 6px;

    > svg {
      width: 16px;
      height: 16px;
      margin-bottom: -2px;
    }
  }

  p strong {
    font-weight: 500;
    color: var(--color-text-light);
  }

  p a {
    color: var(--color-purple);
    display: inline-block;

    &:hover {
      text-decoration: underline;
    }
  }
`},1768:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(189),n=a.n(r),o=a(0),i=a.n(o),l=a(2),s=a.n(l),c=a(15),u=a(282),p=a(1727),d=a(83);const AssetSelector=({backgroundLighter:e,onChangeAsset:t,selectedAsset:a,usdcOnly:r})=>{const n=r?{[d.a.USDC]:d.c[d.a.USDC]}:d.c;return i.a.createElement(p.a,{backgroundLighter:e,dropdownMenuItems:Object.entries(n).map(([e,{name:t,symbol:a}])=>({key:e,label:t,tag:a,icon:i.a.createElement(u.a,{symbol:a}),menuOnlyDetail:a!==d.a.USDC&&i.a.createElement(c.Db,null)})),fixedHeight:Object.keys(n).length>10,onChangeSelection:t,selectedItemKey:a})};AssetSelector.propTypes={backgroundLighter:s.a.bool,onChangeAsset:s.a.func.isRequired,selectedAsset:s.a.oneOf(n()(d.a)).isRequired,usdcOnly:s.a.bool};var m=AssetSelector},1778:function(e,t,a){"use strict";a.d(t,"a",(function(){return useLocalizedDepositPromoStrings}));var r=a(10),n=a(1779),o=a(131),i=a(1780);const useLocalizedDepositPromoStrings=()=>{const e=Object(r.f)(o.c);return{PROMO_DEPOSIT_AMOUNT:Object(n.a)({locale:e,amount:i.d,round:!0}),PROMO_BONUS_AMOUNT:Object(n.a)({locale:e,amount:i.c,round:!0}),PROMO_DEPOSIT_DATE:Intl.DateTimeFormat(e,{weekday:"long",year:"numeric",month:"long",day:"numeric"}).format(i.e)}}},1779:function(e,t,a){"use strict";a.d(t,"a",(function(){return formatUSD}));var r=a(76);const formatUSD=({locale:e="en",amount:t,round:a=!1})=>Intl.NumberFormat(e,{style:"currency",currency:"USD",minimumFractionDigits:a?0:r.h,maximumFractionDigits:a?0:r.h}).format(t)},1780:function(e,t,a){"use strict";a.d(t,"e",(function(){return r})),a.d(t,"d",(function(){return n})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return l}));const r=1661958e6,n=500,o=25,i=3e3,l=5e3},1806:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(99),i=a.n(o),l=a(10),s=a(68),c=a(1755),u=a(33),p=a(1),d=a(23);t.a=({inTradeBox:e,onFiatClick:t})=>{const a=Object(s.u)(),r=Object(l.e)();return n.a.createElement(c.a,{hasNewBadge:!0,title:a({key:p.a.DEPOSIT_WITH_FIAT}),onBannerClick:()=>{t?t():r(Object(u.c)({modalType:d.a.FIAT,onClose:()=>{e||r(Object(u.c)({modalType:d.a.DEPOSIT}))}}))}},n.a.createElement("p",null,n.a.createElement("span",{dangerouslySetInnerHTML:{__html:a({key:p.a.FIAT_PROMO_COPY,params:{NO_GAS_FEES_STYLED:i.a.renderToString(n.a.createElement("strong",null,a({key:p.a.FIAT_NO_GAS_FEES})))}})}})," ",n.a.createElement("a",null,a({key:p.a.FIAT_PROMO_CTA})," \u2192")))}},1807:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=a(99),i=a.n(o),l=a(9),s=a(32),c=a(1728),u=a(1),p=a(76),d=a(83);const m={};m.EthAlertMessage=l.c.span`
  color: var(--color-text-light);

  a {
    text-decoration: underline;

    &:hover {
      color: var(--color-purple);
    }
  }
`,m.AlertMessage=Object(l.c)(c.b)`
  && {
    margin: 0 0 14px;
  }
`,t.a=Object(s.c)(({depositInput:e,errorMessage:t,gaslessDepositLimitReached:a,gaslessDepositThreshold:r,hasMetGaslessDepositThreshold:o,selectedAsset:l,stringGetter:s,transactionErrorMessage:g,useGaslessDeposit:b,showGaslessAlert:O=!0})=>{if(t||g)return n.a.createElement(m.AlertMessage,{type:c.a.ERROR},t||g||"");if(l===d.a.ETH&&O)return n.a.createElement(m.AlertMessage,{type:c.a.WARNING},n.a.createElement(m.EthAlertMessage,{dangerouslySetInnerHTML:{__html:s({key:u.a.GASLESS_ETH_DEPOSITS,params:{"1INCH_WETH_LINK":i.a.renderToString(n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://app.1inch.io/#/1/swap/ETH/WETH"},"1inch")),UNISWAP_WETH_LINK:i.a.renderToString(n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://app.uniswap.org/#/swap?inputCurrency=ETH&outputCurrency=0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"},"Uniswap"))}})}}));if(a||!e||!b||!r)return null;const y="USD"===d.c[l].market;return n.a.createElement(m.AlertMessage,{type:o?c.a.SUCCESS:c.a.WARNING},s({key:o?u.a.MINIMUM_DEPOSIT_MET:u.a.MINIMUM_DEPOSIT_UNMET,params:{GASLESS_DEPOSIT_THRESHOLD:r.toFormat(y?0:p.g),SYMBOL:l}}))})},1833:function(e,t,a){"use strict";var r=a(0),n=a.n(r),o=(a(89),a(594)),i=a.n(o),l=a(2),s=a.n(l),c=a(10),u=a(61),p=a(91),d=a(16),m=a.n(d),g=a(9),b=a(4),O=a(32),y=a(68),h=a(15),E=a(17),f=a(282),S=a(1768),T=a(36),A=a(1778),v=a(1),_=a(23),D=a(33),x=a(1755);var components_DepositPromoBanner=({inTradeBox:e})=>{const t=Object(y.u)(),a=Object(c.e)(),r=Object(y.b)().isMobile,o=Object(A.a)(),i=o.PROMO_DEPOSIT_AMOUNT,l=o.PROMO_BONUS_AMOUNT;return n.a.createElement(x.a,{hasNewBadge:!0,title:t({key:v.a.DEPOSIT_PROMO_ABOUT_TITLE,params:{PROMO_DEPOSIT_AMOUNT:i,PROMO_BONUS_AMOUNT:l}}),onBannerClick:()=>a(Object(D.c)({modalType:_.a.DEPOSIT_PROMO,onClose:()=>{e||a(Object(D.c)({modalType:r?_.a.TRANSFER:_.a.DEPOSIT}))}}))},n.a.createElement("p",null,t({key:v.a.DEPOSIT_PROMO_ABOUT_DESCRIPTION,params:{PROMO_DEPOSIT_AMOUNT:i,PROMO_BONUS_AMOUNT:l}})," ",n.a.createElement("a",null,t({key:v.a.DEPOSIT_PROMO_ABOUT_CTA,params:{PROMO_BONUS_AMOUNT:l}})," ","\u2192")))},j=a(1806),I=a(1730),w=a(212),k=a(75),M=a(83),C=a(77),L=a(24),R=a(287),F=a(375);function asyncGeneratorStep(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(c){return void a(c)}l.done?t(s):Promise.resolve(s).then(r,n)}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){l=!0,n=s}finally{try{i||null==a.return||a.return()}finally{if(l)throw n}}return o}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var deposit_form_DepositWithdrawRequirementsButton=({selectedAsset:e,setDepositWithdrawData:t,setTransactionErrorMessage:a,walletAddress:o})=>{const i=Object(y.u)(),l=(Object(c.f)(w.b,c.d)||{}).hasAllowanceBeenSet,s=_slicedToArray(Object(r.useState)(!1),2),u=s[0],p=s[1],d=function(){var r=function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var o=e.apply(t,a);function _next(e){asyncGeneratorStep(o,r,n,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,r,n,_next,_throw,"throw",e)}_next(void 0)}))}}((function*(){try{p(!0);const a=M.c[e].address;yield Object(R.h)({tokenAddress:a,walletAddress:o});const r=l;r[e]=!0,t({hasAllowanceBeenSet:r}),C.a.trackEvent(k.a.ActionSetAllowance,{asset:e})}catch(r){const e=Object(F.d)({error:r,location:L.a.SET_ALLOWANCE,stringGetter:i}).message;e&&a(e)}finally{p(!1)}}));return function onClickSetAllowance(){return r.apply(this,arguments)}}(),m=u||(null===l||void 0===l?void 0:l[e]);return n.a.createElement(T.a,{fullWidth:!0,color:T.b.Purple,isLoading:m,onClick:d,size:T.d.Large},i({key:v.a.ENABLE_SYMBOL,params:{SYMBOL:e}}))},U=a(162),P=a(1751),N=a(1725),B=a(76);const H={},G=g.b`
  height: 12px;
  width: 12px;
  margin-left: 4px;

  @media ${E.a.tablet} {
    width: 16px;
    height: 16px;
  }
`;H.Row=g.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,H.LabelWithIcon=g.c.div`
  display: flex;
  align-items: center;
`,H.WithTooltip=Object(g.c)(N.a)`
  width: auto;
`,H.SubLabelSpan=g.c.span`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  margin-top: 14px;
  padding-top: 10px;
  color: var(--color-text-base);
  transition: all 200ms ease-in-out;
  border-top: solid 1px var(--color-border-lighter);

  @media ${E.a.tablet} {
    padding-top: 14px;
  }

  input {
    margin: 0;
  }
`,H.LoadingContainer=Object(g.c)(U.a)`
  width: 30px;
  padding-top: 6px !important;

  @media ${E.a.tablet} {
    padding-top: 8px !important;
  }
`,H.Availability=g.c.span`
  display: flex;
  align-items: center;

  color: ${({isAvailable:e})=>e?"var(--color-text-light)":"var(--color-text-dark)"};
`,H.CheckIcon=Object(g.c)(h.o)`
  ${G}

  * {
    fill: var(--color-green);
  }
`,H.WarningIcon=Object(g.c)(h.Nb)`
  ${G}
`,H.HelpCircleIcon=Object(g.c)(h.O)`
  ${G}
  margin-bottom: -1px;

  rect {
    stroke: currentColor;
  }

  path {
    fill: currentColor;
  }
`;var deposit_form_GaslessDepositsBanner=({isDisabled:e,isLoading:t,limitReached:a,setUseGaslessDeposit:r,useGaslessDeposit:o,isToggleHidden:i,gaslessDepositThreshold:l,selectedAsset:s})=>{const c=Object(y.u)(),u=!e&&!a;return n.a.createElement(x.a,null,n.a.createElement(H.Row,null,n.a.createElement(H.LabelWithIcon,null,c({key:v.a.GASLESS_DEPOSITS}),n.a.createElement(H.WithTooltip,{tooltip:"gasless_deposits",stringParams:{GASLESS_DEPOSIT_THRESHOLD:l.toFormat("USD"===M.c[s].market?0:B.g),SYMBOL:s},top:-128,right:-152},n.a.createElement(H.HelpCircleIcon,null))),t?n.a.createElement(H.LoadingContainer,{size:3}):n.a.createElement(H.WithTooltip,{tooltip:u?"gasless_deposits_available":e&&"gasless_deposits_disabled",stringParams:{GASLESS_DEPOSIT_THRESHOLD:l.toFormat("USD"===M.c[s].market?0:B.g),SYMBOL:s},top:-100,right:-12},n.a.createElement(H.Availability,{isAvailable:u},c({key:u?v.a.AVAILABLE:v.a.UNAVAILABLE}),u?n.a.createElement(H.CheckIcon,null):e&&n.a.createElement(H.WarningIcon,null)))),!e&&!i&&n.a.createElement(H.SubLabelSpan,{htmlFor:"gasless-toggle"},c({key:v.a.ENABLE_FOR_THIS_DEPOSIT}),n.a.createElement(P.a,{id:"gasless-toggle",checked:o,onToggle:e=>r(e),size:P.b.Small})))},W=a(371),$=a(1724),z=a(190),Y=a(127),q=a(284),K=a(1729),V=a(137),X=a(21),Z=a(220),J=a(226),Q=a(37),ee=a(148),te=a(62),ae=a(173),re=a(610),ne=a(56),oe=a(593),ie=a(115),le=a(93),se=a(8),ce="_2owpimd_XC0wNF_D4wc9zF",ue=a(1742),pe=a(1807),de=a(592);function SlippageMenu_slicedToArray(e,t){return function SlippageMenu_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function SlippageMenu_iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){l=!0,n=s}finally{try{i||null==a.return||a.return()}finally{if(l)throw n}}return o}(e,t)||function SlippageMenu_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return SlippageMenu_arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return SlippageMenu_arrayLikeToArray(e,t)}(e,t)||function SlippageMenu_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SlippageMenu_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const me={};me.InputField=Object(g.c)(W.c)`
  > input {
    ${({invalidSlippage:e})=>e&&"color: var(--color-red);"}
  }
`,me.Button=Object(g.c)(T.a)`
  width: max-content;

  ${({isConfirmButton:e})=>e&&"\n      margin-top: 8px;\n    "}

  ${({active:e})=>e&&"\n      background-color: var(--color-layer-dark);\n    "}

  &:active {
    background-color: var(--color-layer-dark);
  }
`,me.SlippageMenuContainer=g.c.div`
  position: relative;
`,me.SlippageMenu=g.c.div`
  position: absolute;
  top: 4px;
  left: 0px;
  background-color: var(--color-layer-light);
  width: 100%;
  border-radius: 6px;
  z-index: 4;
`,me.SlippageMenuContents=g.c.div`
  padding: 0 16px 16px;
`,me.SlippageOptions=g.c.div`
  display: grid;
  grid-template-columns: auto auto 1fr;
  gap: 8px;
`;var ge=Object(O.c)(({closeSlippageMenu:e,setSlippage:t,slippage:a,slippageOptions:o,stringGetter:i})=>{const l=SlippageMenu_slicedToArray(Object(r.useState)(!1),2),s=l[0],c=l[1],u=!s&&Number(a)===Number(o.MINIMUM),p=!s&&Number(a)===Number(o.DEFAULT),d=!u&&!p&&!s||s,m=Object(se.b)(a).lt(0)||Object(se.b)(a).gt(le.f);return n.a.createElement(me.SlippageMenuContainer,null,n.a.createElement(me.SlippageMenu,null,n.a.createElement(de.a,{noBorder:!0,title:i({key:v.a.SETTINGS}),closeModal:e}),n.a.createElement(me.SlippageMenuContents,null,n.a.createElement(q.a,{textDark:!0,label:i({key:v.a.MAX_SLIPPAGE})},n.a.createElement(me.SlippageOptions,null,n.a.createElement(me.Button,{active:u,onClick:()=>t(o.MINIMUM)},o.MINIMUM,"%"),n.a.createElement(me.Button,{active:p,onClick:()=>t(o.DEFAULT)},o.DEFAULT,"%"),n.a.createElement(me.InputField,{backgroundLighter:!d,backgroundDark:d,invalidSlippage:m,maxDecimals:B.g,onBlur:()=>{(m||""===a)&&t(""+le.f),c(!1)},onChange:e=>{t(e)},onFocus:()=>{t(""),c(!0)},placeholder:i({key:v.a.CUSTOM}),type:W.b.PERCENT,value:d?a:"",size:W.a.BUTTON}))))))});function DepositForm_asyncGeneratorStep(e,t,a,r,n,o,i){try{var l=e[o](i),s=l.value}catch(c){return void a(c)}l.done?t(s):Promise.resolve(s).then(r,n)}function DepositForm_slicedToArray(e,t){return function DepositForm_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function DepositForm_iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,o=[],i=!0,l=!1;try{for(a=a.call(e);!(i=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(s){l=!0,n=s}finally{try{i||null==a.return||a.return()}finally{if(l)throw n}}return o}(e,t)||function DepositForm_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return DepositForm_arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return DepositForm_arrayLikeToArray(e,t)}(e,t)||function DepositForm_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function DepositForm_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const DepositForm=({inTradeBox:e,inTransferModal:t,isOnLightBackground:a,onSubmit:o,onFiatClick:l,clearDepositWithdrawInputs:s,setDepositWithdrawData:u,setTradeData:d,setUsdcBalance:g})=>{var O;const E=Object(y.u)(),f=Object(y.f)(),A=Object(c.e)(),_=Object(c.f)(ee.a,c.d),D=Object(c.f)(ae.a,c.d),x=Object(c.f)(ie.b),P=Object(c.f)(oe.a,c.d)||{},N=P.equity,H=P.buyingPower,G=Object(c.f)(oe.b,c.d)||{},V=G.newEquity,J=G.newBuyingPower,de=Object(c.f)(w.b,c.d),me=de.hasAllowanceBeenSet,Oe=de.usdcDepositAmount,ye=Object(c.f)(ne.d),he=Object(c.f)(Q.f),Ee=Object(c.f)(Q.m,c.d),fe=Object(c.f)(Q.o),Se=Object(c.f)(Q.n),Te=Object(c.f)(Q.b,c.d),Ae=Object(c.f)(Q.c,c.d),ve=Object(c.f)(te.a,c.d),_e=Object(c.f)(ne.n,c.d),De=Object(c.f)(re.a,c.d),xe=Object(c.f)(re.b),je=Object(c.f)(ne.a,c.d),Ie=Object(c.f)(ne.c),we=Object(c.f)(ne.b),ke=DepositForm_slicedToArray(Object(r.useState)(M.a.USDC),2),Me=ke[0],Ce=ke[1],Le=DepositForm_slicedToArray(Object(r.useState)(!0),2),Re=Le[0],Fe=Le[1],Ue=DepositForm_slicedToArray(Object(r.useState)(!1),2),Pe=Ue[0],Ne=Ue[1],Be=DepositForm_slicedToArray(Object(r.useState)(null),2),He=Be[0],Ge=Be[1],We=DepositForm_slicedToArray(Object(r.useState)(!1),2),$e=We[0],ze=We[1],Ye=DepositForm_slicedToArray(Object(r.useState)(le.g.default),2),qe=Ye[0],Ke=Ye[1],Ve=DepositForm_slicedToArray(Object(r.useState)(!1),2),Xe=Ve[0],Ze=Ve[1],Je=DepositForm_slicedToArray(Object(r.useState)(!1),2),Qe=Je[0],et=Je[1],tt=DepositForm_slicedToArray(Object(r.useState)(""),2),at=tt[0],rt=tt[1],nt=DepositForm_slicedToArray(Object(r.useState)(le.d),2),ot=nt[0],it=nt[1],lt=Me===M.a.USDC?Se:null!==(O=null===Ae||void 0===Ae?void 0:Ae[Me])&&void 0!==O?O:0,st=M.c[Me],ct=st.address,ut=st.decimals,pt=st.market,dt=st.slippageOptions,mt=Object(se.b)(lt),gt=Object(se.b)(at),bt=null===Te||void 0===Te?void 0:Te[Me],Ot=Object(se.b)(null!==bt&&void 0!==bt?bt:0),yt=Me===M.a.ETH||bt&&Ot.gt(0),ht=(()=>{switch(Me){case M.a.USDC:return b.c.ProxyDeposit;case M.a.ETH:return b.c.ProxyDepositETH;default:return b.c.ProxyDepositERC20}})(),Et=ht in _e&&!_e[ht],ft=null!==De&&void 0!==De&&De.length?le.c.Existing:le.c.New,St="USD"===pt?Object(se.b)(ft):Object(se.b)(ft).div(Object(se.b)(null===ve||void 0===ve?void 0:ve[pt].indexPrice)),Tt=gt.gte(St),At=_e[ht]&&Tt&&!0;Object(y.s)({clearData:!0,currentTradeData:D,showModalKey:"showInlineDepositForm",setTradeData:d}),Object(y.p)({walletAddress:fe,assetAllowances:Te,setAssetAllowance:({asset:e,allowance:t})=>A(Object(X.g)({asset:e,allowance:t})),setAssetBalance:({asset:e,balance:t})=>A(Object(X.h)({asset:e,balance:t})),setUsdcBalance:g}),Object(r.useEffect)(()=>()=>{s()},[]),Object(r.useEffect)(()=>{$e||f||ot.slippage===qe||""===at||Object(R.g)({depositInput:at,selectedAsset:Me,setConversionInfo:it,setDepositWithdrawData:u,setIsLoadingExchangeRate:Ze,setSlippage:Ke,slippage:qe,slippageOptions:dt})},[$e,qe,ot]),Object(r.useEffect)(()=>{if(ht in _e){if(!1===_e[ht]){const e=Date.now();je&&je<=e&&A(Object(Z.a)({depositType:ht,walletAddress:fe}))}}else A(Object(Z.a)({depositType:ht,walletAddress:fe}));Ke(dt.DEFAULT),rt(""),s()},[Me]),Object(r.useEffect)(()=>{at||Qe||(u({usdcDepositAmount:""}),it(le.d))},[Qe]),Object(r.useEffect)(()=>{""===at&&(u({usdcDepositAmount:""}),it(le.d),Ze(!1))},[at]),Object(y.c)(()=>{Me!==M.a.USDC&&gt.gt(0)&&Object(R.b)({assetAddress:ct,assetDecimals:ut,depositInput:at,slippage:qe},e=>{var t,a,r,n;et(!0),u({usdcDepositAmount:(null===e||void 0===e?void 0:e.expectedUsdcHumanAmount)||""}),it({rate:null!==(t=null===e||void 0===e||null===(a=e.zeroExResponseObject)||void 0===a?void 0:a.price)&&void 0!==t?t:"",slippage:qe,worstUsdcHumanAmount:null!==(r=null===e||void 0===e?void 0:e.worstUsdcHumanAmount)&&void 0!==r?r:"",zeroExResponseObject:null!==(n=null===e||void 0===e?void 0:e.zeroExResponseObject)&&void 0!==n?n:{}}),et(!1),Ze(!1)})},[at],1e3);const vt=function(){var e=function DepositForm_asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var o=e.apply(t,a);function _next(e){DepositForm_asyncGeneratorStep(o,r,n,_next,_throw,"next",e)}function _throw(e){DepositForm_asyncGeneratorStep(o,r,n,_next,_throw,"throw",e)}_next(void 0)}))}}((function*(){if(_&&Ee)if(x)try{var e;Ne(!0),Ge(null),yield A(Object(Z.b)({amount:at,asset:Me,isUserRegistered:ye,positionId:_.positionId,sendGaslessTransaction:Re&&At,starkPublicKey:Ee.publicKey,usdcAmount:ot.worstUsdcHumanAmount,usePredefinedGas:null===me||void 0===me?void 0:me[Me],walletAddress:fe,zeroExResponseObject:null!==(e=ot.zeroExResponseObject)&&void 0!==e?e:{}})),C.a.trackEvent(k.a.ActionDeposit,{amount:Number(at),asset:Me,eligibleForGaslessDeposit:At,isFirstDeposit:!xe,isUserRegistered:ye,usdcDepositAmount:Oe,useGaslessDeposit:Re&&Me!==M.a.ETH,userBalance:lt,walletAddress:fe}),Object(C.b)("user_deposit"),A(Object(Z.a)({depositType:ht,walletAddress:fe})),o()}catch(t){const e=Object(F.d)({asset:Me,error:t,location:L.a.DEPOSIT_MODAL,sendGaslessTransaction:Re&&At,stringGetter:E}).message;e&&Ge(e),Ne(!1)}else Ge(E({key:v.a.DEPOSIT_ACCOUNT_OUT_OF_SYNC}))}));return function onClickDeposit(){return e.apply(this,arguments)}}();let _t;he?_t=E({key:v.a.DEPOSIT_WRONG_NETWORK_PRODUCTION}):lt&&mt.lt(gt)&&(_t=E({key:v.a.DEPOSIT_MORE_THAN_BALANCE}));const Dt=void 0===_e[ht]&&Tt&&Me!==M.a.ETH,xt=(null===me||void 0===me?void 0:me[Me])&&At,jt=!he&&!yt&&(!(null!==me&&void 0!==me&&me[Me])||xt)&&Me!==M.a.ETH&&!gt.isZero(),It=(yt||!xt||!Re)&&(yt||(null===me||void 0===me?void 0:me[Me]))&&!gt.isZero()&&!_t&&Oe&&!Xe,wt=Xe&&""!==at;let kt,Mt,Ct=n.a.createElement(T.a,{fullWidth:!0,color:T.b.Purple,disabled:!It,isLoading:Pe||wt||Dt,onClick:vt,size:T.d.Large},E({key:v.a.CONFIRM_DEPOSIT}));var Lt;(gt.isZero()?Ct=n.a.createElement(T.a,{fullWidth:!0,color:T.b.Purple,disabled:!0,size:T.d.Large},E({key:v.a.ENTER_AMOUNT})):jt&&(Ct=n.a.createElement(deposit_form_DepositWithdrawRequirementsButton,{selectedAsset:Me,setTransactionErrorMessage:Ge,setDepositWithdrawData:u,walletAddress:fe})),e||(kt=[{key:"equity",label:n.a.createElement(n.a.Fragment,null,E({key:v.a.EQUITY}),n.a.createElement(Y.a,{marginLeft:!0},"USD")),value:n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:(N||se.a.ZERO).toFixed(B.h)}),V&&n.a.createElement("span",null,n.a.createElement(I.a,{pointRight:!0,marginRight:!0,marginLeft:!0,green:!0}),n.a.createElement(p.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:V.toFixed(B.h)})))},{key:"buying-power",label:E({key:v.a.BUYING_POWER}),value:n.a.createElement(n.a.Fragment,null,n.a.createElement(p.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:(H||se.a.ZERO).toFixed(B.h)}),J&&n.a.createElement("span",null,n.a.createElement(I.a,{pointRight:!0,marginRight:!0,marginLeft:!0,green:!0}),n.a.createElement(p.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:J.toFixed(B.h)})))}]),Me!==M.a.USDC)&&(kt=null!==(Lt=kt)&&void 0!==Lt?Lt:[],kt.unshift({key:"deposit-amount",label:n.a.createElement(n.a.Fragment,null,E({key:v.a.DEPOSIT}),n.a.createElement(Y.a,{marginLeft:!0},"USD")),value:n.a.createElement(be.ReceiptValueContainer,{isLoading:wt},wt?n.a.createElement(U.a,{justifyRight:!0,size:3}):n.a.createElement(p.a,{thousandSeparator:!0,displayType:"text",prefix:"\u2248 $",value:Oe?Object(se.b)(Oe).toFixed(B.h):"-"}))}));jt&&(Mt=n.a.createElement(n.a.Fragment,null,E({key:v.a.SET_ALLOWANCE_EXPLANATION,params:{SYMBOL:Me}})," ",n.a.createElement($.a,{href:"https://help.dydx.exchange/en/articles/6584587-why-do-i-have-to-enable-usdc-to-deposit"})));const Rt=ot.rate&&0!==ot.rate?"1 \u2248 "+Object(se.b)(ot.rate).toFormat(B.g):"-";return!bt&&Me!==M.a.ETH||!lt||i()(ye)||!ve?n.a.createElement(z.a,{minHeight:236}):n.a.createElement(ue.b,{onSubmit:e=>e.preventDefault()},n.a.createElement(ue.c,null,n.a.createElement(q.a,{indented:!0,label:E({key:v.a.ASSET})},n.a.createElement(K.a,{receiptConfig:Me===M.a.USDC?null:[{key:"swap",label:n.a.createElement(be.LabelWithIcon,null,E({key:v.a.SWAP}),n.a.createElement(be.WithTooltip,{tooltip:"swap",top:12,left:-70},n.a.createElement(be.HelpCircleIcon,null))),value:n.a.createElement(n.a.Fragment,null,n.a.createElement(Y.a,{marginRight:!0},Me),"\u2192",n.a.createElement(Y.a,{marginLeft:!0},"USD"))},{key:"exchange-rate",label:n.a.createElement("span",null,E({key:v.a.EXCHANGE_RATE})),value:n.a.createElement(be.ReceiptValueContainer,{isLoading:wt},wt?n.a.createElement(U.a,{justifyRight:!0,size:3}):Rt)},{key:"max-slippage",label:n.a.createElement("span",null,E({key:v.a.MAX_SLIPPAGE})),value:n.a.createElement(be.SlippageReceiptContainer,{onClick:()=>ze(!$e)},qe,"%",n.a.createElement(h.lb,null))}]},n.a.createElement(S.a,{backgroundLighter:a,selectedAsset:Me,onChangeAsset:e=>{Ge(null),Ce(e),Object(R.g)({depositInput:"",selectedAsset:e,setConversionInfo:it,setDepositWithdrawData:u,setIsLoadingExchangeRate:Ze,setSlippage:Ke,slippage:qe,slippageOptions:dt})}}))),$e&&n.a.createElement(ge,{closeSlippageMenu:()=>ze(!1),setSlippage:Ke,slippage:qe,slippageOptions:dt}),n.a.createElement(q.a,{indented:!0,label:n.a.createElement("span",null,E({key:v.a.AMOUNT}))},n.a.createElement(K.a,{receiptConfig:[{label:n.a.createElement(n.a.Fragment,null,E({key:v.a.AVAILABLE}),n.a.createElement(Y.a,{marginLeft:!0},Me)),value:n.a.createElement(n.a.Fragment,null,lt?n.a.createElement(p.a,{thousandSeparator:!0,displayType:"text",value:mt.toFixed(B.g)}):"-",lt&&gt.gt(0)&&n.a.createElement("span",{className:m()({[ce]:lt&&mt.lt(at)})},n.a.createElement(I.a,{red:!0,marginLeft:!0,marginRight:!0,pointRight:!0}),n.a.createElement(p.a,{thousandSeparator:!0,displayType:"text",value:mt.minus(at).toFixed(B.g)})))}]},n.a.createElement(W.c,{backgroundLighter:a,onClickMax:()=>{const e=null===mt||void 0===mt?void 0:mt.toString();at!==e&&(rt(e||""),Me!==M.a.USDC?(Ze(!0),Object(R.g)({depositInput:e||"",selectedAsset:Me,setConversionInfo:it,setDepositWithdrawData:u,setIsLoadingExchangeRate:Ze,setSlippage:Ke,slippage:qe,slippageOptions:dt})):u({usdcDepositAmount:e||""}))},value:at,maxDecimals:ut,onChange:e=>{Me===M.a.USDC?(u({usdcDepositAmount:e}),Ze(!1)):(Ze(!0),Ge(null)),rt(e)}}))),n.a.createElement(pe.a,{depositInput:at,errorMessage:_t,gaslessDepositLimitReached:Et,gaslessDepositThreshold:St,hasMetGaslessDepositThreshold:Tt,selectedAsset:Me,transactionErrorMessage:He,useGaslessDeposit:Re&&!0}),Me!==M.a.ETH&&n.a.createElement(deposit_form_GaslessDepositsBanner,{isDisabled:!1,isLoading:void 0===_e[ht],limitReached:Et,setUseGaslessDeposit:Fe,useGaslessDeposit:Re,isToggleHidden:!At||!!_t,gaslessDepositThreshold:St,selectedAsset:Me}),Ie&&!we&&n.a.createElement(components_DepositPromoBanner,{inTradeBox:e}),n.a.createElement(j.a,{inTradeBox:e,onFiatClick:l})),n.a.createElement(ue.a,{hasBoxShadow:t||e},n.a.createElement(K.a,{receiptOnTop:!0,receiptDescription:Mt,receiptConfig:kt},Ct),$e&&n.a.createElement(be.InnerModalContainer,{onClick:()=>ze(!1)})))},be={};be.WithTooltip=Object(g.c)(N.a)`
  margin-bottom: -4px;
`,be.ReceiptValueContainer=g.c.span`
  ${({isLoading:e})=>e&&"width: 40px;"}
`,be.SlippageReceiptContainer=g.c.span`
  display: flex;
  gap: 4px;
  cursor: pointer;
  align-items: center;

  > svg {
    height: 13px;
    width: 13px;
  }

  @media ${E.a.tablet} {
    > svg {
      height: 16px;
      width: 16px;
    }
  }

  &:hover {
    text-decoration: underline;

    > svg {
      path {
        fill: var(--color-text-light);
      }
    }
  }
`,be.AssetIcon=Object(g.c)(f.a)`
  margin-right: 4px;
  height: 18px;
  width: 18px;
`,be.InnerModalContainer=g.c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(11, 11, 19, 0.4);
`,be.LabelWithIcon=g.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
`,be.HelpCircleIcon=Object(g.c)(h.O)`
  width: 12px;
  height: 12px;

  @media ${E.a.tablet} {
    width: 16px;
    height: 16px;
  }
`,be.FreeGasSpan=g.c.span`
  ${E.f.regular}
  color: var(--color-green);
`,DepositForm.propTypes={inTradeBox:s.a.bool,inTransferModal:s.a.bool,isOnLightBackground:s.a.bool,onSubmit:s.a.func.isRequired,onFiatClick:s.a.func,clearDepositWithdrawInputs:s.a.func.isRequired,setDepositWithdrawData:s.a.func.isRequired,setTradeData:s.a.func.isRequired,setUsdcBalance:s.a.func.isRequired};var Oe=Object(O.c)(Object(c.c)(null,e=>Object(u.b)({clearDepositWithdrawInputs:V.a,setDepositWithdrawData:V.c,setTradeData:J.a,setUsdcBalance:X.l},e))(DepositForm));a(67),a(1728),a(98),a(41),a(29),a(30);t.a=e=>n.a.createElement(Oe,e)}}]);