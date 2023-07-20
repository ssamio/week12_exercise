import { useEffect, useState} from "react";

const About = () => {
    const [dataType, setDataType] = useState("posts");
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${dataType}`)
        .then(response => response.json())
        .then(json => setApiData(json))
    }, [dataType]);

    return (
        <div>
          <ul>
            {apiData.map((item) => (
                <li key={item.id}>{item.title}</li>
            ))
            }
          </ul>
        </div>
    )

}
export default About;