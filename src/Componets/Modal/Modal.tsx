import React from 'react';


interface Props  extends React.PropsWithChildren{
  show: boolean;
  title: string;
  onClose: React.MouseEventHandler;
  buttons:{ type: string; label: string; onClick: () => void };
}
const Modal: React.FC<Props> = ({show,title , onClose, children, buttons = []}) => {
  const onInnerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };
  return (
    <>

      <div className="modal show" style={{display: show ? 'block': 'none'}} onClick={onClose}>
        <div className="modal-dialog" onClick={onInnerClick}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{title}</h1>
              <button type="button" className="close" onClick={onClose}>
                <span aria-hidden="true">x</span>
              </button>
            </div>
            <div className="modal-body">{children}</div>
            <div className="modal-footer">
              {buttons.map((button, index) => (
                <button
                  key= {index}
                  type="button"
                  className={`btn btn-${button.type}`}
                  onClick={button.onClick}
                >
                  {button.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default Modal;