import { MainScreen } from "../../components/MainScreen.js";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
export const EventNotes = () => {
  return (
    <MainScreen title="Hello World">
      <Link to="/createeventnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Plan Now
        </Button>
      </Link>
    </MainScreen>
  );
};
