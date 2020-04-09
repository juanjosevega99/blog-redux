import React from 'react';

const App = () => {

  const ponerFilas = () => [
    <tr>
      <td>
        Juan
      </td>
      <td>
        juanjosevegaq@gmail.com
      </td>
      <td>
        Juan.com
      </td>
    </tr>,
    <tr>
      <td>
        Ana
      </td>
      <td>
        ana@gmail.com
      </td>
      <td>
        Ana.com
      </td>
    </tr>
  ];

  return (
    <div className="margin">
      <table className="table">
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Email
            </th>
            <th>
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          { ponerFilas() }
        </tbody>
      </table>
    </div>
  )
}

export default App;
