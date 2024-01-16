import React, { useState } from 'react'
import { InputSearch, SearchButton } from './styledComponent'
import { useDispatch } from 'react-redux'
import { Search } from '../../redux/Weatherapi/action'

const SearchCity = ()=>{
    const [Data , setData] = useState<any>()

    const handleChange = (e:any) => {
        setData(e.target.value);
      };
    

    const dispatch = useDispatch() 
    const HandleClick = (e:any)=>{
        e.preventDefault()
        // dispatch(Search(Data))
    }

    return(
        <div>
            <InputSearch type='search' placeholder='Search for cities' onChange={handleChange}/>
            <SearchButton onClick={HandleClick} type="submit">
          Search
        </SearchButton>
        </div>
    )
}

export default SearchCity