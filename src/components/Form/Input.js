import { TextField } from "@mui/material";
import InputMask from "react-input-mask";

export default function Input({ mask = '', maskChar = '', formatChars, variant = 'outlined', value='', onChange = () => 0, ...props }) {
    console.log(props)
    return (
        <InputMask mask={mask} value={value} onChange={onChange}>
            {(() => <TextField {...props} onChange={onChange} variant={variant} />)}
        </InputMask>
    )
}