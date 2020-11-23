import Hammer from 'react-hammerjs';

function Ghost(props) {
  return (
    <Hammer onTap={() => props.handleMouseOver(props.type)}>
      <li className="phass__ghost" onMouseOver={() => props.handleMouseOver(props.type)}>
        {props.type}
      </li>
    </Hammer>
  )
}

export default Ghost;
