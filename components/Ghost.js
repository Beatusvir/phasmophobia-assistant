function Ghost(props) {
  return (
    <li className="phass__ghost" onMouseOver={() => props.handleMouseOver(props.type)}>
      {props.type}
    </li>
  )
}

export default Ghost;
