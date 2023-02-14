(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{1731:function(e,t,r){"use strict";r.d(t,"a",(function(){return y}));var a=r(0),n=r.n(a),o=r(2),l=r.n(o),i=r(9),c=r(17),d=r(19);const SectionHeader=({cardPadding:e,className:t,contentRight:r,isSidebarOpen:a,title:o,subtitle:l})=>n.a.createElement(s,{cardPadding:e,className:t,isSidebarOpen:a},n.a.createElement(u,null,n.a.createElement(p,null,o),l&&n.a.createElement(b,null,l)),r),s=i.c.div`
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

  ${({cardPadding:e,isSidebarOpen:t})=>t?`\n          @media (max-width: calc(${d.m}px + ${d.q}px)) {\n            padding-left: ${e?"36px":"24px"};\n            padding-right: ${e?"36px":"24px"};\n\n            @media ${c.a.tablet} {\n              padding-left: ${e?"32px":"20px"};\n              padding-right: ${e?"32px":"20px"};\n            }\n          }\n        `:`\n          @media (max-width: calc(${d.m}px + ${d.p}px)) {\n            padding-left: 24px;\n            padding-right: 24px;\n\n            @media ${c.a.tablet} {\n              padding-left: 20px;\n              padding-right: 20px;\n            }\n          }\n        `}
`,u=i.c.div`
  @media ${c.a.notTablet} {
    padding-right: 20px;
  }
`,p=i.c.h2`
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
`,b=i.c.h3`
  ${c.e.size14}
  color: var(--color-text-dark);
  margin-top: 4px;

  @media ${c.a.tablet} {
    ${c.e.size16}
  }
`;SectionHeader.propTypes={cardPadding:l.a.bool,className:l.a.string,contentRight:l.a.node,isSidebarOpen:l.a.bool,title:l.a.node.isRequired,subtitle:l.a.node};var y=SectionHeader},1763:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return SortableTable})),r.d(t,"c",(function(){return m}));var a=r(0),n=r.n(a),o=r(2),l=r.n(o),i=r(9),c=r(17),d=r(15),s=r(373);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);l=!0);}catch(c){i=!0,n=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw n}}return o}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const u={STRING:"STRING",NUMBER:"NUMBER"},p="INCREASING",b="DECREASING",renderDefaultHeaderCell=({columnKey:e,label:t,align:r,isSortable:a,isSorted:o,sortDirection:l,onClick:i,renderHeaderContent:c=(()=>null!==t&&void 0!==t?t:e)})=>a?n.a.createElement(y.TableCellWithSortToggle,{role:"button",tabIndex:"0",onClick:i,isSorted:o,align:r},n.a.createElement("span",null,c()),n.a.createElement(y.SortDirectionArrow,{sortDirection:l},n.a.createElement(d.c,null))):n.a.createElement(y.TableCell,{align:r},c()),renderDefaultCell=(e,t,r,a,o)=>n.a.createElement(y.TableCell,{align:a},o(e,t,r)),SortableTable=({columns:e=[],data:t=[],emptyState:r,getRowIsPinned:o,getRowIsSticky:l,getRowKey:i,getRowStyling:c,defaultSortByColumn:d,onRowClick:s,className:m,isLoading:g})=>{var f;const h={columnKey:null===d||void 0===d?void 0:d.columnKey,sortDirection:null!==(f=null===d||void 0===d?void 0:d.sortDirection)&&void 0!==f?f:(null===d||void 0===d?void 0:d.columnKey)&&p},v=_slicedToArray(Object(a.useState)(h),2),T=v[0],S=v[1];return n.a.createElement(y.TableWrapper,{className:m},n.a.createElement(y.Table,null,n.a.createElement(y.Thead,null,n.a.createElement(y.Tr,null,e.map(({key:e,label:t,isSortable:r=!1,align:a,fillWidth:o=!1,renderHeaderCell:l=renderDefaultHeaderCell,renderHeaderContent:i})=>n.a.createElement(y.Th,{key:e,align:a,fillWidth:o},l({columnKey:e,label:t,renderHeaderContent:i,align:a,isSortable:r,isSorted:T.columnKey===e,sortDirection:T.columnKey===e?T.sortDirection:void 0,onClick:r?()=>(e=>{e!==T.columnKey?S({columnKey:e,sortDirection:p}):T.sortDirection===p?S({columnKey:e,sortDirection:b}):T.sortDirection===b&&S(h)})(e):void 0}))))),(null===t||void 0===t?void 0:t.length)>0&&n.a.createElement("tbody",null,t.sort((t,r)=>{const a=T.columnKey,n=T.sortDirection===p,l=e.find(({key:e})=>a===e)||{},i=l.sortType,c=void 0===i?u.STRING:i,d=l.unsortedFirst,s=void 0===d||d,b=l.sort,y=void 0===b?(e,t)=>{const r=e[a],o=t[a];return c===u.STRING?String(r||(s===n?"":o+" ")).localeCompare(String(o||(s===n?"":r+" "))):parseFloat(null!==r&&void 0!==r?r:s?-1/0:1/0)-parseFloat(null!==o&&void 0!==o?o:s?-1/0:1/0)}:b;return null!==o&&void 0!==o&&o(t)?-1:null!==o&&void 0!==o&&o(r)?1:y(t,r)*(n?1:-1)}).map((t,r)=>n.a.createElement(y.Tr,{key:i(t,r),isPinned:null===o||void 0===o?void 0:o(t),isSticky:null===l||void 0===l?void 0:l(t),additionalStyles:null===c||void 0===c?void 0:c({idx:r,rowData:t}),onClick:s?()=>null===s||void 0===s?void 0:s(t):null},e.map(({key:e,align:a,renderCell:o=renderDefaultCell,renderContent:l=(e=>e)})=>n.a.createElement(y.Td,{key:e},o(t[e],r,t,a,l))))))),g&&n.a.createElement(y.EmptyState,null,n.a.createElement(y.LoadingSpinner,{id:"sortable-table"})),!(null!==t&&void 0!==t&&t.length)&&!g&&r&&n.a.createElement(y.EmptyState,null,r))};SortableTable.propTypes={className:l.a.string,columns:l.a.array.isRequired,data:l.a.array,defaultSortByColumn:l.a.object,emptyState:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node,l.a.string]),getRowIsPinned:l.a.func,getRowIsSticky:l.a.func,getRowKey:l.a.func.isRequired,getRowStyling:l.a.func,isLoading:l.a.bool,onRowClick:l.a.func};const y={};y.EmptyState=i.c.div`
  margin: 28px auto;
`,y.LoadingSpinner=Object(i.c)(s.a)``,y.TableWrapper=i.c.div`
  --border-radius: min(var(--master-detail-leftover-width), var(--table-max-border-radius, 12px));
  --table-header-height: 39px;
  --horizontal-padding: 16px;

  @media ${c.a.tablet} {
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
`,y.Table=i.c.table`
  width: 100%;

  ${c.e.size13}
`,y.Thead=i.c.thead`
  color: var(--color-text-dark);
  letter-spacing: 0;
  position: sticky;
  top: 0;

  @media ${c.a.tablet} {
    ${c.e.size14}
  }
`,y.Tr=i.c.tr`
  ${({isSticky:e})=>e&&i.b`
      position: sticky;
      top: var(--table-header-height);
      bottom: 0;

      box-shadow: 0 -0.5px 0 0.5px var(--color-border-grey);

      background-color: var(--color-layer-light);
    `}

  ${({additionalStyles:e})=>null!==e&&void 0!==e?e:""}

  ${({onClick:e})=>e&&i.b`
      cursor: pointer;

      &:hover {
        filter: brightness(1.1);
      }
    `}

  tbody & {
    scroll-snap-align: start;
    scroll-margin-top: var(--table-header-height);
  }
`,y.ThOrTd=i.b`
  vertical-align: middle;
`,y.Th=i.c.th`
  ${y.ThOrTd}

  text-align: inherit;
  white-space: nowrap;

  background-color: var(--color-layer-dark);

  ${({fillWidth:e})=>e&&i.b`
      width: 100%;
    `}
`,y.Td=i.c.td`
  ${y.ThOrTd}

  border-top: solid 1px var(--color-border-grey);
`,y.TableCell=i.c.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;

  text-align: left;
  text-align: ${({align:e})=>({start:"left",center:"center",end:"right"}[e])};
  justify-content: start;
  justify-content: ${({align:e})=>({start:"start",center:"center",end:"end"}[e])};

  ${y.Th} & {
    padding: 12px 12px;
  }
  ${y.Td} & {
    padding: 7px 12px;
  }

  ${y.Th}:first-child > &,
  ${y.Td}:first-child > & {
    padding-left: var(--horizontal-padding);
  }
  ${y.Th}:last-child > &,
  ${y.Td}:last-child > & {
    padding-right: var(--horizontal-padding);
  }
`;const m=y.TableCell;y.TableCellWithSortToggle=Object(i.c)(y.TableCell)`
  cursor: pointer;
  transition: color 0.15s;

  gap: 0.33em;

  ${({align:e})=>"end"===e&&i.b`
      // Reverse order
      & > :first-child {
        order: 2;
      }
    `}

  @media ${c.a.notTablet} {
    &:hover {
      color: var(--color-text-light);
    }
  }
  ${({isSorted:e})=>e&&i.b`
      color: var(--color-text-light);
    `}
`,y.SortDirectionArrow=i.c.div`
  transform: perspective(10px) scale(0.00001);
  transition: transform 0.25s cubic-bezier(0.33, 1.55, 0.25, 1), font-size 0.12s ease-out,
    opacity 0.15s;

  > svg {
    width: 10px;
  }

  ${({sortDirection:e})=>({[p]:i.b`
        transform: perspective(10px) rotateX(180deg);
      `,[b]:i.b`
        transform: perspective(10px) rotateX(0);
      `}[e])}
`},1877:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(9),l=r(2),i=r.n(l),c=r(32),d=r(36),s=r(245),u=r(30),p=r(374);const b={[u.a.DAILY]:s.b.DAY,[u.a.WEEKLY]:s.b.WEEK,[u.a.MONTHLY]:s.b.MONTH,[u.a.ALL_TIME]:s.b.ALL},y=o.c.div`
  display: grid;
  grid-auto-flow: column;
  gap: 6px;
  padding: 6px;

  background-color: var(--color-layer-dark);
  border-radius: 10px;

  margin-left: auto;
`,PnlPeriodSelect=({selectedPeriod:e,setSelectedPeriod:t,stringGetter:r})=>n.a.createElement(y,null,[u.a.DAILY,u.a.WEEKLY,u.a.MONTHLY,u.a.ALL_TIME].map(a=>n.a.createElement(d.a,{key:a,active:a===e,color:d.b.TransparentLight,onClick:()=>t(a),size:d.d.Tiny},Object(p.a)({timeframe:b[a],stringGetter:r}))));PnlPeriodSelect.propTypes={selectedPeriod:i.a.oneOf(Object.values(u.a)).isRequired,setSelectedPeriod:i.a.func.isRequired,stringGetter:i.a.func.isRequired},t.a=Object(c.c)(PnlPeriodSelect)},1878:function(e,t,r){"use strict";var a=r(0),n=r.n(a),o=r(10),l=r(2),i=r.n(l),c=r(9),d=r(91),s=r(25),u=r(76),p=r(1),b=r(17),y=r(1763),m=r(607),g=r(603),f=r(15),h=r(68),v=r(56),T=r(37),S=r(115),x=r(19),E=r(30),O=r(375);function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach((function(t){_defineProperty(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function asyncGeneratorStep(e,t,r,a,n,o,l){try{var i=e[o](l),c=i.value}catch(d){return void r(d)}i.done?t(c):Promise.resolve(c).then(a,n)}function _asyncToGenerator(e){return function(){var t=this,r=arguments;return new Promise((function(a,n){var o=e.apply(t,r);function _next(e){asyncGeneratorStep(o,a,n,_next,_throw,"next",e)}function _throw(e){asyncGeneratorStep(o,a,n,_next,_throw,"throw",e)}_next(void 0)}))}}function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);l=!0);}catch(c){i=!0,n=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw n}}return o}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const ProfitAndLossTable=({history:e,period:t,sortBy:r,isCompetition:l=!1,stringGetter:i})=>{var c,s;const b=null!==(c=Object(o.f)(T.o))&&void 0!==c?c:"",g=Object(o.f)(S.a),f=null!==(s=Object(o.f)(v.r))&&void 0!==s?s:"",A=_slicedToArray(Object(a.useState)(void 0),2),$=A[0],k=A[1],R=Object(a.useRef)({}).current;Object(a.useEffect)(_asyncToGenerator((function*(){var e,a;k(R[[t,r]]),k(null===(e=R[a=[t,r]]||(R[a]=l?yield E.c.getLeaderboardPnlsCompetition({sortBy:r}):yield E.c.getLeaderboardPnls({period:t,sortBy:r})))||void 0===e?void 0:e.topPnls)})),[t,r]);const j=_slicedToArray(Object(a.useState)(void 0),2),C=j[0],_=j[1],P=Object(a.useRef)({}).current;Object(a.useEffect)(_asyncToGenerator((function*(){var e;b&&g?_(P[e=[b,t]]||(P[e]=l?yield E.c.getAccountLeaderboardPnlCompetition():yield E.c.getAccountLeaderboardPnl({period:t}))):_(void 0)})),[b,g,t]);const viewUserProfile=({publicId:t})=>{e.push(`${x.l.RANKINGS}/u/${t}`)},L=$&&C&&null!==(null===C||void 0===C?void 0:C.updatedAt)?[...$.filter(({ethereumAddress:e})=>!Object(O.a)(e,b)),_objectSpread(_objectSpread({},C),{},{username:f,ethereumAddress:b})]:$,I={[E.b.ABSOLUTE]:"absoluteRank",[E.b.PERCENT]:"percentRank"}[r],N={[E.b.ABSOLUTE]:"absolutePnl",[E.b.PERCENT]:"percentPnl"}[r],z={[E.b.ABSOLUTE]:i({key:p.a.PROFIT_AND_LOSS_ABSOLUTE_LABEL}),[E.b.PERCENT]:i({key:p.a.PROFIT_AND_LOSS_PERCENT_LABEL})}[r],D=Object(h.b)().isMobile;return n.a.createElement(w.SortableTable,{data:L,columns:[{key:I,label:D?"#":i({key:p.a.RANK}),isSortable:!0,sortType:y.a.NUMBER,align:"end",unsortedFirst:!1,renderCell:(e,t,r,a)=>n.a.createElement(w.RankCell,{align:a},{1:n.a.createElement(w.TrophyIcon,{color:"gold"}),2:n.a.createElement(w.TrophyIcon,{color:"silver"}),3:n.a.createElement(w.TrophyIcon,{color:"bronze"})}[e],(!D||e>3)&&n.a.createElement("span",{className:"rank"},e||"-"))},{key:"username",label:i({key:p.a.TRADER}),isSortable:!0,sortType:y.a.STRING,fillWidth:!0,unsortedFirst:!1,renderCell:(e,t,{ethereumAddress:r},a)=>n.a.createElement(w.TraderCell,{align:a},n.a.createElement("div",null,!e&&!r&&n.a.createElement(w.UsernameH3,null,i({key:p.a.ANONYMOUS})),e&&n.a.createElement(w.UsernameH3,null,e.replace(/-([A-Z]|$)/g," $1")),r&&n.a.createElement(w.Address,{hash:r})),r&&b&&Object(O.a)(r,b)&&n.a.createElement(m.a,null,i({key:p.a.YOU})))},{key:N,label:z,isSortable:!1,sortType:y.a.NUMBER,align:"end",renderCell:(e,t,{absolutePnl:a,percentPnl:o},l)=>{const i=a>=0,c=o>=0;return n.a.createElement(w.PnlCell,{align:l},r===E.b.ABSOLUTE?n.a.createElement(n.a.Fragment,null,n.a.createElement(w.ColoredChange,{isPositive:i},n.a.createElement("div",null,i?"+":"-",n.a.createElement(d.a,{thousandSeparator:!0,displayType:"text",prefix:"$",decimalScale:2,value:Math.abs(a)}))),n.a.createElement("div",null,n.a.createElement(d.a,{thousandSeparator:!0,displayType:"text",suffix:"%",decimalScale:u.d,value:Math.abs(100*o)}))):n.a.createElement(n.a.Fragment,null,n.a.createElement(w.ColoredChange,{isPositive:c},n.a.createElement("div",null,c?"+":"-",n.a.createElement(d.a,{thousandSeparator:!0,displayType:"text",suffix:"%",decimalScale:u.d,value:Math.abs(100*o)}))),n.a.createElement("div",null,n.a.createElement(d.a,{thousandSeparator:!0,displayType:"text",prefix:"$",decimalScale:2,value:Math.abs(a)}))))}}],onRowClick:e=>{null===viewUserProfile||void 0===viewUserProfile||viewUserProfile(e)},getRowIsSticky:({ethereumAddress:e})=>e&&b&&Object(O.a)(e,b),getRowKey:(e,t)=>{const r=e.absolutePnl,a=e.ethereumAddress,n=e.percentPnl;return e.username||a||t+e[I]+n+r},defaultSortByColumn:{columnKey:I},isLoading:!(null!==L&&void 0!==L&&L.length)})};ProfitAndLossTable.propTypes={history:i.a.object,period:i.a.oneOf(Object.values(E.a)),sortBy:i.a.oneOf(Object.values(E.b)).isRequired,isCompetition:i.a.bool,stringGetter:i.a.func.isRequired},t.a=Object(s.i)(ProfitAndLossTable);const w={};w.SortableTable=Object(c.c)(y.b)`
  --table-max-border-radius: 12px;

  .green {
    color: var(--color-green);
  }

  .red {
    color: var(--color-red);
  }
`,w.RankCell=Object(c.c)(y.c)`
  gap: 2px;

  .rank {
    display: inline-block;
    text-align: center;
    min-width: 1.25em;

    ${b.e.size14}
    @media ${b.a.tablet} {
      ${b.e.size16}
    }
  }
`,w.TrophyIcon=Object(c.c)(f.Jb)`
  height: 16px;

  color: ${({color:e})=>({gold:c.b`#ffbf43`,silver:c.b`#d3d3d3`,bronze:c.b`#ff9146`}[e])};

  path {
    fill: currentColor;
  }
`,w.TraderCell=Object(c.c)(y.c)`
  gap: 8px;

  > div {
    display: grid;
    grid-auto-flow: row;
    gap: 2px;
  }
`,w.UsernameH3=c.c.h3`
  color: var(--color-text-base);

  ${b.e.size13}
  @media ${b.a.tablet} {
    ${b.e.size14}
  }

  &:only-child {
    color: var(--color-text-base);
    ${b.e.size14}

    @media ${b.a.tablet} {
      ${b.e.size15}
    }
  }
`,w.Address=Object(c.c)(g.a)`
  color: var(--color-text-dark);
  ${b.e.size11}

  @media ${b.a.tablet} {
    ${b.e.size12}
  }

  &:only-child {
    color: var(--color-text-base);
    ${b.e.size13}

    @media ${b.a.tablet} {
      ${b.e.size15}
    }
  }
`,w.PnlCell=Object(c.c)(y.c)`
  ${b.f.monoRegular}
  grid-auto-flow: row;
  gap: 2px;

  > :nth-child(1) {
    ${b.e.size12}

    @media ${b.a.tablet} {
      ${b.e.size13}
    }
  }

  > :nth-child(2) {
    color: var(--color-text-dark);
    ${b.e.size12}

    @media ${b.a.tablet} {
      ${b.e.size13}
    }
  }
`,w.ColoredChange=c.c.span`
  color: ${({isPositive:e})=>e?c.b`var(--color-green)`:c.b`var(--color-red)`};

  ${w.PnlCell} > :nth-child(2) & {
    color: inherit;
  }
`},2118:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(10),l=r(2),i=r.n(l),c=r(9),d=r(32),s=r(1877),u=r(1731),p=r(372),b=r(1),y=r(30),m=r(1878);function _slicedToArray(e,t){return function _arrayWithHoles(e){if(Array.isArray(e))return e}(e)||function _iterableToArrayLimit(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==r)return;var a,n,o=[],l=!0,i=!1;try{for(r=r.call(e);!(l=(a=r.next()).done)&&(o.push(a.value),!t||o.length!==t);l=!0);}catch(c){i=!0,n=c}finally{try{l||null==r.return||r.return()}finally{if(i)throw n}}return o}(e,t)||function _unsupportedIterableToArray(e,t){if(!e)return;if("string"===typeof e)return _arrayLikeToArray(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(e,t)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}const RankingsByPercentPNL=({stringGetter:e})=>{const t=_slicedToArray(Object(a.useState)(y.a.DAILY),2),r=t[0],l=t[1],i=y.b.PERCENT,c=Object(o.f)(p.b);return n.a.createElement(g.Container,null,n.a.createElement(u.a,{isSidebarOpen:c,title:e({key:b.a.RANKINGS}),subtitle:e({key:b.a.PROFIT_AND_LOSS_PERCENT_BY}),contentRight:n.a.createElement(s.a,{selectedPeriod:r,setSelectedPeriod:l})}),n.a.createElement(m.a,{period:r,sortBy:i,stringGetter:e}))};RankingsByPercentPNL.propTypes={stringGetter:i.a.func.isRequired},t.default=Object(d.c)(RankingsByPercentPNL);const g={};g.Container=c.c.div`
  display: grid;
  grid-template-rows: auto 1fr;

  scroll-snap-align: start;
`}}]);