import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const BtnAbout = ({
    children,onClick,className ,disabled,active,
}) => {

    // const classes = className(
    //     'btn',
    //     className,
    //     { active },
    // );
    return(
        <BtnAbout>
        {/*className={classes}*/}
        disabled={disabled}
        onClick={onClick}
        >{children}
        </BtnAbout>
    );
};

BtnAbout.propTypes = {
    children:PropTypes.node,
    onClick:PropTypes.func,
    className:PropTypes.string,
    disabled:PropTypes.bool,
    active:PropTypes.bool,
};

BtnAbout.defaultProps = {
    children: 'Default button',
    onClick: () => {},
    className:'',
    disabled: false,
    active:false,
};

export default BtnAbout;