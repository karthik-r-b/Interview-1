module.exports = ({ tracker, month }, items) => {
  var totalAmount = 0;
  for (var i = 0; i < items.length; i++) {
    totalAmount += items[i].amount;
  }
  return `
  <!doctype html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                        <title>PDF</title>
                        <link
                rel="stylesheet"
                href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
                integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
                crossorigin="anonymous"
                />
                    </head>
                    <body>               
            <script>
        const id = document.getElementById("body-table");
        function table(items){
            for(let i=0;i<items.length;i++){
                let tableRow = document.createElement('tr');
                let tableHeader = document.createElement('th);
                let listItem1 = document.createElement('td');
                 let listItem2 = document.createElement('td');
                 let listItem3 = document.createElement('td');
                 tableHeader.classList.add('tableHeader');
                 listItem1.classList.add('listItem1');
                 listItem2.classList.add('listItem2');
                 listItem3.classList.add('listItem3');
                 tableHeader.innerHTML = parseInt(i+1);
                 listItem1.innerHTML=item[i].tracker;
                 listItem2.innerHTML=item[i].description;
                 listItem3.innerHTML=item[i].amount;
                 tableRow.appendChild(tableHeader);
                 tableRow.appendChild(listItem1);
                  tableRow.appendChild(listItem2);
                   tableRow.appendChild(listItem3);

                    id.appendChild(tableRow);
                }
            </script>
                        <div id="print">
                        <div
          className="jumbotron jumbotron-fluid mt-4 mx-auto"
          style={jumboStyle}
        >
          <div className="container">
            <h3 className="display-4 text-center">Hi ${items[0].name}</h3>
            <p className="text-dark text-center mt-2">
              Your ${tracker} expenses for month ${month}
            </p>
          </div>
        </div>

        <table
          className="table table-hover table-responsive mx-auto"
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
          <tbody id="body-table"></tbody>
        </table>
        <div className="card mt-5 mx-auto total-expense">
          <div className="card-body">
            <p className="text-secondary text-center">
              Your Total Amount is <strong>₹${totalAmount}</strong>
            </p>
          </div>
        </div>
                       </div>
                    </body>
                    </html>
                    `;
};
