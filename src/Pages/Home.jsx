import React, {useState, useLayoutEffect, useRef} from 'react'
import styled from 'styled-components'

import axios from 'axios'

import {CircularProgress} from '@material-ui/core'

const Container = styled.div`
    padding-left: 20%;
    padding-top: 4%;
    color: #92DCE5;

    //1413px
    @media(max-width: 1413px){
        padding-left: 10%;
    }
    //1201px
    @media(max-width: 1201px){
        padding-left: 5%;
    }
    //1114px
    @media(max-width: 1114px){
        padding: 0%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Heading = styled.div`
    display: flex;
    align-items: center;

    h2{
        margin-right: 35px;
        
        //1114px 
        @media(max-width: 1114px){
            margin: 20px 0px 5px 0px;
        }
        //320px IPHONE 5/SE
        @media(max-width: 320px){
            font-size: 24px;
        }
    }

`
const Filter = styled.div` 
        display: flex; 
        align-items: center;

        input{
            background: #12313F;    
        }
        
        h4{
            margin: 0;
        }
        label{
            //320px IPHONE 5/SE
            @media(max-width: 320px){
                font-size: 15px;
            }
        }
`
const Table = styled.table`
    border-collapse: collapse;
    min-width: 400px;
    margin: 50px 0px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;    
    
    //414px IPHONE 6/7/8 Plus ,IPHONE 6/7/8
    @media(max-width: 414px){
        min-width: auto;
    }

    
    thead tr{
        background-color: #12313F;
        text-align: left;

        //1053px
        @media(max-width: 1053px){
            font-size: 17px;
        }
        //675px
        @media(max-width: 675px){
            font-size: 15px;
        }
        //588px
        @media(max-width: 588px){
            font-size: 13.5px;
        }
        //500px
        @media(max-width: 500px){
            font-size: 12.5px;
        }
        //414px IPHONE 6/7/8 Plus
        @media(max-width: 414px){
            font-size: 11.4px;
        }
        //375px IPHONE 6/7/8 , IPHONE X
        @media(max-width: 375px){
            font-size: 11px;
        }
        //360px GALAXY S5
        @media(max-width: 360px){
            font-size: 10.5px;
        }
        //320px IPHONE 5/SE
        @media(max-width: 320px){
            font-size: 10px;
        }
        //280px GALAXY FOLD
        @media(max-width: 280px){
            font-size: 8.6px;
        }
    }

    th, td{
        padding: 10px 15px;
        
        //973px
        @media(max-width: 973px){
            padding: 5px 10px;
        }
        //792px 
        @media(max-width: 792px){
            padding: 4px 7px;
        }
        //550px
        @media(max-width: 550px){
            padding: 4px 5px;
        }
        //523px
        @media(max-width: 523px){
            padding: 4px 3.5px;
        }
        //414px IPHONE 6/7/8 Plus ,IPHONE 6/7/8
        @media(max-width: 414px){
            padding: 3px 1px;
        }
        
    }

    tbody tr{
        border-bottom: 1.8px solid #12313F;
        font-size: 17px;

        //1053px
        @media(max-width: 1053px){
            font-size: 14px;
        }
        //675px
        @media(max-width: 675px){
            font-size: 13px;
        }
        //588px
        @media(max-width: 588px){
            font-size: 12px;
        }
        //500px
        @media(max-width: 500px){
            font-size: 11.5px;
        }
        //414px IPHONE 6/7/8 Plus 
        @media(max-width: 414px){
            font-size: 10.2px;
        }
        //375px IPHONE 6/7/8 , IPHONE X
        @media(max-width: 375px){
            font-size: 9.5px;
        }
        
        //360px GALAXY S5
        @media(max-width: 360px){
            font-size: 8.8px;
        }

        //320px IPHONE 5/SE
        @media(max-width: 320px){
            font-size: 8.2px;
        }
        //280px GALAXY FOLD
        @media(max-width: 280px){
            font-size: 7.1px;
        }
    }

    tbody tr td{
        max-width: 180px;
    }

    tbody tr:nth-of-type(even){
        background-color: #123040;
    }

    tbody tr:last-of-type{
        border-bottom: 2.5px solid #FF3A20;
    }
`



const handle_arrays_from_api = (array) => {
    let str = ''
    
    if(typeof array[0] === 'string'){
        return array.join(',')
    }
    else if(typeof array[0] === 'object'){
        array.forEach(object => str += object.name + ' ')
        return str
    }
    else {
        return array
    }
}

export const Home = () => {
    const [originalData, setOriginalData] = useState([])
    
    const [filteredData, setFilteredData] = useState([])
    const [takeFromFiltered, setTakeFromFiltered] = useState(false)
    
    const [error, setError] = useState(false)

    let inputAll = useRef()

    
    
    useLayoutEffect(() => {
        axios.get('https://restcountries.eu/rest/v2/all')
        .then((response) => {
            setError(false)
            setOriginalData(response.data)})
        .catch((error) => {
            setError(true)
            console.log(error)})
        
    }, [])

        
    
    
    const handle_CheckBoxChange = (e) => {
        
        if(inputAll.current.checked)
            setTakeFromFiltered(false)
        

        if(e.target.value === 'all' && filteredData[0] === undefined){
            setTakeFromFiltered(false) 
            return   
        } 
            
        
        !inputAll.current.checked && setTakeFromFiltered(true)   
                
        if(e.target.value === 'asia'){
            if(e.target.checked)
                setFilteredData((previous) => [...previous, ...originalData.filter(country => country.region ==='Asia')] )
            else{
                setFilteredData((previous) => {
                    let new_filtered_data = previous.filter(country => country.region !== 'Asia')
                    if (new_filtered_data[0] === undefined)
                        setTakeFromFiltered(false) 
                    return new_filtered_data
                } )
            }
        }

        if(e.target.value === 'africa'){
            
            if(e.target.checked)
                setFilteredData((previous) => [...previous, ...originalData.filter(country => country.region ==='Africa')] )
            else{
                setFilteredData((previous) => {
                    let new_filtered_data = previous.filter(country => country.region !== 'Africa')
                    if (new_filtered_data[0] === undefined)
                        setTakeFromFiltered(false) 
                    return new_filtered_data
                } )    
            }
        }

        if(e.target.value === 'europe'){
            
            if(e.target.checked)
                setFilteredData((previous) => [...previous, ...originalData.filter(country => country.region ==='Europe')] )
            else{
                setFilteredData((previous) => {
                    let new_filtered_data = previous.filter(country => country.region !== 'Europe')
                    if (new_filtered_data[0] === undefined)
                        setTakeFromFiltered(false) 
                    return new_filtered_data
                }) 
            }
        }
    
        
    }

    

    return (
        <Container>
            <Heading><h2>Countries of the world</h2>{originalData[0] === undefined && !error && <CircularProgress style={{color: "#92DCE5"}}/>}</Heading>
            <Filter>
                    <input type='checkbox' ref={inputAll} id='all' onChange={handle_CheckBoxChange} value="all"/>
                    <label htmlFor='all'>All</label> 

                    <input type='checkbox'  id='asia' onChange={handle_CheckBoxChange} value="asia" style={{marginLeft: "20px"}}/>
                    <label htmlFor='asia'>Asia</label>
                    
                    <input type='checkbox'  id='europe' onChange={handle_CheckBoxChange} value="europe" style={{marginLeft: "20px"}}/>
                    <label htmlFor='europe'>Europe</label>

                    <input type='checkbox'  id='africa' onChange={handle_CheckBoxChange} value="africa" style={{marginLeft: "20px"}}/>
                    <label htmlFor='africa'>Africa</label>
            </Filter>

            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Region</th>
                        <th>Population</th>
                        <th>Capital</th>
                        <th>Languages</th>
                        <th>Calling Codes</th>
                    </tr>
                </thead>

                <tbody>
                    
                        {takeFromFiltered? filteredData.map((country, index) => 
                            <tr key={index}>
                                <td>{country.name}</td>
                                <td>{country.region || 'N/A'}</td>
                                <td>{country.population || 'N/A'}</td>
                                <td>{country.capital || 'N/A' }</td>
                                <td>{handle_arrays_from_api(country.languages) || 'N/A'}</td>
                                <td>{handle_arrays_from_api(country.callingCodes) || 'N/A'}</td>
                            </tr>
                            
                        ) : originalData.map((country, index) => 
                            <tr key={index}>
                                <td>{country.name}</td>
                                <td>{country.region || 'N/A'}</td>
                                <td>{country.population || 'N/A'}</td>
                                <td>{country.capital || 'N/A' }</td>
                                <td>{handle_arrays_from_api(country.languages) || 'N/A'}</td>
                                <td>{handle_arrays_from_api(country.callingCodes) || 'N/A'}</td>
                            </tr>
                            
                        ) }


                </tbody>
            </Table>
            {error && <h3 style={{color: "red"}}>Please try again later and check your connection</h3>}
        </Container>
    )
}


