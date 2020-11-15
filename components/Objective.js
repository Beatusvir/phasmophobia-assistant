export default function Objective(props) {
  return (
    <div className="custom-control custom-checkbox objective-checkbox">
      <input type="checkbox" onChange={props.handleMouseClick} value={props.name} className="custom-control-input" id={`checkbox_${props.name}`} checked={props.checked} />
      <label className="custom-control-label" htmlFor={`checkbox_${props.name}`}>{props.name}</label>
    </div>
  )
}