import { FC } from "react";
import { NavList, NavLink } from "./styles";
import HomeIcon from "../../shared/icons/home-icon";
import TasksIcon from "../../shared/icons/task-icon";
import ProjectIcon from "../../shared/icons/project-icon";

const HeaderNav: FC = () => {

    return (
        <nav>
            <NavList>
                <li >
                    <NavLink href={'/'}>
                    <HomeIcon width="24px" height="24px" fill="none" />
                     <span>Главная </span>
                    </NavLink>
                </li>
                <li >
                    <NavLink href={'/'}>
                    <TasksIcon  width="24px" height="24px" fill="#fff" />
                    <span>Мои задачи</span>
                        
                    </NavLink>
                </li>
                <li >
                    <NavLink href={'/'}>
                    <ProjectIcon  width="24px" height="24px" fill="#fff"/>
                    <span>Проекты</span>
                    </NavLink>
                </li>
            </NavList>
        </nav>
    );
};

export default HeaderNav;