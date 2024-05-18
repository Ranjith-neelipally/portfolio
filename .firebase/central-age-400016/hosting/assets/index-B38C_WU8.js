import{p as s,r as t,j as e}from"./index-sGyWrVnM.js";const a=s.div`
  display: flex;
  background-color: ${n=>n.backgroundColor?n.backgroundColor:"white"};
    
  flex: 1;
  border-radius: 12px;
  padding: 12px;
  overflow: auto;
  flex-direction: column;
`,l=s.div`
  display: flex;
  flex: 1;
  overflow: auto;
  flex-direction: column;

  .profile-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap-reverse;

    .designation {
      font-size: clamp(26px, 10vw, 60px);
      font-weight: 700;
      display: flex;
      flex-direction: column;
      flex: 1;

      p {
        margin: 0;
      }

      .human {
        margin: 0;
        margin-top: 2%;
        font-size: 24px;
        padding: 12px;
        border: 1px solid green;
        border-radius: 40px;
        background-color: lightgreen;
        color: black;
        transform: rotate(-5deg);
      }
      .location {
        font-size: clamp(32px, 2vw, 48px);
      }
    }

    .picture {
      max-height: 75vw;
      max-width: 75vw;
      height: ${n=>n.dimensions?`${n.dimensions}px`:"300px"};
      width: ${n=>n.dimensions?`${n.dimensions}px`:"300px"};
      background-image: url("src/assets/profile.jpeg");
      background-size: cover;
      border-radius: 50%;
      background-position: center;
    }
  }
`;function d(){const[n,r]=t.useState(0),i=t.useRef(null);return t.useEffect(()=>{if(i.current){const o=i.current.clientHeight;r(o*.6)}},[]),e.jsx(a,{children:e.jsxs(l,{ref:i,dimensions:n,children:[e.jsxs("div",{className:"profile-wrapper",children:[e.jsxs("div",{className:"designation align-items-center align-items-md-start",children:[e.jsx("p",{className:"human",children:"Hi, Human! I am"}),e.jsx("p",{className:"w-100 text-center text-md-start",children:"Ranjith Neelipally,"}),e.jsx("p",{className:"w-100 text-center",children:"</Front-end, UX/UI><Developer>"}),e.jsx("p",{className:"location",children:"Based in Hyderabad"}),e.jsx("p",{className:"location",children:"India"})]}),e.jsx("div",{className:"d-flex justify-content-center justify-content-md-end",children:e.jsx("div",{className:"picture"})})]}),e.jsxs("button",{className:"btn d-flex flex-column justify-content-center align-items-center",children:["Welcome",e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"#000000",height:"30px",width:"30px",version:"1.1",id:"Layer_1",viewBox:"0 0 330 330",children:e.jsx("path",{id:"XMLID_225_",d:"M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393  c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393  s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"})})]})]})})}export{d as default};
