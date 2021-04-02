import React from "react";

function ResultList(props) {
  return (
    <table className = "table">
      {props.result.map(result=>(
         <table style="width:100%">
         <tr>
           <th>Firstname</th>
           <th>Lastname</th>
           <th>accupation</th>
         </tr>
         <tr>
           <td>daniel</td >
           <td>mestawat</td>
           <td>Fullstack web developer</td>
         </tr>
       </table>
      
     ))}
     
    </table>
  );
}

export default ResultList;
