import React, { useState,useEffect } from "react";


import Posts from "./component/Posts";

const App = () => {
	const[data, setData] = useState(null)
	useEffect(()=>{
		fetch('/api')//fetch from backend
		.then((res)=>res.json())
		.then((data)=>setData(data.message))
	})
return (
	<div className="main-container">
	<h1 className="main-heading">
		Blog App using React Js
	</h1>
  <Posts />
  <p>{!data ? "Loading..." : data}</p>
	
	</div>
);
};

export default App;
