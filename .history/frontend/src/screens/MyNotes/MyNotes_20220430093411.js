import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import "./MyNotes.css"

import { useDispatch, useSelector } from "react-redux";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import { Container } from "react-bootstrap";

export default function MyNotes({ history }) {
  const dispatch = useDispatch();

  const noteList = useSelector((state) => state.noteList);
  const { loading, error, notes } = noteList;

  // const filteredNotes = notes.filter((note) =>
  //   note.title.toLowerCase().includes(search.toLowerCase())
  // );

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure?")) {
    }
  };

  const noteCreate = useSelector((state) => state.noteCreate);
  const { success: successCreate } = noteCreate;

  const noteUpdate = useSelector((state) => state.noteUpdate);
  const { success: successUpdate } = noteUpdate;

  useEffect(() => {
    dispatch(listNotes());
    if (!userInfo) {
      history.push("/");
    }
  }, [dispatch, history, userInfo, successCreate, successUpdate]);

  return (
    <MainScreen>
      <div className="bgsq"></div>
      <div className="bgsq1"></div>
      {console.log(notes)}
      <Link to="/createnote">
        <div className="plan_button">
          Plan Now
        </div>
      </Link>
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}

      {loading && <Loading />}
      {notes?.map((note) => (
        <Accordion className="card_box">
          <Card style={{ margin: 10, innerWidth: 0 }} key={note._id}>
            <Card.Header style={{ display: "flex" }}>
              <span
                // onClick={() => ModelShow(note)}
                className="note_single"
                style={{
                  color: "black",
                  textDecoration: "none",
                  flex: 1,
                  cursor: "pointer",
                  alignSelf: "center",
                  fontSize: 18,
                }}
              >
                
              </span>

              <Link to={`/note/${note._id}`}>
                <div className="edit">
                  Edit
                </div>
              </Link>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <h4>
                  <Badge variant="success">Category - {note.category}</Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                  <ReactMarkdown>{note.content}</ReactMarkdown>
                  <footer className="blockquote-footer">
                    Created on{" "}
                    <cite title="Source Title">
                      {note.createdAt.substring(0, 10)}
                    </cite>
                  </footer>
                </blockquote>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      ))}
    </MainScreen>
  );
}
