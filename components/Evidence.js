function Evidence(props) {
  return (
    <div className="col-6 col-lg-4">
      <button
        className={`phass__evidence ${props.disabled ? 'phass__evidence--disabled' : ''} ${props.selected ? 'phass__evidence--selected' : ''}`}
        data-evidence-type={props.type}
        onClick={props.disabled ? null : () => props.handleClick(event, props.type)}
      >
          <img className={`phass__evidence-hide ${!props.hidden ? '' : 'phass__evidence-hide--selected'}`} src="/eye.png" title="Hide evidence" />
          <div className="phass__disabled"></div>
          <img className="phass__evidence-icon" src={props.icon} />
          <span className="phass__evidence-text">
            {props.type}
          </span>
      </button>
    </div>
  )
}

export default Evidence;