import './Styles/main.css';
import Card from './Card';
import data from './data.json';

function Main(){
    return (
        <>
       <div className="card-container">
        {
            data.map((ele,index)=>
            {
                return (<Card key={index} {...ele} />)
            })
        }
       </div>


        </>
    );
}

export default Main;