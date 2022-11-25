import React from 'react'

function SideBar() {
  return <div>
  {/*<!-- Sidebar -->*/}
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand -->*/}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="javascript(void)">
                <div className="sidebar-brand-icon rotate-n-15">
                    <i className="fas fa-laugh-wink"></i>
                </div>
                <div className="sidebar-brand-text mx-3">SB Admin <sup>2</sup></div>
            </a>

            {/* <!-- Divider -->*/}
            <hr className="sidebar-divider my-0"/>

             {/*<!-- Nav Item - Dashboard -->*/}
            <li className="nav-item active">
                <a className="nav-link" href="javascript(void)">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span></a>
            </li>

             {/*<!-- Divider -->*/}
            <hr className="sidebar-divider"/>

             {/*<!-- Heading -->*/}
            <div className="sidebar-heading">
                Interface
            </div>

             {/*<!-- Nav Item - Pages Collapse Menu -->*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseTwo"
                    aria-expanded="true" aria-controls="collapseTwo">
                    <i className="fas fa-fw fa-cog"></i>
                    <span>Components</span>
                </a>
                <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Components:</h6>
                        <a className="collapse-item" href="javascript(void)">Buttons</a>
                        <a className="collapse-item" href="javascript(void)">Cards</a>
                    </div>
                </div>
            </li>

             {/*<!-- Nav Item - Utilities Collapse Menu -->*/}
            <li className="nav-item">
                <a className="nav-link collapsed" href="javascript(void)" data-toggle="collapse" data-target="#collapseUtilities"
                    aria-expanded="true" aria-controls="collapseUtilities">
                    <i className="fas fa-fw fa-wrench"></i>
                    <span>Utilities</span>
                </a>
                <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                    data-parent="#accordionSidebar">
                    <div className="bg-white py-2 collapse-inner rounded">
                        <h6 className="collapse-header">Custom Utilities:</h6>
                        <a className="collapse-item" href="javascript(void)">Colors</a>
                        <a className="collapse-item" href="javascript(void)">Borders</a>
                        <a className="collapse-item" href="javascript(void)">Animations</a>
                        <a className="collapse-item" href="javascript(void)">Other</a>
                    </div>
                </div>
            </li>

             {/*<!-- Divider -->*/}
            <hr className="sidebar-divider"/>

             
        </ul>
         {/*<!-- End of Sidebar --></hr>*/}
  </div>
}

export default SideBar;