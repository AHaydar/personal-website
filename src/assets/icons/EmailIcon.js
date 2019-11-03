import React from 'react';

function EmailIcon() {
  return (
    <a
      href="mailto:ali.haydar85@gmail.com"
      target="_blank"
      rel="noopener noreferrer">
      <svg viewBox="0 0 24 24" className="social-media-icon social-media-email">
        <path
          d="M0 3v18h24v-18h-24zm22 16l-6.526-6.618-3.445 3.483-3.418-3.525-6.611 6.66 5.051-8-5.051-6 10.029 7.446 9.971-7.446-4.998 6.01 4.998 7.99z"
          className="path logo-path"
        />
      </svg>
    </a>
  );
}

export default EmailIcon;
