import{u as i,A as o,L as r,a as d,j as n,s as t}from"./index-49ba1023.js";const l=i.div`
  background-repeat: no-repeat;
  background-position: bottom;
  color: ${e=>e.theme.colors.textColor};
  height: max-content;

  @media only screen and (min-width: 768px) {
      justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
      background-size: contain;
      height: calc(100svh - 72px);
      display: flex;
      align-items: flex-start;
      justify-content: center;
  }
`,s=i(o)`
  height: fit-content;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
  
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`,c=i.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  
  @media only screen and (min-width: 768px) {
    margin: 1.5rem 0 0;
    align-items: flex-start;
    gap: 60px;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    margin: 68px 5.5rem 4.2rem 6.5rem;
    gap: 81px;
  }
`,m=i.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  
  @media only screen and (min-width: 1440px) {
    width: 439px;
    min-width: 439px;
  }
  
h3{
  font-size: 18px;
  line-height: 1.11111;
  @media only screen and (min-width: 768px) {
    margin-top: .5rem;
  }
  @media only screen and (min-width: 1440px) {
    margin-top: .5rem;
    margin-bottom: 1rem;
  }
  }
`,h=i.h1`
 font-size: 1.75rem;
  margin: 0;
  width: 246px;
  
  @media only screen and (min-width: 768px) {
    font-size: 2.25rem;
    line-height: 1.16667;
    width: auto;
  }
  @media only screen and (min-width: 1440px) {
    line-height: 1.16667;
  }
`,p=i.h2`
  font-weight: 400;
  line-height: 1.25;
  margin: 1rem 0;
  width: 246px;
  
  @media only screen and (min-width: 768px) {
    letter-spacing: 1px;
    width: auto;
  }
`,x=i.ul`
  margin: 0;
  padding: 0;
  text-align: left;
  @media only screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: column;
  }
  li{
    display: flex;
    align-items: center;
    margin-top: 1rem;
    @media only screen and (min-width: 768px) {
      min-width: 224px;
      gap: 1rem;
    }
    @media only screen and (min-width: 1440px) {
      gap:.25rem;
      margin-top: 0;
      margin-bottom: 1rem;
    }
  }
`,a=i.svg`
  width: ${e=>e.size||"32px"};
  height: ${e=>e.size||"32px"};
  fill: ${e=>e.color||e.theme.colors.mainBg};
  display: inline - block;
  margin-right: 5px;
  @media only screen and (min-width: 768px) {
    width: ${e=>e.size||"40px"};
    height: ${e=>e.size||"40px"};
  }
`,g=i.div`
  border-radius: 10px;
  box-shadow: ${e=>e.theme.shadows.windowShadowContainer};
  background: ${e=>e.theme.colors.secondaryBg};
  text-align: left;
  list-style-position: inside;
  display: flex;
  flex-direction: column;
  padding: 24px 16px;
  gap: 12px;

  @media only screen and (min-width: 768px) {
    height: 332px;
    width: 494px;
    padding: 32px 24px;
  }

  @media only screen and (min-width: 1440px) {
    align-self: flex-end;
  }
  `,w=i.h3`
  font-size: 18px;
  line-height: 1.11;
  `,u=i.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  li {
    line-height: 1.25;
    display: flex;
    align-items: center;

    span {
      width: 232px;

      @media only screen and (min-width: 768px) {
        width: 430px;
      }
    }

    &:before {
      content: '';
      display: inline-block;
      width: .5rem;
      height: .5rem;
      border-radius: 50%;
      background-color: ${e=>e.theme.colors.primaryBlue};
      margin-right: 6px;
    }
  }
`,y=i(r)`
  border-radius: 10px;
  border: none;
  padding: .5rem;
  margin-top: 1.5rem;
  box-shadow: ${e=>e.theme.shadows.buttonShadow};
  background: ${e=>e.theme.colors.primaryBlue};
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: ${e=>e.theme.colors.mainBg};
  width: 100%;
  transition: box-shadow 250ms ease-in-out;
  &:hover, &:focus {
    box-shadow: ${e=>e.theme.hovers.buttonShadow};
  }

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
  @media only screen and (min-width: 1440px) {
    width: 24rem;
    margin-top: .5rem;
    margin-bottom: 0;
  }
`,b=i.div`
  height: max-content;
  background-repeat: no-repeat;
  min-height: calc(100vh - 64px);
  background-position: calc(50% + 593px) bottom;
  background-image: url(${e=>e.theme.backgroundImage.backgroundWelcomePageMob});

  @media only screen and (min-height: 960px) and (min-width: 320px) and (max-width: 767px){
    background-position-y: bottom;
  }
  
  @media only screen and (min-width: 768px) {  
    min-height: calc(100vh - 80px);
    background-position: calc(50% + 370px) -80px;
    background-image: url(${e=>e.theme.backgroundImage.backgroundWelcomePageTablet});
  }

  @media only screen and (min-height: 800px) and (min-width: 768px){
    background-position-y: bottom;
  }

  @media only screen and (min-width: 1440px) {
    min-height: calc(100vh - 72px);
    background: no-repeat calc(50% + 480px) 440px url(${e=>e.theme.backgroundImage.backgroundWelcomePageDeskBottle}),
    no-repeat calc(50%) 37px url(${e=>e.theme.backgroundImage.backgroundWelcomePageDsctp});
  }

  @media only screen and (min-height: 800px) and (min-width: 1440px){
    background: no-repeat calc(50% + 480px) 440px url(${e=>e.theme.backgroundImage.backgroundWelcomePageDeskBottle}),
    no-repeat calc(50%) 37px/cover url(${e=>e.theme.backgroundImage.backgroundWelcomePageDsctp});
  }
`,j=()=>{const{t:e}=d();return n.jsx(b,{id:"background",children:n.jsx(l,{children:n.jsx(s,{children:n.jsxs(c,{children:[n.jsxs(m,{children:[n.jsx(h,{children:e("welcomePage.Water consumption tracker")}),n.jsx(p,{children:e("welcomePage.Record daily water intake and track")}),n.jsx("h3",{children:e("welcomePage.Tracker Benefits")}),n.jsxs(x,{children:[n.jsxs("li",{children:[" ",n.jsx(a,{children:n.jsx("use",{href:`${t}#calendar`})}),e("welcomePage.Habit drive")]}),n.jsxs("li",{children:[" ",n.jsx(a,{children:n.jsx("use",{href:`${t}#presentation-chart-bar`})}),e("welcomePage.View statistics")]}),n.jsxs("li",{children:[" ",n.jsx(a,{children:n.jsx("use",{href:`${t}#wrench-schewdriver`})}),e("welcomePage.Personal rate setting")]})]}),n.jsx(y,{to:"/signup",children:e("welcomePage.Try tracker")})]}),n.jsxs(g,{children:[n.jsx(w,{children:e("welcomePage.Why drink water")}),n.jsxs(u,{children:[n.jsx("li",{children:n.jsx("span",{children:e("welcomePage.Supply of nutrients to all organs")})}),n.jsx("li",{children:n.jsx("span",{children:e("welcomePage.Providing oxygen to the lungs")})}),n.jsx("li",{children:n.jsx("span",{children:e("welcomePage.Maintaining the work of the heart")})}),n.jsx("li",{children:n.jsx("span",{children:e("welcomePage.Release of processed substances")})}),n.jsx("li",{children:n.jsx("span",{children:e("welcomePage.Ensuring the stability of the internal environment")})}),n.jsx("li",{children:n.jsx("span",{children:e("welcomePage.Maintaining within the normal temperature")})}),n.jsx("li",{children:n.jsx("span",{children:e("welcomePage.Maintaining an immune system capable of resisting disease")})})]})]})]})})})})};export{j as default};
