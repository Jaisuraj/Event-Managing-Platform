import React, { useEffect, useState, useRef } from "react";
import MainScreen from "../../components/MainScreen";
import axios from "axios";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, updateNoteAction } from "../../actions/notesActions";
import ErrorMessage from "../../components/ErrorMessage";
import Loading from "../../components/Loading";
import ReactMarkdown from "react-markdown";
import log from'./login.png';
import emailjs from "emailjs-com"

function SingleNote({ match, history }) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [category, setCategory] = useState();
  const [date1, setDate1] = useState();
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { loading, error } = noteUpdate;

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

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteNoteAction(id));
    }
    history.push("/mynotes");
  };

  useEffect(() => {
    const fetching = async () => {
      const { data } = await axios.get(`/api/notes/${match.params.id}`);

      setTitle(data.title);
      setContent(data.content);
      setCategory(data.category);
      setDate1(data.date1)
      setDate(data.updatedAt);

    };

    fetching();
  }, [match.params.id, date]);

  const resetHandler = () => {
    setTitle("");
    setCategory("");
    setContent("");
    setDate1("");
  };

  const updateHandler = (e) => {
    e.preventDefault();
    dispatch(updateNoteAction(match.params.id, title, content, category,date1));
    if (!title || !content || !category ||!date1) return;
    
    sendEmail();
    resetHandler();
    history.push("/mynotes");
  };

  return (
    <body className="bgbody">
    <div className="form_container">
      
      <div className="bgsq"></div>
      <div className="bgsq1"></div>
      
      <img src={log} className="imgnote"></img>
        <div className="headnote">
          Edit The Note
        </div>
        <div className="forms">
        <form className="frm" onSubmit={updateHandler} ref={form}>

<label>Title</label>
<h4></h4>
<input    type="title"
          value={title}
          placeholder=""
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className="title_blank"
          ></input>
          <h4></h4>
  
          <label>Content</label>
<h4></h4>

<input    as="textarea"
          value={content}
          placeholder=""
          rows={4}
          name="content"
          onChange={(e) => setContent(e.target.value)}
          className="content_blank"
          ></input>
          <h4></h4>

          <div className="cont_preview">
          {{content,title,category,date} && (
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
          placeholder=""
          onChange={(e) => setCategory(e.target.value)}
          className="category"
          ></input>
          <h4></h4>

<label>Date</label>
<h4></h4>
<input    type="content"
          value={date}
          placeholder=""
          name="subject"
          onChange={(e) => setDate(e.target.value)}
          className="date"
          ></input>
          <h4></h4>


<input type="submit" value="Update" className="subm"></input>
<div className="reset" onClick={deleteHandler}>
              Delete
            </div>
</form>  
            

        </div>
    </div>
    </body>
  );
}

export default SingleNote;