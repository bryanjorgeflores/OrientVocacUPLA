export interface MessageStatus {
  message: string;
  status: StatusGeneral;
}

export enum StatusGeneral {
  primary = 'primary',
  secondary = 'secondary',
  terciarity = 'terciarity',
  success = 'success',
  warning = 'warning',
  danger = 'danger',
  dark = 'dark',

}