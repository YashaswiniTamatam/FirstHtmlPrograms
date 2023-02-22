import "./Html&css1.css";
import "./first";

function Html1() {
  return (
    <div className="body">
      <form>
        <table style={{marginLeft: '50px'}}>
          <thead>
            <tr>
              <th colSpan="2">
                <h2 style={{textAlign: 'center', color: 'white'}}>
                  <b>Form</b>
                </h2>
              </th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{textAlign:'center', color:'white'}} 
    
              >
                <label htmlFor="firstname">Enter Name:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="firstname"
                  style={{width:'214px', marginLeft: '18px'}}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{textAlign:'center', color:'white'}}
              >
                <label htmlFor="password">Enter Password:</label>
              </td>
              <td>
                <input
                  type="text"
                  id="password"
                  style={{width:'214px', marginLeft:'18px', marginRight:'18px'}}
                />
              </td>
            </tr>
            <tr>
              <td
                style={{textAlign:'center', color:'white'}}
              >
                <label htmlFor="address">Enter Address:</label>
              </td>
              <td>
                <textarea
                  type="text"
                  cols="25"
                  rows="5"
                  style={{marginleft:'18px'}} 
                ></textarea>
              </td>
            </tr>
            <tr>
              <td
                style={{textAlign: 'center', color:'white'}} 
              >
                <label htmlFor="game">Select Game:</label>
              </td>
              <td
                style={{marginleft: '18px', color:'white'}} 
              >
                <input type="checkbox" style={{marginleft: '18px'}}/>
                <label htmlFor="hockey">Hockey</label>
                <br/>
                <input type="checkbox" style={{marginleft:'18px'}} />
                <label htmlFor="cricket">Cricket</label>
                <br/>
                <input type="checkbox" style={{marginleft:'18px'}} />
                <label htmlFor="football">Football</label>
                <br/>
                <input type="checkbox" style={{marginleft:'18px'}}/>
                <label>Tennis</label>
                <br/>
              </td>
            </tr>
            <tr>
              <td
                style={{textAlign:'center', color:'white'}}
              >
                <label htmlFor="gender">Gender:</label>
              </td>
              <td style={{color:'white'}}>
                <input type="radio" style={{marginleft:'18px'}}/>
                <label htmlFor="male">Male</label>
                <input type="radio" style={{marginleft:'18px'}}/>
                <label htmlFor="female">Female</label>
              </td>
            </tr>
            <tr>
              <td
                style={{textAlign:'center', color:'white'}}
              >
                <label htmlFor="select">Select Your Age:</label>
              </td>
              <td>
                <select
                  name=" Age"
                  style={{marginleft: '18px', color:'white'}}
                >
                  <option value="select">Select:</option>
                </select>
              </td>
            </tr>
            <tr
              style={{textAlign:'center', color:'white'}}

            >
              <td colSpan="2">
                <input
                  type="File"
                  name="Myfile"
                  id="Myfile"
                  style={{marginleft:'18px'}}
                />
              </td>
              <td>&nbsp;</td>
            </tr>
            <tr
              style={{textAlign:'center', color:'white'}}
            >
              <td colSpan="3">
                <input type="button" value="Click Me" /><br/>
                <input type="reset" value="Reset" /><br/>
                <button type="btn"><a href="first.js"></a>Submit</button>
                
              </td>
              <td>&nbsp;</td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}
export default Html1;
