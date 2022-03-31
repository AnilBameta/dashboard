import HomePage from "../../pages/home/Home"
import { connect } from "react-redux";
import { HomeItems } from "../../services/actions/Action"

    function HomeContainer(props) {
        console.log("Home container",props)
      return <HomePage {...props}/>;
    }

    const mapStateToProps = (state) => ({
      data:state,
    });
    const mapDispatchToProps = (dispatch) => ({
      homeReduxData: (data) => dispatch(HomeItems(data)),
    });

    
 export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

