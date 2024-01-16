import React, { useState } from 'react'
import { InputSearch } from './styledComponent'
import { useDispatch } from 'react-redux'
import { Search } from '../../redux/Weatherapi/action'

const SearchCity = ()=>{
    const [Data , setData] = useState<any>()
    const dispatch = useDispatch() 
    const HandleClick = (e:any)=>{
        e.target.value == undefined?(setData("Patiala")):(setData( e.target.value))
        dispatch(Search( e.target.value))
    }


dispatch(Search(Data))
    return(
        <div>
            <InputSearch type='search' placeholder='Search for cities' onChange={HandleClick}/>
        </div>
    )
}

export default SearchCity