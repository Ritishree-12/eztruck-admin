import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


import "./bookingstyle.css";
import AddBooking from "../Add Bookings/AddBooking";

const BookingOffline = () => {
  const [open, setOpen] = React.useState(false);

  // Define the data you want to pass as props
  const modalData = {
    customerName: 'Customer Name',
    truckType: 'Truck Type',
    driverName: 'Driver Name',
    pickupLocation: 'Pickup Location',
    dropLocation: 'Drop Location',
    // Add more data for other modal items
  };

  const handleClose = () => {
    setOpen(false);
    console.log("clicked");
  };

  return (
    <>
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div className="row">
                  <div className="col">
                    <h4 className="card-title  float-left">Booking History</h4>
                  </div>
                  <div
                    className="col"
                    style={{ display: "flex", justifyContent: "flex-end" }}
                  >
                    <button
                      type="button"
                      className="btn btn-primary btn-sm"
                      onClick={() => setOpen(true)}
                    >
                      <i className="fa fa-plus m-r-10"></i>Add History
                    </button>
                  </div>
                  <AddBooking open={open} handleClose={handleClose} {...modalData}/>
                </div>
                <div
                  class="table-responsive m-t-10"
                  style={{ height: "500px" }}
                >
                  <div
                    id="example24_wrapper"
                    class="dataTables_wrapper no-footer"
                  >
                    <div class="top">
                      <div class="dt-buttons">
                        <a
                          class="dt-button buttons-csv buttons-html5"
                          tabindex="0"
                          aria-controls="example24"
                          href="#"
                        >
                          <span>CSV</span>
                        </a>
                        <a
                          class="dt-button buttons-excel buttons-html5"
                          tabindex="0"
                          aria-controls="example24"
                          href="#"
                        >
                          <span>Excel</span>
                        </a>
                        <a
                          class="dt-button buttons-pdf buttons-html5"
                          tabindex="0"
                          aria-controls="example24"
                          href="#"
                        >
                          <span>PDF</span>
                        </a>
                        <a
                          class="dt-button buttons-print"
                          tabindex="0"
                          aria-controls="example24"
                          href="#"
                        >
                          <span>Print</span>
                        </a>
                      </div>
                    </div>
                    <div class="bottom">
                      <div class="dataTables_length" id="example24_length">
                        <label>
                          Show
                          <select
                            name="example24_length"
                            aria-controls="example24"
                            class=""
                          >
                            <option value="10">10 rows</option>
                            <option value="25">25 rows</option>
                            <option value="50">50 rows</option>
                            <option value="-1">Show all</option>
                          </select>{" "}
                          entries
                        </label>
                      </div>
                      <div id="example24_filter" class="dataTables_filter">
                        <label>
                          Search:
                          <input
                            type="search"
                            class=""
                            placeholder=""
                            aria-controls="example24"
                          />
                        </label>
                      </div>
                      <table
                        id="example24"
                        class="display wrap table table-hover table-striped table-bordered dataTable no-footer"
                        cellspacing="0"
                        width="100%"
                        role="grid"
                        aria-describedby="example24_info"
                        // style="width: 100%;"
                      >
                        <thead>
                          <tr role="row">
                            <th
                              class="sorting_asc"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-sort="ascending"
                              aria-label=" Sl.No.: activate to sort column descending"
                              // style="width: 63.0156px;"
                            >
                              {" "}
                              Sl.No.
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Action: activate to sort column ascending"
                              // style="width: 70.6875px;"
                            >
                              Action
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label=" Date: activate to sort column ascending"
                              // style="width: 65.8281px;"
                            >
                              {" "}
                              Date
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label=" Order Id: activate to sort column ascending"
                              // style="width: 124.422px;"
                            >
                              {" "}
                              Order Id
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="PickUp Location: activate to sort column ascending"
                              // style="width: 153.797px;"
                            >
                              PickUp Location
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Drop Location: activate to sort column ascending"
                              // style="width: 153.797px;"
                            >
                              Drop Location
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Customer Name: activate to sort column ascending"
                              // style="width: 125.359px;"
                            >
                              Customer Name
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Truck Type: activate to sort column ascending"
                              // style="width: 58.2188px;"
                            >
                              Truck Type
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Driver Name: activate to sort column ascending"
                              // style="width: 116.734px;"
                            >
                              Driver Name
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="NumberPalte: activate to sort column ascending"
                              // style="width: 124.984px;"
                            >
                              NumberPalte
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Model: activate to sort column ascending"
                              // style="width: 68.4219px;"
                            >
                              Model
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Brand: activate to sort column ascending"
                              // style="width: 76.594px;"
                            >
                              Brand
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Distance: activate to sort column ascending"
                              // style="width: 89.938px;"
                            >
                              Distance
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Time Duration: activate to sort column ascending"
                              // style="width: 88.656px;"
                            >
                              Time Duration
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Total Amount: activate to sort column ascending"
                              // style="width: 83.875px;"
                            >
                              Total Amount
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Company Share: activate to sort column ascending"
                              // style="width: 80.594px;"
                            >
                              Company Share
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Total Discount: activate to sort column ascending"
                              // style="width: 89.797px;"
                            >
                              Total Discount
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Customer Share: activate to sort column ascending"
                              // style="width: 80.109px;"
                            >
                              Customer Share
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Customer Payment Status: activate to sort column ascending"
                              // style="width: 80.109px;"
                            >
                              Customer Payment Status
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Customer Current Payment: activate to sort column ascending"
                              // style="width: 91.672px;"
                            >
                              Customer Current Payment
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Customer Pending Payment: activate to sort column ascending"
                              // style="width: 91.672px;"
                            >
                              Customer Pending Payment
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Driver Share: activate to sort column ascending"
                              // style="width: 66.0781px;"
                            >
                              Driver Share
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Driver Payment Status: activate to sort column ascending"
                              // style="width: 77.844px;"
                            >
                              Driver Payment Status
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Driver Current Payment: activate to sort column ascending"
                              // style="width: 91.672px;"
                            >
                              Driver Current Payment
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Driver Pending Payment: activate to sort column ascending"
                              // style="width: 91.672px;"
                            >
                              Driver Pending Payment
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Status: activate to sort column ascending"
                              // style="width: 78.328px;"
                            >
                              Status
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Remark: activate to sort column ascending"
                              // style="width: 81.625px;"
                            >
                              Remark
                            </th>
                            <th
                              class="sorting"
                              tabindex="0"
                              aria-controls="example24"
                              rowspan="1"
                              colspan="1"
                              aria-label="Booked By: activate to sort column ascending"
                              // style="width: 60.5938px;"
                            >
                              Booked By
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr role="row" class="odd">
                            <td class="sorting_1">1</td>
                            <td>
                              <button
                                id="editHData"
                                type="button"
                                onclick="editBookingHistory(4);"
                                class="btn btn-warning btn-sm"
                                data-original-title="Modify"
                                data-toggle="modal"
                                data-target="#conducteur-mod"
                              >
                                <i class="fa fa-pencil"></i>
                              </button>
                            </td>
                            <td>2021-12-01 18:24:09</td>
                            <td>EZ001201062409</td>
                            <td>
                              SUM Hospital, K8 Kalinga Nagar, Kalinganagar,
                              Bhubaneswar, Odisha, India
                            </td>
                            <td>Barunei Hill, Khordha, Odisha, India</td>
                            <td>JJ Freecall PVT. LTD +917682907280</td>
                            <td>Auto</td>
                            <td>Basant kumar Sahoo +919337932123</td>
                            <td>OD02AV2303</td>
                            <td>Ape Xtra LDX</td>
                            <td>Paggio</td>
                            <td>24.0 km</td>
                            <td>44 mins</td>
                            <td>731</td>
                            <td>95</td>
                            <td>219</td>
                            <td>512</td>
                            <td>
                              <span class="badge badge-success">Full Paid</span>
                            </td>
                            <td>605</td>
                            <td>-93</td>
                            <td>636</td>
                            <td>
                              <span class="badge badge-danger">Not Paid</span>
                            </td>
                            <td>0</td>
                            <td>636</td>

                            <td>
                              <span class="badge badge-warning">
                                On Process
                              </span>
                            </td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr role="row" class="even">
                            <td class="sorting_1">2</td>
                            <td>
                              <button
                                id="editHData"
                                type="button"
                                onclick="editBookingHistory(3);"
                                class="btn btn-warning btn-sm"
                                data-original-title="Modify"
                                data-toggle="modal"
                                data-target="#conducteur-mod"
                              >
                                <i class="fa fa-pencil"></i>
                              </button>
                            </td>
                            <td>2021-12-01 18:14:12</td>
                            <td>EZ001201061412</td>
                            <td>Rasulgarh, Bhubaneswar, Odisha, India</td>
                            <td>
                              Utkal Builders Ltd., Maharishi College Road,
                              Saheed Nagar, Bhubaneswar, Odisha, India
                            </td>
                            <td>Shree Vinayak Plywood +917008016589</td>
                            <td>Mini Truck</td>
                            <td>Pratap Patra +919337291431</td>
                            <td>OD05AA9783</td>
                            <td>ACE FACELIFT HT BS IV</td>
                            <td>TATA</td>
                            <td>3.4 km</td>
                            <td>9 mins</td>
                            <td>452</td>
                            <td>59</td>
                            <td>136</td>
                            <td>316</td>
                            <td>
                              <span class="badge badge-success">Full Paid</span>
                            </td>
                            <td>316.4</td>
                            <td>0</td>
                            <td>393</td>
                            <td>
                              <span class="badge badge-danger">Not Paid</span>
                            </td>
                            <td>0</td>
                            <td>393</td>

                            <td>
                              <span class="badge badge-success">Completed</span>
                            </td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr role="row" class="odd">
                            <td class="sorting_1">3</td>
                            <td>
                              <button
                                id="editHData"
                                type="button"
                                onclick="editBookingHistory(2);"
                                class="btn btn-warning btn-sm"
                                data-original-title="Modify"
                                data-toggle="modal"
                                data-target="#conducteur-mod"
                              >
                                <i class="fa fa-pencil"></i>
                              </button>
                            </td>
                            <td>2021-12-01 09:53:40</td>
                            <td>EZ001201095340</td>
                            <td>
                              Chandrasekharpur, Bhubaneswar, Odisha, India
                            </td>
                            <td>Rasulgarh, Bhubaneswar, Odisha, India</td>
                            <td>Anil Behera +918917633852</td>
                            <td>Auto</td>
                            <td>Minakshi Ray +917325881340</td>
                            <td>OD02124Q1</td>
                            <td>Alfa</td>
                            <td>Mahindra</td>
                            <td>9.1 km</td>
                            <td>20 mins</td>
                            <td>469</td>
                            <td>61</td>
                            <td>141</td>
                            <td>328</td>
                            <td>
                              <span class="badge badge-warning">
                                Partial Paid
                              </span>
                            </td>
                            <td>100</td>
                            <td>228.3</td>
                            <td>408</td>
                            <td>
                              <span class="badge badge-warning">
                                Partial Paid
                              </span>
                            </td>
                            <td>100</td>
                            <td>308</td>

                            <td>
                              <span class="badge badge-warning">
                                On Process
                              </span>
                            </td>
                            <td></td>
                            <td></td>
                          </tr>
                          <tr role="row" class="even">
                            <td class="sorting_1">4</td>
                            <td>
                              <button
                                id="editHData"
                                type="button"
                                onclick="editBookingHistory(1);"
                                class="btn btn-warning btn-sm"
                                data-original-title="Modify"
                                data-toggle="modal"
                                data-target="#conducteur-mod"
                              >
                                <i class="fa fa-pencil"></i>
                              </button>
                            </td>
                            <td>2021-12-01 09:49:53</td>
                            <td>EZ001201094953</td>
                            <td>Kesura Square, Bhubaneswar, Odisha</td>
                            <td>
                              Damana, Chandrasekharpur, Bhubaneswar, Odisha,
                              India
                            </td>
                            <td>Durga Bisoi +919583586996</td>
                            <td>Auto</td>
                            <td>Durga +917064401137</td>
                            <td>OD02AT1111</td>
                            <td>Apex Ultra </td>
                            <td>Paggio</td>
                            <td>14.0 km</td>
                            <td>26 mins</td>
                            <td>552</td>
                            <td>72</td>
                            <td>166</td>
                            <td>386</td>
                            <td>
                              <span class="badge badge-success">Full Paid</span>
                            </td>
                            <td>386.4</td>
                            <td>0</td>
                            <td>480</td>
                            <td>
                              <span class="badge badge-success">Full Paid</span>
                            </td>
                            <td>500</td>
                            <td>-20</td>

                            <td>
                              <span class="badge badge-success">Completed</span>
                            </td>
                            <td>
                              Actual Price is 480 but driver dimming is 500
                            </td>
                            <td></td>
                          </tr>
                        </tbody>
                      </table>
                      <div
                        class="dataTables_info"
                        id="example24_info"
                        role="status"
                        aria-live="polite"
                      >
                        Showing 1 to 4 of 4 entries
                      </div>
                      <div
                        class="dataTables_paginate paging_simple_numbers"
                        id="example24_paginate"
                      >
                        <a
                          class="paginate_button previous disabled"
                          aria-controls="example24"
                          data-dt-idx="0"
                          tabindex="0"
                          id="example24_previous"
                        >
                          Previous
                        </a>
                        <span>
                          <a
                            class="paginate_button current"
                            aria-controls="example24"
                            data-dt-idx="1"
                            tabindex="0"
                          >
                            1
                          </a>
                        </span>
                        <a
                          class="paginate_button next disabled"
                          aria-controls="example24"
                          data-dt-idx="2"
                          tabindex="0"
                          id="example24_next"
                        >
                          Next
                        </a>
                      </div>
                    </div>
                    <div class="clear"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="conducteur-mod"
          class="modal fade in"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content bg-gris">
              <div class="modal-header">
                <h4 class="modal-title" id="myModalLabel">
                  Update Booking History
                </h4>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-hidden="true"
                >
                  ×
                </button>
              </div>
              <form
                class="form-horizontal "
                action="query/action.php"
                method="post"
              >
                <div class="modal-body">
                  <div class="form-group">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="" for="designation">
                            Customer Payment Status
                          </label>
                          <select
                            class="form-control "
                            id="customerPayst"
                            name="customerPayst"
                            required=""
                          >
                            <option value="">Select Payment Method</option>
                            <option value="Full Paid">Full Paid</option>
                            <option value="Partial Paid">Partial Paid</option>
                            <option value="Not Paid">Not Paid</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="mr-sm-2" for="designation">
                            Customer Paid
                          </label>
                          <input
                            type="text"
                            class="form-control "
                            placeholder=""
                            name="customer_pay"
                            id="customer_pay"
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="mr-sm-2" for="designation">
                            Pending Payment
                          </label>
                          <input
                            type="text"
                            class="form-control "
                            placeholder=""
                            name="customerPending_pay"
                            id="customerPending_pay"
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="" for="designation">
                            Driver Payment Status
                          </label>
                          <select
                            class="form-control "
                            id="driverPayst"
                            name="driverPayst"
                            required=""
                          >
                            <option value="">Select Payment Method</option>
                            <option value="Full Paid">Full Paid</option>
                            <option value="Partial Paid">Partial Paid</option>
                            <option value="Not Paid">Not Paid</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="mr-sm-2" for="designation">
                            Driver Paid
                          </label>
                          <input
                            type="text"
                            class="form-control "
                            placeholder=""
                            name="driver_pay"
                            id="driver_pay"
                            required=""
                          />
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="mr-sm-2" for="designation">
                            Pending Payment
                          </label>
                          <input
                            type="text"
                            class="form-control "
                            placeholder=""
                            name="driverPending_pay"
                            id="driverPending_pay"
                          />
                        </div>
                      </div>
                      <div class="col-md-4 m-b-0">
                        <div class="form-group mb-3">
                          <label class="mr-sm-2" for="designation">
                            Booking Status
                          </label>
                          <select
                            class="form-control "
                            placeholder=""
                            name="status"
                            id="status"
                            required=""
                          >
                            <option value="">Select Booking Status</option>
                            <option value="On Process">On Process</option>
                            <option value="Completed">Completed</option>
                            <option value="Cancelled">Cancelled</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-md-4 m-b-0">
                        <div class="form-group mb-3">
                          <label class="mr-sm-2" for="designation">
                            Remarks
                          </label>
                          <textarea
                            class="form-control "
                            placeholder="Please Enter a Message ..."
                            name="remark"
                            id="remark"
                          ></textarea>
                        </div>
                      </div>
                      <input
                        type="hidden"
                        class="form-control "
                        placeholder=""
                        name="editHistoryId"
                        id="editHistoryId"
                      />
                      <input
                        type="hidden"
                        class="form-control "
                        placeholder=""
                        name="editCTotalAmt"
                        id="editCTotalAmt"
                      />
                      <input
                        type="hidden"
                        class="form-control "
                        placeholder=""
                        name="editDTotalAmt"
                        id="editDTotalAmt"
                      />
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="submit"
                    name="updateBookingHistory"
                    value="Update"
                    class="btn btn-dark waves-effect"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    class="btn btn-default waves-effect"
                    data-dismiss="modal"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* <!-- Modal End -->
                <!-- End PAge Content -->
                <!-- Right sidebar --> */}
        {/* <div class="right-sidebar">
          <div class="rpanel-title">
            {" "}
            Service Panel{" "}
            <span>
              <i class="ti-close right-side-toggle"></i>
            </span>{" "}
          </div>
          <div class="r-panel-body">
            <ul id="themecolors" class="m-t-20">
              <li>
                <b>With Light sidebar</b>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="default"
                  class="default-theme"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="green"
                  class="green-theme"
                >
                  2
                </a>
              </li>
              <li>
                <a href="javascript:void(0)" data-theme="red" class="red-theme">
                  3
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="blue"
                  class="blue-theme working"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="purple"
                  class="purple-theme"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="megna"
                  class="megna-theme"
                >
                  6
                </a>
              </li>
              <li class="d-block m-t-30">
                <b>With Dark sidebar</b>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="default-dark"
                  class="default-dark-theme"
                >
                  7
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="green-dark"
                  class="green-dark-theme"
                >
                  8
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="red-dark"
                  class="red-dark-theme"
                >
                  9
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="blue-dark"
                  class="blue-dark-theme"
                >
                  10
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="purple-dark"
                  class="purple-dark-theme"
                >
                  11
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  data-theme="megna-dark"
                  class="megna-dark-theme "
                >
                  12
                </a>
              </li>
            </ul>
          </div>
        </div> */}
        {/* <div class="slimScrollBar" style="background: rgb(220, 220, 220); width: 5px; position: absolute; top: 0px; opacity: 0.4; display: block; border-radius: 7px; z-index: 99; right: 1px;"></div>
                    <div class="slimScrollRail" style="width: 5px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default BookingOffline;
