function Ghost(props) {
  return (
    <div className="col phass__ghost" onMouseOver={() => props.handleMouseOver(props.type)}>
      {props.type}
    </div>
  )
}

export default Ghost;
