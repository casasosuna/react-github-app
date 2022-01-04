import React, {useEffect, useState} from "react"

const TempCard = props => {
    return (
        <div style={{ margin: "1em" }}>
            <img alt="avatar" style={{ width: "70px" }} src={props.avatar_url} />
            <div>
                <div style={{ fontWeight: "bold" }}>{props.name}</div>
                <div>{props.blog}</div>
                <div><a href= {`https://github.com/${props.login}`}>Github Profile</a></div>
            </div>
        </div>
    )
}

export default TempCard