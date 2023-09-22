interface TableColums {
    label: string;
    field: string;
    width?: string | number;
    children?: TableColums[];
    formatter?: Function;
}
declare const _sfc_main: import("vue").DefineComponent<{}, {
    props: {
        pageSize: number;
        currentPage: number;
        total: number;
        data: object[];
        columns: TableColums[];
        align: string;
        headerAlign: string;
        maxHeight?: string | number | undefined;
        height?: string | number | undefined;
        loading: boolean;
        pagination: object;
        selection: boolean;
    };
    form: {
        name: string;
    };
    elTableRef: import("vue").Ref<any>;
    pageSizeRef: import("vue").Ref<number>;
    currentPageRef: import("vue").Ref<number>;
    emit: (event: "update:current-page" | "update:page-size" | "register" | "search", ...args: any[]) => void;
    pagination: import("vue").ComputedRef<{
        small: boolean;
        background: boolean;
        pagerCount: number;
        layout: string;
        pageSizes: number[];
        disabled: boolean;
        hideOnSinglePage: boolean;
    } & object>;
    search: () => void;
    ElTableColumnRender: import("vue").DefineComponent<{
        data: {
            type: null;
            required: false;
        };
        align: {
            type: StringConstructor;
            required: false;
        };
        headerAlign: {
            type: StringConstructor;
            required: false;
        };
    }, {
        props: {
            data?: any;
            align?: string | undefined;
            headerAlign?: string | undefined;
        };
    }, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: null;
            required: false;
        };
        align: {
            type: StringConstructor;
            required: false;
        };
        headerAlign: {
            type: StringConstructor;
            required: false;
        };
    }>>, {}>;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:current-page" | "update:page-size" | "register" | "search")[], "search" | "update:current-page" | "update:page-size" | "register", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    "onUpdate:current-page"?: ((...args: any[]) => any) | undefined;
    "onUpdate:page-size"?: ((...args: any[]) => any) | undefined;
    onRegister?: ((...args: any[]) => any) | undefined;
    onSearch?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
