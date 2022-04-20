import { Form, Input, Button } from "antd";
import React from "react";
import { useState } from "react";
import "./createacount.scss";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore"; 
import { useNavigate } from "react-router-dom";











const CreateAcount = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  
  const history = useNavigate();
  

  const onFinish = async (values) => {
    
 






    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {


       
        setDoc(doc(db, "users" ,userCredential.user.reloadUserInfo.localId), {
          userName: userName,
          fullName: fullName,
        });
        history("/login");

      })
      .catch((error) => {
        console.log(error);
      });
     

   
  

  };

  return (
    <div>
      <Navbar />
      <div className="account">
        <div className="sidecontainer">
          <Sidebar />
        </div>

        <div className="createacount">
          <Form className="form" onFinish={onFinish}>
            <Form.Item
             onChange={(e) => setUserName(e.target.value)}
              className="item"
              name={["user", "username"]}
              rules={[
                { required: true, message: "Please input your User Name!" },
              ]}
            >
              <Input placeholder="User Name" />
            </Form.Item>

            <Form.Item
              onChange={(e) => setPassword(e.target.value)}
              className="pass"
              name="password"
              rules={[
                {
                  required: true,
                  min: 6,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password className="passInput" placeholder="Password" />
            </Form.Item>

            <Form.Item
              onChange={(e) => setEmail(e.target.value)}
              className="item"
              name={["user", "email"]}
              rules={[{ required: true, message: "Please input your E-mail!" }]}
            >
              <Input type="email" placeholder="Email" />
            </Form.Item>

            <Form.Item  onChange={(e) => setFullName(e.target.value)} className="item" name={["user", "full_name"]}>
              <Input placeholder="Full Name" />
            </Form.Item>

            <Form.Item className="buttonItem">
              <Button className="button" type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default CreateAcount;
