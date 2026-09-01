import { MessageSquare } from 'lucide-react'
import type { FormState, Errors, ChangeHandler } from '../../../types/form'
import { inputClassFor } from '../../../lib/formUtils'
import { FloatingField } from '../../../components/ui/FloatingField'
import { Textarea } from '../../../components/ui/Textarea'
import { SectionHeader } from '../components/SectionHeader'

type Props = {
  form: FormState
  errors: Errors
  onChange: ChangeHandler
}

export function AdditionalInfoSection({ form, errors, onChange }: Props) {
  return (
    <div className="space-y-4 pt-2">
      <SectionHeader
        step="05"
        title="Additional Information (ข้อมูลเพิ่มเติม)"
        isOptional
      />

      {/* Additional Comments */}
      <div>
        <FloatingField
          label="Additional Comments"
          icon={<MessageSquare className="h-4 w-4" />}
        >
          <Textarea
            name="comment"
            value={form.comment}
            onChange={onChange}
            rows={3}
            placeholder="e.g., Any special requirements, medical considerations, dietary needs, or field skills..."
            className={`pl-11 ${inputClassFor('comment', form, errors)}`}
          />
        </FloatingField>
      </div>
    </div>
  )
}
