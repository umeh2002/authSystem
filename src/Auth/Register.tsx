import React, { useState } from 'react' 
import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import * as yup from "yup"
import {yupResolver} from "@hookform/resolvers/yup"
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const nagivate =useNavigate()
// const [image, setImage] =useState(pix)
const [avatar, setAvatar] =useState('')

const Schema =yup.object({
    email:yup.string().required(),
    name:yup.string().required(),
    password:yup.string().required(),
    confirm:yup.string().oneOf([yup.ref("password")]),
})

const {
    register,
    handleSubmit,
    formState:{errors}
} =useForm({resolver:yupResolver(Schema)})

const onHandleImage =(e:any)=>{
try {
    const file = e.target.files[0]
    const realImage =URL.createObjectURL(file)
    setAvatar(realImage)
    // setImage(file)
} catch (error) {
    console.log(error)
}

const handleSubmission =handleSubmit(async(data:any)=>
{
const {name, email,password}=data
const formData = new FormData()

formData.append("name" , name)
formData.append("email" , email)
formData.append("password" , password)
formData.append("image" , avatar)
})
}
  return (
    <Container>
    <Main >
      <Left onSubmit={handleSubmission}>
        <Title>Create an account</Title>
        <Divs>
          <Divs4 style={{ display: "flex", alignItems: "center" }}>
            <Icon />
            <Google>Sign up with google</Google>
          </Divs4>

          <Divs5 style={{ display: "flex", alignItems: "center" }}>
            <Icon1 />
            <Face>Sign up with facebook</Face>
          </Divs5>
        </Divs>
        <Divs1>
          <div style={{ display: "flex" }}>
            <div>
              <Nam>Name</Nam>
              <Input placeholder="enter your name" {...register("name")}/>
             {errors.name &&  <Err>enter name</Err>}
            </div>
            <div>
              <Nam style={{ marginLeft: "10px" }}>Password</Nam>
              <Input placeholder="enter your password" type="password" {...register("password")}/>
          {errors.password &&     <Err>enter password</Err>}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <Nam>Confirm</Nam>
              <Input placeholder="confirm password" type="password" {...register("confirm")}/>
           {errors.confirm &&    <Err>confirm password</Err>}
            </div>
            <div>
              <Nam style={{ marginLeft: "10px" }}>Email</Nam>
              <Input placeholder="enter your email" {...register("email")} />
            {errors.email &&   <Err>enter email</Err>}
            </div>
          </div>
        </Divs1>
        <Divs3>
          <input type="checkbox" />
          <Txt>
            I agree to <span>Term</span> and <span>Policies</span>
          </Txt>
        </Divs3>
        <Button>Sign Up</Button>
        <Txt2>
          Have an account ?: <span>Sign In</span>
        </Txt2>
      </Left>
    </Main>
  </Container>
  )
}

export default Register

const Err =styled.div`
    font-size: 10px;
    color: red;
    margin: 5px 0px;
    display: flex;
    justify-content: flex-end;
    margin-right: 30px;
`


const Icon1 = styled(FaFacebookF)`
  font-size: 20px;
  margin-right: 5px;
`;

const Icon = styled(FcGoogle)`
  font-size: 20px;
  margin-right: 5px;
`;

const Txt2 = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin: 10px 0px;

  span {
    font-weight:bold;
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

const Txt = styled.div`
  font-size: 13px;
  margin-left: 5px;

  span {
    font-weight: 700;
    text-decoration: underline;
    cursor: pointer;
  }
`;

const Divs3 = styled.div`
  display: flex;
  align-items: center;

  input {
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

const Divs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin: 20px 0px;
`;

const Google = styled.div`
  font-size: 13px;
`;

const Divs5 = styled.div`
  width: 210px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid silver;
  outline: none;
  margin-right: 10px;
  font-weight: 700;
  transition: all 400ms;

  :hover {
    cursor: pointer;
  }
`;

const Divs4 = styled.div`
  width: 200px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  border: 1px solid silver;
  outline: none;
  margin-right: 30px;
  font-weight: 700;
  transition: all 400ms;

  :hover {
    cursor: pointer;
  }
`;

const Face = styled.div`
  font-size: 13px;
`;

const Left = styled.form`
  width: 100%;
  height: 85%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;


const Main = styled.div`
  width: 50%;
  height: 90vh;
  background-color: var(--appBg);
  display: flex;
  color: var(--appText);
  justify-content: center;
  align-items: center;
  padding-left: 10px;
  border-radius: 10px;
  border: 1px solid var(--appBorder);
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--appBg);
`;
