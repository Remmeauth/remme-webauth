import React, { Fragment } from "react";
import { Avatar, Dropdown, Icon, Menu } from 'antd';

import { SmartLink } from "../../components";

export default ({ item }) => {
  if (item.items) {
   return (
     <Fragment>
       <li>
         { item.icon && <Avatar icon={item.icon} /> }
         <Dropdown
           trigger={['hover']}
           key={item.title}
           overlay={
             <Menu>
               { item.items.map( subitem =>
                 <Menu.Item key={subitem.title}>
                     <SmartLink
                      link={subitem.link}
                      action={subitem.action}
                     >
                       {subitem.title}
                     </SmartLink>
                 </Menu.Item>
               )}
             </Menu>
           }>
           <span className="name">{item.title}<Icon type="down" /></span>
         </Dropdown>
     </li>
   </Fragment>
  )} else {
    return (
      <li>
        <SmartLink link={item.link} linkClass={item.class} >
            {item.title}
        </SmartLink>
      </li>
    )
  }
}
