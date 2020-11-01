function Evidence(props) {
  return (
    <div className="col-6 col-lg-4">
      <button
        data-type={props.type}
        className={`phass__evidence ${props.disabled ? 'phass__evidence--disabled' : ''} ${props.selected ? 'phass__evidence--selected' : ''}`}
        onClick={props.disabled ? null : props.handleClick}
      >
          <div className="phass__disabled"></div>
          <img src={props.icon} />
          <span className="phass__evidence-text">
            {props.type}
          </span>
      </button>
    </div>
  )
}

export default Evidence;