 /* const heading =React.createElement("h1",{id:"heading"}/**obeject where i can give attributes to my tag  */
 /*,"hello world /*from react!"/**this is the children which will go insie h1 tags */;
const heading = React.createElement("div",
  {id :"parent"},
  [React.createElement("div",
    {id:"child1"},
    [React.createElement("h1",{},"hi"),
      React.createElement("h2",{},"im 1st tag")
    ]),
  React.createElement("div",
    {id:"child2"},
    [React.createElement("h1",{},"hi"),
      React.createElement("h2",{},"im 2st tag")
    ])])
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(heading); 
    /**<div id="parent">
     * <div id = "child1">
     * <h1>hi <h1/>
     * <h2>im 1st tag<h2/>
     * </div>
     * <div id = "child2 ">
     *  <h1>hi <h1/>
     * <h2>im 2st tag<h2/>
     * <div/>
     * 
     * <div/> */

     