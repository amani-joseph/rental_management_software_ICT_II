type Config = {
  url: string;
  method: "POST" | "GET" | "PUT" | "DELETE" | "PATCH"; // extend as needed
  headers: {
    "Content-Type": string;
    "Access-Control-Allow-Origin"?: string;
    [key: string]: string | undefined;
  };
};
