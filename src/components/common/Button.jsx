import './Button.css';

const Button = ({ children, primary, submit }) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`btn ${primary && 'primary'}`}
    >
      {children}
    </button>
  );
};

export default Button;
