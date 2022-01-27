import React, {useState, useEffect, useRef} from 'react';
import orgChart from './data';
import Tree from 'react-d3-tree';
import './App.css';

const containerStyles = {
  width: '100%',
  height: '100vh',
}

function App() {
  const [treeState, setTreeState] = useState({x: 0, y: 0});
  const inputRef = useRef();
  
  const scrollHandler = _ => {    
    const dimensions = inputRef.current.getBoundingClientRect();   
     setTreeState(prevState => ({
      ...prevState,
      x: parseInt(dimensions.width/2), 
      y: parseInt(dimensions.y + 25)
      }));
  };
 
  useEffect(() => {
    scrollHandler();
  },[]);

  return (
    <div className="App">
      <div id="treeWrapper" style={containerStyles} ref={inputRef}>
        <Tree          
          data={orgChart}
          translate={treeState}
          orientation={'vertical'}           
          rootNodeClassName="node__root"
          branchNodeClassName="node__branch"
          leafNodeClassName="node__leaf"
        />
      </div>
    </div>
  );
}

export default React.memo(App);