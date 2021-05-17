import './App.less';
import React from 'react';
//Components
import 'antd/dist/antd.less';
import AddMember from './containers/AddMember/AddMember';

function App() {
  return (
    <div style={{marginLeft:'30px'}}>
      <AddMember/>
    </div>
  );
}

export default App;
