import react from "react";
import Fixture from "./Fixture";
import Lcfc from "../images/LCFCVAR.jpeg"
import Everton from "../images/Everton.jpeg"
import Sporting from "../images/Sporting.jpeg"
const Box = (props) => {
    return (
        <table className = "Boxs">
        <thead>
            <tr>
            <td>
                 <img src = {Lcfc} />
                 <div className = "info">
                    <td><Fixture date = "Feb/25" homeTeam = "Leicester City" awayTeam = "Arsenal" stadium = "King Power Stadium" time = "10:00AM"/></td>
                </div>
            </td>
            <td>
                <img src = {Everton} />
                <div className="info">
                    <td><Fixture date = "March/1" homeTeam = "Arsenal" awayTeam = "Everton" stadium = "Emirates Stadium" time = "11:30AM"/></td>
                </div>
            </td>
            <td>
               <img src = {Sporting} />
                <div className = "info">
                    <td><Fixture date = "March/9" homeTeam = "Sporting Lisbon" awayTeam = "Arsenal" stadium = "Estádio José Alvalade" time = "12:45PM"/></td>
                </div>
            </td>
            </tr>
        </thead>
        </table>
    )
}

export default Box;