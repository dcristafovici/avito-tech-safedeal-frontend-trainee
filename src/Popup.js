import React from 'react';


class Popup extends React.Component {

  render(){


    return(

      <div id="popup" className="popup">
        <div className="popup-wrapper">
          <div className="popup-left">
            <div className="popup-image">
              <img src="static/img/assets/app/ab.jpg" alt="Tested" />
            </div>
            <div className="popup-form">
              <form className="form">
                <div className="form-group">
                  <input type="text" placeholder="Ваше имя" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Ваш комментарий" />
                </div>
                <div className="form-group">
                  <button className="button"><span>Оставить комментарий</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="popup-right">
            <div className="popup-comments">
              <div className="popup-comment"><span>18.12.2019</span><span>Отличное фото</span>
              </div>
              <div className="popup-comment"><span>18.03.2020</span><span>Я тут был, очень понравилось</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    )

  }

}

export default Popup;