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
import log from'./login.png';


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
    <div className="form_container">
      <div className="bgsq"></div>
      <div className="prsq"></div>
      <img src={log} className="imgnote"></img>
        <div className="headnote">
          Create a new Note
        </div>
        <div className="forms">
        <form className="frm" onSubmit={submitHandler} ref={form}>

<label>Title</label>
<h4></h4>
<input    type="title"
          value={title}
          placeholder="Enter the title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="title_blank"
          ></input>
          <h4></h4>
  
          <label>Content</label>
<h4></h4>

<input    as="textarea"
          value={content}
          placeholder="Enter content"
          rows={4}
          name="content"
          onChange={(e) => setContent(e.target.value)}
          className="content_blank"
          ></input>
          <h4></h4>

          <div className="cont_preview">
          {content,title && (
        <Card className="preview">
          <Card.Header>Note Preview</Card.Header>
          <Card.Body>
            <ReactMarkdown>{title}</ReactMarkdown>
            <ReactMarkdown>{category}</ReactMarkdown>
            <ReactMarkdown>{date}</ReactMarkdown>
            <ReactMarkdown>{content}</ReactMarkdown>
          </Card.Body>
        </Card>
      )}
          </div>

<label>Category</label>
<h4></h4>
<input    type="content"
          value={category}
          name="category"
          placeholder="Enter the Category"
          onChange={(e) => setCategory(e.target.value)}
          className="category"
          ></input>
          <h4></h4>

<label>Date</label>
<h4></h4>
<input    type="content"
          value={date}
          placeholder="Enter the date"
          name="subject"
          onChange={(e) => setDate(e.target.value)}
          className="date"
          ></input>
          <h4></h4>


<input type="submit" value="Submit" className="subm"></input>
<div className="reset" onClick={resetHandler}>
              Reset
            </div>
</form>  
            

        </div>
    </div>
  );
}

export default CreateNote;