(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{1759:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));var a=r(0),n=r.n(a),i=r(9),o=r(68),l=r(17),d=r(19);const c={};c.AbsolutePerimeter=i.c.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: transparent;
`,c.CardTitle=i.c.span`
  ${l.e.size14}
  color: var(--color-text-dark);
  margin-bottom: 16px;
`,c.CardLabel=i.c.span`
  ${l.e.size14}
  color: var(--color-text-dark);
  margin-top: 4px;
`,c.SingleCard=i.c.div`
  ${l.e.size28}
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

  @media ${l.a.tablet} {
    ${l.e.size24}
  }
`,c.MobileTitle=i.c.span`
  ${l.e.size15}
  color: var(--color-text-dark);
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 4px;
`,c.MobileBillboardsContainer=i.c.div`
  display: flex;
  position: relative;

  @media ${l.a.tablet} {
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
`,t.b=({billboardItems:e,hasSidebar:t,hidePerimeter:r,isSidebarOpen:a})=>{const i=Object(o.b)().isTablet;return e?i?n.a.createElement(c.MobileBillboardsContainer,null,e.map(({key:e,icon:t=null,title:r,value:a})=>n.a.createElement(c.SingleCard,{key:e,hasIconComponent:!!t},n.a.createElement(c.LeftSideCard,null,r&&n.a.createElement(c.MobileTitle,null,r),null!==a&&void 0!==a?a:"-"),t)),r&&n.a.createElement(c.AbsolutePerimeter,null)):n.a.createElement(c.BillboardsContainer,{hasSidebar:t,isSidebarOpen:a},e.map(({key:e,title:t,value:r,label:a})=>n.a.createElement(c.SingleCard,{key:e},t&&n.a.createElement(c.CardTitle,null,t),null!==r&&void 0!==r?r:"-",a&&n.a.createElement(c.CardLabel,null,a)))):null}},1763:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return SortableTable})),r.d(t,"c",(function(){return b}));var a=r(0),n=r.n(a),i=r(2),o=r.n(i),l=r(9),d=r(17),c=r(15),s=r(373);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(d){l=!0,n=d}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const p={STRING:"STRING",NUMBER:"NUMBER"},u="INCREASING",m="DECREASING",renderDefaultHeaderCell=({columnKey:e,label:t,align:r,isSortable:a,isSorted:i,sortDirection:o,onClick:l,renderHeaderContent:d=(()=>null!==t&&void 0!==t?t:e)})=>a?n.a.createElement(g.TableCellWithSortToggle,{role:"button",tabIndex:"0",onClick:l,isSorted:i,align:r},n.a.createElement("span",null,d()),n.a.createElement(g.SortDirectionArrow,{sortDirection:o},n.a.createElement(c.c,null))):n.a.createElement(g.TableCell,{align:r},d()),renderDefaultCell=(e,t,r,a,i)=>n.a.createElement(g.TableCell,{align:a},i(e,t,r)),SortableTable=({columns:e=[],data:t=[],emptyState:r,getRowIsPinned:i,getRowIsSticky:o,getRowKey:l,getRowStyling:d,defaultSortByColumn:c,onRowClick:s,className:b,isLoading:y})=>{var x;const h={columnKey:null===c||void 0===c?void 0:c.columnKey,sortDirection:null!==(x=null===c||void 0===c?void 0:c.sortDirection)&&void 0!==x?x:(null===c||void 0===c?void 0:c.columnKey)&&u},f=_slicedToArray(Object(a.useState)(h),2),v=f[0],w=f[1];return n.a.createElement(g.TableWrapper,{className:b},n.a.createElement(g.Table,null,n.a.createElement(g.Thead,null,n.a.createElement(g.Tr,null,e.map(({key:e,label:t,isSortable:r=!1,align:a,fillWidth:i=!1,renderHeaderCell:o=renderDefaultHeaderCell,renderHeaderContent:l})=>n.a.createElement(g.Th,{key:e,align:a,fillWidth:i},o({columnKey:e,label:t,renderHeaderContent:l,align:a,isSortable:r,isSorted:v.columnKey===e,sortDirection:v.columnKey===e?v.sortDirection:void 0,onClick:r?()=>(e=>{e!==v.columnKey?w({columnKey:e,sortDirection:u}):v.sortDirection===u?w({columnKey:e,sortDirection:m}):v.sortDirection===m&&w(h)})(e):void 0}))))),(null===t||void 0===t?void 0:t.length)>0&&n.a.createElement("tbody",null,t.sort((t,r)=>{const a=v.columnKey,n=v.sortDirection===u,o=e.find(({key:e})=>a===e)||{},l=o.sortType,d=void 0===l?p.STRING:l,c=o.unsortedFirst,s=void 0===c||c,m=o.sort,g=void 0===m?(e,t)=>{const r=e[a],i=t[a];return d===p.STRING?String(r||(s===n?"":i+" ")).localeCompare(String(i||(s===n?"":r+" "))):parseFloat(null!==r&&void 0!==r?r:s?-1/0:1/0)-parseFloat(null!==i&&void 0!==i?i:s?-1/0:1/0)}:m;return null!==i&&void 0!==i&&i(t)?-1:null!==i&&void 0!==i&&i(r)?1:g(t,r)*(n?1:-1)}).map((t,r)=>n.a.createElement(g.Tr,{key:l(t,r),isPinned:null===i||void 0===i?void 0:i(t),isSticky:null===o||void 0===o?void 0:o(t),additionalStyles:null===d||void 0===d?void 0:d({idx:r,rowData:t}),onClick:s?()=>null===s||void 0===s?void 0:s(t):null},e.map(({key:e,align:a,renderCell:i=renderDefaultCell,renderContent:o=(e=>e)})=>n.a.createElement(g.Td,{key:e},i(t[e],r,t,a,o))))))),y&&n.a.createElement(g.EmptyState,null,n.a.createElement(g.LoadingSpinner,{id:"sortable-table"})),!(null!==t&&void 0!==t&&t.length)&&!y&&r&&n.a.createElement(g.EmptyState,null,r))};SortableTable.propTypes={className:o.a.string,columns:o.a.array.isRequired,data:o.a.array,defaultSortByColumn:o.a.object,emptyState:o.a.oneOfType([o.a.arrayOf(o.a.node),o.a.node,o.a.string]),getRowIsPinned:o.a.func,getRowIsSticky:o.a.func,getRowKey:o.a.func.isRequired,getRowStyling:o.a.func,isLoading:o.a.bool,onRowClick:o.a.func};const g={};g.EmptyState=l.c.div`
  margin: 28px auto;
`,g.LoadingSpinner=Object(l.c)(s.a)``,g.TableWrapper=l.c.div`
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
`,g.Table=l.c.table`
  width: 100%;

  ${d.e.size13}
`,g.Thead=l.c.thead`
  color: var(--color-text-dark);
  letter-spacing: 0;
  position: sticky;
  top: 0;

  @media ${d.a.tablet} {
    ${d.e.size14}
  }
`,g.Tr=l.c.tr`
  ${({isSticky:e})=>e&&l.b`
      position: sticky;
      top: var(--table-header-height);
      bottom: 0;

      box-shadow: 0 -0.5px 0 0.5px var(--color-border-grey);

      background-color: var(--color-layer-light);
    `}

  ${({additionalStyles:e})=>null!==e&&void 0!==e?e:""}

  ${({onClick:e})=>e&&l.b`
      cursor: pointer;

      &:hover {
        filter: brightness(1.1);
      }
    `}

  tbody & {
    scroll-snap-align: start;
    scroll-margin-top: var(--table-header-height);
  }
`,g.ThOrTd=l.b`
  vertical-align: middle;
`,g.Th=l.c.th`
  ${g.ThOrTd}

  text-align: inherit;
  white-space: nowrap;

  background-color: var(--color-layer-dark);

  ${({fillWidth:e})=>e&&l.b`
      width: 100%;
    `}
`,g.Td=l.c.td`
  ${g.ThOrTd}

  border-top: solid 1px var(--color-border-grey);
`,g.TableCell=l.c.div`
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
`;const b=g.TableCell;g.TableCellWithSortToggle=Object(l.c)(g.TableCell)`
  cursor: pointer;
  transition: color 0.15s;

  gap: 0.33em;

  ${({align:e})=>"end"===e&&l.b`
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
  ${({isSorted:e})=>e&&l.b`
      color: var(--color-text-light);
    `}
`,g.SortDirectionArrow=l.c.div`
  transform: perspective(10px) scale(0.00001);
  transition: transform 0.25s cubic-bezier(0.33, 1.55, 0.25, 1), font-size 0.12s ease-out,
    opacity 0.15s;

  > svg {
    width: 10px;
  }

  ${({sortDirection:e})=>({[u]:l.b`
        transform: perspective(10px) rotateX(180deg);
      `,[m]:l.b`
        transform: perspective(10px) rotateX(0);
      `}[e])}
`},1774:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(9),o=r(17),l=r(19);const RankingHeader=({isSidebarOpen:e,src:t,tagline:r,title:a,subtitle:i})=>n.a.createElement(d.RankingHeaderContainer,{isSidebarOpen:e},n.a.createElement(d.Badge,null,t&&n.a.createElement("img",{alt:"",src:t})),n.a.createElement(d.TextContainer,null,n.a.createElement(d.TitleH1,null,a,r&&n.a.createElement(d.Tagline,null,r)),n.a.createElement(d.SubtitleSpan,null,i))),d={};d.Tagline=i.c.span`
  display: flex;
  padding: 4px 10px;
  ${o.e.size14}
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
  ${o.e.size26}
  display: flex;
  flex-direction: row;
  gap: 8px;
`,d.SubtitleSpan=i.c.span`
  color: var(--color-text-dark);
  ${o.e.size15}
  margin-top: 4px;
`,d.RankingHeaderContainer=i.c.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-right: 16px;

  @media ${o.a.tablet} {
    display: none;
  }

  ${({isSidebarOpen:e})=>e?`\n          @media (max-width: calc(${l.m}px + ${l.q}px)) {\n            ${d.Badge} {\n              margin-left: 12px;\n            }\n          }\n        `:`\n          @media (max-width: calc(${l.m}px + ${l.p}px)) {\n            ${d.Badge} {\n              margin-left: 12px;\n            }\n          }\n        `}
`,t.a=n.a.memo(RankingHeader)},1801:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(10),o=r(9),l=r(91),d=r(4),c=r(68),s=r(15),p=r(17),u=r(1763),m=r(607),g=r(603),b=r(56),y=r(37),x=r(1),h=r(76),f=r(375);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.a=({dailyCompetition:e,displayUser:t,isLoading:r,onRowClick:a,period:o,pnlData:p,stringGetter:g,hidePromotionColumn:S,userPnlData:C})=>{var E;const T=null!==(E=Object(i.f)(y.o))&&void 0!==E?E:"",k=Object(i.f)(b.g,i.d),O=Object(i.f)(b.r),A=p&&k&&C&&null!==(null===C||void 0===C?void 0:C.updatedAt)&&t?[...p.filter(({ethereumAddress:e})=>!Object(f.a)(e,T)),_objectSpread(_objectSpread({},C),{},{username:O,ethereumAddress:T,publicId:null===k||void 0===k?void 0:k.publicId})]:p,_=Object(c.b)().isMobile,D=[{key:"percentRank",label:_?"#":g({key:x.a.RANK}),isSortable:!0,sortType:u.a.NUMBER,align:"start",unsortedFirst:!1,renderCell:(t,r,a,i)=>n.a.createElement(v.RankCell,{align:i},e&&{0:n.a.createElement(v.TrophyIcon,{color:"gold"})}[r],(e&&r>0||!e)&&n.a.createElement("span",{className:"rank"},t||"-"))},{key:"username",label:g({key:x.a.TRADER}),isSortable:!0,sortType:u.a.STRING,fillWidth:!0,unsortedFirst:!1,renderCell:(e,t,{ethereumAddress:r},a)=>n.a.createElement(v.TraderCell,{align:a},n.a.createElement("div",null,!e&&!r&&n.a.createElement(v.UsernameH3,null,g({key:x.a.ANONYMOUS})),e&&n.a.createElement(v.UsernameH3,null,e.replace(/-([A-Z]|$)/g," $1")),r&&n.a.createElement(v.Address,{hash:r})),r&&T&&Object(f.a)(r,T)&&n.a.createElement(m.a,null,g({key:x.a.YOU})))},{key:"seasonExpectedOutcome",label:g({key:x.a.PROMOTION}),isSortable:!1,align:"center",renderCell:(e,t,r,a)=>n.a.createElement(v.ColoredCell,{align:a,isPositive:e===d.e.Promotion},e===d.e.Promotion&&n.a.createElement(s.m,null),(e===d.e.Relegation||e===d.e.Demotion)&&n.a.createElement(s.l,null))},{key:"stackedPnl",label:g({key:x.a.PROFIT_AND_LOSS_PERCENT_LABEL}),isSortable:!1,align:"end",renderCell:(e,t,{absolutePnl:r,percentPnl:a},i)=>{const o=a>=0;return n.a.createElement(v.StackedPnlCell,{align:i},n.a.createElement("div",null,n.a.createElement(v.ColoredSpan,{isPositive:o},o?"+":"-",n.a.createElement(l.a,{thousandSeparator:!0,displayType:"text",suffix:"%",decimalScale:h.d,value:Math.abs(100*a)}))),n.a.createElement("div",null,0!==Math.abs(r)&&n.a.createElement(v.ColoredSpan,{isPositive:o},o?"+":"-"),n.a.createElement(l.a,{thousandSeparator:!0,displayType:"text",prefix:"$",decimalScale:h.h,value:Math.abs(r)})))}}];return(_||S)&&D.splice(2,1),n.a.createElement(v.SortableTable,{data:A,columns:D,emptyState:g({key:x.a.EMPTY_LADDER_STATE}),getRowIsSticky:({ethereumAddress:e})=>e&&T&&Object(f.a)(e,T),getRowKey:(e,t)=>{const r=e.absolutePnl,a=e.ethereumAddress,n=e.percentPnl;return`${t}_${a}_${o}_${n+r}`},onRowClick:e=>{null===a||void 0===a||a(e)},getRowStyling:({idx:e})=>e%2===0?w:$,defaultSortByColumn:{columnKey:"percentRank"},isLoading:r})};const v={};v.TrophyIcon=Object(o.c)(s.Jb)`
  height: 16px;

  color: ${({color:e})=>({gold:o.b`#ffbf43`}[e])};

  path {
    fill: currentColor;
  }
`;const w=o.b`
  background: var(--color-layer-base);
`,$=o.b`
  background: var(--color-layer-light);
`,S=Object(o.c)(u.c)`
  && {
    th > & {
      padding: 12px 12px;
    }
  }
`;v.SortableTable=Object(o.c)(u.b)`
  --table-max-border-radius: 12px;

  th {
    background-color: var(--color-layer-dark);
  }

  td {
    border-top: solid 1px var(--color-layer-light);
  }
`,v.RankCell=Object(o.c)(S)`
  gap: 2px;

  .rank {
    display: inline-block;
    text-align: center;
    min-width: 1.25em;
    ${p.e.size14}

    @media ${p.a.tablet} {
      ${p.e.size16}
    }
  }
`,v.TraderCell=Object(o.c)(S)`
  gap: 8px;

  > div {
    display: grid;
    grid-auto-flow: row;
    gap: 2px;
    align-items: center;
  }
`,v.UsernameH3=o.c.h3`
  color: var(--color-text-base);

  ${p.e.size13}
  @media ${p.a.tablet} {
    ${p.e.size14}
  }

  &:only-child {
    color: var(--color-text-base);

    ${p.e.size14}
    @media ${p.a.tablet} {
      ${p.e.size15}
    }
  }
`,v.Address=Object(o.c)(g.a)`
  color: var(--color-text-dark);
  ${p.e.size11}

  @media ${p.a.tablet} {
    ${p.e.size12}
  }

  &:only-child {
    color: var(--color-text-base);
    ${p.e.size13}

    @media ${p.a.tablet} {
      ${p.e.size15}
    }
  }
`,v.StackedPnlCell=Object(o.c)(S)`
  grid-auto-flow: row;
  gap: 2px;
  ${p.f.monoRegular}
  ${p.e.size12}
  color: var(--color-text-dark);

  @media ${p.a.tablet} {
    ${p.e.size13}
  }
`,v.ColoredSpan=o.c.span`
  color: ${({isPositive:e})=>e?o.b`var(--color-green)`:o.b`var(--color-red)`};
`,v.ColoredCell=Object(o.c)(S)`
  ${p.f.monoRegular}
  ${p.e.size14}
  color: ${({isPositive:e})=>e?o.b`var(--color-green)`:o.b`var(--color-red)`};

  > svg path {
    stroke: currentColor;
  }

  @media ${p.a.tablet} {
    ${p.e.size16}
  }
`},2125:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),i=r(9),o=r(10),l=r(25),d=r(32),c=r(68),s=r(17),p=r(1759),u=r(95),m=r(1774),g=r(244),b=r(372),y=r(1),x=r(19),h=r(30),f=r(190);function asyncGeneratorStep(e,t,r,a,n,i,o){try{var l=e[i](o),d=l.value}catch(c){return void r(c)}l.done?t(d):Promise.resolve(d).then(a,n)}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(d){l=!0,n=d}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const v={};v.HedgieImgContainer=i.c.div`
  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  margin: 16px 0;

  @media ${s.a.mobileTiny} {
    height: 360px;
  }
`,v.Owner=i.c.span`
  color: var(--color-text-light);
  ${s.e.size16}
`,v.OwnerDetails=i.c.div`
  color: var(--color-text-dark);
  ${s.e.size14}
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media ${s.a.tablet} {
    display: none;
  }
`,v.HedgieDescription=i.c.span`
  color: var(--color-text-dark);
  ${s.e.size15}
  flex: 1;
  margin-bottom: 16px;
  margin-top: 6px;

  @media ${s.a.tablet} {
    flex: 0;
    margin-bottom: 0;
  }
`,v.HedgieNumber=i.c.h1`
  ${s.e.size28}
  color: var(--color-text-light);
`,v.TraitValue=i.c.span`
  color: var(--color-text-light);
`,v.AttributeRow=i.c.div`
  ${s.e.size15}
  color: var(--color-text-dark);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  white-space: nowrap;
  gap: 16px;

  &:not(:last-of-type) {
    border-bottom: solid 1px var(--color-border-grey);
  }

  @media ${s.a.tablet} {
    ${s.e.size16}
  }
`,v.HedgieDetails=i.c.div`
  display: flex;
  flex-direction: column;
  padding-right: 24px;
  margin-right: 40px;
  border-right: solid 1px var(--color-border-grey);
  height: 100%;
  min-width: 156px;
  width: 100%;

  @media ${s.a.tablet} {
    border-right: none;
    padding-right: 0;
    margin-right: 0;
    height: unset;
    margin-bottom: 16px;
  }
`,v.HedgieTraits=i.c.div`
  min-width: 256px;
  width: 100%;
  overflow-y: auto;
`,v.HedgieDetailsContainer=i.c.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  padding: 32px 40px;

  ${({isSidebarOpen:e})=>e&&i.b`
      @media ${s.a.desktopSmall} {
        background-color: var(--color-layer-light);
        border-radius: 24px;
      }
    `}

  @media ${s.a.tablet} {
    flex-direction: column;
    padding: 28px 32px;
  }
`,v.HedgieImg=i.c.img`
  height: 100%;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  ${({isSidebarOpen:e})=>e&&i.b`
      @media ${s.a.desktopSmall} {
        position: absolute;
        top: -9999px;
        left: -9999px;
        right: -9999px;
        bottom: -9999px;
        margin: auto;
        height: unset;
        width: 100%;
        border-radius: 24px;
      }
    `}

  @media ${s.a.mobileTiny} {
    height: 100%;
    width: unset;
  }
`,v.SmallViewDailyHedgieContainer=i.c.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;

  ${({isLoading:e})=>e&&i.b`
      @media ${s.a.desktopSmall} {
        height: 315px;
        background-color: var(--color-layer-light);
        border-radius: 25px;
      }

      @media ${s.a.tablet} {
        background-color: transparent;
        border-radius: 0;
        height: 100%;
      }
    `}
`,v.DailyHedgieContainer=i.c.div`
  display: flex;
  flex-direction: row;
  background-color: var(--color-layer-light);
  border-radius: 25px;
  height: 315px;
  margin: 0 0 16px;
  overflow: hidden;

  ${({isSidebarOpen:e})=>e?`\n          @media (max-width: calc(${x.m}px + ${x.q}px)) {\n            margin: 0 16px 16px;\n          }\n        `:`\n          @media (max-width: calc(${x.m}px + ${x.p}px)) {\n            margin: 0 16px 16px;\n          }\n        `}
`;var competition_DailyHedgie=({hedgieIds:e,isSidebarOpen:t,stringGetter:r})=>{const i=_slicedToArray(Object(a.useState)(!1),2),o=i[0],l=i[1],d=_slicedToArray(Object(a.useState)(),2),s=d[0],p=d[1],u=null===e||void 0===e?void 0:e[0],m=Object(c.b)(),g=m.isDesktopSmall,b=m.isTablet,x=function(){var e=function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function _next(e){asyncGeneratorStep(i,a,n,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(i,a,n,_next,_throw,"throw",e)}_next(void 0)}))}}((function*(){l(!0);const e=yield fetch(`https://media.dydx.exchange/hedgies/${u}.json`),t=yield e.json();p(t),l(!1)}));return function fetchHedgieDetails(){return e.apply(this,arguments)}}();Object(a.useEffect)(()=>{!s&&(null===e||void 0===e?void 0:e.length)>0&&x()},[e]);const renderHedgieDetails=()=>n.a.createElement(v.HedgieDetails,null,n.a.createElement(v.HedgieNumber,null,u?"#"+u:"-"),n.a.createElement(v.HedgieDescription,null,r({key:y.a.GIVEN_TO})),n.a.createElement(v.OwnerDetails,null,r({key:y.a.HELD_BY}),n.a.createElement(v.Owner,null,r({key:y.a.NO_WINNER}))));return g&&t||b?n.a.createElement(v.SmallViewDailyHedgieContainer,{isLoading:o||!u},o||!u?n.a.createElement(f.a,null):n.a.createElement(n.a.Fragment,null,n.a.createElement(v.HedgieImgContainer,null,n.a.createElement(v.HedgieImg,{alt:"",isSidebarOpen:t||b,onClick:e=>{e.stopPropagation(),window.open("https://hedgies.wtf/explore/"+u,"_blank")},src:`https://media.dydx.exchange/hedgies/${u}.png`})),n.a.createElement(v.HedgieDetailsContainer,{isSidebarOpen:t||b},renderHedgieDetails(),n.a.createElement(v.HedgieTraits,null,null===s||void 0===s?void 0:s.attributes.map(({trait_type:e,value:t})=>n.a.createElement(v.AttributeRow,{key:e},e,n.a.createElement(v.TraitValue,null,t))))))):n.a.createElement(v.DailyHedgieContainer,{isSidebarOpen:t},o||!u?n.a.createElement(f.a,null):n.a.createElement(n.a.Fragment,null,n.a.createElement(v.HedgieDetailsContainer,{isSidebarOpen:t},renderHedgieDetails(),n.a.createElement(v.HedgieTraits,null,null===s||void 0===s?void 0:s.attributes.map(({trait_type:e,value:t})=>n.a.createElement(v.AttributeRow,{key:e},e,n.a.createElement(v.TraitValue,null,t))))),n.a.createElement(v.HedgieImg,{alt:"",isSidebarOpen:t,onClick:e=>{e.stopPropagation(),window.open("https://hedgies.wtf/explore/"+u,"_blank")},src:`https://media.dydx.exchange/hedgies/400x400/${u}.png`})))},w=r(1801);const $={};$.HedgiesListTabletContainer=i.c.div`
  display: flex;
  overflow: hidden;
  width: 100%;
`,$.TextContainer=i.c.div`
  display: flex;
  flex-direction: column;
  white-space: nowrap;
  margin-right: 20px;
  ${s.e.size18}
  color: var(--color-text-base);

  @media ${s.a.tablet} {
    margin: 8px 0 16px;
    ${s.e.size20}
  }
`,$.SubText=i.c.span`
  color: var(--color-text-dark);
  ${s.e.size14}

  @media ${s.a.tablet} {
    ${s.e.size16}
  }
`,$.HedgieImg=i.c.img`
  height: 64px;
  width: 64px;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:last-of-type {
    margin-right: 16px;
  }
`,$.PastDailyHedgiesContainer=i.c.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  background-color: var(--color-layer-light);
  padding: 10px 22px;
  padding-right: 0;
  align-items: center;
  border-radius: 12px;
  margin: 16px 0 16px;

  @media ${s.a.tablet} {
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 16px;
  }

  ${({isSidebarOpen:e})=>e?`\n          @media (max-width: calc(${x.m}px + ${x.q}px)) {\n            margin: 16px;\n          }\n        `:`\n          @media (max-width: calc(${x.m}px + ${x.p}px)) {\n            margin: 16px;\n          }\n        `}
`,$.HedgiesList=i.c.div`
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  gap: 8px;
`;var competition_PastDailyHedgies=({isSidebarOpen:e,stringGetter:t})=>{const r=Object(o.f)(g.h,o.d),a=Object(c.b)().isTablet;return n.a.createElement($.PastDailyHedgiesContainer,{isSidebarOpen:e},n.a.createElement($.TextContainer,null,t({key:y.a.PAST_HEDGIES}),n.a.createElement($.SubText,null,t({key:y.a.BY_RECENT}))),a?n.a.createElement($.HedgiesListTabletContainer,null,n.a.createElement($.HedgiesList,null,r.map(({competitionPeriod:e,tokenIds:t})=>{const r=null===t||void 0===t?void 0:t[0];return n.a.createElement($.HedgieImg,{key:e,alt:"",onClick:e=>{e.stopPropagation(),window.open("https://hedgies.wtf/explore/"+r,"_blank")},src:`https://media.dydx.exchange/hedgies/400x400/${r}.png`})}))):n.a.createElement($.HedgiesList,null,r.map(({competitionPeriod:e,tokenIds:t})=>{const r=null===t||void 0===t?void 0:t[0];return n.a.createElement($.HedgieImg,{key:e,alt:"",onClick:e=>{e.stopPropagation(),window.open("https://hedgies.wtf/explore/"+r,"_blank")},src:`https://media.dydx.exchange/hedgies/400x400/${r}.png`})})))};function DailyCompetition_asyncGeneratorStep(e,t,r,a,n,i,o){try{var l=e[i](o),d=l.value}catch(c){return void r(c)}l.done?t(d):Promise.resolve(d).then(a,n)}function DailyCompetition_slicedToArray(e,t){return function DailyCompetition_arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function DailyCompetition_iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,i=[],o=!0,l=!1;try{for(r=r.call(e);!(o=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);o=!0);}catch(d){l=!0,n=d}finally{try{o||null==r.return||r.return()}finally{if(l)throw n}}return i}(e,t)||function DailyCompetition_unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return DailyCompetition_arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return DailyCompetition_arrayLikeToArray(e,t)}(e,t)||function DailyCompetition_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function DailyCompetition_arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const S={};S.ColoredSpan=i.c.span`
  color: var(--color-red);

  ${({isActive:e})=>e&&i.b`
      color: var(--color-green);
    `}
`,S.BillboardIconButton=Object(i.c)(u.b)`
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
`,S.BillboardContainer=i.c.div`
  display: flex;
  align-items: center;
  justify-content: end;

  span {
    white-space: nowrap;
  }

  ${p.a.BillboardsContainer} {
    padding: 4px 0 0 0;
  }

  ${p.a.SingleCard} {
    padding: 0 16px;
    text-align: end;
    ${s.e.size22}
    white-space: nowrap;

    &:last-of-type {
      padding-right: 0;
    }
  }

  ${p.a.CardTitle} {
    margin-bottom: 4px;
  }

  @media ${s.a.tablet} {
    ${s.e.size22}
    padding: 24px 0;
    justify-content: start;
    border-top: 1px solid var(--color-border-grey);
    border-bottom: 1px solid var(--color-border-grey);
    margin-top: 32px;

    ${p.a.MobileBillboardsContainer} {
      width: 100%;
    }

    ${p.a.SingleCard} {
      text-align: start;

      &:first-of-type {
        width: 40%;
        min-width: 120px;
      }

      &:not(:first-of-type) {
        width: 60%;
      }
    }

    ${p.a.MobileTitle} {
      margin-bottom: 6px;
    }
  }

  @media ${s.a.mobile} {
    overflow-x: auto;
  }
`,S.Countdown=i.c.span`
  display: flex;
  flex-direction: row;
  gap: 2px;
  color: var(--color-text-light);
  ${s.e.size22}

  @media ${s.a.tablet} {
    ${s.e.size24}
  }
`,S.DailyCompetitionHeader=i.c.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 4px;

  @media ${s.a.tablet} {
    grid-template-columns: 1fr;
  }

  @media ${s.a.mobile} {
    overflow: hidden;
  }
`,S.CompetitionContent=i.c.div`
  display: flex;
  flex-direction: column;
  padding: 32px 0 16px 0;
  overflow: hidden;
`,S.DailyCompetitionContainer=i.c.div`
  display: grid;
  grid-auto-rows: auto 1fr;

  ${({isSidebarOpen:e})=>e?`\n          @media (max-width: calc(${x.m}px + ${x.q}px)) {\n            ${S.CompetitionContent} {\n              padding: 32px 16px 16px;\n            }\n\n            ${S.BillboardContainer} {\n              ${p.a.SingleCard} {\n                padding-right: 16px;\n              }\n            }\n          }\n        `:`\n          @media (max-width: calc(${x.m}px + ${x.p}px)) {\n            ${S.CompetitionContent} {\n              padding: 32px 16px 16px;\n            }\n\n            ${S.BillboardContainer} {\n              ${p.a.SingleCard} {\n                padding-right: 16px;\n              }\n            }\n          }\n        `}

  @media ${s.a.tablet} {
    grid-auto-rows: auto auto 1fr;

    ${S.CompetitionContent} {
      padding: 0 0 16px;
    }
  }
`;t.default=Object(l.i)(Object(d.c)(({history:e,stringGetter:t})=>{var r;const i=DailyCompetition_slicedToArray(Object(a.useState)(!1),2),l=i[0],d=i[1],s=DailyCompetition_slicedToArray(Object(a.useState)(void 0),2),u=s[0],f=s[1],v=Object(o.f)(b.b),$=Object(o.f)(g.a,o.d),C=Object(o.f)(g.b,o.d),E=(null===(r=$.daily)||void 0===r?void 0:r.tokenIds)||[],T=Object(c.b)().isTablet,k=function(){var e=function DailyCompetition_asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var i=e.apply(t,r);function _next(e){DailyCompetition_asyncGeneratorStep(i,a,n,_next,_throw,"next",e)}function _throw(e){DailyCompetition_asyncGeneratorStep(i,a,n,_next,_throw,"throw",e)}_next(void 0)}))}}((function*(){d(!0);try{const e=yield h.c.getLeaderboardPnls({period:h.a.DAILY_COMPETITION,sortBy:h.b.PERCENT,startingBeforeOrAt:(new Date).toISOString()});f(e)}catch(e){}finally{d(!1)}}));return function fetchLeaderboardRankings(){return e.apply(this,arguments)}}();Object(a.useEffect)(()=>{f(void 0),k()},[]);const O=Object(c.d)({futureDateISO:null===u||void 0===u?void 0:u.endsAt,stringGetter:t}),A=O.days,_=O.hours,D=O.minutes,j=O.value,I=!!A&&!!_&&!!D,R="0"===A&&"0"===_&&"0"===D,Countdown=()=>n.a.createElement(n.a.Fragment,null,null!==u&&void 0!==u&&u.endsAt&&I&&!R?n.a.createElement(S.Countdown,null,n.a.createElement("h2",null,j)):n.a.createElement(S.Countdown,null,"-")),P=[{key:"rank",title:t({key:y.a.RANK}),value:n.a.createElement("span",null,null!==C&&void 0!==C&&C.percentRank?""+C.percentRank:"-")},{key:"countdown",title:t({key:y.a.COUNTDOWN}),value:n.a.createElement(Countdown,null)}];return n.a.createElement(S.DailyCompetitionContainer,{isSidebarOpen:v},n.a.createElement(S.CompetitionContent,null,n.a.createElement(S.DailyCompetitionHeader,null,n.a.createElement(m.a,{isSidebarOpen:v,src:"/badges/daily.png",title:t({key:y.a.DAILY}),subtitle:t({key:y.a.DAILY_SUBHEADER})}),!T&&n.a.createElement(S.BillboardContainer,null,n.a.createElement(p.b,{billboardItems:P}))),n.a.createElement(competition_DailyHedgie,{isSidebarOpen:v,hedgieIds:E,stringGetter:t}),n.a.createElement(competition_PastDailyHedgies,{isSidebarOpen:v,stringGetter:t}),T&&n.a.createElement(S.BillboardContainer,null,n.a.createElement(p.b,{billboardItems:P}))),n.a.createElement(w.a,{dailyCompetition:!0,displayUser:!0,hidePromotionColumn:!0,isLoading:l,onRowClick:({publicId:t})=>{e.push(`${x.l.RANKINGS}/u/${t}`)},period:"DAILY",pnlData:null===u||void 0===u?void 0:u.topPnls,stringGetter:t,userPnlData:C}))}))}}]);