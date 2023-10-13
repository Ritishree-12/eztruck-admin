import React from 'react';
// import './Sidebar.css'

const Navbar = () => {
  return (
   <>
   <div class="row page-titles">
                <div class="col-md-5 align-self-center">
                    <h3 class="text-themecolor">Booking History</h3>
                </div>
                <div class="col-md-7 align-self-center">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="index.php">Home</a></li>
                        <li class="breadcrumb-item">User of APP</li>
                        <li class="breadcrumb-item active">Booking History</li>
                    </ol>
                </div>
                <div>
                    <button class="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10"><i class="ti-settings text-white"></i></button> 
                </div>
            </div>
   </>
  )
}

export default Navbar
