(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1730:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var r=a(0),n=a.n(r),i=a(2),l=a.n(i),o=a(16),s=a.n(o),c="_2RX3dzrMfv-xPakxLUxiu7",d="_15TqN3scCNqyyUu2xOuXN8",y="_2E8z4X2l9XDX-eWG_G8ShT",u="_3G2pA9cTBqUiaTRub_9iPA",m="_1COebVDcLQrW6bptcbu5wE",p="_1qxCn3XnZELBgRBU0Tu6iI";const DiffArrow=({className:e,pointLeft:t,pointRight:a,gray:r,green:i,red:l,marginLeft:o,marginRight:b})=>n.a.createElement("div",{className:s()(c,{[u]:r,[y]:i,[d]:l,[m]:o,[p]:b},e)},t&&"\u2190",a&&"\u2192");DiffArrow.propTypes={className:l.a.string,pointLeft:l.a.bool,pointRight:l.a.bool,gray:l.a.bool,green:l.a.bool,red:l.a.bool,marginLeft:l.a.bool,marginRight:l.a.bool};var b=DiffArrow},1731:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var r=a(0),n=a.n(r),i=a(2),l=a.n(i),o=a(9),s=a(17),c=a(19);const SectionHeader=({cardPadding:e,className:t,contentRight:a,isSidebarOpen:r,title:i,subtitle:l})=>n.a.createElement(d,{cardPadding:e,className:t,isSidebarOpen:r},n.a.createElement(y,null,n.a.createElement(u,null,i),l&&n.a.createElement(m,null,l)),a),d=o.c.div`
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
`,y=o.c.div`
  @media ${s.a.notTablet} {
    padding-right: 20px;
  }
`,u=o.c.h2`
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
`,m=o.c.h3`
  ${s.e.size14}
  color: var(--color-text-dark);
  margin-top: 4px;

  @media ${s.a.tablet} {
    ${s.e.size16}
  }
`;SectionHeader.propTypes={cardPadding:l.a.bool,className:l.a.string,contentRight:l.a.node,isSidebarOpen:l.a.bool,title:l.a.node.isRequired,subtitle:l.a.node};var p=SectionHeader},1735:function(e,t,a){var r=a(608),n=a(328),i=a(377);e.exports=function slice(e,t,a){var l=null==e?0:e.length;return l?(a&&"number"!=typeof a&&n(e,t,a)?(t=0,a=l):(t=null==t?0:i(t),a=void 0===a?l:i(a)),r(e,t,a)):[]}},1754:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(9),l=a(600),o=a.n(l),s=a(68),c=a(15),d=a(36),y=a(95),u=a(243),m=a(1);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,i=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(s){o=!0,n=s}finally{try{l||null==a.return||a.return()}finally{if(o)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function _objectWithoutProperties(e,t){if(null==e)return{};var a,r,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}t.a=e=>{let t=e.clipboardItem,a=e.contentStringKey,i=void 0===a?m.a.COPY_LINK:a,l=e.isIcon,d=e.onClick,y=e.labelPosition,b=void 0===y?u.a.RIGHT:y,E=e.children,T=_objectWithoutProperties(e,["clipboardItem","contentStringKey","isIcon","onClick","labelPosition","children"]);const f=Object(s.u)(),g=_slicedToArray(Object(r.useState)(!1),2),A=g[0],h=g[1],onCopyClick=e=>{e.stopPropagation(),h(!0),o()(t),null===d||void 0===d||d(),setTimeout(()=>h(!1),1e3)};return l||E?n.a.createElement(u.b,{label:f({key:A?m.a.COPIED:i}),position:b},l?n.a.createElement(p.CopyButton,_extends({disabled:A,onClick:onCopyClick,icon:n.a.createElement(c.s,null)},T)):E&&n.a.createElement(p.CopySpan,{role:"button",tabIndex:0,onClick:onCopyClick,disabled:A},E,n.a.createElement(p.CopyIcon,null))):n.a.createElement(p.Button,_extends({onClick:onCopyClick,disabled:A},T),n.a.createElement(p.CopyIcon,null),f({key:A?m.a.COPIED:i}))};const p={};p.CopyButton=Object(i.c)(y.b)`
  background-color: var(--color-layer-lighter);

  svg path {
    stroke: var(--color-text-light);
  }

  && {
    &:hover {
      filter: brightness(1.1);
    }
  }

  ${({disabled:e})=>e&&i.b`
      cursor: not-allowed;

      svg path {
        stroke: var(--color-text-dark);
      }
    `}
`,p.CopyIcon=Object(i.c)(c.s)`
  height: 16px;
  width: 16px;

  path {
    stroke: currentColor;
  }
`,p.Button=Object(i.c)(d.a)`
  > ${p.CopyIcon} {
    margin-right: 4px;
  }
`,p.CopySpan=i.c.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  ${({disabled:e})=>e&&i.b`
      cursor: not-allowed;
      color: var(--color-text-dark);
    `}
`},1771:function(e,t,a){"use strict";a.d(t,"a",(function(){return getAllFundingPayments})),a.d(t,"b",(function(){return getFetchedMarkets})),a.d(t,"c",(function(){return getFundingPaymentsByMarket}));var r=a(27),n=a.n(r);const getAllFundingPayments=e=>n()(e,"fundingPayments.fundingPayments"),getFetchedMarkets=e=>{var t;return null===e||void 0===e||null===(t=e.fundingPayments)||void 0===t?void 0:t.fetchedMarkets},getFundingPaymentsByMarket=e=>{var t;return null===e||void 0===e||null===(t=e.fundingPayments)||void 0===t?void 0:t.fundingPaymentsByMarket}},1798:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));const r={TAKER:"TAKER",MAKER:"MAKER"}},1886:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(99),l=a.n(i),o=a(10),s=a(2),c=a.n(s),d=a(16),y=a.n(d),u=a(25),m=a(32),p=a(68),b=a(15),E=a(1731),T=a(862),f=a(372),g=a(115),A=a(1),h=a(19),S="_1QWar7OEtXpATcfm8Ges1n",O="TJoh2x6QJQlpZKfJHrZwF",N="lwh-I84KcHpU0ZRDm9OAq",_=a(1732),I=a(189),R=a.n(I),k=a(211),v=a.n(k),w=a(174),C=a.n(w),x=a(1735),K=a.n(x),D=a(27),j=a.n(D),P=a(227),F=a.n(P),M=a(596),U=a.n(M),W=a(82),L=a.n(W),G=a(66),Y=a(91),$=a(1736),H=a(282),q=a(127),B=a(37),z=a(597),Q=a(62),V=a(1798),X=a(69),Z=a(76),J=a(20),ee=a(8),te=a(374);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,i=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(s){o=!0,n=s}finally{try{l||null==a.return||a.return()}finally{if(o)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const ae=[{key:"TIME",titleKey:A.a.TIME,percentage:4,minWidth:40},{key:"MARKET",sortKey:"MARKET",titleKey:A.a.MARKET,percentage:12,minWidth:120},{key:"SIDE",sortKey:"SIDE",titleKey:A.a.SIDE,percentage:6,minWidth:60},{key:"AMOUNT_PRICE",sortKey:"AMOUNT",titleKey:A.a.AMOUNT,secondaryTitleKey:A.a.PRICE,percentage:12,minWidth:120},{key:"TOTAL_FEE",sortKey:"TOTAL",titleKey:A.a.TOTAL,secondaryTitleKey:A.a.FEE,percentage:12,minWidth:120},{key:"TYPE",sortKey:"TYPE",titleKey:A.a.TYPE,percentage:9,minWidth:90},{key:"LIQUIDITY",sortKey:"LIQUIDITY",titleKey:A.a.LIQUIDITY,percentage:9,minWidth:90}],re=[{key:"MARKET_SIDE",sortKey:"MARKET",titleKey:A.a.MARKET,secondaryTitleKey:A.a.SIDE,percentage:12,minWidth:116},{key:"AMOUNT_PRICE",sortKey:"AMOUNT",titleKey:A.a.AMOUNT,secondaryTitleKey:A.a.PRICE,percentage:11,minWidth:108,rightAlign:!0},{key:"TOTAL_FEE",sortKey:"TOTAL",titleKey:A.a.TOTAL,secondaryTitleKey:A.a.FEE,percentage:11,minWidth:108,rightAlign:!0},{key:"TYPE_LIQUIDITY",sortKey:"TYPE",titleKey:A.a.TYPE,secondaryTitleKey:A.a.LIQUIDITY,percentage:9,minWidth:90,rightAlign:!0}],TradeHistoryTable=({allFills:e,allMarketsData:t,areKeyPairsValid:a,isSidebarOpen:i,isWalletConnecting:l,stringGetter:o})=>{const s=n.a.useRef(),c=n.a.useRef(),d=n.a.useRef(),u=_slicedToArray(Object(r.useState)(null),2),m=u[0],b=u[1],E=_slicedToArray(Object(r.useState)(null),2),T=E[0],f=E[1],g=l||!t||a&&!e,S=Object(p.b)().isTablet,O=Object(p.v)().width,N=Object(p.e)({containerRef:s,contentRef:C()(e)?c:d,isLoading:g,maxElements:v()(S?re:ae),availableWidth:i?O-h.q:O-h.p}),I=Object($.e)({baseConfig:S?re:ae,elementsToShow:N,isTablet:S,tableWidth:s.current?s.current.offsetWidth:0}),k=(({allFills:e,sortDirection:t,sortedByKey:a})=>{if(!e)return[];let r=[];if(L()(e,({id:e,market:t,type:a,price:n,size:i,fee:l,createdAt:o,side:s,liquidity:c})=>{const d=Object(ee.b)(i);r.push({id:e,market:t,type:a,price:Object(ee.b)(n),size:d,fee:Object(ee.b)(l),total:s===J.a.BUY?d.times(n).plus(l):d.times(n).minus(l),createdAt:o,side:s,liquidity:c})}),a){switch(a){case"MARKET":r=U()(F()(r,({market:e})=>e));break;case"SIDE":r=F()(r,({side:e})=>e);break;case"AMOUNT":r=F()(r,({size:e})=>e.toNumber());break;case"TOTAL":r=F()(r,({total:e})=>e.toNumber());break;case"TYPE":r=F()(r,({type:e})=>e);break;case"LIQUIDITY":r=F()(r,({liquidity:e})=>e)}t===$.c.DECREASING&&(r=U()(r))}return r})({allFills:e,sortDirection:T,sortedByKey:m,stringGetter:o});let w=[];return C()(e)||!t?w=n.a.createElement($.b,{emptyState:!0},o({key:A.a.TRADES_EMPTY_STATE})):L()(k,e=>w.push((({data:{id:e,market:t,type:a,price:r,size:i,fee:l,total:o,createdAt:s,side:c,liquidity:d},allMarketsData:u,elementsToShow:m,isTablet:p,stringGetter:b,tableConfig:E})=>{const T=X.c[t],f=T.baseSymbol,g=T.baseSymbolName,h=(u[t]||{}).tickSize,S=Object(ee.b)(h).decimalPlaces(),O=Object(te.c)({dateTime:G.DateTime.fromISO(s),stringGetter:b}),N=O.timeString,I=O.unitString,R=c===J.a.BUY?b({key:A.a.BUY}):b({key:A.a.SELL}),k=b({key:J.f[a]}),v=b({key:d===V.a.MAKER?A.a.MAKER:A.a.TAKER}),w=[n.a.createElement($.a,{stacked:!0,key:"amount-price",rightAlign:p,width:j()(E.AMOUNT_PRICE,"width")},n.a.createElement("span",null,n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",value:i.toFixed(Z.g)})),n.a.createElement("span",null,n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:r.toFixed(S)}))),n.a.createElement($.a,{stacked:!0,key:"total-fee",rightAlign:p,width:j()(E.TOTAL_FEE,"width")},n.a.createElement("span",null,n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:o.toFixed(Z.h)})),n.a.createElement("span",null,n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:l.toFixed(Z.h)})))],C=p?[n.a.createElement($.a,{key:"market-side",regularFont:!0,className:_.a.cellWithIcon,width:j()(E.MARKET_SIDE,"width")},n.a.createElement("div",{className:_.a.time},N,I),n.a.createElement("div",{className:y()(_.a.cellText,_.a.stacked)},n.a.createElement("span",null,t),n.a.createElement("span",{className:y()({[_.a.green]:c===J.a.BUY,[_.a.red]:c===J.a.SELL})},R))),...w,n.a.createElement($.a,{regularFont:!0,rightAlign:!0,stacked:!0,key:"type",width:j()(E.TYPE_LIQUIDITY,"width")},n.a.createElement("span",null,k),n.a.createElement("span",null,v))]:[n.a.createElement($.a,{regularFont:!0,key:"time",width:j()(E.TIME,"width")},N,I),n.a.createElement($.a,{key:"market",regularFont:!0,className:_.a.cellWithIcon,width:j()(E.MARKET,"width")},n.a.createElement(H.a,{symbol:f}),n.a.createElement("div",{className:y()(_.a.cellText,_.a.stacked),title:g},n.a.createElement("span",null,g),n.a.createElement("span",null,t))),n.a.createElement($.a,{key:"side",width:j()(E.SIDE,"width")},n.a.createElement(q.a,{regularFont:!0,large:!0,green:c===J.a.BUY,red:c===J.a.SELL},R)),...w,n.a.createElement($.a,{regularFont:!0,key:"type",width:j()(E.TYPE,"width")},n.a.createElement("span",null,k)),n.a.createElement($.a,{regularFont:!0,key:"liquidity",width:j()(E.LIQUIDITY,"width")},n.a.createElement("span",null,v))];return n.a.createElement($.b,{allowOverflow:!0,key:e},K()(C,0,m))})({data:e,allMarketsData:t,elementsToShow:N,isTablet:S,stringGetter:o,tableConfig:I}))),n.a.createElement($.d,{allowOverflow:!0,ref:s,headerRef:c,isLoading:g,tableConfig:R()(I),sortableTableConfig:{sortedByKey:m,sortDirection:T,onClickTableHeader:e=>{m!==e?(b(e),f($.c.DECREASING)):m===e&&T===$.c.DECREASING?f($.c.INCREASING):(b(null),f(null))}}},n.a.createElement("div",{ref:d,className:_.a.tableContent},w))};TradeHistoryTable.propTypes={allFills:c.a.array,allMarketsData:c.a.object,areKeyPairsValid:c.a.bool.isRequired,isSidebarOpen:c.a.bool.isRequired,isWalletConnecting:c.a.bool.isRequired,stringGetter:c.a.func.isRequired};var ne=Object(m.c)(Object(u.i)(Object(o.c)(e=>({allFills:Object(z.a)(e),allMarketsData:Object(Q.a)(e),areKeyPairsValid:Object(g.a)(e),isSidebarOpen:Object(f.b)(e),isWalletConnecting:Object(B.e)(e)}))(TradeHistoryTable))),ie=a(94),le=a.n(ie),oe=a(185),se=a(619),ce=a(1771);function funding_payments_table_slicedToArray(e,t){return function funding_payments_table_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function funding_payments_table_iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,i=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(s){o=!0,n=s}finally{try{l||null==a.return||a.return()}finally{if(o)throw n}}return i}(e,t)||function funding_payments_table_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return funding_payments_table_arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return funding_payments_table_arrayLikeToArray(e,t)}(e,t)||function funding_payments_table_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function funding_payments_table_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const de=[{key:"TIME",titleKey:A.a.TIME,percentage:4,minWidth:40},{key:"MARKET",sortKey:"MARKET",titleKey:A.a.MARKET,percentage:12,minWidth:120},{key:"PAYMENT",sortKey:"PAYMENT",titleKey:A.a.PAYMENT,percentage:9,minWidth:90},{key:"FUNDING_RATE",sortKey:"FUNDING_RATE",titleKey:A.a.FUNDING_RATE,percentage:9,minWidth:90},{key:"POSITION",titleKey:A.a.POSITION,percentage:12,minWidth:120},{key:"ORACLE_PRICE",titleKey:A.a.ORACLE_PRICE,percentage:10,minWidth:100}],ye=[{key:"MARKET_FUNDING_RATE",sortKey:"MARKET",titleKey:A.a.MARKET,secondaryTitleKey:A.a.FUNDING_RATE,percentage:12,minWidth:112},{key:"PAYMENT",sortKey:"PAYMENT",titleKey:A.a.PAYMENT,percentage:9,minWidth:90,rightAlign:!0},{key:"POSITION",titleKey:A.a.POSITION,percentage:12,minWidth:116,rightAlign:!0}],FundingPaymentsTable=({allFundingPayments:e,allMarketsData:t,areKeyPairsValid:a,isSidebarOpen:i,isWalletConnecting:l,stringGetter:o})=>{const s=n.a.useRef(),c=n.a.useRef(),d=funding_payments_table_slicedToArray(Object(r.useState)(null),2),u=d[0],m=d[1],b=funding_payments_table_slicedToArray(Object(r.useState)(null),2),E=b[0],T=b[1],f=l||a&&!e,g=Object(oe.c)().isTablet,S=Object(se.a)().width,O=Object(p.e)({containerRef:s,contentRef:c,isLoading:f,maxElements:v()(g?ye:de),availableWidth:i?S-h.q:S-h.p}),N=Object($.e)({baseConfig:g?ye:de,elementsToShow:O,isTablet:g,tableWidth:s.current?s.current.offsetWidth:0}),I=(({allFundingPayments:e,sortDirection:t,sortedByKey:a})=>{if(!e)return[];let r=[];if(L()(e,({effectiveAt:e,market:t,payment:a,positionSize:n,price:i,rate:l})=>{r.push({effectiveAt:e,market:t,payment:Object(ee.b)(a),positionSize:Object(ee.b)(n),price:Object(ee.b)(i),rate:Object(ee.b)(l)})}),a){switch(a){case"MARKET":r=U()(F()(r,({market:e})=>e));break;case"PAYMENT":r=F()(r,({payment:e})=>e.toNumber());break;case"FUNDING_RATE":r=F()(r,({rate:e})=>e.toNumber())}t===$.c.DECREASING&&(r=U()(r))}return r})({allFundingPayments:e,sortDirection:E,sortedByKey:u,stringGetter:o});let k=[];return C()(e)?k=n.a.createElement($.b,{emptyState:!0},o({key:A.a.FUNDING_PAYMENTS_EMPTY_STATE})):L()(I,e=>k.push((({data:{effectiveAt:e,market:t,payment:a,positionSize:r,price:i,rate:l},elementsToShow:o,isTablet:s,stringGetter:c,tableConfig:d})=>{const u=X.c[t],m=u.baseSymbol,p=u.baseSymbolName,b=Object(te.c)({dateTime:G.DateTime.fromISO(e),stringGetter:c}),E=b.timeString,T=b.unitString,f=c({key:r.gte(0)?A.a.LONG_POSITION_SHORT:A.a.SHORT_POSITION_SHORT}),g=n.a.createElement($.a,{key:"payment",rightAlign:s,className:y()({[_.a.green]:a.gte(0),[_.a.red]:a.lt(0)}),width:j()(d.PAYMENT,"width")},n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",prefix:a.lt(0)?"-$":"+$",value:a.abs().toFixed(Z.g,le.a.ROUND_UP)})),h=n.a.createElement($.a,{stacked:!0,rightAlign:s,key:"position",width:j()(d.POSITION,"width")},n.a.createElement("span",null,n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",value:r.abs().toFixed(Z.g)}),n.a.createElement(q.a,{compact:!0,marginLeft:!0},m)),n.a.createElement("span",{className:y()(_.a.regularFont,{[_.a.green]:r.gte(0),[_.a.red]:r.lt(0)})},f)),S=s?[n.a.createElement($.a,{key:"market-funding-rate",regularFont:!0,className:_.a.cellWithIcon,width:j()(d.MARKET_FUNDING_RATE,"width")},n.a.createElement("div",{className:_.a.time},E,T),n.a.createElement("div",{className:y()(_.a.cellText,_.a.stacked)},n.a.createElement("span",null,t),n.a.createElement("span",{className:y()({[_.a.green]:l.gte(0),[_.a.red]:l.lt(0)})},n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",suffix:"%",value:l.abs().times(100).toFixed(Z.e)})))),g,h]:[n.a.createElement($.a,{regularFont:!0,key:"time",width:j()(d.TIME,"width")},E,T),n.a.createElement($.a,{key:"market",regularFont:!0,className:_.a.cellWithIcon,width:j()(d.MARKET,"width")},n.a.createElement(H.a,{symbol:m}),n.a.createElement("div",{className:y()(_.a.cellText,_.a.stacked),title:p},n.a.createElement("span",null,p),n.a.createElement("span",null,t))),g,n.a.createElement($.a,{key:"funding-rate",className:y()({[_.a.green]:l.gte(0),[_.a.red]:l.lt(0)}),width:j()(d.FUNDING_RATE,"width")},n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",suffix:"%",value:l.abs().times(100).toFixed(Z.f)})),h,n.a.createElement($.a,{key:"oracle-price",width:j()(d.ORACLE_PRICE,"width")},n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:i.toFixed(Z.h)}))];return n.a.createElement($.b,{allowOverflow:!0,key:e+t},K()(S,0,o))})({data:e,allMarketsData:t,elementsToShow:O,isTablet:g,stringGetter:o,tableConfig:N}))),n.a.createElement($.d,{allowOverflow:!0,ref:s,isLoading:f,tableConfig:R()(N),sortableTableConfig:{sortedByKey:u,sortDirection:E,onClickTableHeader:e=>{u!==e?(m(e),T($.c.DECREASING)):u===e&&E===$.c.DECREASING?T($.c.INCREASING):(m(null),T(null))}}},n.a.createElement("div",{ref:c,className:_.a.tableContent},k))};FundingPaymentsTable.propTypes={allFundingPayments:c.a.array,allMarketsData:c.a.object,areKeyPairsValid:c.a.bool.isRequired,isSidebarOpen:c.a.bool.isRequired,isWalletConnecting:c.a.bool.isRequired,stringGetter:c.a.func.isRequired};var ue=Object(m.c)(Object(u.i)(Object(o.c)(e=>({allFundingPayments:Object(ce.a)(e),allMarketsData:Object(Q.a)(e),areKeyPairsValid:Object(g.a)(e),isSidebarOpen:Object(f.b)(e),isWalletConnecting:Object(B.e)(e)}))(FundingPaymentsTable))),me=a(9),pe=a(1754),be=a(1730),Ee=a(605),Te=a(610),fe=a(83),ge=a(154);function transfer_history_table_slicedToArray(e,t){return function transfer_history_table_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function transfer_history_table_iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,i=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(s){o=!0,n=s}finally{try{l||null==a.return||a.return()}finally{if(o)throw n}}return i}(e,t)||function transfer_history_table_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return transfer_history_table_arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return transfer_history_table_arrayLikeToArray(e,t)}(e,t)||function transfer_history_table_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function transfer_history_table_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const Ae=[{key:"TIME",titleKey:A.a.TIME,percentage:4,minWidth:40},{key:"ACTION_STATUS",sortKey:"ACTION",titleKey:A.a.ACTION,secondaryTitleKey:A.a.STATUS,percentage:10,minWidth:100},{key:"SENDER_RECEIVER",titleKey:A.a.TRANSFER_SENDER,secondaryTitleKey:A.a.TRANSFER_RECEIVER,percentage:12,minWidth:144},{key:"ASSET_AMOUNT",sortKey:"AMOUNT",titleKey:A.a.AMOUNT,percentage:10,minWidth:120},{key:"TRANSACTION_HASH_FEE",titleKey:A.a.TRANSACTION,secondaryTitleKey:A.a.FEE,percentage:8,minWidth:144}],he=[{key:"TIME_ACTION_STATUS",sortKey:"ACTION",titleKey:A.a.ACTION,secondaryTitleKey:A.a.STATUS,percentage:16,minWidth:160},{key:"ASSET_AMOUNT",sortKey:"AMOUNT",titleKey:A.a.AMOUNT,percentage:12,minWidth:120,rightAlign:!0},{key:"TRANSACTION_HASH_FEE",titleKey:A.a.TRANSACTION,secondaryTitleKey:A.a.FEE,percentage:15,minWidth:144,rightAlign:!0}],TransferHistoryTable=({allTransfers:e,areKeyPairsValid:t,isSidebarOpen:a,isWalletConnecting:i,stringGetter:l})=>{const o=n.a.useRef(),s=n.a.useRef(),c=n.a.useRef(),d=transfer_history_table_slicedToArray(Object(r.useState)(null),2),u=d[0],m=d[1],E=transfer_history_table_slicedToArray(Object(r.useState)(null),2),T=E[0],f=E[1],g=i||t&&!e,S=Object(p.b)().isTablet,O=Object(p.v)().width,N=Object(p.e)({containerRef:o,contentRef:C()(e)?s:c,isLoading:g,minElements:2,maxElements:v()(S?he:Ae),availableWidth:a?O-h.q:O-h.p}),I=Object($.e)({baseConfig:S?he:Ae,elementsToShow:N,isTablet:S,tableWidth:o.current?o.current.offsetWidth:0}),k=(({allTransfers:e,sortDirection:t,sortedByKey:a})=>{if(!e)return[];let r=[];if(L()(e,({id:e,type:t,creditAmount:a,debitAmount:n,debitAsset:i,status:l,createdAt:o,transactionHash:s,fromAddress:c,toAddress:d})=>{r.push({id:e,type:t,creditAmount:a,debitAsset:i,debitAmount:n,fee:t===ge.c.WITHDRAWAL?Object(ee.b)(n).minus(a):ee.a.ZERO,status:l,createdAt:o,transactionHash:s,fromAddress:c,toAddress:d})}),a){switch(a){case"ACTION":r=F()(r,({type:e})=>e);break;case"STATUS":r=F()(r,({status:e})=>e);break;case"AMOUNT":r=F()(r,({creditAmount:e})=>Number(e))}t===$.c.DECREASING&&(r=U()(r))}return r})({allTransfers:e,sortDirection:T,sortedByKey:u,stringGetter:l});let w=[];return C()(e)?w=n.a.createElement($.b,{emptyState:!0},l({key:A.a.TRANSFERS_EMPTY_STATE})):L()(k,e=>w.push((({data:{id:e,type:t,creditAmount:a,debitAmount:r,debitAsset:i,fee:l,status:o,createdAt:s,transactionHash:c,fromAddress:d,toAddress:u},elementsToShow:m,isTablet:p,stringGetter:E,tableConfig:T})=>{const f=Object(te.c)({dateTime:G.DateTime.fromISO(s),stringGetter:E}),g=f.timeString,h=f.unitString;let S=A.a.UNKNOWN,O=null,N=null;switch(t){case ge.c.DEPOSIT:S=A.a.DEPOSIT;break;case ge.c.FAST_WITHDRAWAL:S=A.a.FAST_WITHDRAW;break;case ge.c.TRANSFER_IN:S=A.a.TRANSFER_IN,O=d;break;case ge.c.TRANSFER_OUT:S=A.a.TRANSFER_OUT,N=u;break;case ge.c.WITHDRAWAL:S=A.a.SLOW_WITHDRAW}let I=A.a.UNKNOWN;switch(o){case ge.b.CANCELED:I=A.a.CANCELED;break;case ge.b.CONFIRMED:I=A.a.CONFIRMED;break;case ge.b.QUEUED:I=A.a.QUEUED;break;case ge.b.PENDING:I=A.a.PENDING;break;case ge.b.UNCONFIRMED:I=A.a.UNCONFIRMED}const R=n.a.createElement($.a,{regularFont:!0,key:"time",width:j()(T.TIME,"width")},g,h),k=[n.a.createElement(Y.a,{key:"debit-amount",thousandSeparator:!0,displayType:"text",value:Object(ee.b)(r).toFixed(Z.g)}),n.a.createElement(q.a,{compact:!0,darkText:!0,key:"asset-tag"},i)],renderAddress=e=>e?n.a.createElement(pe.a,{contentStringKey:A.a.COPY_ADDRESS,clipboardItem:e},e===ge.a?"Banxa":n.a.createElement(Ee.a,{hash:e})):"-",v=[...p?[n.a.createElement($.a,{key:"time-action-status",regularFont:!0,className:_.a.cellWithIcon,width:j()(T.TIME_ACTION_STATUS,"width")},n.a.createElement("div",{className:_.a.time},g,h),n.a.createElement("div",{className:y()(_.a.cellText,_.a.stacked)},n.a.createElement("span",null,E({key:S})),n.a.createElement("span",null,E({key:I}))))]:[R,n.a.createElement($.a,{regularFont:!0,stacked:!0,key:"action-status",width:j()(T.ACTION_STATUS,"width")},n.a.createElement("span",null,E({key:S})),n.a.createElement("span",null,E({key:I}))),n.a.createElement($.a,{stacked:!0,key:"sender-receiver",width:j()(T.SENDER_RECEIVER,"width")},n.a.createElement(Se.CopyableAddress,null,renderAddress(O)),n.a.createElement(Se.CopyableAddress,null,renderAddress(N)))],n.a.createElement($.a,{key:"asset-amount",rightAlign:p,inverseStacked:i!==fe.a.USDC,width:j()(T.ASSET_AMOUNT,"width")},i!==fe.a.USDC?[n.a.createElement(Se.AssetCellSpan,{key:"debit-asset"},k.map(e=>e)),n.a.createElement(Se.AmountSpan,{key:"amount-items"},n.a.createElement(be.a,{gray:!0,marginRight:!0,pointRight:!0}),n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:Object(ee.b)(a).toFixed(Z.g)}))]:n.a.createElement(Se.AmountSpan,null,n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:Object(ee.b)(t===ge.c.TRANSFER_OUT?r:a).toFixed(Z.g)}))),n.a.createElement($.a,{regularFont:!0,rightAlign:p,stacked:!0,key:"transaction-fee",width:j()(T.TRANSACTION_HASH_FEE,"width")},n.a.createElement("span",null,c?n.a.createElement("a",{className:_.a.linkOut,target:"_blank",rel:"noopener noreferrer",href:"https://etherscan.io/tx/"+c},n.a.createElement(Ee.a,{hash:c}),n.a.createElement(b.W,null)):"-"),n.a.createElement("span",null,n.a.createElement(Y.a,{thousandSeparator:!0,displayType:"text",value:l.isZero()?"-":l.toFixed(Z.g)})))];return n.a.createElement($.b,{allowOverflow:!0,key:e},K()(v,0,m))})({data:e,elementsToShow:N,isTablet:S,stringGetter:l,tableConfig:I}))),n.a.createElement($.d,{allowOverflow:!0,ref:o,headerRef:s,isLoading:g,tableConfig:R()(I),sortableTableConfig:{sortedByKey:u,sortDirection:T,onClickTableHeader:e=>{u!==e?(m(e),f($.c.DECREASING)):u===e&&T===$.c.DECREASING?f($.c.INCREASING):(m(null),f(null))}}},n.a.createElement("div",{ref:c,className:_.a.tableContent},w))},Se={};Se.AssetCellSpan=me.c.span`
  color: var(--color-text-dark);
  display: flex;
  gap: 6px;
  align-items: center;
`,Se.ArrowSpan=me.c.span`
  color: var(--color-text-base);
  margin-right: 2px;
`,Se.AmountSpan=me.c.span`
  color: var(--color-text-light);
`,Se.CopyableAddress=me.c.span`
  && > div > div > div > svg {
    margin-left: 4px;
    height: 14px;
  }
`,TransferHistoryTable.propTypes={allTransfers:c.a.array,areKeyPairsValid:c.a.bool.isRequired,isSidebarOpen:c.a.bool.isRequired,isWalletConnecting:c.a.bool.isRequired,stringGetter:c.a.func.isRequired};var Oe=Object(m.c)(Object(u.i)(Object(o.c)(e=>({allTransfers:Object(Te.a)(e),areKeyPairsValid:Object(g.a)(e),isSidebarOpen:Object(f.b)(e),isWalletConnecting:Object(B.e)(e)}))(TransferHistoryTable)));function history_slicedToArray(e,t){return function history_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function history_iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,i=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(s){o=!0,n=s}finally{try{l||null==a.return||a.return()}finally{if(o)throw n}}return i}(e,t)||function history_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return history_arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return history_arrayLikeToArray(e,t)}(e,t)||function history_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function history_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const Ne={TRADES:"TRADES",TRANSFERS:"TRANSFERS",FUNDING_PAYMENTS:"FUNDING_PAYMENTS"},_e={[Ne.TRADES]:A.a.TRADES,[Ne.FUNDING_PAYMENTS]:A.a.FUNDING_PAYMENTS_SHORT,[Ne.TRANSFERS]:A.a.TRANSFERS},Ie={[Ne.TRADES]:ne,[Ne.FUNDING_PAYMENTS]:ue,[Ne.TRANSFERS]:Oe},Re={[h.j.FUNDING]:Ne.FUNDING_PAYMENTS,[h.j.TRADES]:Ne.TRADES,[h.j.TRANSFERS]:Ne.TRANSFERS},ke=Object.fromEntries(Object.entries(Re).map(([e,t])=>[t,e])),PortfolioHistory=({stringGetter:e})=>{const t=Object(p.b)().isTablet,a=Object(u.h)().pathname,i=Object(u.g)(),s=Object(o.f)(g.a),c=Object(o.f)(f.b),d=Re[a],m=history_slicedToArray(Object(r.useState)(d||Ne.TRADES),2),h=m[0],I=m[1],R=Ie[h];return n.a.createElement("div",{className:_.a.contentWrapper},n.a.createElement("div",{className:_.a.contentContainer},n.a.createElement(E.a,{contentRight:!t&&s&&n.a.createElement(T.a,null),isSidebarOpen:c,title:n.a.createElement("div",{className:S},Object.keys(Ne).map(t=>n.a.createElement("div",{key:t,role:"button",tabIndex:0,className:y()(O,{[N]:h===t}),onClick:()=>(e=>{const t=ke[e];i.push(t),I(e)})(t)},e({key:_e[t]}))))}),n.a.createElement("div",{className:y()(_.a.tableContainer,{[_.a.sidebarCollapsed]:!c,[_.a.sidebarOpen]:c})},n.a.createElement(R,null)),h===Ne.TRANSFERS&&n.a.createElement("div",{className:_.a.footer},n.a.createElement("span",{dangerouslySetInnerHTML:{__html:e({key:A.a.FIAT_CHECK_ORDER_STATUS,params:{BANXA_SUPPORT_LINK:l.a.renderToString(n.a.createElement("a",{className:_.a.banxaSupportLink,href:"https://support.banxa.com/",target:"_blank",rel:"noopener noreferrer"},e({key:A.a.FIAT_BANXA_SUPPORT_LINK}),n.a.createElement(b.W,null)))}})}}))))};PortfolioHistory.propTypes={stringGetter:c.a.func.isRequired};t.default=Object(m.c)(PortfolioHistory)}}]);