import { sendConfirmAlert } from "../../utils/externalLibs/sweetAlertUtils";

async function logOut(navigate) {
    const alert = await sendConfirmAlert('Deseja realmente sair?', "Sair");
    if (alert.isConfirmed) {
        localStorage.removeItem("TrackItLogin");
        navigate("/");
    }
}

export {
    logOut,
}