import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

export function CreateTodo(props) {
    // react-query
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(()=>{fetchData()
    console.log("hi there")
    },[])
    
    const fetchData = async () => {
        try {
        //   setLoading(true);
          const response = await axios.get('http://localhost:3000/todo',  {
            withCredentials: true,
          });
          console.log(response)
        //   setState(response.data.data);
        //   setDefaultTasks(response.data.data);
        } catch (error) {
          console.log("Error =", error);
        }finally{
        //   setLoading(false);
        }
      };

    return <div>

        <input id="title" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="title" onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />
    
        <input id="desc" style={{
            padding: 10,
            margin: 10
        }} type="text" placeholder="description" onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10
        }} onClick={() => {
            // axios
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(async function(res) {
                    const json = await res.json();
                    alert("Todo added");
                })
        }}>Add a todo</button>
    </div>
}



// 

  