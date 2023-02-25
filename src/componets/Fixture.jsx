import react from "react";

const Fixture = (props) => {
    return (
        <td className = "fixture">
            <h5>{props.date}</h5>
            <h5>{props.homeTeam} V {props.awayTeam}</h5>
            <h6>{props.stadium} {props.time}</h6>
         </td>
    )
}
export default Fixture;