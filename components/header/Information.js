import Icon from '../assets/Icon';

const Information = props =>{
  return (
    <section id="information">
      <Icon onClick={() => props.close()} iconName="fas fa-times" iconTitle="Cierra la ventana" id="close" />
      <h5
      style={{
        margin: props.margin.length > 0 && props.window === 4 ? '15px auto' : '30px auto'
      }}
      >{props.title}</h5>
      {props.innerHTML}
    </section>
  )
}

export default Information;