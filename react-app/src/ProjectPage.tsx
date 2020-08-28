import React from 'react';
import Card from 'react-bootstrap/Card';

const RoomAppText = "We sought out to create a working iOS application that allowed you to book a room from Nova’s available buildings, as long as you had the prerequisites like being a part of Razor’s Edge and the room not being full. We accomplished this by storing the information on a MySQL database and creating web APIs, both of which were hosted on Amazon Web Services, and having the front-end Swift application call these APIs and get both student and dorm information from the database as well as update the database tables with new information when reserving a room. We had succeeded in creating a working iOS front end with functioning API calls, with a working database.";
const ThanosText = "A program that balances your world. Thanos program will perfectly balance your world. Just enter in the names of your population and half will be gone."
class ProjectPage extends React.Component<{}, {}>{
    render()
    {
        return(
            <div>
                <p> Projects </p>
                <Card>
                    <Card.Body>
                        <Card.Title> Nova Room Registration App </Card.Title>
                        <Card.Text> {RoomAppText} </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Title> Thanos Snap  </Card.Title>
                    <Card.Text> {ThanosText} </Card.Text>
                </Card>
            </div>
        )
    }
}

export default ProjectPage;