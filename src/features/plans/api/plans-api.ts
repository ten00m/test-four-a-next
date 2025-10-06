import {baseApi} from "@/src/shared/api";
import {IPlans} from "@/src/shared/types/plan";

export const plansApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getPlans: build.query<IPlans[], void>({
            query: () => ({
                url: '/GetTariffs',
            }),
        }),
    }),
});

export const {useGetPlansQuery} = plansApi;