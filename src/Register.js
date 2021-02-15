 
 import{Form,Button} from 'react-bootstrap';
 function Register()
 {
return(
<div >
<h1 className="text-center text-danger"> Registration Form</h1>

<Form.Group>
    <Form.Label> Name<span className="text-danger">*</span></Form.Label>
    <Form.Control Required type="text" placeholder="Enter Your Full Name"/>
</Form.Group>

<Form.Group>
    <Form.Label> Email <span className="text-danger">*</span></Form.Label>
    <Form.Control Required type="email" placeholder="Enter Your Email"/>
</Form.Group>

<Form.Group>
    <Form.Label> Password <span className="text-danger">*</span></Form.Label>
    <Form.Control Required type="password" placeholder="Enter Your Password"/>
</Form.Group>

<Form.Group>
    <Form.Label> Mobile Number <span className="text-danger">*</span></Form.Label>
    <Form.Control Required type="Number" placeholder="Enter Your Mobile Number"/>
</Form.Group>














{/* <Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
{/* </Form> */}
</div>
);

 }
 export default Register;