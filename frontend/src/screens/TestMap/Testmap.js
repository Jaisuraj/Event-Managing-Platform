import React, { useEffect } from "react";
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import MainScreen from "../../components/MainScreen";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { map } from "../../actions/mapActions";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/Loading";

export default function Testmap({ history, search }) {
  const dispatch = useDispatch();

  const mapList = useSelector((state) => state.mapList);
  const { loading, error, maps } = mapList;

 const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
 
  useEffect(() => {
    dispatch(map)
  }, [dispatch]);

  console.log(maps);


return (
    <MainScreen title={`Welcome Back ${userInfo && userInfo.name}..`}>
      {console.log(maps)}
      <Link to="/createevent">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Create new Note
        </Button>
      </Link>
     
      
      {maps &&
        maps
          
          .map((map) => (
            <Accordion>
              <Card style={{ margin: 10 }} key={maps._id}>
                <Card.Header style={{ display: "flex" }}>
                  <span
                    // onClick={() => ModelShow(note)}
                    style={{
                      color: "black",
                      textDecoration: "none",
                      flex: 1,
                      cursor: "pointer",
                      alignSelf: "center",
                      fontSize: 18,
                    }}
                  >
                    <Accordion.Toggle
                      as={Card.Text}
                      variant="link"
                      eventKey="0"
                    >
                      {maps.mapname}
                    </Accordion.Toggle>
                  </span>

                  <div>
                    <Button href={`/note/${maps._id}`}>Edit</Button>
                    <Button
                      variant="danger"
                      className="mx-2"
                    >
                      Delete
                    </Button>
                  </div>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <h4>
                      <Badge variant="success">
                        Category - {maps.location}
                      </Badge>
                    </h4>
                    <blockquote className="blockquote mb-0">
                      <ReactMarkdown>{maps.location}</ReactMarkdown>
                      <footer className="blockquote-footer">
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