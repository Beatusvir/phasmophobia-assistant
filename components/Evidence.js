function Evidence(props) {
  return (
    <div className="col-md-4">
      <button
        data-type={props.type}
        className={`phass__evidence ${props.disabled ? 'phass__evidence--disabled' : ''} ${props.selected ? 'phass__evidence--selected' : ''}`}
        onClick={props.disabled ? null : props.handleClick}
      >
          <div className="phass__disabled"></div>
          <img src={props.icon} />
          {props.type}
      </button>
    </div>
  )
}

export default Evidence;