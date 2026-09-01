export type FormState = {
  fullName: string
  email: string
  contactNumber: string
  dateOfBirth: string
  experience: string
  preferredRole: string[]
  preferredRegion: string
  salary: number
  contactMethod: string
  passportFile: File | null
  comment: string
  accept: boolean
}

export type Errors = Partial<Record<keyof FormState, string>>

export const initialForm: FormState = {
  fullName: '',
  email: '',
  contactNumber: '',
  dateOfBirth: '',
  experience: 'No experience',
  preferredRole: [],
  preferredRegion: '',
  salary: 700,
  contactMethod: 'Email',
  passportFile: null,
  comment: '',
  accept: false,
}

export type ChangeHandler = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  >,
) => void