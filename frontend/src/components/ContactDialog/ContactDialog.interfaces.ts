export interface IContactDialog {
  isOpen: boolean;
  onClose: () => void;
}

export interface IForm {
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
}