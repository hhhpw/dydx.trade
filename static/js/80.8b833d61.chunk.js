(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{1727:function(e,t,a){"use strict";a.d(t,"a",(function(){return L}));var n=a(225),r=a.n(n),i=a(242),l=a.n(i),o=a(594),d=a.n(o),c=a(0),s=a.n(c),p=a(2),u=a.n(p),g=a(16),m=a.n(g),x=a(68),h=a(15),y=a(127),f="_1jjz_0ocJ5wcZ5nulY2J0L",b="_3YlixFtU499GCZvDJUid8d",v="_3OXfoeCGO4u8et1lby3Ucl",w="H-iVjhhc8OeS3lFFk5h_3",E="PluY6rJkaBpe7xscE037V",k="_10EZoMzaJseemQzPYW0fHF",$="_1tyMMbYVAovuYXMLE5LQ",S="_3xSwQvHnQtWIKf8WggR8YV",_="_1-KqpgU2ty0lNdX21KbY9d",A="_1nQhXs4RT0NWUboVv3zIcl",T="_1bxkDjwOPHHHDXpNZX2mqT",I="_3fgw1qUuoju6zA4_-K6gYN",O="_3VjP7pBlavphsZxq2sfS3E",C="_2XqqS_zzMiQDtcTRJBlRk0",H="_2u4lG8BRK-ofyihqi2Padd",j="Rg4vuAZCokNeR-8JfK-ql";function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,i=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(d){o=!0,r=d}finally{try{l||null==a.return||a.return()}finally{if(o)throw r}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}const DropdownMenu=({autoHeight:e,className:t,dropdownMenuItems:a,isMenuOpen:n,backgroundLighter:i,expandedView:o,fixedHeight:p,noFixedItemHeight:u,onChangeSelection:g,selectedItemKey:L,setIsMenuOpen:R})=>{const G=s.a.useRef(null),N=_slicedToArray(Object(c.useState)(!1),2),M=N[0],D=N[1],z=d()(n)?M:n,P=d()(n)?D:R;Object(x.i)({onClickOutside:()=>P(!1),ref:G});const U=l()(a,({key:e})=>e===L);return s.a.createElement("div",{ref:G,className:m()(f,{[b]:z&&!o,[v]:o})},!o&&s.a.createElement("button",{type:"button",onClick:()=>P(!z),className:m()(w,{[b]:z,[E]:i},t)},U&&s.a.createElement("div",{className:I},U.icon&&s.a.createElement("div",{className:m()(O,{[H]:U.iconUsesFill,[C]:U.iconUsesStroke})},U.icon),U.label,U.tag&&s.a.createElement(y.a,{backgroundLight:!0,marginLeft:!0},U.tag)),s.a.createElement(h.Ib,null)),s.a.createElement("div",{className:m()(k,{[b]:z||o,[$]:e,[v]:o,[S]:p})},r()(a,({key:e,label:t,icon:a,iconUsesFill:n,iconUsesStroke:r,tag:i,menuOnlyDetail:l})=>s.a.createElement("div",{key:e,role:"button",tabIndex:0,className:m()(_,{[T]:u}),onClick:t=>{e!==L&&g(e,t),P(!1)}},a&&s.a.createElement("div",{className:m()(O,{[H]:n,[C]:r})},a),t,i&&s.a.createElement(y.a,{marginLeft:!0,className:A},i),l&&s.a.createElement("div",{className:j},l)))))};DropdownMenu.propTypes={autoHeight:u.a.bool,backgroundLighter:u.a.bool,className:u.a.string,dropdownMenuItems:u.a.arrayOf(u.a.shape({key:u.a.string.isRequired,label:u.a.oneOfType([u.a.string,u.a.node]).isRequired,icon:u.a.node,iconUsesStroke:u.a.bool,iconUsesFill:u.a.bool,disabled:u.a.bool,tag:u.a.string})).isRequired,expandedView:u.a.bool,fixedHeight:u.a.bool,isMenuOpen:u.a.bool,noFixedItemHeight:u.a.bool,onChangeSelection:u.a.func.isRequired,selectedItemKey:u.a.string.isRequired,setIsMenuOpen:u.a.func};var L=DropdownMenu},1731:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),i=a(2),l=a.n(i),o=a(9),d=a(17),c=a(19);const SectionHeader=({cardPadding:e,className:t,contentRight:a,isSidebarOpen:n,title:i,subtitle:l})=>r.a.createElement(s,{cardPadding:e,className:t,isSidebarOpen:n},r.a.createElement(p,null,r.a.createElement(u,null,i),l&&r.a.createElement(g,null,l)),a),s=o.c.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 16px;
  max-width: calc(var(--page-content-max-width) + var(--sidebar-width));
  gap: 1em;

  @media ${d.a.tablet} {
    flex-wrap: wrap;
    padding-left: 20px;
    padding-right: 20px;
  }

  ${({cardPadding:e,isSidebarOpen:t})=>t?`\n          @media (max-width: calc(${c.m}px + ${c.q}px)) {\n            padding-left: ${e?"36px":"24px"};\n            padding-right: ${e?"36px":"24px"};\n\n            @media ${d.a.tablet} {\n              padding-left: ${e?"32px":"20px"};\n              padding-right: ${e?"32px":"20px"};\n            }\n          }\n        `:`\n          @media (max-width: calc(${c.m}px + ${c.p}px)) {\n            padding-left: 24px;\n            padding-right: 24px;\n\n            @media ${d.a.tablet} {\n              padding-left: 20px;\n              padding-right: 20px;\n            }\n          }\n        `}
`,p=o.c.div`
  @media ${d.a.notTablet} {
    padding-right: 20px;
  }
`,u=o.c.h2`
  ${d.e.size20};
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--color-text-light);
  white-space: nowrap;
  overflow: auto;
  ${d.g}

  @media ${d.a.tablet} {
    ${d.e.size24};
  }
`,g=o.c.h3`
  ${d.e.size14}
  color: var(--color-text-dark);
  margin-top: 4px;

  @media ${d.a.tablet} {
    ${d.e.size16}
  }
`;SectionHeader.propTypes={cardPadding:l.a.bool,className:l.a.string,contentRight:l.a.node,isSidebarOpen:l.a.bool,title:l.a.node.isRequired,subtitle:l.a.node};var m=SectionHeader},1774:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(9),l=a(17),o=a(19);const RankingHeader=({isSidebarOpen:e,src:t,tagline:a,title:n,subtitle:i})=>r.a.createElement(d.RankingHeaderContainer,{isSidebarOpen:e},r.a.createElement(d.Badge,null,t&&r.a.createElement("img",{alt:"",src:t})),r.a.createElement(d.TextContainer,null,r.a.createElement(d.TitleH1,null,n,a&&r.a.createElement(d.Tagline,null,a)),r.a.createElement(d.SubtitleSpan,null,i))),d={};d.Tagline=i.c.span`
  display: flex;
  padding: 4px 10px;
  ${l.e.size14}
  border-radius: 20px;
  background-color: var(--color-layer-lighter);
  align-items: center;
  margin: auto 0;
`,d.Badge=i.c.div`
  min-height: 80px;
  min-width: 80px;
  margin-right: 6px;

  > img {
    height: 80px;
    width: 80px;
  }
`,d.TextContainer=i.c.div`
  display: flex;
  flex-direction: column;
`,d.TitleH1=i.c.h1`
  color: var(--color-text-light);
  ${l.e.size26}
  display: flex;
  flex-direction: row;
  gap: 8px;
`,d.SubtitleSpan=i.c.span`
  color: var(--color-text-dark);
  ${l.e.size15}
  margin-top: 4px;
`,d.RankingHeaderContainer=i.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 16px;

  @media ${l.a.tablet} {
    display: none;
  }

  ${({isSidebarOpen:e})=>e?`\n          @media (max-width: calc(${o.m}px + ${o.q}px)) {\n            ${d.Badge} {\n              margin-left: 12px;\n            }\n          }\n        `:`\n          @media (max-width: calc(${o.m}px + ${o.p}px)) {\n            ${d.Badge} {\n              margin-left: 12px;\n            }\n          }\n        `}
`,t.a=r.a.memo(RankingHeader)},1902:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(0),r=a.n(n),i=a(9),l=a(17),o=a(190),d=a(1),c=a(15),s=a(95);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,i=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(d){o=!0,r=d}finally{try{l||null==a.return||a.return()}finally{if(o)throw r}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}function asyncGeneratorStep(e,t,a,n,r,i,l){try{var o=e[i](l),d=o.value}catch(c){return void a(c)}o.done?t(d):Promise.resolve(d).then(n,r)}const p=function(){var e=function _asyncToGenerator(e){return function(){var t=this,a=arguments;return new Promise((function(n,r){var i=e.apply(t,a);function _next(e){asyncGeneratorStep(i,n,r,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,n,r,_next,_throw,"throw",e)}_next(void 0)}))}}((function*({hedgieId:e,setHedgieDetails:t,setIsLoadingDetails:a}){a(!0);const n=yield fetch(`https://media.dydx.exchange/hedgies/${e}.json`);t(yield n.json()),a(!1)}));return function fetchHedgieDetails(t){return e.apply(this,arguments)}}(),HedgieCard=({hedgieId:e,pillTag:t,size:a,stringGetter:i})=>{const l=_slicedToArray(Object(n.useState)(!1),2),s=l[0],g=l[1],m=_slicedToArray(Object(n.useState)(),2),x=m[0],h=m[1],y=_slicedToArray(Object(n.useState)(!1),2),f=y[0],b=y[1];return Object(n.useEffect)(()=>{!x&&s&&p({hedgieId:e,setHedgieDetails:h,setIsLoadingDetails:b})},[s]),r.a.createElement(u.HedgieCardContainer,{size:a},s?r.a.createElement(u.Details,null,r.a.createElement(u.DetailHeader,null,r.a.createElement(u.Row,null,r.a.createElement(u.CircularContainer,null,r.a.createElement("img",{alt:"",src:`https://media.dydx.exchange/hedgies/400x400/${e}.png`}))," ",e),r.a.createElement(u.Row,null,r.a.createElement(u.IconButton,{backgroundLighter:!0,icon:r.a.createElement(c.W,null),height:20,width:20,onClick:t=>{t.stopPropagation(),window.open("https://hedgies.wtf/explore/"+e,"_blank")}}),r.a.createElement(u.IconButton,{backgroundLighter:!0,icon:r.a.createElement(c.q,null),onClick:e=>{e.stopPropagation(),g(!s)}}))),f&&r.a.createElement(o.a,null),x&&!f&&r.a.createElement(u.DetailList,null,null===x||void 0===x?void 0:x.attributes.map(({trait_type:e,value:t})=>r.a.createElement(u.AttributeRow,{key:e},e,r.a.createElement(u.TraitValue,null,t)))),r.a.createElement(u.Transparency,null),r.a.createElement(u.Transparency,{top:!0})):r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{alt:"",src:`https://media.dydx.exchange/hedgies/400x400/${e}.png`}),r.a.createElement(u.About,{role:"button",tabIndex:0,onClick:()=>g(!s)},i({key:d.a.ABOUT})," ",r.a.createElement(c.R,null)),t&&r.a.createElement(u.TagContainer,null,r.a.createElement(u.Tag,{pill:!0},t))))},u={};u.Transparency=i.c.div`
  position: absolute;
  left: 16px;
  right: 16px;
  height: 16px;

  ${({top:e})=>e?i.b`
          top: 66px;
          background: linear-gradient(0deg, rgba(35, 35, 52, 0) 0%, rgba(35, 35, 52, 1) 95%);
        `:i.b`
          bottom: 16px;
          background: linear-gradient(0deg, rgba(35, 35, 52, 1) 0%, rgba(35, 35, 52, 0) 95%);
        `};
`,u.TagContainer=i.c.div`
  position: absolute;
  bottom: 14px;
  width: 100%;
  display: flex;
  justify-content: center;
`,u.Tag=i.c.div`
  border-radius: 14px;
  background-color: var(--color-layer-lighter);
  opacity: 0.8;
  ${l.e.size18}
  padding: 4px 16px;
  display: flex;
  align-items: center;
  color: var(--color-text-light);
`,u.About=i.c.span`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 24px;
  right: 24px;
  color: var(--color-text-light);
  align-items: center;
  cursor: pointer;
  ${l.e.size14}

  > svg {
    margin-left: 4px;

    path {
      fill: currentColor;
    }
  }

  @media ${l.a.tablet} {
    ${l.e.size16}

    > svg {
      margin-bottom: -2px;
    }
  }
`,u.Row=i.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`,u.CircularContainer=i.c.div`
  height: 38px;
  width: 38px;
  border-radius: 19px;
  overflow: hidden;

  img {
    height: 38px;
    width: 38px;
  }
`,u.IconButton=Object(i.c)(s.b)`
  margin-right: -4px;

  && {
    width: 38px;
    height: 38px;
    border-radius: 19px;

    svg {
      height: ${({height:e})=>e?e+"px":"16px"};
      width: ${({width:e})=>e?e+"px":"16px"};

      path {
        stroke: var(--color-text-dark);
      }
    }

    &:hover {
      background-color: var(--color-layer-lightest);

      svg path {
        stroke: var(--color-text-light);
      }
    }
  }
`,u.DetailList=i.c.div`
  display: flex;
  flex-direction: column;
  overflow: auto;
`,u.TraitValue=i.c.span`
  color: var(--color-text-light);
`,u.AttributeRow=i.c.div`
  ${l.e.size15}
  color: var(--color-text-dark);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  white-space: nowrap;

  &:not(:last-of-type) {
    border-bottom: solid 1px var(--color-border-grey);
  }
`,u.DetailHeader=i.c.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 38px;
  width: 100%;
  ${l.e.size22}
  color: var(--color-text-light);
  margin-bottom: 6px;
`,u.Details=i.c.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 22px 22px 16px;
  position: relative;
`,u.HedgieCardContainer=i.c.div`
  display: flex;
  position: relative;
  flex: 1;
  min-width: 264px;
  max-width: 264px;
  height: 264px;
  width: 264px;
  border-radius: 24px;
  overflow: hidden;
  background-color: var(--color-layer-light);

  ${({size:e})=>e&&i.b`
      min-width: ${e};
      max-width: ${e};
      height: ${e};
      width: ${e};
    `}

  &:hover {
    > img {
      opacity: 0.9;
    }
  }
`;var g=r.a.memo(HedgieCard);const m={};m.Gallery=i.c.div`
  display: flex;
  gap: 16px;
  padding: 0;

  &:first-child {
    ${({startingMargin:e})=>e&&i.b`
        margin-left: ${e};
      `}
  }

  &:last-child {
    ${({trailingMargin:e})=>e&&i.b`
        margin-right: ${e};
      `}
  }

  @media ${l.a.tablet} {
    justify-content: center;
  }
`,m.GalleryContainer=i.c.div`
  display: flex;
  width: 100%;
  position: relative;
  overflow: hidden;
  align-items: center;
`,m.GalleryContent=i.c.div`
  display: flex;
  position: relative;
  align-items: flex-start;
  flex-direction: column;
  overflow-x: auto;

  ${({isLoading:e})=>e&&`\n    align-items: center;\n\n    ${m.Gallery} {\n      padding-top: 16px;\n    }\n  `}
`;t.b=({daily:e,hedgies:t,isLoading:a,size:n,startingMargin:i,stringGetter:l,trailingMargin:c})=>r.a.createElement(m.GalleryContainer,null,r.a.createElement(m.GalleryContent,{isLoading:a},r.a.createElement(m.Gallery,{startingMargin:i,trailingMargin:c},a?r.a.createElement(o.a,null):t.map((t,a)=>r.a.createElement(g,{key:t,pillTag:e&&0===a?l({key:d.a.TODAY}):void 0,hedgieId:t,size:n,stringGetter:l})))))},2114:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(9),l=a(10),o=a(32),d=a(17),c=a(1727),s=a(1902),p=a(162),u=a(1774),g=a(1731),m=a(244),x=a(372),h=a(1),y=a(19);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==a)return;var n,r,i=[],l=!0,o=!1;try{for(a=a.call(e);!(l=(n=a.next()).done)&&(i.push(n.value),!t||i.length!==t);l=!0);}catch(d){o=!0,r=d}finally{try{l||null==a.return||a.return()}finally{if(o)throw r}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}const f={};f.HeaderContainer=i.c.div``,f.LoadingContainer=i.c.div`
  height: 40px;
  width: 124px;
  border-radius: 6px;
  background-color: var(--color-layer-lighter);

  @media ${d.a.tablet} {
    height: 54px;
  }
`,f.DropdownMenu=Object(i.c)(c.a)`
  && {
    width: 124px;

    @media ${d.a.tablet} {
      width: 170px;
    }
  }
`,f.SeasonSelectionContainer=i.c.div`
  display: flex;
  justify-content: flex-end;
`,f.HedgiesContent=i.c.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0 0 40px;
  gap: 16px;
`,f.HedgiesContainer=i.c.div`
  display: grid;
  grid-auto-rows: auto 1fr;
  padding: 32px 0 16px;

  ${({isSidebarOpen:e})=>e?`\n          @media (max-width: calc(${y.m}px + ${y.q}px)) {\n            padding: 32px 0 16px;\n\n            ${s.a.GalleryContainer} {\n              padding: 0 20px;\n            }\n\n            ${f.HeaderContainer} {\n              padding: 0 16px;\n            }\n          }\n        `:`\n          @media (max-width: calc(${y.m}px + ${y.p}px)) {\n            padding: 32px 0 16px;\n\n            ${s.a.GalleryContainer} {\n              padding: 0 20px;\n            }\n            \n            ${f.HeaderContainer} {\n              padding: 0 16px;\n            }\n          }\n        `}

  @media ${d.a.tablet} {
    padding: 0;

    ${f.GalleryContainer} {
      padding: 0 16px;
    }
  }
`,t.default=Object(o.c)(({stringGetter:e})=>{var t,a,i,o;const d=_slicedToArray(Object(n.useState)(null),2),c=d[0],y=d[1],b=Object(l.f)(x.b),v=Object(l.f)(m.a,l.d),w=Object(l.f)(m.h,l.d),E=Object(l.f)(m.i,l.d),k={},$=c===""+(null===v||void 0===v||null===(t=v.weekly)||void 0===t?void 0:t.competitionPeriod),S=[];var _;(E.forEach(({competitionPeriod:t,tokenIds:a})=>{k[t]=a,S.push({key:""+t,label:e({key:h.a.SEASON_NUM,params:{NUMBER:""+t}})})}),null!==v&&void 0!==v&&v.weekly)&&S.unshift({key:""+(null===(_=v.weekly)||void 0===_?void 0:_.competitionPeriod),label:e({key:h.a.THIS_SEASON})});const A=$?(null===v||void 0===v||null===(a=v.weekly)||void 0===a?void 0:a.tokenIds)||[]:k[Number(c)];let T=(null===v||void 0===v||null===(i=v.daily)||void 0===i?void 0:i.tokenIds)||[];const I=w.map(({tokenIds:e})=>null===e||void 0===e?void 0:e[0]);return T=T.concat(I),Object(n.useEffect)(()=>{var e;const t=null===v||void 0===v||null===(e=v.weekly)||void 0===e?void 0:e.competitionPeriod;t&&y(""+t)},[v]),r.a.createElement(f.HedgiesContainer,{isSidebarOpen:b},r.a.createElement(f.HeaderContainer,null,r.a.createElement(u.a,{isSidebarOpen:b,src:"/hedgies-logo.png",title:e({key:h.a.HEDGIES}),subtitle:e({key:h.a.EARN_AVATAR})})),r.a.createElement(f.HedgiesContent,null,(null===A||void 0===A?void 0:A.length)>0&&r.a.createElement("div",null,r.a.createElement(g.a,{cardPadding:!0,contentRight:c?r.a.createElement(f.DropdownMenu,{backgroundLighter:!0,dropdownMenuItems:S,selectedItemKey:c,onChangeSelection:e=>y(e)}):r.a.createElement(f.LoadingContainer,null,r.a.createElement(p.a,null)),isSidebarOpen:b,title:e({key:h.a.LEAGUES}),subtitle:e({key:$?h.a.THIS_SEASON_HEDGIES:h.a.PRIOR_SEASON_HEDGIES,params:{NUM:c||""}})}),r.a.createElement(s.b,{hedgies:A,stringGetter:e})),(null===(o=T)||void 0===o?void 0:o.length)>0&&r.a.createElement("div",null,r.a.createElement(g.a,{cardPadding:!0,isSidebarOpen:b,title:e({key:h.a.DAILY}),subtitle:e({key:h.a.DAILY_HEDGIES})}),r.a.createElement(s.b,{daily:!0,hedgies:T,stringGetter:e}))))})}}]);