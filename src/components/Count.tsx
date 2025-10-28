type Value = {
    valor: number
}

const Count = ({valor}: Value) => {
  return (
    <div>
        <h1>Valor: {valor} </h1>
    </div>
  )
}

export default Count