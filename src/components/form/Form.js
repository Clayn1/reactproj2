import React from 'react';
import Card from "../card/Card";
import ButtonX from "../button/ButtonX";

function Form({onClick}) {
    const myClick = (event) => {
        event.preventDefault();
        onClick({
            name: document.getElementById('someForm').name.value,
            username: document.getElementById('someForm').username.value,
            phone: document.getElementById('someForm').phone.value,
            address: document.getElementById('someForm').address.value
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