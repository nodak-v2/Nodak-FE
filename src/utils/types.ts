// T 타입이 string이면 void, 아니면 string을 반환하는 타입
export type StringOrVoid<T> = T extends string ? void : string;
