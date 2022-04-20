import { Form, Input, Button, Checkbox } from "antd";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import "./login.scss";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { useContext, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useNavigate();
  const { dispatch } = useContext(AuthContext);

  const onFinish = (values) => {
    const getValues = async (values) => {
      const docRef =  doc(db, "users", values.reloadUserInfo.localId);
      const docSnap = await getDoc(docRef);
      
        const user =  docSnap.data();
      await dispatch({ type: "LOGIN", payload: user });
      history("/");
      //      console.log(user);
      return user;
    };

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userDetails = userCredential.user;

        getValues(userDetails);
      
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Navbar />
      <div className="account">
        <div className="sidecontainer">
          <Sidebar />
        </div>

        <div className="login">
          <Form
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
          
            <div>murat@gmail.com</div>
            <div>123456</div>
            <Form.Item
              onChange={(e) => setEmail(e.target.value)}
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="remember"
              valuePropName="checked"
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <div className="buttonsEnd">
              <div className="buttons">
                <Link to="/register">
                  <Form.Item
                    wrapperCol={{
                      offset: 8,
                      span: 16,
                    }}
                  >
                    <Button type="primary">Register</Button>
                  </Form.Item>
                </Link>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Login
                  </Button>
                </Form.Item>
              </div>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
