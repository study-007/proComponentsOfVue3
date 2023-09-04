declare const _sfc_main: import("vue").DefineComponent<{}, {
    slots: Readonly<{
        [name: string]: import("vue").Slot | undefined;
    }>;
    attrs: {
        [x: string]: unknown;
    };
    props: {
        title: string;
        width?: string | number | undefined;
        isDraggable: boolean;
        modelValue: boolean;
        hiddenFullBtn: boolean;
        confirmText: string;
        cancelText: string;
        loading: boolean;
    };
    emits: {
        (e: 'update:modelValue'): void;
        (e: 'close'): void;
        (e: 'confirm'): void;
    };
    isFullscreen: import("vue").Ref<boolean>;
    isFullScreenBtn: import("vue").ComputedRef<boolean>;
    handleFullscreen: () => void;
    handleClose: () => void;
    handleConfirm: () => void;
}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:modelValue" | "close" | "confirm")[], "update:modelValue" | "close" | "confirm", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{}>> & {
    "onUpdate:modelValue"?: ((...args: any[]) => any) | undefined;
    onClose?: ((...args: any[]) => any) | undefined;
    onConfirm?: ((...args: any[]) => any) | undefined;
}, {}>;
export default _sfc_main;
