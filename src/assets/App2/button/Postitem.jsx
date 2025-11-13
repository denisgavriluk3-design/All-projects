
const Postitem = (props) => {
    console.log(props)
    return (
        <div>
            <div>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>
                    {props.post.body}
                </div>
            </div>
        </div>
    )
}
export default Postitem