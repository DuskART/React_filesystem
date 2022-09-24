import "./App.css"
import React, { useState } from 'react'

function App() {
  return (
    <div className="App">

      <Folder name="Music">
      </Folder>


      <Folder name="sys"> 
        <Folder name="techniqu" >     
          <File name="itechnic.vol">      </File>
        </Folder>    
        <File name="jsx.js">      </File>
        <File name="images.vol">      </File>
       </Folder>

      




    </div>
  )
}






function Folder(prop) {
  const {name, children} = prop
  const [isopen, Setopen] = useState(true)
  const direction = isopen ? "down" : "right"

  function HandleClick() {
    Setopen(!isopen)
  }

  return (
    <div className="folder"><span onClick={HandleClick} >
      <i className="blue folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
      </span>{name}
      <div className="margin">
        {isopen ? children: null}
        </div>
    </div>
    )
}


function File(prop) {
  const { name } = prop
  const ext = name.split(".")[1]
  const icons = {
    js: "headphones",
    vol: "file image"
    }
  return (
    <div className="file">
      <i className={`${icons[ext]} icon`}></i>{prop.name}
      </div>
  )
}











export default App;
