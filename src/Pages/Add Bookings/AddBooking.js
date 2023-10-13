import React,{useState} from 'react'

const AddBooking = (props) => {
  const {showModal} = props;
  const [inputValue,setInputValue]=useState('')
  const[showTableData,setShowTableData]=useState({
    customerName:'',
    truckType:'',
    driverName:'',
    pickupLocation:'',
    dropLocation:'',
    distance:'',
    timeDuration:'',
    totalAmount:'',
    driverShare:'',
    companyShare:'',
    totalDiscount:'',
    customerShare:'',
    customerPaymentStatus:'',
    customerPaid:'',
    customerPendingPayment:'',
    driverPaymentStatus:'',
    driverPaid:'',
    driverPendingPayment:'',
    bookingStatus:'',
  })
 
  const handleInputValue=(event)=>{
event.preventDefault()
  }


  return (
    <div
    className={`modal fade ${showModal ? 'show' : ''}`}
    id="exampleModalToggle"
    aria-hidden="true"
    tabIndex="-1"
    style={{ display: showModal ? 'block' : 'none' }}
  >
       {/* <div
                  className="modal fade"
                  id="exampleModalToggle"
                  aria-hidden="true"
                  aria-labelledby="exampleModalToggleLabel"
                  tabindex="-1"
                > */}
                  <div className="modal-dialog modal-xl modal-dialog-centered">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1
                          className="modal-title fs-5"
                          id="exampleModalToggleLabel"
                        >
                          Booking History
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                      <form className="row g-3">
                        <div className="col-md-4">
                          <label htmlFor="inputEmail4" className="form-label" >
                            Customer Name
                          </label>
                          <select
                            className="form-select"
                            id="customerPayst"
                            name="customerPayst"
                            vlaule={inputValue.customerName}
                            onChange={handleInputValue}
                            required=""
                          >
                            <option value="">Customer Name</option>
                            <option value="Full Paid">jvbhfjvghfk</option>
                            <option value="Partial Paid">Pdgsjhfghjd</option>
                            <option value="Not Paid">Nhgwdwyghjw</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="inputState" className="form-label">
                            Select Truck Type
                          </label>
                          <select className="form-select" onChange={handleInputValue}>
                            <option selected>Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="inputDriverName" className="form-label">
                          Driver Name
                          </label>
                          <select
                            className="form-select"
                            onChange={handleInputValue}
                            value={inputValue.driverName}
                            name="customerPayst"
                            required=""
                          >
                            <option value="">Driver Name</option>
                            <option value="Full Paid">Full Paid</option>
                            <option value="Partial Paid">Partial Paid</option>
                            <option value="Not Paid">Not Paid</option>
                          </select>
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="inputAddress" className="form-label">
                           Pickup Location 
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name='pickupLocation'
                            value={inputValue.pickupLocation}
                            onChange={handleInputValue}
                            placeholder="Pickup Location"
                          />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="inputAddress2" className="form-label">
                            Drop Location
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name='dropLocation'
                            value={inputValue.dropLocation}
                            onChange={handleInputValue}
                            placeholder="Drop Location"
                          />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="inputAddress2" className="form-label">
                           Distance
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            name='distance'
                            onChange={handleInputValue}
                            value={inputValue.distance}
                            placeholder="Distance in Km"
                          />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="inputAddress2" className="form-label">
                           Time Duration
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Duration"
                          />
                        </div>
                        <div className="col-md-2">
                          <label htmlFor="inputAddress2" className="form-label">
                           Total Amount
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Total Amount"
                          />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="inputAddress2" className="form-label">
                           Driver Share
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Driver Share"
                          />
                        </div>
                        <div className="col-md-3">
                          <label htmlFor="inputAddress2" className="form-label">
                          Company Share
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company Share"
                            />
                        </div>  
                        <div className="col-md-2">
                          <label htmlFor="inputAddress2" className="form-label">
                          Totoal Discount
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company Share"
                            />
                        </div> 
                        <div className="col-md-2">
                          <label htmlFor="inputAddress2" className="form-label">
                          Customer Share
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Company Share"
                            />
                        </div>    
                        <div className="col-md-4">
                          <label htmlFor="inputAddress2" className="form-label">
                          Customer Payment Status
                          </label>
                          <select
                            className="form-select"
                            name="customerPayst"
                            required=""
                          >
                            <option value="">Select Payment Method</option>
                            <option value="Full Paid">Full Paid</option>
                            <option value="Partial Paid">Partial Paid</option>
                            <option value="Not Paid">Not Paid</option>
                          </select>
                        </div>
                        <div className="col-md-4">
                          <label htmlFor="inputAddress2" className="form-label">
                          Customer Paid
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Customer Paid"
                            />
                        </div>  
                        <div className="col-md-4">
                          <label htmlFor="inputAddress2" className="form-label">
                         Customer Pending Payment
                           </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Pending Payment"
                            />
                        </div>  
                        <div className="col-md-4">
                          <label htmlFor="inputAddress2" className="form-label">
                         Driver Payment Status
                           </label>
                           <select
                            className="form-select"
                            name="customerPayst"
                            required=""
                          >
                            <option value="">Select Payment Method</option>
                            <option value="Full Paid">Full Paid</option>
                            <option value="Partial Paid">Partial Paid</option>
                            <option value="Not Paid">Not Paid</option>
                          </select>
                        </div> 
                        <div className="col-md-4">
                          <label htmlFor="inputAddress2" className="form-label">
                          Driver Paid
                           </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Driver Paid"
                            />
                        </div> 
                        <div className="col-md-4">
                          <label htmlFor="inputAddress2" className="form-label">
                         Driver Pending Payment
                           </label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Driver Pending Payment"
                            />
                        </div> 
                        <div className="col-md-12">
                          <label htmlFor="inputAddress2" className="form-label">
                         Booking Status
                           </label>
                           <select
                            className="form-select"
                            placeholder=""
                            name="status"
                            required=""
                          >
                            <option value="">Select Booking Status</option>
                            <option value="On Process">On Process</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>
                     
                      <div className="modal-footer">
                        <button
                          className="btn btn-primary"
                          data-bs-target="#exampleModalToggle2"
                          data-bs-toggle="modal"
                        >
                          Submit
                        </button>
                      </div>
                      </form>
                      </div>
                    </div>
                  </div>
              
    </div>
  )
}

export default AddBooking
