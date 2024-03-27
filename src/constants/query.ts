const staleTime = {
  BASIC: 1000 * 60 * 30, // 30분
};

const queryKey = {
  KEY: 'key',
};

export const queryAPI = {
  staleTime,
  queryKey,
} as const;
