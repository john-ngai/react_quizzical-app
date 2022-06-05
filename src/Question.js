export default function Question(props) {
  return (
    <div>
      <h3 className='question-title'>How would one say goodbye in Spanish?</h3>
      <button className="button--option">Adios</button>
      <button className="button--option">Hola</button>
      <button className="button--option">Au Revoir</button>
      <button className="button--option">Salir</button>
      <div className="line" />
    </div>
  );
}