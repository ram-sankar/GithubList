import Typography from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';

export interface Props {
    [key: string]: any
    children: React.ReactNode
    className?: string
}

export default function Text(props: Props) {
  return (
    <Typography  {...props} className={props.className}>
        {props.children}
    </Typography>
  );
}