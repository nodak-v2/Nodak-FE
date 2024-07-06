// T 타입이 null이거나 undefined일 때 string으로 변환.
export type NullableToString<T> = T extends NonNullable<T> ? void : string;
