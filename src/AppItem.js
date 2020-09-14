import React from 'react';


class AppItem extends React.Component{


  render(){
    const { url } = this.props.data; 
    return(

      <div className="app-item">
        <img src={url} alt="App Image" />
      </div>

    )

  }


}


export default AppItem;