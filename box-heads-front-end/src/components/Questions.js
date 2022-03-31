import Answers from './Answers'



const Questions=(props) => {
    
    
    return(
        <div>
            <h1>
                <button onClick={props.Answers.answer1.onClick}>What is an NFT?  </button>   
                {props.Answers.answer1.isVisible?{props.Answers.answer1}:""}
            </h1>
            <h1>
                <button onClick={props.Answers.answer2.onClick}>What is WAW #2852   </button>
            </h1>
            <h1>
                <button onClick={props.Answers.answer3.onClick}>What is the goal?</button>
            </h1>
        </div>
    )
}
export default Questions