import { useState } from "react";
import { useEffect } from "react";
import axios from "axios"

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    useEffect(()=>{fetchData()
    console.log("hi there")
    },[])
    
    const fetchData = async () => {
        try {
          const response = await axios.get('https://react-todo-backend-u5gc.onrender.com',  {
            withCredentials: true,
          });
          console.log(response)
        } catch (error) {
          console.log("Error =", error);
        }finally{
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
            axios.post("https://react-todo-backend-u5gc.onrender.com/todo", {
                title: title,
                description: description
            }, {
                headers: {
                    "Content-Type": "application/json"
                }
            })
            .then(response => {
                alert("Todo added");
                console.log(response.data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
        }}>Add a todo</button>
    </div>
}

  