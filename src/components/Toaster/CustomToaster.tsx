import { toast, Toaster, ToastBar } from "react-hot-toast";
// styles
import "./CustomToaster.scss";

const CustomToaster = () => {
  return (
    <>
      {" "}
      <Toaster
        toastOptions={{
          className: "toast",
          duration: 4000,
          error: {
            iconTheme: {
              primary: "#ee7272",
              secondary: "#fff",
            },
          },
        }}
        containerStyle={{ top: "20%" }}
      >
        {(t) => (
          <ToastBar
            toast={t}
            style={{
              ...t.style,
              animation: t.visible
                ? "toast-enter 0.5s ease"
                : "toast-exit 1s ease",
              fontFamily: `"Roboto Mono", monospace`,
              fontWeight: 600,
              borderRadius: "1px",
              color: "rgb(20, 20, 20)",
            }}
          >
            {({ icon, message }) => (
              <>
                {icon}
                {message}
                {t.type !== "loading" && (
                  <button
                    className="toast-btn"
                    onClick={() => toast.dismiss(t.id)}
                  ></button>
                )}
              </>
            )}
          </ToastBar>
        )}
      </Toaster>
    </>
  );
};

export default CustomToaster;
