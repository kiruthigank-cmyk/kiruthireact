import { useState } from "react"
function App()
{
  const [city,setCity]=useState("karur")
  const [list,setList]=useState("null")
  const upcity=(event)=>{
    setCity(event.target.value);
  }
  const findweather=()=>{
    console.log("city name:",city);
    var api=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=254005526d4a0198f2f3533d9eba5dfc`; 
    fetch(api)
    .then((response)=>response.json())
    .then((data)=>
      {
      console.log(data);
      setList(data)
    })
    .catch((err)=>{
      console.log(""+err);
      setList(err)
    })
  }

  return(
    <>
  <h2><center>Fetch - API</center></h2>
  <h2>Weather Report</h2>
  <label>Enter City Name</label><input type="text" value={city} onChange={upcity}></input>
  <br></br>
  <input type="button" onClick={findweather} value="GetReport"></input>
  <br></br>
  {list.cod===200 &&
  <>
  <h2>Final Report</h2>
  <h3>Main Report:{list!==null && list.weather[0].main}</h3>
  <h3>Description:{list!==null && list.weather[0].description}</h3>
  <h3>Wind Speed:{list!==null && list.wind.speed}</h3>
  <h3>Temperature:{list!==null && list.main.temp}</h3>
  <h3>Humidity:{list!==null && list.main.humidity}</h3>
  </>
  }
  {list.cod==="404" &&
  <h3>Error Message:{list!==null && list.cod==='404' && list.message}</h3>
  }
  </>
  )
}
export default App
/*import "./App.css"
function  App()
{
  return(
    <div  id="outer" align="center">
      <div id="inner">
      <font  id="savi"size="7" >🗝️</font>
      <h2>Admin Panel</h2>
      <input type ="text" placeholder="Enter user name here"></input>
      <input type ="password" placeholder="Enter password"></input>
      <p align="right"><button>Login</button></p>
      </div>
    </div>
  )

}
export default App
/*import React from 'react'
import { useEffect, useState } from 'react'
const App = () => {
  const [name,setName]=useState("என் குடும்பம்")
  useEffect(()=>{ //auto update when state change
    document.title=`Hello! ${name}`
  })
  const dis=()=>{
    setTimeout(()=>{
    setName("💙Kiruthiga💜")
    },3000)
  }
    const dis1=()=>{
      setName("💙Nivethan💙")
    }
     const dis2=()=>{
      setName("💝Madhurika💝")
    }
  
  return (
    <div>
      <h1>UseEffect Hook</h1>
      <button onClick={dis}>Change Name</button>
      <button onClick={dis1}>Click</button>
      <button onClick={dis2}>ChangeName</button>
      <br></br>
      {name}
    </div>
  )
}

export default App

/*
import React, { useState } from 'react' //sir sonnathu increasing button
const App = () => {
  const [val,setVal]=useState(0)
  const dis=(event)=>{
    setVal(parseInt(event.target.value)+1)
  }
  return (
    <div>
      <button onClick={dis} value={val}>you clicked : {val} times</button>
    </div>
  )
}
export default App

/*
import { useState } from "react" //ithu nana pottathu click pannuna increse agum
function App()
{
  const[click,setClick]=useState(0)
  const show=()=>{
    setClick(click+1)
  }
  return(
    <>
  <button onClick={show}>clicked{click}</button>
  </>
  )
}
export default App
/*
import { useState } from "react"
function App()
{
  const[count,setCount]=useState(100)
  const show=(event)=>{
    if(event.target.id==="b1")
    setCount(count+1)
  if(event.target.id==="b2")
    setCount(count-1)
  if(event.target.id==="b3")
    setCount(count-5)
  }
//const show2=()=>{  
   // setCount(count-1)
  //}
  return(
    <>
    <button id="b1" onClick={show}>Increment by 1</button>
    <button id="b2" onClick={show}>decrement by 1</button>
    <button id="b3" onClick={show}>decrement by 5</button>
    <br></br>
    <h2>{count}</h2>
    </>
  )
}
export default App
/*
import { useState } from 'react'
import React from 'react'
const App=()=>{
const[name,setName]=useState("---")

const dis=(event)=>{
setName(event.target.value)
}
const find=(v1,v2)=>{
  console.log(v1+v2)
}
  return (
    <div>
      <form>
      <input type="text" value={name} onChange={dis} placeholder='enter user name'></input><br></br>
      <input type="password" placeholder='password'></input><br></br>
      <input type="number" placeholder='enter acc.no'></input><br></br>
      <input type="email" placeholder='enter emailid'></input><br></br>
      <label>Select Gender:</label>
      <input type="radio" name="gen"></input>Male
      <input type="radio" name="gen"></input>Female
      <input type="radio" name="gen"></input>Other
      <br></br>
      <label>Select course:</label>
      <input type="checkbox" name="c1"></input>c
      <input type="checkbox" name="c2"></input>c++
      <input type="checkbox" name="c3"></input>java
      <input type="checkbox" name="c4"></input>pthyon
      <input type="checkbox" name="c5"></input>none of the above
      <br></br>
      <select>
        <option selected>Select month</option>
        <option>January</option>
        <option>February</option>
        <option>March </option>
        <option>April</option>
        <option>May</option>
        <option>June</option>
        <option>July</option>
        <option>August</option>
        <option>September</option>
        <option>October</option>
        <option>November</option>
        <option>December</option>
      </select>
      <br></br>
      Select Color:<input type="color" name="col"></input>
      <br></br>
      Select DOB:<input type="date" name="bod"></input> 
      <br></br>
      Select Time:<input type="time" name="time"></input>
      <br></br>
      Select Week:<input type="week" name="wk"></input>
      <br></br>
      Upload resume:<input type="file"></input>
      <br></br>

      <label>Address</label>
      <textarea rows="7" cols="25"></textarea>
      <br></br>
      <lable>list box</lable>
      <select size="4" multiple>
        <option>sunday</option>
        <option>monday</option>
        <option>tuesday</option>
        <option>wednesday</option>
        <option>thursday</option>
        <option>friday</option>
        <option>saturday🐇🐇</option>
      </select>
      <br></br>
      <progress style={{backgroundcolor:'blue',border:"2px solid yellow"}}min="0" max="100" value="90"></progress>
      <button><b><s>click me</s></b></button>
      <label>volume:</label>
      <input type="range" min="0" max="6"></input>
      <input type="submit"></input>
      <input type="button" value="clickme"></input>
      </form>
    </div>
  )
}

export default App

 
 /*
 function App(props)
 {
  var a=props.data.rno
  var b=props.data.sname
  var c=props.data.issingle
  var d=props.data.mark
  var e=props.data.hobbies
  return(<>
  <h3>Type of r.no:{typeof(a)}</h3>
  <h3>Type of sname:{typeof(b)}</h3>
  <h3>Type of Martial status:{typeof(c)}</h3>
  <h3>Type of marks:{typeof(d)}</h3>
  <h3>{Array.isArray(d)?"it is array":"it is object json"}</h3>
  <h3>{Array.isArray(e)?"it is array":"it is object json"}</h3>
  </>)

 }
 export default App
 /*import parse from 'html-react-parser'
 function App(props)
 {
  var ans=""
  for(var s in props.data)
  {
    ans=ans+`<li>${s}= ${props.data[s]}</li>`
    console.log(s)
  }
  return(
    <>
    {parse("<ol>"+ans+"</ol>")}
    </>
  )
 }
 export default App

 /* import React from "react";
  import parse from 'html-react-parser';
  class App extends React.Component
  {
    constructor(props)
    {
      var ans=""
      super(props)
     for(var s in props.data)
     {
      ans=ans+`<li>${props.data[s]}</li>`
      console.log(s)
     }
     this.state={
      res:"<ol type='I'>"+ans+"</ol>"
     }
  }
  render()
  {
    return(
      <>
      <h1>Combine react state + props</h1>
      {parse(this.state.res)}
      <div id="res"></div>
      </>
    )
  }
}
export default App

 /* 
  import React from "react";   
  class App extends React.Component
  {
    constructor()
    {
      super()
      this.state={
        sno:1,
        sname:"kiruthiga",
        marks:[100,99,89,90,95]
      }
    }
    show=()=>{
      this.setState({sname:"kiruthiga u"})
    }
    dis=()=>{
      this.setState({marks:[60,87,50,55,88]})
    }
    dis1=()=>{
      const newmarks=[...this.state.marks]
      newmarks[2]=44
      this.setState({marks:newmarks})
    }
    render()
    {
      return(<>
      <h1>This is class components</h1>
      <h2>Serial Number:{this.state.sno}</h2>
      <h2>Student Name:{this.state.sname}</h2>
      <h2>Student Mark:</h2>
      {this.state.marks.map((v,index)=><>Mark:{index+1}={v}<br></br></>)}
      <button onClick={this.show}>update name</button>
      <button onClick={this.dis}>update all mark</button>
      <button onClick={this.dis1}>update single mark</button>
      </>)
    }
  }     
  export default App                                                                                                          
/*
function App()
{
  var  arr=[11,22,33,44,55,66,77,88,99,100,101]
  var s=0
  var ma=arr[0]
  return(<>
    <h1>React Loop map method</h1>
    <h2>old model</h2>
    {arr[0]}
    {arr[1]}
    {arr[2]}
    {arr[3]}
    {arr[4]}
    {arr[5]}
    {arr[6]}
    {arr[7]}
    {arr[8]}
    <h2>New Model Map(loop)</h2>
    {arr.map((v)=><>{v}<br></br></>)}

    <h2>New Model Map(loop)</h2>
    <ol type="I">

    {arr.map((v)=><li>{v}</li>)}</ol>
    <h2>sum of array</h2> 

    <div style={{display:"none"}}>
    {arr.map((item)=><>{s=s+item}<br></br></>)}
    </div>
    <h2>max of array</h2>
    <div style={{display:"none"}}> 
    {arr.map((v)=><>{ma<v && <>{ma=v}</>}</>)}
    </div>
    <h2>max of array:{ma}</h2>
    </>
  )
}
export default App

/*function App()
{
  var arr=[11,22,33,44,55,66]
  var[v1,,,v2,...v3]=arr //if we added comma the numbers will skip
  return(
    <>
    <h2>spread operator</h2>
    <h3>index 0:{v1}</h3>
    <h3>index 1:{v2}</h3>
    <h3>index 5:{v3}</h3>
    {/* <h3>index 5:{arr[5]}</h3> */
    /* <h3>index 6:{arr[6]}</h3> 
    </>
  )
}
export default App
/*
function App()
{
  var res="pass"
  var avg=85.6
  return(
    <>
    <h2>
      {
        (res==="pass"&&
          ((avg>=85 && "outstanding")||
          (avg>=85 && "excellent")||
          (avg>=85 && "very good")||
          (avg>=85 && "good")||
        "Fair")) || "no grade because of fail"}
      
    </h2>
    </>
  )}
  export default App

/*
function App()
{
  if(true)
  {
  var v=100
  let l=200
  const c=300
  v++;
  // l++;
  // console.log("let:"+l);
  // c++;
  // console.log("const:+c");
  }
  return(
    <>
    <h1>variable : global : {v}</h1>
    <h2>does not work let and const : because local</h2>
    </>
  )
}
export default App
/*function App()
{
  var a=100
  var b=300
  var c=500
  return(
    <>
    <h2>Biggest Among 3 no's using conditional or ternaray operator</h2>
    <h1>Biggest Number for 2:{a>b?a:b}</h1>
        <h1>Biggest Number:{(a>b && b>c)?a:(b>c?b:c)}</h1>
    </>
  )
}
export default App
/*
  function App(){
  var a=10
  var b=5
  var c="Madhurika"
  return(<>
    <h1>total:{a+b}</h1>
    <marquee bgcolor='orange'><font size='7'>{c}</font></marquee>
  </>)
}
export default App
/*import React from "react";
class Parent extends React.Component

{
 render()
 {
  
  return(<>
  <h1>this is parent Class</h1>
  <h1>this is parent Class</h1>
  <h1>this is parent Class</h1>
  <h1>this is parent Class</h1>
  </>)
 }
}

class App extends Parent
{
  render()
 {
  return(<>
  <Parent/>
          <h1>Welcome</h1>
          <h1>Hello</h1>
          <h1>Hi</h1>
          <h1>Haii</h1>     
                    <h1>Welcome</h1>
<p>ariatur ad esse qui sit commodo fugiat ullamco dolor. Officia est sunt incididunt enim sunt ad labore pariatur duis magna voluptate fugiat sunt ullamco. Et quis sunt aliqua sit elit. Ut dolor elit dolore cillum excepteur ea ad nulla fugiat.
<br/>
Id deserunt incididunt reprehenderit proident proident adipisicing est ut minim ex laborum commodo ad officia. Minim qui ut aute pariatur sint labore minim. Exercitation cillum enim commodo anim sint irure consectetur commodo sit deserunt. Ad qui tempor in eiusmod qui eu ad eu. Sunt commodo cupidatat ipsum culpa reprehenderit amet anim. Laboris ut voluptate magna esse. Amet id aliquip voluptate ea anim irure culpa magna aliqua.
<br/>Velit officia sit in eiusmod exercitation culpa minim sunt deserunt. Mollit sint pariatur exercitation amet qui eu. Nisi velit cupidatat aliqua cupidatat nostrud sit. Quis incididunt minim consectetur velit minim ut. Laboris esse esse ad tempor aliquip nulla do aliqua id proident ipsum voluptate veniam consectetur.
</p>
  </>
  )
 }
}
export default App
/*
function App()
{
  return(
    <> 
    <h1>Welcome Kiruthiga</h1>
    <h1>Welcome Kiruthiga</h1>
    <h1>Welcome Kiruthiga</h1>
    </>
  )
}
export default App
/*

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

*/
