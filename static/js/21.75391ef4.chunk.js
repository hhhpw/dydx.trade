(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{1724:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(9),l=a(68),o=a(75),s=a(1),c=a(77);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var a,r,i=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}t.a=e=>{let t=e.href,a=e.shouldTrackClick,r=void 0===a||a,n=_objectWithoutProperties(e,["href","shouldTrackClick"]);const E=Object(l.u)();return i.a.createElement(i.a.Fragment,null," ",i.a.createElement(d.LearnMoreLink,_extends({rel:"noopener noreferrer",href:t,target:"_blank"},n,{onClick:()=>{r&&c.a.trackEvent(o.a.ExternalLinkClicked,{linkClicked:t,isLearnMore:!0})}}),E({key:s.a.LEARN_MORE})))};const d={};d.LearnMoreLink=n.c.a`
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
`},1725:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(9),l=a(32),o=a(17),s=a(1),c={"legacy-signing":({stringGetter:e})=>({title:e({key:s.f.LEGACY_SIGNING_TITLE}),body:e({key:s.f.LEGACY_SIGNING_BODY})}),"remember-me":({stringGetter:e})=>({title:e({key:s.f.REMEMBER_ME_TITLE}),body:e({key:s.f.REMEMBER_ME_BODY})})},d={"holding-hedgies":({stringGetter:e,stringParams:t})=>({title:e({key:s.f.HOLDING_HEDGIES_TITLE}),body:e({key:s.f.HOLDING_HEDGIES_BODY,params:t}),bodyKey:s.f.HOLDING_HEDGIES_BODY})},E={"account-leverage":({stringGetter:e})=>({title:e({key:s.f.ACCOUNT_LEVERAGE_TITLE}),body:e({key:s.f.ACCOUNT_LEVERAGE_BODY})}),"bracket-sl":({stringGetter:e})=>({title:e({key:s.f.BRACKET_ORDER_SL_TITLE}),body:e({key:s.f.BRACKET_ORDER_SL_BODY})}),"bracket-tp":({stringGetter:e})=>({title:e({key:s.f.BRACKET_ORDER_TP_TITLE}),body:e({key:s.f.BRACKET_ORDER_TP_BODY})}),"buying-power":({stringGetter:e,stringParams:t})=>({title:e({key:s.f.BUYING_POWER_TITLE}),body:e({key:s.f.BUYING_POWER_BODY,params:t})}),"default-execution":({stringGetter:e})=>({title:e({key:s.f.DEFAULT_EXECUTION_TITLE}),body:e({key:s.f.DEFAULT_EXECUTION_BODY})}),equity:({stringGetter:e})=>({title:e({key:s.f.EQUITY_TITLE}),body:e({key:s.f.EQUITY_BODY})}),"expected-price":({stringGetter:e})=>({title:e({key:s.f.EXPECTED_PRICE_TITLE}),body:e({key:s.f.EXPECTED_PRICE_BODY})}),fee:({stringGetter:e})=>({title:e({key:s.f.FEE_TITLE}),body:e({key:s.f.FEE_BODY})}),"fill-or-kill":({stringGetter:e})=>({title:e({key:s.f.FILL_OR_KILL_TITLE}),body:e({key:s.f.FILL_OR_KILL_BODY})}),"free-collateral":({stringGetter:e})=>({title:e({key:s.f.FREE_COLLATERAL_TITLE}),body:e({key:s.f.FREE_COLLATERAL_BODY})}),"good-til":({stringGetter:e})=>({title:e({key:s.f.GOOD_TIL_TITLE}),body:e({key:s.f.GOOD_TIL_BODY})}),"immediate-or-cancel":({stringGetter:e})=>({title:e({key:s.f.IMMEDIATE_OR_CANCEL_TITLE}),body:e({key:s.f.IMMEDIATE_OR_CANCEL_BODY})}),"index-price":({stringGetter:e})=>({title:e({key:s.f.INDEX_PRICE_TITLE}),body:e({key:s.f.INDEX_PRICE_BODY})}),"initial-margin-fraction":({stringGetter:e})=>({title:e({key:s.f.INITIAL_MARGIN_FRACTION_TITLE}),body:e({key:s.f.INITIAL_MARGIN_FRACTION_BODY}),learnMoreLink:"https://help.dydx.exchange/articles/5232637-maximum-position-sizes"}),"initial-stop":({stringGetter:e})=>({title:e({key:s.f.INITIAL_STOP_TITLE}),body:e({key:s.f.INITIAL_STOP_BODY})}),leverage:({stringGetter:e})=>({title:e({key:s.f.LEVERAGE_TITLE}),body:e({key:s.f.LEVERAGE_BODY})}),"limit-price":({stringGetter:e})=>({title:e({key:s.f.LIMIT_PRICE_TITLE}),body:e({key:s.f.LIMIT_PRICE_BODY})}),"limit-price-slippage":({stringGetter:e})=>({title:e({key:s.f.LIMIT_PRICE_SLIPPAGE_TITLE}),body:e({key:s.f.LIMIT_PRICE_SLIPPAGE_BODY})}),"liquidation-price":({stringGetter:e,stringParams:t})=>({title:e({key:s.f.LIQUIDATION_PRICE_TITLE}),body:e({key:s.f.LIQUIDATION_PRICE_BODY,params:t})}),"liquidation-price-general":({stringGetter:e})=>({title:e({key:s.f.LIQUIDATION_PRICE_GENERAL_TITLE}),body:e({key:s.f.LIQUIDATION_PRICE_GENERAL_BODY})}),liquidity:({stringGetter:e})=>({title:e({key:s.f.LIQUIDITY_TITLE}),body:e({key:s.f.LIQUIDITY_BODY})}),"maintenance-margin-fraction":({stringGetter:e})=>({title:e({key:s.f.MAINTENANCE_MARGIN_FRACTION_TITLE}),body:e({key:s.f.MAINTENANCE_MARGIN_FRACTION_BODY})}),"max-withdraw":({stringGetter:e})=>({title:e({key:s.f.MAX_WITHDRAW_TITLE}),body:e({key:s.f.MAX_WITHDRAW_BODY})}),"maker-fee":({stringGetter:e})=>({title:e({key:s.f.MAKER_FEE_TITLE}),body:e({key:s.f.MAKER_FEE_BODY})}),"margin-usage":({stringGetter:e})=>({title:e({key:s.f.MARGIN_USAGE_TITLE}),body:e({key:s.f.MARGIN_USAGE_BODY})}),"maximum-leverage":({stringGetter:e})=>({title:e({key:s.f.MAXIMUM_LEVERAGE_TITLE}),body:e({key:s.f.MAXIMUM_LEVERAGE_BODY})}),"net-funding":({stringGetter:e})=>({title:e({key:s.f.NET_FUNDING_TITLE}),body:e({key:s.f.NET_FUNDING_BODY})}),"open-interest":({stringGetter:e})=>({title:e({key:s.f.OPEN_INTEREST_TITLE}),body:e({key:s.f.OPEN_INTEREST_BODY})}),"oracle-price":({stringGetter:e})=>({title:e({key:s.f.ORACLE_PRICE_TITLE}),body:e({key:s.f.ORACLE_PRICE_BODY})}),"order-amount":({stringGetter:e,stringParams:t})=>({title:e({key:s.f.ORDER_AMOUNT_TITLE}),body:e({key:s.f.ORDER_AMOUNT_BODY,params:t})}),"post-only":({stringGetter:e})=>({title:e({key:s.f.POST_ONLY_TITLE}),body:e({key:s.f.POST_ONLY_BODY})}),"price-impact":({stringGetter:e})=>({title:e({key:s.f.PRICE_IMPACT_TITLE}),body:e({key:s.f.PRICE_IMPACT_BODY})}),"realized-pnl":({stringGetter:e})=>({title:e({key:s.f.REALIZED_PNL_TITLE}),body:e({key:s.f.REALIZED_PNL_BODY})}),"reduce-only":({stringGetter:e})=>({title:e({key:s.f.REDUCE_ONLY_TITLE}),body:e({key:s.f.REDUCE_ONLY_BODY}),learnMoreLink:"https://help.dydx.exchange/articles/6345793-reduce-only-orders"}),"step-size":({stringGetter:e})=>({title:e({key:s.f.STEP_SIZE_TITLE}),body:e({key:s.f.STEP_SIZE_BODY})}),"taker-fee":({stringGetter:e})=>({title:e({key:s.f.TAKER_FEE_TITLE}),body:e({key:s.f.TAKER_FEE_BODY})}),"tick-size":({stringGetter:e})=>({title:e({key:s.f.TICK_SIZE_TITLE}),body:e({key:s.f.TICK_SIZE_BODY})}),"time-in-force":({stringGetter:e})=>({title:e({key:s.f.TIME_IN_FORCE_TITLE}),body:e({key:s.f.TIME_IN_FORCE_BODY})}),"trailing-percent":({stringGetter:e})=>({title:e({key:s.f.TRAILING_PERCENT_TITLE}),body:e({key:s.f.TRAILING_PERCENT_BODY})}),"trigger-price":({stringGetter:e})=>({title:e({key:s.f.TRIGGER_PRICE_TITLE}),body:e({key:s.f.TRIGGER_PRICE_BODY})}),"unrealized-pnl":({stringGetter:e})=>({title:e({key:s.f.UNREALIZED_PNL_TITLE}),body:e({key:s.f.UNREALIZED_PNL_BODY})})},p={"verify-email":({stringGetter:e})=>({title:e({key:s.f.VERIFY_EMAIL_TITLE}),body:e({key:s.f.VERIFY_EMAIL_BODY})})},g={"fast-withdraw-fee":({stringGetter:e})=>({title:e({key:s.f.FAST_WITHDRAW_FEE_TITLE}),body:e({key:s.f.FAST_WITHDRAW_FEE_BODY})}),"withdraw-types":({stringGetter:e})=>({title:e({key:s.f.WITHDRAW_TYPES_TITLE}),body:e({key:s.f.WITHDRAW_TYPES_BODY})})};function ownKeys(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(a),!0).forEach((function(t){_defineProperty(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):ownKeys(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function _defineProperty(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var m=_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({},{allowance_and_deposit_network_fee:({stringGetter:e})=>({title:e({key:s.f.ALLOWANCE_AND_DEPOSIT_NETWORK_FEE_TITLE}),body:e({key:s.f.ALLOWANCE_AND_DEPOSIT_NETWORK_FEE_BODY}),learnMoreLink:"https://help.dydx.exchange/en/articles/4800191-are-there-fees-to-using-dydx"}),deposit_network_fee:({stringGetter:e})=>({title:e({key:s.f.DEPOSIT_NETWORK_FEE_TITLE}),body:e({key:s.f.DEPOSIT_NETWORK_FEE_BODY}),learnMoreLink:"https://help.dydx.exchange/en/articles/4800191-are-there-fees-to-using-dydx"}),swap:({stringGetter:e})=>({title:e({key:s.f.SWAP_TITLE}),body:e({key:s.f.SWAP_BODY})}),gasless_deposits:({stringGetter:e,stringParams:t})=>({title:e({key:s.f.GASLESS_DEPOSITS_TITLE}),body:e({key:s.f.GASLESS_DEPOSITS_BODY,params:t}),learnMoreLink:"https://dydx.exchange/gasless-deposit-rules"}),gasless_deposits_available:({stringGetter:e,stringParams:t})=>({title:e({key:s.f.AVAILABLE_GASLESS_DEPOSITS_TITLE}),body:e({key:s.f.AVAILABLE_GASLESS_DEPOSITS_BODY,params:t})}),gasless_deposits_disabled:({stringGetter:e})=>({title:e({key:s.f.DISABLED_GASLESS_DEPOSITS_TITLE}),body:e({key:s.f.DISABLED_GASLESS_DEPOSITS_BODY})})}),c),d),E),p),g),y=a(1724);const _={},f=n.d`
  from {
    opacity: 0;
    pointer-events: none;
  }

  to {
    opacity: 1;
    pointer-events: auto;
  }
`;_.Body=n.c.div`
  ${o.f.regular}
`,_.Title=n.c.div`
  ${o.f.bold}
  margin-bottom: 4px;
`,_.TooltipContent=n.c.div`
  ${o.e.size13}
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

  @media ${o.a.tablet} {
    ${o.e.size15}
    width: 292px;
  }
`,_.MouseSpace=n.c.div`
  opacity: 0;
  display: none;
  background-color: transparent;
  position: absolute;
  z-index: 100;
  cursor: default;
  text-align: left;
  animation: ${f} 0.2s ease-in 0.2s forwards;

  @media ${o.a.tablet} {
    animation-delay: 0s;
  }

  ${({hasLongDelay:e})=>e&&n.b`
      @media ${o.a.notTablet} {
        animation-delay: 0.4s;
      }
    `}
`,_.WithTooltip=n.c.div`
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
`;t.a=Object(l.c)(({bottom:e,children:t,className:a,condition:r=!0,cta:n=null,hasReact:l,left:o,longDelay:s,stringGetter:c,stringParams:d,right:E,tooltip:p,top:g})=>{const f={left:o,top:g,right:E,bottom:e},T=m[p];if(!T)return t;const u=T({stringGetter:c,stringParams:d}),b=u.title,I=u.titleKey,h=void 0===I?null:I,k=u.body,L=u.bodyKey,O=void 0===L?null:L,v=u.learnMoreLink;if(!r)return t;let N,R;return l&&(O||h)&&(h&&(N=i.a.createElement("span",{dangerouslySetInnerHTML:{__html:c({key:h,params:d})}})),O&&(R=i.a.createElement("span",{dangerouslySetInnerHTML:{__html:c({key:O,params:d})}}))),i.a.createElement(_.WithTooltip,{className:a},t,i.a.createElement(_.MouseSpace,{hasLongDelay:s,style:f},i.a.createElement(_.TooltipContent,null,i.a.createElement(_.Title,null,N||b),i.a.createElement(_.Body,null,i.a.createElement("span",null,R||k),v&&i.a.createElement(y.a,{href:v}),n))))})},1731:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var r=a(0),i=a.n(r),n=a(2),l=a.n(n),o=a(9),s=a(17),c=a(19);const SectionHeader=({cardPadding:e,className:t,contentRight:a,isSidebarOpen:r,title:n,subtitle:l})=>i.a.createElement(d,{cardPadding:e,className:t,isSidebarOpen:r},i.a.createElement(E,null,i.a.createElement(p,null,n),l&&i.a.createElement(g,null,l)),a),d=o.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  max-width: calc(var(--page-content-max-width) + var(--sidebar-width));
  gap: 1em;

  @media ${s.a.tablet} {
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${({cardPadding:e,isSidebarOpen:t})=>t?`\n          @media (max-width: calc(${c.m}px + ${c.q}px)) {\n            padding-left: ${e?"36px":"24px"};\n            padding-right: ${e?"36px":"24px"};\n\n            @media ${s.a.tablet} {\n              padding-left: ${e?"32px":"20px"};\n              padding-right: ${e?"32px":"20px"};\n            }\n          }\n        `:`\n          @media (max-width: calc(${c.m}px + ${c.p}px)) {\n            padding-left: 24px;\n            padding-right: 24px;\n\n            @media ${s.a.tablet} {\n              padding-left: 20px;\n              padding-right: 20px;\n            }\n          }\n        `}
`,E=o.c.div`
  @media ${s.a.notTablet} {
    padding-right: 20px;
  }
`,p=o.c.h2`
  ${s.e.size20};
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-light);
  white-space: nowrap;
  overflow: auto;
  ${s.g}

  @media ${s.a.tablet} {
    ${s.e.size24};
  }
`,g=o.c.h3`
  ${s.e.size14}
  color: var(--color-text-dark);
  margin-top: 4px;

  @media ${s.a.tablet} {
    ${s.e.size16}
  }
`;SectionHeader.propTypes={cardPadding:l.a.bool,className:l.a.string,contentRight:l.a.node,isSidebarOpen:l.a.bool,title:l.a.node.isRequired,subtitle:l.a.node};var m=SectionHeader},1764:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var r=a(0),i=a.n(r),n=a(2),l=a.n(n),o=a(9);const LoadingBar=({height:e,width:t,fullWidth:a})=>i.a.createElement(c,{style:{height:e+"px",width:a?"100%":t+"px"}}),s=o.d`
   from {
        left: -150%;
    }
    to   {
        left: 150%;
    }
`,c=o.c.div`
  position: relative;
  background-color: var(--color-layer-lighter);
  border-radius: 0.5rem;
  overflow: hidden;
  margin: 0 -0.125rem;

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: -100%;
    top: 0;
    height: 100%;
    width: 150%;
    animation: 1.5s ${s} ease-in-out infinite;
    opacity: 0.5;

    background: linear-gradient(
      270deg,
      var(--color-layer-lighter) 0%,
      var(--color-loading-bar-shine) 50%,
      var(--color-layer-lighter) 100%
    );
  }
`;LoadingBar.propTypes={height:l.a.number,width:l.a.number,fullWidth:l.a.number};var d=LoadingBar},1788:function(e,t,a){"use strict";a.d(t,"a",(function(){return _})),a.d(t,"b",(function(){return T})),a.d(t,"c",(function(){return F})),a.d(t,"d",(function(){return ge})),a.d(t,"e",(function(){return ke}));var r=a(0),i=a.n(r),n=a(2),l=a.n(n),o=a(15),s="_1B4wL3JOihwk9dGA5O5NuW",c="_3hUgKpaONcfLYgEkfqRLxi",d="_263QR8K8-lcBtNoItTaff_",E="AHBL-Hc_poE6CIFmY04rs",p="_3YJ7qDm9ViJclYiBGZvRH",g="_2x57GqqofafjvmCa8D6NAU",m="_1jLm7xj6YleU_LcgqQ9RVm",y="_2WDa5ftgP3WAABIKeEQqT8";const BasicCard=({body:e,cta:t,href:a,onClick:r,onClickClose:n,onClickSecondary:l,secondaryLink:_,title:f})=>{let T;t&&_&&l?T=i.a.createElement("div",{className:m},i.a.createElement("div",{className:d},t),i.a.createElement("div",{role:"button",tabIndex:0,onClick:e=>{e.stopPropagation(),l()},className:y},_)):t&&(T=i.a.createElement("div",{className:d},t));const u=i.a.createElement(i.a.Fragment,null,i.a.createElement("img",{src:"/promotion-card-bg.png",alt:""}),i.a.createElement("div",{className:E},i.a.createElement("div",null,i.a.createElement("div",{className:p},f),e&&i.a.createElement("div",{className:g},e)),i.a.createElement("div",{role:"button",tabIndex:0,className:c,onClick:e=>{e.stopPropagation(),null===n||void 0===n||n(e)}},i.a.createElement(o.q,null)),T));return a?i.a.createElement("a",{className:s,href:a,rel:"noopener noreferrer",target:"_blank"},u):i.a.createElement("div",{role:"button",tabIndex:0,className:s,onClick:e=>{null===r||void 0===r||r(e)}},u)};BasicCard.propTypes={body:l.a.oneOfType([l.a.string,l.a.node]),cta:l.a.oneOfType([l.a.string,l.a.node]),href:l.a.string,onClick:l.a.func,onClickClose:l.a.func.isRequired,onClickSecondary:l.a.func,secondaryLink:l.a.oneOfType([l.a.string,l.a.node]),title:l.a.oneOfType([l.a.string,l.a.node]).isRequired};var _=BasicCard,f="_2FQu15B79JIdiVb6IND03I";const CardContainer=({children:e})=>i.a.createElement("div",{className:f},e);CardContainer.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired};var T=CardContainer,u=a(10),b=a(25),I=a(91),h=a(16),k=a.n(h),L=a(32),O=a(282),v=a(601),N=a(62),R=a(69),D=a(76),x=a(1),A=a(8),C=a(606),G="_1Axo_N5kKxLRAual1KpMfF",S="_10vGk_58-h8lDvuP9s2Rza",B="_1nBUxeVo2jX78ZE-kcrFMR",P="_31ATDjMfglvGXbkkH3Cr2D",w="Kgo2BLgw8UW8wS27vWL4O",Y="_2j7PyFB2SVrdYVYrkSl8Sf",M="_1cVFzVkFt2aMV7Pl29CiTF",j="radtW4UZrwHV6-1H5JVj7",H="RX_00qsoYhBRJQ6U9bKJc";const NewMarketCard=({allMarketsData:e,history:t,market:a,onClickClose:r,stringGetter:n})=>{const l=R.c[a],d=l.baseSymbol,p=l.route;if(!e)return null;const g=e[a],m=g.indexPrice,y=g.priceChange24H,_=Object(C.a)({indexPrice:m,priceChange24H:y});return i.a.createElement("div",{role:"button",tabIndex:0,className:s,onClick:()=>t.push(p)},i.a.createElement("img",{src:"/promotion-card-bg.png",alt:""}),i.a.createElement("div",{className:E},i.a.createElement("div",{className:G},i.a.createElement(O.a,{huge:!0,symbol:d}),i.a.createElement("div",{className:S},n({key:x.a.MARKET_NOW_LIVE,params:{SYMBOL:d}})," ","\u2192",i.a.createElement("div",{className:B},a))),i.a.createElement("div",{className:P},i.a.createElement("div",{className:w},i.a.createElement(I.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:Object(A.b)(m).toFixed(D.h)})),_&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:k()(Y,{[M]:_.gt(0),[j]:_.lt(0)})},i.a.createElement(v.a,{marginRight:!0,positive:_.gt(0),negative:_.lt(0)}),i.a.createElement(I.a,{thousandSeparator:!0,displayType:"text",suffix:"%",value:_.abs().times(100).toFixed(D.d)}),i.a.createElement("div",{className:H},n({key:x.a.TODAY}))))),i.a.createElement("div",{role:"button",tabIndex:0,className:c,onClick:e=>{e.stopPropagation(),r&&r(e)}},i.a.createElement(o.q,null))))};NewMarketCard.propTypes={allMarketsData:l.a.object,history:l.a.object.isRequired,market:l.a.string.isRequired,onClickClose:l.a.func.isRequired,stringGetter:l.a.func.isRequired};var F=Object(L.c)(Object(b.i)(Object(u.c)(e=>({allMarketsData:Object(N.a)(e)}))(NewMarketCard))),U=a(9),W=a(17),$=a(36);const ProgressBarCard=({backgroundLight:e,ctaConfig:t,progress:a,progressBarLabels:{topLeft:r,topRight:n,bottomLeft:l,bottomRight:o},title:s})=>i.a.createElement(K,{backgroundLight:e},i.a.createElement(V,null,i.a.createElement(q,null,i.a.createElement(z,null,s))),t?i.a.createElement(X,null,i.a.createElement($.a,{color:$.b.Purple,onClick:t.onClick,size:$.d.Large},t.label)):i.a.createElement("div",null,(r||n)&&i.a.createElement(Z,null,r&&i.a.createElement(ee,null,r),n&&i.a.createElement(te,null,n)),i.a.createElement(ae,{backgroundLight:e},i.a.createElement(re,{progressComplete:a>=1,style:{width:100*a+"%"}})),(l||o)&&i.a.createElement(J,null,l&&i.a.createElement(ee,null,l),o&&i.a.createElement(te,null,o)))),K=U.c.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  min-height: 160px;
  width: 100%;
  padding: 24px;
  border-radius: 12px;

  background-color: ${({backgroundLight:e})=>e?"var(--color-layer-light)":"var(--color-layer-dark)"};

  @media ${W.a.tablet} {
    height: auto;
    min-height: auto;
  }
`,V=U.c.div`
  display: flex;
`,q=U.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,z=U.c.div`
  ${W.e.size20}
  color: var(--color-text-base);
`,X=U.c.div`
  margin-top: 16px;
`,Q=U.c.div`
  ${W.e.size15};
  display: flex;
  justify-content: space-between;
  letter-spacing: 0;
  margin-top: 16px;

  @media ${W.a.tablet} {
    ${W.e.size16}
  }
`,Z=Object(U.c)(Q)`
  margin-bottom: 0.75rem;
`,J=Object(U.c)(Q)`
  margin-top: 0.75rem;
`,ee=U.c.div`
  color: var(--color-text-light);
`,te=U.c.div`
  color: var(--color-text-dark);
  margin-left: auto;
`,ae=U.c.div`
  display: flex;
  width: 100%;
  height: 0.375rem;
  border-radius: 0.1875rem;

  background-color: ${({backgroundLight:e})=>e?"var(--color-layer-dark)":"var(--color-layer-light)"};
`,re=U.c.div`
  height: 100%;
  border-radius: 0.1875rem;

  background-color: ${({progressComplete:e})=>e?"var(--color-green)":"var(--color-purple)"};
`;ProgressBarCard.propTypes={backgroundLight:l.a.bool,ctaConfig:l.a.shape({label:l.a.string.isRequired,onClick:l.a.func.isRequired}),progress:l.a.number,progressBarLabels:l.a.shape({topLeft:l.a.node,topRight:l.a.node,bottomLeft:l.a.node,bottomRight:l.a.node}),title:l.a.string};var ie=a(1764),ne="_2BjktWWGiRZAhOUqUZAkRC",le="ztgkdSEhLGLxd1d9UN9Ma",oe="_3h5zRlHLV03kGfP2iNitB1",se="_2byAEzkzJNKvW1jro4nw-k",ce="wQFUPgQTVVHEUviOKrEVS",de="p5yLt3vvWe5hKqTc3AN0T",Ee="_1e48lgAEUAz2yiICFTDRfn",pe="EpMZt6WeBms4GR45nRrj1";const SingleStatCard=({className:e,title:t,tooltip:a,tooltipOnClick:r,value:n,label:l,isLoading:s})=>i.a.createElement("div",{className:k()(ne,e)},i.a.createElement("div",{className:le},i.a.createElement("div",{className:oe},i.a.createElement("div",{className:se},t),(a||r)&&(r?i.a.createElement("div",{className:ce,role:"button",tabIndex:0,onClick:r},i.a.createElement(o.sb,null)):i.a.createElement("div",{className:de},i.a.createElement(o.sb,null))))),i.a.createElement("div",{className:Ee},s?i.a.createElement(ie.a,{height:32,width:80}):n,l&&i.a.createElement("div",{className:pe},l)));SingleStatCard.propTypes={className:l.a.string,title:l.a.node.isRequired,tooltip:l.a.string,tooltipOnClick:l.a.func,value:l.a.node.isRequired,label:l.a.node.isRequired,isLoading:l.a.bool};var ge=SingleStatCard,me=a(225),ye=a.n(me),_e="_1Ibyyy2IhOyL2Wlksf9bcq",fe="X4_LCi_lrvXughStFMV1N",Te="_1kl0DwwBV98bkTdtovB64P",ue="_1Snwe1LCtr0-vw0mHOPD4e",be="_3vbKawxozR5_PUuVSToYdX",Ie="_3UVJHHwrtRXPMyKTC2kJ--";const ThreeSectionCard=({mainSectionConfig:e,detailSectionsConfig:t})=>i.a.createElement("div",{className:_e},i.a.createElement("div",{className:fe},i.a.createElement("div",{className:be},e.label),i.a.createElement("div",{className:Ie},e.isLoading?i.a.createElement(ie.a,{height:20,width:40}):e.value)),i.a.createElement("div",{className:ue},ye()(t,({label:e,value:t,isLoading:a})=>i.a.createElement("div",{key:e,className:Te},i.a.createElement("div",{className:be},e),i.a.createElement("div",{className:Ie},a?i.a.createElement(ie.a,{height:20,width:40}):t))))),he={label:l.a.string.isRequired,value:l.a.node.isRequired};ThreeSectionCard.propTypes={mainSectionConfig:l.a.shape(he),detailSectionsConfig:l.a.arrayOf(l.a.shape(he))};var ke=ThreeSectionCard;const Le={};Le.WithDetailFooter=U.c.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--color-layer-dark);
`,Le.Children=U.c.div`
  @media ${W.a.desktopSmall} {
    > div {
      width: 100%;
    }
  }
`,Le.DetailFooter=U.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 16px 18px;
  width: 100%;
`,Le.DisabledOverlay=U.c.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  color: var(--color-text-base);
  background: rgba(18, 18, 29, 0.8);
  user-select: none;
  cursor: not-allowed;
`},1968:function(e,t,a){"use strict";var r=a(951),i=a.n(r),n=a(0),l=a.n(n),o=a(2),s=a.n(o),c=a(16),d=a.n(c),E=a(9),p=a(99),g=a.n(p),m=a(15),y=a(17),_=a(68),f=a(282),T=a(1725),u=a(620),b=a(1),I=a(1969);const h={TIER:{stringKey:b.a.TIER,width:"16%",alignLeft:!0},BALANCE:{stringKey:b.a.BALANCE,width:"48%",alignLeft:!0},DISCOUNT:{stringKey:b.a.DISCOUNT,width:"36%"}},FeeDiscountTable=({compact:e,tokenBalance:t,numHedgies:a})=>{const r=Object(_.u)();let n,o,s,c;if(null!==t&&void 0!==t&&(n=i()(u.a,({tokenBalanceThreshold:e})=>t>=e)),a>0?(o=n||0===n?n!==u.a.length-1?n+1:n:0,s=l.a.createElement(k.HedgieHeldString,{dangerouslySetInnerHTML:{__html:r({key:b.a.HOLDING,params:{NUMBER:g.a.renderToString(l.a.createElement(k.NumHedgies,null,a))}})}})):s=l.a.createElement(k.HedgieHeldString,null,r({key:b.a.NONE_HELD})),e){var E;const e=Math.min(null!==(E=n)&&void 0!==E?E:0,u.a.length-4);n=n>=0?n-e:void 0,c=u.a.slice(e,e+4),o=o>=0?o-e:void 0}return l.a.createElement("div",{className:d()(I.a.feeTable,I.a.minContentHeight)},l.a.createElement("div",{className:I.a.label},l.a.createElement(k.TitleItemSpan,null,l.a.createElement(k.AssetIcon,{large:!0,symbol:"DYDX"}),r({key:b.a.FEE_DISCOUNT})),l.a.createElement(k.TitleItemSpan,null,l.a.createElement(k.HedgiesLogo,{header:!0,alt:"",src:"/hedgies-logo.png"}),s,l.a.createElement(k.WithTooltip,{hasReact:!0,tooltip:"holding-hedgies",right:0,bottom:20,stringParams:{NFT:g.a.renderToString(l.a.createElement(k.HedgiesNftLink,{href:"https://hedgies.wtf",target:"_blank"},r({key:b.a.HEDGIES_NFT})))}},l.a.createElement(k.TooltipIcon,null)))),l.a.createElement("div",{className:I.a.row},Object.entries(h).map(([e,{stringKey:t,width:a,alignLeft:i=!1}])=>l.a.createElement("div",{key:e,className:d()(I.a.cell,{[I.a.alignLeft]:i}),style:{flexBasis:a}},"BALANCE"===e&&l.a.createElement(f.a,{medium:!0,symbol:"DYDX"}),r({key:t})))),(e?c:u.a).map(({tier:e,tokenBalanceLabel:t,feeDiscount:a},r)=>l.a.createElement("div",{key:e,className:d()(I.a.row,I.a.body,{[I.a.highlighted]:n===r,[I.a.hedgieHighlight]:o===r})},l.a.createElement("div",{className:d()(I.a.cell,{[I.a.alignLeft]:h.TIER.alignLeft}),style:{flexBasis:h.TIER.width}},l.a.createElement("span",{className:d()({[I.a.colorYellow]:"VIP"===e})},e),o===r&&l.a.createElement(k.HedgiesLogo,{cell:!0,small:!0,alt:"",src:"/hedgies-logo.png"})),l.a.createElement("div",{className:d()(I.a.cell,{[I.a.alignLeft]:h.BALANCE.alignLeft}),style:{flexBasis:h.BALANCE.width}},l.a.createElement("span",{className:I.a.number},t)),l.a.createElement("div",{className:d()(I.a.cell,I.a.textBase),style:{flexBasis:h.DISCOUNT.width}},l.a.createElement("span",{className:I.a.number},a)))))},k={};k.HedgiesNftLink=E.c.a`
  color: var(--color-purple);

  &:hover {
    color: var(--color-purple);
    text-decoration: underline;
  }

  &:visited {
    color: var(--color-purple);
  }
`,k.WithTooltip=Object(E.c)(T.a)`
  && {
    align-items: center;
    display: flex;
  }
`,k.TooltipIcon=Object(E.c)(m.R)`
  margin-left: 4px;
  margin-top: 1px;

  &:hover {
    path {
      fill: var(--color-text-light);
    }
  }
`,k.AssetIcon=Object(E.c)(f.a)`
  margin-right: 8px;
`,k.HedgiesLogo=E.c.img`
  height: 30px;
  width: 30px;

  ${({small:e})=>e&&"\n    height: 24px;\n    width: 24px;\n  "}

  ${({header:e})=>e&&"\n    margin-right: 2px;\n  "}

  ${({cell:e})=>e&&"\n    margin-left: 4px;\n    margin-bottom: -2px;\n  "}
`,k.HedgieHeldString=E.c.span`
  color: var(--color-text-dark);
  ${y.e.size16}
`,k.NumHedgies=E.c.span`
  color: var(--color-text-light);
`,k.TitleItemSpan=E.c.span`
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
`,FeeDiscountTable.propTypes={compact:s.a.bool,numHedgies:s.a.number,tokenBalance:s.a.number},t.a=FeeDiscountTable},1969:function(e,t,a){"use strict";t.a={feeTable:"_14qsVaRospjr5DSLpyNwmF",label:"iAxEpYeGW5JmlYUXQTc94",row:"_3UYwP5PCupVJLOqneOW2VU",body:"_8iWDog5dgDv_A9CIHmzit",highlighted:"_2NZdN1f5MU97CW1AVKrwsA",cell:"_3gSVPmeN2euWgOOIr4Uy0l",hedgieHighlight:"_2MYjX7P0KjcEseuBvxOVii",alignLeft:"_2IGtoePVhLaP-nz3ON_LvL",mobileAlignLeft:"_3uJRyI38a_o6tGKj0np-Bj",hideMobile:"_2ov7iyGHiBji_CxyNB0-A4",textBase:"_1xgw0rmcmpMKj5BXiHmGov",number:"_THqOP0RMBFH3KpDysWgs",colorYellow:"_3oQ6JCpDEzNlx0pc93tMjW",colorTeal:"_1VAxxZ1IXBHn9bwgI1nfZu",freeBackground:"_3O8BWjYLsOa7ijSaBG50my"}}}]);