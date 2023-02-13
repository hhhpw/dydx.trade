(window.webpackJsonp=window.webpackJsonp||[]).push([[92],{1731:function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var r=a(0),n=a.n(r),i=a(2),l=a.n(i),c=a(9),o=a(17),d=a(19);const SectionHeader=({cardPadding:e,className:t,contentRight:a,isSidebarOpen:r,title:i,subtitle:l})=>n.a.createElement(s,{cardPadding:e,className:t,isSidebarOpen:r},n.a.createElement(p,null,n.a.createElement(u,null,i),l&&n.a.createElement(T,null,l)),a),s=c.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  max-width: calc(var(--page-content-max-width) + var(--sidebar-width));
  gap: 1em;

  @media ${o.a.tablet} {
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${({cardPadding:e,isSidebarOpen:t})=>t?`\n          @media (max-width: calc(${d.m}px + ${d.q}px)) {\n            padding-left: ${e?"36px":"24px"};\n            padding-right: ${e?"36px":"24px"};\n\n            @media ${o.a.tablet} {\n              padding-left: ${e?"32px":"20px"};\n              padding-right: ${e?"32px":"20px"};\n            }\n          }\n        `:`\n          @media (max-width: calc(${d.m}px + ${d.p}px)) {\n            padding-left: 24px;\n            padding-right: 24px;\n\n            @media ${o.a.tablet} {\n              padding-left: 20px;\n              padding-right: 20px;\n            }\n          }\n        `}
`,p=c.c.div`
  @media ${o.a.notTablet} {
    padding-right: 20px;
  }
`,u=c.c.h2`
  ${o.e.size20};
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-light);
  white-space: nowrap;
  overflow: auto;
  ${o.g}

  @media ${o.a.tablet} {
    ${o.e.size24};
  }
`,T=c.c.h3`
  ${o.e.size14}
  color: var(--color-text-dark);
  margin-top: 4px;

  @media ${o.a.tablet} {
    ${o.e.size16}
  }
`;SectionHeader.propTypes={cardPadding:l.a.bool,className:l.a.string,contentRight:l.a.node,isSidebarOpen:l.a.bool,title:l.a.node.isRequired,subtitle:l.a.node};var E=SectionHeader},1735:function(e,t,a){var r=a(608),n=a(328),i=a(377);e.exports=function slice(e,t,a){var l=null==e?0:e.length;return l?(a&&"number"!=typeof a&&n(e,t,a)?(t=0,a=l):(t=null==t?0:i(t),a=void 0===a?l:i(a)),r(e,t,a)):[]}},1803:function(e,t,a){"use strict";a.d(t,"a",(function(){return C}));var r=a(27),n=a.n(r),i=a(0),l=a.n(i),c=a(2),o=a.n(c),d=a(66),s=a(91),p=a(9),u=a(15),T=a(17),E=a(282),m=a(95),b=a(373),y=a(127),g=a(1736),R=a(243),O=a(1),S=a(69),h=a(23),I=a(20),A=a(76),f=a(8),_=a(470),x=a(374);const OrderRow=({data:{expiresAtDT:e,filledAmount:t,id:a,isCanceledOrder:r,isFilledOrder:i,isPendingOrder:c,isStopOrder:o,market:p,price:T,showGoodTil:m,side:C,size:L,status:D,trailingPercent:v,triggerPrice:w,type:P},allMarketsData:M,awaitedCancellations:K,clearOrder:G,columns:$,currentMarketData:j,displayCard:F,isTablet:N,onCancelOrder:U,openSidebarModal:q,selectedLocale:z,stringGetter:W,tableConfig:H})=>{const B=(j||M[p]).tickSize,Y=S.c[p],V=Y.baseSymbol,J=Y.baseSymbolName,Q=Object(f.b)(B).decimalPlaces(),X=Object(x.c)({dateTime:e,stringGetter:W}),Z=X.timeString,ee=X.unitString,te=X.hasExpirationWarning,ae=Object(_.b)({status:D,filledAmount:t});let re,ne="";switch(P){case I.e.MARKET:ne=W({key:O.a.MARKET_ORDER_SHORT});break;case I.e.LIMIT:ne=W({key:O.a.LIMIT_ORDER_SHORT});break;case I.e.STOP_LIMIT:ne=W({key:O.a.STOP_ORDER_SHORT}),re=W({key:O.a.LIMIT_ORDER_SHORT});break;case I.e.STOP_MARKET:ne=W({key:O.a.STOP_ORDER_SHORT}),re=W({key:O.a.MARKET_ORDER_SHORT});break;case I.e.TAKE_PROFIT:N?ne=W({key:O.a.TAKE_PROFIT}):(ne=W({key:O.a.STOP_ORDER_SHORT}),re=W({key:O.a.TAKE_PROFIT_LIMIT_SHORT}));break;case I.e.TAKE_PROFIT_MARKET:N?ne=W({key:O.a.MARKET_PROFIT}):(ne=W({key:O.a.STOP_ORDER_SHORT}),re=W({key:O.a.MARKET_PROFIT}));break;case I.e.TRAILING_STOP:ne=W({key:O.a.STOP_ORDER_SHORT}),re=W({key:O.a.TRAILING_STOP_SHORT})}const ie=P===I.e.TRAILING_STOP,le=[I.e.MARKET,I.e.STOP_MARKET,I.e.TAKE_PROFIT_MARKET,I.e.TRAILING_STOP].includes(P),ce=C===I.a.BUY?W({key:O.a.BUY}):W({key:O.a.SELL}),oe=r||i||c,de=$.map(c=>(({cellType:c})=>{switch(c){case I.d.AMOUNT_FILLED:return l.a.createElement(g.a,{stacked:!0,key:"amount-filled",rightAlign:N||n()(H.AMOUNT_FILLED,"rightAlign"),width:n()(H.AMOUNT_FILLED,"width"),muted:oe},l.a.createElement("span",null,l.a.createElement(s.a,{thousandSeparator:!0,displayType:"text",value:L.toFixed(A.g)})),l.a.createElement("span",null,l.a.createElement(s.a,{thousandSeparator:!0,displayType:"text",value:t.toFixed(A.g)})));case I.d.CANCEL:return l.a.createElement(g.a,{rightAlign:!0,key:"cancel",width:n()(H.CANCEL,"width")},!r&&K.has(a)?l.a.createElement("div",{onClick:e=>e.stopPropagation(),role:"button",tabIndex:0},l.a.createElement(b.a,{compact:!0})):l.a.createElement(R.b,{label:W({key:r||i?O.a.CLEAR:O.a.CANCEL_ORDER}),position:R.a.LEFT},l.a.createElement(k.IconButton,{isRed:!r&&!i,iconUsesStroke:!0,icon:l.a.createElement(u.q,null),onClick:e=>{e.stopPropagation(),r||i?G({orderId:a}):U({id:a,market:p,side:C})}})));case I.d.GOOD_TIL:return l.a.createElement(g.a,{regularFont:!0,key:"good-til",width:n()(H.GOOD_TIL,"width"),muted:oe,red:m&&Z&&te},l.a.createElement(R.b,{label:e.setLocale(z).toLocaleString(d.DateTime.DATETIME_FULL),position:R.a.LEFT},l.a.createElement("div",null,m&&Z?`${Z}${ee}`:"-")));case I.d.MARKET:return l.a.createElement(k.CellWithIcon,{key:"market",regularFont:!0,width:n()(H.MARKET,"width"),muted:oe},l.a.createElement(E.a,{symbol:V}),l.a.createElement(k.CellTextDiv,{isStacked:!0},l.a.createElement("span",null,J),l.a.createElement("span",null,p)));case I.d.MARKET_DETAILS:return l.a.createElement(k.CellWithIcon,{regularFont:!0,key:"market-details",width:n()(H.MARKET_DETAILS,"width"),muted:oe},l.a.createElement(E.a,{symbol:V}),l.a.createElement(k.CellTextDiv,{isStacked:!0},l.a.createElement(k.ColorTextSpan,{green:C===I.a.BUY,red:C===I.a.SELL},ce),l.a.createElement("span",null,re?`${re} ${ne}`:ne)));case I.d.PRICE:return l.a.createElement(g.a,{key:"price",width:n()(H.PRICE,"width"),regularFont:le,muted:oe},le?W({key:O.a.MARKET_PRICE_SHORT}):l.a.createElement(s.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:T.toFixed(Q)}));case I.d.PRICE_TRIGGER:return l.a.createElement(g.a,{stacked:!0,rightAlign:!0,key:"price-trigger",width:n()(H.PRICE_TRIGGER,"width"),muted:oe},le?l.a.createElement(k.RegularFontSpan,null,W({key:O.a.MARKET_PRICE_SHORT})):l.a.createElement(s.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:T.toFixed(Q)}),l.a.createElement("span",null,o?l.a.createElement(s.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:w.toFixed(Q)}):"-"));case I.d.SIDE:return l.a.createElement(g.a,{key:"side",width:n()(H.SIDE,"width"),muted:oe},l.a.createElement(y.a,{regularFont:!0,large:!0,green:C===I.a.BUY,red:C===I.a.SELL},ce));case I.d.STATUS:return l.a.createElement(k.CellWithIcon,{regularFont:!0,key:"status",width:n()(H.STATUS,"width"),muted:oe},l.a.createElement(k.HoverContent,null,l.a.createElement(ae,null)),l.a.createElement(k.CellTextSpan,{isStacked:!!re},l.a.createElement("span",null,ne),re&&l.a.createElement("span",null,re)));case I.d.STATUS_DETAILS:return l.a.createElement(k.StatusCell,{regularFont:!0,key:"status-details",width:n()(H.STATUS_DETAILS,"width"),muted:oe},l.a.createElement(ae,null),l.a.createElement(k.OrderType,null,l.a.createElement(k.ColorTextSpan,{green:C===I.a.BUY,red:C===I.a.SELL},ce),l.a.createElement("span",null,re?`${re} ${ne}`:ne)));case I.d.TRIGGER:return l.a.createElement(g.a,{key:"trigger",stacked:ie,width:n()(H.TRIGGER,"width"),muted:oe},l.a.createElement("span",null,o?l.a.createElement(s.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:w.toFixed(Q)}):"-"),ie&&l.a.createElement(k.RegularFontSpan,null,W({key:O.a.PERCENT_TRAIL,params:{PERCENT:v.abs().toFixed(A.d)}})));default:return null}})({cellType:c}));return l.a.createElement(g.b,{allowOverflow:!0,cardStyles:F,greenGradient:F&&C===I.a.BUY,redGradient:F&&C===I.a.SELL,key:a,onClick:()=>{q({modalType:h.b.ORDER_DETAILS,modalProps:{orderId:a}})}},de)},k={};k.CellWithIcon=Object(p.c)(g.a)`
  display: flex;
  align-items: center;

  &.cardStyles {
    .cellText.stacked {
      @include font-size-14;

      > span:last-child {
        @include font-size-13;
        margin-top: 4px;
      }

      @media ${T.a.tablet} {
        > span:last-child {
          @include font-size-14;
          margin-top: 2px;
        }
      }
    }
  }

  .time {
    width: 28px;
  }
`,k.CellText=p.b`
  margin-left: 10px;

  ${({isStacked:e})=>e&&p.b`
      ${T.e.size13}
      display: flex;
      flex-direction: column;

      > span:last-child {
        ${T.e.size12}
        margin-top: 2px;
        color: var(--color-text-dark);
      }

      @media ${T.a.tablet} {
        ${T.e.size14}

        > span:first-child {
          color: var(--color-text-light);
        }

        > span:last-child {
          ${T.e.size14}
        }
      }
    `}
`,k.CellTextDiv=p.c.div`
  ${k.CellText}
`,k.CellTextSpan=p.c.span`
  ${k.CellText}
`,k.ColorTextSpan=p.c.span`
  ${({green:e})=>e&&p.b`
      && {
        color: var(--color-green);
      }
    `}
  ${({red:e})=>e&&p.b`
      && {
        color: var(--color-red);
      }
    `}
`,k.HoverContent=p.c.div`
  display: flex;
  align-items: center;
`,k.IconButton=Object(p.c)(m.b)`
  ${({isRed:e})=>e&&p.b`
      svg path {
        stroke: var(--color-red);
      }
    `}
`,k.OrderType=p.c.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  @media ${T.a.tablet} {
    margin-left: 12px;

    > span:first-child {
      ${T.e.size15}
    }

    > span:last-child {
      ${T.e.size13}
      color: var(--color-text-dark);
      margin-top: 4px;
    }
  }

  &.stacked {
    ${T.e.size13}

    > span:last-child {
      margin-top: 2px;
      color: var(--color-text-dark);
    }
  }
`,k.RegularFontSpan=p.c.span`
  ${T.f.regularFont}
`,k.StatusCell=Object(p.c)(g.a)`
  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
  }

  @media ${T.a.tablet} {
    > svg {
      height: 18px;
      width: 18px;
    }
  }
`,OrderRow.propTypes={data:o.a.shape({cancelReason:o.a.string,expiresAtDT:o.a.object,filledAmount:o.a.object,id:o.a.string,isCanceledOrder:o.a.bool,isFilledOrder:o.a.bool,isPendingOrder:o.a.bool,isStopOrder:o.a.bool,market:o.a.string,price:o.a.object,showGoodTil:o.a.bool,side:o.a.string,size:o.a.object,status:o.a.string,trailingPercent:o.a.object,triggerPrice:o.a.object,type:o.a.string}).isRequired,allMarketsData:o.a.object,awaitedCancellations:o.a.object.isRequired,columns:o.a.array.isRequired,clearOrder:o.a.func.isRequired,currentMarketData:o.a.object,displayCard:o.a.bool,isTablet:o.a.bool.isRequired,onCancelOrder:o.a.func.isRequired,openSidebarModal:o.a.func.isRequired,selectedLocale:o.a.string.isRequired,stringGetter:o.a.func.isRequired,tableConfig:o.a.object.isRequired};var C=OrderRow},1899:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),i=a(2),l=a.n(i),c=a(10),o=a(16),d=a.n(o),s=a(32),p=a(68),u=a(612),T=a(1731),E=a(189),m=a.n(E),b=a(174),y=a.n(b),g=a(211),R=a.n(g),O=a(596),S=a.n(O),h=a(227),I=a.n(h),A=a(82),f=a.n(A),_=a(61),x=a(66),k=a(1803),C=a(1736),L=a(33),D=a(236),v=a(131),w=a(62),P=a(326),M=a(372),K=a(37),G=a(115),$=a(1),j=a(19),F=a(13),N=a(20),U=a(30),q=a(8),z=a(1732);function asyncGeneratorStep(e,t,a,r,n,i,l){try{var c=e[i](l),o=c.value}catch(d){return void a(d)}c.done?t(o):Promise.resolve(o).then(r,n)}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var r,n,i=[],l=!0,c=!1;try{for(a=a.call(e);!(l=(r=a.next()).done)&&(i.push(r.value),!t||i.length!==t);l=!0);}catch(o){c=!0,n=o}finally{try{l||null==a.return||a.return()}finally{if(c)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}const W=[{key:"MARKET",sortKey:"MARKET",titleKey:$.a.MARKET,percentage:14,minWidth:108},{key:"STATUS",sortKey:"STATUS",titleKey:$.a.STATUS,percentage:14,minWidth:108},{key:"SIDE",sortKey:"SIDE",titleKey:$.a.SIDE,percentage:8,minWidth:60},{key:"AMOUNT_FILLED",titleKey:$.a.AMOUNT,secondaryTitleKey:$.a.AMOUNT_FILLED,percentage:16,minWidth:100},{key:"PRICE",sortKey:"PRICE",titleKey:$.a.PRICE,percentage:14,minWidth:100},{key:"TRIGGER",titleKey:$.a.TRIGGER_PRICE_SHORT,percentage:14,minWidth:100,tooltipConfig:{tooltip:"trigger-price",left:-180}},{key:"GOOD_TIL",sortKey:"GOOD_TIL",titleKey:$.a.GOOD_TIL_DATE_ABBREVIATED,percentage:8,minWidth:70,tooltipConfig:{tooltip:"good-til",right:-16}}],H=[{key:"MARKET_DETAILS",titleKey:$.a.MARKET,secondaryTitleKey:$.a.DETAILS,percentage:22,minWidth:112},{key:"AMOUNT_FILLED",titleKey:$.a.AMOUNT,secondaryTitleKey:$.a.AMOUNT_FILLED,percentage:20,rightAlign:!0},{key:"PRICE_TRIGGER",titleKey:$.a.PRICE,secondaryTitleKey:$.a.TRIGGER_PRICE_SHORT,percentage:20,rightAlign:!0}],OrdersTable=({allMarketsData:e,areKeyPairsValid:t,clearOrder:a,isSidebarOpen:i,isWalletConnecting:l,openSidebarModal:c,orders:o,selectedLocale:d,stringGetter:s})=>{const u=n.a.useRef(),T=n.a.useRef(),E=_slicedToArray(Object(r.useState)(null),2),b=E[0],g=E[1],O=_slicedToArray(Object(r.useState)(null),2),h=O[0],A=O[1],_=_slicedToArray(Object(r.useState)(new Set),2),L=_[0],D=_[1],v=_slicedToArray(Object(r.useState)(!1),2)[1];Object(r.useEffect)(()=>{setTimeout(()=>v(!i),200)},[i]);const w=l||t&&!o||!e,P=Object(p.b)().isTablet,M=Object(p.v)().width,K=Object(p.e)({containerRef:u,contentRef:T,isLoading:w,maxElements:R()(P?H:W),availableWidth:i?M-j.q:M-j.p});let G=0;u.current&&(G=u.current.clientWidth,P||(G-=40));const B=Object(C.e)({baseConfig:P?H:W,elementsToShow:K,isTablet:P,tableWidth:G});let Y=P?[N.d.MARKET_DETAILS,N.d.AMOUNT_FILLED,N.d.PRICE_TRIGGER]:[N.d.MARKET,N.d.STATUS,N.d.SIDE,N.d.AMOUNT_FILLED,N.d.PRICE,N.d.TRIGGER,N.d.GOOD_TIL];Y=Y.slice(0,K),P||Y.push(N.d.CANCEL);const V=function(){var e=function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise((function(r,n){var i=e.apply(t,a);function _next(e){asyncGeneratorStep(i,r,n,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,r,n,_next,_throw,"throw",e)}_next(void 0)}))}}((function*({id:e}){const t=new Set(L);t.add(e),D(t),yield U.c.cancelOrder({orderId:e}),t.delete(e),D(t)}));return function onCancelOrder(t){return e.apply(this,arguments)}}(),J=(({orders:e,sortDirection:t,sortedByKey:a})=>{let r=[];if(f()(e,({id:e,expiresAt:t,size:a,side:n,status:i,type:l,reduceOnlySize:c,remainingSize:o,price:d,market:s,timeInForce:p,trailingPercent:u,triggerPrice:T,cancelReason:E})=>{const m=p===F.C.FOK,b=i===N.c.CANCELED,y=i===N.c.FILLED,g=i===N.c.PENDING,R=N.g.includes(l),O=!b&&i!==N.c.FILLED&&(R||!m);r.push({cancelReason:E,expiresAtDT:x.DateTime.fromISO(t),filledAmount:Object(q.b)(null!==c&&void 0!==c?c:a).minus(o),fillOrKill:m,id:e,isCanceledOrder:b,isFilledOrder:y,isPendingOrder:g,isStopOrder:R,market:s,price:Object(q.b)(d),showGoodTil:O,side:n,size:Object(q.b)(null!==c&&void 0!==c?c:a),status:i,trailingPercent:Object(q.b)(u),triggerPrice:Object(q.b)(T),type:l})}),a){switch(a){case"STATUS":r=I()(r,({status:e,type:t})=>e+t);break;case"SIDE":r=I()(r,({side:e})=>e===N.a.BUY?1:0);break;case"AMOUNT":r=I()(r,({size:e})=>e.toNumber());break;case"FILLED":r=I()(r,({filledAmount:e})=>e.toNumber());break;case"PRICE":r=I()(r,({price:e})=>e.toNumber());break;case"GOOD_TIL":r=I()(r,({expiresAtDT:e})=>e.toSeconds())}t===C.c.DECREASING&&(r=S()(r))}return r})({orders:o,sortDirection:h,sortedByKey:b,stringGetter:s}),Q=y()(o)?n.a.createElement(C.b,{emptyState:!0},s({key:$.a.ORDERS_EMPTY_STATE})):J.map(t=>n.a.createElement(k.a,{key:t.id,data:t,allMarketsData:e,awaitedCancellations:L,columns:Y,clearOrder:a,isTablet:P,onCancelOrder:V,openSidebarModal:c,tableConfig:B,selectedLocale:d,stringGetter:s}));return n.a.createElement(n.a.Fragment,null,n.a.createElement(C.d,{ref:u,isLoading:w,tableConfig:m()(B),sortableTableConfig:{sortedByKey:b,sortDirection:h,onClickTableHeader:e=>{b!==e?(g(e),A(C.c.DECREASING)):b===e&&h===C.c.DECREASING?A(C.c.INCREASING):(g(null),A(null))}}},n.a.createElement("div",{ref:T,className:z.a.tableContent},Q)))};OrdersTable.propTypes={allMarketsData:l.a.object,areKeyPairsValid:l.a.bool.isRequired,clearOrder:l.a.func.isRequired,isSidebarOpen:l.a.bool.isRequired,isWalletConnecting:l.a.bool.isRequired,openSidebarModal:l.a.func.isRequired,orders:l.a.array,selectedLocale:l.a.string.isRequired,stringGetter:l.a.func.isRequired};var B=Object(s.c)(Object(c.c)(e=>({allMarketsData:Object(w.a)(e),areKeyPairsValid:Object(G.a)(e),isSidebarOpen:Object(M.b)(e),isWalletConnecting:Object(K.e)(e),orders:Object(P.a)(e),selectedLocale:Object(v.c)(e)}),e=>Object(_.b)({clearOrder:D.b,openSidebarModal:L.d},e))(OrdersTable));const PortfolioOrders=({stringGetter:e})=>{const t=Object(c.f)(M.b),a=Object(p.b)().isTablet;return n.a.createElement("div",{className:z.a.contentWrapper},n.a.createElement("div",{className:z.a.contentContainer},n.a.createElement(T.a,{contentRight:!a&&n.a.createElement(u.a,null),title:n.a.createElement("div",{className:d()({[z.a.sidebarCollapsed]:!t,[z.a.sidebarOpen]:t})},e({key:$.a.ORDERS}))}),n.a.createElement("div",{className:d()(z.a.tableContainer,{[z.a.sidebarCollapsed]:!t,[z.a.sidebarOpen]:t})},n.a.createElement(B,null))))};PortfolioOrders.propTypes={stringGetter:l.a.func.isRequired};t.default=Object(s.c)(PortfolioOrders)}}]);