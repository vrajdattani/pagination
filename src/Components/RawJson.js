import React from 'react';
const RawJson = (props) =>{
    const data = (props.location.state._original);
    console.log(data);
return (<div>{JSON.stringify(data)}</div>)
}
export default RawJson