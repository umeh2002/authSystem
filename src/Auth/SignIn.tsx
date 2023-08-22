import React from "react";
import styled from "styled-components";

const SignIn = () => {
  return (
    <Container>
      <Main>
        <Left>
          <Title>Welcome</Title>
          <Divs1>
            <div>
              <div>
                <Nam style={{ marginLeft: "10px" }}>Email</Nam>
                <Input placeholder="enter your email" />
                <Err>enter email</Err>
              </div>
            </div>
            <div>
              <div>
                <Nam style={{ marginLeft: "10px" }}>Password</Nam>
                <Input placeholder="enter your password" type="password" />
                <Err>enter password</Err>
              </div>
            </div>
          </Divs1>
          <Button>Sign In</Button>
          <Txt2>
            Don't have an account ?: <span>Sign Up</span>
          </Txt2>
        </Left>
      </Main>
    </Container>
  );
};

export default SignIn;

const Err = styled.div`
  font-size: 10px;
  color: red;
  margin: 5px 0px;
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
`;

const Txt2 = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin: 10px 0px;

  span {
    font-weight: 700;
    color: blue;
    font-size: 15px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  margin: 10px 0px;
  width: 120px;
  height: 40px;
  background-color: #49a7c4;
  border: 1px solid;
  border-radius: 10px;
  outline: none;
  transition: all 400ms;

  :hover {
    cursor: pointer;
  }
`;

const Input = styled.input`
  width: 300px;
  height: 30px;
  outline: none;
  border: 1px solid silver;
  border-radius: 10px;
  padding-left: 10px;
  margin-bottom: 5px;
  margin-right: 20px;
  ::placeholder {
    font-size: 13px;
    color: var(--appText);
  }
`;

const Nam = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin: 5px 0px;
`;

const Divs1 = styled.div`
  margin: 20px 0px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0px;
`;

const Left = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Main = styled.div`
  width: 30%;
  height: 80vh;
  background-color: var(--appBg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid var(--appBorder);
  color: var(--appText);
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:var(--appBg);
`;
