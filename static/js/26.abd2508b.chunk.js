(window.webpackJsonp=window.webpackJsonp||[]).push([[26,116],{1724:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(9),o=r(68),l=r(75),c=r(1),s=r(77);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}t.a=e=>{let t=e.href,r=e.shouldTrackClick,a=void 0===r||r,i=_objectWithoutProperties(e,["href","shouldTrackClick"]);const p=Object(o.u)();return n.a.createElement(n.a.Fragment,null," ",n.a.createElement(d.LearnMoreLink,_extends({rel:"noopener noreferrer",href:t,target:"_blank"},i,{onClick:()=>{a&&s.a.trackEvent(l.a.ExternalLinkClicked,{linkClicked:t,isLearnMore:!0})}}),p({key:c.a.LEARN_MORE})))};const d={};d.LearnMoreLink=i.c.a`
  color: var(--color-purple);
  white-space: nowrap;

  &:hover {
    color: var(--color-purple);
    filter: brightness(1.1);
    text-decoration: underline;
  }

  &:visited {
    color: var(--color-purple);
  }

  ::after {
    content: ' →';
  }
`},1725:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(9),o=r(32),l=r(17),c=r(1),s={"legacy-signing":({stringGetter:e})=>({title:e({key:c.f.LEGACY_SIGNING_TITLE}),body:e({key:c.f.LEGACY_SIGNING_BODY})}),"remember-me":({stringGetter:e})=>({title:e({key:c.f.REMEMBER_ME_TITLE}),body:e({key:c.f.REMEMBER_ME_BODY})})},d={"holding-hedgies":({stringGetter:e,stringParams:t})=>({title:e({key:c.f.HOLDING_HEDGIES_TITLE}),body:e({key:c.f.HOLDING_HEDGIES_BODY,params:t}),bodyKey:c.f.HOLDING_HEDGIES_BODY})},p={"account-leverage":({stringGetter:e})=>({title:e({key:c.f.ACCOUNT_LEVERAGE_TITLE}),body:e({key:c.f.ACCOUNT_LEVERAGE_BODY})}),"bracket-sl":({stringGetter:e})=>({title:e({key:c.f.BRACKET_ORDER_SL_TITLE}),body:e({key:c.f.BRACKET_ORDER_SL_BODY})}),"bracket-tp":({stringGetter:e})=>({title:e({key:c.f.BRACKET_ORDER_TP_TITLE}),body:e({key:c.f.BRACKET_ORDER_TP_BODY})}),"buying-power":({stringGetter:e,stringParams:t})=>({title:e({key:c.f.BUYING_POWER_TITLE}),body:e({key:c.f.BUYING_POWER_BODY,params:t})}),"default-execution":({stringGetter:e})=>({title:e({key:c.f.DEFAULT_EXECUTION_TITLE}),body:e({key:c.f.DEFAULT_EXECUTION_BODY})}),equity:({stringGetter:e})=>({title:e({key:c.f.EQUITY_TITLE}),body:e({key:c.f.EQUITY_BODY})}),"expected-price":({stringGetter:e})=>({title:e({key:c.f.EXPECTED_PRICE_TITLE}),body:e({key:c.f.EXPECTED_PRICE_BODY})}),fee:({stringGetter:e})=>({title:e({key:c.f.FEE_TITLE}),body:e({key:c.f.FEE_BODY})}),"fill-or-kill":({stringGetter:e})=>({title:e({key:c.f.FILL_OR_KILL_TITLE}),body:e({key:c.f.FILL_OR_KILL_BODY})}),"free-collateral":({stringGetter:e})=>({title:e({key:c.f.FREE_COLLATERAL_TITLE}),body:e({key:c.f.FREE_COLLATERAL_BODY})}),"good-til":({stringGetter:e})=>({title:e({key:c.f.GOOD_TIL_TITLE}),body:e({key:c.f.GOOD_TIL_BODY})}),"immediate-or-cancel":({stringGetter:e})=>({title:e({key:c.f.IMMEDIATE_OR_CANCEL_TITLE}),body:e({key:c.f.IMMEDIATE_OR_CANCEL_BODY})}),"index-price":({stringGetter:e})=>({title:e({key:c.f.INDEX_PRICE_TITLE}),body:e({key:c.f.INDEX_PRICE_BODY})}),"initial-margin-fraction":({stringGetter:e})=>({title:e({key:c.f.INITIAL_MARGIN_FRACTION_TITLE}),body:e({key:c.f.INITIAL_MARGIN_FRACTION_BODY}),learnMoreLink:"https://help.dydx.exchange/articles/5232637-maximum-position-sizes"}),"initial-stop":({stringGetter:e})=>({title:e({key:c.f.INITIAL_STOP_TITLE}),body:e({key:c.f.INITIAL_STOP_BODY})}),leverage:({stringGetter:e})=>({title:e({key:c.f.LEVERAGE_TITLE}),body:e({key:c.f.LEVERAGE_BODY})}),"limit-price":({stringGetter:e})=>({title:e({key:c.f.LIMIT_PRICE_TITLE}),body:e({key:c.f.LIMIT_PRICE_BODY})}),"limit-price-slippage":({stringGetter:e})=>({title:e({key:c.f.LIMIT_PRICE_SLIPPAGE_TITLE}),body:e({key:c.f.LIMIT_PRICE_SLIPPAGE_BODY})}),"liquidation-price":({stringGetter:e,stringParams:t})=>({title:e({key:c.f.LIQUIDATION_PRICE_TITLE}),body:e({key:c.f.LIQUIDATION_PRICE_BODY,params:t})}),"liquidation-price-general":({stringGetter:e})=>({title:e({key:c.f.LIQUIDATION_PRICE_GENERAL_TITLE}),body:e({key:c.f.LIQUIDATION_PRICE_GENERAL_BODY})}),liquidity:({stringGetter:e})=>({title:e({key:c.f.LIQUIDITY_TITLE}),body:e({key:c.f.LIQUIDITY_BODY})}),"maintenance-margin-fraction":({stringGetter:e})=>({title:e({key:c.f.MAINTENANCE_MARGIN_FRACTION_TITLE}),body:e({key:c.f.MAINTENANCE_MARGIN_FRACTION_BODY})}),"max-withdraw":({stringGetter:e})=>({title:e({key:c.f.MAX_WITHDRAW_TITLE}),body:e({key:c.f.MAX_WITHDRAW_BODY})}),"maker-fee":({stringGetter:e})=>({title:e({key:c.f.MAKER_FEE_TITLE}),body:e({key:c.f.MAKER_FEE_BODY})}),"margin-usage":({stringGetter:e})=>({title:e({key:c.f.MARGIN_USAGE_TITLE}),body:e({key:c.f.MARGIN_USAGE_BODY})}),"maximum-leverage":({stringGetter:e})=>({title:e({key:c.f.MAXIMUM_LEVERAGE_TITLE}),body:e({key:c.f.MAXIMUM_LEVERAGE_BODY})}),"net-funding":({stringGetter:e})=>({title:e({key:c.f.NET_FUNDING_TITLE}),body:e({key:c.f.NET_FUNDING_BODY})}),"open-interest":({stringGetter:e})=>({title:e({key:c.f.OPEN_INTEREST_TITLE}),body:e({key:c.f.OPEN_INTEREST_BODY})}),"oracle-price":({stringGetter:e})=>({title:e({key:c.f.ORACLE_PRICE_TITLE}),body:e({key:c.f.ORACLE_PRICE_BODY})}),"order-amount":({stringGetter:e,stringParams:t})=>({title:e({key:c.f.ORDER_AMOUNT_TITLE}),body:e({key:c.f.ORDER_AMOUNT_BODY,params:t})}),"post-only":({stringGetter:e})=>({title:e({key:c.f.POST_ONLY_TITLE}),body:e({key:c.f.POST_ONLY_BODY})}),"price-impact":({stringGetter:e})=>({title:e({key:c.f.PRICE_IMPACT_TITLE}),body:e({key:c.f.PRICE_IMPACT_BODY})}),"realized-pnl":({stringGetter:e})=>({title:e({key:c.f.REALIZED_PNL_TITLE}),body:e({key:c.f.REALIZED_PNL_BODY})}),"reduce-only":({stringGetter:e})=>({title:e({key:c.f.REDUCE_ONLY_TITLE}),body:e({key:c.f.REDUCE_ONLY_BODY}),learnMoreLink:"https://help.dydx.exchange/articles/6345793-reduce-only-orders"}),"step-size":({stringGetter:e})=>({title:e({key:c.f.STEP_SIZE_TITLE}),body:e({key:c.f.STEP_SIZE_BODY})}),"taker-fee":({stringGetter:e})=>({title:e({key:c.f.TAKER_FEE_TITLE}),body:e({key:c.f.TAKER_FEE_BODY})}),"tick-size":({stringGetter:e})=>({title:e({key:c.f.TICK_SIZE_TITLE}),body:e({key:c.f.TICK_SIZE_BODY})}),"time-in-force":({stringGetter:e})=>({title:e({key:c.f.TIME_IN_FORCE_TITLE}),body:e({key:c.f.TIME_IN_FORCE_BODY})}),"trailing-percent":({stringGetter:e})=>({title:e({key:c.f.TRAILING_PERCENT_TITLE}),body:e({key:c.f.TRAILING_PERCENT_BODY})}),"trigger-price":({stringGetter:e})=>({title:e({key:c.f.TRIGGER_PRICE_TITLE}),body:e({key:c.f.TRIGGER_PRICE_BODY})}),"unrealized-pnl":({stringGetter:e})=>({title:e({key:c.f.UNREALIZED_PNL_TITLE}),body:e({key:c.f.UNREALIZED_PNL_BODY})})},u={"verify-email":({stringGetter:e})=>({title:e({key:c.f.VERIFY_EMAIL_TITLE}),body:e({key:c.f.VERIFY_EMAIL_BODY})})},E={"fast-withdraw-fee":({stringGetter:e})=>({title:e({key:c.f.FAST_WITHDRAW_FEE_TITLE}),body:e({key:c.f.FAST_WITHDRAW_FEE_BODY})}),"withdraw-types":({stringGetter:e})=>({title:e({key:c.f.WITHDRAW_TYPES_TITLE}),body:e({key:c.f.WITHDRAW_TYPES_BODY})})};function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y=_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},{allowance_and_deposit_network_fee:({stringGetter:e})=>({title:e({key:c.f.ALLOWANCE_AND_DEPOSIT_NETWORK_FEE_TITLE}),body:e({key:c.f.ALLOWANCE_AND_DEPOSIT_NETWORK_FEE_BODY}),learnMoreLink:"https://help.dydx.exchange/en/articles/4800191-are-there-fees-to-using-dydx"}),deposit_network_fee:({stringGetter:e})=>({title:e({key:c.f.DEPOSIT_NETWORK_FEE_TITLE}),body:e({key:c.f.DEPOSIT_NETWORK_FEE_BODY}),learnMoreLink:"https://help.dydx.exchange/en/articles/4800191-are-there-fees-to-using-dydx"}),swap:({stringGetter:e})=>({title:e({key:c.f.SWAP_TITLE}),body:e({key:c.f.SWAP_BODY})}),gasless_deposits:({stringGetter:e,stringParams:t})=>({title:e({key:c.f.GASLESS_DEPOSITS_TITLE}),body:e({key:c.f.GASLESS_DEPOSITS_BODY,params:t}),learnMoreLink:"https://dydx.exchange/gasless-deposit-rules"}),gasless_deposits_available:({stringGetter:e,stringParams:t})=>({title:e({key:c.f.AVAILABLE_GASLESS_DEPOSITS_TITLE}),body:e({key:c.f.AVAILABLE_GASLESS_DEPOSITS_BODY,params:t})}),gasless_deposits_disabled:({stringGetter:e})=>({title:e({key:c.f.DISABLED_GASLESS_DEPOSITS_TITLE}),body:e({key:c.f.DISABLED_GASLESS_DEPOSITS_BODY})})}),s),d),p),u),E),g=r(1724);const _={},f=i.d`
  from {
    opacity: 0;
    pointer-events: none;
  }

  to {
    opacity: 1;
    pointer-events: auto;
  }
`;_.Body=i.c.div`
  ${l.f.regular}
`,_.Title=i.c.div`
  ${l.f.bold}
  margin-bottom: 4px;
`,_.TooltipContent=i.c.div`
  ${l.e.size13}
  margin: 10px 10px 10px 30px;
  padding: 100px;
  width: 264px;
  background-color: var(--color-layer-light);
  color: var(--color-text-base);
  padding: 12px;
  text-transform: none;
  border-radius: 4px;
  overflow: hidden;
  white-space: break-spaces;
  filter: drop-shadow(0px 0px 44px var(--color-layer-dark));

  @media ${l.a.tablet} {
    ${l.e.size15}
    width: 292px;
  }
`,_.MouseSpace=i.c.div`
  opacity: 0;
  display: none;
  background-color: transparent;
  position: absolute;
  z-index: 100;
  cursor: default;
  text-align: left;
  animation: ${f} 0.2s ease-in 0.2s forwards;

  @media ${l.a.tablet} {
    animation-delay: 0s;
  }

  ${({hasLongDelay:e})=>e&&i.b`
      @media ${l.a.notTablet} {
        animation-delay: 0.4s;
      }
    `}
`,_.WithTooltip=i.c.div`
  display: inline;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: help;

  &:hover {
    ${_.MouseSpace} {
      display: block;
    }
  }
`;t.a=Object(o.c)(({bottom:e,children:t,className:r,condition:a=!0,cta:i=null,hasReact:o,left:l,longDelay:c,stringGetter:s,stringParams:d,right:p,tooltip:u,top:E})=>{const f={left:l,top:E,right:p,bottom:e},b=y[u];if(!b)return t;const m=b({stringGetter:s,stringParams:d}),T=m.title,O=m.titleKey,S=void 0===O?null:O,I=m.body,h=m.bodyKey,L=void 0===h?null:h,A=m.learnMoreLink;if(!a)return t;let k,N;return o&&(L||S)&&(S&&(k=n.a.createElement("span",{dangerouslySetInnerHTML:{__html:s({key:S,params:d})}})),L&&(N=n.a.createElement("span",{dangerouslySetInnerHTML:{__html:s({key:L,params:d})}}))),n.a.createElement(_.WithTooltip,{className:r},t,n.a.createElement(_.MouseSpace,{hasLongDelay:c,style:f},n.a.createElement(_.TooltipContent,null,n.a.createElement(_.Title,null,k||T),n.a.createElement(_.Body,null,n.a.createElement("span",null,N||I),A&&n.a.createElement(g.a,{href:A}),i))))})},1727:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var a=r(225),n=r.n(a),i=r(242),o=r.n(i),l=r(594),c=r.n(l),s=r(0),d=r.n(s),p=r(2),u=r.n(p),E=r(16),y=r.n(E),g=r(68),_=r(15),f=r(127),b="_1jjz_0ocJ5wcZ5nulY2J0L",m="_3YlixFtU499GCZvDJUid8d",T="_3OXfoeCGO4u8et1lby3Ucl",O="H-iVjhhc8OeS3lFFk5h_3",S="PluY6rJkaBpe7xscE037V",I="_10EZoMzaJseemQzPYW0fHF",h="_1tyMMbYVAovuYXMLE5LQ",L="_3xSwQvHnQtWIKf8WggR8YV",A="_1-KqpgU2ty0lNdX21KbY9d",k="_1nQhXs4RT0NWUboVv3zIcl",N="_1bxkDjwOPHHHDXpNZX2mqT",x="_3fgw1qUuoju6zA4_-K6gYN",v="_3VjP7pBlavphsZxq2sfS3E",R="_2XqqS_zzMiQDtcTRJBlRk0",C="_2u4lG8BRK-ofyihqi2Padd",D="Rg4vuAZCokNeR-8JfK-ql";function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(c){l=!0,n=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const DropdownMenu=({autoHeight:e,className:t,dropdownMenuItems:r,isMenuOpen:a,backgroundLighter:i,expandedView:l,fixedHeight:p,noFixedItemHeight:u,onChangeSelection:E,selectedItemKey:P,setIsMenuOpen:j})=>{const G=d.a.useRef(null),w=_slicedToArray(Object(s.useState)(!1),2),M=w[0],W=w[1],K=c()(a)?M:a,B=c()(a)?W:j;Object(g.i)({onClickOutside:()=>B(!1),ref:G});const U=o()(r,({key:e})=>e===P);return d.a.createElement("div",{ref:G,className:y()(b,{[m]:K&&!l,[T]:l})},!l&&d.a.createElement("button",{type:"button",onClick:()=>B(!K),className:y()(O,{[m]:K,[S]:i},t)},U&&d.a.createElement("div",{className:x},U.icon&&d.a.createElement("div",{className:y()(v,{[C]:U.iconUsesFill,[R]:U.iconUsesStroke})},U.icon),U.label,U.tag&&d.a.createElement(f.a,{backgroundLight:!0,marginLeft:!0},U.tag)),d.a.createElement(_.Ib,null)),d.a.createElement("div",{className:y()(I,{[m]:K||l,[h]:e,[T]:l,[L]:p})},n()(r,({key:e,label:t,icon:r,iconUsesFill:a,iconUsesStroke:n,tag:i,menuOnlyDetail:o})=>d.a.createElement("div",{key:e,role:"button",tabIndex:0,className:y()(A,{[N]:u}),onClick:t=>{e!==P&&E(e,t),B(!1)}},r&&d.a.createElement("div",{className:y()(v,{[C]:a,[R]:n})},r),t,i&&d.a.createElement(f.a,{marginLeft:!0,className:k},i),o&&d.a.createElement("div",{className:D},o)))))};DropdownMenu.propTypes={autoHeight:u.a.bool,backgroundLighter:u.a.bool,className:u.a.string,dropdownMenuItems:u.a.arrayOf(u.a.shape({key:u.a.string.isRequired,label:u.a.oneOfType([u.a.string,u.a.node]).isRequired,icon:u.a.node,iconUsesStroke:u.a.bool,iconUsesFill:u.a.bool,disabled:u.a.bool,tag:u.a.string})).isRequired,expandedView:u.a.bool,fixedHeight:u.a.bool,isMenuOpen:u.a.bool,noFixedItemHeight:u.a.bool,onChangeSelection:u.a.func.isRequired,selectedItemKey:u.a.string.isRequired,setIsMenuOpen:u.a.func};var P=DropdownMenu},1728:function(e,t,r){"use strict";r.d(t,"b",(function(){return L})),r.d(t,"a",(function(){return I}));var a=r(189),n=r.n(a),i=r(0),o=r.n(i),l=r(2),c=r.n(l),s=r(16),d=r.n(s),p=r(9),u=r(15),E=r(95),y="kePwtS1uunfwXbIK0L16k",g="_2IlD4hbXzdhcaEV8Tnl-KV",_="_3zuA4vLOLSdcXfn26DmOF2",f="RK10uwRJkutHZmff_IfEv",b="_2mNZYPYID1hf4azgl6qRru",m="_37LtL6OhnjkadeJeyPKk6t",T="Fx5KwI7IwFMVPrH4SaCB9",O="_2SC4Oknd9sG9HL3LKYuMkg",S="_3VP909ZoZnVyZv4LHnb-9T";const I={ERROR:"ERROR",INFO:"INFO",SUCCESS:"SUCCESS",WARNING:"WARNING"},AlertMessage=({backgroundLighter:e,children:t,className:r,noMarginBottom:a,noMarginTop:n,onDismiss:i,title:l,type:c=I.ERROR})=>o.a.createElement("div",{className:d()(y,{[g]:c===I.ERROR,[T]:c===I.WARNING,[b]:c===I.INFO,[_]:c===I.SUCCESS,[O]:a,[S]:n,[m]:e},r)},l&&o.a.createElement("div",{className:f},l),o.a.createElement(h.AlertContent,{hasDismiss:i},t),i&&o.a.createElement(h.IconButton,{icon:o.a.createElement(u.q,null),onClick:e=>{e.stopPropagation(),i()}})),h={};h.IconButton=Object(p.c)(E.b)`
  position: absolute;
  top: 6px;
  right: 6px;
`,h.AlertContent=p.c.div`
  ${({hasDismiss:e})=>e&&"margin-right: 16px;"}
`,AlertMessage.propTypes={backgroundLighter:c.a.bool,children:c.a.oneOfType([c.a.arrayOf(c.a.node),c.a.node,c.a.string]).isRequired,className:c.a.string,noMarginBottom:c.a.bool,noMarginTop:c.a.bool,onDismiss:c.a.func,title:c.a.string,type:c.a.oneOf(n()(I))};var L=AlertMessage},1747:function(e,t,r){"use strict";r.d(t,"e",(function(){return i})),r.d(t,"a",(function(){return o})),r.d(t,"c",(function(){return l})),r.d(t,"f",(function(){return c})),r.d(t,"b",(function(){return s})),r.d(t,"d",(function(){return d}));var a=r(9),n=r(17);const i=a.c.div`
  padding: 0 28px 24px;

  @media ${n.a.mobile} {
    padding-top: 8px;
    overflow-y: auto;
  }
`,o=a.c.div`
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`,l=(a.c.div`
  ${n.e.size15}
  display: flex;
  justify-content: space-between;
  color: var(--color-text-dark);
  margin-top: 16px;

  > * {
    cursor: pointer;

    &:hover {
      color: var(--color-text-base);
    }
  }
`,a.c.div`
  padding: 0 28px 24px 28px;
  ${n.e.size14}
  display: flex;
  flex-direction: column;
  color: var(--color-text-dark);
  height: 100%;
  overflow: scroll;

  > * {
    height: 100%;
  }

  @media ${n.a.tablet} {
    ${n.e.size16}
  }
`),c=a.c.div`
  color: var(--color-text-dark);
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 16px;
  ${n.e.size14}

  @media ${n.a.tablet} {
    ${n.e.size16}
  }

  & > a {
    white-space: nowrap;
    cursor: pointer;

    &:hover {
      color: var(--color-text-base);
    }
  }
`,s=a.c.a`
  ::before {
    content: '← ';
  }
`,d=a.c.a`
  ::after {
    content: ' →';
  }
`},1751:function(e,t,r){"use strict";r.d(t,"a",(function(){return ToggleInput})),r.d(t,"b",(function(){return l}));var a=r(0),n=r.n(a),i=r(9),o=r(17);let l;!function(e){e.ExtraSmall="ExtraSmall",e.Default="Default",e.Small="Small",e.Tiny="Tiny"}(l||(l={}));const ToggleInput=({checked:e,disabled:t,id:r,noMargin:a,onToggle:i,size:o=l.Default})=>n.a.createElement(c.ToggleInput,{checked:e,disabled:t,id:r,noMargin:a,size:o,type:"checkbox",onChange:e=>i(e.target.checked)}),c={};c.ToggleInput=i.c.input`
  --animation-speed: 200ms;
  --toggle-distance: 0px;

  position: relative;
  background-color: var(--color-layer-darker);
  border-radius: 20px;
  cursor: pointer;
  appearance: none;
  transition: all var(--animation-speed) ease-in-out;

  &:after {
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    background-color: var(--color-layer-lightest);
    border-radius: 50%;
    transition: all var(--animation-speed) ease-in-out;
    transform: translateX(0);
  }

  :checked {
    background-color: var(--color-purple);

    &:after {
      background-color: var(--color-text-light);
      transform: translateX(var(--toggle-distance));
    }
  }

  :disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${({size:e})=>{switch(e){case l.Tiny:return i.b`
          --toggle-distance: 10px;
          height: 16px;
          width: 26px;

          &:after {
            height: 16px;
            width: 16px;
          }

          @media ${o.a.tablet} {
            --toggle-distance: 12px;
            height: 18px;
            width: 30px;

            &:after {
              height: 18px;
              width: 18px;
            }
          }
        `;case l.Default:return i.b`
          --toggle-distance: 18px;

          height: 24px;
          width: 42px;

          &:after {
            height: 24px;
            width: 24px;
          }
        `;case l.ExtraSmall:return i.b`
          --toggle-distance: 12px;

          height: 18px;
          width: 30px;

          &:after {
            height: 18px;
            width: 18px;
          }
        `;case l.Small:return i.b`
          --toggle-distance: 16px;

          height: 20px;
          width: 36px;

          &:after {
            height: 20px;
            width: 20px;
          }

          @media ${o.a.tablet} {
            --toggle-distance: 18px;

            height: 24px;
            width: 42px;

            &:after {
              height: 24px;
              width: 24px;
            }
          }
        `;default:return null}}}

  ${({noMargin:e})=>e&&i.b`
      margin: 0;
    `}
`},2119:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return rt})),r.d(t,"styles",(function(){return a}));var a={};r.r(a),r.d(a,"default",(function(){return ge}));var n=r(27),i=r.n(n),o=r(0),l=r.n(o),c=r(2),s=r.n(c),d=r(25),p=r(10),u=r(101),E=r(190),y=r(37),g=r(595),_=r(56),f=r(115),b=r(75),m=r(19),T=r(468),O=r(77),S=r(42),I=r(9),h=r(32),L=r(15),A=r(17),k=r(36),N=r(592),x=r(1),v=r(1747);const ManageNotificationsStep=({goToNextStep:e,stringGetter:t})=>l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{noBorder:!0,title:l.a.createElement(l.a.Fragment,null,l.a.createElement(R.HeaderIcon,null,l.a.createElement(L.A,null)),t({key:x.a.MANAGE_NOTIFICATIONS}))}),l.a.createElement(v.e,null,l.a.createElement(R.ManageNotificationsContent,null,l.a.createElement(R.WelcomeMessageSpan,null,t({key:x.a.MANAGE_NOTIFICATIONS_ONBOARD}))),l.a.createElement(v.a,null,l.a.createElement(k.a,{color:k.b.Purple,onClick:e},t({key:x.a.GET_STARTED}))))),R={};R.ManageNotificationsContent=I.c.div`
  display: flex;
  flex-direction: column;
`,R.WelcomeMessageSpan=I.c.span`
  ${A.e.size15}
  margin-top: -8px;
  text-align: left;
  color: var(--color-text-base);

  @media ${A.a.tablet} {
    ${A.e.size16}
  }
`,R.HeaderIcon=I.c.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-top: 1px;

  > svg {
    height: 22px;
    width: 22px;

    path {
      fill: var(--color-text-base);
    }

    @media ${A.a.tablet} {
      height: 26px;
      width: 26px;
    }
  }
`,ManageNotificationsStep.propTypes={goToNextStep:s.a.func.isRequired,stringGetter:s.a.func.isRequired};var C,D=Object(h.c)(ManageNotificationsStep),P=r(225),j=r.n(P),G=r(68),w=r(578),M=r(381),W=r(21),K=r(12),B=r(323),U=r(89),Y=r(99),F=r.n(Y);function asyncGeneratorStep(e,t,r,a,n,i,o){try{var l=e[i](o),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(a,n)}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(c){l=!0,n=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}!function(e){e.APPLE="apple",e.GOOGLE="google"}(C||(C={}));const H={};H.PoweredBy=I.c.span`
  white-space: break-spaces;

  & > a {
    display: inline-flex;
    color: var(--color-text-light);
    align-items: baseline;
    gap: 4px;
    padding-top: 4px;

    &:hover {
      filter: brightness(1.1);
    }

    > svg {
      align-self: center;
      height: 16px;
      width: 16px;

      @media ${A.a.tablet} {
        height: 20px;
        width: 20px;
      }
    }
  }
`,H.Separator=I.c.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 16px 0;
`,H.Line=I.c.div`
  display: flex;
  flex-grow: 1;
  border: 1px solid var(--color-layer-lighter);
  margin: auto 0;
`,H.MagicLinkContainer=I.c.section`
  > h3 {
    ${A.f.medium}
    ${A.e.size20};
    color: var(--color-text-light);
    margin-bottom: 2px;
  }

  > ${H.PoweredBy} {
    ${A.e.size14}
    color: var(--color-text-dark);

    @media ${A.a.tablet} {
      ${A.e.size16}
    }
  }
`,H.MagicLinkOptionsContainer=I.c.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  margin-top: 16px;
  gap: 16px;

  button {
    ${A.e.size13}
    border: 1px solid var(--color-border-lighter);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;

    height: 88px;
    width: 100%;

    @media ${A.a.tablet} {
      ${A.e.size15}
    }

    :disabled {
      opacity: 0.5;
    }

    > svg {
      height: 38px;
      width: 38px;
    }
  }
`,H.EmailSignInIcon=Object(I.c)(L.B)`
  > * {
    fill: currentColor;
  }
`;var steps_SignInWithMagicOptions=({goToLoginWithEmail:e})=>{const t=Object(G.g)(),r=Object(G.u)(),a=Object(G.b)().isMobile,n=_slicedToArray(Object(o.useState)(null),2),i=n[0],c=n[1],s=function(){var e=function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,a,n,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,a,n,_next,_throw,"throw",e)}_next(void 0)}))}}((function*(e){c(e);try{yield t.oauth.loginWithRedirect({provider:e,redirectURI:new URL("/magic-redirect",window.location.origin).href,scope:["email"]})}catch(r){c(null)}}));return function onLoginClick(t){return e.apply(this,arguments)}}();return l.a.createElement(l.a.Fragment,null,l.a.createElement(H.Separator,null,l.a.createElement(H.Line,null),r({key:x.a.OR}),l.a.createElement(H.Line,null)),l.a.createElement(H.MagicLinkContainer,null,l.a.createElement("h3",null,r({key:x.a.SIGN_IN_WITH_EMAIL_OR_SOCIAL})),!a&&l.a.createElement(H.PoweredBy,{dangerouslySetInnerHTML:{__html:r({key:x.a.SIGN_IN_WITH_EMAIL_SUBTITLE,params:{MAGIC:F.a.renderToString(l.a.createElement("a",{href:"https://magic.link/docs/home/security",rel:"noreferrer",target:"_blank"},l.a.createElement(L.Z,null),"Magic"))}})}}),l.a.createElement(H.MagicLinkOptionsContainer,null,l.a.createElement(k.a,{onClick:e,disabled:!!i},l.a.createElement(H.EmailSignInIcon,null),r({key:x.a.EMAIL})),l.a.createElement(k.a,{onClick:()=>s(C.APPLE),disabled:!!i,isLoading:i===C.APPLE},l.a.createElement(L.b,null),"Apple"),l.a.createElement(k.a,{onClick:()=>s(C.GOOGLE),disabled:!!i,isLoading:i===C.GOOGLE},l.a.createElement(L.L,null),"Google"))))};function ChooseWalletStep_slicedToArray(e,t){return function ChooseWalletStep_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function ChooseWalletStep_iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(c){l=!0,n=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}(e,t)||function ChooseWalletStep_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return ChooseWalletStep_arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ChooseWalletStep_arrayLikeToArray(e,t)}(e,t)||function ChooseWalletStep_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ChooseWalletStep_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const $=B.a.filter(e=>e!==K.c.OtherWallet),z={};z.StepContent=Object(I.c)(v.e)`
  ${A.e.size14}
  color: var(--color-text-dark);

  @media ${A.a.tablet} {
    padding-top: 0;
    ${A.e.size16}
  }
`,z.Subtitle=I.c.span`
  white-space: break-spaces;
`,z.WalletOptionsContainer=I.c.section`
  --outer-padding: 16px;
  --inner-padding: 12px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: var(--outer-padding);
  padding-top: var(--outer-padding);
  padding-right: calc(var(--outer-padding) - var(--inner-padding));
  padding-bottom: calc(var(--outer-padding) - var(--inner-padding));
  background-color: var(--color-layer-dark);
  border-radius: 8px;
  margin-bottom: 16px;
  overflow-y: auto;
  max-height: 160px;

  @media ${A.a.notTablet} {
    > * {
      margin-right: var(--inner-padding);
      margin-bottom: var(--inner-padding);
    }
  }

  @media ${A.a.tablet} {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));
    padding: var(--outer-padding);
    gap: var(--inner-padding);
    max-height: 152px;

    // Workaround for overflow/end padding bug
    --padding-bottom: calc(var(--outer-padding) - var(--inner-padding));
    padding-bottom: 0;

    &:after {
      content: '';
      grid-column: 1 / -1;
      height: var(--padding-bottom);
    }
  }

  > button {
    display: flex;
    align-items: center;
    flex: 0 auto;

    > svg,
    > img {
      width: 18px;
      height: 18px;
      margin-right: 8px;
      border-radius: 4px;
    }

    @media ${A.a.tablet} {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-between;

      > svg,
      > img {
        width: 24px;
        height: 24px;
        margin: 0;
      }
    }
  }

  p {
    width: calc(100% - var(--inner-padding));
    overflow-wrap: break-word;
  }
}`,z.AboutWallets=I.c.a`
  display: flex;
  align-items: center;
  gap: 2px;

  > svg {
    height: 16px;
    width: 16px;
    margin-top: 1px;

    > * {
      stroke: currentColor;
    }
  }
`;var steps_ChooseWalletStep=({closeModal:e,goToLedgerDerivation:t,goToLoginWithEmail:r,goToNextStep:a})=>{const n=ChooseWalletStep_slicedToArray(Object(o.useState)(!1),2),i=n[0],c=n[1],s=ChooseWalletStep_slicedToArray(Object(o.useState)(""),2),d=s[0],u=s[1],E=ChooseWalletStep_slicedToArray(Object(o.useState)([]),2),y=E[0],g=E[1],_=Object(p.e)(),f=Object(G.u)(),b=Object(G.b)().isMobile;return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{noBorder:!0,withSearchTransition:!0,title:!i&&f({key:x.a.CONNECT_YOUR_WALLET}),subtitle:!b&&!i&&l.a.createElement(z.Subtitle,null,f({key:x.a.CONNECT_YOUR_WALLET_SUBTITLE})),contentRight:l.a.createElement(w.b,{alternateLayout:!0,pill:!0,transition:!0,size:w.a.SMALL,isSearching:i,setIsSearching:c,searchItems:$,onSearch:(e,t)=>{g(e),u(t)},placeholder:f({key:x.a.CONNECT_YOUR_WALLET_SEARCH})})}),l.a.createElement(z.StepContent,null,l.a.createElement(z.WalletOptionsContainer,null,i&&d&&0===y.length&&l.a.createElement("p",null,f({key:x.a.QUERY_NOT_FOUND,params:{QUERY:d}})),j()([...y,K.c.OtherWallet],e=>e===K.c.MagicAuth||b&&e===K.c.Ledger?null:l.a.createElement(k.a,{key:e,onClick:()=>{e===K.c.Ledger?t():(_(Object(W.c)({walletType:e})),a())},size:k.d.Medium},l.a.createElement(M.a,{walletType:e}),f({key:x.a[e]})))),U.a.magic&&l.a.createElement(steps_SignInWithMagicOptions,{goToLoginWithEmail:r}),!b&&l.a.createElement(v.f,null,l.a.createElement(z.AboutWallets,{target:"_blank",rel:"noopener noreferrer",href:"https://www.dydxacademy.info/educational-video-series/onboarding-to-defi-with-dydx"},f({key:x.a.ABOUT_WALLETS}),l.a.createElement(L.W,null)),l.a.createElement(v.d,{onClick:e},f({key:x.a.SKIP_FOR_NOW})))))},V=r(594),q=r.n(V),X=r(60),Z=r.n(X),Q=r(16),J=r.n(Q),ee=r(1728),te=r(1727),re=r(373),ae=r(582),ne=r(605),ie=r(284),oe=r(24),le=r(324),ce="_2KON3FuK8szwWmFM0wb_1W",se="_2wGlDnajkUK1Z7kTB1RB8h",de="_238m-0k2aH3dxTl9kU0U4",pe="_2ZGo7fQt02hOoHoxyg7iZN",ue="_2Fk_G6SsfBJDv13brr4X8j",Ee="_1h-xcMyqI7qnnt9sBMYfLd",ye="Vd80SVqM4_tsURzEYkana",ge={stepContent:"_3Gi0wen8ZfXqosf-vNt-lz",alertMessage:"_1IdKcf5ZzouhY288U8TqvL",bodyText:"pH7oMO6lfOLMwdN8xmYQP",additionalLinks:"_3aAXBdzNHxTCO1Zt2Ae-uc",buttonFooter:"_3IQ-NT09Z0IV450en6faVo",footerAdditionalInfo:"pNfEXR_UnrRzF1h_YykaX",buttonExtraMargin:"cxu6b9QiEEj2D2JTooSQE",walletLoadingSpinner:"_5vZoW_U25_50LsaIm6dp2",tryAgainLink:"De9yO_dD_17MsHeJmkMuU",termsLink:"SPuqEIzh6YNZ_mWB3K6T5",optionalLabel:"_2BLNPd_sYrb0uxVJCEgDSl",link:"_1xAXb7Lg-qPq_Ld_zysHsE",nonMobileOnly:"STk6Ule9AnbfcElPVHM3c",stepLoading:"fmxje8egMapqPcC7b-cyi",tooltipHelpIcon:"_3EzOEo6I0IT9Qq3SZ0EGh3",checkboxContainer:"_2cp3TZp37JnCxYGpIfey4H",emailInput:"_19o88BVKCZAxijlaUu9pxC"};function LedgerDerivationStep_asyncGeneratorStep(e,t,r,a,n,i,o){try{var l=e[i](o),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(a,n)}function LedgerDerivationStep_slicedToArray(e,t){return function LedgerDerivationStep_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function LedgerDerivationStep_iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(c){l=!0,n=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}(e,t)||function LedgerDerivationStep_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return LedgerDerivationStep_arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return LedgerDerivationStep_arrayLikeToArray(e,t)}(e,t)||function LedgerDerivationStep_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function LedgerDerivationStep_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const LedgerDerivationStep=({goToNextStep:e,goToPreviousStep:t,stringGetter:r})=>{const a=Object(p.e)(),n=Object(p.f)(y.e),i=Object(p.f)(y.h);Object(o.useEffect)(()=>{n||i&&e()},[n,i]);const c=LedgerDerivationStep_slicedToArray(Object(o.useState)("44'/60'/0'/0"),2),s=c[0],d=c[1],u=LedgerDerivationStep_slicedToArray(Object(o.useState)(null),2),E=u[0],g=u[1],_=LedgerDerivationStep_slicedToArray(Object(o.useState)(0),2),f=_[0],b=_[1],m=LedgerDerivationStep_slicedToArray(Object(o.useState)(null),2),T=m[0],O=m[1],S=LedgerDerivationStep_slicedToArray(Object(o.useState)(null),2),I=S[0],h=S[1],A=LedgerDerivationStep_slicedToArray(Object(o.useState)(!1),2),v=A[0],R=A[1],C=function(){var e=function LedgerDerivationStep_asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function _next(e){LedgerDerivationStep_asyncGeneratorStep(i,a,n,_next,_throw,"next",e)}function _throw(e){LedgerDerivationStep_asyncGeneratorStep(i,a,n,_next,_throw,"throw",e)}_next(void 0)}))}}((function*({derivationPath:e=s}={}){try{const t=new le.a({ledgerEthereumClientFactoryAsync:le.e,networkId:Number("1"),baseDerivationPath:e}),r=yield t.getAccountsAsync(20);g(r)}catch(t){const e=t.message;Z()(e,"U2F browser support is needed")?h(r({key:x.a.LEDGER_U2F_REQUIRED})):(oe.b.notify({error:new Error("Unknown Ledger Error: "+e),location:oe.a.LEDGER_DERIVATION}),h(r({key:x.a.SOMETHING_WENT_WRONG})))}}));return function getAccounts(){return e.apply(this,arguments)}}();if(Object(o.useEffect)(()=>{C()},[]),!E)return l.a.createElement("div",null,l.a.createElement(N.a,{noBorder:!0,title:r({key:x.a.SEARCHING_FOR_LEDGER}),subtitle:r({key:x.a.SEARCHING_FOR_LEDGER_DESCRIPTION})}),l.a.createElement("div",{className:ge.stepContent},I?l.a.createElement(ee.b,{className:ge.alertMessage,type:ee.a.ERROR},I):l.a.createElement("div",{className:ge.walletLoadingSpinner},l.a.createElement(re.a,{huge:!0})),l.a.createElement("div",{className:ge.additionalLinks},l.a.createElement("div",{role:"button",tabIndex:0,onClick:()=>{a(Object(W.d)()),t()}},"\u2190 "+r({key:x.a.GO_BACK})),l.a.createElement("div",{role:"button",tabIndex:0,className:ge.tryAgainLink,onClick:()=>{h(null),C()}},l.a.createElement(L.Mb,null),r({key:x.a.TRY_AGAIN})))));return l.a.createElement("div",null,l.a.createElement(N.a,{noBorder:!0,title:r({key:x.a.SELECT_ACCOUNT}),subtitle:r({key:x.a.SELECT_ACCOUNT_DESCRIPTION})}),l.a.createElement("div",{className:ge.stepContent},l.a.createElement(ie.a,{label:r({key:x.a.LEDGER_DERIVATION_PATH})},l.a.createElement(te.a,{backgroundLighter:!0,selectedItemKey:s,onChangeSelection:e=>{g(null),b(0),O(null),d(e),C({derivationPath:e})},dropdownMenuItems:[{key:"44'/60'/0'/0",label:"Ledger Live"},{key:"44'/60'/0'",label:r({key:x.a.LEGACY})}]})),l.a.createElement(ie.a,{label:r({key:x.a.ACCOUNT})},l.a.createElement("div",{className:ce},l.a.createElement(ae.a,{className:se,onChangeSelection:e=>O(e),selectedKey:T,radioConfig:(()=>{let e=f;const t=[];for(;t.length<5&&e<E.length;){const r=E[e];t.push({className:de,key:e,label:l.a.createElement(l.a.Fragment,null,l.a.createElement(ne.a,{className:ue,hash:r,charsPerSide:4}),l.a.createElement("a",{href:"https://etherscan.io/address/"+r,target:"_blank",rel:"noopener noreferrer"},l.a.createElement(L.W,null))),labelClassName:pe,prefix:e+1}),e+=1}return t})()}),l.a.createElement("div",{className:Ee},l.a.createElement("div",{role:"button",tabIndex:0,className:J()({[ye]:f<=0}),onClick:()=>{f<=0||b(f-5)}},"\u2190 "+r({key:x.a.BACK})),l.a.createElement("div",{role:"button",tabIndex:0,className:J()({[ye]:f>=15}),onClick:()=>{f>=15||b(f+5)}},r({key:x.a.MORE})+" \u2192")))),l.a.createElement(k.a,{fullWidth:!0,color:k.b.Purple,disabled:q()(T),isLoading:v,onClick:()=>{a(Object(W.c)({walletType:K.c.Ledger,options:{derivationPath:s,walletAddress:E[T]}})),R(!0)},size:k.d.Large},r({key:x.a.CONNECT}))))};LedgerDerivationStep.propTypes={goToNextStep:s.a.func.isRequired,goToPreviousStep:s.a.func.isRequired,stringGetter:s.a.func.isRequired};var _e,fe=Object(h.c)(LedgerDerivationStep),be=r(624),me=r(1751),Te=r(1725),Oe=r(155),Se=r(55),Ie=r(148),he=r(30),Le=r(375);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function LinkWalletStep_asyncGeneratorStep(e,t,r,a,n,i,o){try{var l=e[i](o),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(a,n)}function LinkWalletStep_asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function _next(e){LinkWalletStep_asyncGeneratorStep(i,a,n,_next,_throw,"next",e)}function _throw(e){LinkWalletStep_asyncGeneratorStep(i,a,n,_next,_throw,"throw",e)}_next(void 0)}))}}function LinkWalletStep_slicedToArray(e,t){return function LinkWalletStep_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function LinkWalletStep_iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(c){l=!0,n=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}(e,t)||function LinkWalletStep_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return LinkWalletStep_arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return LinkWalletStep_arrayLikeToArray(e,t)}(e,t)||function LinkWalletStep_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function LinkWalletStep_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}!function(e){e.GenerateStarkKey="GenerateStarkKey",e.GenerateApiKey="GenerateApiKey"}(_e||(_e={}));let Ae=!1;const ke={};ke.AlertMessage=Object(I.c)(ee.b)`
  && {
    margin: 10px 0 0;
  }
`,ke.LoadingSpinner=Object(I.c)(re.a)`
  display: flex;
`,ke.ErrorTriangleIcon=Object(I.c)(L.C)`
  height: 22px;
  width: 22px;
`,ke.SuccessCheck=Object(I.c)(L.o)`
  height: 20px;
  width: 20px;

  path {
    fill: var(--color-green);
  }
`,ke.LabelAndTooltip=I.c.div`
  display: flex;
  flex: 1;
  gap: 6px;

  @media ${A.a.tablet} {
    ${A.e.size18}
  }
`,ke.ToggleOption=I.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
`,ke.TooltipHelpIcon=Object(I.c)(Te.a)`
  && {
    display: flex;
    margin-top: 2px;
    width: auto;
  }
`,ke.ToggleContainer=I.c.div`
  display: flex;
  flex-direction: column;
  color: var(--color-text-light);
  ${({disabled:e})=>e&&I.b`
      color: var(--color-text-dark);
    `}

  ${ke.ToggleOption}:not(:last-child) {
    margin-bottom: 10px;
  }
`,ke.ButtonContents=I.c.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  gap: 10px;

  > svg {
    height: 16px;
    width: 16px;
  }
`,ke.IconContainer=I.c.div`
  ${A.e.size20}
  background-color: var(--color-layer-lightest);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  margin-top: 2px;
`,ke.StepsToConnect=I.c.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`,ke.StepRow=I.c.div`
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 16px;
  margin-bottom: 20px;

  ${({isActive:e})=>!e&&"opacity: 0.5"}
`,ke.StepTitle=I.c.div`
  ${A.e.size16}
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 6px;
  color: var(--color-text-light);

  @media ${A.a.tablet} {
    ${A.e.size18}
  }
`,ke.StepExplanation=I.c.span`
  ${A.e.size14}
  color: var(--color-text-base);

  @media ${A.a.tablet} {
    ${A.e.size16}
  }
`;var Ne=Object(h.c)(({closeModal:e,goToNextStep:t,onValidKeyPairsCallback:r,referrer:a,stringGetter:n})=>{const i=LinkWalletStep_slicedToArray(Object(o.useState)(_e.GenerateStarkKey),2),c=i[0],s=i[1],d=LinkWalletStep_slicedToArray(Object(o.useState)(Ae),2),u=d[0],E=d[1],g=LinkWalletStep_slicedToArray(Object(o.useState)(!1),2),m=g[0],T=g[1],I=LinkWalletStep_slicedToArray(Object(o.useState)(!1),2),h=I[0],A=I[1],R=LinkWalletStep_slicedToArray(Object(o.useState)(!1),2),C=R[0],D=R[1],P=LinkWalletStep_slicedToArray(Object(o.useState)(Ae),2),j=P[0],w=P[1],B=LinkWalletStep_slicedToArray(Object(o.useState)(null),2),U=B[0],Y=B[1],F=LinkWalletStep_slicedToArray(Object(o.useState)(!1),2),H=F[0],$=F[1],z=LinkWalletStep_slicedToArray(Object(o.useState)(!1),2),V=z[0],q=z[1],X=LinkWalletStep_slicedToArray(Object(o.useState)(null),2),Q=X[0],J=X[1],te=LinkWalletStep_slicedToArray(Object(o.useState)(null),2),re=te[0],ae=te[1],ne=Object(p.e)(),ie=Object(p.f)(y.p),le=Object(p.f)(y.o),ce=Object(p.f)(y.k),se=Object(p.f)(f.c),de=Object(p.f)(y.m,p.d),pe=Object(p.f)(_.j),ue=Object(p.f)(y.j,p.d),Ee=Object(p.f)(Ie.a,p.d),ye=Object(G.f)();Object(o.useEffect)(()=>{se&&pe&&!ye&&(Ee?(e(),null===r||void 0===r||r()):ue&&!j&&(Y(n(ue)),s(_e.GenerateStarkKey),(null===ue||void 0===ue?void 0:ue.key)===x.a.KEY_RECOVERY_FAILED&&(Ae=!0,w(!0),E(!0))))},[Ee,ue]),Object(o.useEffect)(()=>{de&&(s(_e.GenerateApiKey),!ye&&H?(pe?setTimeout(()=>Te({starkPair:de}),200):setTimeout(()=>Ne(),200),T(!0)):shouldRememberMe()&&ne(Object(W.j)(!0)))},[de]),Object(o.useEffect)(()=>{le&&(Ae=!1,w(!1),E(!1))},[le]);const ge=function(){var e=LinkWalletStep_asyncToGenerator((function*(){c===_e.GenerateStarkKey?yield fe():c===_e.GenerateApiKey&&(pe?yield Te({starkPair:de}):yield Ne())}));return function onRequest(){return e.apply(this,arguments)}}();Object(o.useEffect)(()=>{ie===K.c.MagicAuth&&ge()},[ie,le]),Object(o.useEffect)(()=>{m&&setTimeout(()=>T(!1),800)},[m]),Object(o.useEffect)(()=>()=>{ne(Object(W.i)(null))},[]);const shouldRememberMe=()=>{const e=Object(S.b)({key:S.a.STARK_KEY_PAIRS});return!(null===e||void 0===e||!e[le])},fe=function(){var e=LinkWalletStep_asyncToGenerator((function*(){const e=Object(Le.c)({walletType:ie,legacySigning:j||C});let t;A(!0),Y(null);try{t=yield he.c.getStarkKey({walletAddress:le,signingMethod:e})}catch(r){if(Z()(r.message,"Not supported")||Z()(r.message,"the method eth_signTypedData_v4 does not exist/is not available"))D(!0);else{const e=Object(Le.d)({error:r,location:oe.a.GENERATE_STARK_KEY,stringGetter:n}).message;e&&Y(e)}}finally{A(!1)}if(t){const e=_objectSpread(_objectSpread({walletAddress:le},t),{},{legacySigning:j||C}),r=Object(S.b)({key:S.a.STARK_KEY_PAIRS});ce&&Object(S.d)({key:S.a.STARK_KEY_PAIRS,value:_objectSpread(_objectSpread({},null!==r&&void 0!==r?r:{}),{},{[le]:_objectSpread(_objectSpread({},e),{},{walletType:ie})})}),$(!0),ne(Object(W.k)(e));const a=yield Object(Le.b)({starkKeyPair:e,walletAddress:le});ne(a?Object(Se.b)(!0):Object(Se.b)(!1))}}));return function generateStarkKey(){return e.apply(this,arguments)}}(),Te=function(){var e=LinkWalletStep_asyncToGenerator((function*({starkPair:e}){const t=e.legacySigning,r=Object(Le.c)({walletType:ie,legacySigning:t});let a;q(!0),J(null);try{a=yield he.c.getApiKey({walletAddress:le,signingMethod:r})}catch(i){const e=Object(Le.d)({error:i,location:oe.a.GENERATE_API_KEY,stringGetter:n}).message;e&&J(e)}finally{q(!1)}if(a){const r=_objectSpread(_objectSpread({walletAddress:le},a),{},{legacySigning:t}),n=Object(S.b)({key:S.a.API_KEY_PAIRS});!n&&ce?Object(S.d)({key:S.a.API_KEY_PAIRS,value:{[le]:_objectSpread(_objectSpread({},r),{},{walletType:ie})}}):ce&&Object(S.d)({key:S.a.API_KEY_PAIRS,value:_objectSpread(_objectSpread({},n),{},{[le]:_objectSpread(_objectSpread({},r),{},{walletType:ie})})}),he.c.initializeClient({apiKeyPair:a,starkKeyPair:e}),ne(Object(W.f)(r)),ne(Object(Oe.b)())}}));return function generateApiKeyAndInitialize(t){return e.apply(this,arguments)}}(),Ne=function(){var e=LinkWalletStep_asyncToGenerator((function*(){try{const e=de.legacySigning,r=Object(Le.c)({walletType:ie,legacySigning:e});q(!0);const n=(yield he.c.createUserAndInitializeClient({referredByAffiliateLink:a,starkKeyPair:de,walletAddress:le,signingMethod:r})).apiKey,i=_objectSpread(_objectSpread({walletAddress:le},n),{},{legacySigning:e});if(ce){const e=Object(S.b)({key:S.a.API_KEY_PAIRS});e?Object(S.d)({key:S.a.API_KEY_PAIRS,value:_objectSpread(_objectSpread({},e),{},{[le]:_objectSpread(_objectSpread({},i),{},{walletType:ie})})}):Object(S.d)({key:S.a.API_KEY_PAIRS,value:{[le]:_objectSpread(_objectSpread({},i),{},{walletType:ie})}})}O.a.trackEvent(b.a.OnboardingCreateAccount,{walletType:ie,affiliateLink:a}),ne(Object(W.f)(i)),ne(Object(Oe.b)()),t()}catch(e){if(Z()(e.message,"jurisdiction that violates our terms"))ae(n({key:x.a.BANNED_USER}));else if(Z()(e.message,"User wallet has no transactions"))ae(n({key:x.a.WALLET_NO_TRANSACTIONS}));else if(Z()(e.message,"For compliance reasons you are blocked"))ae(n({key:x.a.PERMANENTLY_BLOCKED_ELLIPTIC}));else if(Z()(e.message,"For compliance reasons you have been blocked"))ae(n({key:x.a.PERMANENTLY_BLOCKED_COMPLIANCE}));else{const t=Object(Le.d)({error:e,location:oe.a.CREATE_ACCOUNT,stringGetter:n}).message;t&&ae(t)}}finally{q(!1)}}));return function generateNewUserAndInitialize(){return e.apply(this,arguments)}}(),getIcon=({isLoading:e,onError:t,onSuccess:r,stepNumber:a})=>e?l.a.createElement(ke.LoadingSpinner,{compact:!0,thick:!0}):t?l.a.createElement(ke.ErrorTriangleIcon,null):r?l.a.createElement(ke.SuccessCheck,null):a,xe=[{icon:getIcon({isLoading:h,onError:!!U,onSuccess:!!de,stepNumber:1}),titleKey:n({key:x.a.VERIFY_OWNERSHIP}),subtitleKey:n({key:x.a.CONFIRM_OWNERSHIP}),step:_e.GenerateStarkKey},{icon:getIcon({isLoading:V,onError:!!Q||!!re,onSuccess:!!se,stepNumber:2}),titleKey:n({key:x.a.ENABLE_TRADING}),subtitleKey:n({key:x.a.ENABLE_API}),step:_e.GenerateApiKey}],ve=U||Q||re,Re=c===_e.GenerateStarkKey?x.a.SEND_REQUESTS:x.a.SEND_REQUEST,Ce=V||h||ve,De=ie===K.c.MagicAuth&&!ve;return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{noBorder:!0,icon:ie&&l.a.createElement(M.a,{walletType:ie}),title:n({key:De?x.a.LINKING_WALLET:x.a.LINK_WALLET}),subtitle:ie!==K.c.MagicAuth&&n({key:x.a.TWO_SIGNATURE_REQUESTS})}),l.a.createElement(v.e,null,De?l.a.createElement(be.a,{minHeight:80}):l.a.createElement(l.a.Fragment,null,l.a.createElement(ke.StepsToConnect,null,xe.map(e=>l.a.createElement(ke.StepRow,{key:e.titleKey,isActive:e.step===c},l.a.createElement(ke.IconContainer,null,e.icon),l.a.createElement(ke.StepTitle,null,e.titleKey,l.a.createElement(ke.StepExplanation,null,e.subtitleKey)))),l.a.createElement(ke.ToggleContainer,{disabled:c!==_e.GenerateStarkKey},l.a.createElement(ke.ToggleOption,null,l.a.createElement(ke.LabelAndTooltip,null,n({key:x.a.REMEMBER_ME}),l.a.createElement(ke.TooltipHelpIcon,{tooltip:"remember-me",bottom:16,left:-145},l.a.createElement(L.O,null))),l.a.createElement(me.a,{checked:ce,disabled:c!==_e.GenerateStarkKey,onToggle:e=>{ne(Object(W.j)(e))},size:me.b.Small})),u&&l.a.createElement(ke.ToggleOption,null,l.a.createElement(ke.LabelAndTooltip,null,n({key:x.a.LEGACY_SIGNING}),l.a.createElement(ke.TooltipHelpIcon,{tooltip:"legacy-signing",bottom:16,left:-145},l.a.createElement(L.O,null))),l.a.createElement(me.a,{checked:j,disabled:c!==_e.GenerateStarkKey,onToggle:e=>{w(e)},size:me.b.Small}))),ve&&l.a.createElement(ke.AlertMessage,{type:ee.a.ERROR},ve)),l.a.createElement(v.a,null,l.a.createElement(k.a,{color:k.b.Purple,isLoading:c===_e.GenerateApiKey&&!!se||m,onClick:ge},l.a.createElement(ke.ButtonContents,null,Ce&&l.a.createElement(L.ub,null),n({key:Ce?x.a.TRY_AGAIN:Re})))))))});const ConnectingWalletStep=({closeModal:e,goToNextStep:t,goToPreviousStep:r,stringGetter:a})=>{const n=Object(p.f)(f.a),i=Object(p.f)(_.d),c=Object(p.f)(y.e),s=Object(p.f)(y.h),d=Object(p.f)(_.j),u=Object(p.f)(y.p),g=Object(p.e)();Object(o.useEffect)(()=>{u?c||q()(d)||(n&&i?e():s?t():r()):r()},[c,s,d,u]);const b=u!==K.c.MagicAuth;return l.a.createElement("div",null,l.a.createElement(N.a,{noBorder:!0,title:a({key:x.a.CONNECTING}),subtitle:b&&a({key:x.a.CONNECTING_SUBTITLE})}),l.a.createElement("div",{className:ge.stepContent},l.a.createElement(E.a,{minHeight:80}),l.a.createElement("div",{className:ge.additionalLinks},l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.dydxacademy.info/educational-video-series/setting-up-a-dydx-account"},a({key:x.a.HAVING_TROUBLE})),l.a.createElement("div",{role:"button",tabIndex:0,className:ge.tryAgainLink,onClick:()=>{g(Object(W.d)()),r()}},l.a.createElement(L.Mb,null),a({key:x.a.TRY_AGAIN})))))};ConnectingWalletStep.propTypes={closeModal:s.a.func.isRequired,goToNextStep:s.a.func.isRequired,goToPreviousStep:s.a.func.isRequired,stringGetter:s.a.func.isRequired};var xe=Object(h.c)(ConnectingWalletStep),ve=r(602),Re=r(371),Ce=r(4);function SignInWithEmailStep_asyncGeneratorStep(e,t,r,a,n,i,o){try{var l=e[i](o),c=l.value}catch(s){return void r(s)}l.done?t(c):Promise.resolve(c).then(a,n)}function SignInWithEmailStep_asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function _next(e){SignInWithEmailStep_asyncGeneratorStep(i,a,n,_next,_throw,"next",e)}function _throw(e){SignInWithEmailStep_asyncGeneratorStep(i,a,n,_next,_throw,"throw",e)}_next(void 0)}))}}function SignInWithEmailStep_slicedToArray(e,t){return function SignInWithEmailStep_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function SignInWithEmailStep_iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(c){l=!0,n=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}(e,t)||function SignInWithEmailStep_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return SignInWithEmailStep_arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return SignInWithEmailStep_arrayLikeToArray(e,t)}(e,t)||function SignInWithEmailStep_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function SignInWithEmailStep_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}var steps_SignInWithEmailStep=({closeModal:e,goToNextStep:t,goToPreviousStep:r})=>{const a=Object(p.e)(),n=Object(G.u)(),i=Object(G.g)(),c=SignInWithEmailStep_slicedToArray(Object(o.useState)(!1),2),s=c[0],d=c[1],u=SignInWithEmailStep_slicedToArray(Object(o.useState)(""),2),E=u[0],y=u[1],g=SignInWithEmailStep_slicedToArray(Object(o.useState)(!0),2),_=g[0],f=g[1],b=Object(o.useCallback)(SignInWithEmailStep_asyncToGenerator((function*(){d(!0);try{yield i.auth.loginWithMagicLink({email:E}),(yield i.user.isLoggedIn())&&(a(Object(W.j)(_)),a(Object(W.c)({walletType:Ce.m.MagicAuth})),t())}catch(e){d(!1)}})),[E,i]);return l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{noBorder:!0,title:n({key:x.a.SIGN_IN_WITH_EMAIL}),subtitle:l.a.createElement(De.PoweredBy,{dangerouslySetInnerHTML:{__html:n({key:x.a.SIGN_IN_WITH_EMAIL_SUBTITLE,params:{MAGIC:F.a.renderToString(l.a.createElement("a",{href:"https://magic.link/docs/home/security"},l.a.createElement(L.Z,null),"Magic"))}})}})}),l.a.createElement(De.StepContent,null,l.a.createElement("form",{onSubmit:e=>{e.preventDefault(),b()}},l.a.createElement(Re.c,{autofocus:!0,backgroundLighter:!0,type:Re.b.TEXT,value:E,onChange:y,placeholder:"user@email.com",name:"email",autoComplete:"on"}),l.a.createElement(ve.a,{label:l.a.createElement(De.LabelAndTooltip,null,n({key:x.a.REMEMBER_ME}),l.a.createElement(Te.a,{tooltip:"remember-me",bottom:16,left:-145},l.a.createElement(L.O,null))),disabled:s,checked:_,onClick:()=>f(!_)}),l.a.createElement(k.a,{fullWidth:!0,isLoading:s,color:k.b.Purple,size:k.d.Large,type:"submit"},n({key:x.a.SEND_LINK}))),l.a.createElement(v.f,null,l.a.createElement(v.b,{onClick:r},n({key:x.a.GO_BACK})),l.a.createElement(v.d,{onClick:e},n({key:x.a.SKIP_FOR_NOW})))))};const De={};De.StepContent=Object(I.c)(v.e)`
  ${A.e.size14}
  color: var(--color-text-dark);
  padding-top: 0;

  @media ${A.a.tablet} {
    ${A.e.size16}
  }

  > form > div {
    margin-bottom: 12px !important;

    @media ${A.a.tablet} {
      margin-bottom: 16px !important;
    }
  }
`,De.Row=I.c.div`
  display: flex;
  align-items: center;
`,De.LabelAndTooltip=Object(I.c)(De.Row)`
  & > div {
    margin-left: 4px;
    height: 16px;

    @media ${A.a.tablet} {
      margin-left: 6px;
    }
  }
`,De.PoweredBy=I.c.span`
  & > a {
    display: inline-flex;
    color: var(--color-text-light);
    align-items: baseline;
    gap: 4px;
    padding-top: 4px;

    &:hover {
      filter: brightness(1.1);
    }

    > svg {
      align-self: center;
      height: 16px;
      width: 16px;

      @media ${A.a.tablet} {
        height: 20px;
        width: 20px;
      }
    }
  }
`;const BlockedStep=({stringGetter:e})=>{let t,r;return Object(p.f)(g.a)?(t=x.a.UNAVAILABLE,r=l.a.createElement("span",null,e({key:x.a.PERPETUALS_UNAVAILABLE_IN_US}),l.a.createElement("a",{className:ge.termsLink,href:"https://dydx.exchange/terms",target:"_blank",rel:"noopener noreferrer"},l.a.createElement(L.W,null)))):(t=x.a.WRONG_NETWORK,r=e({key:x.a.WRONG_NETWORK_EXPLANATION_PRODUCTION})),l.a.createElement(l.a.Fragment,null,l.a.createElement(N.a,{noBorder:!0,title:e({key:t})}),l.a.createElement("div",{className:ge.stepContent},l.a.createElement("div",{className:ge.bodyText},r)))};BlockedStep.propTypes={stringGetter:s.a.func.isRequired};var Pe=Object(h.c)(BlockedStep),je="_1fKWbK5zmCi_drBMldDM8S",Ge="xM3Q8JDALi98xbLqS6snN",we="JonCDAcCXI_UAtbQo4IT0",Me="_2pfwu7YuTqELetT8qKQmwK",We="_37v1X7VIhv_TWT_aC3oPFL";const Ke=["NOT_A_RESIDENT","NO_FUTURE_ACCESS","NO_VPN_USE","PERMITTED_TO_USE","UNDERSTAND_RISKS"],AcknowledgeTermsStep=({closeModal:e,goToNextStep:t,stringGetter:r})=>l.a.createElement("div",{className:je},l.a.createElement(N.a,{noBorder:!0,title:r({key:x.a.ACKNOWLEDGE_TERMS})}),l.a.createElement("div",{className:ge.stepContent},l.a.createElement("div",{className:ge.bodyText},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:r({key:x.a.YOU_AGREE_TO_TERMS,params:{TERMS_LINK:F.a.renderToString(l.a.createElement("a",{className:ge.link,href:"https://dydx.exchange/terms",target:"_blank",rel:"noopener noreferrer"},r({key:x.a.TERMS_OF_USE}))),PRIVACY_POLICY_LINK:F.a.renderToString(l.a.createElement("a",{className:ge.link,href:"https://dydx.exchange/privacy",target:"_blank",rel:"noopener noreferrer"},r({key:x.a.PRIVACY_POLICY}))),GASLESS_DEPOSIT_RULES:F.a.renderToString(l.a.createElement("a",{className:ge.link,href:"https://dydx.exchange/gasless-deposit-rules",target:"_blank",rel:"noopener noreferrer"},r({key:x.a.GASLESS_ONBOARDING_RULES})))}})}})),l.a.createElement("div",{className:J()(ge.bodyText,Ge)},r({key:x.a.APPEARS_OUTSIDE_ACCESS})),l.a.createElement("div",{className:we},j()(Ke,e=>l.a.createElement("div",{key:e,className:Me},l.a.createElement("div",null,"\u2022"),r({key:x.a[e]})))),l.a.createElement("div",{className:We},l.a.createElement(k.a,{onClick:e,size:k.d.Large},r({key:x.a.CANCEL})),l.a.createElement(k.a,{color:k.b.Purple,onClick:t,size:k.d.Large},r({key:x.a.I_AGREE})))));AcknowledgeTermsStep.propTypes={closeModal:s.a.func.isRequired,goToNextStep:s.a.func.isRequired,stringGetter:s.a.func.isRequired};var Be=Object(h.c)(AcknowledgeTermsStep),Ue=r(76),Ye=r(8);const Fe=[{icon:l.a.createElement(L.f,null),titleKey:x.a.VALUE_PROP_LIQUID,subtitleKey:x.a.VALUE_PROP_LIQUID_DESC},{icon:l.a.createElement(L.H,null),titleKey:x.a.VALUE_PROP_ADVANCED,subtitleKey:x.a.VALUE_PROP_ADVANCED_DESC},{icon:l.a.createElement(L.J,{height:17,width:17}),titleKey:x.a.REWARDS,subtitleKey:x.a.VALUE_PROP_REWARDS_DESC}],getReferrerImage=e=>"test"===e?"/apple-icon-57x57.png":T.e.includes(e)?`/affiliates/${e}.jpg`:"/affiliates/dydx.jpg",getTitle=({referrer:e,hasNoAffiliateLinkInfo:t,stringGetter:r})=>e&&T.e.includes(e)?e:!e||T.c.includes(e)||t?r({key:x.a.WELCOME_DYDX}):r({key:x.a.ANONYMOUS}),getSubtitle=({referrer:e,hasNoAffiliateLinkInfo:t,stringGetter:r})=>!e||T.c.includes(e)||t?r({key:x.a.START_TRADING_BLURB}):r({key:x.a.INVITED_YOU}),He={};He.BaseLink=I.c.a`
  color: var(--color-text-base);
  cursor: pointer;

  &:visited {
    color: var(--color-text-base);
  }

  &:hover {
    color: var(--color-purple);
    text-decoration: underline;
  }
`,He.RewardDisclaimerSpan=I.c.span`
  display: block;
  color: var(--color-text-dark);
  ${A.e.size14}
  text-align: center;
  margin-top: 16px;

  @media ${A.a.tablet} {
    ${A.e.size16}
  }
`,He.ReferralHeader=I.c.div`
  display: flex;
  flex-direction: row;
  padding: 24px 28px 0;
  margin-bottom: -10px;
  align-items: center;
`,He.ReferralImage=I.c.div`
  margin-right: 10px;

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-layer-lighter);

    > svg {
      height: 32px;
      width: 32px;
    }

    @media ${A.a.tablet} {
      > svg {
        height: 48px;
        width: 48px;
      }
    }
  }

  > img,
  > div {
    height: 72px;
    width: 72px;
    border-radius: 50%;
  }

  @media ${A.a.tablet} {
    > img,
    > div {
      height: 84px;
      width: 84px;
    }
  }
`,He.ReferralSpeechBubble=I.c.div`
  display: flex;
  flex: 1;
  align-items: center;

  &:before {
    content: '';
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-right: 10px solid var(--color-layer-lightest);
  }
`,He.ReferralText=I.c.span`
  ${A.e.size14};
  background-color: var(--color-layer-lightest);
  border-radius: 12px;
  display: flex;
  padding: 12px;
  flex: 1;
  box-sizing: border-box;
  line-height: 16px;

  b {
    color: var(--color-text-light);
  }

  @media ${A.a.tablet} {
    ${A.e.size15};
    line-height: 18px;
  }
`,He.IconContainer=I.c.div`
  background-color: var(--color-layer-lightest);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  margin-top: 2px;
`,He.ValueProps=I.c.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
`,He.ValuePropRow=I.c.div`
  display: grid;
  grid-template-columns: 44px 1fr;
  gap: 16px;

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  &:hover {
    filter: brightness(1.1);
  }
`,He.ValuePropText=I.c.div`
  ${A.e.size16}
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 6px;
  color: var(--color-text-light);

  @media ${A.a.tablet} {
    ${A.e.size18}
  }
`,He.ValuePropSubText=I.c.span`
  ${A.e.size14}
  color: var(--color-text-base);

  @media ${A.a.tablet} {
    ${A.e.size16}
  }
`;var $e=Object(h.c)(({affiliateLinkInfo:e,goToNextStep:t,referrer:r,stringGetter:a})=>{const n=e||{},i=n.feeReduction,o=n.username,c=!i&&!o;return l.a.createElement(l.a.Fragment,null,r&&0!==i&&l.a.createElement(He.ReferralHeader,null,l.a.createElement(He.ReferralImage,null,c?l.a.createElement("div",null,l.a.createElement(L.sb,null)):l.a.createElement("img",{alt:"",src:getReferrerImage(r)})),l.a.createElement(He.ReferralSpeechBubble,null,l.a.createElement(He.ReferralText,null,c?l.a.createElement("p",null,a({key:x.a.COULD_NOT_FIND_AFFILIATE})):l.a.createElement("p",{dangerouslySetInnerHTML:{__html:a({key:T.c.includes(r)?x.a.DONT_MISS:x.a.JOIN_ME,params:{DISCOUNT:F.a.renderToString(l.a.createElement("b",null,a({key:x.a.REFERRAL_DISCOUNT,params:{DISCOUNT:Object(Ye.b)(i).abs().times(100).toFixed(Ue.d)+"%"}})))}})}})))),l.a.createElement(N.a,{noBorder:!0,title:o||getTitle({referrer:r,hasNoAffiliateLinkInfo:c,stringGetter:a}),subtitle:getSubtitle({referrer:r,hasNoAffiliateLinkInfo:c,stringGetter:a})}),l.a.createElement(v.e,null,l.a.createElement(He.ValueProps,null,Fe.map(e=>l.a.createElement(He.ValuePropRow,{key:e.titleKey},l.a.createElement(He.IconContainer,null,e.icon),l.a.createElement(He.ValuePropText,null,a({key:e.titleKey}),l.a.createElement(He.ValuePropSubText,null,a({key:e.subtitleKey})))))),l.a.createElement(v.a,null,l.a.createElement(k.a,{color:k.b.Purple,onClick:t},a({key:x.a.GET_STARTED}))),l.a.createElement(He.RewardDisclaimerSpan,{dangerouslySetInnerHTML:{__html:"*"+a({key:x.a.REWARDS_MADE_AVAILABLE,params:{FOUNDATION_LINK:F.a.renderToString(l.a.createElement(He.BaseLink,{href:"https://dydx.foundation",target:"_blank",rel:"noopener noreferrer"},"dYdX Foundation"))}})}})))});function OnboardingModal_slicedToArray(e,t){return function OnboardingModal_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function OnboardingModal_iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(c){l=!0,n=c}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}(e,t)||function OnboardingModal_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return OnboardingModal_arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return OnboardingModal_arrayLikeToArray(e,t)}(e,t)||function OnboardingModal_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function OnboardingModal_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const ze=Object(o.lazy)(()=>r.e(107).then(r.bind(null,1995))),Ve=Object(o.lazy)(()=>Promise.all([r.e(10),r.e(76)]).then(r.bind(null,1910))),qe=Object(o.lazy)(()=>r.e(77).then(r.bind(null,1996))),Xe=Object(o.lazy)(()=>Promise.all([r.e(0),r.e(22),r.e(97)]).then(r.bind(null,2159)));let Ze=!1;const Qe={REFERRAL:"REFERRAL",MANAGE_NOTIFICATIONS:"MANAGE_NOTIFICATIONS",VALUE_PROPS:"VALUE_PROPS",CHOOSE_WALLET:"CHOOSE_WALLET",SIGN_IN_WITH_EMAIL:"SIGN_IN_WITH_EMAIL",CHOOSE_DEPOSIT_OPTION:"CHOOSE_DEPOSIT_OPTION",LEDGER_DERIVATION:"LEDGER_DERIVATION",LINK_WALLET:"LINK_WALLET",CONNECTING_WALLET:"CONNECTING_WALLET",BLOCKED:"BLOCKED",ACKNOWLEDGE_TERMS:"ACKNOWLEDGE_TERMS",DEPOSIT:"DEPOSIT",FIAT:"FIAT",TRANSFER_AND_DEPOSIT:"TRANSFER_AND_DEPOSIT"};let Je,et,tt;const OnboardingModal=({affiliateLinkInfo:e,closeModal:t,hasReferralLink:r,isMagicOAuthRedirect:a,location:n,onValidKeyPairsCallback:c,preselectLedger:s})=>{const I=Object(p.f)(f.c),h=Object(p.f)(f.d),L=Object(p.f)(g.a),A=Object(p.f)(_.d),k=Object(p.f)(y.f),N=Object(p.f)(y.h),x=Object(p.f)(_.j),v=Object(p.f)(y.o),R=Object(p.f)(y.p),C=Object(p.f)(y.l),P=Object(d.f)(n.pathname,{path:m.l.REFERRAL}),j=i()(P,"params.referrer"),G=Object(S.b)({key:S.a.SEEN_VALUE_PROPS}),w=Object(d.f)(n.pathname,{path:m.l.MANAGE_NOTIFICATIONS});let M,W=Qe.CHOOSE_WALLET;r?(W=Qe.REFERRAL,M=!(null!==e&&void 0!==e&&e.feeReduction)&&!(null!==e&&void 0!==e&&e.username)&&!T.c.includes(j)):w?W=Qe.MANAGE_NOTIFICATIONS:G||R?s?W=Qe.LEDGER_DERIVATION:k?W=Qe.BLOCKED:N&&R?W=L&&!x?Qe.BLOCKED:Qe.LINK_WALLET:a&&(W=Qe.CONNECTING_WALLET):W=Qe.VALUE_PROPS;const K=OnboardingModal_slicedToArray(Object(o.useState)(W),2),B=K[0],U=K[1];let Y;switch(Object(o.useEffect)(()=>{if(B!==et){const e=Date.now(),t=tt&&(e-tt)/1e3;O.a.trackEvent(b.a.OnboardingStepChanged,{previousStep:et,currentStep:B,secondsOnPreviousStep:t,userAlreadyExists:Boolean(x),isUserRegistered:Boolean(A)}),et=B,tt=e}},[B]),Object(o.useEffect)(()=>{Je?Je!==v&&(Je=v,r?U(Qe.REFERRAL):w?U(Qe.MANAGE_NOTIFICATIONS):v&&U(R?L&&!x?Qe.BLOCKED:Qe.LINK_WALLET:Qe.CHOOSE_WALLET)):Je=v},[v]),Object(o.useEffect)(()=>{!k||h&&I?r?U(Qe.REFERRAL):w?U(Qe.MANAGE_NOTIFICATIONS):N&&U(L&&!x?Qe.BLOCKED:Qe.LINK_WALLET):U(Qe.BLOCKED)},[k]),B){case Qe.REFERRAL:Y=l.a.createElement($e,{affiliateLinkInfo:e,goToNextStep:()=>{Object(S.d)({key:S.a.SEEN_VALUE_PROPS,value:!0}),U(N?Qe.CONNECTING_WALLET:Qe.CHOOSE_WALLET)},referrer:j});break;case Qe.MANAGE_NOTIFICATIONS:Y=l.a.createElement(D,{goToNextStep:()=>U(N?Qe.CONNECTING_WALLET:Qe.CHOOSE_WALLET)});break;case Qe.VALUE_PROPS:Y=l.a.createElement($e,{goToNextStep:()=>{Object(S.d)({key:S.a.SEEN_VALUE_PROPS,value:!0}),U(N?Qe.CONNECTING_WALLET:Qe.CHOOSE_WALLET)}});break;case Qe.CHOOSE_WALLET:Y=l.a.createElement(steps_ChooseWalletStep,{closeModal:t,goToLedgerDerivation:()=>U(Qe.LEDGER_DERIVATION),goToLoginWithEmail:()=>U(Qe.SIGN_IN_WITH_EMAIL),goToNextStep:()=>U(Qe.CONNECTING_WALLET)});break;case Qe.SIGN_IN_WITH_EMAIL:Y=l.a.createElement(steps_SignInWithEmailStep,{closeModal:t,goToNextStep:()=>U(Qe.CONNECTING_WALLET),goToPreviousStep:()=>U(Qe.CHOOSE_WALLET)});break;case Qe.CHOOSE_DEPOSIT_OPTION:Y=l.a.createElement(ze,{showSkipForNow:!0,closeModal:t,goToDepositWithFiat:()=>U(Qe.FIAT),goToSendFunds:()=>U(Qe.TRANSFER_AND_DEPOSIT)});break;case Qe.TRANSFER_AND_DEPOSIT:Y=l.a.createElement(Xe,{closeModal:t,goToPreviousStep:()=>U(Qe.CHOOSE_DEPOSIT_OPTION)});break;case Qe.LEDGER_DERIVATION:Y=l.a.createElement(fe,{closeModal:t,goToNextStep:()=>U(Qe.LINK_WALLET),goToPreviousStep:()=>U(Qe.CHOOSE_WALLET)});break;case Qe.LINK_WALLET:Y=l.a.createElement(Ne,{closeModal:t,goToNextStep:()=>U(C?Qe.CHOOSE_DEPOSIT_OPTION:Qe.DEPOSIT),onValidKeyPairsCallback:c,referrer:M?void 0:j});break;case Qe.CONNECTING_WALLET:Y=l.a.createElement(xe,{closeModal:t,goToNextStep:()=>{U(L&&!x?Qe.BLOCKED:x||Ze?Qe.LINK_WALLET:Qe.ACKNOWLEDGE_TERMS)},goToPreviousStep:()=>U(Qe.CHOOSE_WALLET)});break;case Qe.BLOCKED:Y=l.a.createElement(Pe,{closeModal:t});break;case Qe.ACKNOWLEDGE_TERMS:Y=l.a.createElement(Be,{closeModal:t,goToNextStep:()=>{U(Qe.LINK_WALLET),Ze=!0}});break;case Qe.DEPOSIT:Y=l.a.createElement(Ve,{closeModal:t});break;case Qe.FIAT:Y=l.a.createElement(qe,{goToPreviousStep:()=>U(Qe.CHOOSE_DEPOSIT_OPTION)});break;default:Y=l.a.createElement(steps_ChooseWalletStep,{closeModal:t})}return[Qe.CHOOSE_DEPOSIT_OPTION,Qe.TRANSFER_AND_DEPOSIT,Qe.FIAT,Qe.DEPOSIT].includes(Y)?l.a.createElement(o.Suspense,{fallback:l.a.createElement(E.a,{id:"onboarding-modal-step",className:ge.stepLoading})},Y):l.a.createElement(u.h,{size:["CHOOSE_WALLET","ACKNOWLEDGE_TERMS","SIGN_IN_WITH_EMAIL"].includes(B)?u.c.LARGE:u.c.MEDIUM},l.a.createElement(o.Suspense,{fallback:l.a.createElement(E.a,{id:"onboarding-modal-step",className:ge.stepLoading})},Y))};OnboardingModal.propTypes={affiliateLinkInfo:s.a.object,closeModal:s.a.func.isRequired,hasReferralLink:s.a.bool,isMagicOAuthRedirect:s.a.bool,location:s.a.object.isRequired,onValidKeyPairsCallback:s.a.func,preselectLedger:s.a.bool};var rt=Object(d.i)(OnboardingModal)}}]);