import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {getAllActivity} from"../redux/actions"
import style from"./activities.module.css"


const Activities = ()=>{
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getAllActivity())}
        ,[dispatch])

    const activities = useSelector(state => state.allActivities);

    return(
        <div className={style.activities}>
            <h1>This are Activities</h1>
            <div className={style.listAct}>
                <ul className={style.list}>
                    <li>
                        <p>ID</p>
                        <p>Name</p>
                        <p>Difficulty</p>
                        <p>Duration</p>
                        <p>Season</p>
                    </li>
                {activities.map(a=>{
                    return(
                    <li key={a.id}>
                        <p>{a.id}</p>
                        <p>{a.name}</p>
                        <p>{a.difficulty}</p>
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