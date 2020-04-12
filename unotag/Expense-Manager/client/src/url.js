import axios from 'axios';
import { saveAs } from 'file-saver';
// Rest API server

export const signupAuth = async (data) => {
  const url = 'http://localhost:8000/api/signup';
  let result = '';
  try {
    result = await axios({
      method: 'POST',
      url,
      data,
    });
  } catch (error) {
    console.log(error);
  }
  return result.data;
};

export const loginAuth = async (data) => {
  const url = 'http://localhost:8000/api/login';
  let result = '';
  try {
    result = await axios({
      method: 'POST',
      url,
      data,
    });
  } catch (error) {
    console.log(error);
  }
  return result.data;
};

export const addExpense = async (data) => {
  const url = 'http://localhost:8000/api/addexpense';
  let result = '';
  try {
    result = await axios({
      method: 'POST',
      url,
      data,
    });
  } catch (error) {
    console.log(error);
  }
  return result.data;
};

export const fetchExpense = async (data) => {
  const url = 'http://localhost:8000/api/getexpense';
  let result = '';
  try {
    result = await axios({
      method: 'POST',
      url,
      data,
    });
  } catch (error) {
    console.log(error);
  }
  return result.data;
};

export const pdfDownload = (data) => {
  const url = 'http://localhost:8000/api/createPdf';
  const url1 = 'http://localhost:8000/api/getPdf';
  axios
    .post(url, data)
    .then(() => axios.get(url1, { responseType: 'blob' }))
    .then((res) => {
      const pdfBlob = new Blob([res.data], { type: 'application/pdf' });

      saveAs(pdfBlob, '' + data.tracker + '.pdf');
    });
};
