import React, {useEffect, useState} from "react"
import Button from "./Button.js"

const Card = props => {
    return (
        <div style={{ margin: "1em" }}>
            <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} />
            <div>
                <div style={{ fontWeight: "bold" }}>{props.name}</div>
                <div>{props.blog}</div>
                <div><a href= {`https://github.com/${props.login}`}>Github Profile</a></div>
            </div>
            <div> <Button delete= {() => props.deleteFunction(props.deleteIndex)} /> </div>
        </div>
    )
}

export default Card