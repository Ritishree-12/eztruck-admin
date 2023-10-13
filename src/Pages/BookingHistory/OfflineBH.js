import React, { useState } from "react";

const OfflineBH = (props) => {
  const { showModal, closeModal } = props;
  const [inputValue, setInputValue] = useState("");
  const [showTableData, setShowTableData] = useState({
    customerName: "",
    truckType: "",
    driverName: "",
    pickupLocation: "",
    dropLocation: "",
    distance: "",
    timeDuration: "",
    totalAmount: "",
    driverShare: "",
    companyShare: "",
    totalDiscount: "",
    customerShare: "",
    customerPaymentStatus: "",
    customerPaid: "",
    customerPendingPayment: "",
    driverPaymentStatus: "",
    driverPaid: "",
    driverPendingPayment: "",
    bookingStatus: "",
  });
  const handleInputValue = (event) => {
    const { name, value } = event.target;
    setInputValue({ ...inputValue, [name]: value });
    console.log("tabledata");
  };

  const submitHandler = (event) => {
    event.preventDefault();
  console.log("Form submitted!");
  closeModal();
  };

  return (
    <div
      className={`modal fade ${showModal ? "show" : ""}`}
      id="exampleModalToggle"
      aria-hidden="true"
      tabIndex="-1"
      style={{ display: showModal ? "block" : "none" }}
    >
      <div className="modal-dialog modal-xl modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
              Booking History
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row g-3" onSubmit={submitHandler}>
              <div className="col-md-4">
                <label htmlFor="inputEmail4" className="form-label">
                  Customer Name
                </label>
                <select
                  className="form-select"
                  name="customerName"
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
                  Truck Type
                </label>
                <select
                  className="form-select"
                  name="selectTruckType"
                  value={inputValue.truckType}
                  onChange={handleInputValue}
                >
                  <option selected>Select Truck Type</option>
                  <option>...</option>
                </select>
              </div>
              <div className="col-md-4">
                <label htmlFor="inputDriverName" className="form-label">
                  Driver Name
                </label>
                <select
                  className="form-select"
                  name="driverName"
                  value={inputValue.driverName}
                  onChange={handleInputValue}
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
                  name="pickupLocation"
                  value={inputValue.pickupLocation}
                  onChange={handleInputValue}
                  placeholder="Pickup Location"
                />
                {console.log(inputValue.pickupLocation)}
              </div>
              <div className="col-md-3">
                <label htmlFor="inputAddress2" className="form-label">
                  Drop Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="dropLocation"
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
                  placeholder="Distance in Km"
                  name="distance"
                  value={inputValue.distance}
                  onChange={handleInputValue}
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="inputAddress2" className="form-label">
                  Time Duration
                </label>
                <input
                  type="text"
                  name="timeDuration"
                  value={inputValue.timeDuration}
                  onChange={handleInputValue}
                  className="form-control"
                  placeholder="Duration"
                />
              </div>
              <div className="col-md-2">
                <label htmlFor="inputAddress2" className="form-label">
                  Total Amount
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="totalAmount"
                  value={inputValue.totalAmount}
                  onChange={handleInputValue}
                  placeholder="Total Amount"
                />
              </div>
              <div className="col-md-3">
                <label htmlFor="inputAddress2" className="form-label">
                  Driver Share
                </label>
                <input
                  type="text"
                  name="driverShare"
                  value={inputValue.driverShare}
                  onChange={handleInputValue}
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
                  name="companyShare"
                  value={inputValue.companyShare}
                  onChange={handleInputValue}
                  className="form-control"
                  placeholder="Company Share"
                />
{console.log(inputValue.companyShare)}
              </div>
              <div className="col-md-2">
                <label htmlFor="inputAddress2" className="form-label">
                  Totoal Discount
                </label>
                <input
                  type="text"
                  name="totalDiscount"
                  value={inputValue.totalDiscount}
                  onChange={handleInputValue}
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
                  name="customerShare"
                  value={inputValue.customerShare}
                  onChange={handleInputValue}
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
                  name="customerPaymentStatus"
                  value={inputValue.customerPaymentStatus}
                  onChange={handleInputValue}
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
                  name="customerPaid"
                  value={inputValue.customerPaid}
                  onChange={handleInputValue}
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
                  name="customerPendingPayment"
                  value={inputValue.customerPendingPayment}
                  onChange={handleInputValue}
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
                  name="driverPaymentStatus"
                  value={inputValue.driverPaymentStatus}
                  onChange={handleInputValue}
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
                  name="driverPaid"
                  value={inputValue.driverPaid}
                  onChange={handleInputValue}
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
                  name="driverPendingPayment"
                  value={inputValue.driverPendingPayment}
                  onChange={handleInputValue}
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
                  value={inputValue.bookingStatus}
                  onChange={handleInputValue}
                  required=""
                >
                  <option value="">Select Booking Status</option>
                  <option value="On Process">On Process</option>
                  <option value="Completed">Completed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>

              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  // data-bs-dismiss="modal"
                  onClick={closeModal}
                >
                  Close
                </button>
                <button type="submit" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfflineBH;
