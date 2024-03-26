import{u as i,B as e,A as o,ab as t}from"./index-aae98c9a.js";const p=i.div`
  display: block;
  margin: 0 auto;

`,d=i.div`
  font-weight: 400;
  font-size: 18px;
  margin-bottom: 8px;
  line-height: 1.33333;

  color:${n=>n.theme.colors.textColor};
`,g=i(e)`
  font-size: 16px;
  width: 280px;
  margin: 0;
  line-height: 1.25;
  padding: 8px 30px;
  width: 280px;
  height: 36px;
  z-index: 100;
  @media only screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.33333;
    padding: 10px 30px;
    width: 336px;
    height: 44px;
  }
  @media only screen and (min-width: 1440px) {
    width: 384px;
  }
`,c=i.div`
  margin-bottom: 6px;
 `,s=i.div`
  /* height: max-content; */
  background-repeat: no-repeat;
  /* margin-top: -64px; */
  min-height: 100svh;
  background-image: url(${n=>n.theme.backgroundImage.bgSignMob});
  background-position: calc(50% + 3px) 57px;
  
  @media only screen and (min-width: 768px) {
    min-height: 100svh;
    background-image: url(${n=>n.theme.backgroundImage.bgSignTab});
    background-position: calc(50% + 30px) 16px;
  }

  @media only screen and (min-width: 1440px) {
    background-image: url(${n=>n.theme.backgroundImage.bgSignDesktop});
    background-position: calc(50% - 10px) -13px;
  }
`,x=i(o)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 40px;
  padding-bottom: 40px;
  background-color: transparent;
 margin-top: -15px;

 @media only screen and (min-width: 768px){
  margin-top: -8px;
 }
  
  @media only screen and (min-width: 1440px) {
    flex-direction: row;
    padding-bottom: 0;
    padding-right: 216px;
  }
`,m=i.div`
  display: flex;
  width: 280px;
  margin: 0 auto;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 60px;
  @media only screen and (min-width: 768px) {
    flex-direction: row;
    gap: 0;
  }
  @media only screen and (min-width: 1440px) {
    flex-direction: row-reverse;
  }
`,l=i.div`
  z-index: 100;  
`,h=i.h1`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.23077;
  color: ${n=>n.theme.colors.textColor};
  margin-bottom: 16px;
  margin-top: 30px;
  @media only screen and (min-width: 1440px) {
    margin-top: 135px;
  }
`,a=i(t)`
  font-weight: 400;
  font-size: 16px;
  line-height: 1.25;
  color: ${n=>n.theme.colors.primaryBlue};
  margin-top: 16px;
  cursor: pointer;
  z-index: 100;

  &:hover {
    color: ${n=>n.theme.colors.secondaryOrange};
  }
`,u=i.div`
  margin-top: 16px;
`,b=i(a)`
  margin-left: 16px;
  `;export{s as B,b as F,d as L,u as M,x as S,h as T,l as W,a,p as b,c,g as d,m as e};
