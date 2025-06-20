export interface Theme{
    appBackground: string
    appColor: string
    appDefaultStroke: string
    appLogo: string
    appSkeletonFrom: string
    appSkeletonTo: string
    buttons: {
        alert: string
        alertColor: string
        alertHover: string
        disabled: string
        disabledColor: string
        primary: string
        primaryColor:stringtring
        primaryHover: string
    }
    card:{
        alert: string
        background: string
        border: string
        success: string
        warning: string
    }
    textInput: {
        active: string
        activeColor: string
        borderColor: string
        disabled: string
        disabledColor: string
        disabledBorderColor: string
        placeholderColor: string
    }
    typographies: {
        error: string
        subtitle: string
        success: string
    }
}