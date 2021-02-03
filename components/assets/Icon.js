function Icon(props){
    const { iconName, iconTitle, iconStyle, id, onClick } = props;
    return (
      <i onClick={onClick} className={iconName} title={iconTitle} style={iconStyle} id={id}></i>
    )
}

export default Icon;