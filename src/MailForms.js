class MailForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handlerChange = this.handlerChange.bind(this);
        this.handlerSubmit = this.handlerSubmit.bind(this);
        }
    }


    handlerChange(event){this.setState({value: event.target.value})}