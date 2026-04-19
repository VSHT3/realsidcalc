import{j as a}from"./jsx-runtime.u17CrQMm.js";import{u as J,b as Q,c as ee,i as w,r as te,d as ne,e as D,f as F,w as L,Z as re,D as ie,g as $,h as V,j as H,k as Z,s as W,l as ae,R as se,A as oe,C as o,X as le,Y as ce,T as de,a as C}from"./calc-colors.CA_o-Cja.js";import{r as p}from"./index.D0zW3GPc.js";var pe=["x1","y1","x2","y2","key"],he=["offset"],xe=["xAxisId","yAxisId"],ue=["xAxisId","yAxisId"];function B(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?B(Object(r),!0).forEach(function(n){fe(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):B(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function fe(e,t,r){return(t=me(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function me(e){var t=ge(e,"string");return typeof t=="symbol"?t:t+""}function ge(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function b(){return b=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(null,arguments)}function z(e,t){if(e==null)return{};var r,n,i=ye(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)===-1&&{}.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}function ye(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var ve=e=>{var{fill:t}=e;if(!t||t==="none")return null;var{fillOpacity:r,x:n,y:i,width:s,height:h,ry:d}=e;return p.createElement("rect",{x:n,y:i,ry:d,width:s,height:h,stroke:"none",fill:t,fillOpacity:r,className:"recharts-cartesian-grid-bg"})};function Y(e){var{option:t,lineItemProps:r}=e,n;if(p.isValidElement(t))n=p.cloneElement(t,r);else if(typeof t=="function")n=t(r);else{var i,{x1:s,y1:h,x2:d,y2:m,key:c}=r,x=z(r,pe),l=(i=ae(x))!==null&&i!==void 0?i:{},{offset:u}=l,g=z(l,he);n=p.createElement("line",b({},g,{x1:s,y1:h,x2:d,y2:m,fill:"none",key:c}))}return n}function be(e){var{x:t,width:r,horizontal:n=!0,horizontalPoints:i}=e;if(!n||!i||!i.length)return null;var{xAxisId:s,yAxisId:h}=e,d=z(e,xe),m=i.map((c,x)=>{var l=f(f({},d),{},{x1:t,y1:c,x2:t+r,y2:c,key:"line-".concat(x),index:x});return p.createElement(Y,{key:"line-".concat(x),option:n,lineItemProps:l})});return p.createElement("g",{className:"recharts-cartesian-grid-horizontal"},m)}function je(e){var{y:t,height:r,vertical:n=!0,verticalPoints:i}=e;if(!n||!i||!i.length)return null;var{xAxisId:s,yAxisId:h}=e,d=z(e,ue),m=i.map((c,x)=>{var l=f(f({},d),{},{x1:c,y1:t,x2:c,y2:t+r,key:"line-".concat(x),index:x});return p.createElement(Y,{option:n,lineItemProps:l,key:"line-".concat(x)})});return p.createElement("g",{className:"recharts-cartesian-grid-vertical"},m)}function we(e){var{horizontalFill:t,fillOpacity:r,x:n,y:i,width:s,height:h,horizontalPoints:d,horizontal:m=!0}=e;if(!m||!t||!t.length||d==null)return null;var c=d.map(l=>Math.round(l+i-i)).sort((l,u)=>l-u);i!==c[0]&&c.unshift(0);var x=c.map((l,u)=>{var g=c[u+1],j=g==null,y=j?i+h-l:g-l;if(y<=0)return null;var v=u%t.length;return p.createElement("rect",{key:"react-".concat(u),y:l,x:n,height:y,width:s,stroke:"none",fill:t[v],fillOpacity:r,className:"recharts-cartesian-grid-bg"})});return p.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},x)}function ke(e){var{vertical:t=!0,verticalFill:r,fillOpacity:n,x:i,y:s,width:h,height:d,verticalPoints:m}=e;if(!t||!r||!r.length)return null;var c=m.map(l=>Math.round(l+i-i)).sort((l,u)=>l-u);i!==c[0]&&c.unshift(0);var x=c.map((l,u)=>{var g=c[u+1],j=g==null,y=j?i+h-l:g-l;if(y<=0)return null;var v=u%r.length;return p.createElement("rect",{key:"react-".concat(u),x:l,y:s,width:y,height:d,stroke:"none",fill:r[v],fillOpacity:n,className:"recharts-cartesian-grid-bg"})});return p.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},x)}var Ae=(e,t)=>{var{xAxis:r,width:n,height:i,offset:s}=e;return $(V(f(f(f({},Z),r),{},{ticks:H(r),viewBox:{x:0,y:0,width:n,height:i}})),s.left,s.left+s.width,t)},Oe=(e,t)=>{var{yAxis:r,width:n,height:i,offset:s}=e;return $(V(f(f(f({},Z),r),{},{ticks:H(r),viewBox:{x:0,y:0,width:n,height:i}})),s.top,s.top+s.height,t)},Pe={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[],xAxisId:0,yAxisId:0,syncWithTicks:!1,zIndex:ie.grid};function X(e){var t=J(),r=Q(),n=ee(),i=f(f({},te(e,Pe)),{},{x:w(e.x)?e.x:n.left,y:w(e.y)?e.y:n.top,width:w(e.width)?e.width:n.width,height:w(e.height)?e.height:n.height}),{xAxisId:s,yAxisId:h,x:d,y:m,width:c,height:x,syncWithTicks:l,horizontalValues:u,verticalValues:g}=i,j=ne(),y=D(S=>W(S,"xAxis",s,j)),v=D(S=>W(S,"yAxis",h,j));if(!F(c)||!F(x)||!w(d)||!w(m))return null;var E=i.verticalCoordinatesGenerator||Ae,G=i.horizontalCoordinatesGenerator||Oe,{horizontalPoints:A,verticalPoints:O}=i;if((!A||!A.length)&&typeof G=="function"){var M=u&&u.length,_=G({yAxis:v?f(f({},v),{},{ticks:M?u:v.ticks}):void 0,width:t??c,height:r??x,offset:n},M?!0:l);L(Array.isArray(_),"horizontalCoordinatesGenerator should return Array but instead it returned [".concat(typeof _,"]")),Array.isArray(_)&&(A=_)}if((!O||!O.length)&&typeof E=="function"){var R=g&&g.length,I=E({xAxis:y?f(f({},y),{},{ticks:R?g:y.ticks}):void 0,width:t??c,height:r??x,offset:n},R?!0:l);L(Array.isArray(I),"verticalCoordinatesGenerator should return Array but instead it returned [".concat(typeof I,"]")),Array.isArray(I)&&(O=I)}return p.createElement(re,{zIndex:i.zIndex},p.createElement("g",{className:"recharts-cartesian-grid"},p.createElement(ve,{fill:i.fill,fillOpacity:i.fillOpacity,x:i.x,y:i.y,width:i.width,height:i.height,ry:i.ry}),p.createElement(we,b({},i,{horizontalPoints:A})),p.createElement(ke,b({},i,{verticalPoints:O})),p.createElement(be,b({},i,{offset:n,horizontalPoints:A,xAxis:y,yAxis:v})),p.createElement(je,b({},i,{offset:n,verticalPoints:O,xAxis:y,yAxis:v}))))}X.displayName="CartesianGrid";const k=e=>new Intl.NumberFormat("cs-CZ",{style:"currency",currency:"CZK",maximumFractionDigits:0}).format(e),_e=e=>e>=1e6?`${(e/1e6).toFixed(1)}M`:e>=1e3?`${(e/1e3).toFixed(0)}K`:`${Math.round(e)}`,P=3700,N=30,Ie=152e4,ze=463e4;function Ne(e,t,r){const n=Math.pow(1+t/100,.08333333333333333)-1;let i=0;for(let s=1;s<=r*12;s+=1)i=i*(1+n)+e;return i}function U(e,t,r){let n=0,i=20;for(let s=0;s<80;s+=1){const h=(n+i)/2;Ne(e,h,t)<r?n=h:i=h}return(n+i)/2}function q(e,t,r){const n=Math.pow(1+t/100,.08333333333333333)-1;let i=0,s=0;const h=[{year:0,balance:0,contributed:0}];for(let d=1;d<=r*12;d+=1)i=i*(1+n)+e,s+=e,d%12===0&&h.push({year:d/12,balance:i,contributed:s});return h}const Se=U(P,N,Ie),Ce=U(P,N,ze),Te=q(P,Se,N),Ee=q(P,Ce,N),T=Te.map((e,t)=>{const r=Ee[t],n=Math.max(0,e.balance-e.contributed),i=Math.max(0,r.balance-e.balance);return{year:e.year,contributions:e.contributed,standardGain:n,optimizedDifference:i,standardTotal:e.balance,optimalTotal:r.balance}}),K=T[T.length-1];function Ge({active:e,payload:t,label:r}){if(!e||!t?.length)return null;const n=t[0]?.payload;return n?a.jsxs("div",{style:{background:"rgba(255,250,244,0.96)",border:"1px solid rgba(207,127,46,0.18)",borderRadius:"18px",padding:"14px 16px",boxShadow:"0 18px 40px rgba(61,44,41,0.12)",backdropFilter:"blur(14px)"},children:[a.jsxs("div",{style:{fontSize:11,letterSpacing:"0.18em",textTransform:"uppercase",color:o.pensionMuted,marginBottom:10,fontWeight:700},children:["Rok ",r]}),a.jsxs("div",{style:{display:"grid",gap:6},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{width:10,height:10,borderRadius:3,background:o.dark}}),a.jsx("span",{style:{fontSize:13,color:o.mutedText},children:"Vklady:"}),a.jsx("strong",{style:{fontSize:13,color:o.text},children:k(n.contributions)})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{width:10,height:10,borderRadius:3,background:o.pensionMuted}}),a.jsx("span",{style:{fontSize:13,color:o.mutedText},children:"Běžné nastavení:"}),a.jsx("strong",{style:{fontSize:13,color:o.text},children:k(n.standardTotal)})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8},children:[a.jsx("span",{style:{width:10,height:10,borderRadius:3,background:o.pensionAmber}}),a.jsx("span",{style:{fontSize:13,color:o.mutedText},children:"Správné nastavení:"}),a.jsx("strong",{style:{fontSize:13,color:o.text},children:k(n.optimalTotal)})]})]})]}):null}function Fe(){return a.jsxs("div",{className:"pension-compare-chart",children:[a.jsxs("div",{className:"pension-chart-summary",children:[a.jsxs("div",{className:"pension-chart-pill",children:[a.jsx("span",{className:"pension-chart-pill__label",children:"Měsíční vklad"}),a.jsx("strong",{children:k(P)})]}),a.jsxs("div",{className:"pension-chart-pill",children:[a.jsx("span",{className:"pension-chart-pill__label",children:"Běžné nastavení"}),a.jsx("strong",{children:k(K.standardTotal)})]}),a.jsxs("div",{className:"pension-chart-pill pension-chart-pill--accent",children:[a.jsx("span",{className:"pension-chart-pill__label",children:"Správné nastavení"}),a.jsx("strong",{children:k(K.optimalTotal)})]})]}),a.jsx("div",{className:"pension-chart-canvas",children:a.jsx(se,{width:"100%",height:320,children:a.jsxs(oe,{data:T,margin:{top:12,right:10,left:6,bottom:14},children:[a.jsxs("defs",{children:[a.jsxs("linearGradient",{id:"pensionContrib",x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:o.dark,stopOpacity:.62}),a.jsx("stop",{offset:"100%",stopColor:o.dark,stopOpacity:.08})]}),a.jsxs("linearGradient",{id:"pensionStandard",x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:o.pensionMuted,stopOpacity:.75}),a.jsx("stop",{offset:"100%",stopColor:o.pensionMuted,stopOpacity:.08})]}),a.jsxs("linearGradient",{id:"pensionOptimal",x1:"0",y1:"0",x2:"0",y2:"1",children:[a.jsx("stop",{offset:"0%",stopColor:o.pensionAmber,stopOpacity:.82}),a.jsx("stop",{offset:"100%",stopColor:o.pensionAmber,stopOpacity:.1})]})]}),a.jsx(X,{stroke:"rgba(92,74,61,0.08)",strokeDasharray:"4 8",vertical:!1}),a.jsx(le,{dataKey:"year",tick:{fontSize:12,fill:o.pensionMuted,fontFamily:"'Times New Roman', Georgia, serif"},tickLine:!1,axisLine:!1,label:{value:"Roky",position:"insideBottom",offset:-8,fontSize:12,fill:o.pensionMuted,fontFamily:"'Times New Roman', Georgia, serif"}}),a.jsx(ce,{tickFormatter:_e,tick:{fontSize:12,fill:o.pensionMuted,fontFamily:"'Times New Roman', Georgia, serif"},tickLine:!1,axisLine:!1,width:44}),a.jsx(de,{content:a.jsx(Ge,{})}),a.jsx(C,{type:"monotone",dataKey:"contributions",stackId:"growth",stroke:o.dark,strokeWidth:2,fill:"url(#pensionContrib)",name:"Vklady"}),a.jsx(C,{type:"monotone",dataKey:"standardGain",stackId:"growth",stroke:o.pensionMuted,strokeWidth:2,fill:"url(#pensionStandard)",name:"Běžné nastavení"}),a.jsx(C,{type:"monotone",dataKey:"optimizedDifference",stackId:"growth",stroke:o.pensionAmber,strokeWidth:2.4,fill:"url(#pensionOptimal)",name:"Správné nastavení"})]})})}),a.jsxs("div",{className:"pension-chart-legend",children:[a.jsxs("div",{className:"pension-chart-legend__item",children:[a.jsx("span",{className:"pension-chart-legend__swatch pension-chart-legend__swatch--contrib"}),a.jsx("span",{children:"Vklady"})]}),a.jsxs("div",{className:"pension-chart-legend__item",children:[a.jsx("span",{className:"pension-chart-legend__swatch pension-chart-legend__swatch--standard"}),a.jsx("span",{children:"Běžné nastavení"})]}),a.jsxs("div",{className:"pension-chart-legend__item",children:[a.jsx("span",{className:"pension-chart-legend__swatch pension-chart-legend__swatch--optimal"}),a.jsx("span",{children:"Správné nastavení"})]})]}),a.jsx("style",{children:`
        .pension-compare-chart {
          display: grid;
          gap: 18px;
        }

        .pension-chart-summary {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .pension-chart-pill {
          display: grid;
          gap: 4px;
          padding: 14px 16px;
          border-radius: 18px;
          background: linear-gradient(180deg, rgba(255,250,244,0.98), rgba(244,235,224,0.94));
          border: 1px solid rgba(207,127,46,0.12);
          box-shadow: 0 10px 22px rgba(61,44,41,0.05);
        }

        .pension-chart-pill--accent {
          background: linear-gradient(180deg, rgba(255,244,229,0.98), rgba(244,223,194,0.94));
          border-color: rgba(207,127,46,0.2);
        }

        .pension-chart-pill__label {
          font-size: 11px;
          line-height: 1.35;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: ${o.pensionMuted};
        }

        .pension-chart-pill strong {
          font-size: 26px;
          line-height: 1.08;
          font-weight: 400;
          color: ${o.text};
        }

        .pension-chart-canvas {
          border-radius: 24px;
          border: 1px solid rgba(207,127,46,0.12);
          background: linear-gradient(180deg, rgba(255,252,248,0.98), rgba(246,239,230,0.98));
          padding: 20px 16px 8px;
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.8);
        }

        .pension-chart-legend {
          display: flex;
          flex-wrap: wrap;
          gap: 14px 22px;
          align-items: center;
          font-size: 14px;
          color: ${o.pensionMuted};
        }

        .pension-chart-legend__item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }

        .pension-chart-legend__swatch {
          width: 18px;
          height: 18px;
          border-radius: 4px;
          display: inline-block;
        }

        .pension-chart-legend__swatch--contrib { background: ${o.dark}; }
        .pension-chart-legend__swatch--standard { background: ${o.pensionMuted}; }
        .pension-chart-legend__swatch--optimal { background: ${o.pensionAmber}; }

        @media (max-width: 768px) {
          .pension-chart-summary {
            grid-template-columns: 1fr;
          }

          .pension-chart-pill strong {
            font-size: 22px;
          }

          .pension-chart-canvas {
            padding: 14px 10px 2px;
            border-radius: 18px;
          }

          .pension-chart-legend {
            gap: 10px 14px;
            font-size: 13px;
          }
        }
      `})]})}export{Fe as default};
