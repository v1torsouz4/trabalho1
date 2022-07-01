import "./App.css"
function Title({titulo, subtitulo, subtitulo2}) {

    return(
      <button className='Title'>
        <strong>{titulo}</strong>
        <p className="espacamento">{subtitulo}</p>
        <p>{subtitulo2}</p>
        </button>
    );
}


export default Title