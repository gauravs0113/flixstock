import React, {Fragment} from 'react'
import { useData } from '../../../../context'
import './style.scss';


const Categories = () => {
    const {data, handleCategoryClick, selectedCategories, selectedGroup} = useData(useData)

    if(!selectedGroup)
        return null

    return(
        <div className="category_section_wrapper">
            <h2>Categories You Sell</h2>
            <div className="category_btn_wrapper">
                {
                    data && data.categories.map((item)=>{
                        const isSelected = selectedCategories && selectedCategories.includes(item._id)
                        return <div onClick={() => handleCategoryClick(item._id)} id={item._id} className={`category_btn ${isSelected ? 'selected' : ''}`}>{item.name}</div>
                    })
                }
            </div>
        </div>
    )
}

export default Categories