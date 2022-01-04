import React, { useState } from "react"
import axios from "axios"
import { useEffect } from "react/cjs/react.development";

const Form = props => {
    const [username, setUsername] = useState("");

    const handleSubmit = event => {
        event.preventDefault()

        axios.get(`https://api.github.com/users/${username}`).then(resp => {
            props.onSubmit(resp.data);
            setUsername(""); 
            props.resetTemps();
        })
    }

    const nameCall = event => {
        if (event != "") {
            axios.get(`https://api.github.com/users/${event}`).then(resp => props.checkName(resp.data)).catch(function (error) {
            if (error.response) {
                console.log(error.response.status)
                //return(null)
                if (error.response.status != 404) {
                    console.log("other error")
                }
                else {
                    console.log("Error 404")
                }
            }
        })
        }
        else {
            console.log("String is empty!")
            props.resetTemps()
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={username}
                onChange={event => {setUsername(event.target.value); nameCall(event.target.value); ;}}
                placeholder="Github username"
                required
            />
            <button type="submit">Add card</button>
        </form>

    )
}

export default Form