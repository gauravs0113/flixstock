import React from 'react'
import { useData } from '../../../../context'

import './style.scss'
const Resolutions = () => {
    const {data} = useData(useData)
    const resolutions = data && data.resolution
    return (
        <div className="alignment_wrapper">
            <h2>Output Resolutions</h2>
            <h5>Preset</h5>
            <div className="option_wrapper">
                <select>
                    {resolutions && resolutions.map((item) => {
                        return (<option value={item._id}>{item.value}</option>)
                    })}
                </select>
                
            </div>
        </div>
    )
}

export default Resolutions