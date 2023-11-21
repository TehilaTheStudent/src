import { useParams } from "react-router-dom";

const Details = () => {
// let objParams =useParams()
// let id=objParams.id

let { id } = useParams()

    return (<h1> details shoes with {id}</h1>);
}

export default Details;