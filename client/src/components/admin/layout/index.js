import React, { Fragment } from 'react';

import AdminNavbar from "../partials/AdminNavbar";
import AdminSidebar from "../partials/AdminSidebar";
import AdminFooter from "../partials/AdminFooter";

const AdminLayout = ({ children }) => {
    return (
        <Fragment>
		   	<AdminNavbar/>
	    	<section className="flex bg-gray-100">
	    		<AdminSidebar/>
	    		<div className="w-full md:w-11/12 h-full">
	    			{/* All Children pass from here */}
					{children}
	    		</div>
			</section>
			<AdminFooter/>
    	</Fragment>
    )
}

export default AdminLayout;