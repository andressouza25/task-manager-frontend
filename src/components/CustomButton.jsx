import "./CustomButton.scss";

const CustomButton = ({ onclick, children }) => {
    return (
        <div className="custom-button-container" onclick={onclick}>
            {children}
        </div>
    );
};

export default CustomButton;
