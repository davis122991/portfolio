import './Button.css';

const Button = ({ children, primary, submit, loading = false }) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={`btn ${primary && 'primary'} ${loading && 'disable'}`}
      disabled={loading}
    >
      {children}
    </button>
  );
};

export default Button;
