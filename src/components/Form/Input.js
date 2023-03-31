import { TextField, styled } from "@mui/material";
import InputMask from "react-input-mask";

export default function Input({ mask = '', maskChar = '', formatChars, variant = 'outlined', value='', onChange = () => 0, ...props }) {
    console.log(props)
    return (
        <InputMask mask={mask} value={value} onChange={onChange}>
            {(() => <StyledInput {...props} onChange={onChange} variant={variant} />)}
        </InputMask>
    )
}

const StyledInput = styled(TextField)({
    marginTop: 8
})