import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
});


const makeToast = (type, msg) => {
  Toast.fire({
    icon: type,
    title: msg,
  });
};
export default makeToast;