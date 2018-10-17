import React, { Fragment } from "react";
import { Avatar, Dropdown, Icon, Menu } from 'antd';

import { SmartLink } from "../../components";

export default ({ item, isLoggedIn, name, logout }) => {
    if (item.isLoggedIn === isLoggedIn || item.isLoggedIn === undefined) {
      if (item.items) {
       return (
         <Fragment>
           <li>
             { item.type === 'avatar' &&
                <Avatar icon="user" />
             }
             <Dropdown
               trigger={['hover']}
               key={item.title}
               overlay={
                 <Menu>
                   {item.items.map( subitem =>
                     <Menu.Item key={subitem.title}>
                       { subitem.type === 'logout' ?
                         <span onClick={() => logout()}>
                           {subitem.title}
                         </span>
                         :
                         <SmartLink
                             link={subitem.link} >
                             {subitem.title}
                         </SmartLink>
                        }
                     </Menu.Item>
                   )}
                 </Menu>
               }>
               <span className="name">{ item.type === 'avatar' ? name : item.title } <Icon type="down" /></span>
             </Dropdown>
         </li>
       </Fragment>
      )} else {
        return (
          <li>
            <SmartLink link={item.link} linkClass={item.type === 'button' ? "button-blue" : "link"} >
                {item.title}
            </SmartLink>
          </li>
        )
      }
    } else {
      return null
    }
}
