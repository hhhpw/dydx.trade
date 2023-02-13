(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{1724:function(e,a,t){"use strict";var r=t(0),n=t.n(r),l=t(9),i=t(68),o=t(75),c=t(1),s=t(77);function _extends(){return(_extends=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,a){if(null==e)return{};var t,r,n=function _objectWithoutPropertiesLoose(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}a.a=e=>{let a=e.href,t=e.shouldTrackClick,r=void 0===t||t,l=_objectWithoutProperties(e,["href","shouldTrackClick"]);const m=Object(i.u)();return n.a.createElement(n.a.Fragment,null," ",n.a.createElement(d.LearnMoreLink,_extends({rel:"noopener noreferrer",href:a,target:"_blank"},l,{onClick:()=>{r&&s.a.trackEvent(o.a.ExternalLinkClicked,{linkClicked:a,isLearnMore:!0})}}),m({key:c.a.LEARN_MORE})))};const d={};d.LearnMoreLink=l.c.a`
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
`},1727:function(e,a,t){"use strict";t.d(a,"a",(function(){return j}));var r=t(225),n=t.n(r),l=t(242),i=t.n(l),o=t(594),c=t.n(o),s=t(0),d=t.n(s),m=t(2),u=t.n(m),p=t(16),g=t.n(p),b=t(68),E=t(15),h=t(127),f="_1jjz_0ocJ5wcZ5nulY2J0L",y="_3YlixFtU499GCZvDJUid8d",v="_3OXfoeCGO4u8et1lby3Ucl",_="H-iVjhhc8OeS3lFFk5h_3",x="PluY6rJkaBpe7xscE037V",k="_10EZoMzaJseemQzPYW0fHF",O="_1tyMMbYVAovuYXMLE5LQ",N="_3xSwQvHnQtWIKf8WggR8YV",T="_1-KqpgU2ty0lNdX21KbY9d",w="_1nQhXs4RT0NWUboVv3zIcl",R="_1bxkDjwOPHHHDXpNZX2mqT",A="_3fgw1qUuoju6zA4_-K6gYN",S="_3VjP7pBlavphsZxq2sfS3E",I="_2XqqS_zzMiQDtcTRJBlRk0",C="_2u4lG8BRK-ofyihqi2Padd",L="Rg4vuAZCokNeR-8JfK-ql";function _slicedToArray(e,a){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,a){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,n,l=[],i=!0,o=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(l.push(r.value),!a||l.length!==a);i=!0);}catch(c){o=!0,n=c}finally{try{i||null==t.return||t.return()}finally{if(o)throw n}}return l}(e,a)||function _unsupportedIterableToArray(e,a){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,a)}(e,a)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}const DropdownMenu=({autoHeight:e,className:a,dropdownMenuItems:t,isMenuOpen:r,backgroundLighter:l,expandedView:o,fixedHeight:m,noFixedItemHeight:u,onChangeSelection:p,selectedItemKey:j,setIsMenuOpen:D})=>{const P=d.a.useRef(null),M=_slicedToArray(Object(s.useState)(!1),2),W=M[0],q=M[1],H=c()(r)?W:r,F=c()(r)?q:D;Object(b.i)({onClickOutside:()=>F(!1),ref:P});const U=i()(t,({key:e})=>e===j);return d.a.createElement("div",{ref:P,className:g()(f,{[y]:H&&!o,[v]:o})},!o&&d.a.createElement("button",{type:"button",onClick:()=>F(!H),className:g()(_,{[y]:H,[x]:l},a)},U&&d.a.createElement("div",{className:A},U.icon&&d.a.createElement("div",{className:g()(S,{[C]:U.iconUsesFill,[I]:U.iconUsesStroke})},U.icon),U.label,U.tag&&d.a.createElement(h.a,{backgroundLight:!0,marginLeft:!0},U.tag)),d.a.createElement(E.Ib,null)),d.a.createElement("div",{className:g()(k,{[y]:H||o,[O]:e,[v]:o,[N]:m})},n()(t,({key:e,label:a,icon:t,iconUsesFill:r,iconUsesStroke:n,tag:l,menuOnlyDetail:i})=>d.a.createElement("div",{key:e,role:"button",tabIndex:0,className:g()(T,{[R]:u}),onClick:a=>{e!==j&&p(e,a),F(!1)}},t&&d.a.createElement("div",{className:g()(S,{[C]:r,[I]:n})},t),a,l&&d.a.createElement(h.a,{marginLeft:!0,className:w},l),i&&d.a.createElement("div",{className:L},i)))))};DropdownMenu.propTypes={autoHeight:u.a.bool,backgroundLighter:u.a.bool,className:u.a.string,dropdownMenuItems:u.a.arrayOf(u.a.shape({key:u.a.string.isRequired,label:u.a.oneOfType([u.a.string,u.a.node]).isRequired,icon:u.a.node,iconUsesStroke:u.a.bool,iconUsesFill:u.a.bool,disabled:u.a.bool,tag:u.a.string})).isRequired,expandedView:u.a.bool,fixedHeight:u.a.bool,isMenuOpen:u.a.bool,noFixedItemHeight:u.a.bool,onChangeSelection:u.a.func.isRequired,selectedItemKey:u.a.string.isRequired,setIsMenuOpen:u.a.func};var j=DropdownMenu},1731:function(e,a,t){"use strict";t.d(a,"a",(function(){return g}));var r=t(0),n=t.n(r),l=t(2),i=t.n(l),o=t(9),c=t(17),s=t(19);const SectionHeader=({cardPadding:e,className:a,contentRight:t,isSidebarOpen:r,title:l,subtitle:i})=>n.a.createElement(d,{cardPadding:e,className:a,isSidebarOpen:r},n.a.createElement(m,null,n.a.createElement(u,null,l),i&&n.a.createElement(p,null,i)),t),d=o.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  max-width: calc(var(--page-content-max-width) + var(--sidebar-width));
  gap: 1em;

  @media ${c.a.tablet} {
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${({cardPadding:e,isSidebarOpen:a})=>a?`\n          @media (max-width: calc(${s.m}px + ${s.q}px)) {\n            padding-left: ${e?"36px":"24px"};\n            padding-right: ${e?"36px":"24px"};\n\n            @media ${c.a.tablet} {\n              padding-left: ${e?"32px":"20px"};\n              padding-right: ${e?"32px":"20px"};\n            }\n          }\n        `:`\n          @media (max-width: calc(${s.m}px + ${s.p}px)) {\n            padding-left: 24px;\n            padding-right: 24px;\n\n            @media ${c.a.tablet} {\n              padding-left: 20px;\n              padding-right: 20px;\n            }\n          }\n        `}
`,m=o.c.div`
  @media ${c.a.notTablet} {
    padding-right: 20px;
  }
`,u=o.c.h2`
  ${c.e.size20};
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-light);
  white-space: nowrap;
  overflow: auto;
  ${c.g}

  @media ${c.a.tablet} {
    ${c.e.size24};
  }
`,p=o.c.h3`
  ${c.e.size14}
  color: var(--color-text-dark);
  margin-top: 4px;

  @media ${c.a.tablet} {
    ${c.e.size16}
  }
`;SectionHeader.propTypes={cardPadding:i.a.bool,className:i.a.string,contentRight:i.a.node,isSidebarOpen:i.a.bool,title:i.a.node.isRequired,subtitle:i.a.node};var g=SectionHeader},1764:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var r=t(0),n=t.n(r),l=t(2),i=t.n(l),o=t(9);const LoadingBar=({height:e,width:a,fullWidth:t})=>n.a.createElement(s,{style:{height:e+"px",width:t?"100%":a+"px"}}),c=o.d`
   from {
        left: -150%;
    }
    to   {
        left: 150%;
    }
`,s=o.c.div`
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
    animation: 1.5s ${c} ease-in-out infinite;
    opacity: 0.5;

    background: linear-gradient(
      270deg,
      var(--color-layer-lighter) 0%,
      var(--color-loading-bar-shine) 50%,
      var(--color-layer-lighter) 100%
    );
  }
`;LoadingBar.propTypes={height:i.a.number,width:i.a.number,fullWidth:i.a.number};var d=LoadingBar},1788:function(e,a,t){"use strict";t.d(a,"a",(function(){return E})),t.d(a,"b",(function(){return f})),t.d(a,"c",(function(){return U})),t.d(a,"d",(function(){return pe})),t.d(a,"e",(function(){return ke}));var r=t(0),n=t.n(r),l=t(2),i=t.n(l),o=t(15),c="_1B4wL3JOihwk9dGA5O5NuW",s="_3hUgKpaONcfLYgEkfqRLxi",d="_263QR8K8-lcBtNoItTaff_",m="AHBL-Hc_poE6CIFmY04rs",u="_3YJ7qDm9ViJclYiBGZvRH",p="_2x57GqqofafjvmCa8D6NAU",g="_1jLm7xj6YleU_LcgqQ9RVm",b="_2WDa5ftgP3WAABIKeEQqT8";const BasicCard=({body:e,cta:a,href:t,onClick:r,onClickClose:l,onClickSecondary:i,secondaryLink:E,title:h})=>{let f;a&&E&&i?f=n.a.createElement("div",{className:g},n.a.createElement("div",{className:d},a),n.a.createElement("div",{role:"button",tabIndex:0,onClick:e=>{e.stopPropagation(),i()},className:b},E)):a&&(f=n.a.createElement("div",{className:d},a));const y=n.a.createElement(n.a.Fragment,null,n.a.createElement("img",{src:"/promotion-card-bg.png",alt:""}),n.a.createElement("div",{className:m},n.a.createElement("div",null,n.a.createElement("div",{className:u},h),e&&n.a.createElement("div",{className:p},e)),n.a.createElement("div",{role:"button",tabIndex:0,className:s,onClick:e=>{e.stopPropagation(),null===l||void 0===l||l(e)}},n.a.createElement(o.q,null)),f));return t?n.a.createElement("a",{className:c,href:t,rel:"noopener noreferrer",target:"_blank"},y):n.a.createElement("div",{role:"button",tabIndex:0,className:c,onClick:e=>{null===r||void 0===r||r(e)}},y)};BasicCard.propTypes={body:i.a.oneOfType([i.a.string,i.a.node]),cta:i.a.oneOfType([i.a.string,i.a.node]),href:i.a.string,onClick:i.a.func,onClickClose:i.a.func.isRequired,onClickSecondary:i.a.func,secondaryLink:i.a.oneOfType([i.a.string,i.a.node]),title:i.a.oneOfType([i.a.string,i.a.node]).isRequired};var E=BasicCard,h="_2FQu15B79JIdiVb6IND03I";const CardContainer=({children:e})=>n.a.createElement("div",{className:h},e);CardContainer.propTypes={children:i.a.oneOfType([i.a.arrayOf(i.a.node),i.a.node]).isRequired};var f=CardContainer,y=t(10),v=t(25),_=t(91),x=t(16),k=t.n(x),O=t(32),N=t(282),T=t(601),w=t(62),R=t(69),A=t(76),S=t(1),I=t(8),C=t(606),L="_1Axo_N5kKxLRAual1KpMfF",j="_10vGk_58-h8lDvuP9s2Rza",D="_1nBUxeVo2jX78ZE-kcrFMR",P="_31ATDjMfglvGXbkkH3Cr2D",M="Kgo2BLgw8UW8wS27vWL4O",W="_2j7PyFB2SVrdYVYrkSl8Sf",q="_1cVFzVkFt2aMV7Pl29CiTF",H="radtW4UZrwHV6-1H5JVj7",F="RX_00qsoYhBRJQ6U9bKJc";const NewMarketCard=({allMarketsData:e,history:a,market:t,onClickClose:r,stringGetter:l})=>{const i=R.c[t],d=i.baseSymbol,u=i.route;if(!e)return null;const p=e[t],g=p.indexPrice,b=p.priceChange24H,E=Object(C.a)({indexPrice:g,priceChange24H:b});return n.a.createElement("div",{role:"button",tabIndex:0,className:c,onClick:()=>a.push(u)},n.a.createElement("img",{src:"/promotion-card-bg.png",alt:""}),n.a.createElement("div",{className:m},n.a.createElement("div",{className:L},n.a.createElement(N.a,{huge:!0,symbol:d}),n.a.createElement("div",{className:j},l({key:S.a.MARKET_NOW_LIVE,params:{SYMBOL:d}})," ","\u2192",n.a.createElement("div",{className:D},t))),n.a.createElement("div",{className:P},n.a.createElement("div",{className:M},n.a.createElement(_.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:Object(I.b)(g).toFixed(A.h)})),E&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:k()(W,{[q]:E.gt(0),[H]:E.lt(0)})},n.a.createElement(T.a,{marginRight:!0,positive:E.gt(0),negative:E.lt(0)}),n.a.createElement(_.a,{thousandSeparator:!0,displayType:"text",suffix:"%",value:E.abs().times(100).toFixed(A.d)}),n.a.createElement("div",{className:F},l({key:S.a.TODAY}))))),n.a.createElement("div",{role:"button",tabIndex:0,className:s,onClick:e=>{e.stopPropagation(),r&&r(e)}},n.a.createElement(o.q,null))))};NewMarketCard.propTypes={allMarketsData:i.a.object,history:i.a.object.isRequired,market:i.a.string.isRequired,onClickClose:i.a.func.isRequired,stringGetter:i.a.func.isRequired};var U=Object(O.c)(Object(v.i)(Object(y.c)(e=>({allMarketsData:Object(w.a)(e)}))(NewMarketCard))),$=t(9),V=t(17),B=t(36);const ProgressBarCard=({backgroundLight:e,ctaConfig:a,progress:t,progressBarLabels:{topLeft:r,topRight:l,bottomLeft:i,bottomRight:o},title:c})=>n.a.createElement(G,{backgroundLight:e},n.a.createElement(Y,null,n.a.createElement(z,null,n.a.createElement(K,null,c))),a?n.a.createElement(X,null,n.a.createElement(B.a,{color:B.b.Purple,onClick:a.onClick,size:B.d.Large},a.label)):n.a.createElement("div",null,(r||l)&&n.a.createElement(Q,null,r&&n.a.createElement(ee,null,r),l&&n.a.createElement(ae,null,l)),n.a.createElement(te,{backgroundLight:e},n.a.createElement(re,{progressComplete:t>=1,style:{width:100*t+"%"}})),(i||o)&&n.a.createElement(Z,null,i&&n.a.createElement(ee,null,i),o&&n.a.createElement(ae,null,o)))),G=$.c.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: auto;
  min-height: 160px;
  width: 100%;
  padding: 24px;
  border-radius: 12px;

  background-color: ${({backgroundLight:e})=>e?"var(--color-layer-light)":"var(--color-layer-dark)"};

  @media ${V.a.tablet} {
    height: auto;
    min-height: auto;
  }
`,Y=$.c.div`
  display: flex;
`,z=$.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`,K=$.c.div`
  ${V.e.size20}
  color: var(--color-text-base);
`,X=$.c.div`
  margin-top: 16px;
`,J=$.c.div`
  ${V.e.size15};
  display: flex;
  justify-content: space-between;
  letter-spacing: 0;
  margin-top: 16px;

  @media ${V.a.tablet} {
    ${V.e.size16}
  }
`,Q=Object($.c)(J)`
  margin-bottom: 0.75rem;
`,Z=Object($.c)(J)`
  margin-top: 0.75rem;
`,ee=$.c.div`
  color: var(--color-text-light);
`,ae=$.c.div`
  color: var(--color-text-dark);
  margin-left: auto;
`,te=$.c.div`
  display: flex;
  width: 100%;
  height: 0.375rem;
  border-radius: 0.1875rem;

  background-color: ${({backgroundLight:e})=>e?"var(--color-layer-dark)":"var(--color-layer-light)"};
`,re=$.c.div`
  height: 100%;
  border-radius: 0.1875rem;

  background-color: ${({progressComplete:e})=>e?"var(--color-green)":"var(--color-purple)"};
`;ProgressBarCard.propTypes={backgroundLight:i.a.bool,ctaConfig:i.a.shape({label:i.a.string.isRequired,onClick:i.a.func.isRequired}),progress:i.a.number,progressBarLabels:i.a.shape({topLeft:i.a.node,topRight:i.a.node,bottomLeft:i.a.node,bottomRight:i.a.node}),title:i.a.string};var ne=t(1764),le="_2BjktWWGiRZAhOUqUZAkRC",ie="ztgkdSEhLGLxd1d9UN9Ma",oe="_3h5zRlHLV03kGfP2iNitB1",ce="_2byAEzkzJNKvW1jro4nw-k",se="wQFUPgQTVVHEUviOKrEVS",de="p5yLt3vvWe5hKqTc3AN0T",me="_1e48lgAEUAz2yiICFTDRfn",ue="EpMZt6WeBms4GR45nRrj1";const SingleStatCard=({className:e,title:a,tooltip:t,tooltipOnClick:r,value:l,label:i,isLoading:c})=>n.a.createElement("div",{className:k()(le,e)},n.a.createElement("div",{className:ie},n.a.createElement("div",{className:oe},n.a.createElement("div",{className:ce},a),(t||r)&&(r?n.a.createElement("div",{className:se,role:"button",tabIndex:0,onClick:r},n.a.createElement(o.sb,null)):n.a.createElement("div",{className:de},n.a.createElement(o.sb,null))))),n.a.createElement("div",{className:me},c?n.a.createElement(ne.a,{height:32,width:80}):l,i&&n.a.createElement("div",{className:ue},i)));SingleStatCard.propTypes={className:i.a.string,title:i.a.node.isRequired,tooltip:i.a.string,tooltipOnClick:i.a.func,value:i.a.node.isRequired,label:i.a.node.isRequired,isLoading:i.a.bool};var pe=SingleStatCard,ge=t(225),be=t.n(ge),Ee="_1Ibyyy2IhOyL2Wlksf9bcq",he="X4_LCi_lrvXughStFMV1N",fe="_1kl0DwwBV98bkTdtovB64P",ye="_1Snwe1LCtr0-vw0mHOPD4e",ve="_3vbKawxozR5_PUuVSToYdX",_e="_3UVJHHwrtRXPMyKTC2kJ--";const ThreeSectionCard=({mainSectionConfig:e,detailSectionsConfig:a})=>n.a.createElement("div",{className:Ee},n.a.createElement("div",{className:he},n.a.createElement("div",{className:ve},e.label),n.a.createElement("div",{className:_e},e.isLoading?n.a.createElement(ne.a,{height:20,width:40}):e.value)),n.a.createElement("div",{className:ye},be()(a,({label:e,value:a,isLoading:t})=>n.a.createElement("div",{key:e,className:fe},n.a.createElement("div",{className:ve},e),n.a.createElement("div",{className:_e},t?n.a.createElement(ne.a,{height:20,width:40}):a))))),xe={label:i.a.string.isRequired,value:i.a.node.isRequired};ThreeSectionCard.propTypes={mainSectionConfig:i.a.shape(xe),detailSectionsConfig:i.a.arrayOf(i.a.shape(xe))};var ke=ThreeSectionCard;const Oe={};Oe.WithDetailFooter=$.c.div`
  display: inline-flex;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  background-color: var(--color-layer-dark);
`,Oe.Children=$.c.div`
  @media ${V.a.desktopSmall} {
    > div {
      width: 100%;
    }
  }
`,Oe.DetailFooter=$.c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 16px 18px;
  width: 100%;
`,Oe.DisabledOverlay=$.c.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  color: var(--color-text-base);
  background: rgba(18, 18, 29, 0.8);
  user-select: none;
  cursor: not-allowed;
`},2182:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(2),i=t.n(l),o=t(10),c=t(99),s=t.n(c),d=t(91),m=t(94),u=t.n(m),p=t(66),g=t(16),b=t.n(g),E=t(9),h=t(32),f=t(15),y=t(17),v=t(68),_=t(36),x=t(282),k=t(1788),O=t(1727),N=t(1724),T=t(1764),w=t(1731),R=t(33),A=t(200),S=t(372),I=t(307),C=t(37),L=t(115),j=t(1),D=t(76),P=t(23),M=t(30),W=t(24),q=t(8),H="_1XiXzHpwlthKrrdx0A9OOi",F="aUi1962D7FLMNXDOOp_12",U="_21Qi9_GaJvFyLTGO28edOA",$="_1X6iu1VEHRgwNYopWXa2OB",V="_3l8a0Zi26zNkNE2YEqjPE-";const renderLink=(e,a)=>s.a.renderToString(n.a.createElement("a",{className:V,href:a,target:"_blank",rel:"noopener noreferrer"},e)),FormulaCard=({stringGetter:e})=>n.a.createElement("div",{className:H},n.a.createElement("div",{className:F},n.a.createElement("div",{className:U},e({key:j.a.HOW_DO_DYDX_REWARDS_WORK})),n.a.createElement("div",{className:$},n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e({key:j.a.EPOCH_DISTRIBUTION_DESCRIPTION,params:{AMOUNT:"2,876,712",SYMBOL:s.a.renderToString(n.a.createElement(B.AssetImg,{alt:"",src:"/currencies/dydx.svg"}))}})}}),n.a.createElement("br",null),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e({key:j.a.REWARDS_CLAIMABLE,params:{DYDX_COMMUNITY:renderLink("dydx.community","https://dydx.community"),DYDX_FOUNDATION:renderLink("dYdX Foundation","https://dydx.foundation")}})}}))),n.a.createElement(B.ButtonContainer,null,n.a.createElement(_.a,{link:!0,color:_.b.Lighter,href:"https://docs.dydx.community/dydx-governance/rewards/trading-rewards"},e({key:j.a.LEARN_MORE}),n.a.createElement(B.LinkOutIcon,null)))),B={};B.ButtonContainer=E.c.div`
  display: flex;
`,B.LinkOutIcon=Object(E.c)(f.W)`
  path {
    stroke: var(--color-text-base);
  }

  margin-left: 2px;
`,B.AssetImg=E.c.img`
  width: 18px;
  height: 18px;
  margin-bottom: -4px;

  @media ${y.a.tablet} {
    width: 20px;
    height: 20px;
    margin-bottom: -4px;
  }
`,FormulaCard.propTypes={stringGetter:i.a.func.isRequired};var G=Object(h.c)(FormulaCard),Y="_3WdPcImWhZCQRrwBm5dxEA",z="_2Cio-FGyj6mjSizJuILgyR",K="_39cJPtFfOW3DzMYSY7l4fH",X="_8A-iiQ-8UrA9jmeegv-P0",J="_2V7ae2upoAd9x63n5yeiV1",Q="_2ViyweUwKhj9G2kRKxPcqT",Z="_3oKAYQAQlkCRjvmCG96j__",ee="_3rIN6txmcbAmmgSRYtb6IW",ae="_3ValcWsrcxdybXC8G8RkL5",te="J8YHCWJB3T_mpIG4ibF1x",re="_1VgIus9Ccu8Ik_m-C8uFCB",ne="_2jPbNO-r5Wq7NN_j3C06Qq";function asyncGeneratorStep(e,a,t,r,n,l,i){try{var o=e[l](i),c=o.value}catch(s){return void t(s)}o.done?a(c):Promise.resolve(c).then(r,n)}function _asyncToGenerator(e){return function(){var a=this,t=arguments;return new Promise((function(r,n){var l=e.apply(a,t);function _next(e){asyncGeneratorStep(l,r,n,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(l,r,n,_next,_throw,"throw",e)}_next(void 0)}))}}function _slicedToArray(e,a){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,a){var t=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==t)return;var r,n,l=[],i=!0,o=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(l.push(r.value),!a||l.length!==a);i=!0);}catch(c){o=!0,n=c}finally{try{i||null==t.return||t.return()}finally{if(o)throw n}}return l}(e,a)||function _unsupportedIterableToArray(e,a){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return _arrayLikeToArray(e,a)}(e,a)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}const PortfolioRewards=({stringGetter:e})=>{const a=_slicedToArray(Object(r.useState)(),2),t=a[0],l=a[1];Object(v.o)();const i=Object(o.e)(),c=Object(o.f)(L.a,o.d),m=Object(o.f)(S.b),g=Object(o.f)(C.e),E=Object(o.f)(I.a,o.d),h=Object(o.f)(I.b,o.d),y=Object(v.b)().isTablet,O=E.estimatedRewards,H=h.tradingRewardsByEpoch,F=h.latestEpoch;Object(r.useEffect)(()=>{F&&l(String(F))},[F]),Object(r.useEffect)(_asyncToGenerator((function*(){if(t&&!H[t]&&c)try{const e=yield M.c.getTradingRewardsData({epoch:t});if(i(Object(A.b)({tradingRewards:e,isLatestEpoch:!1})),"0"===t){const e=yield M.c.getRetroactiveRewardsData();i(Object(A.a)(e))}}catch(e){W.b.notify({error:e,location:W.a.GET_REWARDS_DATA})}})),[t]);const U=[];for(let r=F;r>=0;r-=1)U.push({key:""+r,label:e({key:j.a.EPOCH_NUMBER,params:{EPOCH_NUMBER:r}})});const $=H[t]||{},V=$.estimatedRewards,B=$.fees,ie=$.openInterest,oe=(H[F]||{}).epochEnd,ce=Object(v.d)({futureDateISO:oe,stringGetter:e}).value,se=g||c&&!V,de=g||c&&!O;return n.a.createElement("div",{className:Y},n.a.createElement("div",{className:z},n.a.createElement("div",{className:K},n.a.createElement("div",{className:b()(X,{[J]:!m,[Q]:m})},n.a.createElement("div",{className:Z},n.a.createElement("div",null,n.a.createElement("div",{className:ee},e({key:j.a.REWARDS_NOT_PROVIDED})),n.a.createElement("div",{className:ae},n.a.createElement("span",{dangerouslySetInnerHTML:{__html:e({key:j.a.REWARDS_MADE_AVAILABLE,params:{FOUNDATION_LINK:s.a.renderToString(n.a.createElement("a",{className:te,href:"https://dydx.foundation",target:"_blank",rel:"noopener noreferrer"},"dYdX Foundation"))}})}}))),n.a.createElement(_.a,{onClick:()=>i(Object(R.c)({modalType:P.a.GOVERNANCE_LINK})),size:_.d.Large},e({key:j.a.GOVERNANCE}),n.a.createElement("div",{className:re},n.a.createElement(f.W,null))))),n.a.createElement(le.TradingRewardTitleContainer,null,n.a.createElement(w.a,{cardPadding:!0,isSidebarOpen:m,title:e({key:j.a.TRADING_DATA}),subtitle:n.a.createElement(n.a.Fragment,null,e({key:j.a.TRADING_DATA_DESCRIPTION}),n.a.createElement(N.a,{href:"https://docs.dydx.community/dydx-governance/rewards/trading-rewards"}))}),c&&n.a.createElement(le.EpochSelector,null,n.a.createElement(le.EpochSelectorLabel,null,"View data for"),F&&t?n.a.createElement(le.DropdownMenu,{backgroundLighter:!0,selectedItemKey:t,onChangeSelection:e=>{l(e)},dropdownMenuItems:U}):n.a.createElement(T.a,{height:y?54:40,width:y?150:115}))),n.a.createElement("div",{className:b()(X,{[J]:!m,[Q]:m})},n.a.createElement(k.b,null,n.a.createElement(k.d,{title:e({key:j.a.FEES_PAID}),value:null!==B&&void 0!==B&&B.feesPaid?n.a.createElement(d.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:Object(q.b)(B.feesPaid).toFixed(D.h)}):"-",label:e({key:j.a.IN_THIS_EPOCH}),isLoading:se}),t<=13&&n.a.createElement(k.d,{title:e({key:j.a.AVERAGE_OPEN_INTEREST}),value:null!==ie&&void 0!==ie&&ie.averageOpenInterest?n.a.createElement(d.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:Object(q.b)(ie.averageOpenInterest).toFixed(D.h)}):"-",label:e({key:j.a.IN_THIS_EPOCH}),isLoading:se}),n.a.createElement(k.d,{title:e({key:j.a.ESTIMATED_REWARDS}),value:V?n.a.createElement("div",{className:ne},n.a.createElement(d.a,{thousandSeparator:!0,displayType:"text",value:Object(q.b)(V).toFixed(D.g)}),n.a.createElement(x.a,{large:!0,symbol:"DYDX"})):"-",label:e({key:j.a.ESTIMATED_FOR_THIS_EPOCH}),isLoading:se}),t===String(F)&&n.a.createElement(k.d,{title:e({key:j.a.COUNTDOWN}),value:ce||"-",label:n.a.createElement(le.SpanWithBaseEmbed,{dangerouslySetInnerHTML:{__html:e({key:j.a.UNTIL_NEXT_EPOCH_ON_DATE,params:{NEXT_EPOCH_DATE:s.a.renderToString(n.a.createElement("span",null,oe?p.DateTime.fromISO(oe).toFormat("MMMM dd"):"-"))}})}}),isLoading:se||c&&!ce}),"0"===t&&n.a.createElement(k.d,{title:e({key:j.a.RETROACTIVE_REWARDS}),value:O?n.a.createElement("div",{className:ne},n.a.createElement(d.a,{thousandSeparator:!0,displayType:"text",value:u.a.max(Object(q.b)(O),0).toFixed(D.g)}),n.a.createElement(x.a,{large:!0,symbol:"DYDX"})):"-",label:e({key:j.a.ESTIMATED_UNLOCKED_REWARDS}),isLoading:de}))),n.a.createElement(w.a,{cardPadding:!0,isSidebarOpen:m,title:e({key:j.a.ABOUT_TRADING_DATA}),subtitle:e({key:j.a.ABOUT_TRADING_DATA_DESCRIPTION})}),n.a.createElement("div",{className:b()(X,{[J]:!m,[Q]:m})},n.a.createElement(G,null)))))},le={};le.StakedBalanceSpan=E.c.span`
  color: var(--color-text-base);
  margin: 0 4px;
`,le.AssetIcon=Object(E.c)(x.a)`
  margin-left: 4px;
  margin-top: 1px;
`,le.SpanWithAssetIcon=E.c.span`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
`,le.SpanWithBaseEmbed=E.c.span`
  > span {
    color: var(--color-text-base);
  }
`,le.TradingRewardTitleContainer=E.c.div`
  display: flex;
  flex-direction: row;

  @media ${y.a.tablet} {
    flex-direction: column;
  }
`,le.EpochSelector=E.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: auto;
  margin-right: 24px;

  @media ${y.a.tablet} {
    margin-left: 32px;
    margin-bottom: 18px;
    margin-right: 0;
  }
`,le.EpochSelectorLabel=E.c.span`
  ${y.e.size14}
  color: var(--color-text-dark);
  margin-right: 12px;
  white-space: nowrap;

  @media ${y.a.tablet} {
    ${y.e.size16}
  }
`,le.DropdownMenu=Object(E.c)(O.a)`
  min-width: 115px;
  white-space: nowrap;

  @media ${y.a.tablet} {
    min-width: 150px;
  }
`,PortfolioRewards.propTypes={stringGetter:i.a.func.isRequired};a.default=Object(h.c)(PortfolioRewards)}}]);