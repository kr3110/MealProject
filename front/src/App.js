import React         from 'react';
import Navigation    from './navigation';
import './style/index.css'

export default (props) =>  {
    return (
          <div>
              <Navigation/>
              {props.children}
          </div>
    );
};