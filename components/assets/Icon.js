function Icon(props){
    const { iconName, iconTitle, iconStyle } = props;
    return (
      <i className={iconName} title={iconTitle} style={iconStyle}></i>
    )
}

export default Icon;