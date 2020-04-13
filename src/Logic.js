import React from 'react';
function Notification({ text, status }) {
    return (
      <div>
        {(() => {
          switch (status) {
            case 'Home':
              return <Home text={text} />;
            case 'Procedure':
              return <Procedure text={text} />;
            case 'Qr':
              return <Qr text={text} />;
              case 'Track':
              return <Track text={text} />;
              case 'Suggestions':
              return <Suggestions text={text} />;
            default:
              return Home;
          }
        })()}
      </div>
    );
  }
  export default function Top3() {
      return(
          <div>
              <Notification />
              </div>
      )
  }


  import React from "react";

const AuthButton = props => {
  let { isLoggedIn } = props;
  switch (isLoggedIn) {
    case true:
      return <button>Logout</button>;
      break;
    case false:
      return <button>Login</button>;
      break;
    default:
      return null;
  }
};
export default AuthButton;