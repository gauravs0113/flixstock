import React, {useState, useEffect} from 'react'
import { useData } from '../../../../context'
import './style.scss';

const TargetGroups = () => {
    const {data, handleTargetGroupClick, selectedGroup} = useData(useData)
    useEffect(()=>{
        data && handleTargetGroupClick(data.targetGroup[0]._id)
    },[data, selectedGroup])
    return(
        <div className="group_wrapper">
            {
                data && data.targetGroup.map((item)=>{
                    return (
                        <div className="item_wrapper">
                            <input type="radio" name="targetGroup" checked={selectedGroup === item._id}  value={item._id} onChange={() => handleTargetGroupClick(item._id)} />
                            <label>{item.name}</label>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default TargetGroups