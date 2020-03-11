import React, {useState} from 'react';
import Card from "../card/Card";
import ButtonX from "../button/ButtonX";

function Form({onClick,data}) {
    //const [value,setValue] = useState(10)
    const myClick = (event) => {
        //setValue(value+1)
        //console.log("value");
        //console.log(value);
        event.preventDefault();
        onClick({
            name: document.getElementById('someForm').name.value,
            username: document.getElementById('someForm').username.value,
            phone: document.getElementById('someForm').phone.value,
            address: {city: document.getElementById('someForm').address.value},
            id: parseInt((data[data.length-1] || {id:0}).id) + 1 || 1
        })
    };
    return (
        <div style={{width: '18rem', float: 'left', height: '15rem'}}>
            <form id={'someForm'}>
                <input name={'name'} placeholder={'name'}/>
                <input name={'username'} placeholder={'username'}/>
                <input name={'phone'} type={'phone'} placeholder={'phone'}/>
                <input name={'address'} placeholder={'address'}/>
                <button onClick={myClick}>Submit</button>
            </form>
        </div>
    );
}

export default Form;