import React from "react"
import Postitem from "./Postitem"

const Postlist = (props) => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>{props.title}</h1>
            {posts.map(post =>
            <Postitem post={post} key={post.id} />
             )}
        </div>
    )
}
export default Postlist