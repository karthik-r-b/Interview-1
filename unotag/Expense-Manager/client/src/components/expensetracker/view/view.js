import React, { useState } from 'react';
import './view.css';

const View = () => {
  const style = {
    width: '100%',
    height: '100vh',
  };
  const [selectdata, setData] = useState([]);
  const [radioData, setradioData] = useState([]);
  const handleSelect = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setData({ ...selectdata, [name]: value });
  };
  const handleChange = (e) => {
    const { value, name } = e.target;
    setradioData({ ...radioData, [name]: value });
  };
  const type = radioData.type === 'add' && (
    <React.Fragment>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          type="text"
          className="form-control"
          name="description"
          id="description"
        />
      </div>
      <div className="form-group">
        <label htmlFor="amount">Amount ₹</label>
        <input
          type="number"
          className="form-control"
          name="amount"
          id="amount"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-2 ml-5">
        Add Expense
      </button>
    </React.Fragment>
  );

  return (
    <div className="container-fluid" style={style}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-3">
          <h3 className="mt-3 mr-3">Expense Tracker</h3>
          <form className="form-container mt-3">
            <div className="form-group">
              <label htmlFor="type">Select the tracker</label>
              <select
                name="tracker"
                className="form-control"
                id="tracker"
                onChange={handleSelect}
              >
                <option defaultValue="0">Select the tracker</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="month">Month</label>
              <select
                name="month"
                className="form-control"
                id="month"
                onChange={handleSelect}
              >
                <option defaultValue="0">Select the month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <br />
            <div
              className="form-check form-check-inline"
              onChange={handleChange}
            >
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="type"
                value="add"
              />
              <label className="form-check-label" htmlFor="inlineRadio1">
                Add Expense
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="type"
                id="type"
                value="view"
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                View Expense
              </label>
            </div>
            <br />
            <br />
            {radioData.length ? (
              { type }
            ) : (
              <React.Fragment>
                <button type="submit" className="btn btn-info mt-2 ml-5">
                  View Expense
                </button>
              </React.Fragment>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default View;
