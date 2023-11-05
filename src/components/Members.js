import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./Members.css";

const Members = ({ members, editMember }) => {
  console.log(members);
  return (
    <div className="container">
      {members.map((member) => (
        <Card>
          <img src={member.img} alt="Card image cap" />
          <CardBody>
            <CardTitle>{member.name}</CardTitle>
            <CardSubtitle>{member.rol}</CardSubtitle>
            <CardText>{member.email}</CardText>
            <Button onClick={() => editMember(member)}>Edit</Button>
          </CardBody>
        </Card>
      ))}
    </div>
  );
};

export default Members;
