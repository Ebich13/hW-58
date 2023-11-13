import React, {FC} from 'react';




interface Props  extends React.PropsWithChildren{
  type: 'primary' | 'success' | 'danger' | 'warning';
  onDismiss?: () => void;
  clickDismissible?: boolean;
}

const Alert: FC<Props> = ({type, onDismiss, clickDismissible, children}) => {
  const handleDismiss = () => {
    if (onDismiss) {
      onDismiss();
    }
  };

  return (

    <div
      className={`alert alert-${type} ${clickDismissible ? 'click-dismissable' : ''}`}
      role="alert"
      onClick={clickDismissible ? handleDismiss : undefined}
    >
      {children}
      {onDismiss && !clickDismissible && (
        <button type="button" className="close" onClick={handleDismiss}>
          <span  aria-hidden="true">X</span>
        </button>
      )}
    </div>
  );
};

export default Alert;