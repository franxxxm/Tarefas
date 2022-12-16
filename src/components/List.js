const List = () =>{
    const pessoas = [
        {nome:'flavio', id:1},
        {nome:'lucas', id:2},
        {nome:'lucia', id:3},
        {nome:'laura', id:4},
        {nome:'georgia', id:5},
    ];
    return (
    <div>
        {pessoas.map((item)=>( 
            <p key={item.id}>{item.id}:{item.nome}</p>
        ))}
    </div>
    );
};


export default List;