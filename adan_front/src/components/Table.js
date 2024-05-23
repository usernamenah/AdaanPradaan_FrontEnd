import React from "react";
  
function Table(){
    return(
         <div className="container py-5">
    <button onClick={showList()}>Show List</button>
    <table className="table table-bordered" style={{border: "2px soild black"}}>
      <thead className="table-dark">
        <tr>
          <th>
            Name
          </th>
          <th>
            Address
          </th>
          <th>
            Salary
          </th>

          <th>Date of Joining</th>

        </tr>
      </thead>
      <tbody id="table_body">
        <tr>

        </tr>
      </tbody>
    </table>
    <h3 id="salh">

    </h3>
    <ul id="sal">

    </ul>
    <h3 id="joinh">

    </h3>
    <ul id="join">

    </ul>

  </div>
    )
    function showList() {
        fetch("\sample.json")
          .then((data) => { return data.json(); })
          .then(ObjectData => {
            console.log(ObjectData);
            let tableData = "";
            ObjectData.map((values) => {
              tableData += `<tr>
      <td>${values.id}</td>
      <td>${values.name}</td>
      <td>${values.lati}</td>
      <td>${values.lon}</td>
      </tr>`;
            });
            document.getElementById("table_body").innerHTML = tableData;
           
          
          })
  
      }
}
export default Table;
