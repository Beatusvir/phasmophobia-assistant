function Evidence(props) {
  return (
    <div className="col-md-4">
      <button
        className={`phass__evidence ${props.disabled ? 'phass__evidence--disabled' : ''} ${props.selected ? 'phass__evidence--selected' : ''}`}
        onClick={props.disabled ? null : props.handleClick}
      >
          {props.type}
      </button>
    </div>
  )
}

export default Evidence;