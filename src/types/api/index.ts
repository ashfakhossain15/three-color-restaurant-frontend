
export interface ApiError {
    error: string;
    message: string;
    code?: number; // Optional status code
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    details?: any; // Optional additional error details
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any; // Allow additional keys
  }
  
  export type RequestOptions = {
    params?: Record<string, string>;
    headers?: Record<string, string>;
    responseType?: 'json' | 'text' | 'blob' | 'arrayBuffer' | 'formData';
    includeCookies?: boolean; // Whether to automatically include cookies in the request
  };
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export type RequestBody = Record<string, any> | FormData;