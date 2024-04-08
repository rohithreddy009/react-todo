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
          const response = await axios.get('https://todobackend.rohithreddy.site/todo',  {
            withCredentials: true,
          });
          console.log(response)
        } catch (error) {
          console.log("Error =", error);
        }
      };

    return <div>
        <input id="title" style={{
            padding: 10,
            margin: 10,
            width: 1000,
            height: 40
        }} type="text" placeholder="Enter title ..." onChange={function(e) {
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input> <br />
    
        <input id="desc" style={{
            padding: 10,
            margin: 10,
            width: 1000,
            height: 40
        }} type="text" placeholder="Enter description ..." onChange={function(e) {
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input> <br />

        <button style={{
            padding: 10,
            margin: 10,
            width: 300,
            height: 80
        }} onClick={() => {
            // axios
            axios.post('https://todobackend.rohithreddy.site/todo', {
                title: title,
                description: description
        })
            .then(response => {
            alert("Todo added");
        })
            .catch(error => {
            console.error(error);
            alert("An error occurred");
    });
  }}>Add Todo</button>
    </div>
}

  