import classes from "./BackDrop.module.css";

function BackDrop(props) {
  return (
    <div className={classes.backdrop} onClick={props.onClickBackDrop}></div>
  );
}

export default BackDrop;
