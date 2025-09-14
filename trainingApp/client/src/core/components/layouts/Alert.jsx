import React from 'react'
import { useSelector } from 'react-redux';


export default function Alert() {

const alerts = useSelector((state) => state.coreReducer ?? []);

console.log("alerts", alerts);

if (!alerts?.length) return null;

  return (
   <div className="alert-wrapper" aria-live="polite" aria-atomic="true">
      {alerts.map((a) => {
        const type = a.alertType ?? a.type ?? "info"; // supports both keys
        return (
          <div key={a.id} className={`alert alert-${type}`} role="alert">
            {a.msg}
          </div>
        );
      })}
    </div>
  )

}