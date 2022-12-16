const Render = ({x}) =>{
    return (
        <div>
            <p> {5 > x && 'olha 5 é maior'}</p>
            {x > 5 ? `${x} é maior que 5`: `${x} não é maior que 5`}
        </div>
    );
}

export default Render;