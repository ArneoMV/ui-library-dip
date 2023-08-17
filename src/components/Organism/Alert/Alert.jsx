import { useContext } from "react";
import AlertContext from "./alert.context";
import './_alert.scss';
import { ComponentImage, IconImage } from '../../../utilities/images';

const alertStyles = {
  padding: "16px",
  borderRadius: "6px",
  fontSize: "16px",
  fontWeight: 400,
};

const severityStyles = {
  info: {
    background: "#FFFEFE",
    icon: IconImage.info,
  },
  success: {
    background: "#CFF1E9",
    icon: IconImage.success,
  },
  warning: {
    background: "#FAF0CD",
    icon: IconImage.warning,
  },
  error: {
    background: "#FEE7E4",
    icon: IconImage.error,
  },
};

const Alert = () => {
  const { alerts } = useContext(AlertContext);

  if (!alerts || alerts.length === 0) {
    return null;
  }

  return (
    <div className="alert-container">
      {alerts.map((alert) => (
        <div key={alert.id} className="alert" style={{ ...alertStyles, ...severityStyles[alert.type] }}>
          <img src={severityStyles[alert.type].icon} alt="" className="alert-icon" />
          {alert.text}
        </div>
      ))}
    </div>
  );
};

export default Alert;
