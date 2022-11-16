import React from 'react';
import "./Form.scss";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFormContext } from "react-hook-form";
import showPasswordIcon from "../../assets/icons/showPassword.png";
import hidePasswordIcon from "../../assets/icons/hidePassword.png";
import dateIcon from "../../assets/icons/calendar.png";
import downIcon from "../../assets/icons/down.png";
import Error from '../Error/Error';
import PropTypes from "prop-types";
import { useModal } from '../../hooks/useModal';
import { useDisableClick } from '../../hooks/useDisableClick';
import { AcceptButton, CancelButton } from '../Buttons/Buttons';
import DropdownBase from '../DropdownBase/DropdownBase';
export default function Form() {
    return null;
}


// input
function Input({ placeHolder, type, icon, name, ...rest }) {
    const { register, formState: { errors } } = useFormContext();
    const [show, setShow] = useState(type === "password" ? false : true);
    const handleClickTogglePassword = () => {
        setShow(!show);
    };
    return (
        <div className="formInput">
            <input
                type={show ? "text" : "password"}
                className='formInput__input' placeholder=" "
                style={{ border: `${errors[name] ? "0.8px solid red" : ""}` }}
                autoComplete="off"
                {...rest}
                {...register(name)}
            />
            <span
                className='formInput__placeHolder'
                style={{ color: `${errors[name] ? "red" : ""}` }}
            >{placeHolder}</span>
            {icon &&
                <div className='formInput__icon'>
                    <img src={icon} alt="" />
                </div>}
            {
                type === "password" &&
                <div className='formInput__icon' onClick={handleClickTogglePassword}>
                    <img src={show ? showPasswordIcon : hidePasswordIcon} alt="Fitfood Password icon" />
                </div>
            }
            {errors[`${name}`] && <Error errorMessage={errors[`${name}`].message} />}
        </div>
    );
}
Input.propTypes = {
    placeHolder: PropTypes.string.isRequired,
    type: PropTypes.string,
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
};
Form.Input = Input;

//input date
function InputDate({ placeHolder, name, ...rest }) {
    const { register, formState: { errors } } = useFormContext();

    return (
        <div className="formInput">
            <input type="text" className='formInput__input'
                onFocus={(e) => (e.target.type = "date")}
                onBlur={(e) => (e.target.type = "text")}
                placeholder=" "
                autoComplete="off"
                style={{ border: `${errors[name] ? "0.8px solid red" : ""}` }}
                {...rest}
                {...register(name)} />
            <span className='formInput__placeHolder'
                style={{ color: `${errors[name] ? "red" : ""}` }}
            >{placeHolder}</span>
            <div className='formInput__icon'>
                <img src={dateIcon} alt="" />
            </div>
            {errors[`${name}`] && <Error errorMessage={errors[`${name}`].message} />}
        </div>
    );

};

InputDate.propTypes = {
    placeHolder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};
Form.InputDate = InputDate;

//dropdown
function Dropdown({ data, isLoading = false, trigger, placeHolder, icon, name, ...rest }) {

    const { modalRef, activeModalRef, open, rect, setOpen } = useModal();

    //useFormComtext api react hook form
    const { register, setValue, getValues, watch, formState: { errors } } = useFormContext();
    //handle open modal


    function getDataValueWithKey(key, data) {
        return data.filter(item => Number(item.id) === Number(key))[0]?.value;
    }
    const handleClickDropdown = (e) => {
        setValue(name, e.target.getAttribute("data-id"));
        setOpen(false);
    };
    const handleClickDropdownValue = (e) => {
        trigger && watch(trigger) && e.target.nextSibling.focus();
        !trigger && e.target.nextSibling.focus();
    };

    return (
        <>
            <div className="formInput formDropdown" ref={activeModalRef}>
                <span className='formInput__dropdownValue' onClick={handleClickDropdownValue}>{getValues(name) ? getDataValueWithKey(getValues(name), data) : ""}</span>
                <input type="text" className='formInput__input '
                    placeholder=" "
                    readOnly
                    autoComplete="off"
                    {...rest}
                    {...register(name)}
                    style={trigger ? {
                        pointerEvents: `${watch(trigger) ? "all" : "none"}`,
                        opacity: `${watch(trigger) ? 1 : 0.4}`,
                        border: `${errors[name] ? "0.8px solid red" : ""}`
                    } :
                        { border: `${errors[name] ? "0.8px solid red" : ""}` }}

                />
                <span className='formInput__placeHolder'
                    style={{ color: `${errors[name] ? "red" : ""}` }}
                >{placeHolder}
                    {(isLoading) &&
                        <i className="fa fa-spinner fa-spin" style={{ marginLeft: "20px" }}></i>
                    }
                </span>
                <div className='formInput__icon'>
                    <img src={downIcon} alt="Fitfood Dropdown Icon" />
                </div>
                {errors[`${name}`] && <Error errorMessage={errors[`${name}`].message} />}
            </div>
            {(open && data) && 
            <DropdownBase rect={rect}>
                <div className="formInput__dropdown" onClick={handleClickDropdown} ref={modalRef}>
                    {(isLoading) &&
                        <div className='formInput__dropdown--loadingIcon'>
                            <i className="fa fa-spinner fa-spin fa-2x"></i>
                        </div>
                    }
                    {(!isLoading && data) && data.map((item) => {
                        return <span key={item.id} data-id={item.id}>{item.value}</span>;
                    })}
                </div>
            </DropdownBase>}
       
        </>
    );
}

Dropdown.propTypes = {
    data: PropTypes.array,
    isLoading: PropTypes.bool,
    trigger: PropTypes.string,
    placeHolder: PropTypes.string.isRequired,
    icon: PropTypes.string,
    name: PropTypes.string.isRequired,
};
Form.Dropdown = Dropdown;


//Forgot Password Text
function ForgotPasswordText() {
    return (
        <div className='formForgotPasswordText'>
            <Link>Quên mật khẩu?</Link>
        </div>
    );
}
Form.ForgotPasswordText = ForgotPasswordText;

//Submit button
function SubmitButton({ text, isLoading,styleButton }) {
    const textButton = isLoading ? "" : text;
    useDisableClick(isLoading);
    return (
        <AcceptButton
            type='submit'
            width="100%"
            styleButton={{ opacity: `${isLoading ? "0.6" : "1"}`, ...styleButton }}
        >
            {isLoading && <i className="fa fa-spinner fa-spin"></i>}
            {textButton}
        </AcceptButton>
    );
}
SubmitButton.propTypes = {
    text: PropTypes.string.isRequired,
};
Form.SubmitButton = SubmitButton;

//paginate step form
function PaginateStepForm({ isFirstStep, isLastStep, back, textSubmit, isLoading }) {
    const textButton = isLoading ? "" : isLastStep ? textSubmit : "Tiếp tục";
    useDisableClick(isLoading);
    return (
        <div className="formPaginateStepForm" style={{ opacity: `${isLoading ? "0.6" : "1"}` }}>
            {!isFirstStep &&
                <CancelButton type="button" onClick={back} width="48%">Trở về</CancelButton>}
            <AcceptButton
                type="submit"
                width="48%"
                styleButton={{marginLeft:"auto"}}
            >
                {isLoading && <i className="fa fa-spinner fa-spin"></i>}
                {textButton}
            </AcceptButton>
        </div>
    );
}
PaginateStepForm.propTypes = {
    isFirstStep: PropTypes.bool.isRequired,
    isLastStep: PropTypes.bool.isRequired,
    back: PropTypes.func.isRequired,
    textSubmit: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

Form.PaginateStepForm = PaginateStepForm;
