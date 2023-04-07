export type ObjectLiteral =
  | {
      [key: string]: never;
    }
  | {
      [key: string]: string;
    }
  | {
      [key: string]: string[];
    };
