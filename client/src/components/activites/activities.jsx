import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllActivity} from"../redux/actions"
import style from"./activities.module.css"
import convertUppercase from"../utils/convertUppercase";
import difficultyConvert from"./difficultyConvert"


const Activities = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllActivity())}
        ,[dispatch])

    const activities = useSelector(state => state.allActivities);

    return(
        <div className={style.activities}>
            
            <h1>Activities list</h1>
            <div className={style.listAct}>
                <ul className={style.list}>
                    <li className={style.boldList}>
                        <p>ID</p>
                        <p>Name</p>
                        <p>Difficulty</p>
                        <p>Duration</p>
                        <p>Season</p>
                    </li>
                {activities.map(a=>{
                    return(
                    <li key={a.id}>
                        <p style={{fontSize:"20px"}}><b>{a.id}</b></p>
                        <p>{convertUppercase(a.name)}</p>
                        <p>{difficultyConvert(a.difficulty)}</p>
                        <p>{a.duration} Hs.</p>
                        <p>{a.season}</p>
                    </li>
                    )
                })}
                </ul>
            </div>
        </div>
    )
}

export default Activities;