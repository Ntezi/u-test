import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {Account} from "../../../api/entity/Account";

export const accountsApi = createApi({
	reducerPath: 'installmentsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
	endpoints: (builder) => ({
		getInstallments: builder.query<Array<Account>, Account>({
			query: (input) => ({
				url: 'accounts',
				method: 'POST',
				body: input,
			}),
		}),
	}),
});

// @ts-ignore
export const { useGetInstallmentsQuery } = accountsApi;
