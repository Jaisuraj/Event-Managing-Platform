import React, { useState } from 'react'
import { IFormState } from '../../interfaces/common'
import Switch from '../common/Switch.tsx'
import TextInput from '../common/TextInput.tsx'
import Dropdown from '../common/Dropdown.tsx'
import Button from '../common/Button.tsx'
import { AVAILABLE_PLACE_TYPES } from '../../constants/common.ts'
import "./NearbyForm.css"

const NearByForm = (
    {
        onSubmit,
        isLoading
    }: {
        onSubmit: (data: IFormState) => void
        isLoading?: boolean
    }
) => {
    const [formData, setFormData] = useState<IFormState>({type: AVAILABLE_PLACE_TYPES[0].value})

    const submitForm = () => {
        onSubmit(formData)
    }

    const setValue = (key: keyof IFormState, value: string | boolean) => {
        setFormData({...formData, [key]: value || undefined})
    } 
    
    return (
        <div className="side-container" data-test="nearbyForm">
            <div className="side-container__form-element">
                <Dropdown
                    id="type-select"
                    name="type"
                    labelKey="label"
                    valueKey="value"
                    options={AVAILABLE_PLACE_TYPES}
                    placeholder="Select Type"
                    onChange={(value) => setValue('type', value)}
                    data-test="nearbyFormDD"
                />
            </div>
            <div className="side-container__form-element">
                <TextInput
                    id="keyword-input"
                    name="keyword"
                    placeholder="Enter Keyword (Optional)"
                    onChange={(value) => setValue('searchKey', value)}
                    data-test="nearbyFormTextInput"
                />
            </div>
            <div className="side-container__form-element">
                    
            </div>
            
            <div>
                <Button 
                    value="Search" 
                    onClick={submitForm} 
                    isLoading={isLoading}
                    data-test="nearbyFormButton"
                />
            </div>
        </div>
    )
}

export default NearByForm
