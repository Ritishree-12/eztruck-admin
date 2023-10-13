import React from "react";
// import './Pushnotification.css'
import ReplaySharpIcon from "@mui/icons-material/ReplaySharp";
import DeleteIcon from "@mui/icons-material/Delete";
function Pushnotification() {
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">List of sent notifications</h4>
              {/* <!-- <h6 className="card-subtitle">Export data to Copy, CSV, Excel, PDF & Print</h6> --> */}
              <button
                type="button"
                class="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Add New
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        Modal title
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">...</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button type="button" class="btn btn-primary">
                        Save changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="table-responsive m-t-10">
                <div
                  id="example23_wrapper"
                  className="dataTables_wrapper no-footer"
                >
                  <div classNameName="row" style={{ textAlign: "left" }}>
                    <div className="dt-buttons">
                      <a
                        className="dt-button buttons-excel buttons-html5"
                        tabindex="0"
                        aria-controls="example23"
                        href="#"
                      >
                        <span>Excel</span>
                      </a>
                      <a
                        className="dt-button buttons-pdf buttons-html5"
                        tabindex="0"
                        aria-controls="example23"
                        href="#"
                      >
                        <span>PDF</span>
                      </a>
                      <a
                        className="dt-button buttons-print"
                        tabindex="0"
                        aria-controls="example23"
                        href="#"
                      >
                        <span>Print</span>
                      </a>
                    </div>
                  </div>
                  <div id="example23_filter" className="dataTables_filter">
                    <label>
                      Search:
                      <input
                        type="search"
                        className=""
                        placeholder=""
                        aria-controls="example23"
                      />
                    </label>
                  </div>
                  <table
                    id="example23"
                    className="display nowrap table table-hover table-striped table-bordered dataTable no-footer"
                    cellspacing="0"
                    width="100%"
                    role="grid"
                    aria-describedby="example23_info"
                    style={{ width: "100%" }}
                  >
                    <thead>
                      <tr role="row">
                        <th
                          className="sorting_asc"
                          tabindex="0"
                          aria-controls="example23"
                          rowspan="1"
                          colspan="1"
                          aria-sort="ascending"
                          aria-label="Re-Send: activate to sort column descending"
                          style={{ width: "90px" }}
                        >
                          Re-Send
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="example23"
                          rowspan="1"
                          colspan="1"
                          aria-label="No: activate to sort column ascending"
                          style={{ width: "41px" }}
                        >
                          No
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="example23"
                          rowspan="1"
                          colspan="1"
                          aria-label="User Type: activate to sort column ascending"
                          style={{ width: "98px" }}
                        >
                          User Type
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="example23"
                          rowspan="1"
                          colspan="1"
                          aria-label="ezTruck - ADMIN: activate to sort column ascending"
                          style={{ width: "322px" }}
                        >
                          ezTruck - ADMIN
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="example23"
                          rowspan="1"
                          colspan="1"
                          aria-label="Message: activate to sort column ascending"
                          style={{ width: "1050px" }}
                        >
                          Message
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="example23"
                          rowspan="1"
                          colspan="1"
                          aria-label="Created: activate to sort column ascending"
                          style={{ width: "148px" }}
                        >
                          Created
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="example23"
                          rowspan="1"
                          colspan="1"
                          aria-label="Modified: activate to sort column ascending"
                          style={{ width: "166px" }}
                        >
                          Modified
                        </th>
                        <th
                          className="sorting"
                          tabindex="0"
                          aria-controls="example23"
                          rowspan="1"
                          colspan="1"
                          aria-label="Actions: activate to sort column ascending"
                          style={{ width: "80px" }}
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr role="row" className="odd">
                        <td className="sorting_1">
                          <button
                            onclick="reSendNotification(1);"
                            className="btn btn-primary"
                          >
                            <ReplaySharpIcon />
                          </button>
                        </td>
                        <td>1</td>
                        <td></td>
                        <td>ezTruck app update available!</td>
                        <td>Hello users ezTruck app has a new update...</td>
                        <td>2021-09-30 13:08:31</td>
                        <td>0000-00-00 00:00:00</td>
                        <td>
                          <a
                            href="query/action.php?id_notification=1"
                            className="btn btn-danger btn-sm"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                          >
                            {" "}
                            <DeleteIcon />{" "}
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">
                          <button
                            onclick="reSendNotification(2);"
                            className="btn btn-primary"
                          >
                            <ReplaySharpIcon />
                          </button>
                        </td>
                        <td>2</td>
                        <td></td>
                        <td>Update your ezTruck app now</td>
                        <td>
                          Hello users ezTruck app has a new update Update your
                          app now and get new offers
                        </td>
                        <td>2021-09-30 16:07:03</td>
                        <td>0000-00-00 00:00:00</td>
                        <td>
                          <a
                            href="query/action.php?id_notification=2"
                            className="btn btn-danger btn-sm"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                          >
                            {" "}
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">
                          <button
                            onclick="reSendNotification(3);"
                            className="btn btn-primary"
                          >
                            <ReplaySharpIcon />
                          </button>
                        </td>
                        <td>3</td>
                        <td>Customer</td>
                        <td>Still, searching for trucks offline?</td>
                        <td>
                          ezTruck is ready to shower you with discounts, offers,
                          and free rides. You only have to take a step online.
                        </td>
                        <td>2021-10-22 17:29:28</td>
                        <td>0000-00-00 00:00:00</td>
                        <td>
                          <a
                            href="query/action.php?id_notification=3"
                            className="btn btn-danger btn-sm"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                          >
                            {" "}
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">
                          <button
                            onclick="reSendNotification(4);"
                            className="btn btn-primary"
                          >
                            <ReplaySharpIcon />
                          </button>
                        </td>
                        <td>4</td>
                        <td>Driver</td>
                        <td>Still, waiting to get a call from customer?</td>
                        <td>You only have to go online.</td>
                        <td>2021-10-22 17:38:08</td>
                        <td>0000-00-00 00:00:00</td>
                        <td>
                          <a
                            href="query/action.php?id_notification=4"
                            className="btn btn-danger btn-sm"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                          >
                            {" "}
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">
                          <button
                            onclick="reSendNotification(5);"
                            className="btn btn-primary"
                          >
                            <ReplaySharpIcon />
                          </button>
                        </td>
                        <td>5</td>
                        <td>Customer</td>
                        <td>It's weekend again!</td>
                        <td>
                          Busy in planning weekend? But need a Truck urgently,
                          you know where to go.
                        </td>
                        <td>2021-10-23 12:51:17</td>
                        <td>0000-00-00 00:00:00</td>
                        <td>
                          <a
                            href="query/action.php?id_notification=5"
                            className="btn btn-danger btn-sm"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                          >
                            {" "}
                            <DeleteIcon />{" "}
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">
                          <button
                            onclick="reSendNotification(6);"
                            className="btn btn-primary"
                          >
                            <ReplaySharpIcon />
                          </button>
                        </td>
                        <td>6</td>
                        <td>Driver</td>
                        <td> Isn't Saturday keeping you busy?</td>
                        <td>
                          Don't miss out on bookings, turn on your active
                          status.
                        </td>
                        <td>2021-10-23 12:53:21</td>
                        <td>0000-00-00 00:00:00</td>
                        <td>
                          <a
                            href="query/action.php?id_notification=6"
                            className="btn btn-danger btn-sm"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                          >
                            {" "}
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">
                          <button
                            onclick="reSendNotification(7);"
                            className="btn btn-primary"
                          >
                            <ReplaySharpIcon />
                          </button>
                        </td>
                        <td>7</td>
                        <td>Customer</td>
                        <td></td>
                        <td>Enjoy the cheapest truck service ever.</td>
                        <td>2021-10-23 16:37:14</td>
                        <td>0000-00-00 00:00:00</td>
                        <td>
                          <a
                            href="query/action.php?id_notification=7"
                            className="btn btn-danger btn-sm"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                          >
                            {" "}
                            <DeleteIcon />{" "}
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">
                          <button
                            onclick="reSendNotification(8);"
                            className="btn btn-primary"
                          >
                            <ReplaySharpIcon />
                          </button>
                        </td>
                        <td>8</td>
                        <td>Driver</td>
                        <td> What are you up to ?</td>
                        <td>They need you and you are not online?</td>
                        <td>2021-10-23 16:41:33</td>
                        <td>0000-00-00 00:00:00</td>
                        <td>
                          <a
                            href="query/action.php?id_notification=8"
                            className="btn btn-danger btn-sm"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                          >
                            {" "}
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="odd">
                        <td className="sorting_1">
                          <button
                            onclick="reSendNotification(9);"
                            className="btn btn-primary"
                          >
                            <ReplaySharpIcon />
                          </button>
                        </td>
                        <td>9</td>
                        <td>Customer</td>
                        <td>Large </td>
                        <td>We have it all at ezTruck</td>
                        <td>2021-10-25 15:23:17</td>
                        <td>0000-00-00 00:00:00</td>
                        <td>
                          <a
                            href="query/action.php?id_notification=9"
                            className="btn btn-danger btn-sm"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                          >
                            {" "}
                            <DeleteIcon />{" "}
                          </a>
                        </td>
                      </tr>
                      <tr role="row" className="even">
                        <td className="sorting_1">
                          <button
                            onclick="reSendNotification(10);"
                            className="btn btn-primary"
                          >
                            <ReplaySharpIcon />
                          </button>
                        </td>
                        <td>10</td>
                        <td>Driver</td>
                        <td>We have not seen you for a while now!!</td>
                        <td>Bookings are waiting for your response.</td>
                        <td>2021-10-25 15:23:43</td>
                        <td>0000-00-00 00:00:00</td>
                        <td>
                          <a
                            href="query/action.php?id_notification=10"
                            className="btn btn-danger btn-sm"
                            data-toggle="tooltip"
                            data-original-title="Delete"
                          >
                            {" "}
                            <DeleteIcon />
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div
                    className="dataTables_info"
                    id="example23_info"
                    role="status"
                    aria-live="polite"
                  >
                    Showing 1 to 10 of 33 entries
                  </div>
                  <div
                    className="dataTables_paginate paging_simple_numbers"
                    id="example23_paginate"
                  >
                    <a
                      className="paginate_button previous disabled"
                      aria-controls="example23"
                      data-dt-idx="0"
                      tabindex="0"
                      id="example23_previous"
                    >
                      Previous
                    </a>
                    <span>
                      <a
                        className="paginate_button current"
                        aria-controls="example23"
                        data-dt-idx="1"
                        tabindex="0"
                      >
                        1
                      </a>
                      <a
                        className="paginate_button "
                        aria-controls="example23"
                        data-dt-idx="2"
                        tabindex="0"
                      >
                        2
                      </a>
                      <a
                        className="paginate_button "
                        aria-controls="example23"
                        data-dt-idx="3"
                        tabindex="0"
                      >
                        3
                      </a>
                      <a
                        className="paginate_button "
                        aria-controls="example23"
                        data-dt-idx="4"
                        tabindex="0"
                      >
                        4
                      </a>
                    </span>
                    <a
                      className="paginate_button next"
                      aria-controls="example23"
                      data-dt-idx="5"
                      tabindex="0"
                      id="example23_next"
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pushnotification;
