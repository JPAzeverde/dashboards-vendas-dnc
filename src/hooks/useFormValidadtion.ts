import { useState, useEffect } from 'react'
import type { InputProps } from '@/types'

export const useFormValidation = (inputs: InputProps[]) => {
    const [formValues, setFormValues] = useState(inputs.map((input) => input.value || ''))
    const [formValid, setFormValid] = useState(false)

    useEffect(() =>{
        const allFieldsValid = inputs.every((inputs, index) => {
            const value = formValues[index]
            if (inputs.required && !value){
                return false
            }
            if(inputs.type == 'email'){
                return /\S+@\S+\.\S+/.test(String(formValues[index]))
            }
            if (inputs.type == 'password'){
                const password = String(value)
                const hasCorrectLength = password.length > 7 && password.length < 17
                const hasUppercaseLetter = /[A-Z]/.test(password)
                const hasEspecialCharacter =  /[`!@#$%^&*()-_=+{};:'",<.>/?]/.test(password)
                const hasNumber = /\d/.test(password)
                return hasCorrectLength && hasUppercaseLetter && hasEspecialCharacter && hasNumber
            }
            return true
        })
        setFormValid(allFieldsValid)
    }, [formValues, inputs])

    const handleChange = (index: number, value: string) =>{
        setFormValues((prevValues =>{
            const newValues = [...prevValues]
            newValues[index] = value
            return newValues

        }))
    }

    return {formValues, formValid, handleChange}
 }