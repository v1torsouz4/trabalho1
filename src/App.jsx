import Title from "./Title.jsx"
import "./App.css"

function App(){

	const texto=[
		{
		   titulo: "PREVIOUS",
		   subtitulo: "	JQUERY: DETECT UPDATE OF HTML",
		   subtitulo2:"ELEMENT",
		},
	 
	
		{
		   titulo: "NEXT",
		   subtitulo: "RAILS + DEVISE WORKING WITH",
		   subtitulo2: "MULTIPLE MODELS",
		}
	 ];

	 return (
		<div>
	
		  {texto.map((text) => {
			return <Title
	
			  titulo={text.titulo}
			  subtitulo={text.subtitulo}
			  subtitulo2={text.subtitulo2}
			/>;
	
	
		  })}
		 
		
	
		</div>
	  );
	}
	
	export default App


