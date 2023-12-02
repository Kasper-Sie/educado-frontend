import React from 'react';

const AccountDeletionRequest: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '600px',
    margin: '0 auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
  };

  const headingStyle: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '1.5rem',
    marginBottom: '20px',
  };

  const emailLinkStyle: React.CSSProperties = {
    textDecoration: 'underline',
    color: 'blue',
  };

  return (
    <div style={containerStyle}>
      <h2 style={headingStyle}>Account Deletion Request</h2>
      <p>
        To delete your entire account and associated data on Educado, please contact us at{' '}
        <a href="mailto:app.educado@gmail.com" style={emailLinkStyle}>
          app.educado@gmail.com
        </a>.
      </p>
      <p>
        Upon processing your request, all personal identifiable information and data associated with your account will
        be permanently removed from our systems.
      </p>
      <p>
        For any further inquiries or assistance, please don't hesitate to contact us via{' '}
        <a href="mailto:app.educado@gmail.com" style={emailLinkStyle}>
          app.educado@gmail.com
        </a>.
      </p>
    </div>
  );
};

export default AccountDeletionRequest;
