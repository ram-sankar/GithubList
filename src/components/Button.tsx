import { Button, ButtonOwnProps } from '@mui/material';

export interface Props {
    [key: string]: any
    variant: "text" | "outlined" | "contained"
    children: React.ReactNode
    className?: string
}

export default function AppButton(props: Props) {
    return (
        <Button {...props} variant={props.variant}>
            {props.children}
        </Button>    
    );
}