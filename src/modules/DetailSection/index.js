import React, {Fragment, useState, useEffect} from 'react'
import TargetGroups from './components/TargetGroups'
import Categories from './components/Categories'
import Angles from './components/Angles'
import Alignments from './components/Alignments'
import Resolutions from './components/Resolutions'
import Crops from './components/Crops'
import { useData } from '../../context'
import axios from 'axios'
import './style.scss';


const DetailsSection = () => {
    const {handleData} = useData(useData)


    const fetchData = () => {
        axios.get('http://65.2.63.155:3000/outputspec/test/form')
        .then(res => {
            handleData(res && res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(()=> {
        fetchData()
    }, [])

    return(
        <div className="details_section">
            <TargetGroups />
            <Categories />
            <Angles />
            <Crops  />
            <Alignments />
            <Resolutions />
        </div>
    )
}

export default DetailsSection