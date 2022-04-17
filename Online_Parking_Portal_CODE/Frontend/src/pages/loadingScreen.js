import React, { Component } from 'react'

export class loadingScreen extends Component {

    componentDidMount() {
        setTimeout(() => {
           window.location.href="/Services"
        }, 3000)
    }


    render() {
        return (
            <div>
                <h1>This is splash screen</h1>
            </div>
        )
    }
}

export default loadingScreen