import {useNavigate} from "react-router-dom";

const Home = (props) => {
    const navigate = useNavigate();
    // const stateClick = () => {
    //     navigate("/state");
    // }
    // const memoClick = () => {
    //     navigate("/memo");
    // }
    // const reducerClick = () => {
    //     navigate("/reducer");
    // }
    const NextClick = ()=>{
        // props.setUser(false)
        navigate("/SignUp");
    }


    return (
        <nav>

            {/*<button onClick={stateClick}>State</button>*/}
            {/*<button onClick={memoClick}>Memo</button>*/}
            {/*<button onClick={reducerClick}>Reducer</button>*/}
            <button onClick={NextClick}>SignUp</button>
        </nav>

    )

}
export default Home