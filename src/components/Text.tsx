import Typography from '@mui/material/Typography';
import { Variant } from '@mui/material/styles/createTypography';

export interface Props {
    variant: Variant
    children: React.ReactNode
    className?: string
}

export default function Text(props: Props) {
  return (
    <Typography variant={props.variant} className={props.className}>
        {props.children}
    </Typography>
  );
}