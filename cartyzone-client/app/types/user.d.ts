export type UserLoginResponse = {
  access_token?: string;
  statusCode?: number;
  error: boolean;
  success?: boolean;
  errors?: Record<string, string[]>;
  message?: string | string[];
  path?: string;
  timestamp?: string;
};
