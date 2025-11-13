import { Input } from "postcss";
import React from "react";
import classes from "./MyInput.module.css"

const MyInput = React.forwardRef((props, ref) => {
    return (
        <input ref={ref} className={classes.Myinput} {...props}/>
    );
});
export default MyInput