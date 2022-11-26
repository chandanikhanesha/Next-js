export default function gtag_report_conversion(url) {
  console.log("here");
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url;
    }
  };
  gtag("event", "conversion", {
    send_to: "AW-10835311766/S_BWCNDCj4MYEJb51q4o",
    event_callback: callback,
  });
  return false;
}
