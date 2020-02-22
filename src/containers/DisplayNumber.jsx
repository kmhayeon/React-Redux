import DisplayNumber from "../component/DisplayNumber";
import {connect} from 'react-redux';
function mapReduxStateToReactProps(state) {
    return{
        number:state.number
    }


}
export default connect(mapReduxStateToReactProps)(DisplayNumber);


/*

export default class extends Component{
    state = {number:Store.getState().number}
    constructor(props) {
        super(props);
        Store.subscribe(function () {
            this.setState({number:Store.getState().number});
        }.bind(this));
    }
    render() {
        return <DisplayNumber  number={this.state.number}></DisplayNumber>

    }
}
*/
