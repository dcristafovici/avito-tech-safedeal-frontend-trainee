import React from 'react';
import AppItem from './AppItem'


class AppItems extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      error: false,
      items: [], 
      isLoaded: false
    }
  }

  componentDidMount(){

    fetch('https://boiling-refuge-66454.herokuapp.com/images')
      .then(res => res.json())
      .then(
        (result) =>{
          this.setState({

            isLoading: true,
            items: result

          })
        },
        (error) =>{
          this.setState({
            isLoading: true,
            error
          })
        }
      )
  }

  renderItems = () => {
    const {error, items, isLoading} = this.state;
    let itemsTemplate = null;
    if(error){
      itemsTemplate = <div>Ошибка: {error.message}</div>;
    }
    else if(!isLoading){
      itemsTemplate = <div>Загрузка...</div>
    }

    else{
      itemsTemplate = items.map(item => {
        return <AppItem data={item} key={item.id} />
      })
    }

    return itemsTemplate;
  }
  render(){

    // const {error, items, isLoading} = this.state
    // if(error){
    //   return <div>Ошибка: {error.message}</div>
    // }
    // else if(!isLoading){
    //   return <div>Загрузка...</div>
    // }
    // else{
     


      return(

        <div className="app-items">
          {this.renderItems()}
        </div>
      )

    }


}


export default AppItems;