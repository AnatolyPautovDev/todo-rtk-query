import { baseApi } from "@/app/baseApi.ts"

export const securityApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getCaptchaUrl: builder.query<{ url: string }, void>({
      query: () => ({ method: "post", url: "security/get-captcha-url" }),
    }),
  }),
})

export const { useLazyGetCaptchaUrlQuery } = securityApi
