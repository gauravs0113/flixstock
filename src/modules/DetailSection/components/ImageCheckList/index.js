import React, {useState, useEffect} from 'react'
import { useData } from '../../../../context'
import {find, get} from 'lodash'
import './style.scss'

const Angles = (props) => {
    const {data, selectedGroup, selectedCategories} = useData(useData)
    const [currentCategory, setCurrentCategory] = useState(selectedCategories[0])
    useEffect(()=>{
        selectedCategories && setCurrentCategory(selectedCategories[0])
    },[selectedCategories])
    if(!data)
        return null

    const currentGroup = find(data.targetGroup, function(o){ return o._id === selectedGroup})
    const angles = get(currentGroup, `properties.${props.type}`)
    

    if(!selectedCategories.length)
        return null

    return(
        <div className="angles_wrapper">
            <h2>{props.title}</h2>
            <ul className="selected_categories_list_wrapper">
                {
                    selectedCategories && selectedCategories.map((item) => {
                        const category = find(data.categories, function(o){ return o._id === item})
                        return <li className={currentCategory === item ? 'selected' : ''} onClick={()=>setCurrentCategory(item)}>{category.name}</li>
                    })
                }
            </ul>
            <div className="angle_values_wrapper">
                {
                    angles && angles.map((angle)=>{
                        const angleCategory = angle._id
                        const angleValues = angle.values
                        if(angleCategory !== currentCategory)
                            return null

                        return(
                            angleValues && angleValues.map((value)=>{
                                const img = get(value, 'image.fileUrl')
                                const isSelected = value.isSelected
                                return(
                                    <div className="angle_item">
                                        <input type="checkbox" value={value._id} defaultChecked={isSelected} />
                                        <img src={img} alt={value.name} />
                                        <h3>{value.name}</h3>
                                    </div>
                                )
                            })
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Angles