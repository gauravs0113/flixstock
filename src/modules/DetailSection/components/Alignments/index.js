import React from 'react'
import './style.scss'
const options = ['Top', 'Center', 'Bottom']
const Alignments = () => {
    return (
        <div className="alignment_wrapper">
            <h2>Alignments</h2>
            <div className="option_wrapper">
                {options.map((item) => {
                    return (<div className="item_wrapper">
                        <input type="checkbox" value={item} />
                        <label>{item}</label>
                    </div>)
                })}
            </div>
        </div>
    )
}

export default Alignments