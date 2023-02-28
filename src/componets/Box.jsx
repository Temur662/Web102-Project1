import react from "react";
import Fixture from "./Fixture";
import Lcfc from "../images/LCFCVAR.jpeg"
import Everton from "../images/ArsenalVEverton.jpeg"
import Sporting from "../images/Sporting.jpeg"
import AFCB from "../images/AFCB.jpeg"
import Fulham from "../images/Fulham.jpeg"
import CPFC from "../images/CPFC.jpeg"
import LUFC from "../images/LUFC.jpeg"
import LFC from "../images/LFC.jpeg"
const Box = () =>{
    return (
        <table className = "Boxs">
        <thead>
            <tr>
            <td>
                <img src = {Lcfc} />
                 <div className = "info">
                    <td><Fixture link = "https://www.arsenal.com/fixture/arsenal/2023-Feb-25/leicester-city-0-1-arsenal-match-report" date = "Feb/25" homeTeam = "Leicester City" awayTeam = "Arsenal" stadium = "King Power Stadium" time = "10:00AM"/></td>
                </div>
            </td>
            <td>
                <img src = {Everton} />
                <div className="info">
                    <td><Fixture link = "https://www.premierleague.com/match/74971" date = "March/1" homeTeam = "Arsenal" awayTeam = "Everton" stadium = "Emirates Stadium" time = "2:45PM"/></td>
                </div>
            </td>
            <td>
                <img src = {AFCB} />
                <div className = "info">
                    <td><Fixture link = "https://www.premierleague.com/match/75161" date = "March/4" homeTeam = "Arsenal" awayTeam = "AFC Bournmouth" stadium = "Emirates Stadium" time = "10:00AM"/></td>
                </div>
            </td>
            </tr>
        </thead>
        <tbody>
            <tr>
            <td>
            <img src = {Sporting} />
                <div className = "info">
                    <td><Fixture link = "https://www.arsenal.com/news/sporting-cp-drawn-europa-league-last-16" date = "March/9" homeTeam = "Sporting Lisbon" awayTeam = "Arsenal" stadium = "Estádio José Alvalade" time = "12:45PM"/></td>
                </div>
            </td>
            <td>
                <img src = {Fulham} />
                <div className = "info">
                <td><Fixture link = "https://allnews.ng/news/fulham-vs-arsenal-preview-team-news-kick-off-time-where-to-watch-epl-match-live" date = "March/12" time = "10:00AM" homeTeam = "Fulham" awayTeam = "Arsenal" stadium = "Craven Cottage"/></td>
                </div>
            </td>
            <td>
                <img src = {Sporting}/>
                <div className = "info">
                    <td><Fixture link = "https://www.bbc.com/sport/articles/c4nqr1q1vq9o" date = "March/16" time = "4:00PM" homeTeam = "Arsenal" awayTeam = "Sporting Lisobon" stadium = "Emirates Stadium"/></td>
                </div>
            </td>
            </tr>
            <tr>
                <td>
                    <img src = {CPFC} />
                    <div className = "info">
                        <td><Fixture link = "https://www.espn.com/soccer/match/_/gameId/638089" date = "March/19" time = "10:00AM" homeTeam = "Arsenal" awayTeam = "Crystal Palace" stadium = "Emirates Stadium"/></td>
                    </div>
                </td>
                <td>
                    <img src = {LUFC} />
                    <div className = "info">
                        <td><Fixture link = "https://www.sofascore.com/arsenal-leeds-united/JsR" date = "April/1" time = "10:00AM" homeTeam = "Arsenal" awayTeam = "Leeds United" stadium = "Emirates Stadium"/></td>
                    </div>
                </td>
                <td>
                    <img src = {LFC} />
                    <div className="info">
                        <td><Fixture link = "https://www.sofascore.com/liverpool-arsenal/HQfh" date = "April/9" time = "11:30AM" homeTeam = "Liverpool" awayTeam = "Arsenal" stadium = "Anfield"/></td>
                    </div>
                </td>
            </tr>
        </tbody>
        </table>
    )
}

export default Box;