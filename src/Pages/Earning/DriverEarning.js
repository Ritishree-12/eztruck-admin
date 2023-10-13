import React from "react";
import "./estyle.css";

const DriverEarning = () => {
  return (
    <>
      {/* <div className="row page-titles">
        <div className="col-md-5 align-self-center">
          <h3 className="text-themecolor">Driver status</h3>
        </div>
        <div className="col-md-7 align-self-center">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.php">Home</a>
            </li>
            <li className="breadcrumb-item">Statistics</li>
            <li className="breadcrumb-item active">Driver stats</li>
          </ol>
        </div>
        <div>
          <button className="right-side-toggle waves-effect waves-light btn-inverse btn btn-circle btn-sm pull-right m-l-10">
            <i className="ti-settings text-white"></i>
          </button>
        </div>
      </div> */}
      {/* -------------------------------------form-------------------------------------------- */}
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12">
            <div class="card">
              <div class="card-body">
                <div class="row">
                  <div class="col-md-4">
                    <div class="form-group mb-3">
                      <label class="mr-sm-2" for="designation">
                        Driver
                      </label>
                      <select
                        class="form-control select2-hidden-accessible"
                        id="driver"
                        name="driver"
                        required=""
                        data-select2-id="driver"
                        tabindex="-1"
                        aria-hidden="true"
                      ></select>
                    </div>
                  </div>
                  <div class="col-md-4">
                    <div class="form-group mb-3">
                      <label class="mr-sm-2" for="designation">
                        Month
                      </label>
                      <select
                        class="form-control select2-hidden-accessible"
                        id="month"
                        name="month"
                        required=""
                        data-select2-id="month"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="01" data-select2-id="4">
                          January
                        </option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="3"
                        // style="width: 702px;"
                      >
                        <span class="selection">
                          <span
                            class="select2-selection select2-selection--single"
                            role="combobox"
                            aria-haspopup="true"
                            aria-expanded="false"
                            tabindex="0"
                            aria-disabled="false"
                            aria-labelledby="select2-month-container"
                          >
                            <span
                              class="select2-selection__rendered"
                              id="select2-month-container"
                              role="textbox"
                              aria-readonly="true"
                              title="January"
                            >
                              January
                            </span>
                            <span
                              class="select2-selection__arrow"
                              role="presentation"
                            >
                              <b role="presentation"></b>
                            </span>
                          </span>
                        </span>
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="form-group mb-3">
                      <label class="mr-sm-2" for="designation">
                        Year
                      </label>
                      <select
                        class="form-control select2-hidden-accessible"
                        id="year"
                        name="year"
                        required=""
                        data-select2-id="year"
                        tabindex="-1"
                        aria-hidden="true"
                      >
                        <option value="2019" data-select2-id="6">
                          2019
                        </option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                        <option value="2025">2025</option>
                      </select>
                      <span
                        class="select2 select2-container select2-container--default"
                        dir="ltr"
                        data-select2-id="5"
                        // style="width: 519px;"
                      >
                        <span
                          class="dropdown-wrapper"
                          aria-hidden="true"
                        ></span>
                      </span>
                    </div>
                  </div>
                  <div class="col-md-1 m-t-30">
                    <button
                      type="submit"
                      class="btn btn-dark waves-effect"
                      // style="height:37px;"
                      onclick="apply(driver.value,month.value,year.value)"
                    >
                      APPLY
                    </button>
                  </div>
                </div>
              </div>
            </div>
           {/* -------------------------------------------------------------------------------------- */}
          </div>
        </div>
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Driver stats (₹)</h4>
                  <div class="row">
                    <div class="col-md-5"></div>
                    <div class="col-md-2">
                      <div
                        class="loader"
                        id="loader"
                        //  style="display: none;"
                      ></div>
                    </div>
                    <div class="col-md-5"></div>
                  </div>
                  <div id="chart">
                    {/* <canvas
                      id="chart2"
                      height="1388"
                      width="100%"
                    ></canvas> */}
                  </div>
                </div>
              </div>
            </div>
      </div>
    </>
  );
};

export default DriverEarning;
