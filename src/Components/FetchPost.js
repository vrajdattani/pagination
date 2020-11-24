import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {FetchAction} from '../Actions/FetchAction';
import ReactTable from 'react-table-v6';
import 'react-table-v6/react-table.css';
import propTypes from 'react-table-v6/lib/propTypes';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
const FetchPost = () =>{
    const [id,setId] = useState(0);
    const dispatch = useDispatch();
    useEffect(()=>{
        setTimeout(()=>{
            setId(id+1);
            dispatch(FetchAction(id));
        },10000)
    },[id,dispatch])
    const details = useSelector((state)=>{
        return state.data
    })
    const columns = [
        {
            Header:'Title',
            accessor:'title'
        },
        {
            Header:'URL',
            accessor:'url'
        },
        {
            Header:'Created_at',
            accessor:'created_at'
        },
        {
            Header:'Action',
            Cell: props =>{
                return(
                    <Link to={{pathname:'/RawJson',state:props.row}}>
                    <Button type='submit'>FetchPost</Button>
                    </Link>
                )
            }
        }
    ]
    const data = details;
    console.log(details)
    return(<div>
            <ReactTable columns={columns} data={data}/>
        </div>
    )
}
export default FetchPost