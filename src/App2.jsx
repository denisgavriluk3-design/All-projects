import React, { useState, useRef } from "react";
import Counter from "./assets/App2/button/Counter";
import Classcounter from "./assets/App2/button/Classcounter";
import Postitem from "./assets/App2/button/Postitem";
import MyButton from "./assets/App2/button/MyButton";
import MyInput from "./assets/App2/button/input/MyInput";

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'Javascript', body: 'Description' },
        { id: 2, title: 'Javascript1', body: 'Description' },
        { id: 3, title: 'Javascript2', body: 'Description' },
    ])
    const [posts2, setPosts2] = useState([
        { id: 1, title: 'Python1', body: 'Description' },
        { id: 2, title: 'Python2', body: 'Description' },
        { id: 3, title: 'Python3', body: 'Description' },
    ])
    const [value, setValue] = useState('Hello World')
    const bodyInputRef = useRef()
    const [title, settitle] = useState('')
    // const [body1, setBody] = useState('')

    // const addNewPost1 = (e) => {
    //     e.preventDefault()
    //     const newPost = {
    //         id: Date.now(),
    //         title,
    //         body
    //     }
    //     setPosts((...posts1, newPost1))
    // }

    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title)
        console.log(bodyInputRef.current.value)
    }

    return (
        <div className="App">
            <form>
                <MyInput onChange={e => settitle(e.target.value)} value={title} type="text" placeholder="name post"/>
                {/* <MyInput onChange={e => setBody(e.target.value)} value={body1} type="text" placeholder="name post"/> */}
                <MyInput type="text" placeholder="DESCRIPTION post"/>
                <input ref={bodyInputRef}></input>
                <button  onClick={addNewPost}>create post</button>
            </form>
            <MyButton disabled>create post</MyButton>
            
            <Postitem post={{ id: 1, title: 'Javascript', body: 'Description' }} />
            <Postitem post={{ id: 2, title: 'Javascript', body: 'Description' }} />
            <Counter />
            <Classcounter />
            <h1 className="borderOfInput">{value}</h1>
            <input type="text" value={value} onChange={event => setValue(event.target.value)} />
        </div>
    )
}
//<Postlist posts={posts} title="posts about JS"/>
//<Postlist posts={posts2} title="posts about Python"/>
// http://localhost:5173/
export default App