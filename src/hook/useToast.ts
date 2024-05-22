import { OptionsObject, SnackbarKey, useSnackbar } from "notistack";
import { useEffect, useState } from "react";

interface Toast {
  key: SnackbarKey;
  message: string;
  options?: OptionsObject;
}

const useToast = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const [notifications, setNotifications] = useState<Toast[]>([]);

  const addNotification = (message: string, options?: OptionsObject) => {
    const key = enqueueSnackbar(message, options);
    setNotifications((prevNotifications) => [
      ...prevNotifications,
      { key, message, options },
    ]);
  };

  const removeNotification = (key: SnackbarKey) => {
    closeSnackbar(key);
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.key !== key)
    );
  };

  const removeAllNotifications = () => {
    notifications.forEach((notification) => closeSnackbar(notification.key));
    setNotifications([]);
  };

  useEffect(() => {
    const removeListener = (eventKey: SnackbarKey, reason: string) => {
      if (reason === "clickaway") return;
      removeNotification(eventKey);
    };
    notifications.forEach(({ key }) => {
      document.addEventListener(`click${key}`, () =>
        removeListener(key, "manuallyDismissed")
      );
    });
    return () => {
      notifications.forEach(({ key }) => {
        document.removeEventListener(`click${key}`, () =>
          removeListener(key, "manuallyDismissed")
        );
      });
    };
  }, [notifications, removeNotification]);

  return {
    addNotification,
    removeNotification,
    removeAllNotifications,
  };
};

export default useToast;
