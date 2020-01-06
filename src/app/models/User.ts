export interface User {
  firstName: string;
  lastName: string; // ? means attribute is optional
  email: string;
  isActive?: boolean;
  registered?: any;
  hide?: boolean;
}
