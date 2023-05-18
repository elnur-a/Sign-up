import "./customButton.style.css";

const CustomButton = (props) => {
  console.log("props:", props);
  return <button className={`btn ${props.type}`}>{props}</button>;
};
export default CustomButton;
