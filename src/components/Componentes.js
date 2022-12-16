const Componentes = () =>{     
    const handlerClick = () => {
        console.log('o q esta a fazer')
    }
    return (
        <div>
         <h1 id='A'>
            Segundo componente
         </h1>
            <button onClick={handlerClick}>Clikar</button>
            <button onClick={()=> console.log('uauaauuuu')}>Clikar</button>
        </div>
    )
}

export default Componentes