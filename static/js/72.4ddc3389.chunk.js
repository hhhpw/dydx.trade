(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{1724:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(9),l=r(68),o=r(75),d=r(1),c=r(77);function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}function _objectWithoutProperties(e,t){if(null==e)return{};var r,a,n=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}t.a=e=>{let t=e.href,r=e.shouldTrackClick,a=void 0===r||r,i=_objectWithoutProperties(e,["href","shouldTrackClick"]);const u=Object(l.u)();return n.a.createElement(n.a.Fragment,null," ",n.a.createElement(s.LearnMoreLink,_extends({rel:"noopener noreferrer",href:t,target:"_blank"},i,{onClick:()=>{a&&c.a.trackEvent(o.a.ExternalLinkClicked,{linkClicked:t,isLearnMore:!0})}}),u({key:d.a.LEARN_MORE})))};const s={};s.LearnMoreLink=i.c.a`
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
`},1727:function(e,t,r){"use strict";r.d(t,"a",(function(){return P}));var a=r(225),n=r.n(a),i=r(242),l=r.n(i),o=r(594),d=r.n(o),c=r(0),s=r.n(c),u=r(2),p=r.n(u),m=r(16),g=r.n(m),b=r(68),y=r(15),h=r(127),v="_1jjz_0ocJ5wcZ5nulY2J0L",f="_3YlixFtU499GCZvDJUid8d",x="_3OXfoeCGO4u8et1lby3Ucl",E="H-iVjhhc8OeS3lFFk5h_3",k="PluY6rJkaBpe7xscE037V",S="_10EZoMzaJseemQzPYW0fHF",O="_1tyMMbYVAovuYXMLE5LQ",w="_3xSwQvHnQtWIKf8WggR8YV",T="_1-KqpgU2ty0lNdX21KbY9d",C="_1nQhXs4RT0NWUboVv3zIcl",$="_1bxkDjwOPHHHDXpNZX2mqT",A="_3fgw1qUuoju6zA4_-K6gYN",j="_3VjP7pBlavphsZxq2sfS3E",L="_2XqqS_zzMiQDtcTRJBlRk0",_="_2u4lG8BRK-ofyihqi2Padd",I="Rg4vuAZCokNeR-8JfK-ql";function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(d){o=!0,n=d}finally{try{l||null==r.return||r.return()}finally{if(o)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const DropdownMenu=({autoHeight:e,className:t,dropdownMenuItems:r,isMenuOpen:a,backgroundLighter:i,expandedView:o,fixedHeight:u,noFixedItemHeight:p,onChangeSelection:m,selectedItemKey:P,setIsMenuOpen:R})=>{const D=s.a.useRef(null),N=_slicedToArray(Object(c.useState)(!1),2),G=N[0],M=N[1],z=d()(a)?G:a,B=d()(a)?M:R;Object(b.i)({onClickOutside:()=>B(!1),ref:D});const U=l()(r,({key:e})=>e===P);return s.a.createElement("div",{ref:D,className:g()(v,{[f]:z&&!o,[x]:o})},!o&&s.a.createElement("button",{type:"button",onClick:()=>B(!z),className:g()(E,{[f]:z,[k]:i},t)},U&&s.a.createElement("div",{className:A},U.icon&&s.a.createElement("div",{className:g()(j,{[_]:U.iconUsesFill,[L]:U.iconUsesStroke})},U.icon),U.label,U.tag&&s.a.createElement(h.a,{backgroundLight:!0,marginLeft:!0},U.tag)),s.a.createElement(y.Ib,null)),s.a.createElement("div",{className:g()(S,{[f]:z||o,[O]:e,[x]:o,[w]:u})},n()(r,({key:e,label:t,icon:r,iconUsesFill:a,iconUsesStroke:n,tag:i,menuOnlyDetail:l})=>s.a.createElement("div",{key:e,role:"button",tabIndex:0,className:g()(T,{[$]:p}),onClick:t=>{e!==P&&m(e,t),B(!1)}},r&&s.a.createElement("div",{className:g()(j,{[_]:a,[L]:n})},r),t,i&&s.a.createElement(h.a,{marginLeft:!0,className:C},i),l&&s.a.createElement("div",{className:I},l)))))};DropdownMenu.propTypes={autoHeight:p.a.bool,backgroundLighter:p.a.bool,className:p.a.string,dropdownMenuItems:p.a.arrayOf(p.a.shape({key:p.a.string.isRequired,label:p.a.oneOfType([p.a.string,p.a.node]).isRequired,icon:p.a.node,iconUsesStroke:p.a.bool,iconUsesFill:p.a.bool,disabled:p.a.bool,tag:p.a.string})).isRequired,expandedView:p.a.bool,fixedHeight:p.a.bool,isMenuOpen:p.a.bool,noFixedItemHeight:p.a.bool,onChangeSelection:p.a.func.isRequired,selectedItemKey:p.a.string.isRequired,setIsMenuOpen:p.a.func};var P=DropdownMenu},1759:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(0),n=r.n(a),i=r(9),l=r(68),o=r(17),d=r(19);const c={};c.AbsolutePerimeter=i.c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
`,c.CardTitle=i.c.span`
  ${o.e.size14}
  color: var(--color-text-dark);
  margin-bottom: 16px;
`,c.CardLabel=i.c.span`
  ${o.e.size14}
  color: var(--color-text-dark);
  margin-top: 4px;
`,c.SingleCard=i.c.div`
  ${o.e.size28}
  color: var(--color-text-light);
  display: flex;
  justify-content: flex-start;
  padding: 0 28px;
  flex-direction: column;

  &:not(:last-child) {
    border-right: 1px solid var(--color-border-grey);
  }

  ${({hasIconComponent:e})=>e&&i.b`
      flex-direction: row;
    `}

  @media ${o.a.tablet} {
    ${o.e.size24}
  }
`,c.MobileTitle=i.c.span`
  ${o.e.size15}
  color: var(--color-text-dark);
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`,c.MobileBillboardsContainer=i.c.div`
  display: flex;
  position: relative;

  @media ${o.a.tablet} {
    ${c.SingleCard} {
      &:first-child {
        padding-left: 20px;
      }
    }
  }
`,c.LeftSideCard=i.c.span`
  display: flex;
  flex-direction: column;
  text-align: start;
  flex: 1;
`,c.BillboardsContainer=i.c.div`
  padding: 8px 0 32px;
  display: flex;
  flex-direction: row;

  ${c.SingleCard} {
    flex: 1;
    max-width: 280px;
  }

  ${({hasSidebar:e,isSidebarOpen:t})=>e&&""+(t?`\n        @media (max-width: calc(${d.m}px + ${d.q}px)) {\n          padding-left: 24px;\n          padding-right: 24px;\n\n          ${c.SingleCard} {\n            &:first-child {\n              padding-left: 0;\n            }\n          }\n        }\n      `:`\n        @media (max-width: calc(${d.m}px + ${d.p}px)) {\n          padding-left: 24px;\n          padding-right: 24px;\n\n          ${c.SingleCard} {\n            &:first-child {\n              padding-left: 0;\n            }\n          }\n      `)}
`,t.b=({billboardItems:e,hasSidebar:t,hidePerimeter:r,isSidebarOpen:a})=>{const i=Object(l.b)().isTablet;return e?i?n.a.createElement(c.MobileBillboardsContainer,null,e.map(({key:e,icon:t=null,title:r,value:a})=>n.a.createElement(c.SingleCard,{key:e,hasIconComponent:!!t},n.a.createElement(c.LeftSideCard,null,r&&n.a.createElement(c.MobileTitle,null,r),null!==a&&void 0!==a?a:"-"),t)),r&&n.a.createElement(c.AbsolutePerimeter,null)):n.a.createElement(c.BillboardsContainer,{hasSidebar:t,isSidebarOpen:a},e.map(({key:e,title:t,value:r,label:a})=>n.a.createElement(c.SingleCard,{key:e},t&&n.a.createElement(c.CardTitle,null,t),null!==r&&void 0!==r?r:"-",a&&n.a.createElement(c.CardLabel,null,a)))):null}},1763:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return SortableTable})),r.d(t,"c",(function(){return b}));var a=r(0),n=r.n(a),i=r(2),l=r.n(i),o=r(9),d=r(17),c=r(15),s=r(373);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(d){o=!0,n=d}finally{try{l||null==r.return||r.return()}finally{if(o)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const u={STRING:"STRING",NUMBER:"NUMBER"},p="INCREASING",m="DECREASING",renderDefaultHeaderCell=({columnKey:e,label:t,align:r,isSortable:a,isSorted:i,sortDirection:l,onClick:o,renderHeaderContent:d=(()=>null!==t&&void 0!==t?t:e)})=>a?n.a.createElement(g.TableCellWithSortToggle,{role:"button",tabIndex:"0",onClick:o,isSorted:i,align:r},n.a.createElement("span",null,d()),n.a.createElement(g.SortDirectionArrow,{sortDirection:l},n.a.createElement(c.c,null))):n.a.createElement(g.TableCell,{align:r},d()),renderDefaultCell=(e,t,r,a,i)=>n.a.createElement(g.TableCell,{align:a},i(e,t,r)),SortableTable=({columns:e=[],data:t=[],emptyState:r,getRowIsPinned:i,getRowIsSticky:l,getRowKey:o,getRowStyling:d,defaultSortByColumn:c,onRowClick:s,className:b,isLoading:y})=>{var h;const v={columnKey:null===c||void 0===c?void 0:c.columnKey,sortDirection:null!==(h=null===c||void 0===c?void 0:c.sortDirection)&&void 0!==h?h:(null===c||void 0===c?void 0:c.columnKey)&&p},f=_slicedToArray(Object(a.useState)(v),2),x=f[0],E=f[1];return n.a.createElement(g.TableWrapper,{className:b},n.a.createElement(g.Table,null,n.a.createElement(g.Thead,null,n.a.createElement(g.Tr,null,e.map(({key:e,label:t,isSortable:r=!1,align:a,fillWidth:i=!1,renderHeaderCell:l=renderDefaultHeaderCell,renderHeaderContent:o})=>n.a.createElement(g.Th,{key:e,align:a,fillWidth:i},l({columnKey:e,label:t,renderHeaderContent:o,align:a,isSortable:r,isSorted:x.columnKey===e,sortDirection:x.columnKey===e?x.sortDirection:void 0,onClick:r?()=>(e=>{e!==x.columnKey?E({columnKey:e,sortDirection:p}):x.sortDirection===p?E({columnKey:e,sortDirection:m}):x.sortDirection===m&&E(v)})(e):void 0}))))),(null===t||void 0===t?void 0:t.length)>0&&n.a.createElement("tbody",null,t.sort((t,r)=>{const a=x.columnKey,n=x.sortDirection===p,l=e.find(({key:e})=>a===e)||{},o=l.sortType,d=void 0===o?u.STRING:o,c=l.unsortedFirst,s=void 0===c||c,m=l.sort,g=void 0===m?(e,t)=>{const r=e[a],i=t[a];return d===u.STRING?String(r||(s===n?"":i+" ")).localeCompare(String(i||(s===n?"":r+" "))):parseFloat(null!==r&&void 0!==r?r:s?-1/0:1/0)-parseFloat(null!==i&&void 0!==i?i:s?-1/0:1/0)}:m;return null!==i&&void 0!==i&&i(t)?-1:null!==i&&void 0!==i&&i(r)?1:g(t,r)*(n?1:-1)}).map((t,r)=>n.a.createElement(g.Tr,{key:o(t,r),isPinned:null===i||void 0===i?void 0:i(t),isSticky:null===l||void 0===l?void 0:l(t),additionalStyles:null===d||void 0===d?void 0:d({idx:r,rowData:t}),onClick:s?()=>null===s||void 0===s?void 0:s(t):null},e.map(({key:e,align:a,renderCell:i=renderDefaultCell,renderContent:l=(e=>e)})=>n.a.createElement(g.Td,{key:e},i(t[e],r,t,a,l))))))),y&&n.a.createElement(g.EmptyState,null,n.a.createElement(g.LoadingSpinner,{id:"sortable-table"})),!(null!==t&&void 0!==t&&t.length)&&!y&&r&&n.a.createElement(g.EmptyState,null,r))};SortableTable.propTypes={className:l.a.string,columns:l.a.array.isRequired,data:l.a.array,defaultSortByColumn:l.a.object,emptyState:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node,l.a.string]),getRowIsPinned:l.a.func,getRowIsSticky:l.a.func,getRowKey:l.a.func.isRequired,getRowStyling:l.a.func,isLoading:l.a.bool,onRowClick:l.a.func};const g={};g.EmptyState=o.c.div`
  margin: 28px auto;
`,g.LoadingSpinner=Object(o.c)(s.a)``,g.TableWrapper=o.c.div`
  --border-radius: min(var(--master-detail-leftover-width), var(--table-max-border-radius, 12px));
  --table-header-height: 39px;
  --horizontal-padding: 16px;

  @media ${d.a.tablet} {
    --horizontal-padding: 18px;
    overflow-x: auto;
  }

  box-shadow: 0 0 0 1px var(--color-border-grey);
  border-radius: var(--border-radius);
  clip-path: inset(-1px round calc(var(--border-radius) + 1px));

  /* Extra absolute-positioned border to cover over inner "position: sticky" elements */
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    box-shadow: inherit;
    border-radius: inherit;
  }

  margin-bottom: 3rem;

  display: grid;
  grid-template-rows: auto;
  grid-auto-rows: 1fr;
  align-content: start;
  place-items: center;
  max-width: 100%;
`,g.Table=o.c.table`
  width: 100%;

  ${d.e.size13}
`,g.Thead=o.c.thead`
  color: var(--color-text-dark);
  letter-spacing: 0;
  position: sticky;
  top: 0;

  @media ${d.a.tablet} {
    ${d.e.size14}
  }
`,g.Tr=o.c.tr`
  ${({isSticky:e})=>e&&o.b`
      position: sticky;
      top: var(--table-header-height);
      bottom: 0;

      box-shadow: 0 -0.5px 0 0.5px var(--color-border-grey);

      background-color: var(--color-layer-light);
    `}

  ${({additionalStyles:e})=>null!==e&&void 0!==e?e:""}

  ${({onClick:e})=>e&&o.b`
      cursor: pointer;

      &:hover {
        filter: brightness(1.1);
      }
    `}

  tbody & {
    scroll-snap-align: start;
    scroll-margin-top: var(--table-header-height);
  }
`,g.ThOrTd=o.b`
  vertical-align: middle;
`,g.Th=o.c.th`
  ${g.ThOrTd}

  text-align: inherit;
  white-space: nowrap;

  background-color: var(--color-layer-dark);

  ${({fillWidth:e})=>e&&o.b`
      width: 100%;
    `}
`,g.Td=o.c.td`
  ${g.ThOrTd}

  border-top: solid 1px var(--color-border-grey);
`,g.TableCell=o.c.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  text-align: left;
  text-align: ${({align:e})=>({start:"left",center:"center",end:"right"}[e])};
  justify-content: start;
  justify-content: ${({align:e})=>({start:"start",center:"center",end:"end"}[e])};

  ${g.Th} & {
    padding: 12px 12px;
  }
  ${g.Td} & {
    padding: 7px 12px;
  }

  ${g.Th}:first-child > &,
  ${g.Td}:first-child > & {
    padding-left: var(--horizontal-padding);
  }
  ${g.Th}:last-child > &,
  ${g.Td}:last-child > & {
    padding-right: var(--horizontal-padding);
  }
`;const b=g.TableCell;g.TableCellWithSortToggle=Object(o.c)(g.TableCell)`
  cursor: pointer;
  transition: color 0.15s;

  gap: 0.33em;

  ${({align:e})=>"end"===e&&o.b`
      // Reverse order
      & > :first-child {
        order: 2;
      }
    `}

  @media ${d.a.notTablet} {
    &:hover {
      color: var(--color-text-light);
    }
  }
  ${({isSorted:e})=>e&&o.b`
      color: var(--color-text-light);
    `}
`,g.SortDirectionArrow=o.c.div`
  transform: perspective(10px) scale(0.00001);
  transition: transform 0.25s cubic-bezier(0.33, 1.55, 0.25, 1), font-size 0.12s ease-out,
    opacity 0.15s;

  > svg {
    width: 10px;
  }

  ${({sortDirection:e})=>({[p]:o.b`
        transform: perspective(10px) rotateX(180deg);
      `,[m]:o.b`
        transform: perspective(10px) rotateX(0);
      `}[e])}
`},1774:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(9),l=r(17),o=r(19);const RankingHeader=({isSidebarOpen:e,src:t,tagline:r,title:a,subtitle:i})=>n.a.createElement(d.RankingHeaderContainer,{isSidebarOpen:e},n.a.createElement(d.Badge,null,t&&n.a.createElement("img",{alt:"",src:t})),n.a.createElement(d.TextContainer,null,n.a.createElement(d.TitleH1,null,a,r&&n.a.createElement(d.Tagline,null,r)),n.a.createElement(d.SubtitleSpan,null,i))),d={};d.Tagline=i.c.span`
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
`,t.a=n.a.memo(RankingHeader)},1801:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(10),l=r(9),o=r(91),d=r(4),c=r(68),s=r(15),u=r(17),p=r(1763),m=r(607),g=r(603),b=r(56),y=r(37),h=r(1),v=r(76),f=r(375);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=({dailyCompetition:e,displayUser:t,isLoading:r,onRowClick:a,period:l,pnlData:u,stringGetter:g,hidePromotionColumn:S,userPnlData:O})=>{var w;const T=null!==(w=Object(i.f)(y.o))&&void 0!==w?w:"",C=Object(i.f)(b.g,i.d),$=Object(i.f)(b.r),A=u&&C&&O&&null!==(null===O||void 0===O?void 0:O.updatedAt)&&t?[...u.filter(({ethereumAddress:e})=>!Object(f.a)(e,T)),_objectSpread(_objectSpread({},O),{},{username:$,ethereumAddress:T,publicId:null===C||void 0===C?void 0:C.publicId})]:u,j=Object(c.b)().isMobile,L=[{key:"percentRank",label:j?"#":g({key:h.a.RANK}),isSortable:!0,sortType:p.a.NUMBER,align:"start",unsortedFirst:!1,renderCell:(t,r,a,i)=>n.a.createElement(x.RankCell,{align:i},e&&{0:n.a.createElement(x.TrophyIcon,{color:"gold"})}[r],(e&&r>0||!e)&&n.a.createElement("span",{className:"rank"},t||"-"))},{key:"username",label:g({key:h.a.TRADER}),isSortable:!0,sortType:p.a.STRING,fillWidth:!0,unsortedFirst:!1,renderCell:(e,t,{ethereumAddress:r},a)=>n.a.createElement(x.TraderCell,{align:a},n.a.createElement("div",null,!e&&!r&&n.a.createElement(x.UsernameH3,null,g({key:h.a.ANONYMOUS})),e&&n.a.createElement(x.UsernameH3,null,e.replace(/-([A-Z]|$)/g," $1")),r&&n.a.createElement(x.Address,{hash:r})),r&&T&&Object(f.a)(r,T)&&n.a.createElement(m.a,null,g({key:h.a.YOU})))},{key:"seasonExpectedOutcome",label:g({key:h.a.PROMOTION}),isSortable:!1,align:"center",renderCell:(e,t,r,a)=>n.a.createElement(x.ColoredCell,{align:a,isPositive:e===d.e.Promotion},e===d.e.Promotion&&n.a.createElement(s.m,null),(e===d.e.Relegation||e===d.e.Demotion)&&n.a.createElement(s.l,null))},{key:"stackedPnl",label:g({key:h.a.PROFIT_AND_LOSS_PERCENT_LABEL}),isSortable:!1,align:"end",renderCell:(e,t,{absolutePnl:r,percentPnl:a},i)=>{const l=a>=0;return n.a.createElement(x.StackedPnlCell,{align:i},n.a.createElement("div",null,n.a.createElement(x.ColoredSpan,{isPositive:l},l?"+":"-",n.a.createElement(o.a,{thousandSeparator:!0,displayType:"text",suffix:"%",decimalScale:v.d,value:Math.abs(100*a)}))),n.a.createElement("div",null,0!==Math.abs(r)&&n.a.createElement(x.ColoredSpan,{isPositive:l},l?"+":"-"),n.a.createElement(o.a,{thousandSeparator:!0,displayType:"text",prefix:"$",decimalScale:v.h,value:Math.abs(r)})))}}];return(j||S)&&L.splice(2,1),n.a.createElement(x.SortableTable,{data:A,columns:L,emptyState:g({key:h.a.EMPTY_LADDER_STATE}),getRowIsSticky:({ethereumAddress:e})=>e&&T&&Object(f.a)(e,T),getRowKey:(e,t)=>{const r=e.absolutePnl,a=e.ethereumAddress,n=e.percentPnl;return`${t}_${a}_${l}_${n+r}`},onRowClick:e=>{null===a||void 0===a||a(e)},getRowStyling:({idx:e})=>e%2===0?E:k,defaultSortByColumn:{columnKey:"percentRank"},isLoading:r})};const x={};x.TrophyIcon=Object(l.c)(s.Jb)`
  height: 16px;

  color: ${({color:e})=>({gold:l.b`#ffbf43`}[e])};

  path {
    fill: currentColor;
  }
`;const E=l.b`
  background: var(--color-layer-base);
`,k=l.b`
  background: var(--color-layer-light);
`,S=Object(l.c)(p.c)`
  && {
    th > & {
      padding: 12px 12px;
    }
  }
`;x.SortableTable=Object(l.c)(p.b)`
  --table-max-border-radius: 12px;

  th {
    background-color: var(--color-layer-dark);
  }

  td {
    border-top: solid 1px var(--color-layer-light);
  }
`,x.RankCell=Object(l.c)(S)`
  gap: 2px;

  .rank {
    display: inline-block;
    text-align: center;
    min-width: 1.25em;
    ${u.e.size14}

    @media ${u.a.tablet} {
      ${u.e.size16}
    }
  }
`,x.TraderCell=Object(l.c)(S)`
  gap: 8px;

  > div {
    display: grid;
    grid-auto-flow: row;
    gap: 2px;
    align-items: center;
  }
`,x.UsernameH3=l.c.h3`
  color: var(--color-text-base);

  ${u.e.size13}
  @media ${u.a.tablet} {
    ${u.e.size14}
  }

  &:only-child {
    color: var(--color-text-base);

    ${u.e.size14}
    @media ${u.a.tablet} {
      ${u.e.size15}
    }
  }
`,x.Address=Object(l.c)(g.a)`
  color: var(--color-text-dark);
  ${u.e.size11}

  @media ${u.a.tablet} {
    ${u.e.size12}
  }

  &:only-child {
    color: var(--color-text-base);
    ${u.e.size13}

    @media ${u.a.tablet} {
      ${u.e.size15}
    }
  }
`,x.StackedPnlCell=Object(l.c)(S)`
  grid-auto-flow: row;
  gap: 2px;
  ${u.f.monoRegular}
  ${u.e.size12}
  color: var(--color-text-dark);

  @media ${u.a.tablet} {
    ${u.e.size13}
  }
`,x.ColoredSpan=l.c.span`
  color: ${({isPositive:e})=>e?l.b`var(--color-green)`:l.b`var(--color-red)`};
`,x.ColoredCell=Object(l.c)(S)`
  ${u.f.monoRegular}
  ${u.e.size14}
  color: ${({isPositive:e})=>e?l.b`var(--color-green)`:l.b`var(--color-red)`};

  > svg path {
    stroke: currentColor;
  }

  @media ${u.a.tablet} {
    ${u.e.size16}
  }
`},1838:function(e,t,r){"use strict";r.d(t,"a",(function(){return T}));var a=r(0),n=r.n(a),i=r(9),l=r(99),o=r.n(l),d=r(91),c=r(10),s=r(4),u=r(17),p=r(282),m=r(1759),g=r(162),b=r(112),y=r(148),h=r(597),v=r(244),f=r(56),x=r(611),E=r(1),k=r(30),S=r(228),O=r(8),w=r(374);function asyncGeneratorStep(e,t,r,a,n,i,l){try{var o=e[i](l),d=o.value}catch(c){return void r(c)}o.done?t(d):Promise.resolve(d).then(a,n)}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(d){o=!0,n=d}finally{try{l||null==r.return||r.return()}finally{if(o)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const billboardItemRenderer=({isUserActive:e,renderType:t,stringGetter:r,value:a})=>{switch(t){case s.d.Currency:return n.a.createElement(d.a,{thousandSeparator:!0,displayType:"text",prefix:"$",value:a});case s.d.dYdX:return n.a.createElement(T.AlignedSpan,null,a,n.a.createElement(T.AssetIcon,{symbol:"DYDX"}));case s.d.NoOp:return r({key:a});case s.d.Percent:return r({key:E.a.TOP,params:{PERCENT:""+100*Number(a)}});case s.d.Status:return r({key:e?E.a.ACTIVE:E.a.INACTIVE});default:return null}},billboardTitleRenderer=({isNextRank:e,isUserInThisPeriod:t,period:r,stringGetter:a,titleKey:i})=>{switch(i){case E.a.RANK:{if(t&&!e)return a({key:i});const l=e?r:x.b[r].prevRank;return n.a.createElement(T.RankSpan,null,n.a.createElement(T.Badge,{billboard:!0,alt:"",hasDot:e&&t,period:l,src:Object(S.b)(l)})," ",Object(S.c)({period:l,stringGetter:a}))}default:return a({key:i})}},LeagueDetails=({isPrevWeek:e,isVertical:t,leaderboardData:r,period:i,stringGetter:l,userPnlData:d})=>{var u;const p=Object(c.f)(y.a,c.d),C=Object(c.f)(h.a,c.d),$=Object(c.f)(f.g,c.d),A=Object(c.f)(v.e,c.d),j=Object(c.f)(v.j,c.d),L=e?j:A,_=x.b[i].nextRank,I=x.b[i].prevRank,P=_slicedToArray(Object(a.useState)(_?null===L||void 0===L?void 0:L[_]:void 0),2),R=P[0],D=P[1],N=_slicedToArray(Object(a.useState)(I?null===L||void 0===L?void 0:L[I]:void 0),2),G=N[0],M=N[1],z=_slicedToArray(Object(a.useState)(!1),2),B=z[0],U=z[1],W=Object(c.e)();Object(a.useEffect)(()=>{(function(){var t=function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,a,n,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,a,n,_next,_throw,"throw",e)}_next(void 0)}))}}((function*(){if(_&&!R){U(!0);const t=yield k.c.getLeaderboardPnls({period:_,sortBy:k.b.PERCENT,startingBeforeOrAt:e?Object(w.b)():(new Date).toISOString()});W(Object(b.c)({rank:_,leaderboardRankings:t,isPrevWeek:e})),D(t)}if(I&&!G){U(!0);const t=yield k.c.getLeaderboardPnls({period:I,sortBy:k.b.PERCENT,startingBeforeOrAt:e?Object(w.b)():(new Date).toISOString()});W(Object(b.c)({rank:I,leaderboardRankings:t,isPrevWeek:e})),M(t)}U(!1)}));return function fetchAdditionalLeaderboards(){return t.apply(this,arguments)}})()()},[_,I]);const K=(null===d||void 0===d?void 0:d.period)===i,H=Object(S.a)(K,r,R,G),q=null===C||void 0===C?void 0:C[0],F=$&&(null===q||void 0===q?void 0:q.createdAt)&&(null===d||void 0===d?void 0:d.startedAt)&&new Date(q.createdAt).getTime()>new Date(d.startedAt).getTime(),hasUserMetGoal=({titleKey:e,value:t})=>{switch(e){case E.a.MIN_EQUITY:return(null===p||void 0===p?void 0:p.equity)>t;case E.a.MIN_BALANCE:{var a,n;const e=Object(O.b)(null!==(a=null===$||void 0===$?void 0:$.dydxTokenBalance)&&void 0!==a?a:0).plus(null!==(n=null===$||void 0===$?void 0:$.stakedDydxTokenBalance)&&void 0!==n?n:0);return Object(O.b)(null!==e&&void 0!==e?e:0).gte(t)}case E.a.RANK:{var i,l;const e=(null!==(i=null===r||void 0===r?void 0:r.numParticipants)&&void 0!==i?i:0)*Number(t);return(null!==(l=null===d||void 0===d?void 0:d.percentRank)&&void 0!==l?l:1/0)<e}case E.a.TRADING:return F;default:return!1}},Y=[...H.current];K&&I&&Y.push({titleKey:E.a.TRADING,value:"",renderType:s.d.Status});const V=Y.map(({renderType:t,titleKey:r,value:a})=>({key:r,title:n.a.createElement(n.a.Fragment,null,K&&!e&&n.a.createElement(T.Dot,{goalMet:hasUserMetGoal({titleKey:r,value:a})})," ",billboardTitleRenderer({isUserInThisPeriod:K,period:i,stringGetter:l,titleKey:r})),value:billboardItemRenderer({isUserActive:F,renderType:t,stringGetter:l,value:a})})),X=null===H||void 0===H||null===(u=H.next)||void 0===u?void 0:u.map(({renderType:t,titleKey:r,value:a})=>({key:r,title:n.a.createElement(n.a.Fragment,null,K&&!e&&n.a.createElement(T.Dot,{goalMet:hasUserMetGoal({titleKey:r,value:a})})," ",billboardTitleRenderer({isNextRank:!0,isUserInThisPeriod:K,period:i,stringGetter:l,titleKey:r})),value:billboardItemRenderer({isUserActive:F,renderType:t,stringGetter:l,value:a})}));return n.a.createElement(T.LeagueDetailsContainer,{isVertical:t},n.a.createElement(T.LeagueDetailsContent,null,n.a.createElement(T.LeagueDetail,null,n.a.createElement(T.DetailsCardHeader,null,n.a.createElement(T.AlignedSpan,{dangerouslySetInnerHTML:{__html:l({key:K?E.a.TO_STAY_IN:E.a.REQUIRED_FOR,params:{PERIOD:o.a.renderToString(n.a.createElement(T.AlignedSpan,{light:!0},n.a.createElement(T.Badge,{alt:"",period:i,src:Object(S.b)(i)})," ",Object(S.c)({period:i,stringGetter:l})))}})}})),n.a.createElement(T.DetailsCardContent,null,n.a.createElement(m.b,{billboardItems:V,hidePerimeter:t}),B&&n.a.createElement(g.a,null))),X.length>0&&n.a.createElement(n.a.Fragment,null,n.a.createElement(T.DashedLine,null),n.a.createElement(T.LeagueDetail,null,n.a.createElement(T.DetailsCardHeader,null,n.a.createElement(T.AlignedSpan,{dangerouslySetInnerHTML:{__html:l({key:E.a.PROMOTION_TO,params:{PERIOD:o.a.renderToString(n.a.createElement(T.AlignedSpan,{light:!0},n.a.createElement(T.Badge,{alt:"",period:_,src:Object(S.b)(_)})," ",Object(S.c)({period:_,stringGetter:l})))}})}})," "),n.a.createElement(T.DetailsCardContent,null,n.a.createElement(m.b,{billboardItems:X,hidePerimeter:t}),B&&n.a.createElement(g.a,null))))))},T={};T.AssetIcon=Object(i.c)(p.a)`
  margin: 0 4px;
`,T.LeagueDetailsContent=i.c.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  overflow-x: auto;

  ${m.a.BillboardsContainer} {
    white-space: nowrap;
    padding: 16px 0;
    width: 100%;
  }

  ${m.a.SingleCard} {
    ${u.e.size20}
    padding: 0 18px;

    &:not(:last-child) {
      border-right: 1px solid var(--color-border-lighter);
    }
  }

  ${m.a.MobileBillboardsContainer} {
    width: 100%;
  }

  ${m.a.CardTitle} {
    color: var(--color-text-base);
    display: flex;
    align-items: center;
    flex-direction: row;
    margin-bottom: 6px;
  }
`,T.Dot=i.c.span`
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({goalMet:e})=>e?i.b`var(--color-green)`:i.b`var(--color-red)`};
  display: flex;
  margin-right: 6px;
`,T.DashedLine=i.c.div`
  border-top: dashed 2px var(--color-border-grey);
  display: flex;
  flex: 1;
  margin-top: 1px;
  min-width: 16px;
`,T.LeagueDetail=i.c.div`
  display: grid;
  grid-auto-flow: row;
`,T.Badge=i.c.img`
  height: 28px;
  width: 28px;
  margin: 0 2px;

  ${({period:e})=>[s.h.Platinum,s.h.Diamond].includes(e)&&i.b`
      margin-right: 4px;
    `}

  ${({billboard:e})=>e&&i.b`
      height: 20px;
      width: 20px;
      margin-top: -1px;
      margin-bottom: -1px;
    `}

  ${({hasDot:e})=>e?i.b`
          margin-left: 6px;
        `:i.b`
          margin-left: 4px;
        `}

  @media ${u.a.tablet} {
    height: 30px;
    width: 30px;
  }
`,T.DetailsCardHeader=i.c.div`
  ${u.e.size14}
  color: var(--color-text-dark);
  background-color: var(--color-layer-light);
  padding: 8px 18px 20px;
  border-top-right-radius: 14px;
  border-top-left-radius: 14px;
`,T.RankSpan=i.c.span`
  display: flex;
  align-items: center;
  margin-left: -8px;
`,T.AlignedSpan=i.c.span`
  display: flex;
  align-items: center;

  ${({light:e})=>e&&i.b`
      color: var(--color-text-light);
    `}
`,T.DetailsCardContent=i.c.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-layer-lighter);
  align-items: center;
  border-radius: 14px;
  margin-top: -12px;
`,T.LeagueDetailsContainer=i.c.div`
  display: grid;
  overflow: hidden;
  padding: 12px 16px 0;

  ${({isVertical:e})=>e&&i.b`
      ${T.LeagueDetailsContent} {
        grid-template-columns: none;
        grid-template-rows: auto 1fr auto;
      }

      ${T.DashedLine} {
        border-top: none;
        border-right: dashed 2px var(--color-border-lighter);
        min-height: 32px;
        width: 50%;
      }
    `}

  @media ${u.a.tablet} {
    padding: 0;
  }
`,t.b=n.a.memo(LeagueDetails)},2124:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(9),l=r(25),o=r(10),d=r(91),c=r(4),s=r(32),u=r(68),p=r(15),m=r(17),g=r(1759),b=r(1727),y=r(95),h=r(1724),v=r(1774),f=r(112),x=r(33),E=r(244),k=r(372),S=r(611),O=r(1),w=r(23),T=r(19),C=r(30),$=r(228),A=r(374),j=r(1838),L=r(1801),_=r(190),I=r(605),P=r(8);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(d){o=!0,n=d}finally{try{l||null==r.return||r.return()}finally{if(o)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const Prize=({period:e,placement:t,stringGetter:r,viewHedgiesPage:a,winnerInformation:i})=>n.a.createElement(R.PlacementDetails,null,n.a.createElement(R.RewardItem,{onClick:()=>{null!==i&&void 0!==i&&i.hedgieWon?window.open("https://hedgies.wtf/explore/"+(null===i||void 0===i?void 0:i.hedgieWon),"_blank"):a()}},n.a.createElement(R.RewardPicture,null,n.a.createElement("img",{src:null!==i&&void 0!==i&&i.hedgieWon?`https://media.dydx.exchange/hedgies/400x400/${i.hedgieWon}.png`:"/hedgie_silhouette.png",alt:""}))),n.a.createElement(R.WinnerDetails,null,n.a.createElement(R.PlacementUsernameSpan,null,n.a.createElement(R.Place,null,r({key:O.a.PLACE,params:{PLACEMENT:t}})),n.a.createElement(R.Username,null,i?(null===i||void 0===i?void 0:i.username)||(null===i||void 0===i?void 0:i.ethereumAddress)&&n.a.createElement(R.TruncateHash,{hash:null===i||void 0===i?void 0:i.ethereumAddress})||r({key:O.a.ANONYMOUS}):r({key:O.a.NO_WINNER})))),n.a.createElement(R.PillBadge,null,n.a.createElement(R.Badge,{src:Object($.b)(e)}),t)),R={};R.Transparency=i.c.div`
  position: absolute;
  top: 12px;
  bottom: 0;
  width: 28px;

  ${({right:e})=>e?i.b`
          right: 0;
          background: linear-gradient(90deg, rgba(23, 23, 34, 0) 0%, rgba(23, 23, 34, 1) 95%);
          border-bottom-right-radius: 18px;
          border-top-right-radius: 18px;
        `:i.b`
          left: 0;
          background: linear-gradient(90deg, rgba(23, 23, 34, 1) 0%, rgba(23, 23, 34, 0) 95%);
          border-bottom-left-radius: 18px;
          border-top-left-radius: 18px;
        `}

  ${({isSidebarOpen:e,right:t})=>e?`\n          @media (max-width: calc(${T.m}px + ${T.q}px)) {\n            ${t?"right: 16px;":"left: 16px"}\n          }\n        `:`\n          @media (max-width: calc(${T.m}px + ${T.p}px)) {\n            ${t?"right: 16px;":"left: 16px"}\n          }\n        `}
`,R.LoadingSpaceContainer=i.c.div`
  min-height: 284px;
  width: 100%;
`,R.TruncateHash=Object(i.c)(I.a)`
  ${m.e.size16}
  color: var(--color-text-base);
`,R.Username=i.c.span`
  ${m.e.size16}
  color: var(--color-text-base);
`,R.Place=i.c.span`
  ${m.e.size14}
  color: var(--color-text-dark);
`,R.PlacementUsernameSpan=i.c.span`
  display: flex;
  flex-direction: column;
  gap: 6px;
`,R.PillBadge=i.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  position: absolute;
  right: 22px;
  top: 0;
  background-color: #2c2c3b;
  border: solid 1px #454557;
  border-radius: 40px;
  min-width: 54px;
  height: 28px;
  ${m.e.size13}
  padding-right: 8px;
`,R.Badge=i.c.img`
  height: 20px;
  width: 20px;
  margin: 5px 2px;
  margin-left: 6px;
`,R.WinnerDetails=i.c.div`
  display: flex;
  flex-direction: row;
  margin-top: 16px;
`,R.PlacementDetails=i.c.div`
  position: relative;
  display: grid;
  grid-auto-flow: row;
  gap: 4px;
  color: var(--color-text-base);
  ${m.e.size12}
  padding: 0 28px;
  min-height: 284px;

  &:not(:last-of-type) {
    border-right: 1px solid var(--color-border-grey);
  }
`,R.CardContainer=i.c.div`
  position: relative;
  display: flex;
  overflow-x: scroll;
  background-color: var(--color-layer-dark);
  padding: 28px 0;
  width: 100%;
  border-radius: 18px;
`,R.RewardItem=i.c.div`
  margin-top: 12px;
`,R.RewardPicture=i.c.div`
  height: 208px;
  width: 204px;
  justify-content: center;
  display: flex;
  border-radius: 12px;
  align-items: center;
  color: var(--color-text-dark);
  text-align: center;
  overflow: hidden;
  ${m.e.size14};

  background: var(--color-layer-light);
  cursor: pointer;

  &:hover {
    filter: brightness(1.1);
  }

  > img {
    height: 100%;
    width: 100%;
  }
`,R.LeagueRewardsContainer=i.c.div`
  display: grid;
  overflow: hidden;
  width: 100%;
  margin-bottom: 4px;
  position: relative;
  padding: 12px 0 0;

  ${({isSidebarOpen:e})=>e?`\n          @media (max-width: calc(${T.m}px + ${T.q}px)) {\n            padding: 12px 16px 0;\n            \n          }\n        `:`\n          @media (max-width: calc(${T.m}px + ${T.p}px)) {\n            padding: 12px 16px 0;\n          }\n        `}
`;var leagues_LeagueRewards=({isPrevWeek:e,isSidebarOpen:t,leaderboardData:r,period:i,prevLeaderboards:l,stringGetter:o,viewHedgiesPage:d})=>{const s=_slicedToArray(Object(a.useState)(1),2),u=s[0],p=s[1];return Object(a.useEffect)(()=>{p((null===r||void 0===r?void 0:r.numHedgiesWinners)||1)},[r]),i&&i!==c.h.Bronze?n.a.createElement(R.LeagueRewardsContainer,{isSidebarOpen:t},n.a.createElement(R.CardContainer,null,r?Array.from({length:u}).map((t,r)=>{const a=`${i}_${e}_${r}`;let c;var s,u;l&&e&&(c=null===l||void 0===l||null===(s=l[i])||void 0===s||null===(u=s.topPnls)||void 0===u?void 0:u[r]);return n.a.createElement(Prize,{key:a,period:i,placement:Object(P.e)(r+1),stringGetter:o,viewHedgiesPage:d,winnerInformation:c})}):n.a.createElement(R.LoadingSpaceContainer,null,n.a.createElement(_.a,null))),n.a.createElement(R.Transparency,{right:!0,isSidebarOpen:t}),n.a.createElement(R.Transparency,{isSidebarOpen:t})):null},D=r(96),N=r(99),G=r.n(N),M=r(284);const z={[T.k.BRONZE]:{rank:c.h.Bronze,stringKey:O.a.BRONZE},[T.k.SILVER]:{rank:c.h.Silver,stringKey:O.a.SILVER},[T.k.GOLD]:{rank:c.h.Gold,stringKey:O.a.GOLD,hasCrown:!0},[T.k.PLATINUM]:{rank:c.h.Platinum,stringKey:O.a.PLATINUM,hasCrown:!0},[T.k.DIAMOND]:{rank:c.h.Diamond,stringKey:O.a.DIAMOND,hasCrown:!0}},B={};B.ColoredSpan=i.c.span`
  margin-left: 1px;

  ${({period:e})=>({[c.h.Bronze]:"color: var(--color-bronze);",[c.h.Silver]:"color: var(--color-silver);",[c.h.Gold]:"color: var(--color-gold);",[c.h.Platinum]:"color: var(--color-platinum);",[c.h.Diamond]:"color: var(--color-diamond);"}[e])}
`,B.WithLabel=Object(i.c)(M.a)`
  margin-bottom: 8px;
`,B.LinkContainer=i.c.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  padding-top: ${({hasCrown:e})=>e?"4px":"0"};

  ${({selected:e})=>e?i.b`
          background-color: var(--color-layer-lighter);
          border: 1px solid var(--color-border-lighter);
        `:"filter: brightness(0.5);"};

  @media ${m.a.mobile} {
    width: 66px;
    height: 66px;
    min-width: 66px;
  }
`,B.Link=Object(i.c)(D.a)`
  height: 64px;
  width: 64px;
  border-radius: 50%;

  > img {
    height: 64px;
    width: 64px;
  }

  @media ${m.a.mobile} {
    height: 56px;
    width: 56px;

    > img {
      height: 56px;
      width: 56px;
    }
  }
`,B.LeagueSubNavContainer=i.c.div`
  display: flex;
  flex-direction: column;
  color: var(--color-text-dark);
  ${m.e.size14}
  padding: 16px 16px 2px;
  overflow: hidden;

  @media ${m.a.notTablet} {
    display: none;
  }
`,B.LeaguesContainer=i.c.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  margin-left: -4px;
  gap: 20px;
  justify-content: space-between;

  @media ${m.a.mobile} {
    overflow-x: auto;
    gap: 0;
  }
`;var U,W=n.a.memo(Object(l.i)(({isUserInThisPeriod:e,location:t,period:r,stringGetter:a})=>n.a.createElement(B.LeagueSubNavContainer,null,n.a.createElement(B.WithLabel,{textDark:!0,label:r?n.a.createElement("span",{dangerouslySetInnerHTML:{__html:a({key:e?O.a.YOURE_IN:O.a.VIEWING_LEAGUE,params:{LEAGUE:G.a.renderToString(n.a.createElement(B.ColoredSpan,{period:r},a({key:O.a.PERIOD_LEAGUES,params:{PERIOD:Object($.c)({period:r,stringGetter:a})}})))}})}}):a({key:O.a.BROWSE_LEAGUES})}),n.a.createElement(B.LeaguesContainer,null,Object.entries(z).map(([e,r])=>n.a.createElement(B.LinkContainer,{key:e,hasCrown:null===r||void 0===r?void 0:r.hasCrown,selected:Object(l.f)(t.pathname,{path:e})},n.a.createElement(B.Link,{to:e},n.a.createElement("img",{alt:"",src:Object($.b)(r.rank)}))))))));function asyncGeneratorStep(e,t,r,a,n,i,l){try{var o=e[i](l),d=o.value}catch(c){return void r(c)}o.done?t(d):Promise.resolve(d).then(a,n)}function Leagues_slicedToArray(e,t){return function Leagues_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function Leagues_iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],l=!0,o=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);l=!0);}catch(d){o=!0,n=d}finally{try{l||null==r.return||r.return()}finally{if(o)throw n}}return i}(e,t)||function Leagues_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return Leagues_arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Leagues_arrayLikeToArray(e,t)}(e,t)||function Leagues_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Leagues_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}!function(e){e.LastWeek="LastWeek",e.ThisWeek="ThisWeek"}(U||(U={}));const K={};K.AlignedDiv=i.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`,K.BillboardIconButton=Object(i.c)(y.b)`
  && {
    border-radius: 50%;
    background-color: var(--color-layer-lighter);
    width: 36px;
    height: 36px;
    min-width: 36px;
    align-self: center;
    margin-left: 12px;

    > svg {
      width: 9px;
    }
  }
`,K.BillboardContainer=i.c.div`
  display: flex;
  align-items: center;
  justify-content: end;

  span {
    white-space: nowrap;
  }

  ${g.a.BillboardsContainer} {
    padding: 4px 0 0 0;
  }

  ${g.a.SingleCard} {
    padding: 0 16px;
    text-align: end;
    ${m.e.size22}
    white-space: nowrap;

    &:last-of-type {
      padding-right: 0;
    }
  }

  ${g.a.CardTitle} {
    margin-bottom: 4px;
  }

  @media ${m.a.tablet} {
    ${m.e.size22}
    border-bottom: 1px solid var(--color-border-grey);
    padding: 24px 0;
    justify-content: start;

    &:first-of-type {
      border-top: 1px solid var(--color-border-grey);
    }

    ${g.a.MobileBillboardsContainer} {
      width: 100%;
    }

    ${g.a.SingleCard} {
      text-align: start;

      &:first-of-type {
        width: 40%;
        min-width: 120px;
      }

      &:not(:first-of-type) {
        width: 60%;
      }
    }

    ${g.a.MobileTitle} {
      margin-bottom: 6px;
    }
  }

  @media ${m.a.mobile} {
    padding: 24px 0;
    overflow-x: auto;
  }
`,K.LightSpan=i.c.span`
  color: var(--color-text-light);
`,K.Countdown=i.c.span`
  display: flex;
  flex-direction: row;
  gap: 2px;
  color: var(--color-text-light);
  ${m.e.size20}

  @media ${m.a.tablet} {
    ${m.e.size24}
  }
`,K.TimeSelector=i.c.div`
  && {
    display: flex;
    align-items: center;
    gap: 14px;
    margin: 0 16px;
    color: var(--color-text-dark);
    ${m.e.size14}

    @media ${m.a.tablet} {
      flex: 1;
      justify-content: space-between;

      > span {
        ${m.e.size20}
      }
    }
  }
`,K.SelectorAndCountdown=i.c.div`
  display: flex;
  flex-direction: row;
  margin: 24px 0 8px;
  min-height: 24px;
`,K.CurrentLeagueContainer=i.c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 4px;

  @media ${m.a.tablet} {
    grid-template-columns: 1fr;
  }

  @media ${m.a.mobile} {
    overflow: hidden;
  }
`,K.LeagueContent=i.c.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0 16px 0;

  @media ${m.a.tablet} {
    padding: 16px 0 24px;
  }
`,K.LeaguesContainer=i.c.div`
  display: grid;
  grid-auto-rows: auto 1fr;

  ${j.a.LeagueDetailsContainer} {
    padding: 12px 0 0;
  }

  @media ${m.a.tablet} {
    grid-auto-rows: auto auto 1fr;
  }

  ${({isSidebarOpen:e})=>e?`\n          @media (max-width: calc(${T.m}px + ${T.q}px)) {\n            ${K.SelectorAndCountdown} {\n              margin: 24px 8px 8px;\n            }\n\n            ${K.BillboardContainer} {\n              ${g.a.SingleCard} {\n                padding-right: 16px;\n              }\n            }\n\n            ${j.a.LeagueDetailsContainer} {\n              padding: 12px 16px 0;\n            }\n          }\n        `:`\n          @media (max-width: calc(${T.m}px + ${T.p}px)) {\n            ${K.SelectorAndCountdown} {\n              margin: 24px 8px 8px;\n            }\n\n            ${K.BillboardContainer} {\n              ${g.a.SingleCard} {\n                padding-right: 16px;\n              }\n            }\n\n            ${j.a.LeagueDetailsContainer} {\n              padding: 12px 16px 0;\n            }\n          }\n        `}
`;t.default=Object(l.i)(Object(s.c)(({history:e,location:t,stringGetter:r})=>{var i;const l=Leagues_slicedToArray(Object(a.useState)(!1),2),s=l[0],m=l[1],y=Leagues_slicedToArray(Object(a.useState)(void 0),2),_=y[0],I=y[1],P=Leagues_slicedToArray(Object(a.useState)(U.ThisWeek),2),R=P[0],D=P[1],N=Object(o.e)(),G=Object(u.b)().isDesktopSmall,M=Object(o.f)(E.l),z=Object(o.f)(E.e,o.d),B=Object(o.f)(E.j,o.d),H=Object(o.f)(E.f,o.d),q=Object(o.f)(E.k,o.d),F=Object(o.f)(k.b),Y=R===U.LastWeek,V=Y?B:z,X=Y?q:H,Z=null!==(i=null===t||void 0===t?void 0:t.pathname)&&void 0!==i?i:"",J=function(){var e=function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,a,n,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,a,n,_next,_throw,"throw",e)}_next(void 0)}))}}((function*(e){var t;let r;if(I(null!==(t=null===V||void 0===V?void 0:V[e])&&void 0!==t?t:void 0),V[e]&&R===U.ThisWeek){var a,n;const t=Date.now(),i=null===V||void 0===V||null===(a=V[e])||void 0===a?void 0:a.updatedAt,l=null===V||void 0===V||null===(n=V[e])||void 0===n?void 0:n.endsAt;if(i&&l){const e=new Date(i).getTime(),a=t>new Date(l).getTime();r=!Y&&!a&&t-e>S.a}}if(null===V||void 0===V||!V[e]||r){m(!0);const t=yield C.c.getLeaderboardPnls({period:e,sortBy:C.b.PERCENT,startingBeforeOrAt:Y?Object(A.b)():(new Date).toISOString()});N(Object(f.c)({rank:e,leaderboardRankings:t,isPrevWeek:Y})),I(t),m(!1)}}));return function onChangeLeagues(t){return e.apply(this,arguments)}}();Object(a.useEffect)(()=>{M&&J(M),N(Object(f.f)(R===U.LastWeek))},[M,R]);const Q=Object(u.b)().isTablet;Object(a.useEffect)(()=>{switch(Z){case T.k.BRONZE:N(Object(f.e)(c.h.Bronze));break;case T.k.DIAMOND:N(Object(f.e)(c.h.Diamond));break;case T.k.GOLD:N(Object(f.e)(c.h.Gold));break;case T.k.PLATINUM:N(Object(f.e)(c.h.Platinum));break;case T.k.SILVER:N(Object(f.e)(c.h.Silver))}return()=>{N(Object(f.e)(void 0))}},[Z]);const ee=Object(u.d)({futureDateISO:null===_||void 0===_?void 0:_.endsAt,stringGetter:r}),te=ee.days,re=ee.hours,ae=ee.minutes,ne=ee.value,ie=!!te&&!!re&&!!ae,le="0"===te&&"0"===re&&"0"===ae,oe=!!M&&(null===X||void 0===X?void 0:X.period)===M,Countdown=()=>n.a.createElement(n.a.Fragment,null,null!==_&&void 0!==_&&_.endsAt&&ie&&!le?n.a.createElement(K.Countdown,null,n.a.createElement("h2",null,ne)):n.a.createElement(K.Countdown,null,"-")),de={[c.e.Demotion]:O.a.DEMOTION,[c.e.Promotion]:O.a.PROMOTION,[c.e.Relegation]:O.a.DEMOTION,[c.e.SameLeague]:O.a.NO_CHANGE}[null===X||void 0===X?void 0:X.seasonExpectedOutcome],ce=[{key:"season",title:r({key:O.a.SEASON}),value:(null===_||void 0===_?void 0:_.seasonNumber)||"-"},{key:"size",title:r({key:O.a.LEAGUE_SIZE}),value:n.a.createElement(d.a,{thousandSeparator:!0,displayType:"text",value:(null===_||void 0===_?void 0:_.numParticipants)||"-"})}],se=[{key:"season",title:r({key:O.a.SEASON}),value:(null===_||void 0===_?void 0:_.seasonNumber)||"-"},{key:"countdown",title:r({key:O.a.SEASON_ENDS}),value:n.a.createElement(Countdown,null)}];Q||!oe||Y||ce.unshift({key:"outcome",title:r({key:O.a.ON_TRACK}),value:de&&M===(null===X||void 0===X?void 0:X.period)?r({key:de}):"-"}),Q&&(ce.shift(),ce.push({key:"outcome",title:n.a.createElement(K.AlignedDiv,null,r({key:O.a.ON_TRACK})),icon:_&&n.a.createElement(K.BillboardIconButton,{onClick:e=>{e.stopPropagation(),N(Object(x.c)({modalType:w.a.LEAGUE_REQUIREMENTS,modalProps:{leaderboardData:_,selectedLeague:M,userPnlData:X}}))},icon:n.a.createElement(p.sb,null)}),value:oe&&!Y?r({key:de}):"-"}));return n.a.createElement(K.LeaguesContainer,{isSidebarOpen:F},n.a.createElement(W,{isUserInThisPeriod:oe,period:M,stringGetter:r}),n.a.createElement(K.LeagueContent,null,n.a.createElement(K.CurrentLeagueContainer,null,Q?n.a.createElement(K.BillboardContainer,null,n.a.createElement(g.b,{billboardItems:se})):n.a.createElement(v.a,{isSidebarOpen:F,src:Object($.b)(M),tagline:oe?r({key:O.a.YOUR_LEAGUE}):null,title:Object($.c)({period:M,stringGetter:r}),subtitle:n.a.createElement("div",null,r({key:O.a.COMPETE_AGAINST}),n.a.createElement(h.a,{href:"https://help.dydx.exchange/en/articles/5917874-trading-leagues"}))}),n.a.createElement(K.BillboardContainer,null,n.a.createElement(g.b,{billboardItems:ce}))),!Q&&M&&_&&n.a.createElement(j.b,{isPrevWeek:Y,isVertical:!(!F||!G||[c.h.Diamond,c.h.Bronze].includes(M)),leaderboardData:_,period:M,stringGetter:r,userPnlData:X}),n.a.createElement(K.SelectorAndCountdown,null,n.a.createElement(K.TimeSelector,null,n.a.createElement("span",null,r({key:O.a.RESULTS})),n.a.createElement(b.a,{backgroundLighter:!0,dropdownMenuItems:[{key:U.ThisWeek,name:r({key:O.a.THIS_SEASON})},{key:U.LastWeek,name:r({key:O.a.LAST_SEASON})}].map(({key:e,name:t})=>({key:e,label:t})),onChangeSelection:e=>D(e),selectedItemKey:R})),!Q&&!le&&(null===_||void 0===_?void 0:_.endsAt)&&n.a.createElement(K.TimeSelector,null,n.a.createElement("span",null,r({key:O.a.SEASON_ENDS})),n.a.createElement(Countdown,null))),n.a.createElement(leagues_LeagueRewards,{isPrevWeek:Y,isSidebarOpen:F,leaderboardData:_,period:M,prevLeaderboards:B,stringGetter:r,viewHedgiesPage:()=>{e.push(T.o.HEDGIES)}})),n.a.createElement(L.a,{period:null===_||void 0===_?void 0:_.period,displayUser:(null===X||void 0===X?void 0:X.period)===M,isLoading:s,onRowClick:({publicId:t})=>{e.push(`${T.l.RANKINGS}/u/${t}`)},pnlData:null===_||void 0===_?void 0:_.topPnls,stringGetter:r,hidePromotionColumn:Y,userPnlData:X}))}))}}]);