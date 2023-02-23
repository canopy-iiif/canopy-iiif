export type ObjectLiteral =
  | {
      [key: string]: never;
    }
  | {
      [key: string]: string[];
    };
