import React, { useState, useEffect } from 'react';
import { fetchExpense, pdfDownload } from '../../../url';
import jwt_decode from 'jwt-decode';
import './trackerview.css';
import ReactToExcel from 'react-html-table-to-excel';
const TrackerView = (props) => {
  const decode = jwt_decode(sessionStorage.team);
  const name = decode.name;
  const email = decode.email;
  let tracker = props.match.path;
  tracker = tracker.split('/');
  const { month } = props.match.params;
  const [data, setData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    fetchApiData();
  }, []);
  // Fetching API
  const fetchApiData = async () => {
    let data = {};
    data.email = email;
    data.tracker = tracker[1];
    data.month = month;
    let result = await fetchExpense(data);
    if (result) {
      setData(result);
      calculateTotalAmount(result);
    }
  };
  // calculating the total amount of expense/income
  const calculateTotalAmount = (result) => {
    let amount = 0;
    for (let i = 0, n = result.length; i < n; i++) {
      amount += result[i].amount;
    }
    setTotalAmount(amount);
  };

  const jumboStyle = {
    width: '50%',
  };
  const tableStyle = {
    width: '30%',
  };
  // PDF
  const printDocument = async (e) => {
    e.preventDefault();
    let postData = {};
    postData.email = email;
    postData.month = month;
    postData.tracker = tracker[1];
    pdfDownload(postData);
  };

  const tableData = data.length ? (
    data.map((item, index) => (
      <tr key={item._id}>
        <th scope="row">{index + 1}</th>
        <td>{item.tracker}</td>
        <td>{item.description}</td>
        <td>{item.amount}</td>
      </tr>
    ))
  ) : (
    <React.Fragment>
      <tr>
        <td colSpan={4}>Loading...</td>
      </tr>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <div id="print">
        <div
          className="jumbotron jumbotron-fluid mt-4 mx-auto"
          style={jumboStyle}
        >
          <div className="container">
            <h3 className="display-4 text-center">Hi {name}</h3>
            <p className="text-dark text-center mt-2">
              Your {tracker[1]} expenses for month {month}
            </p>
            <button className="btn btn-danger" onClick={printDocument}>
              Download as PDF
            </button>
            <br />
            <ReactToExcel
              table="tablexls"
              className="btn btn-success mt-3"
              filename="Expense-tracker"
              sheet="sheet1"
              buttonText="Download as Excel"
            ></ReactToExcel>
            <h5 className="mt-4">
              Your total amount {tracker[1]} - ₹{totalAmount}
            </h5>
          </div>
        </div>

        <table
          className="table table-hover table-responsive mx-auto"
          style={tableStyle}
          id="tablexls"
        >
          <thead className="thead bg-primary">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bussiness</th>
              <th scope="col">Description</th>
              <th scope="col">Amount</th>
            </tr>
          </thead>
          <tbody>{tableData}</tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default TrackerView;
