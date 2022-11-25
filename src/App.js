
import React from 'react';
import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
function App() {
    let data={
earningsMonthly:"40,000",
earningsYearly:"2,15,000",
tasks:"50",
PendingRequests:"18"
    }
    return <div id="wrapper">
<SideBar/>
<Dashboard data={data}/>
    </div>
    
}
    export default App;
