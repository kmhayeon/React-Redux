import AddNumber from "../component/AddNumber";
import {connect} from 'react-redux';
function mapDispatchToProps(dispatch) {
    return {
        onClick: function (size) {
            dispatch({type: 'INCREMENT', size: size});
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNumber);

/*
export default class extends Component{
    render() {
        return (
            <AddNumber onClick={ function (size) {
                Store.dispatch({type:'INCREMENT', size:size});
            }.bind(this)}></AddNumber>
        );
    }
}
*/
