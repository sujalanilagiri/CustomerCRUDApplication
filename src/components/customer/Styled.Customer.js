import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Field = styled.div`
  display:flex; 
  margin-left:60px;
  flex-direction: row; 
  justify-content: center; 
  align-items: center
`;
export const Label = styled.label`
 color :#5995ef;
 font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 25px;
    height: 20px;
    width: 200px;
    margin-top: 10px;
    margin-left: 10px;
    text-align: right;
    clear: both;
    float:left;
    margin-right:15px;
`
export const Error = styled.div`
color: #cc0033;
  display: inline-block;
  font-size: 14px;
  line-height: 15px;
  margin-top: 5%;
  margin-left: 45%
  `;
export const Input = styled.input`
  width: 300px;
  height: 25px;
  border: 1px solid #ccc;
  background-color: #fff;
    margin-top: 10px;
    float: left;
`;

export const Button = styled.button`
  width: 300px;
  height: 35px;
  margin:20px;
  background-color: #5995ef;
  color: #fff;
  border-radius: 3px;
`;

// Text

export const Title = styled.h1`
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  color: #4d4d4d;
  font-size: 2.2em;
`;

export const Title2 = styled.h2`
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  color: #4d4d4d;
  font-size: 1.8em;
`;

export const Text = styled.p`
  font-family: 'Raleway', sans-serif;
  color: ${props => props.color || '#4d4d4d'}
`;
