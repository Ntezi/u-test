import {Installment} from "../../../api/entity/Installment";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const installmentsApi = createApi({
	reducerPath: 'installmentsApi',
	baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api' }),
	endpoints: (builder) => ({
		getInstallments: builder.query<Array<Installment>, Installment>({
			query: (input) => ({
				url: 'installments',
				method: 'POST',
				body: input,
			}),
		}),
	}),
});

// @ts-ignore
export const { useGetInstallmentsQuery } = installmentsApi;
