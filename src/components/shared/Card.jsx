import PropsType from 'prop-types'

function Card({children, reverse}) {
    // return <div className={`card ${reverse && 'reverse'}`}>{ children }</div>
    return <div className="card" style={{
        backgroundColor: reverse ? 'rgba(0,0,0,0.4)' : '#ffffff',
        color: reverse ? '#ffffff' : '#000000'
    }}>
        { children }
    </div>
}

Card.defaultProps = {
    reverse: false,
}
Card.propsType = {
    children: PropsType.node.isRequired,
    reverse: PropsType.bool
}
export default Card
