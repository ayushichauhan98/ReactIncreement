import React, { Component } from 'react'

export default function Header(props) {
    return (
        <React.Fragment>
            {console.log(props.x)}
            <h1>this is Header</h1>
        </React.Fragment>
    )
};