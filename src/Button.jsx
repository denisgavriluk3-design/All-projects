
export default function Button({ children, onClick}) {
    console.log('Button Component Render')
    return (
        <button onClick={onClick}>{children}</button>
    )
}