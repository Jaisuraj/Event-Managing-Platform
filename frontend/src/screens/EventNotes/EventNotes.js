import { MainScreen } from "../../components/MainScreen";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import { FormCard } from "../../components/FormCard";
import { deleteNoteAction, listNotes } from "../../actions/notesActions";
import { useDispatch, useSelector } from "react-redux";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;

  display: grid;
  grid-template-columns: repeat(auto-fit, 19rem);
  justify-content: center;
`;
export const EventNotes = () => {


    
  return (
    <MainScreen >
      <Link to="/createeventnote">
        <Button style={{ marginLeft: 10, marginBottom: 6 }} size="lg">
          Plan Now
        </Button>
      </Link>

      <FormCard> </FormCard>
    </MainScreen>
  );
};
