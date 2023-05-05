import "./Card.css";

const Card = (props) => {
    const newClassName = "card " + props.className;
    return <div className={newClassName}>{props.children}</div>
}

export default Card;