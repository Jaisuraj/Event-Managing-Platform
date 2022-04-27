import React, { useEffect, useState,  useRef  } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";
import emailjs from "emailjs-com"
import "./CreateNote.css";


function CreateNote({ history }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const noteCreate = useSelector((state) => state.noteCreate);
  const { loading, error, note } = noteCreate;

  console.log(note);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setDate("");
  };
  
  const form = useRef();

  const sendEmail = (e) => {
    console.log("postfunction1")
    // e.preventDefault();
    console.log("postfunction2")
    emailjs.sendForm('service_3lavr1y', 'template_yoruy6w', form.current, 'Go3hzINFp94YMxCdp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      console.log("postfunction3")
      form.current.reset()
      console.log("postfunction4")
  };



  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createNoteAction(title, content, category,date));
    if (!title || !content || !category || !date) return;
    console.log("prefunction")
    sendEmail();
    
    resetHandler();
    history.push("/mynotes");
  };

  useEffect(() => {}, []);

  return (
    <div className="sec1">
      <div className="sqr"></div>
      <div className="log_container">
      <img src={log} className="imglog"></img>
      <div className="err">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      </div>
      <h4 className="title">Log In</h4>
      <form className="frm" onSubmit={submitHandler}>
      <label>Email</label>
      <h4></h4>
      <input type="text" id="fname" name="firstname" placeholder="Enter Email" value={email} onChange={}></input>
      <h4></h4>
      <label>Password</label>
      <h4></h4>
      <input type="text" id="pname" name="password" placeholder="#$*^$%#$@%^@" onChange={}></input>
      <h4></h4>
      <h4 className="reg">New user?<a href="/register">Register Here</a></h4>
      
      <input type="submit" value="Login"></input>
      </form>
      </div>
    </div>
  );
}

export default CreateNote;