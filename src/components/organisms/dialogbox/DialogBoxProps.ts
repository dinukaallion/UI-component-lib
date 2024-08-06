interface AlertBoxProps {
    title: string;
    buttonTitle: string;
    description: string;
    buttonSucessMessage: string;
    buttonFailMessage: string;
    buttonVariant: 'contained'| 'outlined'| 'text';
    buttonColor: 'primary'|'secondary'|'warning'
}

export default AlertBoxProps