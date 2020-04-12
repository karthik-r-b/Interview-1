import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './view.css';
import { addExpense } from '../../../url';
import jwt_decode from 'jwt-decode';
import { useAlert } from 'react-alert';

const View = () => {
  const alert = useAlert();
  const history = useHistory();
  const style = {
    width: '100%',
    height: '100vh',
  };
  const [selectdata, setData] = useState([]);
  const [radioData, setradioData] = useState(false);
  const handleSelect = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setData({ ...selectdata, [name]: value });
  };
  const handleChange = (e) => {
    if (!radioData) {
      setradioData(true);
    } else {
      setradioData(false);
    }
  };

  const handleClick = (e) => {
    e.preventDefault();
    const decode = jwt_decode(sessionStorage.team);
    selectdata.email = decode.email;
    selectdata.name = decode.name;
    selectdata.type = 'add';
    if (radioData) {
      selectdata.type = 'view';
      validation(selectdata) && fetchApi(selectdata);
    } else {
      validation(selectdata) && fetchApi(selectdata);
    }
  };

  // validation
  const validation = (selectdata) => {
    const errors = {};
    if (!selectdata.tracker || selectdata.tracker === '') {
      errors.tracker = 'Please select the tracker';
      alert.error(errors.tracker);
      return false;
    } else if (!selectdata.month || selectdata.month === '') {
      errors.month = 'Please select the month';
      alert.error(errors.month);
      return false;
    }
    if (selectdata.type === 'add') {
      if (!selectdata.description) {
        errors.description = 'Please enter the description';
        alert.error(errors.description);
        return false;
      }
      if (!selectdata.amount) {
        errors.amount = 'Please enter the valid amount';
        alert.error(errors.amount);
        return false;
      }
    }
    return true;
  };

  // API's requests

  const fetchApi = async (data) => {
    if (data.type === 'add') {
      let result = await addExpense(data);
      if (result.success) {
        alert.success(result.message);
        setData({
          tracker: '',
          month: '',
          description: '',
          amount: '',
        });
      } else {
        alert.error(result.message);
      }
    } else {
      history.push('/' + data.tracker + '/' + data.month);
      setData({
        tracker: '',
        month: '',
      });
    }
  };

  return (
    <div className="container-fluid" style={style}>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-6 col-md-3">
          <h3 className="mt-3 mr-3">Expense Tracker</h3>
          <form className="form-container mt-3" autoComplete="off">
            <React.Fragment>
              <span className="text-success font-weight-bold">Add</span>
              <label className="switch">
                <input type="checkbox" name="type" onChange={handleChange} />
                <span className="slider round"></span>
              </label>
              <span className="inline text-primary font-weight-bold">View</span>
            </React.Fragment>
            <div className="form-group">
              <label htmlFor="type">Select the tracker</label>
              <select
                name="tracker"
                className="form-control"
                id="tracker"
                onChange={handleSelect}
                value={selectdata.tracker || ''}
              >
                <option defaultValue="">Select the tracker</option>
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
                value={selectdata.month || ''}
              >
                <option defaultValue="">Select the month</option>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
              </select>
            </div>
            {!radioData ? (
              <React.Fragment>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    id="description"
                    onChange={handleSelect}
                    value={selectdata.description || ''}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="amount">Amount ₹</label>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    id="amount"
                    onChange={handleSelect}
                    value={selectdata.amount || ''}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn-success mt-2 ml-5"
                  onClick={handleClick}
                >
                  Add Expense
                </button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <button
                  type="submit"
                  className="btn btn-info mt-2 ml-5"
                  onClick={handleClick}
                >
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
