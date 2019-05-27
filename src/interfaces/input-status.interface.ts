interface MessageStatus {
  message: string;
  status: string;
}

enum StatusGeneral {
  primary = 'primary',
  secondary = 'secondary',
  terciarity = 'terciarity',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  dark = 'dark',

}

export {
  MessageStatus,
  StatusGeneral,

};
