import React, {useEffect, useContext, useState, useMemo} from 'react'
const DataContext = React.createContext(undefined)

export const DataProvider = ({ children }) => {
    const [data, setData] = useState(null)
    const [selectedGroup, setSelectedGroup] = useState(null)
    const [selectedCategories, setSelectedCategories] = useState([])
    
    const handleData = (updatedData) => {
        setData(updatedData)
    }

    const handleTargetGroupClick = (id) => {
        setSelectedGroup(id)
    }

    const handleCategoryClick = (id) => {
        const updatedSelectedCategories = [...selectedCategories]
        const index = updatedSelectedCategories.indexOf(id)
        if(index > -1){
            updatedSelectedCategories.splice(index, 1)
        }else{
            updatedSelectedCategories.push(id)
        }
        setSelectedCategories(updatedSelectedCategories)
    }

    const props = useMemo(()=>({
        data, handleData, selectedGroup, handleTargetGroupClick, selectedCategories, handleCategoryClick
    }), [data, selectedGroup, selectedCategories])

    return (<DataContext.Provider value={props}>{children}</DataContext.Provider>)
}

export const useData = () => {
    const context = useContext(DataContext)
    if(context === undefined){
        throw new Error('useData can only be used inside DataProvider');
    }
    return context
}