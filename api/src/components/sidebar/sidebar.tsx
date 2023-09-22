import React from 'react';

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <aside className="grid-aside">
      <nav>
        <ul className="nav-sidebar">
          <li><a href="#"><img src="/icons/icon_menu.png" alt="menu" className="icon"/></a></li>
          <li><a href="#"><img src="/icons/icon_lock.png" alt="lock" className="icon"/>Permissões</a></li>
          <li><a href="#"><img src="/icons/icon_detail.png" alt="detail" className="icon"/>Editar Ordem</a></li>
          <li><a href="#"><img src="/icons/icon_notification.png" alt="notification" className="icon"/>Notificações</a></li>
          <li><a href="#"><img src="/icons/icon_graph.png" alt="graph" className="icon"/>Gráficos</a></li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
