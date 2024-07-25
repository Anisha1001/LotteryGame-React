import {useState} from "react";
import "./lottery.css";
import {genRanTicket,sum} from "./helper";
import Ticket from "./Ticket"
export default function Lottery({n,winCondition}){
    let [ticket,setTicket]=useState(genRanTicket(n));
    let isWinning=winCondition(ticket);
    let buyTicket=()=>{
        setTicket(genRanTicket(n));
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
           <br></br>
            <button onClick={buyTicket}>Buy New Ticket</button>
            <h3>{isWinning && "Congratulations, you won"}</h3>
        </div>
    )
}