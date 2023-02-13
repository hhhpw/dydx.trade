(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{1891:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(99),i=t.n(r),s=t(10),c=t(91),E=t(16),o=t.n(E),m=t(9),d=t(96),p=t(68),b=t(372),g=t(56),y=t(37),u=t(609),T=t(115),f=t(1),h=t(19),R=t(76),_=t(8),v=t(282),k=t(36),L=t(1724),N=t(1731),S=t(1788),A=t(1968),x=t(620),I=t(1969);const F={TIER:{stringKey:f.a.TIER,width:"10%",hideMobile:!0,alignLeft:!0},VOLUME:{stringKey:f.a.VOLUME_30D,width:"40%",mobileAlignLeft:!0},MAKER:{stringKey:f.a.MAKER,width:"25%"},TAKER:{stringKey:f.a.TAKER,width:"25%"}};var fee_structure_table=()=>{const e=Object(p.u)(),a=Object(s.f)(u.b);return n.a.createElement("div",{className:I.a.feeTable},n.a.createElement("div",{className:I.a.label},e({key:f.a.FEE_STRUCTURE})),n.a.createElement("div",{className:I.a.row},Object.values(F).map(({stringKey:a,width:t,hideMobile:l=!1,alignLeft:r=!1,mobileAlignLeft:i=!1})=>n.a.createElement("div",{key:a,className:o()(I.a.cell,{[I.a.hideMobile]:l,[I.a.alignLeft]:r,[I.a.mobileAlignLeft]:i}),style:{flexBasis:t}},e({key:a})))),x.b.map(({tier:e,volume30dLabel:t,makerFee:l,takerFee:r})=>n.a.createElement("div",{key:e,className:o()(I.a.row,I.a.body,{[I.a.highlighted]:a===e,[I.a.freeBackground]:a===e&&"Free"===e})},n.a.createElement("div",{className:o()(I.a.cell,I.a.hideMobile,I.a.alignLeft),style:{flexBasis:F.TIER.width}},n.a.createElement("span",{className:o()({[I.a.colorTeal]:"Free"===e,[I.a.colorYellow]:"VIP"===e})},e)),n.a.createElement("div",{className:o()(I.a.cell,I.a.mobileAlignLeft),style:{flexBasis:F.VOLUME.width}},n.a.createElement("span",{className:I.a.number},t)),n.a.createElement("div",{className:o()(I.a.cell,I.a.textBase,I.a.alignRightMobile),style:{flexBasis:F.MAKER.width}},n.a.createElement("span",{className:I.a.number},l)),n.a.createElement("div",{className:o()(I.a.cell,I.a.textBase,I.a.alignRightMobile),style:{flexBasis:F.TAKER.width}},n.a.createElement("span",{className:I.a.number},r)))))},D="_2xlZ-6un97wzOVEJPQ1QrQ",O="_1TWiWpkK6MfTJ2Ea6vSTav",M="_5e10HnDngn-eM3d3hYeSD",w="_1Z8NBpKXIHJemS5WnJF8p7",K="_1-4S2Bf4fw7ofecGjJufs",B=t(1732);a.default=()=>{const e=Object(p.u)(),a=Object(s.f)(T.a),t=Object(s.f)(b.b),l=Object(s.f)(y.e),r=Object(s.f)(g.g,s.d),E=r||{},m=E.hedgiesHeld,x=E.makerFeeRate,I=E.takerFeeRate,F=E.fees30D,U=E.dydxTokenBalance,G=E.stakedDydxTokenBalance,C=Object(s.f)(u.a),P=U&&Object(_.b)(U).plus(G),H=a&&!r||l;return n.a.createElement("div",{className:B.a.contentWrapper},n.a.createElement("div",{className:B.a.contentContainer},n.a.createElement(N.a,{cardPadding:!0,isSidebarOpen:t,title:e({key:f.a.FEES})}),n.a.createElement("div",{className:o()(D,{[O]:!t,[M]:t})},n.a.createElement(j.Banner,null,n.a.createElement("div",null,n.a.createElement("h2",{dangerouslySetInnerHTML:{__html:e({key:f.a.FREE_TRADING_TITLE_ASTERISK,params:{FREE_TRADING_TITLE_ASTERISK_FREE:i.a.renderToString(n.a.createElement("strong",null,e({key:f.a.FREE_TRADING_TITLE_ASTERISK_FREE})))}})}}),n.a.createElement("p",null,e({key:f.a.FREE_TRADING_DESCRIPTION_ASTERISK}),n.a.createElement(L.a,{href:"https://dydx.exchange/blog/free-trading"}))),n.a.createElement(d.a,{to:h.h},n.a.createElement(k.a,{color:k.b.Purple,size:k.d.Large},e({key:f.a.TRADE})))),n.a.createElement(S.b,null,n.a.createElement(S.e,{mainSectionConfig:{label:e({key:f.a.FEES_30D}),value:F?n.a.createElement(c.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:Object(_.b)(F).toFixed(R.h)}):"-",isLoading:H},detailSectionsConfig:[{label:e({key:f.a.MAKER_FEE}),value:x?n.a.createElement(c.a,{thousandSeparator:!0,displayType:"text",suffix:"%",value:Object(_.b)(x).times(100).toFixed(4)}):"-",isLoading:H},{label:e({key:f.a.TAKER_FEE}),value:I?n.a.createElement(c.a,{thousandSeparator:!0,displayType:"text",suffix:"%",value:Object(_.b)(I).times(100).toFixed(4)}):"-",isLoading:H}]}),n.a.createElement(S.d,{title:e({key:f.a.TRAILING_VOLUME}),value:C?n.a.createElement(c.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:C.toFixed(R.h)}):"-",label:e({key:f.a.OVER_THE_LAST_30_DAYS}),isLoading:H}),n.a.createElement(S.d,{title:n.a.createElement("div",{className:K},n.a.createElement(v.a,{medium:!0,symbol:"DYDX"}),e({key:f.a.WALLET_BALANCE})),value:P?n.a.createElement("div",{className:K},n.a.createElement(c.a,{thousandSeparator:!0,displayType:"text",value:P.toFixed(0)}),n.a.createElement(v.a,{large:!0,symbol:"DYDX"})):"-",label:e({key:f.a.CURRENTLY_HELD}),isLoading:H})),n.a.createElement("div",{className:w},n.a.createElement(fee_structure_table,null),n.a.createElement(A.a,{tokenBalance:P&&P.toNumber(),numHedgies:(null===m||void 0===m?void 0:m.length)||0})),n.a.createElement(j.Disclaimer,{dangerouslySetInnerHTML:{__html:e({key:f.a.FREE_TRADING_DISCLAIMER,params:{PERPETUAL_FUNDING:`<a href="https://help.dydx.exchange/en/articles/4797443-perpetual-funding-rate" target="_blank" rel="noopener noreferrer">${e({key:f.a.FREE_TRADING_DISCLAIMER_PERPETUAL_FUNDING})}</a>`,TERMS_OF_USE:`<a href="/terms">${e({key:f.a.TERMS_OF_USE})}</a>`}})}}))))};const j={};j.Banner=m.c.aside`
  padding: 1.5em;

  background-color: var(--color-layer-light);
  border-radius: 0.75em;

  display: flex;
  align-items: center;
  gap: 1em;
  justify-content: space-between;

  > * {
    display: grid;
    gap: 0.5em;
  }

  h2 {
    font-size: 1.1em;

    strong {
      color: var(--color-teal);
    }
  }

  p {
    color: var(--color-text-dark);
    font-size: 0.9em;
    line-height: 1.2;
  }
`,j.Disclaimer=m.c.p`
  color: var(--color-text-dark);
  font-size: 0.65em;
  line-height: 1.3;
  padding: 1.5em;

  position: sticky;
  top: 100%;

  user-select: none;

  a {
    color: var(--color-text-base);
    opacity: 0.7;
  }
`}}]);