import {useState, useEffect} from 'react';
const Hooks = () => {

    var idade = 30;
    const [getNovaIdade, setNovaIdade] = useState(30);

    const mudarIdade = ()=>{
        if(getNovaIdade == 45){
            return setNovaIdade(30);
        }
        setNovaIdade(45);
    }

    useEffect(()=>{
        console.log('tetse')
    })

    return (
        <div>
            <p>idade:{getNovaIdade}</p>
            <button onClick={mudarIdade}>mudarIdade</button>
        </div>
    )
}

export default Hooks;