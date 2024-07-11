function Title(props) {
    return (
        <div className="title">
            <h2>{props.title}</h2>
            <p>{props.infos}</p>
        </div>
    );
}

export default Title;