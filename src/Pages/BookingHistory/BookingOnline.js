import React from "react";
// import "./bookingstyle.css";
import Navbar from "../../Components/Navbar";

const BookingOnline = () => {
  return (
    <>
    <Navbar/>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <h4 className="card-title  float-left">Online Booking History</h4>
                </div>
                <div
                  className="col"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <button
                    type="button"
                    className="btn btn-primary btn-sm float-right"
                    data-toggle="modal"
                    data-target="#add-conducteur"
                  >
                    <i className="fa fa-plus m-r-10"></i>Add History
                  </button>
                </div>
              </div>
              <div
                className="table-responsive m-t-10"
                style={{ height: "500px" }}
              >
                <div
                  id="example24_wrapper"
                  className="dataTables_wrapper no-footer"
                >
                  <div className="top">
                    <div className="dt-buttons">
                      <buttons
                        className="dt-button buttons-csv buttons-html5"
                        tabindex="0"
                        aria-controls="example24"
                        href="#"
                      >
                        <span>CSV</span>
                      </buttons>
                      <buttons
                        className="dt-button buttons-excel buttons-html5"
                        tabindex="0"
                        aria-controls="example24"
                        href="#"
                      >
                        <span>Excel</span>
                      </buttons>
                      <buttons
                        className="dt-button buttons-pdf buttons-html5"
                        tabindex="0"
                        aria-controls="example24"
                        href="#"
                      >
                        <span>PDF</span>
                      </buttons>
                      <buttons
                        className="dt-button buttons-print"
                        tabindex="0"
                        aria-controls="example24"
                        href="#"
                      >
                        <span>Print</span>
                      </buttons>
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="dataTables_length" id="example24_length">
                      <label>
                        Show{" "}
                        <select
                          name="example24_length"
                          aria-controls="example24"
                          className=""
                        >
                          <option value="10">10 rows</option>
                          <option value="25">25 rows</option>
                          <option value="50">50 rows</option>
                          <option value="-1">Show all</option>
                        </select>{" "}
                        entries
                      </label>
                    </div>
                    <div id="example24_filter" className="dataTables_filter">
                      <label>
                        Search:
                        <input
                          type="search"
                          className=""
                          placeholder=""
                          aria-controls="example24"
                        />
                      </label>
                    </div>
                    <table
                      id="example24"
                      class="display nowrap table table-hover table-striped table-bordered dataTable no-footer"
                      cellspacing="0"
                      role="grid"
                      aria-describedby="example24_info"
                    >
                      <thead>
                        <tr role="row">
                          <th
                            class="sorting_asc"
                            tabindex="0"
                            aria-controls="example24"
                            rowspan="1"
                            colspan="1"
                            aria-label=" Sl.No.: activate to sort column descending"
                            // style={{width: "100%"}}
                            aria-sort="ascending"
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
                            aria-label=" Date: activate to sort column ascending"
                            style={{width: "100%"}}
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
                            aria-label="Status: activate to sort column ascending"
                            style={{width: "100%"}}
                          >
                            Status
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="example24"
                            rowspan="1"
                            colspan="1"
                            aria-label="Customer Name: activate to sort column ascending"
                            style={{width: "100%"}}
                          >
                            Customer Name
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="example24"
                            rowspan="1"
                            colspan="1"
                            aria-label="Driver Name: activate to sort column ascending"
                            style={{width: "100%"}}
                          >
                            Driver Name
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="example24"
                            rowspan="1"
                            colspan="1"
                            aria-label="Truck Type: activate to sort column ascending"
                            style={{width: "100%"}}
                          >
                            Truck Type
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="example24"
                            rowspan="1"
                            colspan="1"
                            aria-label="PickUp Location: activate to sort column ascending"
                            style={{width: "100%"}}
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
                            style={{width: "100%"}}
                          >
                            Drop Location
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="example24"
                            rowspan="1"
                            colspan="1"
                            aria-label="Distance: activate to sort column ascending"
                            style={{width: "100%"}}
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
                            style={{width: "100%"}}
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
                            style={{width: "100%"}}
                          >
                            Total Amount
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="example24"
                            rowspan="1"
                            colspan="1"
                            aria-label="Driver Share: activate to sort column ascending"
                            style={{width: "118px"}}
                          >
                            Driver Share
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="example24"
                            rowspan="1"
                            colspan="1"
                            aria-label="Company Share: activate to sort column ascending"
                            style={{width: "151px"}}
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
                            style={{width: "151px"}}
                          >
                            Total Discount
                          </th>
                          <th
                            class="sorting"
                            tabindex="0"
                            aria-controls="example24"
                            rowspan="1"
                            colspan="1"
                            aria-label="Cancel Region: activate to sort column ascending"
                            style={{width: "151px"}}
                          >
                            Cancel Region
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr role="row" class="odd">
                          <td class="sorting_1">1</td>
                          <td>2023-07-24 18:30:03</td>
                          <td>canceled</td>
                          <td>Soumya Ranjan Masant</td>
                          <td>Sekh Tabrej</td>
                          <td>Auto</td>
                          <td>
                            4220, near Pallavi Mandop, Niladri Nagar, Jharapada,
                            Bhubaneswar, Odisha 751006, India
                          </td>
                          <td class="">
                            4220, near Pallavi Mandop, Niladri Nagar, Jharapada,
                            Bhubaneswar, Odisha 751006, India
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td>359</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>
                            My reason is not listed(open a text box to write
                            reason)
                          </td>
                        </tr>
                        <tr role="row" class="even">
                          <td class="sorting_1">2</td>
                          <td>2023-07-18 17:21:50</td>
                          <td>paid</td>
                          <td>debadatta padhan</td>
                          <td>PRINCE KUMAR</td>
                          <td>Mini Truck</td>
                          <td>
                            8RF9+9RC, Nandankanan Rd, Near Axis Bank Branch,
                            District Center, Chandrasekharpur, Bhubaneswar, Odi
                          </td>
                          <td class="">Khandagiri</td>
                          <td>11.4</td>
                          <td>21.32 mins</td>
                          <td>845</td>
                          <td>735</td>
                          <td>110</td>
                          <td>8</td>
                          <td></td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="sorting_1">3</td>
                          <td>2023-07-17 10:47:53</td>
                          <td>canceled</td>
                          <td>Sanjeeb Goswami</td>
                          <td>Sekh Tabrej</td>
                          <td>Auto</td>
                          <td>D.A.V. PUBLIC SCHOOL</td>
                          <td class="">
                            Nayara Petrol Pump - Maa Bhagabati Filling Station
                          </td>
                          <td>9.3</td>
                          <td>20.22</td>
                          <td>593</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>Unable to Contact Customer</td>
                        </tr>
                        <tr role="row" class="even">
                          <td class="sorting_1">4</td>
                          <td>2023-04-07 14:38:03</td>
                          <td>canceled</td>
                          <td>debadatta padhan</td>
                          <td>S DAS</td>
                          <td>Auto</td>
                          <td>
                            8RF9+CQ3, District Center, Chandrasekharpur,
                            Bhubaneswar, Odisha 751016, India
                          </td>
                          <td class="">Patia</td>
                          <td>3.5</td>
                          <td>9.55</td>
                          <td>453</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>Driver denied to go to destination</td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="sorting_1">5</td>
                          <td>2023-04-04 10:01:51</td>
                          <td>paid</td>
                          <td>Biswajit Kalo</td>
                          <td>S DAS</td>
                          <td>Auto</td>
                          <td>
                            8RF9+9RC, Nandankanan Rd, Near Axis Bank Branch,
                            District Center, Chandrasekharpur, Bhubaneswar, Odi
                          </td>
                          <td class="">Patia</td>
                          <td>3.5</td>
                          <td>9.23 mins</td>
                          <td>475</td>
                          <td>413</td>
                          <td>62</td>
                          <td>5</td>
                          <td></td>
                        </tr>
                        <tr role="row" class="even">
                          <td class="sorting_1">6</td>
                          <td>2023-03-16 13:54:54</td>
                          <td>canceled</td>
                          <td>Dhiren Maharana</td>
                          <td>Ashwin kumar Mangaraj</td>
                          <td>Mini Truck</td>
                          <td>Delta Square</td>
                          <td class="">Assotech Pride</td>
                          <td>13.8</td>
                          <td>24.72</td>
                          <td>636</td>
                          <td>0</td>
                          <td>0</td>
                          <td>0</td>
                          <td>ଗ୍ରାହକ ପିକଅପ୍ ଅବସ୍ଥାନ ଭୁଲ୍ ଥିଲା</td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="sorting_1">7</td>
                          <td>2023-03-14 16:59:33</td>
                          <td>paid</td>
                          <td>Priyaranjan Behera</td>
                          <td>Sunanda Behera</td>
                          <td>Auto</td>
                          <td>
                            8RJC+4JG, Chandrasekharpur, Bhubaneswar, Odisha
                            751017, India
                          </td>
                          <td class="">Raghunathpur</td>
                          <td>7</td>
                          <td>15.62 mins</td>
                          <td>343</td>
                          <td>298</td>
                          <td>45</td>
                          <td>3</td>
                          <td></td>
                        </tr>
                        <tr role="row" class="even">
                          <td class="sorting_1">8</td>
                          <td>2023-03-11 12:21:45</td>
                          <td>paid</td>
                          <td>Sandeep Sabat</td>
                          <td>Ranjan Behera</td>
                          <td>Mini Truck</td>
                          <td>Kalinga studio square</td>
                          <td class="">Patia</td>
                          <td>11.6</td>
                          <td>27.38 mins</td>
                          <td>559</td>
                          <td>486</td>
                          <td>73</td>
                          <td>6</td>
                          <td></td>
                        </tr>
                        <tr role="row" class="odd">
                          <td class="sorting_1">9</td>
                          <td>2023-03-11 10:32:34</td>
                          <td>paid</td>
                          <td>Sandeep Sabat</td>
                          <td>Niranjan Nayak Muna</td>
                          <td>Mini Truck</td>
                          <td>
                            7Q5R+CC6, Jagamara, Bhubaneswar, Odisha 751030,
                            India
                          </td>
                          <td class="">Khordha</td>
                          <td>20.6</td>
                          <td>35.37 mins</td>
                          <td>749</td>
                          <td>651</td>
                          <td>98</td>
                          <td>7</td>
                          <td></td>
                        </tr>
                        <tr role="row" class="even">
                          <td class="sorting_1">10</td>
                          <td>2023-03-11 09:48:51</td>
                          <td>paid</td>
                          <td>Sandeep Sabat</td>
                          <td>Sambhunath Bisoi</td>
                          <td>Mini Truck</td>
                          <td>
                            367P, Khandagiri Marg, Amrit Nagar, Jagamara,
                            Bhubaneswar, Odisha 751030, India
                          </td>
                          <td class="">CRPF Square</td>
                          <td>9.9</td>
                          <td>15.7 mins</td>
                          <td>527</td>
                          <td>458</td>
                          <td>69</td>
                          <td>5</td>
                          <td></td>
                        </tr>
                      </tbody>
                    </table>
                    <div
                      className="dataTables_info"
                      id="example24_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing 1 to 10 of 78 entries
                    </div>
                    <div
                      className="dataTables_paginate paging_simple_numbers"
                      id="example24_paginate"
                    >
                      <a
                        className="paginate_button previous disabled"
                        aria-controls="example24"
                        data-dt-idx="0"
                        tabindex="0"
                        id="example24_previous"
                      >
                        Previous
                      </a>
                      <span>
                        <a
                          className="paginate_button current"
                          aria-controls="example24"
                          data-dt-idx="1"
                          tabindex="0"
                        >
                          1
                        </a>
                        <a
                          className="paginate_button "
                          aria-controls="example24"
                          data-dt-idx="2"
                          tabindex="0"
                        >
                          2
                        </a>
                        <a
                          className="paginate_button "
                          aria-controls="example24"
                          data-dt-idx="3"
                          tabindex="0"
                        >
                          3
                        </a>
                        <a
                          className="paginate_button "
                          aria-controls="example24"
                          data-dt-idx="4"
                          tabindex="0"
                        >
                          4
                        </a>
                        <a
                          className="paginate_button "
                          aria-controls="example24"
                          data-dt-idx="5"
                          tabindex="0"
                        >
                          5
                        </a>
                        <span className="ellipsis">…</span>
                        <a
                          className="paginate_button "
                          aria-controls="example24"
                          data-dt-idx="6"
                          tabindex="0"
                        >
                          8
                        </a>
                      </span>
                      <a
                        className="paginate_button next"
                        aria-controls="example24"
                        data-dt-idx="7"
                        tabindex="0"
                        id="example24_next"
                      >
                        Next
                      </a>
                    </div>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        
      </div>
    </>
  );
};

export default BookingOnline;
