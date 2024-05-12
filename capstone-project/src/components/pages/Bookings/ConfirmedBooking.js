import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ConfirmedBooking = () => {
  return (
    <div className="container confirmed-booking">
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>🎉 Your reservation has been confirmed</h2>
      <p>We are excited to have you as our guest.</p>
      <p>You will receive an email shortly with all the details.</p>
    </div>
  );
};

export default ConfirmedBooking;
