import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './Drawer.module.css';
import Backdrop from '../../Ui/Backdrop/Backdrop';


class Drawer extends Component {
    clickHandler = () => {
        const { onClose } = this.props;
        onClose();
    }

    renderLinks(links) {
        return links.map((link, index) => (
            <li key={index}>
                <NavLink
                    to={link.to}
                    exact={link.exact}
                    activeClassName={classes.active}
                    onClick={this.clickHandler}
                >
                    {link.label}
                </NavLink>
            </li>
        ));
    }

    render() {
        const cls = [classes.Drawer];
        const { isOpen, onClose } = this.props;

        if (!isOpen) {
            cls.push(classes.close);
        }

        const links = [
            { to: '/', label: 'Список', exact: true },
        ];

        if (this.props.isAuthenticated) {
            links.push({ to: '/quiz-creator', label: 'Создать тест', exact: false })
            links.push({ to: '/logout', label: 'Выйти', exact: false })
        } else {
            links.push({ to: '/auth', label: 'Авторизация', exact: false },)
        }

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks(links)}
                    </ul>
                </nav>
                {isOpen ? <Backdrop onClick={onClose} /> : null}
            </>

        );
    }
}

Drawer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default Drawer;
