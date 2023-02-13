(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{2146:function(e,t,i){"use strict";i.r(t);var l=i(0),a=i.n(l),o=i(9),n=i(16),r=i.n(n),c=i(10),d=i(32),s=i(15),g=i(101),h=i(592),m=i(33),p=i(131),b=i(23),I=i(1),E=i(17);t.default=Object(d.c)(({closeMobileNavigation:e,closeModal:t,inline:i=!1,stringGetter:l})=>{const o=Object(c.e)(),n=Object(c.f)(p.c),d=a.a.createElement(a.a.Fragment,null,a.a.createElement(h.a,{hideMobile:!0,title:l({key:I.a.HELP}),closeModal:t}),a.a.createElement(v.List,null,[{Icon:s.F,titleStringKey:I.a.HELP_CENTER,subtitleStringKey:I.a.HELP_CENTER_DESCRIPTION,key:"help-center",onClick:()=>window.open("https://help.dydx.exchange/"+n,"_blank")},{Icon:s.Eb,titleStringKey:I.a.API_DOCUMENTATION,subtitleStringKey:I.a.API_DOCUMENTATION_DESCRIPTION,key:"api-documentation",onClick:()=>window.open("https://docs.dydx.exchange","_blank"),pathFillIcon:!0},{Icon:s.x,titleStringKey:I.a.JOIN_DISCORD,subtitleStringKey:I.a.JOIN_DISCORD_DESCRIPTION,key:"join-discord",onClick:()=>window.open("https://discord.com/invite/yah42Rb","_blank"),pathFillIcon:!0},{Icon:v.ChatIcon,titleStringKey:I.a.LIVE_CHAT,subtitleStringKey:I.a.LIVE_CHAT_DESCRIPTION,key:"live-chat",onClick:()=>{var e;null===(e=globalThis.Intercom)||void 0===e||e.call(globalThis,"show")}},{Icon:s.E,titleStringKey:I.a.PROVIDE_FEEDBACK,subtitleStringKey:I.a.PROVIDE_FEEDBACK_DESCRIPTION,key:"provide-feedback",onClick:()=>{null===e||void 0===e||e(),o(Object(m.c)({modalType:b.a.FEEDBACK}))},pathFillIcon:!0}].map(({Icon:e,titleStringKey:t,subtitleStringKey:i,key:o,onClick:n,pathFillIcon:c=!1})=>a.a.createElement("div",{role:"button",tabIndex:0,key:o,className:r()({pathFillIcon:c}),onClick:n},a.a.createElement(e,null),a.a.createElement("div",null,a.a.createElement(v.Title,null,l({key:t})),a.a.createElement(v.Subtitle,null,l({key:i})))))));return i?d:a.a.createElement(g.h,null,d)});const v={};v.Title=o.c.div`
  ${E.e.size15};

  @media ${E.a.tablet} {
    ${E.e.size18};
  }
`,v.Subtitle=o.c.div`
  @include font-regular;
  ${E.e.size13};
  color: var(--color-text-dark);
  margin-top: 2px;

  @media ${E.a.tablet} {
    ${E.e.size15};
  }
`,v.List=o.c.div`
  --list-item-height: 68px;
  --list-item-height-mobile: 92px;

  --list-item-margin: 24px;
  --list-item-margin-mobile: 28px;

  padding: 0 var(--list-item-margin);

  @media ${E.a.tablet} {
    padding: 0;
  }

  > * {
    display: flex;
    align-items: center;
    height: var(--list-item-height);
    cursor: pointer;

    @media ${E.a.tablet} {
      height: var(--list-item-height-mobile);
      padding: 0 var(--list-item-margin-mobile);
      border-bottom: solid 1px var(--color-border-grey);
    }

    &:last-child {
      padding-bottom: 4px;
    }

    @media ${E.a.notTablet} {
      &:hover {
        color: var(--color-text-light);
        background-color: var(--color-layer-light);
        margin: 0 calc(-1 * var(--list-item-margin)) 0;
        padding: 0 var(--list-item-margin);

        &:last-child {
          padding-bottom: 4px;
        }

        ${v.Subtitle} {
          color: var(--color-text-light);
        }

        > svg {
          rect {
            stroke: var(--color-text-light);
          }

          path {
            stroke: var(--color-text-light);
          }
        }

        &.pathFillIcon > svg path {
          stroke: none;
          fill: var(--color-text-light);
        }
      }
    }

    > svg {
      width: 16px;
      height: 16px;
      margin-right: 16px;

      @media ${E.a.tablet} {
        width: 20px;
        height: 20px;
      }
    }

    ${v.Title} {
      ${E.e.size15};

      @media ${E.a.tablet} {
        ${E.e.size18};
      }
    }

    ${v.Subtitle} {
      @include font-regular;
      ${E.e.size13};
      color: var(--color-text-dark);
      margin-top: 2px;

      @media ${E.a.tablet} {
        ${E.e.size15};
      }
    }
  }
`,v.ChatIcon=Object(o.c)(s.n)`
  > path {
    stroke: var(--color-text-dark);
  }
`}}]);