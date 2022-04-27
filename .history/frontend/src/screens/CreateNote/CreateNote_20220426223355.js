import React, { useEffect, useState,  useRef  } from "react";
import MainScreen from "../../components/MainScreen";
import { Button, Card, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createNoteAction } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ReactMarkdown from "react-markdown";
import emailjs from "emailjs-com"


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
    <MainScreen title="Create a Note">
      <Card>
        <Card.Header>Create a new Note</Card.Header>
        <Card.Body>
          <Form onSubmit={submitHandler} ref={form}>
            {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="title"
                value={title}
                placeholder="Enter the title"
                name="title"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="content">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                value={content}
                placeholder="Enter the content"
                rows={4}
                name="content"
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>
            {content && (
              <Card>
                <Card.Header>Note Preview</Card.Header>
                <Card.Body>
                  <ReactMarkdown>{content}</ReactMarkdown>
                </Card.Body>
              </Card>
            )}

            <Form.Group controlId="content">
              <Form.Label>Category</Form.Label>
              <Form.Control
                type="content"
                value={category}
                name="category"
                placeholder="Enter the Category"
                onChange={(e) => setCategory(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="content">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="content"
                value={date}
                placeholder="Enter the date"
                name="subject"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            {loading && <Loading size={50} />}
            <Button type="submit" variant="primary">
              Create Note
            </Button>
            <Button className="mx-2" onClick={resetHandler} variant="danger">
              Reset Feilds
            </Button>
          </Form>
        </Card.Body>

        <Card.Footer className="text-muted">
          Creating on - {new Date().toLocaleDateString()}
        </Card.Footer>
      </Card>
    </MainScreen>
  );
}

export default CreateNote;