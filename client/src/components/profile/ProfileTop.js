import React from 'react';
import PropTypes from 'prop-types';

const ProfileTop = ({
  profile: {
    firstName,
  middleName,
  lastName,
  gender,
  languages,
  dob,
  freqHospital,
    user: { name, avatar }
  }
}) => {
  return (
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      <p className="lead">
        {firstName} {middleName} {lastName}
      </p>
      <p>{gender}</p>
      <p>{dob}</p>
      <p>{languages}</p>
      <p>{freqHospital}</p>
    </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileTop;
